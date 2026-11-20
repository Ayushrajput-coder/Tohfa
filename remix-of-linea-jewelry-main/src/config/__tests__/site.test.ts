import { describe, expect, it } from "vitest";
import {
  BRAND,
  INSTAGRAM_URL,
  MAPS_DIRECTIONS_URL,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from "../site";

describe("official Tohfa contact details", () => {
  it("uses the business WhatsApp number and phone number", () => {
    expect(WHATSAPP_NUMBER).toBe("919821410082");
    expect(PHONE_NUMBER).toBe("919821410082");
  });

  it("uses the supplied Instagram profile", () => {
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/tohfa_curatedbyvaani/");
  });

  it("uses the supplied email and complete address", () => {
    expect(BRAND.email).toBe("aaroraa.vaani1104@gmail.com");
    expect(BRAND.address).toBe("Emerald Heights, Sector 88, Greater Faridabad, Haryana – 121002.");
    expect(MAPS_DIRECTIONS_URL).toContain(encodeURIComponent(BRAND.address));
  });
});