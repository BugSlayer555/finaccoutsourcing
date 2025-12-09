import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import {
  FolderLock,
  ShieldCheck,
  Lock,
  Certificate,
  CheckSquare,
  Buildings,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";

const security = [
  {
    icon: FolderLock,
    title: "FTP Security",
    description: "Highly secure File Transfer Protocol server for data exchange",
  },
  {
    icon: Lock,
    title: "SSL Encryption",
    description: "Transfer of important data is in encrypted form",
  },
  {
    icon: ShieldCheck,
    title: "McAfee Protection",
    description: "Enterprise edition anti-virus and malware software protection",
  },
  {
    icon: Certificate,
    title: "GDPR Compliant",
    description: "Full compliance with General Data Protection Regulation",
  },
  {
    icon: CheckSquare,
    title: "GAPP Guidelines",
    description: "Adherence to Generally Accepted Privacy Principles",
  },
  {
    icon: Buildings,
    title: "Secure Servers",
    description: "Remote servers with backed-up data and logical protection",
  },
];

export function SecuritySection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Security Standards
          </span>
          <h2 className="heading-lg mb-4">Your Data is Safe With Us</h2>
          <p className="text-background/70 font-light text-lg">
            We prioritize the security of your information with best-practice
            frameworks and secure systems.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {security.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full bg-background/5 border-background/10 hover:bg-background/10 transition-colors">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <item.icon size={24} weight="light" className="text-primary" />
                  </div>
                  <CardTitle className="text-background">{item.title}</CardTitle>
                  <CardDescription className="text-background/60">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-background/30 text-background hover:bg-background hover:text-foreground"
            asChild
          >
            <Link to="/security">
              View Security Details
              <ArrowRight size={20} weight="bold" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
