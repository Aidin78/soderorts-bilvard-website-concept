import type { Metadata } from "next";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { Hero } from "@/components/home/Hero";
import { PricePreview } from "@/components/home/PricePreview";
import { QuickServiceNav } from "@/components/home/QuickServiceNav";
import { TireHotelFeature } from "@/components/home/TireHotelFeature";
import { WhyUs } from "@/components/home/WhyUs";
import { WorkshopGallery } from "@/components/home/WorkshopGallery";
import { FinalCta } from "@/components/sections/FinalCta";
import { LocationSection } from "@/components/sections/LocationSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickServiceNav />
      <FeaturedServices />
      <PricePreview />
      <WhyUs />
      <WorkshopGallery />
      <TireHotelFeature />
      <ReviewsSection />
      <LocationSection />
      <FinalCta />
    </>
  );
}
