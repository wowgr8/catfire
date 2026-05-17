export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100">
      {/* Rainbow accent strip */}
      <div className="rainbow-bg h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-[var(--color-ink-soft)] md:flex-row md:px-8">
        <p className="flex items-center gap-2">
          <span aria-hidden="true">🔥</span>
          <span className="font-bold text-[var(--color-ink)]">Catfire</span>
          <span>· Mobile Chef</span>
        </p>
        <p>© {year} Catfire. All rights reserved.</p>
      </div>
    </footer>
  );
}
