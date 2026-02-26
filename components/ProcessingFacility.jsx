export default function ProcessingFacility() {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: (
        <>
          We have invested <strong>US$8 million</strong> in this automated processing facility. It takes into careful consideration every food safety norm customers demand. The line has a capacity to produce <strong>10 MT per day</strong> of finished product.
        </>
      ),
    },
    {
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Automated spice processing includes Cleaning, Grinding, Blending, Sieving, Steam Sterilization, Material Handling and Bulk storage.",
    },
    {
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      text: "Batch making up to packing with minimal human intervention, thus ensuring high product quality and hygiene.",
    },
    {
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      text: "The mill's grinding technology for high VO spices enables it to retain the natural aroma and color of the grounded spices.",
    },
    {
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "We process almost all spices and condiments namely Chilli, Ginger, Turmeric, Coriander, mixed spices etc.",
    },
  ];

  return (
    <section id="processing-facility" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">
            Our Facility
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            World Class Processing Facility in Ikorodu
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-orange-50/50 border border-stone-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-amber-100">
                  {feature.icon}
                </div>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 text-white shadow-lg">
                <p className="text-3xl font-bold">US$8M</p>
                <p className="text-sm mt-1 text-red-100">Investment</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 text-white shadow-lg">
                <p className="text-3xl font-bold">10 MT</p>
                <p className="text-sm mt-1 text-red-100">Daily Capacity</p>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/50 border border-stone-100 p-6">
              <h4 className="text-lg font-semibold text-stone-800 mb-3">Processing Capabilities</h4>
              <div className="flex flex-wrap gap-2">
                {["Cleaning", "Grinding", "Blending", "Sieving", "Steam Sterilization", "Material Handling", "Bulk Storage"].map((cap) => (
                  <span key={cap} className="px-3 py-1.5 rounded-full bg-white border border-red-100 text-xs font-medium text-stone-700">
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/50 border border-stone-100 p-6">
              <h4 className="text-lg font-semibold text-stone-800 mb-3">Spices We Process</h4>
              <div className="flex flex-wrap gap-2">
                {["Chilli", "Ginger", "Turmeric", "Coriander", "Mixed Spices"].map((spice) => (
                  <span key={spice} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-xs font-medium text-white">
                    {spice}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
