export default function CustomerReviews() {
  const reviews = [
    {
      name: "Muhammad Ali",
      city: "Karachi",
      review: "Amazing fragrance, long lasting and premium packaging. Highly recommended!",
    },
    {
      name: "Ahmed Raza",
      city: "Lahore",
      review: "Fast delivery and excellent quality. Will definitely order again.",
    },
    {
      name: "Usman Khan",
      city: "Islamabad",
      review: "One of the best inspired perfumes I have ever used.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
        CUSTOMER REVIEWS
      </p>

      <h2 className="mb-14 text-center text-4xl font-bold text-white">
        What Our Customers Say
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20"
          >
            <div className="mb-4 text-yellow-500 text-xl">★★★★★</div>

            <p className="mb-6 text-gray-300">
              "{review.review}"
            </p>

            <h3 className="font-bold text-white">
              {review.name}
            </h3>

            <p className="text-sm text-gray-500">
              {review.city}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}