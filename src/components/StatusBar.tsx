import { useVisitorCounter } from "../hooks/useVisitorCounter";

export default function StatusBar() {
  const visits = useVisitorCounter();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-evenly md:justify-between items-center px-6 py-2.5 border-b border-border bg-[rgba(13,13,13,0.85)] backdrop-blur-[12px] font-mono text-[11px] text-muted">
      <div className="hidden md:flex gap-6 items-center flex-wrap">
        <span>
          👁 you are visitor #
          <span className="text-accent2 font-bold">
            {visits > 0 ? visits.toLocaleString() : "—"}
          </span>
        </span>
        <span className="text-muted opacity-60">
          building things that matter
        </span>
      </div>
      <nav>
        <a
          href="#about"
          className="text-muted no-underline ml-5 transition-colors duration-200 hover:text-text"
        >
          about
        </a>
        <a
          href="#experience"
          className="text-muted no-underline ml-5 transition-colors duration-200 hover:text-text"
        >
          exp
        </a>
        <a
          href="#projects"
          className="text-muted no-underline ml-5 transition-colors duration-200 hover:text-text"
        >
          projects
        </a>
        <a
          href="#contact"
          className="text-muted no-underline ml-5 transition-colors duration-200 hover:text-text"
        >
          contact
        </a>
      </nav>
    </div>
  );
}
