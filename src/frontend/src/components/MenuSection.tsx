import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMenuByCategory } from "@/hooks/useQueries";
import { Leaf } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { MenuItem } from "../backend.d";

const fallbackIndianItems: MenuItem[] = [
  {
    name: "Butter Chicken",
    description:
      "Tender chicken in a rich, creamy tomato-butter sauce with aromatic spices",
    category: "indian",
    price: 320,
    vegetarian: false,
  },
  {
    name: "Chicken Biryani",
    description:
      "Fragrant basmati rice layered with spiced chicken, saffron, and caramelised onions",
    category: "indian",
    price: 350,
    vegetarian: false,
  },
  {
    name: "Paneer Tikka Masala",
    description:
      "Marinated cottage cheese in a smoky, spiced tomato-cream gravy",
    category: "indian",
    price: 280,
    vegetarian: true,
  },
  {
    name: "Dal Makhani",
    description:
      "Slow-cooked black lentils simmered overnight in butter and cream",
    category: "indian",
    price: 220,
    vegetarian: true,
  },
  {
    name: "Garlic Naan",
    description:
      "Freshly baked bread topped with garlic butter and coriander from our tandoor",
    category: "indian",
    price: 80,
    vegetarian: true,
  },
  {
    name: "Gulab Jamun",
    description:
      "Soft milk-solid dumplings soaked in rose-flavoured sugar syrup",
    category: "indian",
    price: 110,
    vegetarian: true,
  },
  {
    name: "Palak Paneer",
    description:
      "Cottage cheese cubes in a velvety, spiced spinach gravy — a wholesome classic",
    category: "indian",
    price: 210,
    vegetarian: true,
  },
  {
    name: "Chicken Tikka Masala",
    description:
      "Smoky char-grilled chicken pieces simmered in a bold, tangy masala sauce",
    category: "indian",
    price: 300,
    vegetarian: false,
  },
  {
    name: "Aloo Paratha",
    description:
      "Crispy whole-wheat flatbread stuffed with spiced mashed potatoes, served with curd and pickle",
    category: "indian",
    price: 130,
    vegetarian: true,
  },
  {
    name: "Chole Bhature",
    description:
      "Spicy chickpea curry served with fluffy deep-fried bread — a North Indian favourite",
    category: "indian",
    price: 160,
    vegetarian: true,
  },
  {
    name: "Mutton Rogan Josh",
    description:
      "Slow-braised mutton in a Kashmiri sauce of dried chilies, fennel, and warm spices",
    category: "indian",
    price: 350,
    vegetarian: false,
  },
  {
    name: "Masala Dosa",
    description:
      "Crispy South Indian crepe filled with spiced potato masala, served with sambar and chutney",
    category: "indian",
    price: 150,
    vegetarian: true,
  },
  {
    name: "Tandoori Chicken",
    description:
      "Whole chicken marinated in yoghurt and spices, roasted in a clay tandoor until smoky and charred",
    category: "indian",
    price: 270,
    vegetarian: false,
  },
  {
    name: "Pav Bhaji",
    description:
      "Spiced vegetable mash served with buttered toasted bread rolls — Mumbai street food at its best",
    category: "indian",
    price: 140,
    vegetarian: true,
  },
  {
    name: "Mango Lassi",
    description:
      "Chilled blended yoghurt drink with fresh Alphonso mango pulp, lightly sweetened",
    category: "indian",
    price: 100,
    vegetarian: true,
  },
];

const fallbackFastFoodItems: MenuItem[] = [
  {
    name: "Honey Point Burger",
    description:
      "Signature double patty with special honey-mustard sauce, lettuce, and aged cheddar",
    category: "fastfood",
    price: 250,
    vegetarian: false,
  },
  {
    name: "Loaded Fries",
    description:
      "Crispy fries topped with cheese sauce, jalapenos, sour cream, and spring onion",
    category: "fastfood",
    price: 180,
    vegetarian: true,
  },
  {
    name: "Crispy Chicken Wrap",
    description:
      "Crunchy fried chicken with coleslaw, chipotle mayo in a warm flour tortilla",
    category: "fastfood",
    price: 220,
    vegetarian: false,
  },
  {
    name: "Veggie Delight Burger",
    description:
      "Spiced black bean patty with avocado, tomato, and sriracha aioli",
    category: "fastfood",
    price: 200,
    vegetarian: true,
  },
  {
    name: "Onion Rings",
    description:
      "Golden-battered thick-cut onion rings with our signature dipping sauce",
    category: "fastfood",
    price: 140,
    vegetarian: true,
  },
  {
    name: "Milkshake",
    description:
      "Thick and creamy shakes in mango, chocolate, strawberry, or vanilla flavour",
    category: "fastfood",
    price: 160,
    vegetarian: true,
  },
];

const itemImages: Record<string, string> = {
  "Butter Chicken": "/assets/generated/butter-chicken.dim_600x400.jpg",
  "Chicken Biryani": "/assets/generated/biryani.dim_600x400.jpg",
  "Honey Point Burger": "/assets/generated/burger-fries.dim_600x400.jpg",
  "Loaded Fries": "/assets/generated/fast-food-combo.dim_600x400.jpg",
};

// Warm gradient placeholders cycling through a few palettes
const placeholderGradients = [
  "from-amber-100 to-orange-200",
  "from-yellow-100 to-amber-200",
  "from-orange-100 to-red-200",
  "from-rose-100 to-orange-200",
  "from-amber-200 to-yellow-100",
];

const placeholderEmojis = ["🍛", "🍲", "🥘", "🍞", "🌶️", "🥪", "🍽️"];

const skeletonKeys = [
  "sk-1",
  "sk-2",
  "sk-3",
  "sk-4",
  "sk-5",
  "sk-6",
  "sk-7",
  "sk-8",
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const image = itemImages[item.name];
  const gradientClass =
    placeholderGradients[index % placeholderGradients.length];
  const emoji = placeholderEmojis[index % placeholderEmojis.length];

  return (
    <motion.div
      className="food-card bg-card rounded-xl overflow-hidden border border-border shadow-warm flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
      data-ocid={`menu.item.${index + 1}`}
    >
      {image ? (
        <div className="h-44 overflow-hidden shrink-0">
          <img
            src={image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ) : (
        <div
          className={`h-44 bg-gradient-to-br ${gradientClass} flex items-center justify-center shrink-0`}
        >
          <span className="text-5xl drop-shadow-sm">{emoji}</span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-base text-spice-800 leading-snug">
            {item.name}
          </h3>
          {item.vegetarian ? (
            <Badge className="bg-green-100 text-green-700 border border-green-200 shrink-0 gap-1 text-xs font-body">
              <Leaf size={9} />
              Veg
            </Badge>
          ) : (
            <Badge className="bg-red-100 text-red-700 border border-red-200 shrink-0 text-xs font-body">
              Non-Veg
            </Badge>
          )}
        </div>
        <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display font-bold text-lg text-saffron-500">
            ₹{item.price}
          </span>
          <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
            {item.category === "indian" ? "Indian" : "Fast Food"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function MenuSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      data-ocid="menu.loading_state"
    >
      {skeletonKeys.slice(0, count).map((k) => (
        <div
          key={k}
          className="rounded-xl overflow-hidden border border-border"
        >
          <Skeleton className="h-44 w-full" />
          <div className="p-5 space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-6 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

function CategoryMenu({ category }: { category: string }) {
  const { data, isLoading } = useMenuByCategory(category);
  const items =
    data && data.length > 0
      ? data
      : category === "indian"
        ? fallbackIndianItems
        : fallbackFastFoodItems;

  const isIndian = category === "indian";

  if (isLoading) return <MenuSkeleton count={isIndian ? 8 : 6} />;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category}
        className={`grid gap-5 ${
          isIndian
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {items.map((item, i) => (
          <MenuCard key={item.name} item={item} index={i} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("indian");

  return (
    <section id="menu" className="py-24 bg-spice-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-saffron-400 text-xs font-body tracking-[0.3em] uppercase mb-3">
            Culinary Delights
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-saffron-100 mb-4">
            Our <span className="text-saffron-400 italic">Menu</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-body text-saffron-200/70 max-w-xl mx-auto">
            From aromatic curries to crunchy fast food favourites — discover
            flavours crafted with passion.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-spice-800 border border-saffron-700/30 p-1 rounded-sm">
              <TabsTrigger
                value="indian"
                className="font-body font-medium px-8 py-2.5 rounded-sm data-[state=active]:bg-saffron-500 data-[state=active]:text-white text-saffron-300 transition-all"
                data-ocid="menu.tab"
              >
                🍛 Indian Food
              </TabsTrigger>
              <TabsTrigger
                value="fastfood"
                className="font-body font-medium px-8 py-2.5 rounded-sm data-[state=active]:bg-saffron-500 data-[state=active]:text-white text-saffron-300 transition-all"
                data-ocid="menu.tab"
              >
                🍔 Fast Food
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="indian">
            <CategoryMenu category="indian" />
          </TabsContent>
          <TabsContent value="fastfood">
            <CategoryMenu category="fastfood" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
