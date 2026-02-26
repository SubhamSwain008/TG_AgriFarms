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
              Headquartered in Singapore, Committed to Africa
            </h3>
            <p className="text-stone-600 leading-relaxed">
              We are a young company built by highly qualified team carrying years of experience in the spices industry. We apply this invaluable experience to serve companies and communities across the region that help our customers make better food and ingredients in the most natural, responsible and sustainable manner.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We manage the whole value chain from farm to factory. We have a very proactive farm-gate procurement initiative that spans over 100 villages across northern states of Nigeria and is integrated to our modern processing plant located in Ikorodu that has been carefully and thoughtfully designed to ensure the most stringent food safety norms are followed.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We also develop our own spice farm in Niger state where we closely work with farmers from the surrounding communities to grow several varieties of chillis that are meticulously hand picked and sundried to achieve the ideal moisture condition for processing. This ensures very high standards along the whole supply chain – from very high agriculture practices, traceability and processing at global standards.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our painstaking preemptive approach to the whole value chain not only ensures high product standards but importantly, our efforts enable us to enrichen lives of farmers and communities that have embarked on our journey. This endeavor and passion to serve both customer and community is deeply engrained in all of us at Goodearth Agriventures.
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
                    To bring the purest, most authentic spices from African farms to kitchens and industries worldwide – with no compromises on quality, purity, or sustainability.
                  </p>
                </div>
              </div>
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-amber-600 bg-clip-text text-transparent">
                  100+
                </p>
                <p className="text-xs text-stone-500 mt-1">Villages Covered</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                <p className="text-2xl font-bold bg-gradient-to-r from-red-700 to-amber-600 bg-clip-text text-transparent">
                  3000+
                </p>
                <p className="text-xs text-stone-500 mt-1">Hectares Cultivated</p>
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
