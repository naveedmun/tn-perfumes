"use client";

import { Heart, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-yellow-500/20 bg-[#111111]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="text-3xl font-bold tracking-widest text-yellow-500">
            TN
            <span className="ml-2 text-white">PERFUMES</span>
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-300 lg:flex">
          <li className="cursor-pointer transition hover:text-yellow-500">Home</li>
          <li className="cursor-pointer transition hover:text-yellow-500">Shop</li>
          <li className="cursor-pointer transition hover:text-yellow-500">Brands</li>
          <li className="cursor-pointer transition hover:text-yellow-500">Deals</li>
          <li className="cursor-pointer transition hover:text-yellow-500">About</li>
          <li className="cursor-pointer transition hover:text-yellow-500">Contact</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <Search
            size={22}
            className="cursor-pointer text-white transition hover:text-yellow-500"
          />

          <Heart
            size={22}
            className="cursor-pointer text-white transition hover:text-yellow-500"
          />

          <User
            size={22}
            className="cursor-pointer text-white transition hover:text-yellow-500"
          />

          <div className="relative cursor-pointer">
            <ShoppingCart
              size={24}
              className="text-white transition hover:text-yellow-500"
            />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
              0
            </span>
          </div>

        </div>

      </div>
    </nav>
  );
}