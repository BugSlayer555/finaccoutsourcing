import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Clock,
    Receipt,
    UserList,
    CheckCircle,
    ArrowRight,
} from "@phosphor-icons/react";

const pricingModels = [
    {
        title: "Hourly",
        subtitle: "Pay-as-you-go flexibility",
        description: "Choose any service and pay only for the hours worked — billed at a transparent hourly rate. Perfect for firms that need occasional support or one-off tasks completed quickly and efficiently.",
        icon: Clock,
        features: ["Zero commitment", "Pay only for what you use", "Ideal for ad-hoc tasks"],
        cta: "Start Hourly",
    },
    {
        title: "Fixed Budget",
        subtitle: "Scope it. Quote it. Done.",
        description: "For each job, we estimate the number of hours required and quote accordingly — no surprises. Ideal for recurring tasks like payroll, bookkeeping, or year-end accounts.",
        icon: Receipt,
        features: ["Guaranteed price", "No hidden costs", "Best for recurring work"],
        cta: "Get a Quote",
        popular: true,
    },
    {
        title: "Full Time",
        subtitle: "Your offshore team, fully aligned",
        description: "We assign a full-time dedicated accountant who works exclusively for your firm — on a fixed monthly salary. They follow your SOPs, use your tools, and operate like an in-house hire, without the overhead.",
        icon: UserList,
        features: ["Dedicated resource", "Full alignment with SOPs", "Scalable remote team"],
        cta: "Hire Dedicated",
    },
];

export function PricingCards() {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
                        Flexible Engagement Models
                    </span>
                    <h2 className="heading-lg text-foreground mb-6">
                        Choose How You Work With Us
                    </h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        Whether you need ad-hoc support, project-based work, or a dedicated team member, we have a model that fits your practice.
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid lg:grid-cols-3 gap-8">
                    {pricingModels.map((model, index) => (
                        <StaggerItem key={model.title} className="h-full">
                            <Card
                                className={`h-full p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated ${model.popular
                                    ? "border-primary ring-1 ring-primary/20 bg-secondary/50"
                                    : "border-border bg-background/50 backdrop-blur-sm"
                                    }`}
                            >
                                {model.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-soft">
                                        Most Popular
                                    </div>
                                )}

                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary flex-shrink-0">
                                    <model.icon size={32} weight="duotone" />
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-foreground mb-2">{model.title}</h3>
                                    <p className="text-primary font-medium">{model.subtitle}</p>
                                </div>

                                <p className="text-muted-foreground font-light mb-8 flex-grow leading-relaxed">
                                    {model.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {model.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                                            <CheckCircle size={18} weight="fill" className="text-primary flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    variant={model.popular ? "hero" : "outline"}
                                    className="w-full"
                                    asChild
                                >
                                    <Link to="/contact">
                                        {model.cta}
                                        <ArrowRight size={16} weight="bold" />
                                    </Link>
                                </Button>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
