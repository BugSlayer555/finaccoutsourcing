import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import { Star, Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Tom Cook",
    role: "Partner, UK Accounting Firm",
    content: "Awesome people, very friendly and professional, full of knowledge, fast and always provide quality services.",
    rating: 5,
    highlight: "Quality services",
  },
  {
    name: "Kairen Wolf",
    role: "Director, Financial Services",
    content: "I am extremely delighted by their work, found them excellent in their services.",
    rating: 5,
    highlight: "Excellent services",
  },
  {
    name: "Wood Joe",
    role: "Managing Partner",
    content: "They are genius. Hats off. They save my £1,900 every month on staff and infrastructure.",
    rating: 5,
    highlight: "£1,900/month savings",
  },
  {
    name: "Sarah Mitchell",
    role: "Senior Partner, Mitchell & Co",
    content: "FinAcc has transformed how we operate. The turnaround times are exceptional and the quality never wavers.",
    rating: 5,
    highlight: "Exceptional turnaround",
  },
  {
    name: "James Peterson",
    role: "Founder, Peterson Accounting",
    content: "The team at FinAcc feels like an extension of our own office. Communication is seamless and results are consistent.",
    rating: 5,
    highlight: "Seamless communication",
  },
  {
    name: "Emily Watson",
    role: "Operations Director",
    content: "We've reduced our overhead significantly while improving our service delivery. Couldn't be happier with the partnership.",
    rating: 5,
    highlight: "Reduced overhead",
  },
];

const stats = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "40-50%", label: "Average Cost Savings" },
  { value: "5+", label: "Years of Partnership" },
  { value: "210+", label: "Accounts Managed" },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Testimonials
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Trusted by accounting firms across the UK for quality, reliability, and exceptional service.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-background/70 font-light">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <Card variant="glass" className="h-full p-6">
                  <Quotes size={32} weight="fill" className="text-primary/20 mb-4" />
                  
                  <p className="text-foreground font-light leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-gold" />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {testimonial.highlight}
                    </span>
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
              Join Our Satisfied Clients
            </h2>
            <p className="text-muted-foreground font-light text-lg mb-8 max-w-2xl mx-auto">
              Experience the FinAcc difference with a complimentary trial.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-neumorphic hover:shadow-neumorphic-hover hover:-translate-y-0.5 transition-all"
            >
              Book a Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
