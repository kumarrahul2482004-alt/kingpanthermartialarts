export type Product = {
  slug: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  fabric: string;
  color: string;
  image: string;
  collection: string;
  badge?: string;
  limitedStock?: boolean;
  isBestseller?: boolean;
  description: string;
  highlights: string[];
  imagePosition?: string;
};

export type SareeCollection = {
  name: string;
  description: string;
  href: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "rani-royal-zari-saree",
    name: "Rani Royal Zari Saree",
    price: 4890,
    originalPrice: 6490,
    rating: 4.9,
    reviews: 218,
    fabric: "Pure silk blend",
    color: "Royal magenta",
    image: "/images/products/rani-royal-zari.jpg",
    collection: "Wedding Sarees",
    badge: "Bestseller",
    limitedStock: true,
    isBestseller: true,
    imagePosition: "center 38%",
    description:
      "A regal silk-blend saree with luminous zari borders, tailored for wedding functions, receptions, and festive evenings.",
    highlights: ["Statement zari pallu", "Blouse piece included", "Gift-ready luxury packaging"],
  },
  {
    slug: "gulmohar-kundan-weave",
    name: "Gulmohar Kundan Weave",
    price: 4290,
    originalPrice: 5690,
    rating: 4.8,
    reviews: 174,
    fabric: "Banarasi tissue silk",
    color: "Rose gold",
    image: "/images/products/gulmohar-kundan-weave.jpg",
    collection: "Wedding Sarees",
    badge: "Limited",
    limitedStock: true,
    isBestseller: true,
    imagePosition: "center 42%",
    description:
      "A wedding-edit drape with a soft sheen and refined floral motifs that photograph beautifully under warm lighting.",
    highlights: ["Lightweight festive drape", "Hand-finished edging", "Ideal for sangeet and engagement looks"],
  },
  {
    slug: "meher-festive-ombre",
    name: "Meher Festive Ombre",
    price: 3290,
    originalPrice: 4390,
    rating: 4.7,
    reviews: 96,
    fabric: "Organza silk",
    color: "Blush to orchid",
    image: "/images/products/meher-festive-ombre.jpg",
    collection: "Festive Sarees",
    badge: "Festive Sale",
    isBestseller: true,
    imagePosition: "center 44%",
    description:
      "A graceful ombre saree made for festive dinners, pujas, and elegant celebration dressing with minimal effort.",
    highlights: ["Feather-light organza feel", "Subtle sequined border", "Easy drape silhouette"],
  },
  {
    slug: "noor-ivory-handloom",
    name: "Noor Ivory Handloom",
    price: 3590,
    originalPrice: 4690,
    rating: 4.8,
    reviews: 121,
    fabric: "Cotton silk",
    color: "Ivory gold",
    image: "/images/products/noor-ivory-handloom.jpg",
    collection: "Daily Wear Elegant Sarees",
    imagePosition: "center 46%",
    description:
      "Elegant enough for intimate events, breathable enough for all-day comfort, with a refined handloom-inspired finish.",
    highlights: ["Breathable premium weave", "Minimal gold border", "Easy care fabric blend"],
  },
  {
    slug: "sitara-midnight-bloom",
    name: "Sitara Midnight Bloom",
    price: 3990,
    originalPrice: 5290,
    rating: 4.9,
    reviews: 143,
    fabric: "Soft georgette",
    color: "Midnight plum",
    image: "/images/products/sitara-midnight-bloom.jpg",
    collection: "Festive Sarees",
    badge: "New Arrival",
    isBestseller: true,
    imagePosition: "center 43%",
    description:
      "A fluid georgette saree with floral shimmer accents that makes evening festive dressing feel effortlessly polished.",
    highlights: ["Fluid party drape", "Prettified shimmer floral pattern", "Comfortable lightweight fall"],
  },
  {
    slug: "aarohi-daylight-grace",
    name: "Aarohi Daylight Grace",
    price: 2790,
    originalPrice: 3590,
    rating: 4.6,
    reviews: 88,
    fabric: "Linen silk",
    color: "Pastel peach",
    image: "/images/products/aarohi-daylight-grace.jpg",
    collection: "Daily Wear Elegant Sarees",
    imagePosition: "center 48%",
    description:
      "A polished daywear saree that feels premium without being precious, perfect for brunches, work functions, and gifting.",
    highlights: ["Day-to-evening versatility", "Soft-touch linen silk", "Elegant understated palette"],
  },
  {
    slug: "vasundhara-bridal-ruby",
    name: "Vasundhara Bridal Ruby",
    price: 5290,
    originalPrice: 6990,
    rating: 4.9,
    reviews: 201,
    fabric: "Kanjivaram silk blend",
    color: "Ruby red",
    image: "/images/products/vasundhara-bridal-ruby.jpg",
    collection: "Wedding Sarees",
    badge: "Bridal Favorite",
    limitedStock: true,
    isBestseller: true,
    imagePosition: "center 40%",
    description:
      "A rich ruby drape with temple-inspired borders created for bridal ceremonies, family functions, and heirloom-style dressing.",
    highlights: ["Traditional zari border", "Luxurious ceremonial drape", "Ideal for wedding functions"],
  },
  {
    slug: "tara-moonstone-tissue",
    name: "Tara Moonstone Tissue",
    price: 4490,
    originalPrice: 5890,
    rating: 4.8,
    reviews: 133,
    fabric: "Tissue silk",
    color: "Silver champagne",
    image: "/images/products/tara-moonstone-tissue.jpg",
    collection: "Wedding Sarees",
    badge: "Reception Edit",
    isBestseller: true,
    imagePosition: "center 45%",
    description:
      "A luminous tissue silk saree with a soft reflective finish that elevates receptions, engagement evenings, and cocktail celebrations.",
    highlights: ["Soft reflective sheen", "Elegant lightweight structure", "Perfect for evening events"],
  },
  {
    slug: "ziya-marigold-glow",
    name: "Ziya Marigold Glow",
    price: 3190,
    originalPrice: 4190,
    rating: 4.7,
    reviews: 104,
    fabric: "Chiffon silk",
    color: "Marigold gold",
    image: "/images/products/ziya-marigold-glow.jpg",
    collection: "Festive Sarees",
    badge: "Festive Pick",
    isBestseller: true,
    imagePosition: "center 47%",
    description:
      "A cheerful festive saree with fluid movement and warm gold tones designed for pujas, Diwali gatherings, and celebration gifting.",
    highlights: ["Fluid festive drape", "Warm celebratory tone", "Easy to style with statement jewelry"],
  },
  {
    slug: "iraan-lotus-mist",
    name: "Iraan Lotus Mist",
    price: 3490,
    originalPrice: 4590,
    rating: 4.8,
    reviews: 112,
    fabric: "Organza tissue",
    color: "Lotus pink",
    image: "/images/products/iraan-lotus-mist.jpg",
    collection: "Festive Sarees",
    badge: "New Edit",
    isBestseller: true,
    imagePosition: "center 46%",
    description:
      "A dreamy lotus-pink organza saree with airy volume and delicate shine for intimate festive evenings and elegant celebration looks.",
    highlights: ["Airy organza structure", "Soft festive shine", "Beautiful for day-to-night celebrations"],
  },
  {
    slug: "saanvi-heritage-olive",
    name: "Saanvi Heritage Olive",
    price: 2890,
    originalPrice: 3790,
    rating: 4.6,
    reviews: 91,
    fabric: "Mercerized cotton silk",
    color: "Heritage olive",
    image: "/images/products/saanvi-heritage-olive.jpg",
    collection: "Daily Wear Elegant Sarees",
    isBestseller: true,
    imagePosition: "center 50%",
    description:
      "An understated premium saree for office celebrations, lunches, and graceful everyday styling with a sophisticated muted palette.",
    highlights: ["Soft all-day comfort", "Refined muted tone", "Perfect for polished daytime wear"],
  },
  {
    slug: "mira-pearl-rose",
    name: "Mira Pearl Rose",
    price: 2990,
    originalPrice: 3890,
    rating: 4.7,
    reviews: 117,
    fabric: "Linen organza blend",
    color: "Pearl rose",
    image: "/images/products/mira-pearl-rose.jpg",
    collection: "Daily Wear Elegant Sarees",
    badge: "Staff Pick",
    isBestseller: true,
    imagePosition: "center 46%",
    description:
      "A soft pearl-rose drape made for elegant brunches, intimate gatherings, and shoppers who want premium daywear with gentle femininity.",
    highlights: ["Elegant pastel palette", "Lightweight premium blend", "Versatile for gifting and events"],
  },
  {
    slug: "nayra-sunlit-brocade",
    name: "Nayra Sunlit Brocade",
    price: 3890,
    originalPrice: 4990,
    rating: 4.8,
    reviews: 126,
    fabric: "Brocade silk blend",
    color: "Sunlit saffron",
    image: "/images/products/nayra-sunlit-brocade.jpg",
    collection: "Festive Sarees",
    badge: "Occasion Favorite",
    isBestseller: true,
    imagePosition: "center 45%",
    description:
      "A bright saffron saree with festive brocade character, tailored for celebratory evenings, haldi looks, and statement festive styling.",
    highlights: ["Festive brocade texture", "Rich celebratory tone", "Beautiful for haldi and family events"],
  },
  {
    slug: "kaashvi-evening-ember",
    name: "Kaashvi Evening Ember",
    price: 4690,
    originalPrice: 6190,
    rating: 4.9,
    reviews: 149,
    fabric: "Soft silk tissue",
    color: "Burnt amber",
    image: "/images/products/kaashvi-evening-ember.jpg",
    collection: "Wedding Sarees",
    badge: "Reception Luxe",
    limitedStock: true,
    isBestseller: true,
    imagePosition: "center 42%",
    description:
      "A glowing evening saree with a luxurious silk-tissue finish designed for receptions, engagement parties, and upscale celebration dressing.",
    highlights: ["Light-catching tissue sheen", "Elegant reception styling", "Premium fall and structure"],
  },
  {
    slug: "riti-heirloom-beige",
    name: "Riti Heirloom Beige",
    price: 3090,
    originalPrice: 3990,
    rating: 4.7,
    reviews: 93,
    fabric: "Cotton zari blend",
    color: "Heirloom beige",
    image: "/images/products/riti-heirloom-beige.jpg",
    collection: "Daily Wear Elegant Sarees",
    badge: "Everyday Luxe",
    isBestseller: true,
    imagePosition: "center 48%",
    description:
      "A soft beige saree with understated zari accents for intimate poojas, office gatherings, and elevated everyday traditional dressing.",
    highlights: ["Subtle zari detail", "Comfortable premium blend", "Effortless everyday elegance"],
  },
  {
    slug: "devyani-banarasi-noor",
    name: "Devyani Banarasi Noor",
    price: 5190,
    originalPrice: 6790,
    rating: 4.9,
    reviews: 188,
    fabric: "Banarasi-inspired weave",
    color: "Rich festive tones",
    image: "/images/products/devyani-banarasi-noor.jpg",
    collection: "Banarasi Sarees",
    badge: "Banarasi Edit",
    isBestseller: true,
    imagePosition: "center 43%",
    description:
      "A Banarasi-inspired occasion saree with a rich festive look, elegant sheen, and statement styling suited to weddings and celebrations.",
    highlights: ["Banarasi-inspired richness", "Occasion-ready finish", "Elegant festive drape"],
  },
  {
    slug: "shloka-banarasi-rani",
    name: "Shloka Banarasi Rani",
    price: 4990,
    originalPrice: 6390,
    rating: 4.8,
    reviews: 162,
    fabric: "Banarasi-inspired silk blend",
    color: "Vibrant jewel tone",
    image: "/images/products/shloka-banarasi-rani.jpg",
    collection: "Banarasi Sarees",
    badge: "Wedding Pick",
    imagePosition: "center 40%",
    description:
      "A vibrant Banarasi-inspired saree that brings traditional richness and festive energy to engagement looks, wedding events, and celebration dressing.",
    highlights: ["Traditional festive appeal", "Rich woven character", "Polished celebration styling"],
  },
  {
    slug: "ruhaani-kashmiri-sozni",
    name: "Ruhaani Kashmiri Sozni",
    price: 4590,
    originalPrice: 5990,
    rating: 4.8,
    reviews: 119,
    fabric: "Soft embroidered blend",
    color: "Muted romantic tone",
    image: "/images/products/ruhaani-kashmiri-sozni.jpg",
    collection: "Kashmiri Sarees",
    badge: "Artisanal Edit",
    isBestseller: true,
    imagePosition: "center 47%",
    description:
      "A Kashmiri-inspired saree with a softer premium mood, refined detailing, and elegant styling for intimate events, festive wear, and gifting.",
    highlights: ["Artisanal-inspired detailing", "Soft premium styling", "Elegant gift-worthy look"],
  },
  {
    slug: "advika-kanjivaram-gold",
    name: "Advika Kanjivaram Gold",
    price: 5690,
    originalPrice: 7290,
    rating: 4.9,
    reviews: 177,
    fabric: "Kanjivaram-inspired silk blend",
    color: "Ceremonial warm tones",
    image: "/images/products/advika-kanjivaram-gold.jpg",
    collection: "Kanjivaram Sarees",
    badge: "Temple Classic",
    limitedStock: true,
    isBestseller: true,
    imagePosition: "center 41%",
    description:
      "A Kanjivaram-inspired ceremonial saree with a grand traditional mood, ideal for bridal functions, family occasions, and classic festive styling.",
    highlights: ["Traditional ceremonial appeal", "Structured festive drape", "Bridal-ready presence"],
  },
  {
    slug: "pankhuri-organza-bloom",
    name: "Pankhuri Organza Bloom",
    price: 3390,
    originalPrice: 4490,
    rating: 4.7,
    reviews: 108,
    fabric: "Organza-inspired lightweight drape",
    color: "Soft pastel tones",
    image: "/images/products/pankhuri-organza-bloom.jpg",
    collection: "Organza Sarees",
    badge: "Lightweight Luxe",
    isBestseller: true,
    imagePosition: "center 46%",
    description:
      "A lightweight organza-inspired saree with airy movement and delicate styling, perfect for daytime occasions, festive brunches, and modern feminine looks.",
    highlights: ["Lightweight airy feel", "Soft celebratory styling", "Ideal for day events"],
  },
  {
    slug: "vedika-linen-mist",
    name: "Vedika Linen Mist",
    price: 2890,
    originalPrice: 3790,
    rating: 4.6,
    reviews: 97,
    fabric: "Linen-inspired comfort blend",
    color: "Subtle everyday tone",
    image: "/images/products/vedika-linen-mist.jpg",
    collection: "Linen Sarees",
    badge: "Everyday Essential",
    imagePosition: "center 49%",
    description:
      "A linen-inspired saree with breathable comfort and understated sophistication, suited to office occasions, lunches, and elevated everyday wear.",
    highlights: ["Comfort-first drape", "Minimal polished styling", "Easy all-day wear"],
  },
];

export const siteContent = {
  collections: [
    {
      name: "Wedding Sarees",
      description: "Rich zari work, statement drapes, and bridal-event styles that feel luxurious in person and on camera.",
      href: "/shop#wedding-sarees",
      image: "/images/collections/wedding-collection.jpg",
    },
    {
      name: "Festive Sarees",
      description: "Celebration-ready silhouettes with flattering movement, luminous color stories, and easy elegance.",
      href: "/shop#festive-sarees",
      image: "/images/collections/festive-collection.jpg",
    },
    {
      name: "Daily Wear Elegant Sarees",
      description: "Sophisticated premium staples designed for intimate occasions, gifting, and elevated everyday dressing.",
      href: "/shop#daily-wear-elegant-sarees",
      image: "/images/collections/daily-collection.jpg",
    },
    {
      name: "Banarasi Sarees",
      description: "Rich Banarasi weaves with ornate motifs, regal shine, and celebration-ready elegance for heirloom-inspired dressing.",
      href: "/shop#banarasi-sarees",
      image: "/images/collections/banarasi-collection.jpg",
    },
    {
      name: "Kashmiri Sarees",
      description: "Artisanal sarees inspired by Kashmiri detailing, soft palettes, and elegant embroidered sophistication.",
      href: "/shop#kashmiri-sarees",
      image: "/images/collections/kashmiri-collection.jpg",
    },
    {
      name: "Kanjivaram Sarees",
      description: "Temple-border classics and grand silk drapes designed for traditional ceremonies and bridal moments.",
      href: "/shop#kanjivaram-sarees",
      image: "/images/collections/kanjivaram-collection.jpg",
    },
    {
      name: "Organza Sarees",
      description: "Sheer, airy, and modern sarees with graceful volume for festive brunches, evening events, and light luxury dressing.",
      href: "/shop#organza-sarees",
      image: "/images/collections/organza-collection.jpg",
    },
    {
      name: "Linen Sarees",
      description: "Breathable premium linen drapes that bring understated polish to office functions and elevated everyday wear.",
      href: "/shop#linen-sarees",
      image: "/images/collections/linen-collection.jpg",
    },
  ] as SareeCollection[],
  stats: [
    { value: "10,000+", label: "Happy Customers" },
    { value: "4.8 Star", label: "Average Rating" },
    { value: "48 hrs", label: "Dispatch for Ready Styles" },
    { value: "COD", label: "Available Across India" },
  ],
  benefits: [
    {
      title: "Premium Fabric Quality",
      description: "Soft-touch weaves, rich fall, and occasion-first fabric selection that elevates every drape.",
    },
    {
      title: "Handpicked Designs",
      description: "Curated collections that balance traditional richness with modern wearability.",
    },
    {
      title: "Easy Returns",
      description: "Straightforward return support for eligible orders so shoppers buy with confidence.",
    },
    {
      title: "Fast Delivery",
      description: "Quick dispatch and reliable tracking updates keep event shopping stress-free.",
    },
  ],
};

export const testimonials = [
  {
    name: "Priyanka S.",
    location: "Mumbai",
    rating: 5,
    quote:
      "The saree looked more premium than the photos. The packaging, fall, and zari finish made it feel wedding-ready instantly.",
  },
  {
    name: "Nivedita R.",
    location: "Bengaluru",
    rating: 5,
    quote:
      "I ordered for a festive family event and got compliments all evening. Fast delivery and the fabric felt genuinely luxe.",
  },
  {
    name: "Aarushi M.",
    location: "Delhi",
    rating: 5,
    quote:
      "Finally an online saree order that matched expectations. The color, craftsmanship, and fit of the blouse piece were excellent.",
  },
];

export const homeFaqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most ready-to-ship orders are dispatched within 48 hours and typically arrive within 3 to 7 business days depending on location.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Eligible products can be returned within 7 days of delivery if unused and in original packaging. Occasion-specific custom pieces are final sale.",
  },
  {
    question: "How do I know the fabric details?",
    answer:
      "Every product page clearly lists the fabric composition, texture notes, and styling highlights so you can shop with confidence.",
  },
  {
    question: "Which payment methods are available?",
    answer:
      "We accept major cards, UPI, net banking, wallets, and cash on delivery for eligible locations across India.",
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function slugifyCollection(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function getProductMeta(product: Product) {
  const drapeFeel = product.fabric.toLowerCase().includes("organza")
    ? "Light and airy"
    : product.fabric.toLowerCase().includes("linen")
      ? "Structured and breathable"
      : product.fabric.toLowerCase().includes("tissue")
        ? "Soft sheen and fluid fall"
        : product.fabric.toLowerCase().includes("cotton")
          ? "Comfortable all-day drape"
          : "Rich premium drape";

  const occasion = product.collection === "Wedding Sarees"
    ? "Wedding and reception styling"
    : product.collection === "Festive Sarees"
      ? "Festivals and celebration evenings"
      : product.collection === "Daily Wear Elegant Sarees"
        ? "Elegant daywear and small occasions"
        : `${product.collection.replace(" Sarees", "")} special occasions`;

  return {
    drapeFeel,
    occasion,
    blouse: "Unstitched blouse piece included",
    dispatch: "Dispatch in 48 hours for ready styles",
    returns: "Easy 7-day return on eligible orders",
  };
}
