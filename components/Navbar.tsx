export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#3B2618]/80 backdrop-blur-md border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-yellow-500 tracking-wider cursor-pointer">
          TN PERFUME
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
            Shop
          </li>

          <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
            Collections
          </li>

          <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="border border-yellow-500 text-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
            Cart
          </button>

        </div>

      </div>

    </nav>
  );
}