const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="bg-[#080808] border-t border-white/5 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="font-bebas text-2xl text-white tracking-widest">
          17<span className="text-[#E8000D]">KATAS</span>
        </div>

        {/* Tagline */}
        <div className="font-barlow text-white/20 uppercase tracking-[0.25em] text-xs text-center">
          Content Distribution Infrastructure
        </div>

        {/* Copyright */}
        <div
          data-testid="footer-copyright"
          className="font-manrope text-white/20 text-xs text-center"
        >
          &copy; 2025 17Katas — Content Distribution Infrastructure
        </div>
      </div>
    </footer>
  );
};

export default Footer;
