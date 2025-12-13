import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";

import { ProcessSection } from "@/components/services/ProcessSection";
import { PricingCards } from "@/components/pricing/PricingCards";

const Pricing = () => {
    return (
        <Layout>
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <AnimatedSection className="max-w-3xl">
                        <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
                            Our Process & Plans
                        </span>
                        <h1 className="heading-xl text-foreground mb-6">
                            Structured Process & Transparent Pricing
                        </h1>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed">
                            We believe in simple, transparent, and flexible pricing models that adapt to your business needs. Whether you require a dedicated full-time resource, ad-hoc support for specific tasks, or a fixed budget for recurring work, we have a plan designed to maximize value without hidden costs.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Process Section */}
            <ProcessSection />

            {/* Pricing Cards */}
            <PricingCards />
        </Layout>
    );
};

export default Pricing;
