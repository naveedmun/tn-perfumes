export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-yellow-500/20 mt-24">

      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            <span className="text-yellow-500">TN</span> PERFUMES
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Premium inspired perfumes with luxury fragrance oils,
            long lasting scents and Cash On Delivery all over Pakistan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">Shop</li>
            <li className="hover:text-yellow-500 cursor-pointer">Brands</li>
            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Customer Care
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Cash On Delivery</li>
            <li>Fast Shipping</li>
            <li>Easy Returns</li>
            <li>100% Original Inspired Perfumes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact
          </h3>

          <p className="text-gray-400">
            📍 Karachi, Pakistan
          </p>

          <p className="text-gray-400 mt-3">
            📞 +92 336 0287243
          </p>

          <p className="text-gray-400 mt-3">
            ✉ info@tnperfumes.com
          </p>
        </div>

      </div>

      <div className="border-t border-yellow-500/10 py-6 text-center text-gray-500 text-sm">

        <p>
         © {new Date().getFullYear()} TN Perfumes. All Rights Reserved.
        </p>

         <p className="mt-2">
          Developed by{" "}
          <span className="text-yellow-500 font-semibold">
           Mun Developers
         </span>
       </p>

      </div>
    </footer>
  );
}