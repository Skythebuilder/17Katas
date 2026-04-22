import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_CONFIGS = {
  brand: [
    { label: "Dashboard", path: "/brand/dashboard" },
    { label: "Campaigns", path: "/brand/campaign/new" },
    { label: "Distributors", path: "/brand/dashboard" },
    { label: "Reports", path: "/brand/dashboard" },
  ],
  distributor: [
    { label: "Campaigns", path: "/distributor/campaigns" },
    { label: "My submissions", path: "/distributor/submit" },
    { label: "Earnings", path: "/distributor/earnings" },
    { label: "Profile", path: "/distributor/profile" },
  ],
  admin: [
    { label: "Overview", path: "/admin" },
    { label: "Submissions", path: "/admin/submissions" },
    { label: "Fraud flags", path: "/admin/fraud" },
    { label: "Users", path: "/admin/users" },
    { label: "Settings", path: "/admin/settings" },
  ],
};

const ROLE_LABELS = {
  brand: "Brand Account",
  distributor: "Distributor",
  admin: "Sky — Admin",
};

const AppNav = ({ role = "distributor", activeLabel = "" }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = NAV_CONFIGS[role] || [];

  return (
    <>
      <nav
        className="relative flex items-center justify-between border-b"
        style={{
          borderColor: "rgba(255,255,255,0.05)",
          zIndex: 50,
          padding: "16px 20px",
        }}
      >
        {/* Logo */}
        <div
          className="font-bebas cursor-pointer"
          style={{ fontSize: "28px", letterSpacing: "5px", color: "#fff" }}
          onClick={() => navigate("/")}
        >
          17<span style={{ color: "#E8000D" }}>KATAS</span>
        </div>

        {/* Desktop nav links */}
        <div className="desktop-nav-links">
          {links.map((item) => (
            <div
              key={item.label}
              className="font-barlow uppercase cursor-pointer border-b-2 transition-all"
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                padding: "8px 14px",
                color: activeLabel === item.label ? "#fff" : "rgba(255,255,255,0.25)",
                borderColor: activeLabel === item.label ? "#E8000D" : "transparent",
              }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Admin live badge */}
          {role === "admin" && (
            <div
              className="hidden md:flex items-center gap-2 font-barlow uppercase"
              style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(0,210,100,0.8)", border: "1px solid rgba(0,210,100,0.2)", padding: "5px 10px" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse 1.5s infinite" }} />
              Live
            </div>
          )}

          {/* Distributor earnings */}
          {role === "distributor" && (
            <div className="hidden md:block text-right">
              <div className="font-bebas" style={{ fontSize: "18px", letterSpacing: "1px", color: "#00d264" }}>₹0</div>
              <div className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(0,210,100,0.5)" }}>Earned today</div>
            </div>
          )}

          {/* Role label — desktop */}
          <span
            className="hidden md:block font-barlow uppercase"
            style={{ fontSize: "11px", letterSpacing: "3px", color: role === "admin" ? "rgba(232,0,13,0.8)" : "rgba(255,255,255,0.3)", border: role === "admin" ? "1px solid rgba(232,0,13,0.2)" : "none", padding: role === "admin" ? "5px 10px" : "0" }}
          >
            {ROLE_LABELS[role]}
          </span>

          {/* Avatar dot */}
          <div
            className="w-8 h-8 bg-brand-red flex items-center justify-center font-bebas text-white"
            style={{ fontSize: "14px" }}
          >
            {role === "brand" ? "B" : role === "admin" ? "S" : "D"}
          </div>

          {/* Hamburger — mobile only */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
          <span style={{ fontSize: "18px" }}>×</span>
          Close
        </div>

        {/* Role tag */}
        <div
          className="font-barlow uppercase mb-6"
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#E8000D" }}
        >
          {ROLE_LABELS[role]}
        </div>

        {links.map((item) => (
          <div
            key={item.label}
            className={`mobile-menu-item ${activeLabel === item.label ? "active" : ""}`}
            onClick={() => { navigate(item.path); setMenuOpen(false); }}
          >
            {item.label}
          </div>
        ))}

        {/* Logout */}
        <div
          className="mobile-menu-item"
          style={{ color: "rgba(232,0,13,0.5)", marginTop: "auto", fontSize: "28px" }}
          onClick={() => { navigate("/login"); setMenuOpen(false); }}
        >
          Log out
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </>
  );
};

export default AppNav;
