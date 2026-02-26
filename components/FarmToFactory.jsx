export default function FarmToFactory() {
  const steps = [
    {
      step: "Step 1",
      title: "Cultivate & Source",
      description:
        "Cultivate & source various varieties of chillis and other spices that have pungency and color characteristics that meet our customer's specific requirements.",
      icon: (
        <svg className="h-16 w-16 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      step: "Step 2",
      title: "Sun-Dry & Pack",
      description:
        "The matured fruits are carefully plucked from the fields and moved to open sites to allow it to sun-dry to reduce its moisture levels by 85%. From here the materials are carefully packed, the bags are registered and sent to our warehouse in Kaduna state.",
      icon: (
        <svg className="h-16 w-16 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      step: "Step 3",
      title: "Process & Deliver",
      description:
        "The dried fruits are transported to our processing mill in Ikorodu where they are passed through various rigorous stages to remove any foreign matter before being grounded/crushed, sterilized and packed as per customers requirements.",
      icon: (
        <svg className="h-16 w-16 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.161 1.029-5.998L2.13 7.573l6.022-.875L11.42 1.5l2.688 5.198 6.022.875-4.936 4.76 1.029 5.998z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="farm-to-factory" className="py-24 bg-orange-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Farm to Factory
          </h2>
          <p className="text-lg text-stone-500">
            Our end-to-end supply chain ensures complete quality control from cultivation to delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative group text-center p-8 rounded-2xl bg-white border border-stone-100 hover:shadow-xl hover:shadow-red-100 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-300 to-amber-300 z-10" />
              )}

              {/* Icon */}
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-red-50 border-2 border-red-100 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Step badge */}
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-white text-sm font-bold mb-3">
                {item.step}
              </span>

              <h3 className="text-xl font-bold text-stone-800 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
