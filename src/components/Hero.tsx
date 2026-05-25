import { useTypingEffect } from "../hooks/useTypingEffect";

export default function Hero() {
  const typingText = useTypingEffect();

  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-[100px] pb-[60px] max-w-[1100px] mx-auto relative"
    >
      <p
        className="font-mono text-xs text-accent tracking-[3px] uppercase mb-5 opacity-0 animate-fadeUp"
        style={{ animationDelay: "0.2s" }}
      >
        hey, you found me 👋
      </p>

      <h1
        className="glitch text-[clamp(52px,11vw,130px)] font-extrabold leading-[0.9] tracking-[-4px] mb-3 opacity-0 animate-fadeUp"
        data-text="Ammar Amin."
        style={{ animationDelay: "0.35s" }}
      >
        Ammar <span className="text-accent">Amin.</span>
      </h1>

      <p
        className="font-mono text-[clamp(14px,2.5vw,22px)] text-muted mb-8 opacity-0 animate-fadeUp"
        style={{ animationDelay: "0.5s" }}
      >
        <span className="text-accent2">{typingText}</span>
        <span className="text-muted"> — making cool stuff since 2022</span>
      </p>

      <p
        className="max-w-[580px] text-[clamp(15px,1.8vw,18px)] leading-[1.7] text-[#aaa] mb-12 opacity-0 animate-fadeUp"
        style={{ animationDelay: "0.65s" }}
      >
        I build interfaces that feel{" "}
        <strong className="text-text">
          fast, correct, and slightly addictive
        </strong>
        . Currently shipping enterprise Angular at{" "}
        <span className="highlight-box">Blackcurrant Labs</span> for Blue Star
        India. Previously: a React fanboy. Always: curious. Occasionally: a
        chaos agent.
      </p>

      <div
        className="flex gap-4 flex-wrap opacity-0 animate-fadeUp"
        style={{ animationDelay: "0.8s" }}
      >
        <a href="#projects" className="btn btn-primary">
          see my work →
        </a>
        <a
          href="https://github.com/Ammar-Amin"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
        >
          github ↗
        </a>
      </div>

      <div
        className="flex gap-5 mt-14 opacity-0 animate-fadeUp"
        style={{ animationDelay: "1s" }}
      >
        {[
          { label: "LINKEDIN", href: "https://linkedin.com/in/ammar-amin5253" },
          { label: "TWITTER", href: "https://x.com/Ammar_Amin007" },
          { label: "GITHUB", href: "https://github.com/Ammar-Amin" },
          { label: "EMAIL", href: "mailto:ammaramin5253@gmail.com" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
            className="font-mono text-[11px] text-muted no-underline border-b border-transparent transition-colors duration-200 pb-0.5 tracking-[2px] hover:text-text hover:border-text"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
