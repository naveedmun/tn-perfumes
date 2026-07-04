export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white">

      <section className="max-w-7xl mx-auto px-8 py-20">

        <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-semibold">
          TN PERFUMES
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Shop Collection
        </h1>

        <p className="text-gray-400 mt-5 max-w-2xl">
          Discover our premium inspired fragrances for Men & Women.
        </p>

        {/* Filter Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black">
            All
          </button>

          <button className="rounded-full border border-yellow-500 px-6 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
            Men
          </button>

          <button className="rounded-full border border-yellow-500 px-6 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
            Women
          </button>

          <button className="rounded-full border border-yellow-500 px-6 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
            Fresh
          </button>

          <button className="rounded-full border border-yellow-500 px-6 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
            Woody
          </button>

          <button className="rounded-full border border-yellow-500 px-6 py-3 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
            Sweet
          </button>

        </div>

      </section>

    </main>
  );
}