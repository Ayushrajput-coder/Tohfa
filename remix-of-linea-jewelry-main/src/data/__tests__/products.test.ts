import { describe, expect, it } from "vitest";
import { products } from "../products";

describe("official Tohfa catalogue", () => {
  it("lists the approved stationery cake gift first at its starting price", () => {
    expect(products[0]).toMatchObject({
      id: "stationery-cake-gift",
      name: "Stationery Cake Gift",
      displayTitle: "🎂 A Cake Full of Surprises! 🎁",
      category: "Kids & Birthday Gifts",
      price: 1500,
      priceLabel: "Starting at ₹1,500 onwards",
      priceIsStarting: true,
      available: true,
    });

  it("lists the Birthday Surprise Box at its starting price", () => {
  expect(products[1]).toMatchObject({
    id: "birthday-surprise-box",
    name: "Birthday Surprise Box",
    price: 1800,
    priceLabel: "Starting at ₹1,800 onwards",
    priceIsStarting: true,
    available: true,
  });
});  
    
    

  });
});

