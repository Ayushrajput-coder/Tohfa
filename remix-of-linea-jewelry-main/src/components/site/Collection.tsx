import { products, formatPrice, type Product } from "@/data/products";
import { INSTAGRAM_URL, productEnquiryMessage, whatsappLink } from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart();
  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-soft transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* 1. Fixed aspect ratio so all photos have identical height */}
      <div className="overflow-hidden aspect-[4/5] bg-muted/20">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          width={1086}
          height={1448}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. flex flex-col flex-1 allows text area to fill card height */}
      <div className="p-6 flex flex-col flex-1">
        {product.category && (
          <p className="text-xs uppercase tracking-[0.12em] text-gold mb-2">{product.category}</p>
        )}
        <h3 className="font-serif text-2xl text-foreground mb-1">
          {product.displayTitle ?? product.name}
        </h3>
        {product.displayTitle && (
          <p className="text-sm text-foreground/70 mb-2">{product.name}</p>
        )}
        <p className="text-lg font-medium text-gold mb-3">
          {product.priceLabel ?? formatPrice(product.price)}
        </p>
        <p className="whitespace-pre-line text-sm text-foreground/70 font-light leading-relaxed mb-3">
          {product.description}
        </p>
        <p className="text-sm text-foreground/70 font-light mb-5">
          Customisation available on request.
        </p>

        {/* 3. mt-auto pins buttons to the exact bottom of every card */}
        <div className="mt-auto pt-2">
          <Button
            onClick={() => add(product.id)}
            disabled={!product.available}
            className="w-full rounded-full px-5 py-2.5 text-sm transition-opacity duration-200 hover:opacity-90"
          >
            {product.available ? "Add to Cart" : "Sold Out"}
          </Button>
          <a
            href={whatsappLink(productEnquiryMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-whatsapp" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};


const Collection = () => {
  return (
    <section id="collection" className="bg-blush/40">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.18em] uppercase text-gold mb-5">Our Collection</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-5">
            Our curated gifts
          </h2>
          <p className="text-foreground/70 font-light leading-relaxed">
            See something you love? Add it to your bag or enquire on WhatsApp.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="max-w-xl mx-auto text-center bg-card rounded-2xl shadow-soft px-8 py-14">
            <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Our collection is being updated.
            </p>
            <p className="text-foreground/70 font-light leading-relaxed mb-8">
              Stay connected with us on Instagram for our latest arrivals.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity duration-200 hover:opacity-90"
            >
              Follow Us on Instagram
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collection;
