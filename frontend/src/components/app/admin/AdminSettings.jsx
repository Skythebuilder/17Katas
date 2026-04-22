import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSettings = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("platform");
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    platformCut: 20,
    autoApproveThreshold: 30,
    minViews: 500,
    humanReviewAbove: 50000,
    screenRecordingAbove: 60,
    acceptBrandSignups: true,
    acceptDistributorSignups: true,
    sameDayPayouts: true,
    whisperAudio: true,
  });

  const update = (key, val) => setSettings((prev) => ({ ...prev, [key]: val }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const Toggle = ({ val, onToggle }) => (
    <div
      className="relative w-10 h-5 rounded-full cursor-pointer flex-shrink-0"
      style={{ background: val ? "#E8000D" : "rgba(255,255,255,0.1)", transition: "background 0.2s" }}
      onClick={onToggle}
    >
      <div
        className="absolute top-0.5 w-4 h-4 bg-white rounded-full"
        style={{ left: val ? "calc(100% - 18px)" : "2px", transition: "left 0.2s" }}
      />
    </div>
  );

  const SettingRow = ({ label, sub, children }) => (
    <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="flex-1 mr-6">
        <div className="font-barlow uppercase mb-1" style={{ fontSize: "12px", letterSpacing: "2px", color: "#fff" }}>{label}</div>
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: "1.5" }}>{sub}</div>
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );

  const NAV = ["platform", "verification", "toggles", "integrations", "danger"];
  const NAV_LABELS = { platform: "Platform", verification: "Verification", toggles: "Platform toggles", integrations: "Integrations", danger: "Danger zone" };

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
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 4 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 4 ? "#E8000D" : "transparent" }}
              onClick={() => navigate(item.path)}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="font-barlow uppercase px-3 py-1.5" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(232,0,13,0.8)", border: "1px solid rgba(232,0,13,0.2)" }}>Sky — Admin</div>
      </nav>

      <div className="relative grid px-8 pb-16 pt-6 gap-6" style={{ zIndex: 5, gridTemplateColumns: "200px 1fr" }}>

        {/* Sidebar */}
        <div>
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            {NAV.map((section) => (
              <div
                key={section}
                className="flex items-center justify-between px-4 py-3 cursor-pointer transition-all"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  borderLeft: activeSection === section ? "2px solid #E8000D" : "2px solid transparent",
                  background: activeSection === section ? "rgba(232,0,13,0.04)" : "transparent",
                  color: section === "danger" ? "rgba(232,0,13,0.5)" : activeSection === section ? "#E8000D" : "rgba(255,255,255,0.35)",
                }}
                onClick={() => setActiveSection(section)}
              >
                <span className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px" }}>{NAV_LABELS[section]}</span>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px" }}>›</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div>
          <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>Admin — platform controls</div>
          <h1 className="font-bebas text-white leading-none mb-6" style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "2px" }}>PLATFORM<br />SETTINGS.</h1>

          {saved && (
            <div className="mb-5 px-4 py-3" style={{ background: "rgba(0,210,100,0.07)", borderLeft: "2px solid #00d264", color: "#00d264", fontSize: "13px" }}>
              Settings saved successfully.
            </div>
          )}

          {/* Platform fee */}
          {activeSection === "platform" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Platform fee <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-barlow uppercase mb-1" style={{ fontSize: "12px", letterSpacing: "2px", color: "#fff" }}>17Katas cut per verified payout</div>
                      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>Current cut applied to every distributor payout. Brands are charged the CPM, distributors receive CPM minus this cut.</div>
                    </div>
                    <div className="font-bebas text-white ml-6" style={{ fontSize: "32px", letterSpacing: "1px", minWidth: "64px", textAlign: "right" }}>{settings.platformCut}%</div>
                  </div>
                  <input
                    type="range" min="10" max="40" step="1"
                    value={settings.platformCut}
                    onChange={(e) => update("platformCut", parseInt(e.target.value))}
                    className="w-full"
                    style={{ accentColor: "#E8000D" }}
                  />
                  <div className="flex justify-between mt-1 font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.2)" }}>
                    <span>10% min</span><span>40% max</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Verification */}
          {activeSection === "verification" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Verification thresholds <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>

                <SettingRow
                  label="AI auto-approve threshold"
                  sub="Submissions with fraud score below this are automatically approved without human review."
                >
                  <div className="flex items-center gap-3">
                    <input type="range" min="10" max="50" step="5" value={settings.autoApproveThreshold} onChange={(e) => update("autoApproveThreshold", parseInt(e.target.value))} style={{ accentColor: "#E8000D", width: "120px" }} />
                    <div className="font-bebas text-white" style={{ fontSize: "22px", letterSpacing: "1px", minWidth: "36px", textAlign: "center" }}>{settings.autoApproveThreshold}</div>
                  </div>
                </SettingRow>

                <SettingRow
                  label="Minimum view count for payout"
                  sub="Submissions below this view count are auto-rejected. Protects against micro-fraud."
                >
                  <input
                    type="number"
                    value={settings.minViews}
                    onChange={(e) => update("minViews", parseInt(e.target.value) || 0)}
                    className="text-white font-bebas text-center outline-none"
                    style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.08)", padding: "6px 10px", fontSize: "20px", letterSpacing: "1px", width: "90px", transition: "border-color 0.2s" }}
                    onFocus={(e) => e.target.style.borderColor = "#E8000D"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </SettingRow>

                <SettingRow
                  label="Human review required above views"
                  sub="All submissions claiming above this count always go to human review regardless of AI score."
                >
                  <input
                    type="number"
                    value={settings.humanReviewAbove}
                    onChange={(e) => update("humanReviewAbove", parseInt(e.target.value) || 0)}
                    className="text-white font-bebas text-center outline-none"
                    style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.08)", padding: "6px 10px", fontSize: "20px", letterSpacing: "1px", width: "100px", transition: "border-color 0.2s" }}
                    onFocus={(e) => e.target.style.borderColor = "#E8000D"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </SettingRow>

                <SettingRow
                  label="Require screen recording above fraud score"
                  sub="Auto-request Insights screen recording for any submission above this fraud score."
                >
                  <input
                    type="number"
                    value={settings.screenRecordingAbove}
                    onChange={(e) => update("screenRecordingAbove", parseInt(e.target.value) || 0)}
                    className="text-white font-bebas text-center outline-none"
                    style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.08)", padding: "6px 10px", fontSize: "20px", letterSpacing: "1px", width: "90px", transition: "border-color 0.2s", borderBottom: "none" }}
                    onFocus={(e) => e.target.style.borderColor = "#E8000D"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </SettingRow>
              </div>
            </div>
          )}

          {/* Toggles */}
          {activeSection === "toggles" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Platform toggles <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
                <SettingRow label="Accept new brand signups" sub="Turn off to pause new brand onboarding completely.">
                  <Toggle val={settings.acceptBrandSignups} onToggle={() => update("acceptBrandSignups", !settings.acceptBrandSignups)} />
                </SettingRow>
                <SettingRow label="Accept new distributor signups" sub="Turn off to pause new distributor onboarding completely.">
                  <Toggle val={settings.acceptDistributorSignups} onToggle={() => update("acceptDistributorSignups", !settings.acceptDistributorSignups)} />
                </SettingRow>
                <SettingRow label="Same-day automatic payouts" sub="Turn off to hold all payouts for manual review. Use only in emergencies.">
                  <Toggle val={settings.sameDayPayouts} onToggle={() => update("sameDayPayouts", !settings.sameDayPayouts)} />
                </SettingRow>
                <SettingRow label="Whisper audio transcription" sub="Enable audio compliance checking on all video submissions via OpenAI Whisper.">
                  <Toggle val={settings.whisperAudio} onToggle={() => update("whisperAudio", !settings.whisperAudio)} />
                </SettingRow>
              </div>
            </div>
          )}

          {/* Integrations */}
          {activeSection === "integrations" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                API integrations <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  { name: "Anthropic Claude Vision API", desc: "View verification and fraud detection", status: "Connected", ok: true },
                  { name: "Razorpay X", desc: "Automated same-day payouts to distributors", status: "Connected", ok: true },
                  { name: "Supabase", desc: "Primary database — users, campaigns, submissions", status: "Connected", ok: true },
                  { name: "OpenAI Whisper", desc: "Audio transcription for compliance checking", status: "Connected", ok: true },
                  { name: "Instagram Graph API", desc: "Official Meta API for view verification (future)", status: "Pending approval", ok: false },
                ].map((int, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4" style={{ borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <div className="flex-1">
                      <div className="font-barlow uppercase mb-1" style={{ fontSize: "12px", letterSpacing: "2px", color: "#fff" }}>{int.name}</div>
                      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>{int.desc}</div>
                    </div>
                    <div className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: int.ok ? "rgba(0,210,100,0.7)" : "rgba(245,166,35,0.7)" }}>{int.status}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Danger zone */}
          {activeSection === "danger" && (
            <div>
              <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(232,0,13,0.6)" }}>
                Danger zone <div className="flex-1 h-px" style={{ background: "rgba(232,0,13,0.15)" }} />
              </div>
              <div className="relative p-5" style={{ background: "#0a0a0a", border: "1px solid rgba(232,0,13,0.2)", borderTop: "2px solid #E8000D" }}>
                <div className="font-barlow uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(232,0,13,0.6)" }}>These actions affect the entire platform</div>
                {[
                  { label: "Pause all active campaigns", btn: "Pause all", action: () => { if (window.confirm("Pause ALL active campaigns?")) alert("All campaigns paused."); } },
                  { label: "Hold all pending payouts", btn: "Hold payouts", action: () => { if (window.confirm("Hold ALL pending payouts?")) alert("Payouts held."); } },
                  { label: "Export all platform data (CSV)", btn: "Export data", action: () => alert("CSV export started. File will be emailed to sky@17katas.com") },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3" style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>{item.label}</span>
                    <button
                      className="font-barlow uppercase transition-all"
                      style={{ fontSize: "10px", letterSpacing: "3px", padding: "8px 16px", background: "rgba(232,0,13,0.08)", border: "1px solid rgba(232,0,13,0.25)", color: "rgba(232,0,13,0.7)", cursor: "pointer" }}
                      onMouseEnter={(e) => e.target.style.background = "rgba(232,0,13,0.15)"}
                      onMouseLeave={(e) => e.target.style.background = "rgba(232,0,13,0.08)"}
                      onClick={item.action}
                    >
                      {item.btn}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Save */}
          {activeSection !== "danger" && (
            <div className="flex gap-3 mt-6">
              <button className="btn-primary" onClick={handleSave}>Save settings</button>
              <button className="btn-secondary" onClick={() => window.location.reload()}>Reset to defaults</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
