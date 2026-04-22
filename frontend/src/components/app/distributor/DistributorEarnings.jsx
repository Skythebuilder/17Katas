import { useNavigate } from "react-router-dom";

const PAYOUTS = [
  { name: "Summer Protein Bar", brand: "NutriForce India", date: "Today, 2:14 PM", views: 8420, amount: "₹758", status: "verifying" },
  { name: "Monsoon Hydration", brand: "AquaZen Beverages", date: "Yesterday, 6:40 PM", views: 9000, amount: "₹675", status: "paid" },
  { name: "Street Style Summer", brand: "WaveWear India", date: "Apr 19, 11:22 AM", views: 6000, amount: "₹330", status: "paid" },
  { name: "X5 Earbuds Unbox", brand: "TechXpress", date: "Apr 18, 3:55 PM", views: 22500, amount: "₹1,350", status: "paid" },
  { name: "Monsoon Hydration", brand: "AquaZen Beverages", date: "Apr 16, 9:10 AM", views: 18200, amount: "₹1,365", status: "paid" },
  { name: "Summer Protein Bar", brand: "NutriForce India", date: "Apr 14, 4:30 PM", views: 31000, amount: "₹2,790", status: "paid" },
];

const BAR_HEIGHTS = [38, 52, 70, 60, 85, 108]; // relative heights for last 6 months

const DistributorEarnings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div
        className="pointer-events-none absolute rounded-full"
        style={{ width: "700px", height: "700px", background: "radial-gradient(circle, rgba(0,210,100,0.05) 0%, transparent 65%)", top: "20%", right: "-200px", zIndex: 0 }}
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
            <div key={item.label} className="font-barlow uppercase px-4 py-2 cursor-pointer border-b-2 transition-all"
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 2 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 2 ? "#E8000D" : "transparent" }}
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

      <div className="relative px-8 pb-16 pt-6" style={{ zIndex: 5 }}>

        {/* Top bar */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>Your earnings — all time</div>
            <h1 className="font-bebas text-white leading-none" style={{ fontSize: "clamp(44px, 6vw, 68px)", letterSpacing: "2px" }}>
              EVERY RUPEE<br />YOU HAVE <span style={{ color: "#00d264" }}>EARNED.</span>
            </h1>
            <p className="mt-2" style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)" }}>
              Verified views only. Zero fake money. Every payout sent same day to your bank account.
            </p>
          </div>
          <button className="btn-primary" onClick={() => navigate("/distributor/profile")}>
            Update bank details
          </button>
        </div>

        {/* Hero stats */}
        <div className="grid grid-cols-4 mb-6" style={{ background: "rgba(255,255,255,0.04)" }}>
          {[
            { label: "Total earned", val: "₹18,640", sub: "Across 24 campaigns", green: true, acc: true },
            { label: "This month", val: "₹6,758", sub: "April 2026", green: true, acc: true },
            { label: "Pending payout", val: "₹758", sub: "Verifying now — 1 submission", amber: true },
            { label: "Total verified views", val: "24L+", sub: "Organic, AI-verified" },
          ].map((s, i) => (
            <div key={i} className="bg-brand-black py-5 px-6 relative" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              {s.acc && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "#00d264" }} />}
              <div className="font-barlow uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
              <div className="font-bebas mb-1" style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "1px", lineHeight: 1, color: s.green ? "#00d264" : s.amber ? "rgba(245,166,35,0.9)" : "#fff" }}>{s.val}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "1fr 300px" }}>

          {/* Left — chart + history */}
          <div>
            {/* Bar chart */}
            <div className="mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Monthly earnings</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)", padding: "3px 8px" }}>Last 6 months</div>
              </div>
              <div className="px-5 pt-4 pb-4">
                <div className="flex items-end gap-3" style={{ height: "120px" }}>
                  {["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"].map((month, i) => (
                    <div key={month} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full transition-all"
                        style={{
                          height: `${BAR_HEIGHTS[i]}px`,
                          background: i === 5 ? "rgba(0,210,100,0.2)" : "rgba(0,210,100,0.1)",
                          borderTop: i === 5 ? "2px solid #00d264" : "2px solid rgba(0,210,100,0.35)",
                          transition: "all 0.3s",
                        }}
                      />
                      <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "1px", color: i === 5 ? "rgba(0,210,100,0.7)" : "rgba(255,255,255,0.2)" }}>{month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payout history */}
            <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Payout history</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(0,210,100,0.25)", color: "rgba(0,210,100,0.7)", padding: "3px 8px" }}>All verified</div>
              </div>
              {PAYOUTS.map((p, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3" style={{ borderBottom: i < PAYOUTS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <div className="flex-1">
                    <div className="font-barlow uppercase" style={{ fontSize: "12px", letterSpacing: "2px", color: "#fff", marginBottom: "2px" }}>{p.name}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>{p.brand} · {p.date}</div>
                  </div>
                  <div className="text-right mr-4">
                    <div className="font-bebas" style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px" }}>{p.views.toLocaleString("en-IN")}</div>
                    <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>views</div>
                  </div>
                  <div className="text-right min-w-16">
                    <div className="font-bebas" style={{ fontSize: "20px", letterSpacing: "1px", color: p.status === "paid" ? "#00d264" : "rgba(245,166,35,0.8)" }}>{p.amount}</div>
                    <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: p.status === "paid" ? "rgba(0,210,100,0.5)" : "rgba(245,166,35,0.5)" }}>{p.status === "paid" ? "Paid" : "Verifying"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bank + tips */}
          <div>
            {/* Pending payout */}
            <div className="p-5 mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(0,210,100,0.15)", borderTop: "2px solid rgba(0,210,100,0.5)" }}>
              <div className="font-barlow uppercase mb-2" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(0,210,100,0.5)" }}>Pending verification</div>
              <div className="font-bebas" style={{ fontSize: "44px", letterSpacing: "2px", color: "#00d264", lineHeight: 1 }}>₹758</div>
              <p className="mt-2" style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)", lineHeight: "1.6" }}>
                Summer Protein Bar submission verifying now. Payout triggers automatically the moment it passes.
              </p>
            </div>

            {/* Bank account */}
            <div className="p-5 mb-4 relative" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderTop: "2px solid #E8000D" }}>
              <div className="font-barlow uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Payout account</div>
              <div className="font-bebas text-white mb-1" style={{ fontSize: "22px", letterSpacing: "1px" }}>HDFC Bank</div>
              <div className="mb-3" style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)" }}>•••• •••• •••• 4821 — Savings</div>
              <div className="flex items-center gap-2 font-barlow uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,210,100,0.7)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Verified and active
              </div>
              <button
                className="w-full py-2.5 font-barlow uppercase transition-all"
                style={{ fontSize: "11px", letterSpacing: "3px", background: "transparent", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}
                onMouseEnter={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "rgba(255,255,255,0.6)"; }}
                onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.color = "rgba(255,255,255,0.3)"; }}
                onClick={() => navigate("/distributor/profile")}
              >
                Edit bank details
              </button>
            </div>

            {/* Tips */}
            <div className="p-5" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="font-barlow uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Earn more — tips</div>
              {[
                "Pick campaigns with the highest CPM rate first — same effort, more money per view",
                "Post Reels in the first 2 days of a campaign — most budget is spent early",
                "Higher watch time = better organic reach = more verified views = more earnings",
                "Campaigns with fewer distributors mean less competition for the same budget",
              ].map((tip, i) => (
                <div key={i} className="flex gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-brand-red flex-shrink-0 mt-1.5" />
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: "1.6" }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorEarnings;
