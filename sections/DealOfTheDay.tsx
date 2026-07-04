export default function DealOfTheDay() {
  return (
    <section className="bg-[#0f0f0f] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-[#1b1b1b] to-yellow-500/10 p-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <span className="inline-block rounded-full bg-yellow-500 px-4 py-1 text-sm font-bold text-black">
                🔥 DEAL OF THE DAY
              </span>

              <h2 className="mt-5 text-4xl font-bold text-white">
                Buy Any <span className="text-yellow-500">3 Perfumes</span>
              </h2>

              <p className="mt-4 text-lg text-gray-300">
                Get <span className="font-bold text-yellow-500">25% OFF</span> on your total order.
              </p>

              <button className="mt-8 rounded-full bg-yellow-500 px-8 py-3 font-bold text-black transition hover:scale-105">
                Shop Now
              </button>
            </div>

            <div className="text-center">
              <p className="mb-3 text-gray-400">Offer Ends In</p>

              <div className="rounded-2xl border border-yellow-500 bg-black px-8 py-5 text-4xl font-bold tracking-widest text-yellow-500">
                08 : 15 : 42
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}