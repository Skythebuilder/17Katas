import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NICHES = ["Fitness", "Health", "Food", "Tech", "Fashion", "Travel", "Gaming", "Finance"];

const DistributorProfile = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("personal");
  const [selectedNiches, setSelectedNiches] = useState(["Fitness", "Health"]);
  const [notifications, setNotifications] = useState({ payouts: true, campaigns: true, verification: true, weekly: false });
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Ankit Kumar",
    handle: "@ankitfitness",
    email: "ankit@gmail.com",
    phone: "+91 98765 43210",
    city: "Mumbai, Maharashtra",
    bankName: "HDFC Bank",
    accountHolder: "Ankit Kumar",
    ifsc: "HDFC0001234",
  });

  const toggleNiche = (n) => {
    setSelectedNiches((prev) => prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const NAV_ITEMS = [
    { key: "personal", label: "Personal info" },
    { key: "bank", label: "Bank details" },
    { key: "niches", label: "Content niches" },
    { key: "notifications", label: "Notifications" },
  ];

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(232,0,13,0.06) 0%, transparent 65%)", top: "10%", right: "-100px", zIndex: 0 }} />

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
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 3 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 3 ? "#E8000D" : "transparent" }}
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

      <div className="relative grid px-8 pb-16 pt-6 gap-6" style={{ zIndex: 5, gridTemplateColumns: "240px 1fr" }}>

        {/* Sidebar */}
        <div>
          {/* Profile hero */}
          <div className="relative p-6 text-center mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderTop: "2px solid #E8000D" }}>
            <div className="relative w-16 h-16 mx-auto mb-3">
              <div className="w-16 h-16 flex items-center justify-center font-bebas" style={{ background: "#1a1a1a", border: "2px solid rgba(232,0,13,0.3)", fontSize: "24px", color: "#E8000D" }}>AK</div>
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-400" style={{ border: "2px solid #080808" }} />
            </div>
            <div className="font-bebas text-white mb-1" style={{ fontSize: "22px", letterSpacing: "1px" }}>{form.name}</div>
            <div className="font-barlow uppercase text-brand-red mb-4" style={{ fontSize: "11px", letterSpacing: "3px" }}>{form.handle}</div>
            <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.05)", margin: "0 -4px" }}>
              {[
                { val: "₹18K", label: "Earned" },
                { val: "24", label: "Campaigns" },
                { val: "24L", label: "Views" },
                { val: "4.8", label: "Rating" },
              ].map((s, i) => (
                <div key={i} className="bg-brand-black py-3 text-center">
                  <div className="font-bebas" style={{ fontSize: "18px", color: i < 2 ? "#00d264" : "#fff", letterSpacing: "1px", lineHeight: 1 }}>{s.val}</div>
                  <div className="font-barlow uppercase mt-1" style={{ fontSize: "8px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,210,100,0.7)", border: "1px solid rgba(0,210,100,0.2)", padding: "5px" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Verified distributor
            </div>
          </div>

          {/* Nav */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            {NAV_ITEMS.map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between px-4 py-3 cursor-pointer transition-all"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  borderLeft: activeSection === item.key ? "2px solid #E8000D" : "2px solid transparent",
                  background: activeSection === item.key ? "rgba(232,0,13,0.04)" : "transparent",
                }}
                onClick={() => setActiveSection(item.key)}
              >
                <span className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: activeSection === item.key ? "#E8000D" : "rgba(255,255,255,0.35)" }}>{item.label}</span>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px" }}>›</span>
              </div>
            ))}
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer"
              style={{ borderLeft: "2px solid transparent" }}
              onClick={() => navigate("/login")}
            >
              <span className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "rgba(232,0,13,0.5)" }}>Log out</span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px" }}>›</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div>
          <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>Distributor profile</div>
          <h1 className="font-bebas text-white leading-none mb-6" style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "2px" }}>
            YOUR<br />ACCOUNT.
          </h1>

          {saved && (
            <div className="mb-5 px-4 py-3" style={{ background: "rgba(0,210,100,0.07)", borderLeft: "2px solid #00d264", color: "#00d264", fontSize: "13px" }}>
              Changes saved successfully.
            </div>
          )}

          {/* Personal info */}
          {activeSection === "personal" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Personal information <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Full name</label>
                  <input className="form-input" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Instagram handle</label>
                  <input className="form-input" type="text" value={form.handle} onChange={(e) => setForm({ ...form, handle: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Email address</label>
                  <input className="form-input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Phone number</label>
                  <input className="form-input" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <label className="form-label">City</label>
              <input className="form-input mb-0" type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </div>
          )}

          {/* Bank details */}
          {activeSection === "bank" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Bank account <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div className="p-5 mb-4 relative" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #E8000D" }}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label">Account holder name</label>
                    <input className="form-input" type="text" value={form.accountHolder} onChange={(e) => setForm({ ...form, accountHolder: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Bank name</label>
                    <input className="form-input" type="text" value={form.bankName} onChange={(e) => setForm({ ...form, bankName: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Account number</label>
                    <input className="form-input" type="text" value="•••• •••• 4821" disabled style={{ color: "rgba(255,255,255,0.25)" }} />
                  </div>
                  <div>
                    <label className="form-label">IFSC code</label>
                    <input className="form-input" type="text" value={form.ifsc} onChange={(e) => setForm({ ...form, ifsc: e.target.value })} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Niches */}
          {activeSection === "niches" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Content niches — campaigns matched to these <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {NICHES.map((n) => (
                  <button
                    key={n}
                    className="py-3 font-barlow uppercase transition-all"
                    style={{
                      fontSize: "12px", letterSpacing: "2px",
                      background: selectedNiches.includes(n) ? "rgba(232,0,13,0.06)" : "#0a0a0a",
                      border: selectedNiches.includes(n) ? "1px solid #E8000D" : "1px solid rgba(255,255,255,0.07)",
                      color: selectedNiches.includes(n) ? "#E8000D" : "rgba(255,255,255,0.3)",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleNiche(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeSection === "notifications" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Notification preferences <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  { key: "payouts", label: "Payout notifications", sub: "Get notified when money lands in your account" },
                  { key: "campaigns", label: "New campaign alerts", sub: "Be first to know when matching campaigns go live" },
                  { key: "verification", label: "Verification updates", sub: "Status updates while your submission is being verified" },
                  { key: "weekly", label: "Weekly earnings report", sub: "Summary of views, campaigns, and payouts every Monday" },
                ].map((item, i) => (
                  <div key={item.key} className="flex items-center justify-between px-5 py-4" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <div>
                      <div className="font-barlow uppercase mb-1" style={{ fontSize: "12px", letterSpacing: "2px", color: "rgba(255,255,255,0.5)" }}>{item.label}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>{item.sub}</div>
                    </div>
                    <div
                      className="relative w-10 h-5 rounded-full flex-shrink-0 cursor-pointer"
                      style={{ background: notifications[item.key] ? "#E8000D" : "rgba(255,255,255,0.1)", transition: "background 0.2s" }}
                      onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                    >
                      <div
                        className="absolute top-0.5 w-4 h-4 bg-white rounded-full"
                        style={{ left: notifications[item.key] ? "calc(100% - 18px)" : "2px", transition: "left 0.2s" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Save buttons */}
          <div className="flex gap-3 mt-6">
            <button className="btn-primary" onClick={handleSave}>Save changes</button>
            <button className="btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorProfile;
