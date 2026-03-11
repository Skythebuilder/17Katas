import { useScrollReveal } from "../hooks/useScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "Brand Deposits Budget",
    desc: "Brands lock in a campaign budget between ₹2L–₹5L. Funds are secured on-platform — no credit risk, no hidden costs.",
    detail: "Budget: ₹2L — ₹5L",
  },
  {
    num: "02",
    title: "Distributors Create & Post",
    desc: "Distributors craft short-form clips, submit for brand review, and publish across their channels once approved.",
    detail: "Review → Approve → Publish",
  },
  {
    num: "03",
    title: "Views Flow. Money Flows.",
    desc: "Every verified view deducts from the campaign budget automatically. Distributors receive payment the same day.",
    detail: "Same-day automatic payouts",
  },
];

const HowItWorks = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      data-testid="how-it-works-section"
      id="how-it-works"
      className="py-28 md:py-36 bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div
          ref={ref}
          className={`reveal ${visible ? "revealed" : ""} mb-16`}
        >
          <p className="font-barlow text-[#E8000D] uppercase tracking-[0.35em] text-sm mb-4">
            The System
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-white uppercase">
            How It Works
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              data-testid={`how-step-${i}`}
              className={`reveal ${visible ? "revealed" : ""} relative border border-white/8 bg-[#0A0A0A] p-8 hover:border-[#E8000D]/40 transition-all duration-400 group overflow-hidden`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Large background number */}
              <div className="absolute top-4 right-4 font-bebas text-8xl text-[#E8000D]/10 select-none leading-none group-hover:text-[#E8000D]/20 transition-colors duration-300">
                {step.num}
              </div>

              {/* Red step number badge */}
              <div className="font-barlow text-[#E8000D] uppercase tracking-[0.2em] text-xs mb-6">
                Step {step.num}
              </div>

              <h3 className="font-bebas text-2xl md:text-3xl text-white uppercase mb-4 leading-tight">
                {step.title}
              </h3>

              <p className="font-manrope text-white/50 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Detail tag */}
              <div className="inline-block border border-[#E8000D]/30 px-3 py-1">
                <span className="font-barlow text-[#E8000D]/70 text-xs uppercase tracking-wider">
                  {step.detail}
                </span>
              </div>

              {/* Hover bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E8000D] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
