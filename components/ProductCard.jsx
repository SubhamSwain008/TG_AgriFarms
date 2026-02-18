export default function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-red-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Image Placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex flex-col items-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-amber-500 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-stone-400">Product Image</span>
        </div>
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
