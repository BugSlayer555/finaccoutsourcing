import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calculator,
  Books,
  ChartBar,
  Receipt,
  Percent,
  Clock,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Calculator,
    title: "Year End Final Accounts",
    description: "Comprehensive preparation of annual statutory accounts for all entity types.",
    features: [
      "Sole trader accounts",
      "Partnership accounts",
      "Limited company accounts",
      "Compliance with UK GAAP/FRS",
    ],
    turnaround: "Within a Week",
    tools: ["Iris", "Xero", "Sage"],
  },
  {
    icon: Books,
    title: "Bookkeeping",
    description: "Accurate day-to-day recording of all financial transactions.",
    features: [
      "Bank reconciliations",
      "Accounts payable/receivable",
      "Regular financial updates",
      "MTD compliant records",
    ],
    turnaround: "2-3 Working Days",
    tools: ["Xero", "QuickBooks", "Dext"],
  },
  {
    icon: ChartBar,
    title: "Management Accounts",
    description: "Regular financial reports providing insights into business performance.",
    features: [
      "Monthly/quarterly reports",
      "Variance analysis",
      "Cash flow forecasting",
      "KPI tracking",
    ],
    turnaround: "3-4 Days",
    tools: ["Xero", "Sage", "Excel"],
  },
  {
    icon: Receipt,
    title: "Corporate Tax Returns",
    description: "Expert preparation and filing of CT600 returns for UK companies.",
    features: [
      "CT600 preparation",
      "Tax computation",
      "R&D tax relief claims",
      "Group relief calculations",
    ],
    turnaround: "4-5 Working Days",
    tools: ["Taxfiler", "Capium"],
  },
  {
    icon: Percent,
    title: "VAT Computation",
    description: "Precise VAT calculations and return preparation across all schemes.",
    features: [
      "Standard VAT returns",
      "Flat rate scheme",
      "MTD for VAT compliance",
      "EC Sales List preparation",
    ],
    turnaround: "2-3 Working Days",
    tools: ["Xero", "Sage", "QuickBooks"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              Comprehensive Accounting Solutions
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              End-to-end outsourcing services tailored specifically for UK accounting practices. From year-end accounts and bookkeeping to corporate tax and VAT, our expert team functions as an extension of your firm—helping you reduce operational costs by 40-50% while scaling your capacity and maintaining exceptional quality standards.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <StaggerContainer className="space-y-8">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <Card variant="glass" className="overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <CardHeader className="lg:col-span-2 p-8 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <service.icon size={28} weight="light" className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-foreground mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle size={16} weight="fill" className="text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent className="bg-secondary/50 p-8 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Clock size={16} />
                            Turnaround Time
                          </div>
                          <div className="text-lg font-semibold text-foreground">
                            {service.turnaround}
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-muted-foreground mb-2">
                            Software Used
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-1 text-sm bg-background rounded-full text-foreground"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground font-light text-lg mb-8 max-w-2xl mx-auto">
              Book a complimentary trial of 8-10 hours to experience our quality firsthand.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book a Consultation
                <ArrowRight size={20} weight="bold" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
