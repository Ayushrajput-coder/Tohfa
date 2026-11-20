/**
 * Central product catalogue. Starts EMPTY — add the owner's real products here.
 * Each entry: unique id, real photo (import from src/assets), name, INR price,
 * description and availability. The empty-collection message shows while this list is empty.
 *
 * Example:
 *   import roseBoxImg from "@/assets/rose-box.jpg";
 *   { id: "rose-box", name: "...", price: 1999, description: "...", image: roseBoxImg, alt: "...", available: true },
 */
export interface Product {
  id: string;
  name: string;
  displayTitle?: string;
  category?: string;
  price: number; // in ₹
  priceLabel?: string;
  priceIsStarting?: boolean;
  description: string;
  image: string;
  alt: string;
  available: boolean; // false shows "Sold out" and disables Add to Cart
}

// Only import the first product's existing asset

export const products: Product[] = [
  {
    id: "stationery-cake-gift",
    name: "Stationery Cake Gift",
    displayTitle: "🎂 A Cake Full of Surprises! 🎁",
    category: "Kids & Birthday Gifts",
    price: 1500,
    priceLabel: "Starting at ₹1,500 onwards",
    priceIsStarting: true,
    description:
      "Who says cakes have to be edible? Make birthdays extra special with our creatively curated Stationery Cake Gift! 💝\n\nA fun-filled surprise designed especially for little ones, packed with:\n\n🖍️ Crayons & sketch pens\n✏️ Exciting stationery essentials\n🍫 Delicious chocolates\n🎨 Creative goodies for endless fun\n\nA perfect blend of creativity, sweetness and thoughtful gifting — because the best presents are the ones that bring a smile! ❤️\n\n✨ Customised with love by तोहफा – Curated by Vaani",
    image: "/stationery-cake-gift.jpeg",
    alt: "Birthday stationery cake gift filled with stationery and chocolates",
    available: true,
  },
  {
    id: "birthday-surprise-box",
    name: "Birthday Surprise Box",
    displayTitle: "🎀 A Little Box of Happiness! 💝",
    category: "Birthday Gifts",
    price: 1800,
    priceLabel: "Starting at ₹1,800 onwards",
    priceIsStarting: true,
    description:
      "Because birthdays deserve a little extra pampering, surprises and everything they love!\n\nA thoughtfully curated Birthday Surprise Box filled with:\n\n✨ Pretty jewellery\n🧴 Skincare favourites\n💕 Girly essentials & little treats\n🍫 Their favourite bites\n\nEvery box is customised with love, keeping their personality, preferences and favourite things in mind.\n\nBecause the best gifts are the ones that say, “I know what makes you smile!” ❤️\n\nDM तोहफा – Curated by Vaani to customise a surprise for your loved ones — His or Hers! 🎁",
    image: "/birthday-surprise-box.jpeg",
    alt: "Blue customised birthday surprise gift box filled with jewellery, skincare and treats",
    available: true,
  },
  {
    id: "bhaiya-bhabhi-gift-hamper",
    name: "Bhaiya & Bhabhi Gift Hamper",
    displayTitle: "🎁 A Special Tohfa for Bhaiya & Bhabhi! ✨",
    category: "Couple & Family Gifts",
    price: 1500,
    priceLabel: "Starting at ₹1,500 onwards",
    priceIsStarting: true,
    description:
      "Some bonds deserve more than ordinary gifts.\n\nFrom personalised goodies to handpicked treats, every hamper is customised with love, keeping their choices and preferences in mind. ✨\n\nBecause they deserve a little extra pampering too! 💕\n\n✨ Customised with love by तोहफा – Curated by Vaani",
    image: "/bhaiya-bhabhi-gift-hamper.jpeg",
    alt: "Customised Bhaiya and Bhabhi special gift hamper",
    available: true,
  },
  {
    id: "dry-fruit-bouquet",
    name: "Dry Fruit Bouquet",
    displayTitle: "💐 Not Your Ordinary Bouquet… It's Full of Goodness! ✨",
    category: "Festive, Wedding & Celebration Gifts",
    price: 2500,
    priceLabel: "Starting at ₹2,500 onwards",
    priceIsStarting: true,
    description:
      "Not your ordinary bouquet… it's a bouquet full of goodness! 💐✨\n\nIntroducing our Dry Fruit Bouquet – a beautiful blend of elegance, thoughtful gifting and healthy indulgence.\n\nPerfect for festive celebrations, birthdays, anniversaries, weddings, shagun and every special occasion.\n\nBecause some gifts are too beautiful to just unwrap! ❤️\n\n✨ Customised with love, curated just for your occasion.",
    image: "/dry-fruit-bouquet.jpeg",
    alt: "Elegantly curated Dry Fruit Bouquet gift for festive celebrations and weddings",
    available: true,
  },
  {
    id: "little-sister-rakhi-hamper",
    name: "Little Sister Rakhi Hamper",
    displayTitle: "🎀 Because Little Sisters Deserve Extra Pampering! 💗",
    category: "Festive & Rakhi Gifts",
    price: 1800,
    priceLabel: "Starting at ₹1,800 onwards",
    priceIsStarting: true,
    description:
      "Because little sisters deserve a little extra pampering! 🎀💗\n\nA specially curated Rakhi Hamper filled with all things girly – beauty essentials, cute accessories, skincare goodies and her favourite little treats.\n\nA little box of love, pampering and surprises for your forever favourite girl! 💕\n\n✨ Customise it with her favourite things and make this Rakhi extra special.",
    image: "/little-sister-rakhi-hamper.jpeg",
    alt: "Specially curated pink Rakhi gift hamper filled with beauty essentials, skincare goodies and treats for little sisters",
    available: true,
  },
  {
    id: "dry-fruit-tray-bow-mug",
    name: "Dry Fruit Tray with 3D Bow Mug",
    displayTitle: "🎀 Not Your Usual Dry Fruit Tray! ✨",
    category: "Festive & Celebration Gifts",
    price: 1500,
    priceLabel: "Starting at ₹1,500 onwards",
    priceIsStarting: true,
    description:
      "Not your usual dry fruit tray! 🎀✨\n\nA little twist to traditional gifting with our beautifully curated dry fruit tray, paired with an adorable 3D Bow Mug.\n\nMake it yours! Choose your favourites:\n🥜 Assorted dry fruits\n❤️ Anardana shots\n🍫 Chocolates\n🍪 Cookies\n\nA thoughtful blend of tradition, sweetness and a touch of cuteness!",
    image: "/dry-fruit-tray-bow-mug.jpeg",
    alt: "Beautifully curated dry fruit tray paired with an adorable 3D bow mug",
    available: true,
  },
  {
    id: "customised-sagan-envelopes",
    name: "Customised Sagan Envelopes",
    displayTitle: "✨ Sagan, But Make It Stylish! 💌",
    category: "Wedding & Shagun Celebrations",
    price: 700,
    priceLabel: "Sagan Amount + ₹700 onwards",
    priceIsStarting: true,
    description:
      "Sagan, but make it stylish! ✨💌\n\nGive your traditional shagun a unique makeover with our beautifully customised Sagan Envelopes.\n\nBecause even the smallest details deserve to be special! ❤️\n\n🎁 Get your Sagan Envelope customised to match your occasion, theme and personal style.\n\nPerfect for weddings, engagements, shagun ceremonies and special celebrations.",
    image: "/customised-sagan-envelopes.jpeg",
    alt: "Beautifully customised designer Sagan envelopes for weddings and celebrations",
    available: true,
  },
  {
    id: "trending-milni-malas",
    name: "Trending Milni Malas",
    displayTitle: "💐 The Baraat Deserves a Grand Welcome! ✨",
    category: "Wedding & Milni Ceremonies",
    price: 49,
    priceLabel: "Starting at ₹49 onwards",
    priceIsStarting: true,
    description:
      "The baraat deserves a grand welcome! 💐✨\n\nMake your wedding welcome extra special with our Trending Milni Malas – beautifully curated to add charm, colour and elegance to your milni ceremony.\n\nBecause welcoming your baraatis should be just as memorable as the wedding itself! ❤️\n\n🎀 Customised as per your wedding theme, colours and preferences.",
    image: "/trending-milni-malas.jpeg",
    alt: "Trending elegant Milni Malas for welcoming wedding baraatis",
    available: true,
  },
  {
    id: "dry-fruit-shagun-trays",
    name: "Dry Fruit Shagun Trays",
    displayTitle: "✨ A Beautiful Way to Make Every Shagun More Special! ❤️",
    category: "Wedding & Shagun Celebrations",
    price: 1800,
    priceLabel: "Starting at ₹1,800 onwards",
    priceIsStarting: true,
    description:
      "A beautiful way to make every shagun more special! ✨❤️\n\nBecause traditional gifting deserves a touch of elegance.\n\nIntroducing our thoughtfully curated Dry Fruit Shagun Trays – perfect for weddings, engagements, roka ceremonies and festive celebrations.\n\n🎀 Elegant presentation\n🥜 Premium dry fruit assortments\n💝 Customised as per your occasion and preferences\n\nMake your shagun memorable with something beautifully different!",
    image: "/dry-fruit-shagun-trays.jpeg",
    alt: "Thoughtfully curated dry fruit shagun trays for weddings and ceremonies",
    available: true,
  },

];

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

