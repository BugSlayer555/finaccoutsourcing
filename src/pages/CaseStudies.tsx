import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, TrendUp, ArrowRight, Users, Clock, Target } from "@phosphor-icons/react";

const caseStudy = {
  title: "KM Accountancy Practice",
  subtitle: "How a UK practice transformed their operations with FinAcc",
  profile: {
    structure: "Single Partner",
    managers: "2 Managers",
    seniors: "4 Seniors",
    juniors: "2 Juniors",
    bookkeepers: "2 Bookkeepers",
    admin: "4 Admin Staff",
    accounts: "210 Accounts",
    taxReturns: "320 Tax Returns",
    software: "Xero Accounts, Iris for Year-End",
  },
  issues: [
    "Couldn't cope with work volume",
    "Lost 1 staff member at beginning of year - losing another in November",
    "Too much partner time going on review",
    "No major growth in last two years despite good average fee",
  ],
  expectations: [
    "Deal with workflow issues at no expense to margins",
    "Maintain quality standards",
    "Managers to assume bulk of review process",
    "Partner wanted freed up time to grow practice",
  ],
  trial: [
    "Sole Trader, turnover < £86,000 - Easy job, paper records",
    "Partnership, turnover £135,000 - High volume of records",
    "Ltd Company, turnover < £1M - Complicated accounts, quality maintained",
  ],
  results: [
    "Partner time freed up dramatically",
    "Decision made to grow organically and through acquisition more aggressively",
    "Decision to co-source with existing staff as client handling increased",
    "Stress from staff wastage/frequent training has disappeared",
    "Low margin clients that were before declined are now accepted",
    "No opportunity is turned away now",
  ],
  metrics: [
    { label: "Cost Reduction", value: "40-50%", icon: TrendUp },
    { label: "Accounts Managed", value: "210+", icon: Target },
    { label: "Tax Returns", value: "320+", icon: Users },
    { label: "Working Days Saved", value: "100+", icon: Clock },
  ],
};

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-foreground text-sm font-medium mb-6">
              <TrendUp size={16} weight="bold" />
              Case Study
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              See how KM Accountancy Practice, a growing UK firm, partnered with FinAcc to overcome capacity bottlenecks and staff turnover. By outsourcing routine compliance work, they freed up partner time, dramatically reduced costs, and unlocked organic growth—proving that the right partnership can transform a practice's trajectory.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Practice Profile */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="heading-md text-foreground mb-8">Practice Profile</h2>
              <Card variant="glass" className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(caseStudy.profile).map(([key, value]) => (
                    <div key={key} className="py-3 border-b border-border last:border-0">
                      <div className="text-sm text-muted-foreground capitalize mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="font-medium text-foreground">{value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="heading-md text-foreground mb-8">The Challenges</h2>
              <div className="space-y-4">
                {caseStudy.issues.map((issue, i) => (
                  <Card key={i} variant="glass" className="p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-destructive">{i + 1}</span>
                    </div>
                    <p className="text-foreground font-light pt-1">{issue}</p>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <h2 className="heading-md text-foreground mb-4">Expectations from Outsourcing</h2>
            <p className="text-muted-foreground font-light text-lg">
              What the practice wanted to achieve through partnership with FinAcc.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.expectations.map((expectation, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card variant="glass" className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target size={20} className="text-primary" />
                  </div>
                  <p className="text-foreground font-light pt-2">{expectation}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Trial */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <h2 className="heading-md text-foreground mb-4">The Trial</h2>
            <p className="text-muted-foreground font-light text-lg">
              Three different job types were tested to establish communication channels.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudy.trial.map((trial, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card variant="glass" className="p-6 h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">0{i + 1}</div>
                  <p className="text-foreground font-light">{trial}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="heading-lg mb-4">The Results</h2>
            <p className="text-background/70 font-light text-lg max-w-2xl mx-auto">
              The effect of outsourcing on the practice exceeded all expectations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseStudy.metrics.map((metric, i) => (
              <AnimatedSection key={metric.label} delay={i * 0.1}>
                <Card className="p-6 bg-background/5 border-background/10 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <metric.icon size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-background/70">{metric.label}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {caseStudy.results.map((result, i) => (
              <AnimatedSection key={i} delay={0.3 + i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-background/5 rounded-xl">
                  <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0" />
                  <span className="text-background/90 font-light">{result}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">
              Ready for Similar Results?
            </h2>
            <p className="text-muted-foreground font-light text-lg mb-8 max-w-2xl mx-auto">
              Join accounting practices across the UK who have transformed their operations with FinAcc.
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

export default CaseStudies;
