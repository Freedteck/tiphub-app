"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useEnsAvatar } from "wagmi";
import { PlusIcon } from "@heroicons/react/24/outline";
import NewResources from "~~/components/NewResources";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  contributor: string;
  tipsReceived: number;
}

const Resources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [showNewResourceForm, setShowNewResourceForm] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const { data: ensAvatar } = useEnsAvatar({ universalResolverAddress: userAddress || "" });

  const { data, isLoading, isError } = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "getAllResources",
  });

  const { writeContractAsync: addToResources } = useScaffoldWriteContract("TipHub");

  useEffect(() => {
    if (data) {
      const modifiedDataWithId = data.map((dataItem: any, index: number) => {
        dataItem["id"] = index;
        return dataItem;
      });

      setResources(modifiedDataWithId);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      resources.map(resource => {
        setUserAddress(resource.contributor);
      });
    }
  }, [data, resources]);

  const handleCreateResource = () => {
    setShowNewResourceForm(true);
  };

  const handleAddResource = async (newResource: any) => {
    try {
      await addToResources({
        functionName: "addResource",
        args: [newResource.title, newResource.description, newResource.link],
      });
    } catch (e) {
      console.error("Error setting greeting:", e);
    }
    setShowNewResourceForm(false);
  };

  if (isLoading) {
    return <div className="p-6 flex flex-col gap-8">Loading...</div>;
  }

  if (isError) {
    return <div className="p-6 flex flex-col gap-8">Error fetching resources</div>;
  }

  return (
    <main className="p-6 flex flex-col gap-8">
      <div className="flex justify-between gap-8">
        <h2 className="font-bold text-3xl">Resources</h2>
        <button
          className="bg-accent text-accent-content shadow px-6 py-2 rounded-lg hover:bg-accent-content hover:text-accent transition flex gap-2"
          onClick={handleCreateResource}
        >
          <PlusIcon className="h-6 w-6" />
          Create
        </button>
      </div>

      <ul className="bg-base-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-16">
        {resources.map(resource => (
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
      {showNewResourceForm && (
        <NewResources closeForm={() => setShowNewResourceForm(false)} addResource={handleAddResource} />
      )}
    </main>
  );
};

export default Resources;
