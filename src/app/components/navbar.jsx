"use client";
import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCryptoNewsOpen, setIsCryptoNewsOpen] = useState(false);
  const [isCryptoPricesOpen, setIsCryptoPricesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCryptoNews = () => {
    setIsCryptoNewsOpen(!isCryptoNewsOpen);
  };

  const toggleCryptoPrices = () => {
    setIsCryptoPricesOpen(!isCryptoPricesOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform rotate-12">
                  <span className="text-white font-bold text-lg transform -rotate-12">N</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">NEWSBTC</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative">
                <div 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                  onClick={toggleCryptoNews}
                >
                  <span className="font-medium text-sm">Cryptocurrency News</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isCryptoNewsOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {/* Cryptocurrency News Dropdown */}
                {isCryptoNewsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm border-l-4 border-cyan-400">
                        Bitcoin News (BTC)
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Ethereum News (ETH)
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Ripple News (XRP)
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Shiba Inu News (SHIB)
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Cardano News (ADA)
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Dogecoin News (DOGE)
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Solana News (SOL)
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <div 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                  onClick={toggleCryptoPrices}
                >
                  <span className="font-medium text-sm">Crypto Prices</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isCryptoPricesOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Crypto Prices Dropdown */}
                {isCryptoPricesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm border-l-4 border-cyan-400">
                        Binance Coin (BNB) Price
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Bitcoin (BTC) Price
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Cardano (ADA) Price
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Chainlink (LINK) Price
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Dogecoin (DOGE) Price
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Ethereum (ETH) Price
                      </div>
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-sm">
                        Litecoin (LTC) Price
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                <span className="font-medium text-sm">Crypto Resources & Directory</span>
              </div>
              
              <div className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                <span className="font-medium text-sm">All Crypto</span>
              </div>
              
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                <span className="font-medium text-sm">Play Games</span>
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-sm font-bold">Try</span>
              </div>
              
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                <span className="font-medium text-sm">Casinos</span>
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-sm font-bold">Try</span>
              </div>
            </div>

            {/* Search Icon */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Search className="w-5 h-5 stroke-2" />
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              <div className="flex items-center justify-between py-3 text-gray-600 border-b border-gray-50">
                <span className="font-medium text-sm">Cryptocurrency News</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              
              <div className="flex items-center justify-between py-3 text-gray-600 border-b border-gray-50">
                <span className="font-medium text-sm">Crypto Prices</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              
              <div className="py-3 text-gray-600 border-b border-gray-50">
                <span className="font-medium text-sm">Crypto Resources & Directory</span>
              </div>
              
              <div className="py-3 text-gray-600 border-b border-gray-50">
                <span className="font-medium text-sm">All Crypto</span>
              </div>
              
              <div className="flex items-center justify-between py-3 text-gray-600 border-b border-gray-50">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm">Play Games</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-sm font-bold">Try</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm">Casinos</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-sm font-bold">Try</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Security Incident Banner */}
      <div className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-teal-400 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="font-medium text-sm">Security Incident</span>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(isCryptoNewsOpen || isCryptoPricesOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsCryptoNewsOpen(false);
            setIsCryptoPricesOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Navbar;