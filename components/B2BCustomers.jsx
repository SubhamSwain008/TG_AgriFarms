import Image from "next/image";

const customers = [
  {
    name: "Nestlé",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/960px-Nestl%C3%A9.svg.png",
  },
  {
    name: "Unilever",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Unilever.svg/120px-Unilever.svg.png",
  },
  {
    name: "Indomie",
    logo: "https://www.indomie.com/img/icon/logo-indomie.png",
  },
  {
    name: "Freddy Hirsch",
    logo: "https://www.freddyhirsch.com.ng/FHN.svg",
  },
  {
    name: "OmniBiz",
    logo: "https://omnibiz.com/images/logo.png",
  },
  {
    name: "Olam",
    logo: "https://www.olamgroup.com/content/dam/olamgroup/xd/olam-logo-new.png",
  },
  {
    name: "Chicken Republic",
    logo: "https://www.chicken-republic.com/wp-content/uploads/2021/10/ChickenRepublic_Logo.svg",
  },
];

export default function B2BCustomers() {
  return (
    <section id="b2b-customers" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-3">
            Trusted Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Our B2B Customers
          </h2>
          <p className="text-lg text-stone-500">
            We are proud to serve leading food companies and brands across Africa and beyond.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-orange-50/50 border border-stone-100 hover:shadow-lg hover:shadow-red-100 hover:-translate-y-1 transition-all duration-300 h-40"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-h-20 max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <p className="mt-3 text-xs font-medium text-stone-400 group-hover:text-stone-600 transition-colors">{customer.name}</p>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-stone-400">
            ...and many more leading food companies across Nigeria and West Africa
          </p>
        </div>
      </div>
    </section>
  );
}
