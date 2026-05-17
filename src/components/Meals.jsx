// Placeholder meal cards. Swap `emoji` + copy for real photos and descriptions later.
const MEALS = [
  {
    name: "Smoky Citrus Salmon",
    blurb: "Wild-caught salmon, blistered citrus, charred broccolini.",
    emoji: "🐟",
  },
  {
    name: "Honey-Harissa Chicken",
    blurb: "Glazed thigh, herbed couscous, cucumber-mint salad.",
    emoji: "🍗",
  },
  {
    name: "Miso-Maple Tofu Bowl",
    blurb: "Crispy tofu, jasmine rice, ginger-scallion crunch.",
    emoji: "🍚",
  },
  {
    name: "Slow-Braised Short Rib",
    blurb: "Red-wine reduction, creamy polenta, gremolata.",
    emoji: "🥩",
  },
  {
    name: "Charred Veggie Tacos",
    blurb: "Sweet potato, black bean, lime crema, pickled onion.",
    emoji: "🌮",
  },
  {
    name: "Lemon-Pepper Pasta",
    blurb: "Hand-rolled pasta, brown butter, parmesan, fresh herbs.",
    emoji: "🍝",
  },
];

export default function Meals() {
  return (
    <section id="meals" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">
            This Week's Menu
          </p>
          <h2
            className="text-3xl font-extrabold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What's <span className="rainbow-text">cooking</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-ink-soft)]">
            The menu rotates every week with seasonal picks. Swap any dish from
            your plan or order à la carte.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEALS.map((meal) => (
            <li
              key={meal.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Photo placeholder */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <div className="rainbow-bg absolute inset-0 opacity-20" />
                <div className="relative flex h-full w-full items-center justify-center text-6xl">
                  {meal.emoji}
                </div>
                <span className="absolute bottom-3 right-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-ink-soft)] backdrop-blur">
                  Photo placeholder
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{meal.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                  {meal.blurb}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
