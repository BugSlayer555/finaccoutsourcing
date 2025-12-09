import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import {
  Calculator,
  Books,
  ChartBar,
  Receipt,
  Percent,
  ArrowRight,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Calculator,
    title: "Year End Final Accounts",
    description:
      "Comprehensive preparation of annual statutory accounts, ensuring compliance with UK GAAP and FRS standards.",
  },
  {
    icon: Books,
    title: "Bookkeeping",
    description:
      "Accurate day-to-day recording of financial transactions, bank reconciliations, and maintaining up-to-date books.",
  },
  {
    icon: ChartBar,
    title: "Management Accounts",
    description:
      "Regular financial reports providing insights into business performance with detailed analysis and commentary.",
  },
  {
    icon: Receipt,
    title: "Corporate Tax Returns",
    description:
      "Expert preparation and filing of CT600 returns, ensuring accurate tax calculations and timely submissions.",
  },
  {
    icon: Percent,
    title: "VAT Computation",
    description:
      "Precise VAT calculations, return preparation, and submission across all VAT schemes including MTD compliance.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Comprehensive Accounting Solutions
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            We provide end-to-end outsourcing services tailored for UK
            accounting practices, helping you reduce costs while maintaining
            quality.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Card
                variant="glass"
                className="h-full group cursor-pointer"
              >
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon
                      size={28}
                      weight="light"
                      className="text-primary"
                    />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}

          {/* CTA Card */}
          <StaggerItem>
            <Link to="/services">
              <Card
                variant="glass"
                className="h-full group cursor-pointer bg-primary/5 border-primary/10 hover:bg-primary/10"
              >
                <CardHeader className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ArrowRight
                      size={24}
                      weight="bold"
                      className="text-primary-foreground"
                    />
                  </div>
                  <CardTitle className="text-primary">
                    View All Services
                  </CardTitle>
                  <CardDescription>
                    Explore our complete range of outsourcing solutions
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
