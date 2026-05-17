export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24"
    >
      {/* Soft rainbow halo behind the hero text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[120%] -translate-x-1/2 rounded-full opacity-30 blur-3xl rainbow-bg"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="text-center md:text-left">
          <p className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-ink-soft)]">
            Mobile Chef · Made From Scratch
          </p>
          <h1
            className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bold flavor,{" "}
            <span className="rainbow-text">delivered to your door.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-[var(--color-ink-soft)] md:mx-0 md:text-xl">
            Chef-crafted meals and weekly plans for busy people who refuse to
            give up on great food.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#plans"
              className="rainbow-bg inline-flex w-full justify-center rounded-full px-6 py-3 text-base font-bold text-white shadow-sm transition-transform hover:scale-105 sm:w-auto"
            >
              See the Plans
            </a>
            <a
              href="#meals"
              className="inline-flex w-full justify-center rounded-full border-2 border-[var(--color-ink)] px-6 py-3 text-base font-bold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white sm:w-auto"
            >
              View the Menu
            </a>
          </div>
        </div>

        {/* Hero image placeholder — swap for a real photo when ready */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="rainbow-bg absolute inset-0 rounded-[2rem] opacity-90 blur-xl" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] bg-white shadow-xl ring-4 ring-white">
            <span className="text-6xl">🍽️</span>
            <span className="absolute bottom-4 right-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[var(--color-ink-soft)] backdrop-blur">
              Hero photo goes here
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
