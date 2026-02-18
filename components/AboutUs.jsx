import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about-us" className="py-24 bg-gradient-to-br from-orange-50/50 to-red-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">
            Our Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            About TG AgriFarms
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Logo / Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-400 to-amber-400 opacity-10 blur-xl scale-105" />
            <div className="relative rounded-3xl bg-gradient-to-br from-orange-50 via-white to-red-50 border border-red-100 p-10 shadow-xl flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="TG AgriFarms"
                width={380}
                height={380}
                className="w-full max-w-[340px] h-auto drop-shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900">
              From Our Farms, To Your Kitchen
            </h3>
            <p className="text-stone-600 leading-relaxed">
              TG AgriFarms was born from a passion for authentic Indian spices.
              We grow, dry, and grind our own chillies on our farms  ensuring
              every pinch of our chilli powder carries the true heat, color, and
              aroma that mass-produced brands simply cannot match.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We work directly with local farmers and use traditional stone-grinding
              methods passed down through generations. No shortcuts, no blending
              with cheap fillers  just real chillies, real flavor, and real heat.
              That is the TG AgriFarms promise.
            </p>

            {/* Mission */}
            <div className="rounded-2xl bg-white border border-red-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-amber-500">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-1">
                    Our Mission
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    To bring the purest, most authentic chilli powder and spices
                    from Indian farms to kitchens worldwide  with no
                    compromises on quality, purity, or taste.
                  </p>
                </div>
              </div>
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-amber-600 bg-clip-text text-transparent">
                  50+
                </p>
                <p className="text-xs text-stone-500 mt-1">Spice Varieties</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-amber-600 bg-clip-text text-transparent">
                  10K+
                </p>
                <p className="text-xs text-stone-500 mt-1">Orders Shipped</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-amber-600 bg-clip-text text-transparent">
                  100%
                </p>
                <p className="text-xs text-stone-500 mt-1">Pure &amp; Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
