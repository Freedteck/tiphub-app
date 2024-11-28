"use client";

import { Address, formatEther } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type BalanceProps = {
  address?: Address;
  className?: string;
};

/**
 * Display (USDE) balance of an ETH address.
 */
export const UsdeBalance = ({ address, className = "" }: BalanceProps) => {
  const {
    data: balance,
    isError,
    isLoading,
  } = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "getUsdeTokenBalance",
    args: [address],
  });

  if (!address || isLoading || balance === null) {
    return (
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-slate-300 h-6 w-6"></div>
        <div className="flex items-center space-y-6">
          <div className="h-2 w-28 bg-slate-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={`border-2 border-gray-400 rounded-md px-2 flex flex-col items-center max-w-fit cursor-pointer`}>
        <div className="text-warning">Error</div>
      </div>
    );
  }

  const formattedBalance = balance ? Number(formatEther(balance)) : 0;

  return (
    <button className={`btn btn-sm btn-ghost flex flex-col font-normal items-center hover:bg-transparent ${className}`}>
      <div className="w-full flex items-center justify-center">
        <>
          <span>{formattedBalance.toFixed(2)}</span>
          <span className="text-[0.8em] font-bold ml-1">{"USDE"}</span>
        </>
      </div>
    </button>
  );
};
