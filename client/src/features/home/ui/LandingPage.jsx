import HeroSection from "../components/HeroSection";
import LivePreviewSection from "../components/LivePreviewSection";
import FeaturesSection from "../components/FeaturesSection";
import AnalyticsSection from "../components/AnalyticsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <LivePreviewSection />
      <FeaturesSection />
      <AnalyticsSection />
      <HowItWorksSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;