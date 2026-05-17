const STEPS = [
  {
    n: "1",
    title: "Pick a plan",
    body: "Choose how many meals you want each week. Adjust or pause anytime.",
  },
  {
    n: "2",
    title: "Customize your menu",
    body: "Swap dishes, flag allergies, and tell us what you love — or hate.",
  },
  {
    n: "3",
    title: "We cook & deliver",
    body: "Meals arrive fresh, ready to eat or heat. No prep, no cleanup.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[var(--color-paper-tint)] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">
            How It Works
          </p>
          <h2
            className="text-3xl font-extrabold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Three steps,{" "}
            <span className="rainbow-text">zero stress.</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="relative rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100"
            >
              <div
                aria-hidden="true"
                className="rainbow-bg mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full text-lg font-extrabold text-white shadow"
              >
                {step.n}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-[var(--color-ink-soft)]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
