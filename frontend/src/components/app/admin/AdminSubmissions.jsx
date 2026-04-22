import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SUBMISSIONS = [
  {
    initials: "SR", handle: "@shreyareel", campaign: "Summer Protein Bar", views: 1100,
    status: "flagged", time: "2m ago", fraudScore: 78, eng: 12, auth: 45,
    checks: [
      { pass: true, text: "Reel URL live and public" },
      { pass: true, text: "Screenshot not tampered" },
      { pass: false, text: "Engagement ratio 0.04% — threshold is 2%" },
      { pass: false, text: "Like accounts — 67% have no profile photo" },
      { pass: null, text: "Product visible — partially obscured" },
      { pass: true, text: "Hashtags present in caption" },
    ],
    payout: "₹99",
  },
  {
    initials: "AK", handle: "@ankitfitness", campaign: "Summer Protein Bar", views: 8420,
    status: "verified", time: "4m ago", fraudScore: 8, eng: 92, auth: 96,
    checks: [
      { pass: true, text: "Reel URL live and public" },
      { pass: true, text: "Screenshot not tampered" },
      { pass: true, text: "Engagement ratio healthy at 4.2%" },
      { pass: true, text: "Like accounts — genuine profiles" },
      { pass: true, text: "Product visible in opening frame" },
      { pass: true, text: "Hashtags present in caption" },
    ],
    payout: "₹758",
  },
  {
    initials: "PR", handle: "@priyaruns", campaign: "Monsoon Hydration", views: 3200,
    status: "pending", time: "14m ago", fraudScore: 32, eng: 71, auth: 80,
    checks: [
      { pass: true, text: "Reel URL live and public" },
      { pass: true, text: "Screenshot not tampered" },
      { pass: null, text: "Engagement ratio under review" },
      { pass: true, text: "Like accounts — mostly genuine" },
      { pass: true, text: "Product visible in frame" },
      { pass: null, text: "Audio transcription in progress" },
    ],
    payout: "₹240",
  },
  {
    initials: "VK", handle: "@vikramlifts", campaign: "Summer Protein Bar", views: 12100,
    status: "verified", time: "31m ago", fraudScore: 5, eng: 88, auth: 94,
    checks: [
      { pass: true, text: "Reel URL live and public" },
      { pass: true, text: "Screenshot not tampered" },
      { pass: true, text: "Engagement ratio healthy at 5.8%" },
      { pass: true, text: "Like accounts — genuine profiles" },
      { pass: true, text: "Product visible in opening frame" },
      { pass: true, text: "Hashtags present in caption" },
    ],
    payout: "₹1,089",
  },
];

const FILTERS = ["All (47)", "Pending review (8)", "Verified (36)", "Flagged (3)", "Rejected (0)"];
const statusColors = { verified: "#00d264", pending: "#f5a623", flagged: "#E8000D" };
const statusLabels = { verified: "Verified", pending: "Verifying", flagged: "Flagged" };

const ScoreBar = ({ val, danger }) => (
  <div className="flex items-center gap-2">
    <div className="flex-1 h-0.5" style={{ background: "rgba(255,255,255,0.06)", maxWidth: "60px" }}>
      <div className="h-0.5" style={{ width: `${val}%`, background: danger ? (val > 60 ? "#E8000D" : val > 30 ? "#f5a623" : "#00d264") : "#00d264" }} />
    </div>
    <span className="font-bebas" style={{ fontSize: "13px", color: danger ? (val > 60 ? "#E8000D" : val > 30 ? "#f5a623" : "#00d264") : "#00d264", letterSpacing: "1px", minWidth: "24px" }}>{val}</span>
  </div>
);

const AdminSubmissions = () => {
  const navigate = useNavigate();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  const [resolved, setResolved] = useState({});

  const selected = SUBMISSIONS[selectedIdx];

  const resolve = (action) => {
    setResolved((prev) => ({ ...prev, [selectedIdx]: action }));
  };

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
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
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 1 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 1 ? "#E8000D" : "transparent" }}
              onClick={() => navigate(item.path)}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="font-barlow uppercase px-3 py-1.5" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(232,0,13,0.8)", border: "1px solid rgba(232,0,13,0.2)" }}>Sky — Admin</div>
      </nav>

      <div className="relative grid px-8 pb-16 pt-6 gap-5" style={{ zIndex: 5, gridTemplateColumns: "1fr 360px" }}>

        {/* LEFT */}
        <div>
          <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>All submissions — live queue</div>
          <h1 className="font-bebas text-white leading-none mb-5" style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "2px" }}>SUBMISSIONS<br />QUEUE.</h1>

          {/* Filters */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {FILTERS.map((f, i) => (
              <button key={i} onClick={() => setActiveFilter(i)} className="font-barlow uppercase transition-all"
                style={{ fontSize: "10px", letterSpacing: "3px", padding: "7px 14px", background: activeFilter === i ? (i === 1 ? "rgba(245,166,35,0.12)" : "#E8000D") : "transparent", border: activeFilter === i ? (i === 1 ? "1px solid rgba(245,166,35,0.4)" : "1px solid #E8000D") : "1px solid rgba(255,255,255,0.08)", color: activeFilter === i ? (i === 1 ? "rgba(245,166,35,0.9)" : "#fff") : "rgba(255,255,255,0.3)", cursor: "pointer" }}>
                {f}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 mb-5" style={{ background: "rgba(255,255,255,0.04)" }}>
            {[
              { val: "47", label: "Today" },
              { val: "36", label: "Verified", green: true },
              { val: "8", label: "Pending", amber: true },
              { val: "3", label: "Flagged", red: true },
              { val: "94%", label: "Accuracy", green: true },
            ].map((s, i) => (
              <div key={i} className="bg-brand-black py-3 px-4 text-center" style={{ borderRight: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <div className="font-bebas" style={{ fontSize: "26px", letterSpacing: "1px", lineHeight: 1, color: s.green ? "#00d264" : s.amber ? "rgba(245,166,35,0.9)" : s.red ? "#E8000D" : "#fff" }}>{s.val}</div>
                <div className="font-barlow uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.2)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Submission cards */}
          <div className="flex flex-col gap-2">
            {SUBMISSIONS.map((s, i) => (
              <div
                key={i}
                className="cursor-pointer transition-all"
                style={{
                  background: "#0a0a0a",
                  border: selectedIdx === i ? "1px solid #E8000D" : s.status === "flagged" ? "1px solid rgba(232,0,13,0.25)" : s.status === "verified" ? "1px solid rgba(0,210,100,0.15)" : "1px solid rgba(255,255,255,0.06)",
                }}
                onClick={() => setSelectedIdx(i)}
              >
                <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 font-bebas" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{s.initials}</div>
                  <div className="flex-1">
                    <div className="font-barlow uppercase" style={{ fontSize: "12px", letterSpacing: "2px", color: "#fff" }}>{s.handle}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>{s.campaign}</div>
                  </div>
                  <div className="font-barlow uppercase px-2 py-1" style={{ fontSize: "9px", letterSpacing: "2px", border: `1px solid ${statusColors[s.status]}44`, color: statusColors[s.status] }}>{statusLabels[s.status]}</div>
                  <div className="font-bebas ml-2" style={{ fontSize: "20px", color: "#fff", letterSpacing: "1px" }}>{s.views.toLocaleString("en-IN")}</div>
                </div>
                <div className="flex items-center gap-6 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>Fraud</span>
                    <ScoreBar val={s.fraudScore} danger />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>Eng.</span>
                    <ScoreBar val={s.eng} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>Auth.</span>
                    <ScoreBar val={s.auth} />
                  </div>
                  <div className="ml-auto font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>{s.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Detail panel */}
        <div>
          <div className="relative" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
            <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white mb-1" style={{ fontSize: "20px", letterSpacing: "1px" }}>{selected.handle} — {statusLabels[selected.status]}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{selected.campaign} · Submitted {selected.time}</div>
            </div>
            <div className="p-5">

              {/* Fraud score */}
              <div className="text-center py-5 mb-5" style={{ background: resolved[selectedIdx] === "Approved" ? "rgba(0,210,100,0.05)" : resolved[selectedIdx] === "Rejected" ? "rgba(232,0,13,0.08)" : selected.fraudScore > 60 ? "rgba(232,0,13,0.05)" : "rgba(0,210,100,0.04)", border: `1px solid ${resolved[selectedIdx] === "Approved" ? "rgba(0,210,100,0.2)" : resolved[selectedIdx] === "Rejected" ? "rgba(232,0,13,0.25)" : selected.fraudScore > 60 ? "rgba(232,0,13,0.15)" : "rgba(0,210,100,0.15)"}` }}>
                <div className="font-barlow uppercase mb-1" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>
                  {resolved[selectedIdx] ? "Decision" : "Fraud score"}
                </div>
                <div className="font-bebas" style={{ fontSize: "56px", letterSpacing: "2px", lineHeight: 1, color: resolved[selectedIdx] === "Approved" ? "#00d264" : resolved[selectedIdx] === "Rejected" ? "#E8000D" : selected.fraudScore > 60 ? "#E8000D" : selected.fraudScore > 30 ? "#f5a623" : "#00d264" }}>
                  {resolved[selectedIdx] || selected.fraudScore}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>
                  {resolved[selectedIdx] ? `Manually ${resolved[selectedIdx].toLowerCase()} by Sky` : selected.fraudScore > 60 ? "High risk — human review required" : selected.fraudScore > 30 ? "Medium risk — review recommended" : "Low risk — clean submission"}
                </div>
              </div>

              {/* Details */}
              <div className="mb-5">
                <div className="font-barlow uppercase mb-3" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Submission details</div>
                {[
                  { key: "Views claimed", val: selected.views.toLocaleString("en-IN") },
                  { key: "Instagram handle", val: selected.handle },
                  { key: "CPM rate", val: "₹90 / 1K" },
                  { key: "Payout if approved", val: selected.payout },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between py-2" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>{row.key}</span>
                    <span className="font-bebas" style={{ fontSize: "16px", color: "#fff", letterSpacing: "1px" }}>{row.val}</span>
                  </div>
                ))}
              </div>

              {/* Checks */}
              <div className="mb-5">
                <div className="font-barlow uppercase mb-3" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>AI verification checks</div>
                {selected.checks.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: i < selected.checks.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ color: c.pass === true ? "#00d264" : c.pass === false ? "#E8000D" : "#f5a623" }}>
                      {c.pass === true ? "✓" : c.pass === false ? "✕" : "~"}
                    </div>
                    <span style={{ fontSize: "12px", color: c.pass === false ? "rgba(232,0,13,0.7)" : c.pass === null ? "rgba(245,166,35,0.7)" : "rgba(255,255,255,0.4)" }}>{c.text}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              {!resolved[selectedIdx] ? (
                <>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <button className="py-3 font-barlow uppercase transition-all" style={{ fontSize: "11px", letterSpacing: "3px", background: "rgba(0,210,100,0.08)", border: "1px solid rgba(0,210,100,0.25)", color: "rgba(0,210,100,0.8)", cursor: "pointer", clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}
                      onMouseEnter={(e) => e.target.style.background = "rgba(0,210,100,0.15)"}
                      onMouseLeave={(e) => e.target.style.background = "rgba(0,210,100,0.08)"}
                      onClick={() => resolve("Approved")}>
                      Override — Approve
                    </button>
                    <button className="py-3 font-barlow uppercase transition-all" style={{ fontSize: "11px", letterSpacing: "3px", background: "rgba(232,0,13,0.08)", border: "1px solid rgba(232,0,13,0.25)", color: "rgba(232,0,13,0.8)", cursor: "pointer", clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}
                      onMouseEnter={(e) => e.target.style.background = "rgba(232,0,13,0.15)"}
                      onMouseLeave={(e) => e.target.style.background = "rgba(232,0,13,0.08)"}
                      onClick={() => resolve("Rejected")}>
                      Reject
                    </button>
                  </div>
                  <button className="w-full py-2.5 font-barlow uppercase transition-all" style={{ fontSize: "11px", letterSpacing: "3px", background: "transparent", border: "1px solid rgba(245,166,35,0.2)", color: "rgba(245,166,35,0.6)", cursor: "pointer" }}
                    onClick={() => alert(`Screen recording request sent to ${selected.handle}`)}>
                    Request screen recording of Insights
                  </button>
                </>
              ) : (
                <div className="py-3 text-center font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: resolved[selectedIdx] === "Approved" ? "rgba(0,210,100,0.7)" : "rgba(232,0,13,0.7)", border: `1px solid ${resolved[selectedIdx] === "Approved" ? "rgba(0,210,100,0.2)" : "rgba(232,0,13,0.2)"}` }}>
                  {resolved[selectedIdx]} — {resolved[selectedIdx] === "Approved" ? "Payout triggered" : "Distributor notified"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubmissions;
