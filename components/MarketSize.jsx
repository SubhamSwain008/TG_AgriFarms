export default function MarketSize() {
  // SVG viewBox: 600x600, center at (300, 300)
  // TAM (green):  r=275  → top edge y=25
  // SAM (teal):   r=195  → top edge y=105
  // SOM (purple): r=112  → top edge y=188, center y=300
  //
  // TAM ring visible at top:  y=25  → y=105  (80px gap)  → text near y=55-95
  // SAM ring visible at top:  y=105 → y=188  (83px gap)  → text near y=130-180
  // SOM circle center:                                    → text near y=265-335

  return (
    <section id="market-size" className="py-24 bg-orange-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">
            Market Opportunity
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Market Size &amp; Opportunity
          </h2>
        </div>

        {/* SVG Concentric Circles */}
        <div className="flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            className="w-full max-w-[560px] drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* TAM — outermost green circle */}
            <circle cx="300" cy="300" r="275" fill="#8DB255" />

            {/* SAM — teal circle */}
            <circle cx="300" cy="300" r="195" fill="#4EA8A0" />

            {/* SOM — purple inner circle */}
            <circle cx="300" cy="300" r="112" fill="#7B68AE" />

            {/* ── TAM text — sits in the green ring at the top ── */}
            <text x="300" y="52" textAnchor="middle" fill="white" fontWeight="800" fontSize="22" fontFamily="system-ui, sans-serif">TAM</text>
            <text x="300" y="72" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="system-ui, sans-serif">Grounded Chilli Market Size</text>
            <text x="300" y="90" textAnchor="middle" fill="white" fontWeight="700" fontSize="13" fontFamily="system-ui, sans-serif">72,000 mt  (USD 600mn per year)</text>

            {/* ── SAM text — sits in the teal ring at the top ── */}
            <text x="300" y="124" textAnchor="middle" fill="white" fontWeight="800" fontSize="20" fontFamily="system-ui, sans-serif">SAM</text>
            <text x="300" y="143" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontFamily="system-ui, sans-serif">Packaged Grinded Chilli Market Size — 30%</text>
            <text x="300" y="161" textAnchor="middle" fill="white" fontWeight="700" fontSize="13" fontFamily="system-ui, sans-serif">21,000 mt  (USD 175mn per year)</text>

            {/* ── SOM text — centered inside the purple circle ── */}
            <text x="300" y="271" textAnchor="middle" fill="white" fontWeight="800" fontSize="20" fontFamily="system-ui, sans-serif">SOM</text>
            <text x="300" y="292" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontFamily="system-ui, sans-serif">TG Agri Projected</text>
            <text x="300" y="309" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontFamily="system-ui, sans-serif">Market Share — 60%</text>
            <text x="300" y="330" textAnchor="middle" fill="white" fontWeight="700" fontSize="13" fontFamily="system-ui, sans-serif">12,000 mt</text>
            <text x="300" y="348" textAnchor="middle" fill="white" fontWeight="700" fontSize="13" fontFamily="system-ui, sans-serif">(USD 100mn per year)</text>
          </svg>
        </div>

        {/* Legend cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { label: "TAM", color: "bg-[#8DB255]", title: "Grounded Chilli Market Size", value: "72,000 mt  (USD 600mn per year)" },
            { label: "SAM", color: "bg-[#4EA8A0]", title: "Packaged Grinded Chilli Market Size — 30%", value: "21,000 mt  (USD 175mn per year)" },
            { label: "SOM", color: "bg-[#7B68AE]", title: "TG Agri Projected Market Share — 60%", value: "12,000 mt  (USD 100mn per year)" },
          ].map((c) => (
            <div key={c.label} className="p-5 rounded-2xl bg-white border border-stone-100 shadow-sm text-center">
              <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold mb-2 ${c.color}`}>
                {c.label}
              </span>
              <h4 className="text-sm font-semibold text-stone-800 mb-1">{c.title}</h4>
              <p className="text-xs text-stone-500">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
