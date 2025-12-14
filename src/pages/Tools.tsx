import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";

// Import Logos
import vtLogo from "@/assests/img/VT Software - Logo (1).jpg";
import irisLogo from "@/assests/img/Iris - Logo.jpg";
import digitaLogo from "@/assests/img/Digita - logo (1).jpg";
import btcLogo from "@/assests/img/BTC - Logo.jpg";
import taxCalcLogo from "@/assests/img/TaxCalc - Logo (1).jpg";
import xeroLogo from "@/assests/img/xero-logo.jpg";
import quickbooksLogo from "@/assests/img/QuickBooks - Logo (1).jpg";
import sageLogo from "@/assests/img/Sage50 - Logp.jpg";
import kashflowLogo from "@/assests/img/Kashflow - Logo (1).jpg";
import dextLogo from "@/assests/img/Dext - Logo.jpg";
import capiumLogo from "@/assests/img/Capi - Logo.jpg";
import autoEntryLogo from "@/assests/img/AutoEntry - logo.jpg";
import freeAgentLogo from "@/assests/img/FreeAgent.jpg";
import surfLogo from "@/assests/img/Surf - Logo.jpg";
import brightPayLogo from "@/assests/img/BrightPay - logo.jpg";
import moneysoftLogo from "@/assests/img/moneysoft - Logo.jpg";
import hubdocLogo from "@/assests/img/hubdoc.png";
import taxfilerLogo from "@/assests/img/taxfiler.jpg";

const tools = [
    { name: "Taxfiler", category: "Tax", image: taxfilerLogo },

    { name: "Iris", category: "Accounts", image: irisLogo },
    { name: "Digita", category: "Accounts", image: digitaLogo },
    { name: "BTC", category: "Tax", image: btcLogo },
    { name: "TaxCalc", category: "Tax", image: taxCalcLogo },
    { name: "Xero", category: "Cloud Accounting", image: xeroLogo },
    { name: "QuickBooks", category: "Cloud Accounting", image: quickbooksLogo },
    { name: "Sage50", category: "Accounts", image: sageLogo },
    { name: "Kashflow", category: "Cloud Accounting", image: kashflowLogo },
    { name: "VT Software", category: "Accounts", image: vtLogo },
    { name: "Dext", category: "Bookkeeping", image: dextLogo },
    { name: "Capium", category: "Cloud Accounting", image: capiumLogo },
    { name: "Auto Entry", category: "Bookkeeping", image: autoEntryLogo },
    { name: "FreeAgent", category: "Cloud Accounting", image: freeAgentLogo },
    { name: "Surf Accounting", category: "Accounts", image: surfLogo },
    { name: "BrightPay", category: "Payroll", image: brightPayLogo },
    { name: "Moneysoft", category: "Payroll", image: moneysoftLogo },
    { name: "Hubdoc", category: "Bookkeeping", image: hubdocLogo },
];

const Tools = () => {
    return (
        <Layout>
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <AnimatedSection className="max-w-3xl">
                        <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
                            Resources
                        </span>
                        <h1 className="heading-xl text-foreground mb-6">
                            Tools & Technology
                        </h1>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed">
                            We leverage industry-leading financial tools to streamline your operations. From cloud-based accounting platforms to precision tax software, our technology stack ensures accuracy, efficiency, and real-time insights for your business.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container-custom">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {tools.map((tool) => (
                            <StaggerItem key={tool.name}>
                                <Card variant="glass" className="p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                    <div className="w-full h-32 mb-4 flex items-center justify-center p-2 bg-background/50 rounded-xl">
                                        <img
                                            src={tool.image || `https://placehold.co/200x80/transparent/000000?text=${encodeURIComponent(tool.name)}`}
                                            alt={`${tool.name} logo`}
                                            className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-foreground text-lg mb-2">{tool.name}</h3>
                                    {/* <span className="text-xs text-muted-foreground uppercase tracking-wider">{tool.category}</span> */}
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </Layout>
    );
};

export default Tools;
