import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 items-center px-8 py-20">

      {/* Left Side */}
      <div>

        <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm mb-6">
          ✨ Premium Inspired Fragrances
        </span>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Discover
          <br />
          <span className="text-yellow-500">
            Luxury Perfumes
          </span>
        </h1>

        <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
          Premium inspired perfumes crafted with high-quality fragrance oils.
          Long-lasting scents, elegant packaging and Cash on Delivery all over Pakistan.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
            Shop Collection
          </button>

          <button className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
            View Products
          </button>

        </div>

        <div className="flex gap-10 mt-14">

          <div>
            <h2 className="text-3xl font-bold text-yellow-500">
              5+
            </h2>
            <p className="text-gray-400">
              Perfumes
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-500">
              COD
            </h2>
            <p className="text-gray-400">
              All Pakistan
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-500">
              50ml
            </h2>
            <p className="text-gray-400">
              Premium Bottle
            </p>
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex justify-center">

        <div className="relative">

          {/* Golden Glow */}

          <div className="absolute w-[450px] h-[450px] bg-yellow-500/20 blur-[120px] rounded-full"></div>

          {/* Discount Badge */}

          <div className="absolute -left-6 top-10 bg-yellow-500 text-black px-5 py-3 rounded-full font-bold shadow-lg z-20">
            Best Seller
          </div>

          <Image
            src="/images/perfume.png"
            alt="TN Perfume"
            width={420}
            height={560}
            className="relative z-10 hover:scale-105 duration-500"
          />

        </div>

      </div>

    </section>
  );
}