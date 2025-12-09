import { AnimatedSection } from "@/components/ui/animated-section";

export function IntroSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl">
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              About FinAcc
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="heading-lg text-foreground mb-6">
              Your Trusted Partner in Financial Excellence
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                FinAcc is more than just a company or business; it's a family
                and an emotion. As experts, we're dedicated to helping your
                business thrive. Whether it's through financial advising,
                accounting, bookkeeping, or consulting, we integrate ourselves
                into your business to provide guidance and support.
              </p>
              <p>
                We work with a team of experts across different departments such
                as Business Consulting, Finance, Tax, Accounting, and
                Bookkeeping. We help you understand your business dynamics,
                identify reasons behind challenges, and offer tailored advice to
                address them effectively.
              </p>
              <p>
                A bit about our journey: FinAcc Outsourcing was founded in 2019
                by two individuals who were passionate about providing financial
                services. They started by freelancing for UK accounting firms,
                and in 2023, they officially registered the company as an LLP.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
              {[
                { label: "Trust", desc: "Being good, honest, and sincere" },
                { label: "Integrity", desc: "Doing the right thing reliably" },
                { label: "Ethics", desc: "Adhering to accepted standards" },
                { label: "Respect", desc: "Towards clients and colleagues" },
              ].map((value) => (
                <div key={value.label}>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {value.label}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
