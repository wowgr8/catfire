export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-paper-tint)] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Portrait placeholder */}
        <div className="relative mx-auto aspect-square w-full max-w-sm md:order-first">
          <div className="rainbow-bg absolute inset-0 rounded-[2rem] opacity-90 blur-xl" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] bg-white shadow-xl ring-4 ring-white">
            <span className="text-6xl">👩‍🍳</span>
            <span className="absolute bottom-4 right-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[var(--color-ink-soft)] backdrop-blur">
              Chef portrait
            </span>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">
            About the Chef
          </p>
          <h2
            className="text-3xl font-extrabold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hi, I'm <span className="rainbow-text">[Chef Name]</span>.
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-soft)]">
            [Placeholder bio — replace this paragraph with the chef's story. A
            sentence on background and training, what kinds of food they love
            to cook, and what drew them to start Catfire. Keep it warm and
            personal — this is where trust gets built.]
          </p>
          <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
            [Optional second paragraph — local roots, sourcing philosophy, or a
            personal mission. Two short paragraphs is the sweet spot.]
          </p>
        </div>
      </div>
    </section>
  );
}
