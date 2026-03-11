import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div
          data-testid="navbar-logo"
          className="font-bebas text-3xl text-white tracking-widest cursor-pointer hover:text-[#E8000D] transition-colors duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          17<span className="text-[#E8000D]">KATAS</span>
        </div>

        {/* Tagline + CTA */}
        <div className="flex items-center gap-8">
          <span className="hidden md:block font-barlow text-white/40 uppercase tracking-[0.25em] text-xs">
            Content Distribution Infrastructure
          </span>
          <button
            data-testid="navbar-cta-btn"
            onClick={() => scrollToSection("waitlist")}
            className="btn-primary text-sm px-5 py-2.5"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.8rem" }}
          >
            Join Beta
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
