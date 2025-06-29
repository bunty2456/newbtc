"use client";
import React, { useState } from 'react';
import { ChevronDown, Star, Zap, Shield, Gamepad2, TrendingUp, Pickaxe, Coins } from 'lucide-react';

const CryptoResourcesPage = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
  };

  const premiumSponsors = [
    {
      name: "BitStarz",
      logo: "🌟",
      tagline: "DREAM BIG. WIN BIGGER",
      category: "casino"
    },
    {
      name: "CryptoSlots",
      logo: "🎰",
      tagline: "",
      category: "casino"
    },
    {
      name: "Coins.Game",
      logo: "⚡",
      tagline: "",
      category: "game"
    },
    {
      name: "BC.Game",
      logo: "🛡️",
      tagline: "",
      category: "game"
    },
    {
      name: "SimpleFX",
      logo: "📈",
      tagline: "",
      category: "trading"
    },
    {
      name: "1xBit",
      logo: "🎯",
      tagline: "",
      category: "betting"
    },
    {
      name: "Savvy Mining",
      logo: "⚡",
      tagline: "",
      category: "mining"
    },
    {
      name: "ANC Mining",
      logo: "⛏️",
      tagline: "",
      category: "mining"
    },
    {
      name: "RippleCoin Mining",
      logo: "🪙",
      tagline: "MINING",
      category: "mining"
    },
    {
      name: "EthTransaction",
      logo: "💎",
      tagline: "",
      category: "service"
    }
  ];

  const miningPartners = [
    {
      name: "Savvy Mining",
      logo: "⚡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "AKN Mining",
      logo: "🏔️",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "RippleCoin Mining",
      logo: "🪙",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "EthTransaction",
      logo: "💎",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Sunny Mining",
      logo: "☀️",
      color: "from-yellow-300 to-orange-400"
    },
    {
      name: "BJ Mining",
      logo: "⚡",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Crypto Mining Firm",
      logo: "🏭",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "HashQ",
      logo: "🔗",
      color: "from-yellow-500 to-amber-600"
    },
    {
      name: "Rimining",
      logo: "💰",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Ofto Miner",
      logo: "⚙️",
      color: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Crypto Resources & Directory
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the most popular cryptocurrency resources
              </p>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 text-lg mb-6">
                  NewsBTC's Crypto Resources Directory Page is a comprehensive gateway to the world of cryptocurrency.
                </p>
                
                {isReadMoreOpen && (
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Our carefully curated directory features the most trusted and reliable cryptocurrency services, 
                      tools, and platforms in the industry. Whether you're a beginner looking to make your first 
                      crypto purchase or an experienced trader seeking advanced tools, our directory has everything 
                      you need.
                    </p>
                    <p>
                      From secure wallets and reputable exchanges to innovative DeFi protocols and NFT marketplaces, 
                      we've organized the crypto ecosystem into easy-to-navigate categories. Each listing is thoroughly 
                      researched and regularly updated to ensure you have access to the latest and most reliable services.
                    </p>
                    <p>
                      Our premium sponsors represent the cream of the crop in their respective categories, having 
                      undergone rigorous vetting processes to ensure they meet our high standards for security, 
                      reliability, and user experience.
                    </p>
                  </div>
                )}
                
                <button
                  onClick={toggleReadMore}
                  className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors mt-4"
                >
                  <span>{isReadMoreOpen ? 'Read less' : 'Read more'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isReadMoreOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Right Sidebar - Premium Sponsors */}
            <div className="w-full lg:w-80 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Premium Sponsors</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {premiumSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        {sponsor.logo}
                      </div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">
                        {sponsor.name}
                      </div>
                      {sponsor.tagline && (
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          {sponsor.tagline}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Casino Section with Image */}
      <div className="py-16 bg-gray-50 grid grid-rows-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Casino Image */}
            <div className="flex-shrink-0 lg:w-96">
              <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 shadow-2xl">
                {/* Casino Gaming Visual */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">🎰</div>
                      <div className="text-white text-sm font-semibold">Slots</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">🃏</div>
                      <div className="text-white text-sm font-semibold">Cards</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4 text-center mb-4">
                    <div className="text-2xl mb-1">🪙</div>
                    <div className="text-white font-bold">Bitcoin Casino</div>
                    <div className="text-yellow-100 text-xs">Instant Payouts</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/20 rounded p-2 text-center">
                      <div className="text-lg">🎲</div>
                    </div>
                    <div className="bg-white/20 rounded p-2 text-center">
                      <div className="text-lg">🎯</div>
                    </div>
                    <div className="bg-white/20 rounded p-2 text-center">
                      <div className="text-lg">🎪</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">💰</span>
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">🍀</span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Casinos
              </h2>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Unleash the potential of your crypto with our Casinos directory. Discover top online casinos that accept Bitcoin 
                and other cryptocurrencies, providing a secure and engaging gaming environment. From slots to table 
                games, these casinos offer a wide array of games to suit all preferences. Enjoy generous bonuses, fast 
                withdrawals, and the thrill of playing with crypto. Our directory is designed to help you find reputable and 
                entertaining casinos where you can experience the future of online gaming. Dive into the world of crypto 
                casinos and let the games begin!
              </p>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Explore Casinos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mining Partners Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mining Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted cryptocurrency mining services and cloud mining providers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {miningPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${partner.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{partner.logo}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default CryptoResourcesPage;