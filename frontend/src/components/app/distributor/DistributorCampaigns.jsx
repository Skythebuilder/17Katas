import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CAMPAIGNS = [
  {
    initials: "NF", brand: "NutriForce India", name: "Summer Protein Bar",
    cpm: 90, brief: "Post a Reel using our protein bar in your morning workout routine. Show the product in the first 3 seconds. Keep tone energetic and authentic.",
    tags: ["Fitness", "#NutriForce", "#FuelYourDay", "Energetic tone"],
    budget: "₹1.8L left", days: "9 days", distributors: 23, hot: true, category: "Fitness",
  },
  {
    initials: "AQ", brand: "AquaZen Beverages", name: "Monsoon Hydration",
    cpm: 75, brief: "Show yourself staying hydrated during monsoon season. Feature our electrolyte drink in a natural lifestyle setting. Relatable and honest tone.",
    tags: ["Lifestyle", "#AquaZen", "#MonsoonFuel", "Lifestyle tone"],
    budget: "₹2.9L left", days: "21 days", distributors: 11, isNew: true, category: "Lifestyle",
  },
  {
    initials: "TX", brand: "TechXpress", name: "Unbox the X5 Earbuds",
    cpm: 60, brief: "Do a genuine unboxing and first impressions review of X5 wireless earbuds. Show sound quality, design, and comfort. Honest reviews preferred.",
    tags: ["Tech", "#TechXpress", "Informative tone"],
    budget: "₹1.2L left", days: "14 days", distributors: 8, category: "Tech",
  },
  {
    initials: "WV", brand: "WaveWear India", name: "Street Style Summer",
    cpm: 55, brief: "Style a summer OOTD featuring our WaveWear collection. Show at least 2 items from the range. Aesthetic, aspirational, fashion-forward content only.",
    tags: ["Fashion", "#WaveWear", "Aspirational tone"],
    budget: "₹80K left", days: "6 days", distributors: 31, category: "Fashion",
  },
];

const FILTERS = ["All", "Fitness", "Lifestyle", "Tech", "Fashion"];

const HOW = [
  { num: "01", title: "Pick a campaign", desc: "Read the brief carefully. Choose what fits your content style." },
  { num: "02", title: "Post the Reel", desc: "Follow the brief exactly. AI checks every requirement automatically." },
  { num: "03", title: "Submit proof", desc: "Upload your Reel screenshot and the live URL for verification." },
  { num: "04", title: "Get paid today", desc: "Views verified, money moves same day. No waiting, no chasing." },
];

const DistributorCampaigns = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? CAMPAIGNS
    : CAMPAIGNS.filter((c) => c.category === activeFilter);

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div
        className="pointer-events-none absolute rounded-full"
        style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(232,0,13,0.07) 0%, transparent 65%)", top: "20%", right: "-150px", zIndex: 0 }}
      />

      {/* Nav */}
      <nav className="relative flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)", zIndex: 10 }}>
        <div className="font-bebas text-3xl cursor-pointer" style={{ letterSpacing: "5px" }} onClick={() => navigate("/")}>
          17<span className="text-brand-red">KATAS</span>
        </div>
        <div className="flex items-center">
          {[
            { label: "Campaigns", path: "/distributor/campaigns" },
            { label: "My submissions", path: "/distributor/submit" },
            { label: "Earnings", path: "/distributor/earnings" },
            { label: "Profile", path: "/distributor/profile" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="font-barlow uppercase px-4 py-2 cursor-pointer border-b-2 transition-all"
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 0 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 0 ? "#E8000D" : "transparent" }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="font-bebas" style={{ fontSize: "18px", letterSpacing: "1px", color: "#00d264" }}>₹0</div>
            <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(0,210,100,0.5)" }}>Earned today</div>
          </div>
          <div className="w-7 h-7 bg-brand-red flex items-center justify-center font-bebas text-white text-sm">D</div>
        </div>
      </nav>

      <div className="relative px-8 pb-16 pt-6" style={{ zIndex: 5 }}>

        {/* Top bar */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>
              120+ distributors earning right now
            </div>
            <h1 className="font-bebas text-white leading-none" style={{ fontSize: "clamp(44px, 6vw, 72px)", letterSpacing: "2px" }}>
              PICK A CAMPAIGN.<br />START <span className="text-brand-red">EARNING.</span>
            </h1>
            <p className="mt-2" style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)" }}>
              Choose a campaign that fits your content. Post the Reel. Get paid same day.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="font-barlow uppercase transition-all"
                style={{
                  fontSize: "11px", letterSpacing: "3px", padding: "8px 16px",
                  background: activeFilter === f ? "#E8000D" : "transparent",
                  border: activeFilter === f ? "1px solid #E8000D" : "1px solid rgba(255,255,255,0.08)",
                  color: activeFilter === f ? "#fff" : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-4 mb-6" style={{ background: "rgba(255,255,255,0.04)" }}>
          {[
            { val: "8", label: "Active campaigns" },
            { val: "₹75", label: "Avg CPM today", green: true },
            { val: "120+", label: "Distributors earning" },
            { val: "0 Days", label: "To get paid", green: true },
          ].map((s, i) => (
            <div key={i} className="bg-brand-black py-4 px-5" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div className="font-bebas" style={{ fontSize: "28px", letterSpacing: "1px", lineHeight: 1, color: s.green ? "#00d264" : "#fff" }}>{s.val}</div>
              <div className="font-barlow uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Campaign grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {filtered.map((c, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              style={{
                background: "#0a0a0a",
                border: c.hot || c.isNew ? "1px solid rgba(232,0,13,0.25)" : "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "rgba(232,0,13,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = c.hot || c.isNew ? "rgba(232,0,13,0.25)" : "rgba(255,255,255,0.06)"; }}
              onClick={() => navigate("/distributor/submit")}
            >
              {(c.hot || c.isNew) && <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />}
              {c.hot && (
                <div className="absolute top-3 right-3 font-barlow uppercase text-white bg-brand-red" style={{ fontSize: "9px", letterSpacing: "3px", padding: "3px 8px" }}>Hot</div>
              )}
              {c.isNew && (
                <div className="absolute top-3 right-3 font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", padding: "3px 8px", background: "rgba(0,210,100,0.12)", border: "1px solid rgba(0,210,100,0.3)", color: "rgba(0,210,100,0.9)" }}>New</div>
              )}

              {/* Card top */}
              <div className="flex items-start gap-3 p-5 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 font-bebas" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>{c.initials}</div>
                <div className="flex-1">
                  <div className="font-barlow uppercase mb-1" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.4)" }}>{c.brand}</div>
                  <div className="font-bebas text-white" style={{ fontSize: "22px", letterSpacing: "1px", lineHeight: 1 }}>{c.name}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-bebas text-brand-red" style={{ fontSize: "30px", letterSpacing: "1px", lineHeight: 1 }}>₹{c.cpm}</div>
                  <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}>Per 1K views</div>
                </div>
              </div>

              {/* Brief + tags */}
              <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                <p className="mb-3" style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: "1.6", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{c.brief}</p>
                <div className="flex flex-wrap gap-1">
                  {c.tags.map((t, ti) => (
                    <div key={ti} className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", padding: "3px 8px", background: ti === 0 ? "rgba(232,0,13,0.07)" : "rgba(255,255,255,0.04)", border: ti === 0 ? "1px solid rgba(232,0,13,0.2)" : "1px solid rgba(255,255,255,0.07)", color: ti === 0 ? "rgba(232,0,13,0.8)" : "rgba(255,255,255,0.3)" }}>{t}</div>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between px-5 py-3">
                <div>
                  <div className="flex gap-4 mb-1">
                    {[`Budget: ${c.budget}`, `Ends: ${c.days}`, `${c.distributors} posting`].map((m, mi) => (
                      <span key={mi} className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}>{m}</span>
                    ))}
                  </div>
                  <div className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "1px", color: "#00d264" }}>
                    Est. ₹{(c.cpm * 10).toLocaleString("en-IN")} for 10K views
                  </div>
                </div>
                <button
                  className="btn-primary"
                  style={{ padding: "8px 20px", fontSize: "12px", letterSpacing: "3px" }}
                  onClick={(e) => { e.stopPropagation(); navigate("/distributor/submit"); }}
                >
                  Post this
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Locked teaser */}
        <div
          className="text-center py-6 mb-8 font-barlow uppercase"
          style={{ border: "1px dashed rgba(255,255,255,0.06)", fontSize: "11px", letterSpacing: "4px", color: "rgba(255,255,255,0.2)" }}
        >
          2 more campaigns available — complete your profile to unlock all categories
        </div>

        {/* How it works */}
        <div className="grid grid-cols-4 border" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0a0a0a" }}>
          {HOW.map((h, i) => (
            <div key={i} className="p-5" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div className="font-bebas mb-2" style={{ fontSize: "36px", color: "rgba(232,0,13,0.2)", letterSpacing: "1px", lineHeight: 1 }}>{h.num}</div>
              <div className="font-bebas text-white mb-2" style={{ fontSize: "18px", letterSpacing: "1px" }}>{h.title}</div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: "1.6" }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistributorCampaigns;
