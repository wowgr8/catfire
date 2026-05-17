// PLACEHOLDER TIERS — Will replace with the real plan tiers, pricing,
// and what's included. The structure below makes it easy to drop in 3 real
// tiers (or change the count). To mark a card as the "featured" plan, set
// `featured: true` on it.
const PLANS = [
  {
    name: "Taste",
    price: "$—",
    cadence: "/ week",
    blurb: "A perfect introduction. A few meals, no commitment.",
    features: [
      "3 meals per week",
      "1 serving each",
      "Weekly rotating menu",
      "Pause or cancel anytime",
    ],
    cta: "Start with Taste",
    featured: false,
  },
  {
    name: "Family",
    price: "$—",
    cadence: "/ week",
    blurb: "Our most-loved plan. Dinner handled all week long.",
    features: [
      "5 meals per week",
      "2 servings each",
      "Customizable menu",
      "Priority delivery slot",
      "Allergy-aware substitutions",
    ],
    cta: "Choose Family",
    featured: true,
  },
  {
    name: "Feast",
    price: "$—",
    cadence: "/ week",
    blurb: "Maximum variety for big appetites and full households.",
    features: [
      "7 meals per week",
      "4 servings each",
      "Custom requests welcome",
      "Includes weekend specials",
      "Dedicated chef contact",
    ],
    cta: "Go Feast",
    featured: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">
            Meal Plans
          </p>
          <h2
            className="text-3xl font-extrabold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pick your <span className="rainbow-text">pace</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-ink-soft)]">
            Every plan is flexible — swap, skip, or pause without a phone call.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => {
            const featured = plan.featured;
            return (
              <li
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-7 shadow-sm transition-transform hover:-translate-y-1 ${
                  featured
                    ? "rainbow-bg p-[3px]"
                    : "bg-white ring-1 ring-gray-100"
                }`}
              >
                <div
                  className={`flex h-full flex-col rounded-2xl ${
                    featured ? "bg-white p-6 md:p-7" : ""
                  }`}
                >
                  {featured && (
                    <span className="rainbow-bg absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                      Most popular
                    </span>
                  )}

                  <h3
                    className="text-2xl font-extrabold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                    {plan.blurb}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[var(--color-ink-soft)]">
                      {plan.cadence}
                    </span>
                  </div>

                  <ul className="mt-5 flex-1 space-y-2 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 text-base leading-none"
                        >
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-7 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold transition-transform hover:scale-[1.02] ${
                      featured
                        ? "rainbow-bg text-white shadow"
                        : "border-2 border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-sm text-[var(--color-ink-soft)]">
          Have something custom in mind?{" "}
          <a
            href="#contact"
            className="font-semibold text-[var(--color-ink)] underline underline-offset-4"
          >
            Get in touch
          </a>{" "}
          and we'll build a plan around you.
        </p>
      </div>
    </section>
  );
}
