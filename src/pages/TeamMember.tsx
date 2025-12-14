import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Envelope, Phone, GraduationCap, Star } from "@phosphor-icons/react";
import { teamMembers } from "@/data/teamData";

const TeamMember = () => {
    const { id } = useParams<{ id: string }>();

    const member = teamMembers.find(m => m.id === id);

    if (!member) {
        return <Navigate to="/team" replace />;
    }

    return (
        <Layout>
            {/* Navigation */}
            <section className="pt-24 pb-8 bg-secondary">
                <div className="container-custom">
                    <Link to="/team">
                        <Button
                            variant="ghost"
                            className="mb-8 -ml-4 bg-transparent text-black hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                            <ArrowLeft size={20} weight="bold" />
                            Back to Team
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Member Profile */}
            <section className="section-padding bg-secondary pt-0">
                <div className="container-custom">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            {/* Avatar Column */}
                            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                                <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                                            <span className="text-5xl font-bold text-primary">{member.initials}</span>
                                        </>
                                    )}
                                </div>
                                <h1 className="heading-md text-foreground mb-2 text-3xl">{member.name}</h1>
                                <p className="text-lg text-primary font-medium mb-6">{member.role}</p>

                                <div className="w-full space-y-3">
                                    <Button variant="outline" className="w-full gap-3 justify-start h-12 text-base" asChild>
                                        <a href={`mailto:${member.email}`}>
                                            <Envelope size={20} />
                                            {member.email}
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="w-full gap-3 justify-start h-12 text-base" asChild>
                                        <a href={`tel:${member.phone}`}>
                                            <Phone size={20} />
                                            {member.phone}
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="w-full md:w-2/3 space-y-8 bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border">
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                        <Star size={24} className="text-primary" weight="fill" />
                                        About
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                                        {member.bio}
                                    </p>
                                </div>

                                <div className="h-px bg-border w-full"></div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                        <Star size={24} className="text-primary" weight="fill" />
                                        Expertise
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill) => (
                                            <span key={skill} className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium border border-border">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-border w-full"></div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                        <GraduationCap size={24} className="text-primary" weight="fill" />
                                        Education
                                    </h2>
                                    <p className="text-muted-foreground text-lg">
                                        {member.education}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </Layout>
    );
};

export default TeamMember;
