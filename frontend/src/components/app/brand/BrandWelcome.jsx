import { useNavigate } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "Deposit budget",
    desc: "Deposit ₹2L–₹5L via Razorpay. Held in escrow — only deducted when real verified views are delivered. Withdraw unused balance anytime.",
    tag: "Razorpay secured",
  },
  {
    num: "02",
    title: "Create campaign",
    desc: "Set your CPM rate, upload your brief, define content rules. Distributors see your campaign and pick it up — no sourcing needed from you.",
    tag: "AI-matched",
  },
  {
    num: "03",
    title: "Views verified",
    desc: "Every submission is verified by Claude AI and human review. Fake views, bot accounts, and manipulated screenshots are flagged automatically.",
    tag: "Claude Vision API",
  },
  {
    num: "04",
    title: "Pay per view",
    desc: "Budget deducted only for verified views at your CPM rate. Distributors paid same day. You see every rupee move in real time.",
    tag: "Same-day payouts",
  },
];

const BrandWelcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">

      {/* Glow */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(232,0,13,0.09) 0%, transparent 65%)",
          top: "40%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0,
        }}
      />

      {/* Nav */}
      <nav
        className="relative flex items-center justify-between px-10 py-5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.05)", zIndex: 10 }}
      >
        <div className="font-bebas text-3xl tracking-widest cursor-pointer" style={{ letterSpacing: "5px" }} onClick={() => navigate("/")}>
          17<span className="text-brand-red">KATAS</span>
        </div>
        <div className="flex items-center gap-6">
          {["Welcome", "Deposit", "Campaign", "Dashboard"].map((step, i) => (
            <span
              key={step}
              className="font-barlow uppercase"
              style={{
                fontSize: "11px", letterSpacing: "3px",
                color: i === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)",
              }}
            >
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.1)", marginRight: "6px" }}>/</span>}
              {step}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)" }}>Brand account</span>
          <div className="w-7 h-7 bg-brand-red flex items-center justify-center font-bebas text-white text-sm">B</div>
        </div>
      </nav>

      <div className="relative px-10 pb-20" style={{ zIndex: 5 }}>

        {/* Hero */}
        <div className="text-center pt-14 pb-12">
          <div className="font-barlow uppercase text-brand-red mb-4" style={{ fontSize: "12px", letterSpacing: "6px" }}>
            You're in. Here's how it works.
          </div>
          <h1 className="font-bebas text-white leading-none mb-4" style={{ fontSize: "clamp(56px, 8vw, 96px)", letterSpacing: "2px" }}>
            DISTRIBUTION IS<br />THE REAL <span className="text-brand-red">MOAT.</span>
          </h1>
          <p className="mx-auto" style={{ fontSize: "15px", color: "rgba(255,255,255,0.35)", maxWidth: "520px", lineHeight: "1.8" }}>
            17Katas connects your brand with 120+ verified distributors who post your content on Instagram Reels. You only pay for real, verified views. Never for promises.
          </p>
        </div>

        {/* Steps */}
        <div
          className="font-barlow uppercase text-center mb-6"
          style={{ fontSize: "10px", letterSpacing: "6px", color: "rgba(255,255,255,0.2)" }}
        >
          The 17Katas process — 4 steps
        </div>

        <div
          className="grid grid-cols-4 mb-12"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-7 relative"
              style={{
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                background: i === 0 ? "rgba(232,0,13,0.03)" : "transparent",
              }}
            >
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              )}
              <div
                className="font-bebas mb-3"
                style={{ fontSize: "52px", color: i === 0 ? "rgba(232,0,13,0.15)" : "rgba(255,255,255,0.05)", letterSpacing: "2px", lineHeight: 1 }}
              >
                {step.num}
              </div>
              <div className="font-bebas text-white mb-3" style={{ fontSize: "22px", letterSpacing: "1px" }}>
                {step.title}
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: "1.7" }}>
                {step.desc}
              </p>
              <div
                className="inline-block mt-3 font-barlow uppercase"
                style={{
                  fontSize: "9px", letterSpacing: "3px",
                  border: i === 0 ? "1px solid rgba(232,0,13,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  color: i === 0 ? "#E8000D" : "rgba(255,255,255,0.2)",
                  padding: "3px 8px",
                }}
              >
                {step.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            {
              label: "Why brands choose 17Katas",
              title: "PAY FOR RESULTS.\nNOT PROMISES.",
              desc: "Every influencer agency charges you a flat fee regardless of performance. 17Katas only takes money when real verified humans have watched your content. No views, no charge.",
            },
            {
              label: "Your money is always safe",
              title: "FULL BUDGET\nCONTROL.",
              desc: "Your deposited budget sits in escrow. Unused budget can be withdrawn anytime. Pause campaigns, change CPM, or shut down entirely — your money moves on your terms.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-7 relative"
              style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #E8000D" }}
            >
              <div className="font-barlow uppercase mb-2" style={{ fontSize: "10px", letterSpacing: "4px", color: "#E8000D" }}>
                {card.label}
              </div>
              <div className="font-bebas text-white mb-3" style={{ fontSize: "28px", letterSpacing: "1px", whiteSpace: "pre-line", lineHeight: "1.1" }}>
                {card.title}
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: "1.7" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="grid grid-cols-4 mb-10"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        >
          {[
            "Payments secured by Razorpay",
            "Views verified by Claude AI",
            "Human review on every flag",
            "Withdraw unused budget anytime",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
            >
              <div className="w-1.5 h-1.5 bg-brand-red flex-shrink-0" />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: "1.5" }}>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="font-barlow uppercase mb-5" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
            Ready to start? Minimum deposit ₹2,00,000
          </div>
          <button className="btn-primary mr-4" onClick={() => navigate("/brand/deposit")}>
            Deposit budget
          </button>
          <button className="btn-secondary" onClick={() => navigate("/brand/campaign/new")}>
            Explore first
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandWelcome;
