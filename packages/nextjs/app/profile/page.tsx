"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatEther } from "viem";
import { useAccount, useEnsAvatar } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Profile = () => {
  const [tokenBalance, setTokenBalance] = useState(0);
  const [tipsReceived, setTipsReceived] = useState(0);
  const [resources, setResources] = useState<any>([]);
  const { address } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ universalResolverAddress: address });
  const { data: getTokenBalance } = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "getUsdeTokenBalance",
    args: [address],
  });
  const { data: getTipsReceived } = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "tipsReceived",
    args: [address],
  });

  const { data: contributions } = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "getUserContributions",
    args: [address],
  });

  const { data } = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "getAllResources",
  });

  useEffect(() => {
    if (address) {
      const formattedBalance = getTokenBalance ? Number(formatEther(getTokenBalance)) : 0;
      setTokenBalance(formattedBalance);
    }
  }, [address, getTokenBalance]);

  useEffect(() => {
    if (address) {
      const formattedTips = getTipsReceived ? Number(formatEther(getTipsReceived)) : 0;
      setTipsReceived(formattedTips);
    }
  }, [address, getTipsReceived]);

  useEffect(() => {
    if (address) {
      const userResources = data?.filter((resource: any) => resource?.contributor === address) || [];
      const modifiedDataWithId = userResources?.map((dataItem: any, index: number) => {
        dataItem["id"] = index;
        return dataItem;
      });

      setResources(modifiedDataWithId);
    }
  }, [address, data]);

  return (
    <main className="flex flex-col gap-8 p-8">
      <h2 className="text-center font-bold text-3xl">My Profile</h2>
      <div className="container mx-auto p-8 flex flex-col gap-12">
        <div className="flex items-center gap-8 bg-base-100 p-8">
          <div className="flex flex-col items-center gap-6 border rounded-lg p-8 w-full">
            <BlockieAvatar address={address || ""} size={64} ensImage={ensAvatar || ""} />
            <span className="text-lg">Address: {address?.slice(0, 6) + "..." + address?.slice(-4)}</span>
          </div>
          <div className="flex flex-col items-center gap-3 border rounded-lg p-8 w-full">
            <h3 className="text-center font-bold text-2xl mb-8">Token Balance</h3>
            <span className="text-4xl font-bold">
              {tokenBalance} <span className="text-primary">USDe</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 border rounded-lg p-8 w-full">
            <h3 className="text-center font-bold text-2xl mb-8">Total Tips Earned</h3>
            <span className="text-lg">{tipsReceived} USDe</span>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-3xl font-bold">Contributions {`(${contributions?.length})`}</div>
          <ul className="bg-base-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
            {resources.map((resource: any) => (
              <li
                key={resource.id}
                className="bg-neutral flex flex-col gap-6 border shadow rounded-lg p-8 hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3">
                  <BlockieAvatar address={resource.contributor} size={40} ensImage={ensAvatar} />
                  <span className="text-lg">
                    {resource.contributor?.slice(0, 6) + "..." + resource.contributor?.slice(-4)}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold">{resource.title}</h3>
                <p className="text-sm">{resource.description}</p>
                <Link href={`resources/${resource.id}`} className="text-primary underline mt-2 inline-block">
                  View More &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Profile;
