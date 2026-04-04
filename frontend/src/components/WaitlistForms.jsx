import { useState } from "react";
import axios from "axios";
import { useScrollReveal } from "../hooks/useScrollReveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Swap this URL in .env (REACT_APP_SHEETS_WEBHOOK_URL) to go live
const SHEETS_WEBHOOK = process.env.REACT_APP_SHEETS_WEBHOOK_URL;

const postToSheets = (payload) => {
  if (!SHEETS_WEBHOOK || SHEETS_WEBHOOK.startsWith("REPLACE")) return;
  fetch(SHEETS_WEBHOOK, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, submitted_at: new Date().toISOString() }),
  }).catch(() => {});
};

const BUDGET_OPTIONS = [
  { value: "", label: "Select Budget Range" },
  { value: "50K-1L", label: "₹50K – ₹1L" },
  { value: "1L-2L", label: "₹1L – ₹2L" },
  { value: "2L-5L", label: "₹2L – ₹5L" },
  { value: "5L+", label: "₹5L+" },
];

const SKILL_OPTIONS = [
  { value: "", label: "Select Primary Skill" },
  { value: "video-editing", label: "Video Editing" },
  { value: "content-creation", label: "Content Creation" },
  { value: "social-media", label: "Social Media Growth" },
  { value: "reels-shorts", label: "Reels / Shorts" },
  { value: "copywriting", label: "Copywriting" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "other", label: "Other" },
];

const FormField = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-barlow text-white/40 uppercase tracking-widest text-xs">
      {label}
    </label>
    {children}
  </div>
);

const BrandForm = () => {
  const [form, setForm] = useState({ name: "", contact: "", email: "", brand_name: "", budget_range: "" });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.brand_name || !form.budget_range) {
      setStatus("error-validation");
      return;
    }
    setStatus("loading");
    try {
      await axios.post(`${API}/waitlist/brand`, form);
      postToSheets({ ...form, type: "brand" });
      setStatus("success");
      setForm({ name: "", contact: "", email: "", brand_name: "", budget_range: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      data-testid="brand-form-card"
      className="bg-[#0A0A0A] border border-white/8 p-8 md:p-10 flex flex-col"
    >
      <div className="mb-8">
        <p className="font-barlow text-[#E8000D] uppercase tracking-[0.3em] text-xs mb-3">
          For Brands & Creators
        </p>
        <h3 className="font-bebas text-3xl md:text-4xl text-white uppercase">
          Scale Your Campaign
        </h3>
        <p className="font-manrope text-white/40 text-sm mt-2">
          Deposit your budget. Pay only for verified views.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
        <FormField label="Your Name">
          <input
            data-testid="brand-name-input"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Rahul Sharma"
            className="form-input"
          />
        </FormField>

        <FormField label="Contact Details">
          <input
            data-testid="brand-contact-input"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone / WhatsApp / Preferred Contact"
            className="form-input"
          />
        </FormField>

        <FormField label="Email Address">
          <input
            data-testid="brand-email-input"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="rahul@company.com"
            className="form-input"
          />
        </FormField>

        <FormField label="Brand Name">
          <input
            data-testid="brand-brand-name-input"
            name="brand_name"
            value={form.brand_name}
            onChange={handleChange}
            placeholder="Your Brand"
            className="form-input"
          />
        </FormField>

        <FormField label="Campaign Budget">
          <div className="relative">
            <select
              data-testid="brand-budget-select"
              name="budget_range"
              value={form.budget_range}
              onChange={handleChange}
              className="form-select"
            >
              {BUDGET_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} disabled={o.value === ""}>
                  {o.label}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
              ▾
            </div>
          </div>
        </FormField>

        {status === "success" && (
          <p
            data-testid="brand-form-success"
            className="font-barlow text-[#E8000D] uppercase tracking-wider text-sm"
          >
            You&apos;re in. We&apos;ll be in touch.
          </p>
        )}
        {(status === "error" || status === "error-validation") && (
          <p
            data-testid="brand-form-error"
            className="font-barlow text-red-400 uppercase tracking-wider text-xs"
          >
            {status === "error-validation"
              ? "Please fill all fields."
              : "Something went wrong. Try again."}
          </p>
        )}

        <button
          data-testid="brand-submit-btn"
          type="submit"
          disabled={status === "loading"}
          className="btn-primary mt-auto"
        >
          {status === "loading" ? "Sending..." : "Join as Brand"}
        </button>
      </form>
    </div>
  );
};

const DistributorForm = () => {
  const [form, setForm] = useState({ name: "", contact: "", email: "", handle: "", primary_skill: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.handle || !form.primary_skill) {
      setStatus("error-validation");
      return;
    }
    setStatus("loading");
    try {
      await axios.post(`${API}/waitlist/distributor`, form);
      postToSheets({ ...form, type: "distributor" });
      setStatus("success");
      setForm({ name: "", contact: "", email: "", handle: "", primary_skill: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      data-testid="distributor-form-card"
      className="bg-[#0d0d0d] border border-white/8 p-8 md:p-10 flex flex-col"
    >
      <div className="mb-8">
        <p className="font-barlow text-[#E8000D] uppercase tracking-[0.3em] text-xs mb-3">
          For Distributors & Editors
        </p>
        <h3 className="font-bebas text-3xl md:text-4xl text-white uppercase">
          Start Earning Today
        </h3>
        <p className="font-manrope text-white/40 text-sm mt-2">
          Post clips. Get verified views. Get paid same day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
        <FormField label="Your Name">
          <input
            data-testid="dist-name-input"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Priya Mehta"
            className="form-input"
          />
        </FormField>

        <FormField label="Contact Details">
          <input
            data-testid="dist-contact-input"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone / WhatsApp / Preferred Contact"
            className="form-input"
          />
        </FormField>

        <FormField label="Email Address">
          <input
            data-testid="dist-email-input"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="priya@email.com"
            className="form-input"
          />
        </FormField>

        <FormField label="Instagram / YouTube Handle">
          <input
            data-testid="dist-handle-input"
            name="handle"
            value={form.handle}
            onChange={handleChange}
            placeholder="@yourhandle"
            className="form-input"
          />
        </FormField>

        <FormField label="Primary Skill">
          <div className="relative">
            <select
              data-testid="dist-skill-select"
              name="primary_skill"
              value={form.primary_skill}
              onChange={handleChange}
              className="form-select"
            >
              {SKILL_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} disabled={o.value === ""}>
                  {o.label}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
              ▾
            </div>
          </div>
        </FormField>

        {status === "success" && (
          <p
            data-testid="dist-form-success"
            className="font-barlow text-[#E8000D] uppercase tracking-wider text-sm"
          >
            Welcome to the network. Stay ready.
          </p>
        )}
        {(status === "error" || status === "error-validation") && (
          <p
            data-testid="dist-form-error"
            className="font-barlow text-red-400 uppercase tracking-wider text-xs"
          >
            {status === "error-validation"
              ? "Please fill all fields."
              : "Something went wrong. Try again."}
          </p>
        )}

        <button
          data-testid="dist-submit-btn"
          type="submit"
          disabled={status === "loading"}
          className="btn-primary mt-auto"
        >
          {status === "loading" ? "Sending..." : "Join as Distributor"}
        </button>
      </form>
    </div>
  );
};

const WaitlistForms = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      data-testid="waitlist-section"
      id="waitlist"
      className="pt-16 pb-16 md:pt-20 md:pb-24 bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div
          ref={ref}
          className={`reveal ${visible ? "revealed" : ""} mb-14`}
        >
          <p className="font-barlow text-[#E8000D] uppercase tracking-[0.35em] text-sm mb-4">
            Early Access
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-white uppercase">
            Join The Waitlist
          </h2>
          <p className="font-manrope text-white/40 text-base mt-4 max-w-lg">
            We&apos;re onboarding in batches. Get in early — limited spots for the first cohort.
          </p>
        </div>

        {/* Dual forms */}
        <div
          className={`reveal ${visible ? "revealed" : ""} grid grid-cols-1 md:grid-cols-2 gap-6`}
          style={{ transitionDelay: "0.15s" }}
        >
          <BrandForm />
          <DistributorForm />
        </div>
      </div>
    </section>
  );
};

export default WaitlistForms;
