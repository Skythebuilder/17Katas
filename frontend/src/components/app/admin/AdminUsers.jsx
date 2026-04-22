import { useState } from "react";
import { useNavigate } from "react-router-dom";

const USERS = [
  { initials: "NF", name: "NutriForce India", email: "marketing@nutriforce.in", type: "Brand", joined: "Apr 18", activity: "₹1.88L spent", status: "Active", statusColor: "#00d264", banned: false },
  { initials: "AK", name: "Ankit Kumar", email: "ankit@gmail.com", type: "Distributor", joined: "Mar 12", activity: "₹18,640 earned", status: "Active", statusColor: "#00d264", banned: false, handle: "@ankitfitness" },
  { initials: "AQ", name: "AquaZen Beverages", email: "campaigns@aquazen.co", type: "Brand", joined: "Apr 10", activity: "₹2.91L budget", status: "Active", statusColor: "#00d264", banned: false },
  { initials: "PR", name: "Priya Sharma", email: "priya.s@gmail.com", type: "Distributor", joined: "Apr 1", activity: "₹2,340 earned", status: "Verifying", statusColor: "rgba(245,166,35,0.8)", banned: false, handle: "@priyaruns" },
  { initials: "SR", name: "Shreya Reel", email: "shreya.r@gmail.com", type: "Distributor", joined: "Apr 19", activity: "Flagged", status: "Under review", statusColor: "#E8000D", banned: false, handle: "@shreyareel", flagged: true },
  { initials: "TX", name: "TechXpress", email: "brand@techxpress.in", type: "Brand", joined: "Apr 5", activity: "₹0.98L spent", status: "Active", statusColor: "#00d264", banned: false },
  { initials: "VK", name: "Vikram Kumar", email: "vikram.k@gmail.com", type: "Distributor", joined: "Feb 28", activity: "₹9,810 earned", status: "Active", statusColor: "#00d264", banned: false, handle: "@vikramlifts" },
  { initials: "FV", name: "FakeViews99", email: "—", type: "Distributor", joined: "Apr 17", activity: "Bot farm", status: "Banned", statusColor: "#E8000D", banned: true },
];

const FILTERS = ["All", "Brands", "Distributors", "Flagged"];

const AdminUsers = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [banned, setBanned] = useState({ 7: true });

  const filtered = USERS.filter((u) => {
    const matchFilter = activeFilter === "All" || (activeFilter === "Brands" && u.type === "Brand") || (activeFilter === "Distributors" && u.type === "Distributor") || (activeFilter === "Flagged" && u.flagged);
    const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()) || (u.handle || "").toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const toggleBan = (i) => {
    setBanned((prev) => ({ ...prev, [i]: !prev[i] }));
  };

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
              style={{ fontSize: "11px", letterSpacing: "3px", color: i === 3 ? "#fff" : "rgba(255,255,255,0.25)", borderColor: i === 3 ? "#E8000D" : "transparent" }}
              onClick={() => navigate(item.path)}>
              {item.label}
            </div>
          ))}
        </div>
        <div className="font-barlow uppercase px-3 py-1.5" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(232,0,13,0.8)", border: "1px solid rgba(232,0,13,0.2)" }}>Sky — Admin</div>
      </nav>

      <div className="relative px-8 pb-16 pt-6" style={{ zIndex: 5 }}>

        {/* Top */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="font-barlow uppercase text-brand-red mb-2" style={{ fontSize: "11px", letterSpacing: "6px" }}>All users — brands and distributors</div>
            <h1 className="font-bebas text-white leading-none" style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "2px" }}>PLATFORM<br />USERS.</h1>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by name, handle, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white outline-none"
              style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", padding: "10px 14px", fontSize: "14px", width: "240px", color: "#fff", fontFamily: "Manrope" }}
            />
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} className="font-barlow uppercase transition-all"
                style={{ fontSize: "10px", letterSpacing: "3px", padding: "10px 14px", background: activeFilter === f ? "#E8000D" : "transparent", border: activeFilter === f ? "1px solid #E8000D" : "1px solid rgba(255,255,255,0.08)", color: activeFilter === f ? "#fff" : "rgba(255,255,255,0.3)", cursor: "pointer" }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 mb-6" style={{ background: "rgba(255,255,255,0.04)" }}>
          {[
            { val: "128", label: "Total users" },
            { val: "6", label: "Active brands" },
            { val: "122", label: "Distributors", green: true },
            { val: "2", label: "Banned", red: true },
          ].map((s, i) => (
            <div key={i} className="bg-brand-black py-4 px-6" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div className="font-bebas" style={{ fontSize: "32px", letterSpacing: "1px", lineHeight: 1, color: s.green ? "#00d264" : s.red ? "#E8000D" : "#fff" }}>{s.val}</div>
              <div className="font-barlow uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.2)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Header */}
          <div className="grid px-5 py-3 border-b" style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr 1fr", borderColor: "rgba(255,255,255,0.06)" }}>
            {["User", "Type / handle", "Joined", "Activity", "Status", "Actions"].map((h) => (
              <div key={h} className="font-barlow uppercase" style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.25)" }}>{h}</div>
            ))}
          </div>

          {/* Rows */}
          {filtered.map((user, i) => {
            const isBanned = banned[i] || user.banned;
            return (
              <div
                key={i}
                className="grid items-center px-5 py-3"
                style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr 1fr", borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", opacity: isBanned ? 0.45 : 1, transition: "opacity 0.2s" }}
              >
                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 font-bebas" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{user.initials}</div>
                  <div>
                    <div style={{ fontSize: "13px", color: "#fff", fontFamily: "Manrope" }}>{user.name}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>{user.email}</div>
                  </div>
                </div>
                {/* Type */}
                <div>
                  <div className="font-barlow uppercase inline-block" style={{ fontSize: "9px", letterSpacing: "2px", padding: "2px 7px", border: isBanned ? "1px solid rgba(232,0,13,0.3)" : user.type === "Brand" ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(0,210,100,0.25)", color: isBanned ? "rgba(232,0,13,0.7)" : user.type === "Brand" ? "rgba(59,130,246,0.7)" : "rgba(0,210,100,0.6)" }}>
                    {isBanned ? "Banned" : user.type}
                  </div>
                  {user.handle && <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>{user.handle}</div>}
                </div>
                {/* Joined */}
                <div className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "2px", color: "rgba(255,255,255,0.4)" }}>{user.joined}</div>
                {/* Activity */}
                <div className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "1px", color: user.flagged ? "#E8000D" : "rgba(255,255,255,0.4)" }}>{user.activity}</div>
                {/* Status */}
                <div className="font-barlow uppercase" style={{ fontSize: "11px", letterSpacing: "1px", color: isBanned ? "#E8000D" : user.statusColor }}>{isBanned ? "Banned" : user.status}</div>
                {/* Actions */}
                <div className="flex gap-2">
                  <button className="font-barlow uppercase transition-all" style={{ fontSize: "9px", letterSpacing: "2px", padding: "3px 8px", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)", background: "transparent", cursor: "pointer" }}>View</button>
                  <button
                    className="font-barlow uppercase transition-all"
                    style={{ fontSize: "9px", letterSpacing: "2px", padding: "3px 8px", border: isBanned ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(232,0,13,0.2)", color: isBanned ? "rgba(255,255,255,0.3)" : "rgba(232,0,13,0.5)", background: "transparent", cursor: "pointer" }}
                    onClick={() => toggleBan(i)}
                  >
                    {isBanned ? "Unban" : "Ban"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
