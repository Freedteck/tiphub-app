const benefits = [
  {
    title: "Recognition",
    description: "Turn your knowledge into impact and be celebrated in the developer community.",
  },
  {
    title: "Rewards",
    description: "Earn tangible rewards for sharing your expertise.",
  },
  {
    title: "Community",
    description: "Join a network of passionate developers helping each other grow.",
  },
];

export default function Benefit() {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">The Benefits of TipHub</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="p-8 border rounded bg-base-100">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
