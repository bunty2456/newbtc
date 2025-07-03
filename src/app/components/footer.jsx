"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="mb-4">
              NewsBTC is a cryptocurrency news service that covers bitcoin news today, technical analysis & forecasts for bitcoin price and other altcoins. Here at NewsBTC, we are dedicated to enlightening everyone about bitcoin and other cryptocurrencies.
            </p>
            <p className="mb-4">
              We cover BTC news related to bitcoin exchanges, bitcoin mining and price forecasts for various cryptocurrencies.
            </p>
            <p className="text-sm text-gray-400">
              Disclaimer: The information found on NewsBTC is for educational purposes only. It does not represent the opinions of NewsBTC on whether to buy, sell or hold any investments and naturally investing carries risks. You are advised to conduct your own research before making any investment decisions. Use information provided on this website entirely at your own risk.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/advertize" className="hover:text-white transition-colors">
                  Advertising
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Center
                </Link>
              </li>
            </ul>
          </div>

          {/* BC.GAME Promo */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-2">BC.GAME</h3>
            <p className="text-white mb-4">PLAY GAMES & WIN CRYPTO!</p>
            <div className="text-3xl font-bold text-yellow-300 mb-4">11.8x</div>
            <button className="w-full bg-white text-purple-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
              JOIN NOW
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2025 NewsBTC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;