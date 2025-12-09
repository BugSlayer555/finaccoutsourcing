import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Star, CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Tom Cook",
    role: "Partner, UK Accounting Firm",
    content:
      "Awesome people, very friendly and professional, full of knowledge, fast and always provide quality services.",
    rating: 5,
  },
  {
    name: "Kairen Wolf",
    role: "Director, Financial Services",
    content:
      "I am extremely delighted by their work, found them excellent in their services.",
    rating: 5,
  },
  {
    name: "Wood Joe",
    role: "Managing Partner",
    content:
      "They are genius. Hats off. They save my £1,900 every month on staff and infrastructure.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Trusted by accounting firms across the UK for quality and
            reliability.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all z-10"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all z-10"
            >
              <CaretRight size={20} weight="bold" />
            </button>

            {/* Testimonial Card */}
            <Card variant="glass" className="p-8 md:p-12 text-center">
              <Quotes
                size={48}
                weight="fill"
                className="text-primary/20 mx-auto mb-6"
              />

              <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    weight="fill"
                    className="text-gold"
                  />
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground font-light">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </Card>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
