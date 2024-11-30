"use client";

import { useEffect, useState } from "react";
import { useEnsAvatar } from "wagmi";
import TipModal from "~~/components/TipModal";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type Resource = [string, string, string, string];

const ResourcePage = ({ resourceId }: any) => {
  const [resource, setResource] = useState<Resource | null>(null);
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);

  const { data: ensAvatar } = useEnsAvatar({ universalResolverAddress: resource?.[3] || "" });
  const { data, isLoading, isError }: any = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "getResource",
    args: [resourceId],
  });

  useEffect(() => {
    if (data) {
      setResource(data);
    }
  }, [data]);

  if (isLoading) {
    return <div className="p-6 flex flex-col gap-8">Loading...</div>;
  }

  if (isError) {
    return <div className="p-6 flex flex-col gap-8">Error fetching resource {resourceId}</div>;
  }

  return (
    <main className="py-8 flex flex-col gap-8">
      <div>
        <h2 className="text-center font-bold text-4xl">{resource?.[0]}</h2>
      </div>
      <div className="container mx-auto flex flex-col gap-4">
        {resource && (
          <div className="flex items-center gap-3">
            <BlockieAvatar address={resource?.[3] || ""} size={40} ensImage={ensAvatar} />
            <span className="text-lg">{resource?.[3].slice(0, 6) + "..." + resource?.[3].slice(-4)}</span>
          </div>
        )}
        <p className="text-lg">{resource?.[1]}</p>
      </div>
      <div className="h-[2px] bg-base-100 my-6"></div>
      <div className="flex justify-between items-center container mx-auto">
        <button
          onClick={() => setIsTipModalOpen(true)}
          className="bg-primary text-primary-content px-6 py-2 rounded-lg shadow hover:bg-primary-focus transition"
        >
          Send a Tip
        </button>
        <div className="flex gap-4">
          <a
            href={`https://twitter.com/intent/tweet?text=Check out this resource: ${resource?.[0]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Share on Twitter
          </a>
          <a
            href="#"
            className="text-primary underline"
            onClick={e => {
              e.preventDefault();
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }}
          >
            Copy Link
          </a>
        </div>
      </div>
      {isTipModalOpen && <TipModal closeModal={() => setIsTipModalOpen(false)} resourceId={resourceId} />}
    </main>
  );
};

export default ResourcePage;
