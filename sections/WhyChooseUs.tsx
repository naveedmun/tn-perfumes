export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality",
      desc: "Imported luxury fragrances with premium ingredients.",
      icon: "💎",
    },
    {
      title: "Long Lasting",
      desc: "Fragrances that stay fresh for hours.",
      icon: "⏳",
    },
    {
      title: "Fast Delivery",
      desc: "Fast delivery all over Pakistan.",
      icon: "🚚",
    },
    {
      title: "Cash On Delivery",
      desc: "Pay after receiving your order.",
      icon: "💰",
    },
  ];

  return (
     <section className="max-w-7xl mx-auto py-24 px-8">

       <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
         WHY CHOOSE US
       </p>

       <h2 className="text-4xl font-bold text-center text-yellow-500 mb-14">
          Why Choose TN Perfumes
       </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20"
          >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl border border-yellow-500/20">
              {item.icon}
          </div>

            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}