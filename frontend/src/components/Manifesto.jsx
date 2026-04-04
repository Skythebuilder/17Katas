import { useScrollReveal } from "../hooks/useScrollReveal";

const Manifesto = () => {
  const [ref, visible] = useScrollReveal(0.08);

  return (
    <section
      data-testid="manifesto-section"
      className="pt-20 pb-32 md:pt-24 md:pb-40 bg-[#050505] border-y border-white/5 overflow-hidden relative"
    >
      {/* Background glow — centered */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          background: "radial-gradient(circle, rgba(232,0,13,0.05) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      <div
        ref={ref}
        className={`reveal ${visible ? "revealed" : ""} max-w-5xl mx-auto px-6 md:px-12 text-center`}
      >

        {/* Block 1 — Opening strike */}
        <div
          data-testid="manifesto-opening"
          className="font-bebas text-[#E8000D] uppercase mb-14"
          style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", lineHeight: 1 }}
        >
          DISTRIBUTION IS OXYGEN.
        </div>

        {/* Block 2 — The problem */}
        <div className="mb-14 space-y-1">
          <div
            className="font-bebas text-white uppercase"
            style={{ fontSize: "clamp(1.6rem, 3.2vw, 3.2rem)", lineHeight: 1.1 }}
          >
            EVERYTHING HAS INFRASTRUCTURE.
          </div>
          <div
            className="font-bebas text-white/40 uppercase"
            style={{ fontSize: "clamp(1.6rem, 3.2vw, 3.2rem)", lineHeight: 1.1 }}
          >
            DISTRIBUTION NEVER DID.
          </div>
          <div
            className="font-bebas text-[#E8000D] uppercase"
            style={{ fontSize: "clamp(1.6rem, 3.2vw, 3.2rem)", lineHeight: 1.1 }}
          >
            UNTIL NOW.
          </div>
        </div>

        {/* Block 3 — The declaration */}
        <div className="mb-16 space-y-2">
          <div
            className="font-bebas text-white uppercase"
            style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.6rem)", lineHeight: 1.15 }}
          >
            WE DIDN&apos;T BUILD A PLATFORM.
          </div>
          <div
            className="font-bebas text-white uppercase"
            style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.6rem)", lineHeight: 1.15 }}
          >
            WE BUILT INDIA&apos;S FIRST CONTENT
            <br />
            DISTRIBUTION INFRASTRUCTURE.
          </div>
        </div>

        {/* Block 4 — The name, largest, with red glow */}
        <div className="relative inline-block mb-14">
          {/* Red glow spot behind this text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(232,0,13,0.18) 0%, transparent 75%)",
              transform: "scale(1.6)",
            }}
          />
          <div
            data-testid="manifesto-quote"
            className="font-bebas text-[#E8000D] uppercase relative"
            style={{ fontSize: "clamp(5rem, 14vw, 14rem)", lineHeight: 0.9 }}
          >
            THIS IS 17KATAS.
          </div>
        </div>

        {/* Signature */}
        <div className="flex items-center justify-center gap-4">
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
