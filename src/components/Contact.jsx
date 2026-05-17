// PLACEHOLDER VALUES — replace with your friend's real contact info.
// Email and phone are wired up as mailto: and tel: links; social URLs go to
// their real pages.
const CONTACT = {
  email: "hello@catfire.example",
  phone: "+1 (555) 123-4567",
  // Pretty display string for the phone (whatever you'd like users to see)
  phoneDisplay: "(555) 123-4567",
};

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/your-handle",
    // Inline SVG so we don't add an icon dependency
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.26.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.26.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.41-2.22C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.74.07-.94.04-1.45.2-1.79.33-.45.17-.77.38-1.11.72-.34.34-.55.66-.72 1.11-.13.34-.29.85-.33 1.79C3.04 8.5 3 8.85 3 12s0 3.5.07 4.74c.04.94.2 1.45.33 1.79.17.45.38.77.72 1.11.34.34.66.55 1.11.72.34.13.85.29 1.79.33 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.94-.04 1.45-.2 1.79-.33.45-.17.77-.38 1.11-.72.34-.34.55-.66.72-1.11.13-.34.29-.85.33-1.79.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.94-.2-1.45-.33-1.79a2.98 2.98 0 0 0-.72-1.11 2.98 2.98 0 0 0-1.11-.72c-.34-.13-.85-.29-1.79-.33C15.5 4 15.15 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.15-2.05a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/your-handle",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H17V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.6V14h2.7v8h3.2z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@your-handle",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.6 8.3a6.55 6.55 0 0 1-3.85-1.24v8.36a5.7 5.7 0 1 1-5.7-5.7c.31 0 .61.03.9.08v2.7a2.96 2.96 0 1 0 2.04 2.81V2h2.78a3.96 3.96 0 0 0 3.83 3.55V8.3z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">
          Get In Touch
        </p>
        <h2
          className="text-3xl font-extrabold leading-tight md:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hungry? <span className="rainbow-text">Let's talk.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-ink-soft)]">
          Reach out to set up your first delivery, ask about custom plans, or
          book a private event. We usually reply within a day.
        </p>

        {/* Primary contact actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${CONTACT.email}`}
            className="rainbow-bg inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold text-white shadow-sm transition-transform hover:scale-105 sm:w-auto"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 6h16v12H4z" />
              <path d="M4 6l8 7 8-7" />
            </svg>
            Email Us
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[var(--color-ink)] px-6 py-3 text-base font-bold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white sm:w-auto"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
            </svg>
            {CONTACT.phoneDisplay}
          </a>
        </div>

        {/* Direct details for users who'd rather copy-paste */}
        <p className="mt-6 text-sm text-[var(--color-ink-soft)]">
          Or reach us directly at{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-semibold text-[var(--color-ink)] underline underline-offset-4"
          >
            {CONTACT.email}
          </a>
        </p>

        {/* Socials */}
        <div className="mt-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">
            Follow Along
          </p>
          <ul className="flex items-center justify-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[var(--color-ink)] transition-all hover:scale-110 hover:border-transparent hover:bg-[var(--color-ink)] hover:text-white"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
