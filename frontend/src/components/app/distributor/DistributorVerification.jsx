import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CHECKS = [
  { name: "Reel URL validated", desc: "Instagram Reel URL is live, public, and accessible", state: "pass" },
  { name: "Handle verified", desc: "@ankitfitness matches the registered account", state: "pass" },
  { name: "Screenshot authenticity", desc: "Instagram Insights UI elements verified as genuine", state: "pass" },
  { name: "Product visibility", desc: "NutriForce protein bar detected in opening frames", state: "pass" },
  { name: "Engagement ratio check", desc: "Analysing views-to-likes-to-comments ratio for authenticity", state: "checking" },
  { name: "Audio compliance", desc: "Transcribing audio to verify brand mention", state: "checking" },
  { name: "Hashtag verification", desc: "Confirming #NutriForce and #FuelYourDay in caption", state: "pending" },
  { name: "View count cross-check", desc: "Comparing screenshot view count with live Reel data", state: "pending" },
  { name: "Fraud score", desc: "Final fraud probability score from all signals combined", state: "pending" },
];

const stateColors = { pass: "#00d264", checking: "#f5a623", pending: "rgba(255,255,255,0.2)", fail: "#E8000D" };
const stateLabels = { pass: "Passed", checking: "Checking...", pending: "Pending", fail: "Failed" };

const DistributorVerification = () => {
  const navigate = useNavigate();
  const [checks, setChecks] = useState(CHECKS.map((c) => c.state));
  const [allPassed, setAllPassed] = useState(false);

  useEffect(() => {
    let idx = 4;
    const interval = setInterval(() => {
      setChecks((prev) => {
        const next = [...prev];
        const checkingIdx = next.findIndex((s) => s === "checking");
        if (checkingIdx === -1) { clearInterval(interval); setAllPassed(true); return next; }
        next[checkingIdx] = "pass";
        const nextPending = next.findIndex((s) => s === "pending");
        if (nextPending !== -1) next[nextPending] = "checking";
        idx++;
        return next;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(232,0,13,0.07) 0%, transparent 65%)", top: "30%", left: "50%", transform: "translateX(-50%)", zIndex: 0 }} />

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
            <div key={item.label} className="font-barlow uppercase px-4 py-2 cursor-pointer border-b-2 transition-all"
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 1 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 1 ? "#E8000D" : "transparent" }}
              onClick={() => navigate(item.path)}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)" }}>Distributor</span>
          <div className="w-7 h-7 bg-brand-red flex items-center justify-center font-bebas text-white text-sm">D</div>
        </div>
      </nav>

      <div className="relative grid px-8 pb-16 pt-6 gap-6" style={{ zIndex: 5, gridTemplateColumns: "1fr 280px" }}>

        {/* LEFT */}
        <div>
          <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>Submission received — verification in progress</div>
          <h1 className="font-bebas text-white leading-none mb-2" style={{ fontSize: "clamp(44px, 6vw, 68px)", letterSpacing: "2px" }}>
            VERIFYING YOUR<br /><span className="text-brand-red">CLIP.</span>
          </h1>
          <p className="mb-6" style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", lineHeight: "1.8", maxWidth: "480px" }}>
            Claude AI is checking every requirement right now. You can see exactly what is being checked. No black box — full transparency.
          </p>

          {/* Step tabs */}
          <div className="flex mb-6" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {["1. Post Reel", "2. Submit proof", "3. Get verified", "4. Get paid"].map((s, i) => (
              <div key={i} className="flex-1 py-2.5 text-center font-barlow uppercase" style={{
                fontSize: "11px", letterSpacing: "3px",
                background: i === 2 ? (allPassed ? "rgba(0,210,100,0.08)" : "rgba(245,166,35,0.08)") : "transparent",
                color: i < 2 ? "rgba(0,210,100,0.8)" : i === 2 ? (allPassed ? "#00d264" : "rgba(245,166,35,0.9)") : i === 3 && allPassed ? "rgba(0,210,100,0.8)" : "rgba(255,255,255,0.25)",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                {s}
              </div>
            ))}
          </div>

          {/* Status hero */}
          <div
            className="text-center py-8 mb-6 relative"
            style={{
              background: "#0a0a0a",
              border: `1px solid ${allPassed ? "rgba(0,210,100,0.2)" : "rgba(245,166,35,0.2)"}`,
              borderTop: `2px solid ${allPassed ? "#00d264" : "rgba(245,166,35,0.8)"}`,
            }}
          >
            {!allPassed ? (
              <div
                className="w-16 h-16 mx-auto mb-5 rounded-full"
                style={{
                  border: "2px solid rgba(245,166,35,0.9)",
                  borderTop: "2px solid rgba(245,166,35,0.2)",
                  animation: "spin 1.5s linear infinite",
                }}
              />
            ) : (
              <div className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ border: "2px solid #00d264", background: "rgba(0,210,100,0.08)", fontSize: "28px" }}>
                ✓
              </div>
            )}
            <div className="font-bebas mb-2" style={{ fontSize: "32px", letterSpacing: "2px", color: allPassed ? "#00d264" : "rgba(245,166,35,0.9)" }}>
              {allPassed ? "Verification complete" : "Verification running"}
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", lineHeight: "1.7" }}>
              {allPassed
                ? "All checks passed. Your payout has been triggered automatically."
                : "Claude Vision API is analysing your submission.\nResults appear below as each check completes."}
            </p>
            {!allPassed && (
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" style={{ animation: "pulse 1.2s infinite" }} />
                Estimated 15–20 minutes remaining
              </div>
            )}
          </div>

          {/* Check list */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>AI verification checklist</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(245,166,35,0.25)", color: "rgba(245,166,35,0.7)", padding: "3px 8px" }}>Live results</div>
            </div>
            {CHECKS.map((check, i) => {
              const state = checks[i];
              return (
                <div key={i} className="flex items-center gap-4 px-5 py-3" style={{ borderBottom: i < CHECKS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <div
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold"
                    style={{
                      border: `1px solid ${stateColors[state]}33`,
                      background: `${stateColors[state]}0f`,
                      color: stateColors[state],
                      animation: state === "checking" ? "pulse 1.5s infinite" : "none",
                    }}
                  >
                    {state === "pass" ? "✓" : state === "fail" ? "✕" : state === "checking" ? "~" : "○"}
                  </div>
                  <div className="flex-1">
                    <div className="font-barlow uppercase" style={{ fontSize: "12px", letterSpacing: "2px", color: "#fff", marginBottom: "2px" }}>{check.name}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{check.desc}</div>
                  </div>
                  <div className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: stateColors[state] }}>{stateLabels[state]}</div>
                </div>
              );
            })}
          </div>

          {/* Submission details */}
          <div className="p-5 mt-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="font-barlow uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Submission details</div>
            {[
              { key: "Campaign", val: "Summer Protein Bar" },
              { key: "Submitted", val: "2 minutes ago" },
              { key: "View count (screenshot)", val: "8,420" },
              { key: "Status", val: allPassed ? "Passed" : "Verifying", color: allPassed ? "#00d264" : "rgba(245,166,35,0.9)" },
              { key: "Potential payout", val: "₹758" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between py-2" style={{ borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>{row.key}</span>
                <span className="font-bebas" style={{ fontSize: "16px", letterSpacing: "1px", color: row.color || "#fff" }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {[
            { color: "amber", label: "What happens next", text: "Every check runs simultaneously. Once all pass, your payout triggers automatically — no manual approval needed for clean submissions." },
            { color: "green", label: "If everything passes", text: "Payment lands same day. ₹758 goes directly to your registered bank account via Razorpay. No action needed from you." },
            { color: "red", label: "If something is flagged", text: "You will see exactly which check failed and why. A human reviewer looks at your submission personally. You are never rejected by AI alone." },
          ].map((card, i) => {
            const colors = { amber: { border: "rgba(245,166,35,0.2)", top: "rgba(245,166,35,0.8)", label: "rgba(245,166,35,0.6)" }, green: { border: "rgba(0,210,100,0.15)", top: "#00d264", label: "rgba(0,210,100,0.6)" }, red: { border: "rgba(232,0,13,0.2)", top: "#E8000D", label: "rgba(232,0,13,0.6)" } };
            const c = colors[card.color];
            return (
              <div key={i} className="p-4 mb-3 relative" style={{ background: "#0a0a0a", border: `1px solid ${c.border}`, borderTop: `2px solid ${c.top}` }}>
                <div className="font-barlow uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "4px", color: c.label }}>{card.label}</div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: "1.7" }} dangerouslySetInnerHTML={{ __html: card.text.replace(/payment lands same day/i, "<strong style='color:rgba(255,255,255,0.6)'>Payment lands same day.</strong>").replace(/a human reviewer/i, "<strong style='color:rgba(255,255,255,0.6)'>A human reviewer</strong>") }} />
              </div>
            );
          })}

          {/* Locked payout */}
          <div className="p-4 mb-3" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="font-barlow uppercase mb-2" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Pending payout</div>
            <div className="font-bebas text-center my-3" style={{ fontSize: "52px", letterSpacing: "2px", color: allPassed ? "#00d264" : "rgba(255,255,255,0.12)" }}>₹758</div>
            <div className="flex items-center justify-center gap-2 font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: allPassed ? "rgba(0,210,100,0.8)" : "rgba(255,255,255,0.2)" }}>
              {allPassed ? "✓ Payout triggered" : "🔒 Unlocks on verification"}
            </div>
          </div>

          {/* Other submissions */}
          <div className="p-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="font-barlow uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Your recent submissions</div>
            {[
              { name: "AquaZen Monsoon", amount: "₹675", status: "Paid", views: "9,000" },
              { name: "WaveWear Summer", amount: "₹330", status: "Paid", views: "6,000" },
              { name: "Summer Protein Bar", amount: "₹758", status: "Verifying", views: "8,420" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontFamily: "Manrope" }}>{s.name}</div>
                  <div className="font-barlow uppercase mt-0.5" style={{ fontSize: "9px", letterSpacing: "2px", color: i < 2 ? "rgba(0,210,100,0.7)" : "rgba(245,166,35,0.7)" }}>{s.status} — {s.amount}</div>
                </div>
                <div className="font-bebas" style={{ fontSize: "16px", color: "#fff", letterSpacing: "1px" }}>{s.views} views</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
};

export default DistributorVerification;
