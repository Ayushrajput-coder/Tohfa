import { useEffect, useState } from "react";
import { GENERAL_ENQUIRY_MESSAGE, whatsappLink } from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Prominent, mobile-friendly floating WhatsApp button.
 * Appears after a slight scroll so the hero CTAs get the first look.
 */
const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-soft transition-all duration-300 hover:scale-105 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloat;
