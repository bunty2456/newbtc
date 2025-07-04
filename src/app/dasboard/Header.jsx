"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isCryptoNewsOpen, setIsCryptoNewsOpen] = useState(false);
  const [isCryptoPricesOpen, setIsCryptoPricesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center bg-white">
        <div className="hidden lg:flex w-1/3" />

        {/* Logo Centered */}
        <div className="w-full flex justify-center py-4 mr-40">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform rotate-12">
              <span className="text-white font-bold text-lg transform -rotate-12">N</span>
            </div>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">NEWSBTC</span>
          </div>
        </div>

        {/* ✅ Fixed Dashboard Link */}
        <Link className="bg-red-300 p-3 rounded hover:bg-red-400 transition" href="/dashboard">
          Dashboard
        </Link>

        {/* Search Button */}
        <div className="relative">
          <button
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="w-5 h-5 stroke-2" />
          </button>

          {/* Search Dropdown Modal */}
          {isSearchOpen && (
            <div className="absolute right-0 top-12 z-50">
              <div className="bg-white shadow-lg rounded-md p-4 w-[300px]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Search...</span>
                  <button
                    className="text-gray-400 hover:text-gray-700"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Search..."
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex justify-center items-center space-x-10 font-semibold text-sm text-gray-900 pb-4 bg-white">
        {/* Dropdown: Cryptocurrency News */}
        <div className="relative group">
          <button
            onClick={() => {
              setIsCryptoNewsOpen(!isCryptoNewsOpen);
              setIsCryptoPricesOpen(false);
            }}
            className="flex items-center space-x-1 hover:text-black transition"
          >
            <span>Cryptocurrency News</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {isCryptoNewsOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <div className="py-2">
                {["Bitcoin News (BTC)", "Ethereum News (ETH)", "Ripple News (XRP)", "Shiba Inu News (SHIB)"].map(
                  (item) => (
                    <div
                      key={item}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Dropdown: Crypto Prices */}
        <div className="relative group">
          <button
            onClick={() => {
              setIsCryptoPricesOpen(!isCryptoPricesOpen);
              setIsCryptoNewsOpen(false);
            }}
            className="flex items-center space-x-1 hover:text-black transition"
          >
            <span>Crypto Prices</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {isCryptoPricesOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <div className="py-2">
                {["Bitcoin (BTC) Price", "Ethereum (ETH) Price", "Dogecoin (DOGE) Price"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Static Links */}
        <span className="cursor-pointer hover:text-black transition">Crypto Resources & Directory</span>
        <span className="cursor-pointer hover:text-black transition">All Crypto</span>

        {/* Play Games */}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition">
          <span>Play Games</span>
          <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">Try</span>
        </div>

        {/* Casinos */}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition">
          <span>Casinos</span>
          <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded">Try</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
