import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import {
    CloudArrowUp,
    EnvelopeSimple,
    Desktop,
    Scan,
    PaperPlaneTilt,
    MagnifyingGlass,
    Question,
    CheckCircle,
    ArrowsClockwise,
    Package,
} from "@phosphor-icons/react";

const mainProcess = [
    {
        step: 1,
        title: "Scanning",
        description: "Scan documents like bank statements, invoices, etc.",
        icon: Scan,
    },
    {
        step: 2,
        title: "Upload",
        description: "Upload to Dropbox, Drive, or FTP as applicable.",
        icon: CloudArrowUp,
    },
    {
        step: 3,
        title: "Inform",
        description: "Email us with subject & body detailing documents and deadline.",
        icon: EnvelopeSimple,
    },
    {
        step: 4,
        title: "Analysis",
        description: "We analyze the files and estimate work/time required.",
        icon: MagnifyingGlass,
    },
    {
        step: 5,
        title: "Queries",
        description: "We send queries for any missing information.",
        icon: Question,
    },
    {
        step: 6,
        title: "Accomplishment",
        description: "We complete and upload the work to shared folder.",
        icon: CheckCircle,
    },
    {
        step: 7,
        title: "Updates",
        description: "You review and we make final adjustments.",
        icon: ArrowsClockwise,
    },
    {
        step: 8,
        title: "Deliver",
        description: "Final version is saved and emailed for dispatch.",
        icon: Package,
    },
];

export function ProcessSection() {
    return (
        <section className="section-padding bg-secondary overflow-hidden">
            <div className="container-custom">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
                        How the Process Works
                    </span>
                    <h2 className="heading-lg text-foreground mb-6">
                        Our Process
                    </h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        Quality work with Systematic approach. With a systematic and step-by-step process—you can get the most out of outsourcing your work to us.
                    </p>
                </AnimatedSection>

                {/* Method 1: FTP / Cloud */}
                <div className="mb-20">
                    <AnimatedSection className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                            <CloudArrowUp size={20} weight="fill" />
                            METHOD 1: FTP SERVER / DROPBOX / ONEDRIVE / GDRIVE
                        </div>
                    </AnimatedSection>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {mainProcess.map((item, index) => (
                                <StaggerItem key={item.step} className="md:last:col-span-2 md:last:w-1/2 md:last:mx-auto lg:last:col-span-1 lg:last:w-auto lg:last:mx-0">
                                    <div className="group relative">
                                        <div className="hidden lg:block absolute top-[2.5rem] left-1/2 -ml-[1px] w-0.5 h-8 bg-primary/30 -z-10" />

                                        <Card variant="glass" className="h-full p-6 text-center hover:border-primary/50 transition-colors duration-300">
                                            <div className="w-12 h-12 rounded-xl bg-background shadow-soft flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300 relative z-20 border border-border">
                                                <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center border-2 border-background">
                                                    {item.step}
                                                </span>
                                                <item.icon size={24} />
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                                        </Card>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>

                {/* Methods 2 & 3 */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Method 2 */}
                    <AnimatedSection delay={0.2} className="h-full">
                        <Card className="h-full p-8 bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                            <div className="relative z-10 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                                    <EnvelopeSimple size={32} weight="fill" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    METHOD 2: EMAIL BASED
                                </h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    Scan and email documents directly to us along with deadlines and instructions. We review, complete the task, and send the finished file back to you with necessary clarifications if any.
                                </p>
                            </div>
                        </Card>
                    </AnimatedSection>

                    {/* Method 3 */}
                    <AnimatedSection delay={0.4} className="h-full">
                        <Card className="h-full p-8 bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                            <div className="relative z-10 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                                    <Desktop size={32} weight="fill" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    METHOD 3: REMOTE DESKTOP / VPN
                                </h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    Share your Remote Desktop or VPN login. Our team accesses your system and works directly in your environment, ensuring confidentiality and efficiency as an extended arm of your firm.
                                </p>
                            </div>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
