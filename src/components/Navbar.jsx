import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#meals", label: "Meals" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#plans", label: "Plans" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle shadow once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when a link is clicked
  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8 md:py-4"
      >
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight md:text-2xl"
        >
          <span aria-hidden="true" className="text-2xl">
            {/* Fire emoji as a stand-in mark; swap for a logo later */}
            🔥
          </span>
          <span className="rainbow-text">Catfire</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rainbow-bg inline-flex items-center rounded-full px-4 py-2 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              Order Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[var(--color-ink)] transition-colors hover:bg-gray-50 md:hidden"
        >
          {/* Simple inline icon (hamburger / close) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-gray-100 bg-white transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-[var(--color-ink)] transition-colors hover:bg-gray-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rainbow-bg mt-2 block rounded-full px-4 py-3 text-center text-base font-bold text-white"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
