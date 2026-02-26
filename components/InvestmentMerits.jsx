export default function InvestmentMerits() {
  const merits = [
    {
      title: "Reduce Import Dependence",
      icon: (
        <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.588-.75H14.25M3.75 15.75V5.625c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v10.125m-9 0h9" />
        </svg>
      ),
      description:
        "This project will enable our customers based in Nigeria to drastically lower its dependence on sourcing from foreign countries that can sometimes take weeks to months to reach their warehouse. As these are perishable, they carry the risk of delays & decay, eroding shelf-life.",
    },
    {
      title: "Forex Preservation",
      icon: (
        <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description:
        "This project would help our customers to reduce and eventually eliminate any forex exposure they might have on these products. With the Naira weakening significantly it would insulate our customers from eroding their bottom-line and keeping food prices in control.",
    },
    {
      title: "Employment in Agriculture Sector",
      icon: (
        <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      description:
        "This project from farm to factory will involve procurement of 17,000 MT of fresh Chilli. It is a highly labor-intensive operation. It will involve 700,000 man-days of employment in the agriculture sector covering over 3000 hectares of cultivated Chilli in the country. This is expected to provide direct and indirect employment and income to over 10,000 people per season through this project alone!",
    },
    {
      title: "Export Opportunity",
      icon: (
        <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      description:
        "Global spice trade is estimated to be valued at US$ 12 billion in 2020 and is expected to grow to US$15 billion by 2026. Nigeria with its vast resources and ideal climate contributes almost insignificant quantities to global trade. Our manufacturing facility would be one of its kind in Nigeria with BRC compliance. This presents a huge opportunity for exports especially into Europe and North America where we have several key trade agreements for duty-free imports like AGOA.",
    },
  ];

  return (
    <section id="investment-merits" className="py-24 bg-gradient-to-br from-orange-50/50 to-red-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">
            Why Invest
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Merits of this Investment / Project
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {merits.map((merit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-stone-100 hover:shadow-xl hover:shadow-red-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-amber-100 group-hover:scale-110 transition-transform duration-300">
                {merit.icon}
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-3">
                {merit.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {merit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
