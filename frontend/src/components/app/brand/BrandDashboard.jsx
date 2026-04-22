import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SUBMISSIONS = [
  { initials: "AK", handle: "@ankitfitness", campaign: "Summer Protein Bar", views: 8420, status: "verified", time: "2 min ago" },
  { initials: "PR", handle: "@priyaruns", campaign: "Summer Protein Bar", views: 3200, status: "verifying", time: "14 min ago" },
  { initials: "VK", handle: "@vikramlifts", campaign: "Summer Protein Bar", views: 12100, status: "verified", time: "31 min ago" },
  { initials: "SR", handle: "@shreyareel", campaign: "Summer Protein Bar", views: 1100, status: "flagged", time: "58 min ago" },
  { initials: "MJ", handle: "@mumbaijock", campaign: "Summer Protein Bar", views: 5340, status: "verified", time: "1 hr ago" },
];

const ACTIVITY = [
  { color: "#00d264", text: "@ankitfitness submission verified — 8,420 views confirmed", time: "2m" },
  { color: "#f5a623", text: "@priyaruns submission under AI review", time: "14m" },
  { color: "#E8000D", text: "@shreyareel flagged — engagement ratio suspicious", time: "58m" },
  { color: "#00d264", text: "3 new distributors joined your campaign", time: "1h" },
];

const statusColors = { verified: "#00d264", verifying: "#f5a623", flagged: "#E8000D" };
const statusLabels = { verified: "Verified", verifying: "Verifying", flagged: "Flagged" };

const BrandDashboard = () => {
  const navigate = useNavigate();
  const [views, setViews] = useState(14820);
  const [lastAdd, setLastAdd] = useState(240);

  useEffect(() => {
    const interval = setInterval(() => {
      const add = Math.floor(Math.random() * 80) + 20;
      setViews((v) => v + add);
      setLastAdd(add);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const spend = Math.round(views * 0.075);
  const remain = 200000 - spend;

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(232,0,13,0.06) 0%, transparent 65%)", bottom: "-100px", right: "-100px", zIndex: 0 }} />

      {/* Nav */}
      <nav className="relative flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)", zIndex: 10 }}>
        <div className="font-bebas text-3xl cursor-pointer" style={{ letterSpacing: "5px" }} onClick={() => navigate("/")}>
          17<span className="text-brand-red">KATAS</span>
        </div>
        <div className="flex items-center">
          {["Dashboard", "Campaigns", "Distributors", "Reports"].map((item, i) => (
            <div key={item} className="font-barlow uppercase px-4 py-2 cursor-pointer border-b-2 transition-all" style={{ fontSize: "11px", letterSpacing: "3px", color: i === 0 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 0 ? "#E8000D" : "transparent" }}>
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 font-barlow uppercase px-3 py-1.5" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,210,100,0.8)", border: "1px solid rgba(0,210,100,0.2)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse 1.5s infinite" }} />
            Live
          </div>
          <div className="w-7 h-7 bg-brand-red flex items-center justify-center font-bebas text-white text-sm">B</div>
        </div>
      </nav>

      <div className="relative px-8 pb-16 pt-6" style={{ zIndex: 5 }}>

        {/* Top bar */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="font-barlow uppercase mb-2" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>Brand dashboard — Summer Protein Bar Launch</div>
            <h1 className="font-bebas text-white leading-none" style={{ fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "2px" }}>
              YOUR CAMPAIGN IS <span className="text-brand-red">LIVE.</span>
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary" onClick={() => navigate("/brand/deposit")}>Withdraw budget</button>
            <button className="btn-primary" onClick={() => navigate("/brand/campaign/new")}>New campaign</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 mb-5" style={{ background: "rgba(255,255,255,0.04)" }}>
          {[
            { label: "Verified views today", val: views.toLocaleString("en-IN"), sub: `+${lastAdd} in last hour`, accent: true, red: false },
            { label: "Total spend", val: "₹" + spend.toLocaleString("en-IN"), sub: "of ₹2,00,000 deposited" },
            { label: "Active distributors", val: "23", sub: "Posting right now" },
            { label: "Budget remaining", val: "₹" + remain.toLocaleString("en-IN"), sub: `${((remain / 200000) * 100).toFixed(1)}% unused`, green: true },
          ].map((s, i) => (
            <div key={i} className="bg-brand-black p-5 relative" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${i === 0 ? "bg-brand-red" : "opacity-0"}`} />
              <div className="font-barlow uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
              <div className="font-bebas mb-1" style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "1px", color: s.green ? "#00d264" : "#fff", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: i === 3 ? "rgba(0,210,100,0.6)" : "rgba(255,255,255,0.2)", fontFamily: "Manrope" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: "1fr 320px" }}>

          {/* Submissions */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Recent submissions</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(0,210,100,0.25)", color: "rgba(0,210,100,0.7)", padding: "3px 8px" }}>Live feed</div>
            </div>
            {SUBMISSIONS.map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3" style={{ borderBottom: i < SUBMISSIONS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 font-bebas" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{s.initials}</div>
                <div className="flex-1">
                  <div className="font-barlow uppercase" style={{ fontSize: "12px", letterSpacing: "2px", color: "#fff" }}>{s.handle}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>{s.campaign} · {s.time}</div>
                </div>
                <div className="text-right">
                  <div className="font-bebas" style={{ fontSize: "20px", color: "#fff", letterSpacing: "1px" }}>{s.views.toLocaleString("en-IN")}</div>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColors[s.status] }} />
                    <span className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: statusColors[s.status] }}>{statusLabels[s.status]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">

            {/* Campaigns */}
            <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>My campaigns</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)", padding: "3px 8px" }}>2 total</div>
              </div>
              {[
                { name: "Summer Protein Bar", status: "live", spent: "₹" + spend.toLocaleString("en-IN"), days: "9 days left", pct: Math.min(100, spend / 2000) },
                { name: "Monsoon Hydration", status: "draft", spent: "₹0", days: "Not launched", pct: 0 },
              ].map((c, i) => (
                <div key={i} className="px-5 py-3" style={{ borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bebas text-white" style={{ fontSize: "17px", letterSpacing: "1px" }}>{c.name}</div>
                    <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", padding: "3px 8px", border: c.status === "live" ? "1px solid rgba(0,210,100,0.2)" : "1px solid rgba(255,255,255,0.1)", color: c.status === "live" ? "rgba(0,210,100,0.8)" : "rgba(255,255,255,0.3)" }}>{c.status}</div>
                  </div>
                  <div className="h-1 mb-1.5" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-1 bg-brand-red" style={{ width: `${c.pct}%` }} />
                  </div>
                  <div className="flex justify-between" style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>
                    <span>{c.spent} spent</span><span>{c.days}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity */}
            <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", flex: 1 }}>
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Live activity</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(0,210,100,0.25)", color: "rgba(0,210,100,0.7)", padding: "3px 8px" }}>Real-time</div>
              </div>
              {ACTIVITY.map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 px-5 py-3" style={{ borderBottom: i < ACTIVITY.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: a.color }} />
                  <div className="flex-1" style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: "1.5" }}>{a.text}</div>
                  <div className="font-barlow uppercase flex-shrink-0" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="font-barlow uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Budget overview</div>
            <div className="h-2 mb-3" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="h-2 bg-brand-red transition-all" style={{ width: `${(spend / 200000) * 100}%` }} />
            </div>
            {[
              { key: "Total deposited", val: "₹2,00,000", color: "#fff" },
              { key: "Total spent", val: "₹" + spend.toLocaleString("en-IN"), color: "#E8000D" },
              { key: "Available to withdraw", val: "₹" + remain.toLocaleString("en-IN"), color: "#00d264" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between py-2" style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{row.key}</span>
                <span className="font-bebas" style={{ fontSize: "18px", color: row.color, letterSpacing: "1px" }}>{row.val}</span>
              </div>
            ))}
            <button className="w-full mt-4 py-2.5 font-barlow uppercase transition-all" style={{ fontSize: "11px", letterSpacing: "3px", background: "transparent", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}
              onMouseEnter={(e) => { e.target.style.borderColor = "rgba(232,0,13,0.4)"; e.target.style.color = "#E8000D"; }}
              onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.color = "rgba(255,255,255,0.3)"; }}
              onClick={() => navigate("/brand/deposit")}
            >
              Withdraw unused budget
            </button>
          </div>

          <div className="p-5" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="font-barlow uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Verification breakdown — all time</div>
            <div className="grid grid-cols-3" style={{ background: "rgba(255,255,255,0.04)" }}>
              {[
                { val: "18", label: "Verified", color: "#00d264" },
                { val: "3", label: "Pending", color: "#f5a623" },
                { val: "2", label: "Flagged", color: "#E8000D" },
              ].map((s, i) => (
                <div key={i} className="text-center py-4" style={{ background: "#0d0d0d", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <div className="font-bebas" style={{ fontSize: "30px", color: s.color, letterSpacing: "1px", lineHeight: 1 }}>{s.val}</div>
                  <div className="font-barlow uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-4" style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", lineHeight: "1.6" }}>
              Flagged submissions go to human review. You are never charged for rejected views.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;
