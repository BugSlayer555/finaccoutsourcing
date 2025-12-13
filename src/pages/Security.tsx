import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FolderLock,
  ShieldCheck,
  Lock,
  Certificate,
  CheckSquare,
  Buildings,
  HardDrives,
  EnvelopeSimple,
  ArrowRight,
} from "@phosphor-icons/react";

const securityFeatures = [
  {
    icon: FolderLock,
    title: "Highly Secure FTP Server",
    description: "File Transfer Protocol server with advanced encryption for all data transfers between our systems and yours.",
    category: "Data Transfer",
  },
  {
    icon: HardDrives,
    title: "Secure Remote Servers",
    description: "All data is stored on secure, remote servers with regular backups and redundancy measures in place.",
    category: "Infrastructure",
  },
  {
    icon: Lock,
    title: "SSL Encryption",
    description: "Transfer of all important data is in encrypted form using industry-standard SSL/TLS protocols.",
    category: "Encryption",
  },
  {
    icon: ShieldCheck,
    title: "McAfee Enterprise Protection",
    description: "Enterprise edition anti-virus and malware software protection on all server infrastructure.",
    category: "Virus Protection",
  },
  {
    icon: EnvelopeSimple,
    title: "In-house Email Server",
    description: "Managed email server (not hosted externally) for complete control over email communications.",
    category: "Communications",
  },
  {
    icon: Buildings,
    title: "Logical Protection",
    description: "Multi-layered logical security controls including access management and audit trails.",
    category: "Access Control",
  },
];

const compliance = [
  {
    icon: Certificate,
    title: "GDPR Compliant",
    description: "Full compliance with General Data Protection Regulation for handling EU/UK personal data.",
  },
  {
    icon: CheckSquare,
    title: "GAPP Guidelines",
    description: "Adherence to Generally Accepted Privacy Principles ensuring complete security of confidential data.",
  },
];

const policies = [
  "Crossing data between clients is strictly forbidden",
  "Regular security audits and penetration testing",
  "Employee background checks and security training",
  "Incident response and disaster recovery plans",
  "Data retention and secure disposal policies",
  "Physical security measures at all facilities",
];

const Security = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Security Standards
            </span>
            <h1 className="heading-xl mb-6">
              Your Data is Safe With Us
            </h1>
            <p className="text-xl text-background/70 font-light leading-relaxed">
              We prioritize the absolute security of your sensitive financial information. Our infrastructure is built on bank-grade encryption, secure FTP servers, and strict compliance with GDPR and GAPP guidelines. With multi-layered logical protection and enterprise-grade anti-virus systems, we ensure your data remains confidential and protected at all times.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Security Systems & Data Protection
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              Comprehensive security measures to protect your sensitive financial data.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="glass" className="h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <feature.icon size={24} weight="light" className="text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {feature.category}
                      </span>
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Regulatory Compliance
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              We maintain strict compliance with international data protection standards.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {compliance.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Card variant="glass" className="p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={32} weight="light" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="heading-lg text-foreground mb-6">
                Our Security Policies
              </h2>
              <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
                Beyond technical measures, we maintain strict policies and procedures
                to ensure the highest level of data protection.
              </p>
              <div className="space-y-4">
                {policies.map((policy, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={14} weight="fill" className="text-primary" />
                    </div>
                    <span className="text-foreground font-light">{policy}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-foreground text-background p-8">
                <h3 className="text-2xl font-bold mb-6">Security Commitment</h3>
                <p className="text-background/80 font-light leading-relaxed mb-8">
                  Our company is compliant with the Generally Accepted Privacy Principles
                  (GAPP), ensuring the complete security of your confidential data. We treat
                  your data with the same care and protection as we would our own.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    GDPR Compliant
                  </span>
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    GAPP Certified
                  </span>
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    ISO 27001 Standards
                  </span>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">
              Questions About Our Security?
            </h2>
            <p className="text-muted-foreground font-light text-lg mb-8 max-w-2xl mx-auto">
              We're happy to discuss our security measures in detail.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight size={20} weight="bold" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Security;
