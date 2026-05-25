import { useScrollReveal } from "../hooks/useScrollReveal";
import { useAgeCounter } from "../hooks/useAgeCounter";
import { useVisitorCounter } from "../hooks/useVisitorCounter";

const skills = [
  "Angular",
  "TypeScript",
  "RxJS",
  "Reactive Forms",
  "React",
  "Redux / RTK",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "AWS S3",
  "REST APIs",
  "JWT Auth",
  "Git / GitHub",
  "Jira / Agile",
];

const facts = [
  { icon: "🎂", label: "alive for exactly", valueId: "age" },
  { icon: "👁", label: "this page has been visited", valueId: "visits" },
  { icon: "📍", label: "Nagpur → wherever the WiFi is good" },
  {
    icon: "🎓",
    label: "BCA from RTMNU",
    sub: "CGPA: 7.8 (did okay :P)",
  },
  {
    icon: "☕",
    label: "coffee when shipping features. chai when production breaks.",
  },
  {
    icon: "⚡",
    label: "superpower: making enterprise software look less depressing.",
  },
  { icon: "🕵️", label: "secret: try ↑↑↓↓←→←→BA on this page..." },
];

export default function About() {
  const textRef = useScrollReveal<HTMLDivElement>();
  const sideRef = useScrollReveal<HTMLDivElement>();
  const age = useAgeCounter();
  const visits = useVisitorCounter();

  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6 py-[100px]">
      <div className="section-label">01 — ABOUT</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
        <div ref={textRef} className="reveal">
          <p className="text-[17px] leading-[1.8] text-[#aaa] mb-6">
            I'm a <strong className="text-text">Frontend Developer</strong> at
            Blackcurrant Labs, building enterprise-grade Angular applications
            for clients like Blue Star India. I like interfaces that feel{" "}
            <span className="text-accent2">inevitable</span>, the kind where
            users stop noticing the UI and just get things done.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#aaa] mb-6">
            Right now I'm building{" "}
            <strong className="text-text">ChillMaster</strong> — a cloud-based
            chiller selection platform for Blue Star India through Blackcurrant
            Labs, used internally by engineering, sales & R&D teams. Lots of
            complex workflows, editable grids, Excel imports, and enough
            TypeScript to question my career choices.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#aaa] mb-6">
            Away from the keyboard: cooking things I had to research before I
            could eat, staying{" "}
            <span className="text-accent2">consistent at the gym</span>, and
            following whatever anime has me hooked. Someday - open land, cattle,
            and things I planted and watched grow. The anti-Jira retirement
            plan.
          </p>
          <div className="mt-8">
            <div
              className="section-label"
              style={{ fontSize: "10px", marginBottom: "16px" }}
            >
              SKILLS
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`skill-tag ${["PostgreSQL", "MongoDB"].includes(skill) ? "green" : ""}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div ref={sideRef} className="reveal flex flex-col gap-4">
          <div className="bg-surface border border-border rounded-lg p-7">
            <h3 className="font-mono text-xs text-accent tracking-[3px] mb-5 uppercase">
              // fun_facts.json
            </h3>
            {facts.map((fact, i) => (
              <div
                key={i}
                className="flex gap-3 mb-4 text-sm leading-[1.5] text-[#999]"
              >
                <span className="text-lg shrink-0">{fact.icon}</span>
                <div>
                  <strong className="text-text block">{fact.label}</strong>
                  {fact.valueId === "age" && (
                    <span className="font-mono text-accent3 text-[13px]">
                      {age.toFixed(9)}
                    </span>
                  )}
                  {fact.valueId === "visits" && (
                    <span className="font-mono text-accent text-[13px]">
                      {visits > 0 ? visits.toLocaleString() : "—"}
                    </span>
                  )}
                  {fact.sub && <span>{fact.sub}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-border rounded-lg p-7 text-center">
            <div className="font-mono text-[clamp(40px,10vw,90px)] font-bold text-accent leading-none">
              {visits > 0 ? visits.toLocaleString() : "—"}
            </div>
            <div className="font-mono text-xs text-muted tracking-[3px] mt-1.5">
              PEOPLE HAVE BEEN HERE
              <br />
              you are number{" "}
              <span className="text-accent2">
                #{visits > 0 ? visits.toLocaleString() : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
