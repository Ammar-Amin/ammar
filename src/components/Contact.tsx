import { useScrollReveal } from "../hooks/useScrollReveal";
import type { ContactLink } from "../types";

const links: ContactLink[] = [
  {
    icon: "📧",
    label: "EMAIL",
    value: "ammaramin5253@gmail.com",
    href: "mailto:ammaramin5253@gmail.com",
  },
  {
    icon: "💼",
    label: "LINKEDIN",
    value: "/in/ammar-amin5253",
    href: "https://linkedin.com/in/ammar-amin5253",
    external: true,
  },
  {
    icon: "🐙",
    label: "GITHUB",
    value: "/Ammar-Amin",
    href: "https://github.com/Ammar-Amin",
    external: true,
  },
  {
    icon: "𝕏",
    label: "TWITTER / X",
    value: "@Ammar_Amin007",
    href: "https://x.com/Ammar_Amin007",
    external: true,
  },
  {
    icon: "💬",
    label: "WHATSAPP",
    value: "+91 9325416499",
    href: "https://wa.me/9325416499",
    external: true,
  },
];

export default function Contact() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const linksRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="max-w-[1100px] mx-auto px-6 py-[100px] border-t border-border"
    >
      <div className="section-label">04 — CONTACT</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
        <div ref={headingRef} className="reveal">
          <h2 className="text-[clamp(32px,6vw,64px)] font-extrabold leading-[1.1]">
            let's build something <span className="text-accent">weird.</span>
          </h2>
          <p className="text-[#777] text-[15px] mt-5 leading-[1.7]">
            Open to interesting problems, cool teams, and projects that make me
            say "wait, that's possible?". I reply fast — usually faster than my
            production builds.
          </p>
        </div>
        <div ref={linksRef} className="reveal flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="flex items-center gap-4 no-underline text-text px-5 py-4 border border-border rounded-md transition-all duration-200 text-sm hover:border-accent hover:bg-[rgba(232,73,70,0.04)]"
            >
              <span className="text-xl w-8 shrink-0">{link.icon}</span>
              <div>
                <span className="font-mono text-[11px] text-muted block">
                  {link.label}
                </span>
                <span className="text-[15px] text-text">{link.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
