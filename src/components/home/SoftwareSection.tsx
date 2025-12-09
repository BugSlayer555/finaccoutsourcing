import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const software = [
  { name: "Xero", color: "#13B5EA" },
  { name: "Sage", color: "#00D639" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "BrightPay", color: "#0066CC" },
  { name: "Dext", color: "#00C9A7" },
  { name: "Hubdoc", color: "#0066FF" },
  { name: "Taxfiler", color: "#FF6600" },
  { name: "Capium", color: "#1E90FF" },
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
              <div className="group flex flex-col items-center justify-center p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 grayscale group-hover:grayscale-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
