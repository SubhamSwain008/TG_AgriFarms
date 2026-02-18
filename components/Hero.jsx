import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-red-100 to-amber-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-100 to-red-100 opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-1.5 text-sm font-medium text-red-700">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Pure &middot; Spicy &middot; Authentic
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-stone-900">
              Premium{" "}
              <span className="bg-gradient-to-r from-red-700 to-amber-600 bg-clip-text text-transparent">
                Chilli Powder
              </span>{" "}
              &amp; Spices
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 max-w-lg leading-relaxed">
              Handcrafted from the finest sun-dried red chillies. No additives,
              no artificial colors  just pure, fiery flavor straight from our
              farms to your kitchen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Products
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#about-product"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-stone-200 px-8 py-3.5 text-base font-semibold text-stone-700 hover:border-red-300 hover:text-red-700 hover:bg-red-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-stone-900">50+</p>
                <p className="text-sm text-stone-500">Spice Varieties</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900">10K+</p>
                <p className="text-sm text-stone-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900">100%</p>
                <p className="text-sm text-stone-500">Pure &amp; Natural</p>
              </div>
            </div>
          </div>

          {/* Logo / Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-amber-400 opacity-15 blur-3xl scale-110" />
              <div className="relative flex items-center justify-center p-8">
                <Image
                  src="/logo.png"
                  alt="TG AgriFarms  Pure Spicy Authentic"
                  width={480}
                  height={480}
                  className="w-full max-w-[420px] h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
