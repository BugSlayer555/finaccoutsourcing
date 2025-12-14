import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users } from "@phosphor-icons/react";

import { teamMembers } from "@/data/teamData";

const values = [
  {
    icon: Heart,
    title: "Trust",
    description: "Being good, honest, sincere, and avoiding harm or deceit towards others.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Consistently doing the right thing in a reliable manner.",
  },
  {
    icon: Eye,
    title: "Ethics",
    description: "Adhering to a system of accepted rules regarding behavior to define what is right or wrong.",
  },
  {
    icon: Users,
    title: "Respect",
    description: "Demonstrating respect towards clients, colleagues, policies, rules, and guidance.",
  },
];

const team = teamMembers.filter(member => member.isMain);

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              About Us
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              An Extension of Your Office
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              At FinAcc, we’re more than just a service provider—we’re a dedicated family driven by a shared passion for your success. As a team of seasoned experts in financial advising, accounting, and consulting, we don't just process numbers; we integrate deeply with your business culture. We strive to be the invisible engine behind your growth, offering the reliability of an in-house team with the flexibility of outsourcing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="heading-lg text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
                <p>
                  FinAcc OutSourcings began in 2019 as a two‑person venture built on a shared vision of delivering top‑tier financial services. Starting with freelance work for UK accounting firms, we’ve grown steadily—and in 2023, we officially registered as an LLP. Today, we’re a trusted partner for businesses seeking more than transactional support: we’re your partners in growth.
                </p>
                <p>
                  We work with a team of experts across different departments such as
                  Business Consulting, Finance, Tax, Accounting, and Bookkeeping. We help
                  you understand your business dynamics, identify reasons behind challenges,
                  and offer tailored advice to address them effectively.
                </p>
                <p>
                  We don't see you as just clients; we see you as part of our family,
                  guiding you whenever and wherever needed.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-foreground rounded-2xl p-8 text-background">
                <h3 className="text-2xl font-bold mb-8">Our Journey</h3>
                <div className="space-y-6">
                  {[
                    { year: "2019", event: "Founded by two passionate individuals" },
                    { year: "2020", event: "Started freelancing for UK firms" },
                    { year: "2023", event: "Officially registered as LLP" },
                    { year: "Today", event: "Serving 210+ accounts across UK" },
                  ].map((item) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="text-primary font-bold">{item.year}</div>
                      <div className="text-background/80 font-light">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card variant="glass" className="h-full p-8">
                <h3 className="heading-md text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-lg">
                  To provide advanced accounting services, knowledge process outsourcing
                  services, systems and processes in order to add value to our clients
                  business while remaining compliant to the laws of land by empowering
                  our staff to deliver such excellent services.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card variant="glass" className="h-full p-8">
                <h3 className="heading-md text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-lg">
                  To ensure excellence, be a trusted partner of choice, providing
                  technology-enabled, value-driven one-stop solutions that drive our
                  clients business growth in the field of accounts and finance.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Our Culture
            </span>
            <h2 className="heading-lg text-foreground mb-4">
              The TIER Values
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              We uphold the TIER culture within our organization.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card variant="glass" className="h-full text-center">
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <value.icon size={32} weight="light" className="text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{value.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="heading-lg text-foreground mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              A dedicated team of professionals committed to your success.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <Card variant="glass" className="text-center h-full flex flex-col">
                  <CardHeader className="space-y-4 flex-grow">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto overflow-hidden">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-primary">{member.initials}</span>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-foreground">{member.name}</CardTitle>
                      <CardDescription className="mt-2">{member.role}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12">
            <Link to="/team">
              <Button
                variant="ghost"
                size="lg"
                className="bg-transparent text-black border border-black hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                View Team
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
