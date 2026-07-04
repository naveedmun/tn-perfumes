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

      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-14">
        Why Choose TN Perfumes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500 transition duration-300"
          >
            <div className="text-5xl mb-6">{item.icon}</div>

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