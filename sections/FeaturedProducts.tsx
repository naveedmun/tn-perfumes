import Image from "next/image";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Gucci Flora",
      inspired: "Inspired by Gucci Flora",
      price: "Rs. 1,300",
      image: "/images/products/gucci-flora.png",
      badge: "Best Seller",
    },
    {
      name: "Sauvage",
      inspired: "Inspired by Dior Sauvage",
      price: "Rs. 1,400",
      image: "/images/products/sauvage.png",
      badge: "Popular",
    },
    {
      name: "Office Man",
      inspired: "Inspired by Office Man",
      price: "Rs. 1,500",
      image: "/images/products/office-man.png",
      badge: "Premium",
    },
    {
      name: "Jannan Sports",
      inspired: "Inspired by Jannan Sports",
      price: "Rs. 1,400",
      image: "/images/products/jannan-sports.png",
      badge: "New",
    },
    {
      name: "Jannan Gold",
      inspired: "Inspired by Jannan Gold",
      price: "Rs. 1,400",
      image: "/images/products/jannan-gold.png",
      badge: "Luxury",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-16">
        Featured Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product, index) => (

          <div
            key={index}
            className="relative bg-zinc-900 rounded-3xl p-6 border border-yellow-500/20 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >

            {/* Badge */}
            <span className="absolute top-5 right-5 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold">
              {product.badge}
            </span>

            {/* Product Image */}

            <div className="bg-[#3B2618] rounded-3xl p-6 flex justify-center">

              <Image
                src={product.image}
                alt={product.name}
                width={170}
                height={220}
                className="hover:scale-110 transition duration-500"
              />

            </div>

            {/* Product Info */}

            <h3 className="text-2xl font-bold mt-6">
              {product.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {product.inspired}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              50ml Luxury Perfume
            </p>

            {/* Rating */}

            <div className="text-yellow-500 mt-4 text-lg">
              ★★★★★
            </div>

            {/* Price */}

            <div className="flex justify-between items-center mt-6">

              <span className="text-yellow-500 text-2xl font-bold">
                {product.price}
              </span>

              <button className="bg-yellow-500 text-black px-5 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}