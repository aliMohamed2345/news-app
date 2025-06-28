import FeaturesSection from "./components/Home/FeaturesSection";
import HeroSection from "./components/Home/HeroSection";
import NewsCategoriesPreviewSection from "./components/Home/NewsCategoriesPreviewSection";
import WhyChooseUsSection from "./components/Home/WhyChooseUsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <NewsCategoriesPreviewSection />
      <FeaturesSection />
    </>
  );
}
