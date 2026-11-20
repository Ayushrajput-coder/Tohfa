import {
  BRAND,
  GENERAL_ENQUIRY_MESSAGE,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  MAPS_DIRECTIONS_URL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  whatsappLink,
} from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Collection", href: "#collection" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-blush border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="font-serif text-3xl text-foreground">{BRAND.name}</p>
          <p className="text-xs uppercase tracking-[0.16em] text-gold mt-1 mb-4">{BRAND.descriptor}</p>
          <p className="text-sm text-foreground/70 font-light leading-relaxed max-w-xs">
            Thoughtfully curated gifts and lifestyle finds to make every moment special.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h3 className="text-xs tracking-[0.25em] uppercase text-foreground/60 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-foreground/75 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase text-foreground/60 mb-4">
            Get in Touch
          </h3>
          <a
            href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm text-white mb-4 transition-opacity duration-200 hover:opacity-90"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <ul className="space-y-2 text-sm text-foreground/75">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="hover:text-foreground transition-colors"
              >
                {BRAND.email}
              </a>
            </li>
            <li><a href={`tel:+${PHONE_NUMBER}`} className="hover:text-foreground transition-colors">{PHONE_DISPLAY}</a></li>
            <li><a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{BRAND.address}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="max-w-7xl mx-auto px-6 py-5 text-xs text-foreground/60 font-light">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
