import heroImage from "@/assets/hero.jpg";
import { BRAND, GENERAL_ENQUIRY_MESSAGE, whatsappLink } from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";

const Hero = () => {
  return (
    <section id="home" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 lg:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div className="fade-up">
          <p className="text-xs tracking-[0.18em] uppercase text-gold mb-5">
            {BRAND.name} · {BRAND.descriptor}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
            हर ख़ास पल के लिए, एक ख़ास तोहफ़ा।
          </h1>
          <p className="text-base md:text-lg text-foreground/75 font-light leading-relaxed mb-8 max-w-md">
            Thoughtfully curated gifts and lifestyle finds, chosen to make every moment memorable.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#collection"
              className="inline-flex items-center rounded-full bg-cocoa px-7 py-3 text-sm text-white transition-all duration-200 hover:opacity-90"
            >
              Explore Our Collection
            </a>
            <a
              href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cocoa/30 bg-white/60 px-7 py-3 text-sm text-foreground transition-all duration-200 hover:bg-white"
            >
              <WhatsAppIcon className="w-4 h-4 text-whatsapp" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="overflow-hidden border border-border">
            <img
              src={heroImage}
              alt="Hands holding a beautifully wrapped Tohfa gift hamper in a sunlit, pastel room"
              width={1632}
              height={1088}
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
