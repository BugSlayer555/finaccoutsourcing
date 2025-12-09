import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SoftwareSection } from "@/components/home/SoftwareSection";
import { MethodologySection } from "@/components/home/MethodologySection";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { ContactCTASection } from "@/components/home/ContactCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <SoftwareSection />
      <MethodologySection />
      <CaseStudySection />
      <TestimonialsSection />
      <SecuritySection />
      <ContactCTASection />
    </Layout>
  );
};

export default Index;
