const TICKER_ITEMS = [
  "PERFORMANCE BASED",
  "RESULTS FIRST",
  "PAY PER VIEW",
  "SAME DAY PAYOUTS",
  "ZERO GUESSWORK",
  "INDIA'S FIRST",
  "100% TRANSPARENT",
  "NO PROMISES",
];

const tickerText = TICKER_ITEMS.join("  ✦  ") + "  ✦  ";

const Ticker = () => {
  return (
    <div
      data-testid="ticker-section"
      className="relative overflow-hidden border-y-2 border-black"
      style={{ transform: "rotate(-0.8deg) scaleX(1.05)", zIndex: 10, margin: "2rem 0" }}
    >
      <div className="bg-[#E8000D] py-4">
        <div className="ticker-track">
          {/* Duplicate content for seamless loop */}
          <span className="font-bebas text-black text-2xl tracking-[0.15em] whitespace-nowrap px-4">
            {tickerText.repeat(6)}
          </span>
          <span className="font-bebas text-black text-2xl tracking-[0.15em] whitespace-nowrap px-4">
            {tickerText.repeat(6)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
