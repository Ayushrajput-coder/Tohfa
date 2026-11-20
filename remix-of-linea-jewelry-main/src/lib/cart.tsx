import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "@/data/products";

interface CartContextValue {
  items: { product: Product; quantity: number }[];
  count: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "tohfa-cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  });
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quantities));
  }, [quantities]);

  const value = useMemo<CartContextValue>(() => {
    // Only real, available catalogue products can be in the bag
    const items = products
      .filter((p) => p.available && quantities[p.id] > 0)
      .map((p) => ({ product: p, quantity: quantities[p.id] }));
    return {
      items,
      count: items.reduce((s, i) => s + i.quantity, 0),
      isOpen,
      setOpen,
      add: (id) => {
        setQuantities((q) => ({ ...q, [id]: (q[id] || 0) + 1 }));
        setOpen(true);
      },
      setQuantity: (id, quantity) =>
        setQuantities((q) => {
          const next = { ...q };
          if (quantity <= 0) delete next[id];
          else next[id] = quantity;
          return next;
        }),
      clear: () => setQuantities({}),
    };
  }, [quantities, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
