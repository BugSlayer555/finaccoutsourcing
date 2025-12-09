import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Phone, EnvelopeSimple } from "@phosphor-icons/react";

export function ContactCTASection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Get Started
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="heading-lg text-foreground mb-4">
              Ready to Transform Your Practice?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground font-light text-lg mb-10">
              Book a 15-30 min discovery call for a complimentary trial of 8-10
              hours job to test the water and give your firm wings of growth.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <Phone size={20} weight="bold" />
                  Schedule a Call
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">
                  <EnvelopeSimple size={20} weight="bold" />
                  Send a Message
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
