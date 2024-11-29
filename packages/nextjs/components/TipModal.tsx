"use client";

import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface TipModalProps {
  closeModal: () => void;
  resourceId: any;
}
const TipModal = ({ closeModal, resourceId }: TipModalProps) => {
  const TIP_HUB_ADDRESS = "0xC092864C42548e233e842c013c5e5b55c31cC71b";
  const DECIMALS = 18;
  const [isProcessing, setIsProcessing] = useState(false);
  const { address } = useAccount();

  // Read `allowance` from USDeToken contract
  const { data: allowance, refetch: refetchAllowance } = useScaffoldReadContract({
    contractName: "USDeToken",
    functionName: "allowance",
    args: [address, TIP_HUB_ADDRESS],
  });

  // Write `approve` for USDeToken
  const { writeContractAsync: approve } = useScaffoldWriteContract("USDeToken");

  // Write `tipResource` for TipHub
  const { writeContractAsync: tipResource } = useScaffoldWriteContract("TipHub");

  const handleTip = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const tipAmount = Number(formData.get("tipAmount"));
    const tipAmountInWei = BigInt(tipAmount * 10 ** DECIMALS);

    setIsProcessing(true);

    try {
      if (!allowance || BigInt(allowance) < tipAmountInWei) {
        console.log("Allowance insufficient, approving...");

        await approve({
          functionName: "approve",
          args: [TIP_HUB_ADDRESS, tipAmountInWei],
        });

        // Refetch allowance to ensure it's updated
        await refetchAllowance();
      }

      await tipResource({
        functionName: "tipResource",
        args: [resourceId, tipAmountInWei],
      });
      closeModal();
    } catch (error) {
      console.error("Error during tipping process", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="bg-neutral p-8 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4">Send a Tip</h3>
        <form onClick={e => e.stopPropagation()} onSubmit={handleTip} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            Amount (USDe):
            <input
              type="number"
              name="tipAmount"
              step="0.01"
              min="0.01"
              required
              placeholder="Enter amount"
              className="p-3 border rounded-lg"
            />
          </label>
          <button
            type="submit"
            className="bg-primary text-primary-content px-6 py-2 rounded-lg hover:bg-primary-focus transition"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Send Tip"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TipModal;
