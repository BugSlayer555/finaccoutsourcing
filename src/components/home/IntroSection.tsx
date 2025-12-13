import { AnimatedSection } from "@/components/ui/animated-section";

export function IntroSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
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
                At FinAcc, we’re more than just a company-we’re a family driven by a shared passion for empowering businesses. As a team of dedicated experts in financial advising, accounting, bookkeeping, and consulting, we dive deep into your business to help it thrive.
              </p>
              <p>
                Our integrated approach means we don’t just offer services; we embed ourselves in your operations, working as an extension of your team. With specialists across Business Consulting, Finance, Tax, Accounting, and Bookkeeping, we dig into the numbers to uncover insights, identify opportunities, and tackle challenges head‑on. Our goal is simple: give you clarity, confidence, and actionable advice tailored to your unique goals.
              </p>
              <p>
                FinAcc OutSourcings began in 2019 as a two‑person venture built on a shared vision of delivering top‑tier financial services. Starting with freelance work for UK accounting firms, we’ve grown steadily—and in 2023, we officially registered as an LLP. Today, we’re a trusted partner for businesses seeking more than transactional support: we’re your partners in growth.
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
