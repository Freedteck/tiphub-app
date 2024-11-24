const features = [
  {
    title: "Developer Profiles",
    description: "Showcase your expertise and track your contributions.",
  },
  {
    title: "Resource Feed",
    description: "Discover tutorials, code snippets, and solutions.",
  },
  {
    title: "Smart Tipping",
    description: "Reward others and get rewarded with USDe.",
  },
  {
    title: "Leaderboard",
    description: "See the top contributors and gain recognition.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto text-center flex flex-col gap-8">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <li key={index} className="bg-base-100 p-8 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
