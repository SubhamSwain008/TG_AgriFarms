import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-red-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-52 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-stone-800 group-hover:text-red-700 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}
