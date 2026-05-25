import { useScrollReveal } from "../hooks/useScrollReveal";
import type { Experience as ExperienceType } from "../types";

const experiences: ExperienceType[] = [
  {
    company: "BLUE STAR INDIA",
    period: "2024 — present",
    stack:
      "Angular · TypeScript\nTailwindCSS · RxJS\nFirebase SSO\nAWS S3 · Bitbucket",
    title: "Frontend Developer",
    type: "via Blackcurrant Labs",
    description:
      "Building the entire frontend for ChillMaster — a cloud-based chiller selection & performance analysis platform used by engineers, sales & R&D teams across Blue Star India.",
    bullets: [
      "Modular component architecture with lazy-loaded routes, route guards & role-based access (SuperAdmin, Engineer, R&D, Sales)",
      "Reusable editable grid/table components with inline editing & dynamic row/column management",
      "Excel bulk import/validation, AWS S3 file uploads, client-side error reporting",
      "Collaborated with backend (Node.js, PostgreSQL), QA & product via Jira; sprint planning + code reviews",
    ],
  },
  {
    company: "GREEIN",
    period: "Earlier",
    stack: "React · amCharts\nPerformance\nResponsive UI",
    title: "Frontend Developer",
    type: "via Blackcurrant Labs",
    description:
      "Turned a desktop-only platform into a fully responsive application. Bug fixing, UI polish, and making amCharts do things they weren't meant to do.",
    bullets: [
      "Converted desktop-only UI to fully responsive across all devices",
      "Resolved UI and functional bugs, improving overall stability",
      "Optimized component rendering to reduce unnecessary re-renders",
      "Implemented and refined interactive data visualizations with amCharts",
    ],
  },
];

function ExpItem({ exp }: { exp: ExperienceType }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-14 pb-14 border-b border-border last:border-b-0"
    >
      <div className="font-mono text-xs text-muted">
        <div className="text-accent2 mb-1.5 text-[13px]">{exp.company}</div>
        <div className="leading-[1.6] whitespace-pre-line">
          {exp.period}
          <br />
          <br />
          {exp.stack}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
        <span className="font-mono text-[11px] bg-[rgba(232,73,70,0.1)] text-accent border border-[rgba(232,73,70,0.2)] px-2.5 py-[3px] rounded inline-block mb-4">
          {exp.type}
        </span>
        <p className="text-[15px] text-[#999] leading-[1.7] mb-3">
          {exp.description}
        </p>
        <ul className="list-none p-0">
          {exp.bullets.map((bullet, bi) => (
            <li
              key={bi}
              className="text-sm text-[#888] py-1.5 border-b border-[rgba(255,255,255,0.04)] pl-4 relative"
            >
              <span className="absolute left-0 text-accent font-mono">→</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-[1100px] mx-auto px-6 py-[100px] border-t border-border"
    >
      <div className="section-label">02 — EXPERIENCE</div>
      {experiences.map((exp, i) => (
        <ExpItem key={i} exp={exp} />
      ))}
    </section>
  );
}
