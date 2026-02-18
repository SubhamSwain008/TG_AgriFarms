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
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold bg-gradient-to-r from-red-700 to-amber-600 bg-clip-text text-transparent">
            {product.price}
          </span>
          <button className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-700 hover:text-white transition-all duration-200 cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
