import {
  AppoinmentsIcon,
  ExperienceRatingIcon,
  HappyPetsIcon,
  PetParentsIcon,
} from "@/assets/icons/Hero";
import NumberCounter from "@/components/NumberCounter";
import AboutUsSection from "@/containers/AboutUsSection";
import BestPetAndParentSection from "@/containers/BestPetAndParentSection";
import BrowseCategorySection from "@/containers/BrowseCategorySection";
import CtaSection from "@/containers/CtaSection";
import FeaturedProducts from "@/containers/FeaturedProducts";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import HeroSection from "@/containers/HeroSection";
import InstagramSection from "@/containers/InstagramSection";
import TestimonialsSection from "@/containers/TestimonialsSection";
import TipSection from "@/containers/TipSection";
import TrustedPartnersSection from "@/containers/TrustedPartnersSection";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <HeroSection />
      <CtaSection />
      <BrowseCategorySection />
      <AboutUsSection />
      <TrustedPartnersSection />
      <FeaturedProducts />
      <BestPetAndParentSection/>
      <TestimonialsSection />
      <TipSection/>
      <InstagramSection/>
      <Footer />
    </main>
  );
}
