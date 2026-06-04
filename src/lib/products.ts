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
  /** One-line product description, sourced from unifayre.com. */
  description?: string;
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
  { name: "Roti Canai", image: "/products/flatbreads/roti-canai.png", category: "flatbreads", scope: "veg", tag: "Signature", description: "A flaky Malaysian-style flatbread known for its stretch and layered softness." },
  { name: "Malabari Paratha", image: "/products/flatbreads/malabar-paratha.png", category: "flatbreads", scope: "veg", description: "Layered South Indian paratha known for its soft, flaky texture and rich taste." },
  { name: "Malabari Paratha · Garlic Coriander", image: "/products/flatbreads/malabar-garlic.png", category: "flatbreads", scope: "veg", description: "Soft layered paratha enhanced with garlic and coriander for a bold, savoury punch." },
  { name: "Malabari Paratha · Coriander Chilli", image: "/products/flatbreads/malabar-coriander-chilli.png", category: "flatbreads", scope: "veg", description: "A flaky Malabari paratha topped with fresh coriander and spicy chilli for extra flavour." },
  { name: "Aloo Paratha", image: "/products/flatbreads/aloo-paratha.png", category: "flatbreads", scope: "veg", description: "Soft wheat paratha filled with mildly spiced mashed potatoes for a comforting meal." },
  { name: "Paneer Paratha", image: "/products/flatbreads/paneer-paratha.png", category: "flatbreads", scope: "veg", description: "Stuffed with soft paneer and mild spices, offering a rich and creamy taste." },
  { name: "Mix Veg Paratha", image: "/products/flatbreads/mix-veg-paratha.png", category: "flatbreads", scope: "veg", description: "Nutritious wheat paratha stuffed with a blend of seasoned mixed vegetables." },
  { name: "Wheat Tortilla", image: "/products/flatbreads/tortilla-wholewheat.png", category: "flatbreads", scope: "veg", description: "Nutritious whole wheat tortilla with a hearty, wholesome taste." },
  { name: "Spinach Tortilla", image: "/products/flatbreads/tortilla-spinach.png", category: "flatbreads", scope: "veg", description: "Green tortillas infused with spinach for added nutrition and colour." },
  { name: "Beetroot Tortilla", image: "/products/flatbreads/tortilla-beetroot.png", category: "flatbreads", scope: "veg", description: "Bright pink tortillas made with beetroot puree for a mild earthy flavour." },
  { name: "Refined Flour Tortilla", image: "/products/flatbreads/tortilla-refined.png", category: "flatbreads", scope: "veg", description: "Soft and flexible tortillas made from refined flour for smooth rolling and wrapping." },

  /* Snacks - veg */
  { name: "Bombay Vada", image: "/products/snacks/bombay-vada.png", category: "snacks", scope: "veg", description: "Soft spiced potato filling wrapped in a crisp besan coating, a classic Mumbai favourite." },
  { name: "Beetroot Tikki", image: "/products/snacks/beetroot-tikki.png", category: "snacks", scope: "veg", description: "Crispy beetroot patties with a naturally earthy flavour and vibrant colour." },
  { name: "Hara Bhara Kebab", image: "/products/snacks/harabhara-kabab.png", category: "snacks", scope: "veg", description: "A wholesome blend of spinach, peas and potatoes shaped into soft kebabs." },
  { name: "Shami Kebab", image: "/products/snacks/shami-kabab.png", category: "snacks", scope: "veg", description: "Soft, melt-in-mouth kebabs made with lentils and aromatic spices." },
  { name: "Falafel", image: "/products/snacks/falafel.png", category: "snacks", scope: "veg", description: "Middle-Eastern chickpea fritters seasoned with herbs for a rich, savoury bite." },
  { name: "Onion Bhaji", image: "/products/snacks/onion-bhaji.png", category: "snacks", scope: "veg", description: "Crispy fritters made from thin onion slices dipped in spiced gram-batter." },
  { name: "Spinach Pakora", image: "/products/snacks/spinach-pakora.png", category: "snacks", scope: "veg", description: "Crispy pakoras made with fresh spinach leaves dipped in seasoned batter." },
  { name: "Kachori Matar", image: "/products/snacks/kachori-matar.png", category: "snacks", scope: "veg", description: "Flaky kachori packed with mildly spiced green pea filling for a fresh taste." },
  { name: "Moong Dal Kachori", image: "/products/snacks/kachori-dal.png", category: "snacks", scope: "veg", description: "Deep-fried kachori stuffed with a seasoned lentil mixture and bold spices." },
  { name: "Punjabi Samosa", image: "/products/snacks/samosa-punjabi-70g.png", category: "snacks", scope: "veg", description: "Large Punjabi samosa packed with extra stuffing for a satisfying bite." },
  { name: "Mini Punjabi Samosa", image: "/products/snacks/samosa-punjabi-40g.png", category: "snacks", scope: "veg", description: "Mini Punjabi-style samosa with bold spices and a thick crust." },
  { name: "Potato Peas Samosa", image: "/products/snacks/samosa-potato-peas.png", category: "snacks", scope: "veg", description: "Traditional samosa filled with seasoned potatoes and peas in a flaky crust." },
  { name: "Pizza Cheese Samosa", image: "/products/snacks/samosa-pizza-cheese.png", category: "snacks", scope: "veg", description: "Fusion samosas filled with pizza-style cheese and herbs for a fun twist." },
  { name: "Jalapeno Cheese Samosa", image: "/products/snacks/samosa-jalapeno-cheese.png", category: "snacks", scope: "veg", description: "Mini samosas filled with hot jalapeños and creamy cheese for a fusion bite." },

  /* Rice - veg */
  { name: "Basmati Rice", image: "/products/rice/basmati.png", category: "rice", scope: "veg", description: "Premium long-grain basmati rice cooked to perfection and sealed for freshness." },
  { name: "Jeera Rice", image: "/products/rice/jeera.png", category: "rice", scope: "veg", description: "Fragrant rice infused with roasted cumin for a warm, earthy taste." },
  { name: "Lemon Rice", image: "/products/rice/lemon.png", category: "rice", scope: "veg", description: "Tangy and refreshing lemon-flavoured rice with subtle spices." },
  { name: "Pilaf Rice", image: "/products/rice/pilaf.png", category: "rice", scope: "veg", description: "Flavourful pilaf cooked with mild spices for a rich and comforting taste." },
  { name: "Butter Mushroom Rice", image: "/products/rice/butter-mushroom.png", category: "rice", scope: "veg", description: "Creamy butter-flavoured rice blended with tender mushrooms." },
  { name: "Saffron Rice", image: "/products/rice/saffron.png", category: "rice", scope: "veg", description: "Elegant saffron-infused rice with a gentle aroma and golden colour." },
  { name: "Cilantro Lime Rice", image: "/products/rice/cilantro-lime.png", category: "rice", scope: "veg", description: "Fresh cilantro and tangy lime blend into a bright, refreshing rice dish." },
  { name: "Aromat Rice", image: "/products/rice/aromat.png", category: "rice", scope: "veg", description: "Seasoned aromatic rice with a balanced blend of mild spices." },

  /* Gravies & Pastes - veg */
  { name: "Makhani Base Gravy", image: "/products/gravies/makhani.png", category: "gravies", scope: "veg", description: "A rich, creamy tomato-based gravy with butter and mild spices for classic North Indian dishes." },
  { name: "White Base Gravy", image: "/products/gravies/white-base.png", category: "gravies", scope: "veg", description: "A silky gravy made from cashew and browned onions, offering a mildly sweet and creamy profile." },
  { name: "Onion Tomato Mix Base Gravy", image: "/products/gravies/onion-tomato.png", category: "gravies", scope: "veg", description: "An all-purpose onion-tomato-masala gravy ideal for multiple Indian curry preparations." },
  { name: "Spinach Base Gravy", image: "/products/gravies/spinach.png", category: "gravies", scope: "veg", description: "Smooth spinach purée base crafted for vibrant and nutritious green curries." },
  { name: "Manchurian Base Gravy", image: "/products/gravies/manchurian.png", category: "gravies", scope: "veg", description: "A bold Indo-Chinese gravy with soy, garlic and spices for authentic Manchurian dishes." },
  { name: "Hot Garlic Base Gravy", image: "/products/gravies/hot-garlic.png", category: "gravies", scope: "veg", description: "A fiery Indo-Chinese base packed with garlic, chilli and umami-rich flavours." },
  { name: "Thai Red Curry Paste", image: "/products/gravies/thai-red-curry.png", category: "gravies", scope: "veg", description: "A rich, spicy paste blending red chillies and Thai aromatics for classic red curry dishes." },
  { name: "Thai Green Curry Paste", image: "/products/gravies/thai-green-curry.png", category: "gravies", scope: "veg", description: "A vibrant green curry paste with herbs, green chillies and authentic Thai flavours." },
  { name: "Hyderabadi Biryani Paste", image: "/products/gravies/hyderabadi-biryani.png", category: "gravies", scope: "veg", description: "Authentic Hyderabadi masala paste crafted with spices for rich, aromatic biryani." },
  { name: "Lucknowi Biryani Paste", image: "/products/gravies/lucknowi-biryani.png", category: "gravies", scope: "veg", description: "A delicate, mildly spiced Lucknowi-style biryani paste with aromatic seasonings." },
  { name: "Kolkata Biryani Paste", image: "/products/gravies/kolkata-biryani.png", category: "gravies", scope: "veg", description: "A flavourful Kolkata-style biryani paste with warm spices and signature aromatic notes." },

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
