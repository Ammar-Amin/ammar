import { useVisitorCounter } from "../hooks/useVisitorCounter";

export default function Footer() {
  const visits = useVisitorCounter();

  return (
    <footer className="border-t border-border px-6 py-7 flex justify-between items-center font-mono text-[11px] text-muted flex-wrap gap-3">
      <span>ammar amin © 2026 — built with obsession & caffeine</span>
      <span>
        visitor #
        <span className="text-accent">
          {visits > 0 ? visits.toLocaleString() : "—"}
        </span>{" "}
        | thanks for stopping by
      </span>
      <a
        href="https://github.com/Ammar-Amin"
        target="_blank"
        rel="noreferrer"
        className="text-muted no-underline hover:text-text"
      >
        github ↗
      </a>
    </footer>
  );
}
