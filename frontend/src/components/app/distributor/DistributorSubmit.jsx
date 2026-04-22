import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CHECKLIST = [
  { text: "Product is visible in the first 3 seconds of my Reel", checked: true },
  { text: "Brand name is mentioned in caption or verbally in audio", checked: true },
  { text: "Required hashtags are in the caption — #NutriForce #FuelYourDay", checked: false },
  { text: "My Reel is set to public — not private or close friends", checked: false },
  { text: "No competitor products are visible anywhere in the video", checked: false },
  { text: "Screenshot shows real Instagram Insights — not edited or cropped", checked: false },
];

const DistributorSubmit = () => {
  const navigate = useNavigate();
  const [reelUrl, setReelUrl] = useState("");
  const [handle, setHandle] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [checks, setChecks] = useState(CHECKLIST.map((c) => c.checked));
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (file) => {
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / 1024 / 1024).toFixed(1) + "MB");
    }
  };

  const toggleCheck = (i) => {
    const updated = [...checks];
    updated[i] = !updated[i];
    setChecks(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reelUrl || !handle) {
      setError("Please fill in your Reel URL and Instagram handle.");
      return;
    }
    setError("");
    navigate("/distributor/submit"); // will route to verification status in full app
  };

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(232,0,13,0.07) 0%, transparent 65%)", bottom: 0, left: "-100px", zIndex: 0 }} />

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

      <div className="relative grid px-8 pb-16 pt-6 gap-6" style={{ zIndex: 5, gridTemplateColumns: "1fr 300px" }}>

        {/* LEFT */}
        <div>
          <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>Submitting for campaign</div>
          <h1 className="font-bebas text-white leading-none mb-2" style={{ fontSize: "clamp(44px, 6vw, 68px)", letterSpacing: "2px" }}>
            SUBMIT YOUR<br /><span className="text-brand-red">CLIP.</span>
          </h1>
          <p className="mb-6" style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", lineHeight: "1.8", maxWidth: "480px" }}>
            Follow every requirement in the brief. AI checks your submission automatically. Get it right first time and get paid today.
          </p>

          {/* Campaign strip */}
          <div className="flex items-center justify-between px-5 py-4 mb-6 relative" style={{ background: "#0a0a0a", border: "1px solid rgba(232,0,13,0.2)", borderLeft: "3px solid #E8000D" }}>
            <div>
              <div className="font-barlow uppercase mb-1" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.3)" }}>Campaign</div>
              <div className="font-bebas text-white" style={{ fontSize: "22px", letterSpacing: "1px" }}>Summer Protein Bar</div>
              <div className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)" }}>NutriForce India</div>
            </div>
            <div className="text-right">
              <div className="font-bebas text-brand-red" style={{ fontSize: "32px", letterSpacing: "1px", lineHeight: 1 }}>₹90</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}>Per 1K views</div>
            </div>
          </div>

          {/* Progress steps */}
          <div className="flex mb-6" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {["1. Post Reel", "2. Submit proof", "3. Get verified", "4. Get paid"].map((s, i) => (
              <div key={i} className="flex-1 py-2.5 text-center font-barlow uppercase transition-all" style={{
                fontSize: "11px", letterSpacing: "3px",
                background: i === 1 ? "rgba(232,0,13,0.08)" : "transparent",
                color: i === 0 ? "rgba(0,210,100,0.8)" : i === 1 ? "#E8000D" : "rgba(255,255,255,0.25)",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                {s}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>

            {/* Reel URL */}
            <div className="mb-6">
              <div className="font-barlow uppercase mb-3 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Your Reel URL <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <label className="form-label">Paste your live Instagram Reel link</label>
              <input
                className="form-input mb-2"
                type="url"
                placeholder="https://www.instagram.com/reel/..."
                value={reelUrl}
                onChange={(e) => setReelUrl(e.target.value)}
              />
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", lineHeight: "1.6" }}>
                The Reel must be live and public before submitting. We cross-check the URL against your screenshot.
              </p>
            </div>

            {/* Screenshot upload */}
            <div className="mb-6">
              <div className="font-barlow uppercase mb-3 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Screenshot of Instagram Insights <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>

              {/* Guide */}
              <div className="p-4 mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="font-barlow uppercase mb-3" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>How to take the right screenshot</div>
                {[
                  "Open the Reel on Instagram and tap the three dots menu",
                  "Tap \"View Insights\" — this shows your real view count and engagement",
                  "Screenshot the full Insights screen — views, likes, comments must all be visible",
                  "Upload that screenshot below — not a screen recording, not the Reel itself",
                ].map((step, si) => (
                  <div key={si} className="flex gap-3 mb-2" style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: "1.5" }}>
                    <span className="font-bebas text-brand-red flex-shrink-0" style={{ fontSize: "16px", lineHeight: "1.3" }}>{si + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              {/* Drop zone */}
              <div
                className="relative text-center py-10 px-6 cursor-pointer"
                style={{
                  border: fileName ? "1px dashed rgba(0,210,100,0.3)" : dragOver ? "1px dashed #E8000D" : "1px dashed rgba(255,255,255,0.1)",
                  background: fileName ? "rgba(0,210,100,0.03)" : dragOver ? "rgba(232,0,13,0.03)" : "transparent",
                  transition: "all 0.2s",
                }}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  onChange={(e) => handleFile(e.target.files[0])}
                />
                <div className="font-bebas mb-2" style={{ fontSize: "20px", letterSpacing: "1px", color: fileName ? "#00d264" : "rgba(255,255,255,0.4)" }}>
                  {fileName || "Upload Insights screenshot"}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)" }}>
                  {fileSize ? `${fileSize} — Screenshot ready` : "PNG or JPG · Max 10MB · Must show view count clearly"}
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="mb-6">
              <div className="font-barlow uppercase mb-3 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Self-verification checklist <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="px-5 py-3 border-b font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)", borderColor: "rgba(255,255,255,0.05)" }}>
                  Check every item before submitting — AI verifies these automatically
                </div>
                {CHECKLIST.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 cursor-pointer"
                    style={{ borderBottom: i < CHECKLIST.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                    onClick={() => toggleCheck(i)}
                  >
                    <div
                      className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-xs"
                      style={{
                        border: checks[i] ? "none" : "1px solid rgba(255,255,255,0.15)",
                        background: checks[i] ? "#00d264" : "transparent",
                        color: checks[i] ? "#000" : "transparent",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ fontSize: "13px", color: checks[i] ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Handle */}
            <div className="mb-6">
              <div className="font-barlow uppercase mb-3 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
                Instagram handle <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <label className="form-label">Your Instagram username</label>
              <input
                className="form-input"
                type="text"
                placeholder="@yourhandle"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
              />
            </div>

            {error && (
              <div className="mb-4 px-4 py-3" style={{ background: "rgba(232,0,13,0.07)", borderLeft: "2px solid #E8000D", color: "#ff5560", fontSize: "13px" }}>
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              Submit for verification
            </button>
            <p className="text-center mt-3" style={{ fontSize: "12px", color: "rgba(255,255,255,0.18)", lineHeight: "1.7" }}>
              AI verification takes 15–30 minutes.<br />
              You'll be notified the moment it's done.<br />
              Payment triggers automatically on approval.
            </p>
          </form>
        </div>

        {/* RIGHT — Brief + earnings */}
        <div>
          <div className="relative mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
            <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>Campaign brief</div>
            </div>
            <div className="px-5 py-4">
              <div className="mb-4">
                <div className="font-barlow uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>What to post</div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: "1.6" }}>Post a Reel using our protein bar in your morning workout routine. Show the product in the first 3 seconds. Keep tone energetic and authentic.</p>
              </div>
              <div className="mb-4">
                <div className="font-barlow uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Required hashtags</div>
                <div className="flex flex-wrap gap-1">
                  {["#NutriForce", "#FuelYourDay", "#17Katas"].map((t) => (
                    <div key={t} className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", padding: "3px 8px", background: "rgba(232,0,13,0.08)", border: "1px solid rgba(232,0,13,0.2)", color: "#E8000D" }}>{t}</div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <div className="font-barlow uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Must include</div>
                {["Product visible in first 3 seconds", "Brand name mentioned", "Min 15 seconds duration"].map((r) => (
                  <div key={r} className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(0,210,100,0.7)" }} />
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{r}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="font-barlow uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Not allowed</div>
                {["Competitor products visible", "Misleading health claims", "Private account setting"].map((r) => (
                  <div key={r} className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-brand-red" />
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Earnings preview */}
          <div className="p-5" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="font-barlow uppercase mb-4" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Your potential earnings</div>
            {[
              { key: "CPM rate", val: "₹90 / 1K" },
              { key: "10K views", val: "₹900", green: true },
              { key: "50K views", val: "₹4,500", green: true },
              { key: "1L views", val: "₹9,000", green: true },
              { key: "Paid out", val: "Same day" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between py-2" style={{ borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>{row.key}</span>
                <span className="font-bebas" style={{ fontSize: "17px", letterSpacing: "1px", color: row.green ? "#00d264" : "#fff" }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorSubmit;
