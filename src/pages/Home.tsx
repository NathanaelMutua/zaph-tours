import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeatureDestinations from "../components/FeatureDestinations";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      {/* Zaph Hero Section */}
      <HeroSection />
      <AboutSection />
      <FeatureDestinations />
      <Testimonials />
    </>
  );
}

export default Home;
