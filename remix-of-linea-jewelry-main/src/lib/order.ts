import { formatPrice } from "@/data/products";

export interface OrderLine {
  name: string;
  price: number;
  priceIsStarting?: boolean;
  quantity: number;
}

export const orderTotal = (lines: OrderLine[]): number =>
  lines.reduce((sum, l) => sum + l.price * l.quantity, 0);

/** WhatsApp order message listing every bag item and the total. */
export function orderMessage(lines: OrderLine[]): string {
  const items = lines
    .map((line) => {
      const price = line.priceIsStarting
        ? `Starting at ${formatPrice(line.price)} onwards`
        : formatPrice(line.price);
      const subtotal = line.priceIsStarting
        ? `from ${formatPrice(line.price * line.quantity)}; final price to be confirmed`
        : formatPrice(line.price * line.quantity);
      return `${line.name} — ${price} × ${line.quantity} = ${subtotal}`;
    })
    .join("\n");
  const totalLabel = lines.some((line) => line.priceIsStarting)
    ? "Estimated starting total"
    : "Estimated Total";
  return `Hello TOHFA!\n\nI would like to enquire about placing an order.\n\nMy Order:\n${items}\n\n${totalLabel}: ${formatPrice(orderTotal(lines))}\n\nPlease confirm product availability and delivery details.\n\nThank you!`;
}
