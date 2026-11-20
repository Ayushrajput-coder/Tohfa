import { Gift, HeartHandshake, CalendarHeart } from "lucide-react";

const highlights = [
  {
    icon: Gift,
    title: "Thoughtfully Selected Products",
    text: "Every item in a hamper is chosen by hand — no filler, only things we'd love to receive ourselves.",
    bg: "bg-blush",
    iconColor: "text-rose",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Customer Assistance",
    text: "Chat with us on WhatsApp and we'll help you pick, personalise and plan the perfect gift.",
    bg: "bg-sage",
    iconColor: "text-foreground",
  },
  {
    icon: CalendarHeart,
    title: "New Arrivals Every Week",
    text: "Fresh hampers land every single week — there's always something new to discover.",
    bg: "bg-lavender",
    iconColor: "text-rose",
  },
];

const Highlights = () => {
  return (
    <section className="bg-background" aria-label="Why shop with us">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid sm:grid-cols-3 gap-8">
          {highlights.map(({ icon: Icon, title, text, bg, iconColor }) => (
            <div
              key={title}
              className={`${bg} rounded-3xl p-8 text-center shadow-soft`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 mb-5">
                <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{title}</h3>
              <p className="text-sm text-foreground/70 font-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
