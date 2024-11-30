"use client";

import { useEffect, useState } from "react";
import { formatEther } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const LeaderBoard = () => {
  const [leaderBoardData, setLeaderBoardData] = useState<any[]>([]);
  const { data: getLeaderBoard } = useScaffoldReadContract({
    contractName: "TipHub",
    functionName: "getAllResources",
  });

  useEffect(() => {
    if (getLeaderBoard) {
      // Aggregate tips and contributions by contributor
      const aggregatedData = getLeaderBoard.reduce((acc: any, entry: any) => {
        const contributor = entry.contributor;
        const tipsReceived = entry.tipsReceived ? Number(formatEther(entry.tipsReceived)) : 0;
        const contributionsMade = 1;

        if (!acc[contributor]) {
          acc[contributor] = { contributor, tipsReceived, contributions: contributionsMade };
        } else {
          acc[contributor].tipsReceived += tipsReceived;
          acc[contributor].contributions += contributionsMade;
        }
        return acc;
      }, {});

      const aggregatedArray = Object.values(aggregatedData);

      const sortedLeaderBoard = aggregatedArray.sort((a: any, b: any) => b.tipsReceived - a.tipsReceived);
      console.log(sortedLeaderBoard);

      setLeaderBoardData(sortedLeaderBoard);
    }
  }, [getLeaderBoard]);

  return (
    <main className="container mx-auto flex flex-col gap-12 p-8">
      <h2 className="text-center text-4xl font-bold">Leaderboard</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-neutral-content rounded-lg">
          <thead>
            <tr className="bg-base-100">
              <th className="border border-neutral p-5 text-left text-xl rounded-tl-lg">Rank</th>
              <th className="border border-neutral p-5 text-left text-xl">User</th>
              <th className="border border-neutral p-5 text-left text-xl">Contributions</th>
              <th className="border border-neutral p-5 text-left text-xl rounded-tr-lg">Tips Received</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoardData.map((entry: any, index: number) => (
              <tr
                key={entry.contributor}
                className={`border border-neutral hover:bg-base-300 ${index % 2 === 1 ? "bg-base-100" : ""}`}
              >
                <td className="p-5 border border-neutral">{index + 1}</td>
                <td className="p-5 border border-neutral">{entry.contributor}</td>
                <td className="p-5 border border-neutral">{entry.contributions}</td>
                <td className="p-5 border border-neutral">{entry.tipsReceived.toFixed(2)} USDe</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LeaderBoard;
