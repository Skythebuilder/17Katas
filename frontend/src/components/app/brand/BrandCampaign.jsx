import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TONES = ["Energetic", "Informative", "Lifestyle", "Funny", "Aspirational", "Raw / Real"];

const BrandCampaign = () => {
  const navigate = useNavigate();
  const [tone, setTone] = useState("Energetic");
  const [tags, setTags] = useState(["#17Katas"]);
  const [tagInput, setTagInput] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [budget, setBudget] = useState(50000);

  const handleTagKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      let val = tagInput.trim();
      if (!val) return;
      if (!val.startsWith("#")) val = "#" + val;
      if (!tags.includes(val)) setTags([...tags, val]);
      setTagInput("");
    }
  };

  const removeTag = (t) => setTags(tags.filter((x) => x !== t));

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">
      <div className="pointer-events-none absolute rounded-full" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(232,0,13,0.07) 0%, transparent 65%)", top: "20%", left: "-100px", zIndex: 0 }} />

      {/* Nav */}
      <nav className="relative flex items-center justify-between px-10 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.05)", zIndex: 10 }}>
        <div className="font-bebas text-3xl cursor-pointer" style={{ letterSpacing: "5px" }} onClick={() => navigate("/")}>
          17<span className="text-brand-red">KATAS</span>
        </div>
        <div className="flex items-center gap-6">
          {["Welcome", "Deposit", "Campaign", "Dashboard"].map((step, i) => (
            <span key={step} className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: i === 2 ? "rgba(255,255,255,0.7)" : i < 2 ? "rgba(0,210,100,0.7)" : "rgba(255,255,255,0.2)" }}>
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.1)", marginRight: "6px" }}>/</span>}{step}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)" }}>Brand account</span>
          <div className="w-7 h-7 bg-brand-red flex items-center justify-center font-bebas text-white text-sm">B</div>
        </div>
      </nav>

      <div className="relative grid px-10 pb-20 gap-8 pt-10" style={{ zIndex: 5, gridTemplateColumns: "1fr 340px" }}>

        {/* LEFT */}
        <div>
          <div className="font-barlow uppercase text-brand-red mb-3" style={{ fontSize: "11px", letterSpacing: "6px" }}>Step 3 of 4 — Define your campaign</div>
          <h1 className="font-bebas text-white leading-none mb-3" style={{ fontSize: "clamp(48px, 6vw, 72px)", letterSpacing: "2px" }}>
            BUILD YOUR<br /><span className="text-brand-red">CAMPAIGN.</span>
          </h1>
          <p className="mb-10" style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", lineHeight: "1.8", maxWidth: "500px" }}>
            Tell distributors exactly what to post. The clearer your brief, the better the content. Every field here becomes the AI's compliance checklist.
          </p>

          {/* Campaign basics */}
          <div className="mb-8">
            <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
              Campaign basics<div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>
            <label className="form-label">Campaign name</label>
            <input className="form-input mb-4" type="text" placeholder="e.g. Summer Protein Bar Launch" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">Brand name</label>
                <input className="form-input" type="text" placeholder="Your brand name" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
              </div>
              <div>
                <label className="form-label">Product / category</label>
                <input className="form-input" type="text" placeholder="e.g. Protein bar, Fitness" />
              </div>
            </div>
            <label className="form-label mt-4 block">Campaign brief — what should distributors say?</label>
            <textarea className="form-input" rows={4} placeholder="e.g. Post a Reel using our protein bar in your morning workout routine. Show the product in the first 3 seconds. Keep the tone energetic and authentic." style={{ resize: "vertical" }} />
          </div>

          {/* Tone */}
          <div className="mb-8">
            <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
              Content tone<div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {TONES.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className="py-2.5 font-barlow uppercase transition-all"
                  style={{
                    fontSize: "11px", letterSpacing: "2px",
                    background: tone === t ? "rgba(232,0,13,0.06)" : "#0a0a0a",
                    border: tone === t ? "1px solid #E8000D" : "1px solid rgba(255,255,255,0.07)",
                    color: tone === t ? "#E8000D" : "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Hashtags */}
          <div className="mb-8">
            <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
              Required hashtags<div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>
            <div
              className="flex flex-wrap gap-2 p-3 min-h-12"
              style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {tags.map((t) => (
                <div key={t} className="flex items-center gap-1.5 px-2.5 py-1" style={{ background: "rgba(232,0,13,0.08)", border: "1px solid rgba(232,0,13,0.25)", color: "#E8000D", fontSize: "12px", fontFamily: "Barlow Condensed", letterSpacing: "2px", textTransform: "uppercase" }}>
                  {t}
                  <button onClick={() => removeTag(t)} style={{ background: "none", border: "none", color: "rgba(232,0,13,0.5)", cursor: "pointer", fontSize: "14px", lineHeight: 1 }}>×</button>
                </div>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKey}
                placeholder="Type hashtag and press Enter"
                className="bg-transparent outline-none text-white flex-1"
                style={{ fontSize: "13px", minWidth: "160px" }}
              />
            </div>
          </div>

          {/* Budget */}
          <div className="mb-8">
            <div className="font-barlow uppercase mb-4 flex items-center gap-3" style={{ fontSize: "10px", letterSpacing: "5px", color: "rgba(255,255,255,0.25)" }}>
              Budget allocation<div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">Budget for this campaign</label>
                <input className="form-input" type="number" value={budget} onChange={(e) => setBudget(parseInt(e.target.value) || 0)} />
              </div>
              <div>
                <label className="form-label">Campaign duration</label>
                <select className="form-select">
                  <option>7 days</option>
                  <option selected>14 days</option>
                  <option>30 days</option>
                  <option>Until budget runs out</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {/* Preview card */}
          <div className="relative mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="font-bebas text-white" style={{ fontSize: "17px", letterSpacing: "1px" }}>Distributor preview</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)", padding: "3px 8px" }}>Live preview</div>
            </div>
            <div className="px-5 py-4">
              <div className="font-bebas text-white mb-1" style={{ fontSize: "24px", letterSpacing: "1px", lineHeight: 1 }}>{campaignName || "Campaign name"}</div>
              <div className="font-barlow uppercase text-brand-red mb-4" style={{ fontSize: "10px", letterSpacing: "3px" }}>{brandName || "Your Brand"} — Fitness</div>
              {[
                { key: "CPM rate", val: "₹75 / 1K views", red: true },
                { key: "Duration", val: "14 days" },
                { key: "Budget left", val: "₹" + budget.toLocaleString("en-IN") },
                { key: "Tone", val: tone },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <span className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}>{row.key}</span>
                  <span className="font-bebas" style={{ fontSize: "16px", color: row.red ? "#E8000D" : "#fff", letterSpacing: "1px" }}>{row.val}</span>
                </div>
              ))}
              <div className="flex flex-wrap gap-1 mt-3">
                {tags.map((t) => (
                  <div key={t} className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", padding: "3px 8px", background: "rgba(232,0,13,0.08)", border: "1px solid rgba(232,0,13,0.2)", color: "#E8000D" }}>{t}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Budget bar */}
          <div className="p-4 mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="font-barlow uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>Budget allocated</div>
            <div className="h-1.5 mb-2" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="h-1.5 bg-brand-red transition-all" style={{ width: `${Math.min(100, (budget / 200000) * 100)}%` }} />
            </div>
            <div className="flex justify-between">
              <div>
                <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>₹{budget.toLocaleString("en-IN")}</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>This campaign</div>
              </div>
              <div className="text-right">
                <div className="font-bebas text-white" style={{ fontSize: "18px", letterSpacing: "1px" }}>₹2,00,000</div>
                <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>Total deposited</div>
              </div>
            </div>
          </div>

          {/* AI checklist */}
          <div className="p-4 mb-4" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="font-barlow uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.25)" }}>AI will verify</div>
            {["Product visible in frame", "Brand mention detected", "Hashtags present in caption", "No competitor products", "View count authenticity score"].map((item) => (
              <div key={item} className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 bg-brand-red flex-shrink-0" />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{item}</span>
              </div>
            ))}
          </div>

          <button className="btn-primary w-full mb-2" onClick={() => navigate("/brand/dashboard")}>Launch campaign</button>
          <button className="btn-secondary w-full" onClick={() => navigate("/brand/dashboard")}>Save as draft</button>
          <p className="text-center mt-3" style={{ fontSize: "11px", color: "rgba(255,255,255,0.18)", lineHeight: "1.6" }}>Campaign goes live immediately after launch.</p>
        </div>
      </div>
    </div>
  );
};

export default BrandCampaign;
