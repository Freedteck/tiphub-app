const steps = [
  {
    step: "1",
    title: "Create Your Profile",
    description: "Set up your profile to join the TipHub community.",
  },
  {
    step: "2",
    title: "Share Resources",
    description: "Post code snippets, tutorials, or solutions to help others.",
  },
  {
    step: "3",
    title: "Get Rewarded",
    description: "Receive USDe tips for your contributions.",
  },
  {
    step: "4",
    title: "Engage and Grow",
    description: "Climb the leaderboard and gain recognition.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <ul className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <li key={index} className="text-center bg-neutral p-8 border rounded-lg shadow">
              <h3 className="text-2xl font-bold text-primary">Step {step.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
