import { useScrollReveal } from "../hooks/useScrollReveal";

export default function HireMe() {
  const ref = useScrollReveal<HTMLDivElement>();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ammar_Amin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="max-w-[1100px] mx-auto px-6 py-[80px]">
      <div
        ref={ref}
        className="reveal bg-surface border border-border rounded-lg p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent2/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            wanna <span className="text-accent">hire me?</span>
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-md">
            I'm a{" "}
            <strong className="text-accent2">
              Full-Stack Developer (frontend-first)
            </strong>{" "}
            currently open to full-time roles, contract work, and interesting
            collaborations. Angular, React, TypeScript, NestJS — I ship
            end-to-end, from onboarding flows to async pipelines.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <button onClick={handleDownload} className="btn btn-primary">
            <span>📄</span> download resume
          </button>
          <a
            href="mailto:ammaramin5253@gmail.com?subject=Job Opportunity"
            className="btn btn-ghost"
          >
            <span>✉️</span> let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
