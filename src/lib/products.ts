export type Scope = "veg" | "non-veg";

export type CategoryId =
  | "flatbreads"
  | "snacks"
  | "rice"
  | "gravies"
  | "appetizers"
  | "wings"
  | "kebabs"
  | "patties"
  | "sausages"
  | "coldcuts";

export type Product = {
  name: string;
  image: string;
  category: CategoryId;
  scope: Scope;
  tag?: string;
};

export type TileId = "flatbreads" | "snacks" | "rice" | "gravies" | "meat";

export type Tile = {
  id: TileId;
  title: string;
  shortTitle: string;
  blurb: string;
  banner: string;
  capacity: string;
  scope: Scope;
  /** When the tile is clicked, this is the sub-tab to activate in the product gallery */
  subTab: CategoryId | "all";
};

export const VEG_SUB_CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "flatbreads", label: "Flatbreads" },
  { id: "snacks", label: "Snacks" },
  { id: "rice", label: "Rice" },
  { id: "gravies", label: "Gravies" },
];

export const NONVEG_SUB_CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "appetizers", label: "Appetizers" },
  { id: "wings", label: "Wings" },
  { id: "kebabs", label: "Kebabs" },
  { id: "patties", label: "Patties" },
  { id: "sausages", label: "Sausages" },
  { id: "coldcuts", label: "Cold Cuts" },
];

export const TILES: Tile[] = [
  {
    id: "flatbreads",
    title: "Flatbreads & Tortillas",
    shortTitle: "Flatbreads",
    blurb:
      "Malabar Paratha, Roti Canai, stuffed parathas, and 4-grain tortillas.",
    banner: "/products/categories/flatbreads.jpg",
    capacity: "15,500+ pcs / hr",
    scope: "veg",
    subTab: "flatbreads",
  },
  {
    id: "snacks",
    title: "Frozen-to-Fry Snacks",
    shortTitle: "Snacks",
    blurb:
      "Samosas, kebabs, tikkis, kachoris, bhaji, pakoras, falafel. Frozen at peak.",
    banner: "/products/categories/snacks.webp",
    capacity: "1 lakh pcs / day",
    scope: "veg",
    subTab: "snacks",
  },
  {
    id: "rice",
    title: "Retort Rice",
    shortTitle: "Rice",
    blurb: "Eight aromatic varieties. Shelf-stable at ambient temperature.",
    banner: "/products/categories/rice.jpg",
    capacity: "Ambient shelf stable",
    scope: "veg",
    subTab: "rice",
  },
  {
    id: "gravies",
    title: "Base Gravies & Pastes",
    shortTitle: "Gravies",
    blurb:
      "Makhani, Manchurian, Thai curry, biryani pastes. The backbone of any menu.",
    banner: "/products/categories/gravies.jpg",
    capacity: "1,000 kg / hr",
    scope: "veg",
    subTab: "gravies",
  },
  {
    id: "meat",
    title: "Chicken & Meat",
    shortTitle: "Meat",
    blurb:
      "Nuggets, wings, kebabs, patties, sausages, salami. Halal across every SKU.",
    banner: "/products/meat/kebab-tandoori.jpg",
    capacity: "Multiple lines",
    scope: "non-veg",
    subTab: "all",
  },
];

export const PRODUCTS: Product[] = [
  /* Flatbreads & Tortillas - veg */
  { name: "Roti Canai", image: "/products/flatbreads/roti-canai.png", category: "flatbreads", scope: "veg", tag: "Signature" },
  { name: "Malabari Paratha", image: "/products/flatbreads/malabar-paratha.png", category: "flatbreads", scope: "veg" },
  { name: "Malabari Paratha · Garlic Coriander", image: "/products/flatbreads/malabar-garlic.png", category: "flatbreads", scope: "veg" },
  { name: "Malabari Paratha · Coriander Chilli", image: "/products/flatbreads/malabar-coriander-chilli.png", category: "flatbreads", scope: "veg" },
  { name: "Aloo Paratha", image: "/products/flatbreads/aloo-paratha.png", category: "flatbreads", scope: "veg" },
  { name: "Paneer Paratha", image: "/products/flatbreads/paneer-paratha.png", category: "flatbreads", scope: "veg" },
  { name: "Mix Veg Paratha", image: "/products/flatbreads/mix-veg-paratha.png", category: "flatbreads", scope: "veg" },
  { name: "Wheat Tortilla", image: "/products/flatbreads/tortilla-wholewheat.png", category: "flatbreads", scope: "veg" },
  { name: "Spinach Tortilla", image: "/products/flatbreads/tortilla-spinach.png", category: "flatbreads", scope: "veg" },
  { name: "Beetroot Tortilla", image: "/products/flatbreads/tortilla-beetroot.png", category: "flatbreads", scope: "veg" },
  { name: "Refined Flour Tortilla", image: "/products/flatbreads/tortilla-refined.png", category: "flatbreads", scope: "veg" },

  /* Snacks - veg */
  { name: "Bombay Vada", image: "/products/snacks/bombay-vada.png", category: "snacks", scope: "veg" },
  { name: "Beetroot Tikki", image: "/products/snacks/beetroot-tikki.png", category: "snacks", scope: "veg" },
  { name: "Hara Bhara Kebab", image: "/products/snacks/harabhara-kabab.png", category: "snacks", scope: "veg" },
  { name: "Shami Kebab", image: "/products/snacks/shami-kabab.png", category: "snacks", scope: "veg" },
  { name: "Falafel", image: "/products/snacks/falafel.png", category: "snacks", scope: "veg" },
  { name: "Onion Bhaji", image: "/products/snacks/onion-bhaji.png", category: "snacks", scope: "veg" },
  { name: "Spinach Pakora", image: "/products/snacks/spinach-pakora.png", category: "snacks", scope: "veg" },
  { name: "Kachori Matar", image: "/products/snacks/kachori-matar.png", category: "snacks", scope: "veg" },
  { name: "Moong Dal Kachori", image: "/products/snacks/kachori-dal.png", category: "snacks", scope: "veg" },
  { name: "Punjabi Samosa", image: "/products/snacks/samosa-punjabi-70g.png", category: "snacks", scope: "veg" },
  { name: "Mini Punjabi Samosa", image: "/products/snacks/samosa-punjabi-40g.png", category: "snacks", scope: "veg" },
  { name: "Potato Peas Samosa", image: "/products/snacks/samosa-potato-peas.png", category: "snacks", scope: "veg" },
  { name: "Pizza Cheese Samosa", image: "/products/snacks/samosa-pizza-cheese.png", category: "snacks", scope: "veg" },
  { name: "Jalapeno Cheese Samosa", image: "/products/snacks/samosa-jalapeno-cheese.png", category: "snacks", scope: "veg" },

  /* Rice - veg */
  { name: "Basmati Rice", image: "/products/rice/basmati.png", category: "rice", scope: "veg" },
  { name: "Jeera Rice", image: "/products/rice/jeera.png", category: "rice", scope: "veg" },
  { name: "Lemon Rice", image: "/products/rice/lemon.png", category: "rice", scope: "veg" },
  { name: "Pilaf Rice", image: "/products/rice/pilaf.png", category: "rice", scope: "veg" },
  { name: "Butter Mushroom Rice", image: "/products/rice/butter-mushroom.png", category: "rice", scope: "veg" },
  { name: "Saffron Rice", image: "/products/rice/saffron.png", category: "rice", scope: "veg" },
  { name: "Cilantro Lime Rice", image: "/products/rice/cilantro-lime.png", category: "rice", scope: "veg" },
  { name: "Aromat Rice", image: "/products/rice/aromat.png", category: "rice", scope: "veg" },

  /* Gravies & Pastes - veg */
  { name: "Makhani Base Gravy", image: "/products/gravies/makhani.png", category: "gravies", scope: "veg" },
  { name: "White Base Gravy", image: "/products/gravies/white-base.png", category: "gravies", scope: "veg" },
  { name: "Onion Tomato Mix Base Gravy", image: "/products/gravies/onion-tomato.png", category: "gravies", scope: "veg" },
  { name: "Spinach Base Gravy", image: "/products/gravies/spinach.png", category: "gravies", scope: "veg" },
  { name: "Manchurian Base Gravy", image: "/products/gravies/manchurian.png", category: "gravies", scope: "veg" },
  { name: "Hot Garlic Base Gravy", image: "/products/gravies/hot-garlic.png", category: "gravies", scope: "veg" },
  { name: "Thai Red Curry Paste", image: "/products/gravies/thai-red-curry.png", category: "gravies", scope: "veg" },
  { name: "Thai Green Curry Paste", image: "/products/gravies/thai-green-curry.png", category: "gravies", scope: "veg" },
  { name: "Hyderabadi Biryani Paste", image: "/products/gravies/hyderabadi-biryani.png", category: "gravies", scope: "veg" },
  { name: "Lucknowi Biryani Paste", image: "/products/gravies/lucknowi-biryani.png", category: "gravies", scope: "veg" },
  { name: "Kolkata Biryani Paste", image: "/products/gravies/kolkata-biryani.png", category: "gravies", scope: "veg" },

  /* Appetizers - non-veg */
  { name: "Chicken Fries", image: "/products/meat/chicken-fries.jpg", category: "appetizers", scope: "non-veg" },
  { name: "Spicy Chicken Tenders", image: "/products/meat/chicken-tenders-spicy.jpg", category: "appetizers", scope: "non-veg" },
  { name: "Chicken Nuggets", image: "/products/meat/chicken-nuggets.jpg", category: "appetizers", scope: "non-veg" },
  { name: "Chicken Breast Nuggets", image: "/products/meat/chicken-breast-nuggets.jpg", category: "appetizers", scope: "non-veg" },
  { name: "Chicken Appetizer Assortment", image: "/products/meat/chicken-appetizers.jpg", category: "appetizers", scope: "non-veg" },
  { name: "Chicken Schnitzel", image: "/products/meat/schnitzel.jpg", category: "appetizers", scope: "non-veg" },

  /* Wings - non-veg */
  { name: "BBQ Wings", image: "/products/meat/wings-bbq.jpg", category: "wings", scope: "non-veg" },
  { name: "Peri-Peri Wings", image: "/products/meat/wings-peri-peri.jpg", category: "wings", scope: "non-veg" },
  { name: "Schezwan Wings", image: "/products/meat/wings-schezwan.jpg", category: "wings", scope: "non-veg" },
  { name: "Smoked Wings", image: "/products/meat/wings-smoked.jpg", category: "wings", scope: "non-veg" },
  { name: "Crispy Wings", image: "/products/meat/wings-crispy.jpg", category: "wings", scope: "non-veg" },

  /* Kebabs - non-veg */
  { name: "Malai Kebab", image: "/products/meat/kebab-malai.jpg", category: "kebabs", scope: "non-veg" },
  { name: "Tandoori Kebab", image: "/products/meat/kebab-tandoori.jpg", category: "kebabs", scope: "non-veg" },
  { name: "Reshmi Kebab", image: "/products/meat/kebab-reshmi.jpg", category: "kebabs", scope: "non-veg" },

  /* Patties - non-veg */
  { name: "Chicken Patty", image: "/products/meat/patty-chicken.jpg", category: "patties", scope: "non-veg" },
  { name: "Paprika Patty", image: "/products/meat/patty-paprika.jpg", category: "patties", scope: "non-veg" },
  { name: "Tikka Patty", image: "/products/meat/patty-tikka.jpg", category: "patties", scope: "non-veg" },
  { name: "Burger Patty", image: "/products/meat/patty-burger.jpg", category: "patties", scope: "non-veg" },

  /* Sausages - non-veg */
  { name: "Smoked Franks", image: "/products/meat/sausage-franks.jpg", category: "sausages", scope: "non-veg" },
  { name: "Classic Sausage", image: "/products/meat/sausage-classic.jpg", category: "sausages", scope: "non-veg" },
  { name: "Zesty Pepper Sausage", image: "/products/meat/sausage-pepper.jpg", category: "sausages", scope: "non-veg" },
  { name: "Hot Italian Sausage", image: "/products/meat/sausage-italian.jpg", category: "sausages", scope: "non-veg" },
  { name: "Smoked Viennas", image: "/products/meat/sausage-vienna.jpg", category: "sausages", scope: "non-veg" },

  /* Cold Cuts - non-veg */
  { name: "Chicken Rashers", image: "/products/meat/coldcuts-rashers.jpg", category: "coldcuts", scope: "non-veg" },
  { name: "Chicken Ham", image: "/products/meat/coldcuts-ham.jpg", category: "coldcuts", scope: "non-veg" },
  { name: "Chicken Salami", image: "/products/meat/coldcuts-salami.jpg", category: "coldcuts", scope: "non-veg" },
  { name: "Chicken Pepperoni", image: "/products/meat/coldcuts-pepperoni.jpg", category: "coldcuts", scope: "non-veg" },
  { name: "Smoked Chicken Breast", image: "/products/meat/coldcuts-smoked-breast.jpg", category: "coldcuts", scope: "non-veg" },
];

export const PRODUCT_COUNT = PRODUCTS.length;

export function productsByTile(tile: Tile): Product[] {
  if (tile.id === "meat") return PRODUCTS.filter((p) => p.scope === "non-veg");
  return PRODUCTS.filter((p) => p.category === tile.subTab);
}

export function productsByScope(scope: Scope): Product[] {
  return PRODUCTS.filter((p) => p.scope === scope);
}

export function productsByCategory(cat: CategoryId): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}
