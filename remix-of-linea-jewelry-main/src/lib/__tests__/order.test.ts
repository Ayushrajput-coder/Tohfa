import { describe, it, expect } from "vitest";
import { orderMessage, orderTotal } from "../order";

describe("WhatsApp order", () => {
  const lines = [
    { name: "Little Joys Hamper", price: 1499, quantity: 2 },
    { name: "Grand Festive Trunk", price: 4999, quantity: 1 },
  ];
  it("totals price × quantity across the bag", () => {
    expect(orderTotal(lines)).toBe(7997);
  });
  it("lists every item with quantity and the total in rupees", () => {
    const msg = orderMessage(lines);
    expect(msg).toContain("Little Joys Hamper — ₹1,499 × 2 = ₹2,998");
    expect(msg).toContain("Grand Festive Trunk — ₹4,999 × 1 = ₹4,999");
    expect(msg).toContain("Little Joys Hamper — ₹1,499 × 2 = ₹2,998");
    expect(msg).toContain("Estimated Total: ₹7,997");
    expect(msg).toContain("Please confirm product availability and delivery details.");
  });

  it("keeps a starting price clear in the WhatsApp order", () => {
    const msg = orderMessage([
      { name: "Stationery Cake Gift", price: 1500, priceIsStarting: true, quantity: 1 },
    ]);
    expect(msg).toContain("Stationery Cake Gift — Starting at ₹1,500 onwards × 1 = from ₹1,500; final price to be confirmed");
    expect(msg).toContain("Estimated starting total: ₹1,500");
    expect(msg).not.toContain("Estimated Total: ₹1,500");
  });
});
