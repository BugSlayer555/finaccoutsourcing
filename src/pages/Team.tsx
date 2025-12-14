import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@phosphor-icons/react";
import { teamMembers } from "@/data/teamData";

const Team = () => {
    return (
        <Layout>
            {/* Navigation */}
            <section className="pt-24 pb-8 bg-secondary">
                <div className="container-custom">
                    <Link to="/about">
                        <Button
                            variant="ghost"
                            className="mb-8 -ml-4 bg-transparent text-black hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                            <ArrowLeft size={20} weight="bold" />
                            Back to About
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Hero */}
            <section className="section-padding bg-secondary pt-0">
                <div className="container-custom">
                    <AnimatedSection className="max-w-3xl">
                        <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
                            Our Team
                        </span>
                        <h1 className="heading-xl text-foreground mb-6">
                            Meet the Experts
                        </h1>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed">
                            We are a dedicated team of professionals committed to your success.
                            Our diverse expertise ensures that all your financial needs are met with precision and care.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member) => (
                            <StaggerItem key={member.id}>
                                <Link to={`/team/${member.id}`} className="block h-full">
                                    <Card variant="glass" className="text-center h-full transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 cursor-pointer group">
                                        <CardHeader className="space-y-4">
                                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20 overflow-hidden">
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
                                            <CardTitle className="text-foreground group-hover:text-primary transition-colors">{member.name}</CardTitle>
                                            <CardDescription>{member.role}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </Layout>
    );
};

export default Team;
