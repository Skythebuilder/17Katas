import { useScrollReveal } from "../hooks/useScrollReveal";
import { Ban, Zap, Eye, RotateCcw } from "lucide-react";

const FEATURES = [
  {
    icon: Ban,
    title: "No More Paying for Hope",
    desc: "Every rupee you spend is tied to a verified view. Zero wasted impressions. Zero guesswork. Performance only.",
    tag: "Pay-for-performance model",
  },
  {
    icon: Zap,
    title: "Same Day Payouts",
    desc: "No more waiting 30–40 days to get paid. When a view is verified, payout is triggered automatically. That day.",
    tag: "₹0 day payout delay",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Both brands and distributors have access to the same real-time dashboard. Views, spend, earnings — all live.",
    tag: "Real-time dashboard",
  },
  {
    icon: RotateCcw,
    title: "Pull Out Anytime",
    desc: "Brands can withdraw their unused campaign budget at any time. Your capital is never locked in arbitrarily.",
    tag: "100% refundable unused budget",
  },
];

const WhyKatas = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      data-testid="why-katas-section"
      className="py-28 md:py-36 bg-[#050505] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${visible ? "revealed" : ""} mb-16`}
        >
          <p className="font-barlow text-[#E8000D] uppercase tracking-[0.35em] text-sm mb-4">
            The Difference
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-white uppercase">
            Why 17Katas
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                data-testid={`why-feature-${i}`}
                className={`reveal ${visible ? "revealed" : ""} bg-[#050505] p-10 md:p-12 group hover:bg-[#0c0c0c] transition-colors duration-300 relative overflow-hidden`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 border border-white/10 group-hover:border-[#E8000D]/40 transition-colors duration-300">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#E8000D]"
                  />
                </div>

                <h3 className="font-bebas text-2xl md:text-3xl text-white uppercase mb-3 leading-tight">
                  {feat.title}
                </h3>

                <p className="font-manrope text-white/45 text-sm leading-relaxed mb-6">
                  {feat.desc}
                </p>

                {/* Tag */}
                <span className="font-barlow text-[#E8000D]/60 uppercase tracking-widest text-xs">
                  — {feat.tag}
                </span>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/5 group-hover:border-[#E8000D]/20 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKatas;
