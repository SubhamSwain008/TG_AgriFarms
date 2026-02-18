import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "CAMEROON PEPPE",
    description:
      "Our signature blend stone-ground from handpicked Guntur red chillies. Rich color, bold heat, and smoky aroma.",
    price: "₹249",
    image: "/products/product1.jpeg",
  },
  {
    id: 2,
    name: "HOT PEPPE POWDER",
    description:
      "Vibrant deep red color with mild heat. Perfect for curries, tandoori dishes, and marinades that need color without fire.",
    price: "₹299",
    image: "/products/product2.jpeg",
  },
  {
    id: 3,
    name: "HOT DELICIOUS PEPPE",
    description:
      "Crushed dried red chillies with seeds for maximum heat. Ideal for pizza toppings, stir-fries, and spicy dips.",
    price: "₹199",
    image: "/products/product3.jpeg",
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
