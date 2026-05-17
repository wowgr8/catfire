export default function Mission() {
  return (
    <section
      id="mission"
      className="border-y border-gray-100 bg-[var(--color-paper-tint)] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">
          Our Mission
        </p>
        <h2
          className="text-3xl font-extrabold leading-tight md:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Real food, made by a real chef —{" "}
          <span className="rainbow-text">for real people.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-ink-soft)]">
          Catfire exists to put thoughtful, scratch-made meals into the hands of
          people who want to eat well without spending their whole evening at
          the stove. Every dish is built around seasonal ingredients, balanced
          nutrition, and the kind of flavor you remember the next day.
        </p>
      </div>
    </section>
  );
}
