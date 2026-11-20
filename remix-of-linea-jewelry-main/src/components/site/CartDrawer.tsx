import { Minus, Plus, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/products";
import { orderMessage, orderTotal } from "@/lib/order";
import { whatsappLink } from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";

const CartDrawer = () => {
  const { items, isOpen, setOpen, setQuantity } = useCart();
  const lines = items.map((i) => ({
    name: i.product.name,
    price: i.product.price,
    priceIsStarting: i.product.priceIsStarting,
    quantity: i.quantity,
  }));
  const hasStartingPrice = lines.some((line) => line.priceIsStarting);

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="bg-background flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-3xl font-normal text-foreground">Your Bag</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <p className="text-sm text-foreground/70 font-light mt-6">
            Your bag is empty. Add a hamper you love and send us your order on WhatsApp.
          </p>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto mt-6 space-y-5">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4">
                  <img src={product.image} alt={product.alt} className="w-20 h-24 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <p className="font-serif text-lg leading-tight text-foreground">{product.name}</p>
                      <button
                        onClick={() => setQuantity(product.id, 0)}
                        aria-label={`Remove ${product.name}`}
                        className="text-foreground/50 hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gold mt-1">
                      {product.priceLabel ?? `${formatPrice(product.price)} each`}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => setQuantity(product.id, quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(product.id, quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-foreground/75">
                      {product.priceIsStarting ? "Starting from" : "Subtotal"}: {formatPrice(product.price * quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-border pt-5 space-y-4">
              <div className="flex justify-between text-foreground">
                <span>{hasStartingPrice ? "Starting total" : "Total"}</span>
                <span className="font-medium">{formatPrice(orderTotal(lines))}</span>
              </div>
              <a
                href={whatsappLink(orderMessage(lines))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm text-white transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Send Order on WhatsApp
              </a>
              <p className="text-xs text-center text-foreground/60 font-light">
                No online payment — we'll confirm your order and delivery on WhatsApp.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
