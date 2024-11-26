export default function Hero() {
  return (
    <header className="bg-base-100 text-base-content py-20 text-center h-96">
      <h1 className="text-4xl font-bold mb-4 text-neutral-content">Share, Reward, and Grow Together!</h1>
      <p className="text-lg mb-6 text-base-content">A hub for developers to share knowledge and earn USDe rewards.</p>
      <div className="flex justify-center gap-4 mt-10">
        <a
          href="#features"
          className="bg-accent text-accent-content px-6 py-2 rounded-lg shadow hover:bg-accent-content hover:text-accent transition"
        >
          Learn More
        </a>
        <a
          href="/signup"
          className="bg-primary text-primary-content px-6 py-2 rounded-lg shadow hover:bg-primary-content hover:text-primary transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
