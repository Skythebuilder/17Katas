import { useScrollReveal } from "../hooks/useScrollReveal";

const Hero = ({ onJoinBrand, onJoinDistributor }) => {
  const [ref, visible] = useScrollReveal(0.05);

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808] pt-20"
    >
      {/* Red glow behind text */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none pl-[5vw]">
        <div className="red-glow" style={{ top: "50%", left: "10%", transform: "translate(-20%, -50%)", position: "absolute" }} />
      </div>

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className={`reveal ${visible ? "revealed" : ""} relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full`}
      >
        {/* Overline label */}
        <p className="font-barlow text-[#E8000D] uppercase tracking-[0.35em] text-sm mb-6">
          India&apos;s First Content Distribution Infrastructure
        </p>

        {/* Giant headline */}
        <h1
          data-testid="hero-headline"
          className="font-bebas uppercase text-white leading-[0.85] mb-8"
          style={{ fontSize: "clamp(5rem, 13vw, 14rem)" }}
        >
          Content
          <br />
          <span className="text-white">That</span>{" "}
          <span className="text-[#E8000D]">Pays</span>
        </h1>

        {/* Subheadline */}
        <p className="font-manrope text-white/55 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
          Distribution is the Real Moat.
          <br />
          <strong className="text-white/80 font-medium">Pay for results. Not promises.</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            data-testid="hero-join-brand-btn"
            className="btn-primary"
            onClick={onJoinBrand}
          >
            Join as Brand
          </button>
          <button
            data-testid="hero-join-distributor-btn"
            className="btn-secondary"
            onClick={onJoinDistributor}
          >
            Join as Distributor
          </button>
        </div>

        {/* Small metric hint */}
        <div className="mt-16 flex flex-wrap gap-8">
          {[
            { val: "₹50+", label: "per 1K views" },
            { val: "0 Days", label: "to get paid" },
            { val: "100%", label: "transparent" },
          ].map((m) => (
            <div key={m.val} className="flex items-baseline gap-2">
              <span className="font-bebas text-3xl text-white">{m.val}</span>
              <span className="font-barlow text-white/30 uppercase tracking-widest text-xs">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
