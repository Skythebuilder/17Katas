import { useScrollReveal } from "../hooks/useScrollReveal";

const QUOTE =
  "India has the creators. India has the talent. India has 750 million phones. What India didn't have — was infrastructure that actually paid for performance. Until now.";

const Manifesto = () => {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section
      data-testid="manifesto-section"
      className="py-32 md:py-44 bg-[#050505] border-y border-white/5 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(232,0,13,0.04) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      <div
        ref={ref}
        className={`reveal ${visible ? "revealed" : ""} max-w-5xl mx-auto px-6 md:px-12 text-center`}
      >
        {/* Opening mark */}
        <div className="font-bebas text-[#E8000D]/20 text-[8rem] leading-none mb-0 select-none">
          &ldquo;
        </div>

        <blockquote
          data-testid="manifesto-quote"
          className="font-bebas text-white uppercase leading-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
        >
          {QUOTE}
        </blockquote>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-[#E8000D]" />
          <span className="font-barlow text-[#E8000D] uppercase tracking-[0.4em] text-xs">
            17Katas Manifesto
          </span>
          <div className="h-px w-16 bg-[#E8000D]" />
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
