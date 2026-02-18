import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Red Chilli Powder",
    description:
      "Our signature blend  stone-ground from handpicked Guntur red chillies. Rich color, bold heat, and smoky aroma.",
    price: "₹249",
  },
  {
    id: 2,
    name: "Kashmiri Chilli Powder",
    description:
      "Vibrant deep red color with mild heat. Perfect for curries, tandoori dishes, and marinades that need color without fire.",
    price: "₹299",
  },
  {
    id: 3,
    name: "Extra Hot Chilli Flakes",
    description:
      "Crushed dried red chillies with seeds for maximum heat. Ideal for pizza toppings, stir-fries, and spicy dips.",
    price: "₹199",
  },
  {
    id: 4,
    name: "Whole Dried Red Chillies",
    description:
      "Sun-dried whole Byadgi chillies with deep color and moderate heat. Essential for tempering and traditional recipes.",
    price: "₹179",
  },
  {
    id: 5,
    name: "Smoked Chilli Powder",
    description:
      "Slow-smoked over wood fire for a rich, earthy flavor. Adds depth to BBQ rubs, sauces, and grilled meats.",
    price: "₹349",
  },
  {
    id: 6,
    name: "Chilli &amp; Spice Combo Pack",
    description:
      "Best-seller bundle with red chilli powder, turmeric, coriander, and cumin. Everything you need for everyday cooking.",
    price: "₹599",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-orange-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">
            Our Collection
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Our Spice Range
          </h2>
          <p className="text-lg text-stone-500">
            Handcrafted chilli powders and spice blends made from farm-fresh
            ingredients. No preservatives, no artificial colors.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
