import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight, CheckCircle, TrendUp } from "@phosphor-icons/react";

const results = [
  "Partner time freed up dramatically",
  "40-50% cost reduction achieved",
  "Staff stress significantly reduced",
  "No opportunity turned away now",
];

const metrics = [
  { label: "Accounts Managed", value: "210+" },
  { label: "Tax Returns", value: "320+" },
  { label: "Cost Savings", value: "40-50%" },
  { label: "Working Days TAT", value: "5-14" },
];

export function CaseStudySection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-foreground text-sm font-medium mb-6">
                <TrendUp size={16} weight="bold" />
                Case Study
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="heading-lg text-foreground mb-4">
                KM Accountancy Practice
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
                A single partner practice with 2 managers, 4 seniors, and 2
                juniors couldn't cope with work after losing staff members. Too
                much partner time was going on review with no major growth in
                the last two years.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="space-y-4 mb-8">
                {results.map((result) => (
                  <div key={result} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle
                        size={16}
                        weight="fill"
                        className="text-primary"
                      />
                    </div>
                    <span className="text-foreground font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/case-studies">
                  Read Full Case Study
                  <ArrowRight size={20} weight="bold" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>

          {/* Metrics Visual */}
          <AnimatedSection delay={0.2}>
            <div className="bg-foreground rounded-2xl p-8 text-background">
              <h3 className="text-xl font-semibold mb-8">Practice Profile</h3>

              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-background/10 rounded-xl p-6"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-background/70 font-light">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-background/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-background/70">
                    Efficiency Improvement
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    +47%
                  </span>
                </div>
                <div className="h-3 bg-background/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "47%" }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
