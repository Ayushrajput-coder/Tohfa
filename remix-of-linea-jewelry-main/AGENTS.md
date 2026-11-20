# AGENTS.md
- Single-page showcase: sections live in src/components/site and are composed in src/pages/Index.tsx — keeps the site simple with anchor navigation.
- All contact details (WhatsApp, phone, Instagram, brand copy) come from src/config/site.ts — one place to update.
- Product catalogue is static data in src/data/products.ts — products are updated manually, no admin.
- Product entries may carry explicit display titles and starting-price semantics so variable prices remain clear in cart and WhatsApp orders.
- Cart is client-side state (src/lib/cart.tsx, saved in localStorage) and checkout is a WhatsApp message built in src/lib/order.ts — no orders stored server-side.
- Keep all brand identity, contact, and social links in src/config/site.ts so site sections stay consistent.
