import { Link } from "react-router-dom";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Logo from "../../assests/img/FinaccLogo.png";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Security", href: "/security" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Year End Accounts", href: "/services" },
  { name: "Bookkeeping", href: "/services" },
  { name: "Management Accounts", href: "/services" },
  { name: "Corporate Tax Returns", href: "/services" },
  { name: "VAT Computation", href: "/services" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src={Logo}
                alt="FinAcc Outsourcing"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">
                Fin<span className="text-primary">Acc</span>
              </span>
            </Link>
            <p className="text-background/70 font-light leading-relaxed mb-6">
              An extension of your office. Expert outsourcing accounting
              services for UK accounting firms.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <LinkedinLogo size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <TwitterLogo size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-background/70 hover:text-primary transition-colors font-light"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <EnvelopeSimple
                  size={20}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <a
                  href="mailto:Info@finaccoutsourcings.com"
                  className="text-background/70 hover:text-primary transition-colors font-light"
                >
                  Info@finaccoutsourcings.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <a
                  href="tel:+917011701023"
                  className="text-background/70 hover:text-primary transition-colors font-light"
                >
                  +91 7011701023
                </a>
              </li>
              <li className="flex items-start gap-3">
                <WhatsappLogo
                  size={20}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <a
                  href="https://wa.me/917011701023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors font-light"
                >
                  +91 7011701023
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span className="text-background/70 font-light">
                  S140, Rajendra Place,
                  <br />
                  Delhi, 110008
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm font-light">
              © {new Date().getFullYear()} TaxTraid Consultants LLP (T.A Finacc OutSourcings
              )            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-background/50 text-sm hover:text-background transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/50 text-sm hover:text-background transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
