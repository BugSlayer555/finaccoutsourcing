import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import {
  DesktopTower,
  FolderSimple,
  ClockCountdown,
  FileDoc,
} from "@phosphor-icons/react";

const methodology = [
  {
    icon: DesktopTower,
    step: "01",
    title: "Remote Access Setup",
    description:
      "Provide access to a dedicated system through remote desktop for software. We offer assistance with setup.",
  },
  {
    icon: FolderSimple,
    step: "02",
    title: "Document Management",
    description:
      "Save documents in separate folders or upload them to Dropbox. For bookkeeping, we use third-party apps like Dext.",
  },
  {
    icon: ClockCountdown,
    step: "03",
    title: "Fast Turnaround",
    description:
      "Bookkeeping: 5 working days (if regular). Year-end accounts: 12-14 working days with periodic status updates.",
  },
  {
    icon: FileDoc,
    step: "04",
    title: "Quality Delivery",
    description:
      "Submit working papers with notes. Provide job feedback, accept the job. Billing due within 30 days.",
  },
];

export function MethodologySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Our Methodology
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            How We Work Together
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            A streamlined process designed for efficiency and transparency at
            every step.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((item) => (
            <StaggerItem key={item.step}>
              <Card variant="glass" className="h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {item.step}
                </div>
                <CardHeader className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon
                      size={28}
                      weight="light"
                      className="text-primary"
                    />
                  </div>
                  <CardTitle className="text-foreground">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
