import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FLAGS = [
  {
    initials: "SR", handle: "@shreyareel", campaign: "Summer Protein Bar",
    score: 78, reason: "Engagement ratio critically low at 0.04% — organic content averages 3–8%. 67% of like accounts have no profile photo.",
    signals: ["Bot likes", "Low engagement", "1,100 views"],
  },
  {
    initials: "QF", handle: "@quickfollows22", campaign: "Monsoon Hydration",
    score: 91, reason: "Account created 3 days ago with 0 posts before this campaign. 94% of followers have no activity. Pattern consistent with purchased account.",
    signals: ["New account", "Ghost followers", "No history"],
  },
  {
    initials: "RS", handle: "@reelspammer", campaign: "Street Style Summer",
    score: 85, reason: "Screenshot shows Insights UI from an older Instagram version — inconsistent with current app. View count font rendering differs from genuine screenshots.",
    signals: ["Edited screenshot", "UI mismatch", "Font anomaly"],
  },
];

const HISTORY = [
  { handle: "@fakeviews99", campaign: "Summer Protein Bar", score: 96, reason: "Bot farm pattern detected", action: "Banned", color: "#E8000D", days: "1d" },
  { handle: "@viewsforrent", campaign: "Monsoon Hydration", score: 88, reason: "Purchased views confirmed", action: "Rejected", color: "#E8000D", days: "2d" },
  { handle: "@legitcreator", campaign: "X5 Earbuds", score: 42, reason: "Edge case — screen recording confirmed genuine", action: "Approved", color: "#00d264", days: "3d" },
  { handle: "@spambot44", campaign: "WaveWear", score: 94, reason: "Duplicate submission from same device", action: "Banned", color: "#E8000D", days: "5d" },
];

const AdminFraud = () => {
  const navigate = useNavigate();
  const [resolved, setResolved] = useState({});

  const resolve = (i, action) => {
    setResolved((prev) => ({ ...prev, [i]: action }));
  };

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(232,0,13,0.07) 0%, transparent 65%)", top: "20%", right: "-150px", zIndex: 0 }} />

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
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 2 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 2 ? "#E8000D" : "transparent" }}
              onClick={() => navigate(item.path)}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="font-barlow uppercase px-3 py-1.5" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(232,0,13,0.8)", border: "1px solid rgba(232,0,13,0.2)" }}>Sky — Admin</div>
      </nav>

      <div className="relative px-8 pb-16 pt-6" style={{ zIndex: 5 }}>
        <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>Fraud detection — active flags</div>
        <h1 className="font-bebas text-white leading-none mb-3" style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "2px" }}>FRAUD FLAGS.</h1>
        <p className="mb-6" style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", lineHeight: "1.8", maxWidth: "560px" }}>
          Every flag is raised by the AI based on signal combinations. You make the final call — reject, ban, override, or request more evidence. You are never automated out of this decision.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-5 mb-8" style={{ background: "rgba(255,255,255,0.04)" }}>
          {[
            { val: "3", label: "Open flags", red: true },
            { val: "28", label: "Resolved all time" },
            { val: "2", label: "Banned accounts", red: true },
            { val: "94%", label: "Detection accuracy", green: true },
            { val: "₹0", label: "Fraud paid out", green: true },
          ].map((s, i) => (
            <div key={i} className="bg-brand-black py-4 px-5" style={{ borderRight: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div className="font-bebas" style={{ fontSize: "28px", letterSpacing: "1px", lineHeight: 1, color: s.green ? "#00d264" : s.red ? "#E8000D" : "#fff" }}>{s.val}</div>
              <div className="font-barlow uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.2)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Flag cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {FLAGS.map((flag, i) => (
            <div
              key={i}
              className="relative"
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(232,0,13,0.2)",
                borderTop: "2px solid #E8000D",
                opacity: resolved[i] ? 0.5 : 1,
                pointerEvents: resolved[i] ? "none" : "auto",
                transition: "opacity 0.3s",
              }}
            >
              {resolved[i] && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                  <div className="font-bebas" style={{ fontSize: "28px", letterSpacing: "2px", color: resolved[i] === "Approved" ? "#00d264" : "#E8000D", background: "#080808", padding: "8px 16px", border: `1px solid ${resolved[i] === "Approved" ? "#00d264" : "#E8000D"}` }}>
                    {resolved[i].toUpperCase()}
                  </div>
                </div>
              )}
              {/* Head */}
              <div className="p-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 font-bebas" style={{ background: "rgba(232,0,13,0.1)", border: "1px solid rgba(232,0,13,0.2)", fontSize: "12px", color: "#E8000D" }}>{flag.initials}</div>
                  <div className="flex-1">
                    <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>{flag.handle}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{flag.campaign}</div>
                  </div>
                  <div>
                    <div className="font-bebas text-brand-red" style={{ fontSize: "32px", letterSpacing: "1px", lineHeight: 1 }}>{flag.score}</div>
                    <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}>Fraud score</div>
                  </div>
                </div>
              </div>
              {/* Body */}
              <div className="p-4">
                <div className="px-3 py-2 mb-3" style={{ background: "rgba(232,0,13,0.05)", borderLeft: "2px solid rgba(232,0,13,0.3)", fontSize: "13px", color: "rgba(232,0,13,0.7)", lineHeight: "1.5" }}>
                  {flag.reason}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {flag.signals.map((s, si) => (
                    <div key={si} className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", padding: "3px 7px", background: "rgba(232,0,13,0.06)", border: "1px solid rgba(232,0,13,0.15)", color: "rgba(232,0,13,0.6)" }}>{s}</div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-1 mb-2">
                  {[
                    { label: "Reject", action: "Rejected", style: { background: "rgba(232,0,13,0.08)", border: "1px solid rgba(232,0,13,0.25)", color: "rgba(232,0,13,0.8)" } },
                    { label: "Ban account", action: "Banned", style: { background: "rgba(232,0,13,0.15)", border: "1px solid rgba(232,0,13,0.4)", color: "#E8000D" } },
                    { label: "Approve", action: "Approved", style: { background: "rgba(0,210,100,0.05)", border: "1px solid rgba(0,210,100,0.2)", color: "rgba(0,210,100,0.7)" } },
                  ].map((btn) => (
                    <button key={btn.label} className="py-2 font-barlow uppercase transition-all" style={{ fontSize: "10px", letterSpacing: "2px", cursor: "pointer", ...btn.style }}
                      onClick={() => resolve(i, btn.action)}>
                      {btn.label}
                    </button>
                  ))}
                </div>
                <button className="w-full py-2 font-barlow uppercase transition-all" style={{ fontSize: "10px", letterSpacing: "2px", background: "transparent", border: "1px solid rgba(245,166,35,0.2)", color: "rgba(245,166,35,0.6)", cursor: "pointer" }}
                  onClick={() => alert(`Screen recording request sent to ${flag.handle}`)}>
                  Request Insights recording
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* History */}
        <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
            <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Resolution history</div>
            <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)", padding: "3px 8px" }}>Last 7 days</div>
          </div>
          {HISTORY.map((h, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3" style={{ borderBottom: i < HISTORY.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: h.color }} />
              <div className="flex-1" style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: "1.5" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{h.handle}</span> — {h.campaign} — Score {h.score} — {h.reason}
              </div>
              <div className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: h.action === "Approved" ? "rgba(0,210,100,0.6)" : "rgba(232,0,13,0.6)" }}>{h.action}</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)", minWidth: "24px", textAlign: "right" }}>{h.days}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminFraud;
