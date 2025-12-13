import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  ChartLineUp,
  ShieldCheck,
  Clock,
  Users,
  ArrowRight,
} from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Glass shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium">
                <ShieldCheck size={16} weight="fill" />
                Trusted by UK Accounting Firms
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="heading-xl text-foreground">
                Outsourcing Accounting -{" "}
                <span className="text-primary">An Extension of Your Office</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl mb-6">
                FinAcc is more than a company-it’s a family. Founded by a team of finance professionals who believe that great numbers build great businesses, we’ve turned that belief into a full‑service practice that supports companies like yours at every stage.
              </p>
              <ul className="space-y-2 mb-8 text-base text-muted-foreground font-light max-w-xl">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Financial advising that drives strategic decisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Accurate accounting and bookkeeping you can trust
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Tailored consulting to streamline operations
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Book a Consultation
                    <ArrowRight size={20} weight="bold" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-foreground">40-50%</div>
                  <div className="text-sm text-muted-foreground font-light">
                    Cost Reduction
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground font-light">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">210+</div>
                  <div className="text-sm text-muted-foreground font-light">
                    Accounts Managed
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Visual */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-foreground/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-foreground/[0.05]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground font-light">
                      Annual Savings
                    </p>
                    <h3 className="text-3xl font-bold text-foreground">
                      £22,800
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ChartLineUp size={24} className="text-primary" />
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-40 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 75, 95, 80, 100].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/20 rounded-t-sm transition-all hover:bg-primary/40"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-4 top-8 bg-background rounded-xl p-4 shadow-elevated border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Clock size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      5 Days
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Turnaround Time
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -left-4 bottom-16 bg-background rounded-xl p-4 shadow-elevated border border-border animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Expert Team
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Dedicated Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
