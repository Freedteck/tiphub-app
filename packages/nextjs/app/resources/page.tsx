"use client";

import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import NewResources from "~~/components/NewResources";
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

  const { data } = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "getAllResources",
  });

  const { writeContractAsync: addToResources } = useScaffoldWriteContract("TipHub");

  useEffect(() => {
    if (data) {
      const modifiedDataWithId = data.map((dataItem: any, index: number) => {
        dataItem["id"] = index + 1;
        return dataItem;
      });

      setResources(modifiedDataWithId);
    }
  }, [data]);

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
          <li key={resource.id} className="bg-neutral border shadow rounded-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold">{resource.title}</h3>
            <p className="text-sm">{resource.description}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-600">By: {resource.contributor}</p>
            </div>
            <a href={`resources/${resource.id}`} className="text-primary underline mt-2 inline-block">
              View More &rarr;
            </a>
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
