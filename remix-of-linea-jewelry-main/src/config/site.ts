/**
 * TOHFA — central site configuration
 *
 * Everything the client will want to update lives here:
 * the WhatsApp number, phone, Instagram link and brand copy.
 * Official owner-provided brand and contact information.
 */

export const BRAND = {
  name: "तोहफ़ा",
  descriptor: "Curated by Vaani",
  tagline: "Thoughtfully curated gifts and lifestyle finds",
  description:
    "Thoughtfully curated gifts and lifestyle finds, chosen to make every moment memorable.",
  email: "aaroraa.vaani1104@gmail.com",
  address: "Emerald Heights, Sector 88, Greater Faridabad, Haryana – 121002.",
};

/** Official WhatsApp and phone number in international format without punctuation. */
export const WHATSAPP_NUMBER = "919821410082";

export const INSTAGRAM_URL = "https://www.instagram.com/tohfa_curatedbyvaani/";

export const INSTAGRAM_HANDLE = "@tohfa_curatedbyvaani";

export const PHONE_NUMBER = "919821410082";
export const PHONE_DISPLAY = "+91 98214 10082";

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BRAND.address)}`;

/**
 * Builds a WhatsApp click-to-chat URL that works on mobile and desktop.
 * Opens a chat with the given number and a pre-filled message.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Pre-filled general enquiry message. */
export const GENERAL_ENQUIRY_MESSAGE =
  "Hello TOHFA! I'd like to enquire about your curated gifts and lifestyle finds. Please share availability and details. Thank you!";

/** Per-product enquiry message, per the client's brief. */
export function productEnquiryMessage(productName: string): string {
  return `Hi! I'm interested in ${productName}. Could you please share more details?`;
}
