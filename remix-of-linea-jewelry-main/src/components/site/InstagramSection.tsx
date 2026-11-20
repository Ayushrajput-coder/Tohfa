import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/config/site";


const InstagramSection = () => {
  return (
    <section className="bg-blush" aria-label="Follow us on Instagram">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.18em] uppercase text-gold mb-5">{INSTAGRAM_HANDLE}</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-foreground mb-5">
            Something New, Every Week!
          </h2>
          <p className="text-foreground/70 font-light leading-relaxed mb-8">
            We bring you fresh finds and thoughtfully curated products every week. Follow us on Instagram to discover our latest arrivals, new collections and special finds.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-cocoa px-7 py-3 text-sm text-foreground transition-colors duration-200 hover:bg-background"
          >
            Follow Us on Instagram
          </a>
          <p className="mt-4 text-sm text-foreground/65">For our latest arrivals and exclusive updates, follow us on Instagram.</p>
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;
