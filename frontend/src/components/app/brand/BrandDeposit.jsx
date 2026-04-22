import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AMOUNTS = [
  { value: 200000, label: "₹2L", sub: "Starter budget", badge: "Popular" },
  { value: 350000, label: "₹3.5L", sub: "Growth budget", badge: "Recommended" },
  { value: 500000, label: "₹5L", sub: "Scale budget", badge: "Best value" },
];

const BrandDeposit = () => {
  const navigate = useNavigate();
  const [selectedAmt, setSelectedAmt] = useState(200000);
  const [customAmt, setCustomAmt] = useState("");
  const [cpm, setCpm] = useState(75);

  const activeAmt = customAmt && parseInt(customAmt) >= 200000 ? parseInt(customAmt) : selectedAmt;
  const views = Math.floor((activeAmt * 0.8) / cpm * 1000);
  const viewsDisplay = views >= 100000 ? `${(views / 100000).toFixed(1)}L` : views.toLocaleString("en-IN");
  const distCount = Math.min(120, Math.floor(views / 20000) + 20);

  const fmt = (n) => "₹" + n.toLocaleString("en-IN");

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">

      <div className="pointer-events-none absolute rounded-full" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(232,0,13,0.08) 0%, transparent 65%)", top: "30%", right: "-100px", zIndex: 0 }} />

      {/* Nav */}
      <nav className="relative flex items-center justify-between px-10 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.05)", zIndex: 10 }}>
        <div className="font-bebas text-3xl tracking-widest cursor-pointer" style={{ letterSpacing: "5px" }} onClick={() => navigate("/")}>
          17<span className="text-brand-red">KATAS</span>
        </div>
        <div className="flex items-center gap-6">
          {["Welcome", "Deposit", "Campaign", "Dashboard"].map((step, i) => (
            <span key={step} className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: i === 1 ? "rgba(255,255,255,0.7)" : i === 0 ? "rgba(0,210,100,0.7)" : "rgba(255,255,255,0.2)" }}>
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

      <div className="relative grid px-10 pb-20 gap-8" style={{ zIndex: 5, gridTemplateColumns: "1fr 380px" }}>

        {/* LEFT */}
        <div className="pt-10">
          <div className="font-barlow uppercase text-brand-red mb-3" style={{ fontSize: "11px", letterSpacing: "6px" }}>Step 2 of 4 — Fund your campaigns</div>
          <h1 className="font-bebas text-white leading-none mb-3" style={{ fontSize: "clamp(48px, 6vw, 80px)", letterSpacing: "2px" }}>
            DEPOSIT<br />YOUR <span className="text-brand-red">BUDGET.</span>
          </h1>
          <p className="mb-10" style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", lineHeight: "1.8", maxWidth: "480px" }}>
            Choose how much to deposit. Your money sits in secure escrow — only deducted when real verified views are delivered. Withdraw unused balance anytime.
          </p>

          {/* Amount grid */}
          <div className="font-barlow uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>Choose an amount</div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {AMOUNTS.map((a) => (
              <div
                key={a.value}
                className="p-5 cursor-pointer relative"
                style={{
                  background: selectedAmt === a.value && !customAmt ? "rgba(232,0,13,0.04)" : "#0a0a0a",
                  border: selectedAmt === a.value && !customAmt ? "1px solid #E8000D" : "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.2s",
                }}
                onClick={() => { setSelectedAmt(a.value); setCustomAmt(""); }}
              >
                {selectedAmt === a.value && !customAmt && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
                )}
                <div className="font-bebas text-white mb-1" style={{ fontSize: "32px", letterSpacing: "1px", lineHeight: 1 }}>
                  {a.label.includes("₹") ? <><span className="text-brand-red">₹</span>{a.label.replace("₹", "")}</> : a.label}
                </div>
                <div className="font-barlow uppercase mb-2" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.3)" }}>{a.sub}</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", border: "1px solid rgba(232,0,13,0.3)", color: "#E8000D", padding: "2px 7px", display: "inline-block" }}>{a.badge}</div>
              </div>
            ))}
          </div>

          {/* Custom amount */}
          <div className="flex mb-8" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="font-bebas text-white px-4 flex items-center" style={{ fontSize: "22px", borderRight: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}>₹</div>
            <input
              type="number"
              placeholder="Custom amount"
              value={customAmt}
              onChange={(e) => setCustomAmt(e.target.value)}
              className="flex-1 bg-transparent text-white px-4 py-3 outline-none font-bebas"
              style={{ fontSize: "22px", letterSpacing: "1px" }}
            />
            <div className="font-barlow uppercase px-4 flex items-center" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.2)" }}>Custom</div>
          </div>

          {/* CPM slider */}
          <div className="font-barlow uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>Set your CPM rate</div>
          <div className="p-5 mb-8" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between mb-4">
              <div className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "4px", color: "rgba(255,255,255,0.35)" }}>Cost per 1,000 views</div>
              <div className="font-bebas text-white" style={{ fontSize: "28px", letterSpacing: "1px" }}>₹<span className="text-brand-red">{cpm}</span></div>
            </div>
            <input type="range" min="50" max="200" step="5" value={cpm} onChange={(e) => setCpm(parseInt(e.target.value))} className="w-full mb-3" style={{ accentColor: "#E8000D" }} />
            <div className="flex justify-between font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>
              <span>₹50 min</span><span>₹200 max</span>
            </div>
          </div>

          {/* Estimated reach */}
          <div className="font-barlow uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>Your estimated reach</div>
          <div className="grid grid-cols-3" style={{ background: "rgba(255,255,255,0.04)" }}>
            {[
              { val: viewsDisplay, label: "Verified views" },
              { val: `${distCount}+`, label: "Distributors" },
              { val: "7–14", label: "Avg. days" },
            ].map((s, i) => (
              <div key={i} className="p-5 text-center" style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none", background: "#080808" }}>
                <div className="font-bebas text-white" style={{ fontSize: "28px", letterSpacing: "1px", lineHeight: 1 }}>
                  {s.val.includes("L") ? <>{s.val.replace("L", "")}<span className="text-brand-red">L</span></> : s.val.includes("+") ? <>{s.val.replace("+", "")}<span className="text-brand-red">+</span></> : <>{s.val}<span className="text-brand-red"> Days</span></>}
                </div>
                <div className="font-barlow uppercase mt-2" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Summary */}
        <div className="pt-10">
          {/* Order card */}
          <div className="relative mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
            <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "20px", letterSpacing: "1px" }}>Order summary</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>Secured by Razorpay escrow</div>
            </div>
            <div className="px-6 py-4">
              {[
                { key: "Deposit amount", val: fmt(activeAmt), color: "#fff" },
                { key: "Platform fee", val: "₹0", color: "#fff" },
                { key: "CPM rate", val: `₹${cpm} / 1K views`, color: "#E8000D" },
                { key: "Withdrawable", val: "Anytime", color: "#00d264", small: true },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2.5" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <span className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.3)" }}>{row.key}</span>
                  <span className={row.small ? "font-barlow uppercase" : "font-bebas"} style={{ fontSize: row.small ? "12px" : "18px", color: row.color, letterSpacing: row.small ? "2px" : "1px" }}>{row.val}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center px-6 py-4" style={{ background: "rgba(232,0,13,0.05)", borderTop: "1px solid rgba(232,0,13,0.15)" }}>
              <span className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "rgba(255,255,255,0.4)" }}>You pay today</span>
              <span className="font-bebas text-white" style={{ fontSize: "32px", letterSpacing: "1px" }}>{fmt(activeAmt)}</span>
            </div>
          </div>

          {/* Trust items */}
          <div className="flex flex-col gap-2 mb-5">
            {[
              { title: "Money in escrow.", body: "Held securely by Razorpay — not accessible to 17Katas until views are verified." },
              { title: "No lock-in.", body: "Withdraw unused balance anytime. No minimum usage, no penalties." },
              { title: "Pay for real views only.", body: "AI + human review ensures every rupee is spent on genuine, organic views." },
            ].map((t, i) => (
              <div key={i} className="flex gap-3 p-3" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-red">✓</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: "1.6" }}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{t.title}</span>{" "}{t.body}
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn-primary w-full"
            onClick={() => navigate("/brand/campaign/new")}
          >
            Proceed to pay — Razorpay
          </button>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00b4d8" }} />
            <span className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.2)" }}>Secured by Razorpay</span>
          </div>
          <p className="text-center mt-3" style={{ fontSize: "11px", color: "rgba(255,255,255,0.18)", lineHeight: "1.6" }}>
            Unused balance withdrawable anytime, no questions asked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandDeposit;
