import { useScrollReveal } from "../hooks/useScrollReveal";

const STATS = [
  {
    value: "₹50+",
    label: "Per 1,000 Views",
    sub: "Minimum guaranteed rate",
  },
  {
    value: "0 Days",
    label: "To Get Paid",
    sub: "Same-day automatic payouts",
  },
  {
    value: "100%",
    label: "Transparent Always",
    sub: "Brands & distributors see everything",
  },
];

const Stats = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      data-testid="stats-section"
      className="bg-[#0A0A0A] border-y border-white/5"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              data-testid={`stat-item-${i}`}
              className={`stat-item p-12 md:p-16 group hover:bg-[#0f0f0f] transition-colors duration-300 ${
                visible ? "revealed" : "reveal"
              }`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="font-bebas text-7xl md:text-8xl text-white group-hover:text-[#E8000D] transition-colors duration-300 leading-none mb-3">
                {stat.value}
              </div>
              <div className="font-barlow text-white uppercase tracking-[0.2em] text-sm mb-2">
                {stat.label}
              </div>
              <div className="font-manrope text-white/30 text-sm">
                {stat.sub}
              </div>
              {/* Bottom accent line */}
              <div className="mt-6 h-px w-0 bg-[#E8000D] group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
