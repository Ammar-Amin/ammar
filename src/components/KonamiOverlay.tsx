import { useKonamiCode } from "../hooks/useKonamiCode";

export default function KonamiOverlay() {
  const { active, deactivate } = useKonamiCode();

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9000] bg-[rgba(0,0,0,0.95)] flex flex-col justify-center items-center text-center gap-5">
      <div className="text-[72px]">🍜</div>
      <h2 className="text-5xl font-bold">you found the ramen code 🎉</h2>
      <p className="text-[#777] font-mono text-sm">
        ↑↑↓↓←→←→BA — you absolute legend.
        <br />
        This easter egg is dedicated to the 3am debug sessions.
        <br />
        Reward: you now know ammar's discord is{" "}
        <strong className="text-accent2">xenon072</strong>
      </p>
      <button
        onClick={deactivate}
        className="font-mono text-xs px-6 py-3 bg-accent text-white rounded mt-4 cursor-pointer"
      >
        close this madness
      </button>
    </div>
  );
}
