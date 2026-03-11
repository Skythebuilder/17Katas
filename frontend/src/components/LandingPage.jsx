import Navbar from "./Navbar";
import Hero from "./Hero";
import Ticker from "./Ticker";
import Stats from "./Stats";
import HowItWorks from "./HowItWorks";
import WhyKatas from "./WhyKatas";
import WaitlistForms from "./WaitlistForms";
import Manifesto from "./Manifesto";
import Footer from "./Footer";

const scrollToWaitlist = () => {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
};

const LandingPage = () => {
  return (
    <div className="bg-[#080808] min-h-screen">
      <Navbar />
      <Hero onJoinBrand={scrollToWaitlist} onJoinDistributor={scrollToWaitlist} />
      <Ticker />
      <Stats />
      <HowItWorks />
      <WhyKatas />
      <WaitlistForms />
      <Manifesto />
      <Footer />
    </div>
  );
};

export default LandingPage;
