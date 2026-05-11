import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import FeaturesSection from "@/components/sections/Features";
import HowItWorksSection from "@/components/sections/HowItWorks";
import ScreenshotsSection from "@/components/sections/Screenshots";
import DownloadSection from "@/components/sections/Download";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <DownloadSection />
      <FooterSection />
    </>
  );
}