import { useState } from "react";
import logo from "@/assets/tohfa-logo.png";
import { BRAND, GENERAL_ENQUIRY_MESSAGE, INSTAGRAM_URL, whatsappLink } from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Collection", href: "#collection" },
  { label: "Contact", href: "#contact" },
  { label: "Instagram", href: INSTAGRAM_URL, external: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useCart();

  const whatsappHref = whatsappLink(GENERAL_ENQUIRY_MESSAGE);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 pl-3 pr-6 md:pl-4"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center shrink-0" aria-label={`${BRAND.name} ${BRAND.descriptor}, home`}>
          <img src={logo} alt={`${BRAND.name} – ${BRAND.descriptor}`} className="h-12 md:h-14 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={"external" in link ? "_blank" : undefined}
                rel={"external" in link ? "noopener noreferrer" : undefined}
                className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
        <button
          onClick={() => setOpen(true)}
          aria-label={`Open bag, ${count} items`}
          className="relative p-2"
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-rose text-white text-[10px] flex items-center justify-center px-1">
              {count}
            </span>
          )}
        </button>
        {/* WhatsApp CTA */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Contact on WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-5 relative">
            <span
              className={`absolute left-0 block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "top-2 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute left-0 top-2 block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "top-2 -rotate-45" : "top-3.5"
              }`}
            />
          </div>
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={"external" in link ? "_blank" : undefined}
                  rel={"external" in link ? "noopener noreferrer" : undefined}
                  className="block text-lg font-light text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm text-white"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Contact on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
