import { Mail, MapPin, Phone } from "lucide-react";
import {
  BRAND,
  GENERAL_ENQUIRY_MESSAGE,
  INSTAGRAM_URL,
  MAPS_DIRECTIONS_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  whatsappLink,
} from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-rose mb-5">Contact</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-5">
            Looking for Something Special?
          </h2>
          <p className="text-foreground/70 font-light leading-relaxed">
            Have something specific in mind? Get in touch with us for product enquiries, availability and customisation. We'd love to help you find the perfect gift.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border p-8 md:p-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm text-white transition-opacity duration-200 hover:opacity-90"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/30 px-7 py-3.5 text-sm text-foreground transition-colors duration-200 hover:bg-blush"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              Call Us
            </a>
          </div>

          <ul className="space-y-4 text-sm text-foreground/75 font-light">
            <li className="flex items-center justify-center gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
              <a href={`tel:+${PHONE_NUMBER}`} className="hover:text-foreground transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
              <a
                href={`mailto:${BRAND.email}`}
                className="hover:text-foreground transition-colors"
              >
                {BRAND.email}
              </a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
              <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{BRAND.address} · Get directions</a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-gold shrink-0"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Follow us on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
