import { PlusIcon } from "@heroicons/react/24/outline";

const resources = [
  {
    id: 1,
    title: "Resource 1",
    description: "This is a great resource for learning JavaScript.",
    link: "https://example.com/resource-1",
    contributor: "0x1234...abcd",
    tipsReceived: 1.2,
  },
  {
    id: 2,
    title: "Resource 2",
    description: "An excellent guide for mastering React.",
    link: "https://example.com/resource-2",
    contributor: "0x5678...efgh",
    tipsReceived: 0.8,
  },
  {
    id: 3,
    title: "Resource 3",
    description: "A must-read for anyone interested in blockchain development.",
    link: "https://example.com/resource-3",
    contributor: "0x9abc...ijkl",
    tipsReceived: 2.5,
  },
  {
    id: 4,
    title: "Resource 4",
    description: "A comprehensive tutorial on building web3 applications.",
    link: "https://example.com/resource-4",
    contributor: "0xdef0...mnop",
    tipsReceived: 1.0,
  },
  {
    id: 5,
    title: "Resource 5",
    description: "Learn how to deploy smart contracts on Ethereum.",
    link: "https://example.com/resource-5",
    contributor: "0x1234...abcd",
    tipsReceived: 1.8,
  },
  {
    id: 6,
    title: "Resource 6",
    description: "A collection of useful tools for frontend developers.",
    link: "https://example.com/resource-6",
    contributor: "0x5678...efgh",
    tipsReceived: 0.5,
  },
  // Add more resources as needed
];

const Resources = () => {
  return (
    <main className="p-6 flex flex-col gap-8">
      <div className="flex justify-between gap-8">
        <h2 className="font-bold text-3xl">Resources</h2>
        <button className="bg-accent text-accent-content shadow px-6 py-2 rounded-lg hover:bg-accent-content hover:text-accent transition flex gap-2">
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
              <p className="text-sm text-gray-500">By: {resource.contributor}</p>
            </div>

            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline mt-2 inline-block"
            >
              View More &rarr;
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Resources;
