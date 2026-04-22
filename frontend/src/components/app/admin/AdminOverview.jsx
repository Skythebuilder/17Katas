import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TX_FEED = [
  { color: "#00d264", name: "Brand deposit — NutriForce India", meta: "Summer Protein Bar campaign", amount: "+₹2,00,000", time: "2m", type: "in" },
  { color: "rgba(255,255,255,0.3)", name: "Payout — @ankitfitness", meta: "8,420 verified views · ₹90 CPM", amount: "-₹758", time: "4m", type: "out" },
  { color: "#E8000D", name: "Platform cut collected", meta: "20% of ₹758 payout", amount: "₹152", time: "4m", type: "cut" },
  { color: "rgba(255,255,255,0.3)", name: "Payout — @vikramlifts", meta: "12,100 verified views · ₹90 CPM", amount: "-₹1,089", time: "32m", type: "out" },
  { color: "rgba(255,255,255,0.3)", name: "Payout — @priyaruns", meta: "3,200 verified views · ₹75 CPM", amount: "-₹240", time: "1h", type: "out" },
  { color: "#00d264", name: "Brand deposit — AquaZen Beverages", meta: "Monsoon Hydration campaign", amount: "+₹3,00,000", time: "2h", type: "in" },
];

const FLAGS = [
  { handle: "@shreyareel", campaign: "Summer Protein Bar", reason: "Engagement ratio 0.04% — far below threshold", initials: "SR" },
  { handle: "@quickfollows22", campaign: "Monsoon Hydration", reason: "Account created 3 days ago — suspicious pattern", initials: "QF" },
  { handle: "@reelspammer", campaign: "Street Style Summer", reason: "Screenshot UI elements inconsistent with Instagram", initials: "RS" },
];

const SIGNUPS = [
  { initials: "MK", name: "Meera Kapoor", type: "Brand", time: "8m" },
  { initials: "RS", name: "@ravi_shoots", type: "Distributor", time: "22m" },
  { initials: "ZA", name: "ZestAway Foods", type: "Brand", time: "1h" },
  { initials: "PT", name: "@preetitravels", type: "Distributor", time: "2h" },
  { initials: "NB", name: "@nbfitness_", type: "Distributor", time: "3h" },
];

const CAMPAIGNS = [
  { name: "Summer Protein", pct: 6, budget: "₹1.88L" },
  { name: "Monsoon Hydration", pct: 3, budget: "₹2.91L" },
  { name: "X5 Earbuds", pct: 18, budget: "₹0.98L" },
  { name: "Street Style", pct: 34, budget: "₹0.53L" },
  { name: "FitGear Launch", pct: 8, budget: "₹1.38L" },
];

const HEALTH = [
  { label: "Claude Vision API", status: "Operational", ok: true },
  { label: "Razorpay X payouts", status: "Operational", ok: true },
  { label: "Supabase database", status: "Operational", ok: true },
  { label: "Netlify frontend", status: "Operational", ok: true },
  { label: "Railway backend", status: "Operational", ok: true },
  { label: "Fraud detection", status: "3 pending review", ok: false },
];

const AdminOverview = () => {
  const navigate = useNavigate();
  const [subs, setSubs] = useState(47);

  useEffect(() => {
    const t = setInterval(() => {
      setSubs((v) => v + (Math.random() > 0.6 ? 1 : 0));
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const now = new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full" style={{ width: "800px", height: "800px", background: "radial-gradient(circle, rgba(232,0,13,0.07) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }} />

      {/* Nav */}
      <nav className="relative flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)", zIndex: 10 }}>
        <div className="font-bebas text-3xl cursor-pointer" style={{ letterSpacing: "5px" }} onClick={() => navigate("/")}>
          17<span className="text-brand-red">KATAS</span>
        </div>
        <div className="flex items-center">
          {[
            { label: "Overview", path: "/admin" },
            { label: "Submissions", path: "/admin/submissions" },
            { label: "Fraud flags", path: "/admin/fraud" },
            { label: "Users", path: "/admin/users" },
            { label: "Settings", path: "/admin/settings" },
          ].map((item, i) => (
            <div key={item.label} className="font-barlow uppercase px-4 py-2 cursor-pointer border-b-2 transition-all"
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 0 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 0 ? "#E8000D" : "transparent" }}
              onClick={() => navigate(item.path)}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,210,100,0.8)", border: "1px solid rgba(0,210,100,0.2)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse 1.5s infinite" }} />
            Platform live
          </div>
          <div className="font-barlow uppercase px-3 py-1.5" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(232,0,13,0.8)", border: "1px solid rgba(232,0,13,0.2)" }}>Sky — Admin</div>
        </div>
      </nav>

      <div className="relative px-8 pb-16 pt-6" style={{ zIndex: 5 }}>

        {/* Top */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "10px", letterSpacing: "5px" }}>17Katas admin — command center</div>
            <h1 className="font-bebas text-white leading-none" style={{ fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "2px" }}>
              MONEY<br />FLOWING <span className="text-brand-red">NOW.</span>
            </h1>
            <div className="mt-2" style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>{now} — Live</div>
          </div>
          <div className="text-right">
            <div className="font-barlow uppercase mb-2" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Platform health</div>
            <div className="font-barlow uppercase px-3 py-2" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,210,100,0.7)", border: "1px solid rgba(0,210,100,0.2)" }}>All systems normal</div>
          </div>
        </div>

        {/* Money hero */}
        <div className="grid grid-cols-3 mb-5" style={{ background: "rgba(255,255,255,0.04)" }}>
          {[
            { label: "Total budget deposited", val: "₹12,40,000", sub: "Across 6 active brands", delta: "+₹2,00,000 today", top: "rgba(255,255,255,0.15)" },
            { label: "Total paid to distributors", val: "₹3,18,240", sub: "4,243 verified submissions", delta: "+₹18,240 today", top: "#00d264", green: true },
            { label: "17Katas platform revenue", val: "₹79,560", sub: "20% of all verified spend", delta: "+₹4,560 today", top: "#E8000D", red: true },
          ].map((s, i) => (
            <div key={i} className="bg-brand-black p-6 relative" style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: s.top }} />
              <div className="font-barlow uppercase mb-3" style={{ fontSize: "9px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
              <div className="font-bebas mb-2" style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "1px", lineHeight: 1, color: s.green ? "#00d264" : s.red ? "#E8000D" : "#fff" }}>{s.val}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>{s.sub}</div>
              <div className="mt-1 font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: s.green ? "rgba(0,210,100,0.6)" : s.red ? "rgba(232,0,13,0.6)" : "rgba(0,210,100,0.6)" }}>{s.delta}</div>
            </div>
          ))}
        </div>

        {/* Mid stats */}
        <div className="grid grid-cols-8 mb-5" style={{ background: "rgba(255,255,255,0.03)" }}>
          {[
            { label: "Active brands", val: "6" },
            { label: "Active distributors", val: "120+" },
            { label: "Submissions today", val: String(subs) },
            { label: "Fraud flags", val: "3", amber: true },
            { label: "Verification accuracy", val: "94%", green: true },
            { label: "Avg payout time", val: "4 hrs" },
            { label: "Pending review", val: "8", amber: true },
            { label: "Views verified today", val: "2.4L" },
          ].map((s, i) => (
            <div key={i} className="bg-brand-black py-4 px-3 text-center" style={{ borderRight: i < 7 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div className="font-bebas" style={{ fontSize: "24px", letterSpacing: "1px", lineHeight: 1, color: s.green ? "#00d264" : s.amber ? "rgba(245,166,35,0.9)" : "#fff" }}>{s.val}</div>
              <div className="font-barlow uppercase mt-1" style={{ fontSize: "8px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">

          {/* Money flow */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Live money flow</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(0,210,100,0.25)", color: "rgba(0,210,100,0.7)", padding: "3px 8px" }}>Real-time</div>
            </div>
            {TX_FEED.map((tx, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3" style={{ borderBottom: i < TX_FEED.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tx.color }} />
                <div className="flex-1">
                  <div className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "2px", color: "#fff", marginBottom: "2px" }}>{tx.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>{tx.meta}</div>
                </div>
                <div className="font-bebas" style={{ fontSize: "18px", letterSpacing: "1px", color: tx.type === "in" ? "#00d264" : tx.type === "cut" ? "#E8000D" : "rgba(255,255,255,0.5)" }}>{tx.amount}</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)", minWidth: "24px", textAlign: "right" }}>{tx.time}</div>
              </div>
            ))}
          </div>

          {/* Fraud flags */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Fraud flags — needs review</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(232,0,13,0.25)", color: "rgba(232,0,13,0.7)", padding: "3px 8px" }}>3 open</div>
            </div>
            {FLAGS.map((f, i) => (
              <div key={i} className="flex items-start gap-3 px-5 py-3 cursor-pointer" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "background 0.15s" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(232,0,13,0.03)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                onClick={() => navigate("/admin/fraud")}>
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 font-bebas" style={{ background: "rgba(232,0,13,0.08)", border: "1px solid rgba(232,0,13,0.2)", fontSize: "11px", color: "#E8000D" }}>⚑</div>
                <div className="flex-1">
                  <div className="font-barlow uppercase mb-1" style={{ fontSize: "11px", letterSpacing: "2px", color: "#fff" }}>{f.handle} — {f.campaign}</div>
                  <div style={{ fontSize: "12px", color: "rgba(232,0,13,0.6)" }}>{f.reason}</div>
                </div>
                <div className="font-barlow uppercase cursor-pointer" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>Review ›</div>
              </div>
            ))}
            <div className="px-5 py-3">
              <span className="font-barlow uppercase cursor-pointer text-brand-red" style={{ fontSize: "10px", letterSpacing: "3px" }} onClick={() => navigate("/admin/fraud")}>
                View all fraud flags ›
              </span>
            </div>
          </div>
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-3 gap-4">

          {/* Campaign budgets */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Campaign budgets</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)", padding: "3px 8px" }}>6 live</div>
            </div>
            {CAMPAIGNS.map((c, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-2.5" style={{ borderBottom: i < CAMPAIGNS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <div className="font-barlow uppercase flex-1" style={{ fontSize: "11px", letterSpacing: "2px", color: "#fff" }}>{c.name}</div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="flex-1 h-1" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-1 bg-brand-red" style={{ width: `${c.pct}%` }} />
                  </div>
                  <span className="font-bebas" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", minWidth: "28px" }}>{c.pct}%</span>
                </div>
                <div className="font-bebas" style={{ fontSize: "15px", color: "#fff", letterSpacing: "1px", minWidth: "60px", textAlign: "right" }}>{c.budget}</div>
              </div>
            ))}
          </div>

          {/* New signups */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>New signups</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(0,210,100,0.25)", color: "rgba(0,210,100,0.7)", padding: "3px 8px" }}>Today</div>
            </div>
            {SIGNUPS.map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-2.5" style={{ borderBottom: i < SIGNUPS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 font-bebas" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{s.initials}</div>
                <div className="flex-1" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{s.name}</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", padding: "2px 7px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}>{s.type}</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)", minWidth: "24px", textAlign: "right" }}>{s.time}</div>
              </div>
            ))}
          </div>

          {/* System health */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>System health</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(0,210,100,0.25)", color: "rgba(0,210,100,0.7)", padding: "3px 8px" }}>All green</div>
            </div>
            {HEALTH.map((h, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3" style={{ borderBottom: i < HEALTH.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>{h.label}</span>
                <span className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: h.ok ? "rgba(0,210,100,0.7)" : "rgba(245,166,35,0.7)" }}>{h.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  );
};

export default AdminOverview;
