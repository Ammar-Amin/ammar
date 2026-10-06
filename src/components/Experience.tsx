import { useScrollReveal } from "../hooks/useScrollReveal";
import type { Experience as ExperienceType } from "../types";

const experiences: ExperienceType[] = [
  {
    company: "CHILLMASTER",
    period: "Mar 2025 — present",
    stack:
      "Angular · TypeScript\nTailwindCSS · Firebase SSO\nAWS S3 · Bitbucket · Jira",
    title: "Frontend Developer",
    type: "Blackcurrant Labs · Client: Blue Star India",
    description:
      "Led frontend development for ChillMaster — a cloud-based chiller selection & performance analysis platform used by engineers, sales & R&D teams — owning the architecture across 790+ files.",
    bullets: [
      "Modular component architecture with lazy-loaded routes, route guards & role-based access (SuperAdmin, Engineer, R&D, Sales), plus an admin user management module",
      "Built the Performance Rating module from scratch: unit conversion, validation gating, and COP/IPLV/star-rating/pressure-drop calculations",
      "Designed a Cost Projector & Compare tool with dynamic metrics and cost logic in a side-by-side comparison UI",
      "Reusable editable grid/table components with inline editing & dynamic rows/columns; led a Data Editor refactor to cut duplicate logic",
      "Excel bulk import/validation and report generation via AWS S3 presigned URLs, with previews and bulk reports per chiller series",
      "Collaborated with backend (Node.js, MySQL), QA & product owners via Jira; sprint planning + code reviews",
    ],
  },
  {
    company: "NEURON",
    period: "Aug 2026 — present",
    stack: "React · TypeScript\nNestJS · MongoDB\nGCP Cloud Tasks\nPostHog",
    title: "Full-Stack Developer",
    type: "AI Workflow Builder",
    description:
      "Shipping onboarding, async generation pipelines and canvas improvements for a visual AI-workflow builder.",
    bullets: [
      "Built \"Build it with me\" guided onboarding: a spotlight-based tutorial engine, a \"get started\" checklist, and a task-oriented docs rewrite",
      "Instrumented the activation funnel with PostHog; made onboarding state server-owned with atomic, race-free preference writes in NestJS",
      "Fixed \"false timeout\" failures in Describe-to-Create by moving generation to async GCP Cloud Tasks jobs with idempotency keys, retries, a real Stop control & robust FE polling",
      "Added a workflow-level Stop button, per-neuron Waiting/Running/Completed status, and an ownership-checked stop-run API",
      "Hardened agent publishing with input bounds, publish-time compliance checks, and a cleanup migration",
      "Fixed canvas zoom, placement, viewport & autosave bugs; shipped a light/dark theme toggle, mobile fixes, and Prettier/lint-staged hooks",
    ],
  },
  {
    company: "ENCASE",
    period: "May 2026 — Jul 2026",
    stack: "React · TypeScript\nNestJS · MongoDB\nPipecat Cloud · GCP",
    title: "Full-Stack Developer",
    type: "AI Mock-Interview Platform",
    description:
      "Built full-stack features for encase.ai — onboarding, profile, and live interview session flows for an AI mock-interview product.",
    bullets: [
      "Onboarding with LinkedIn/resume import and manual fallback; LinkedIn-aligned structured location and country-driven phone validation, with NestJS APIs, DTOs & tests",
      "Pipecat Cloud CI/CD with a manual QA/prod deploy action and pinned, least-privilege workflows",
      "Live Simli video, consent/audit APIs, and MediaPipe face analytics with backend persistence",
      "PostHog product & AI-cost telemetry, SEO/SSG prerendering, GA4, and legal AI-disclosure pages",
      "Migrated core NestJS/Mongo entities to UUID business keys with a production runbook and backfill",
    ],
  },
  {
    company: "GREEIN",
    period: "Earlier",
    stack: "Next.js · amCharts\nPerformance\nResponsive UI",
    title: "Frontend Developer",
    type: "Blackcurrant Labs · Client: Octanom",
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
