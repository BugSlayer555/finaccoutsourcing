import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
  PaperPlaneTilt,
  WhatsappLogo,
} from "@phosphor-icons/react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use local Express server for dev, Netlify function for production
    const isDev = import.meta.env.DEV;
    const endpoint = isDev
      ? "http://localhost:3001/api/send-email"
      : "/.netlify/functions/send-email";

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: (formData.get("firstName") as string) ?? "",
      lastName: (formData.get("lastName") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      company: (formData.get("company") as string) ?? "",
      phone: (formData.get("phone") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
      _honeypot: (formData.get("_honeypot") as string) ?? "",
    };

    // Simple spam guard: abort if honeypot filled
    if (payload._honeypot) {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Request failed with ${res.status}`);
      }

      toast({
        title: "Message sent!",
        description: "We've received your message and sent you a confirmation email.",
      });
      form.reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Message failed",
        description: error.message || "Please try again, or email Info@finaccoutsourcings.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Book a 15-30 min discovery call for a complimentary trial of 8-10 hours
              to test the water and give your firm wings of growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card variant="glass" className="p-8">
                <h2 className="heading-md text-foreground mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Accounting Firm"
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 7011701023"
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  {/* Honeypot field to catch bots */}
                  <Input
                    type="text"
                    name="_honeypot"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <PaperPlaneTilt size={20} weight="bold" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <Card variant="glass" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <EnvelopeSimple size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <a
                        href="mailto:Info@finaccoutsourcings.com"
                        className="text-primary hover:underline"
                      >
                        Info@finaccoutsourcings.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card variant="glass" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                      <a
                        href="tel:+917011701023"
                        className="text-primary hover:underline"
                      >
                        +91 7011701023
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mon-Fri 9:00 AM - 6:00 PM GMT
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <Card variant="glass" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <WhatsappLogo size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp Us</h3>
                      <a
                        href="https://wa.me/917011701023"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        +91 7011701023
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Chat with us instantly
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card variant="glass" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                      <p className="text-muted-foreground">
                        S140, Rajendra Place,
                        <br />
                        Delhi, 110008, India
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <Card variant="glass" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <Card className="bg-foreground text-background p-6">
                  <h3 className="font-semibold mb-4">Free Trial Offer</h3>
                  <p className="text-background/80 font-light mb-4">
                    Book a 15-30 min discovery call for a complimentary trial of
                    8-10 hours job to test the water and give your firm wings of growth
                    and guaranteed benefits!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      No obligation
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      8-10 hours free
                    </span>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
