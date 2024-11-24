export default function CallToAction() {
  return (
    <section className="bg-base-100 py-16 text-center">
      <h2 className="text-3xl text-primary font-bold mb-4">Ready to Share and Earn?</h2>
      <p className="text-lg mb-6">Join TipHub and make your contributions count.</p>
      <a
        href="/signup"
        className="bg-accent text-accent-content px-6 py-2 rounded-lg shadow hover:bg-accent-content hover:text-accent transition"
      >
        Join TipHub Now
      </a>
    </section>
  );
}
