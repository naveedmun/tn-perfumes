export default function FeaturedBrands() {
  const brands = [
    "Dior",
    "Gucci",
    "Tom Ford",
    "Versace",
    "YSL",
    "Creed",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-14">
        Featured Brands
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {brands.map((brand, index) => (
          <div
            key={index}
            className="rounded-3xl border border-yellow-500/20 bg-zinc-900 py-10 text-center text-xl font-bold text-white transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:text-yellow-500"
          >
            {brand}
          </div>
        ))}

      </div>

    </section>
  );
}