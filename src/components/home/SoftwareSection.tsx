import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import logos
import xeroLogo from "@/assests/img/xero-logo.jpg";
import sageLogo from "@/assests/img/Sage50 - Logp.jpg";
import quickbooksLogo from "@/assests/img/QuickBooks - Logo (1).jpg";
import brightPayLogo from "@/assests/img/BrightPay - logo.jpg";
import dextLogo from "@/assests/img/Dext - Logo.jpg";
import capiumLogo from "@/assests/img/Capi - Logo.jpg";
import hubdocLogo from "@/assests/img/hubdoc.png";
import taxfilerLogo from "@/assests/img/taxfiler.jpg";

const software = [
  { name: "Xero", image: xeroLogo },
  { name: "Sage", image: sageLogo },
  { name: "QuickBooks", image: quickbooksLogo },
  { name: "BrightPay", image: brightPayLogo },
  { name: "Dext", image: dextLogo },
  { name: "Hubdoc", image: hubdocLogo },
  { name: "Taxfiler", image: taxfilerLogo },
  { name: "Capium", image: capiumLogo },
];

export function SoftwareSection() {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-2 block">
            Software Stack
          </span>
          <h3 className="heading-sm text-foreground">
            We Work With Your Preferred Tools
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {software.map((item) => (
            <StaggerItem key={item.name}>
              <div className="group flex flex-col items-center justify-center p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft h-40">
                <div className="w-24 h-24 flex items-center justify-center mb-3">
                  <img
                    src={item.image || `https://placehold.co/100x100/transparent/000000?text=${encodeURIComponent(item.name)}`}
                    alt={`${item.name} logo`}
                    className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-12">
          <Link to="/tools">
            <Button
              variant="ghost"
              size="lg"
              className="bg-transparent text-black border border-black hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              View All Tools
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
