import { useNavigate } from "react-router-dom";

const BRAND_ITEMS = [
  { label: "Dashboard", path: "/brand/dashboard", icon: "▪" },
  { label: "Campaign", path: "/brand/campaign/new", icon: "+" },
  { label: "Deposit", path: "/brand/deposit", icon: "₹" },
  { label: "Reports", path: "/brand/dashboard", icon: "↗" },
];

const DIST_ITEMS = [
  { label: "Campaigns", path: "/distributor/campaigns", icon: "▪" },
  { label: "Submit", path: "/distributor/submit", icon: "+" },
  { label: "Earnings", path: "/distributor/earnings", icon: "₹" },
  { label: "Profile", path: "/distributor/profile", icon: "○" },
];

const BottomNav = ({ role = "distributor", active = "" }) => {
  const navigate = useNavigate();
  const items = role === "brand" ? BRAND_ITEMS : DIST_ITEMS;

  return (
    <nav className="mobile-bottom-nav">
      {items.map((item) => {
        const isActive = active === item.label;
        return (
          <div
            key={item.label}
            className={`mobile-bottom-nav-item ${isActive ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            {isActive && <div className="mobile-bottom-nav-dot" />}
            <span style={{ fontSize: "10px", letterSpacing: "2px" }}>{item.label}</span>
          </div>
        );
      })}
    </nav>
  );
};

export default BottomNav;
