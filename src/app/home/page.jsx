
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Zap, Coins, TrendingUp, Globe, Clock, Star, ChevronDown } from 'lucide-react';

const CryptoPlatform = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const toggleReadMore = () => setIsReadMoreOpen(!isReadMoreOpen);

  const newsCards = [
    {
      id: 1,
      title: "From traditional mining to smart contract mining, XRP Mining smart contract system completely changes the way of crypto mining",
      content: "As the cryptocurrency market continues to develop, traditional mining methods are facing problems of high energy consumption, expensive equipment, and complex operations. However, with the emergence of smart contract technology, a new mining model is gradually changing the entire industry landscape.",
      image: "",
      category: "XRP Mining",
      timeAgo: "2 hours ago",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "This Simple Deposit Trick Could Win You 100,000 FUN Instantly",
      content: "FUNToken is turning traditional deposits into dynamic, reward-driven experiences by giving users instant Wheel of Fortune spins for deposits of...",
      image: "",
      category: "Gaming",
      timeAgo: "15 hours ago",
      source: "PR Desk",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      id: 3,
      title: "UK-certified ETHRANSACTION Cloud Mining Launches Best Free Cloud Mining for BTC, DOGE, XRP and Other Popular Coins Enthusiasts",
      content: "LONDON, United Kingdom, June 30, 2025 (GLOBE NEWSWIRE) — Traditionally, cryptocurrency mining has been dominated by expensive hardware setups and high electricity costs.",
      image: "",
      category: "Cloud Mining",
      timeAgo: "1 day ago",
      gradient: "from-green-500 to-teal-400"
    }
  ];

  const cryptoLogos = ['BTC', 'ETH', 'XRP', 'DOGE', 'ADA', 'DOT'];

  const premiumSponsors = [
    { name: "BitStarz", logo: "🌟", tagline: "DREAM BIG. WIN BIGGER", category: "casino" },
    { name: "CryptoSlots", logo: "🎰", tagline: "", category: "casino" },
    { name: "Coins.Game", logo: "⚡", tagline: "", category: "game" },
    { name: "BC.Game", logo: "🛡️", tagline: "", category: "game" },
    { name: "SimpleFX", logo: "📈", tagline: "", category: "trading" },
    { name: "1xBit", logo: "🎯", tagline: "", category: "betting" },
    { name: "Savvy Mining", logo: "⚡", tagline: "", category: "mining" },
    { name: "ANC Mining", logo: "⛏️", tagline: "", category: "mining" },
    { name: "RippleCoin Mining", logo: "🪙", tagline: "MINING", category: "mining" },
    { name: "EthTransaction", logo: "💎", tagline: "", category: "service" }
  ];

  const editorsPick = [
    {
      image: "",
      title: "Bitcoin Slips Under 200-Day Moving Average – Will The Downtrend Continue?",
      author: "Ash Tiwari",
      timeAgo: "3 months ago",
    },
    {
      image: "",
      title: "Ethereum Risks Another 15% Correction After Fall Below $2,000 – What's Next For ETH?",
      author: "Rubmar Garcia",
      timeAgo: "3 weeks ago",
    },
    {
      image: "",
      title: "Bitcoin To Bottom Around $70,000? Arthur Hayes Says Correction 'Very Normal' In A Bull Market",
      author: "Ash Tiwari",
      timeAgo: "3 months ago",
    },
  ];

  const latestNews = [
    {
      image: "",
      title: "Solana Forms Bullish Flag On Daily Chart — Breakout Imminent?",
      description: "Solana is displaying signs of strength as it trades with a key chart pattern, which indicates that the altcoin is...",
      author: "Sandra White",
      timeAgo: "2 hours ago"
    },
    {
      image: "",
      title: "Analyst Reveals Rational Behind XRP Price Reaching $9.5 And $37.5",
      description: "Crypto analyst Egrag Crypto has provided a detailed breakdown of how the XRP price could reach between $9.5 and $37.5....",
      author: "Sandra White",
      timeAgo: "5 hours ago"
    },
    {
      image: "",
      title: "Wave 3 Ignites As XRP Breaks Structure — Analyst Says 'Fireworks Ahead'",
      description: "Hours after Ripple Labs said it would abandon its long-running appeal in its securities case with the US Securities and...",
      author: "Sandra White",
      timeAgo: "7 hours ago"
    },
    {
      image: "",
      title: "Can Cardano Lead In Bitcoin DeFi? Founder Says It Needs A Central Voice First",
      description: "Cardano is making moves to become a hub for Bitcoin DeFi. According to Cardano founder Charles Hoskinson, the network has...",
      author: "Sandra White",
      timeAgo: "1 day ago"
    }
  ];

  const relatedArticles = [
    {
      title: "Bitcoin Price Analysis: Key Levels to Watch",
      excerpt: "Technical indicators suggest Bitcoin may be preparing for its next major move...",
      date: "May 15, 2023",
      image: ""
    },
    {
      title: "Institutional Adoption of Bitcoin Reaches New Highs",
      excerpt: "Major financial institutions are increasing their Bitcoin holdings...",
      date: "May 12, 2023",
      image: ""
    },
    {
      title: "Bitcoin Halving 2024: What to Expect",
      excerpt: "The next Bitcoin halving event is approaching. Here's how it might affect the market...",
      date: "May 10, 2023",
      image: ""
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsCards.length) % newsCards.length);
  };

  return (
    <div className="min-h-screen text-white bg-[#0b2545]">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-bold">CryptoMiner Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-[#0466c8] transition-colors">Mining</a>
              <a href="#" className="hover:text-[#0466c8] transition-colors">News</a>
              <a href="#" className="hover:text-[#0466c8] transition-colors">Trading</a>
              <a href="#" className="hover:text-[#0466c8] transition-colors">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

     {/* Crypto Ticker */}
    <div className="bg-black/30 backdrop-blur-sm border-b border-white/10 py-2 overflow-hidden">
      <div className="flex animate-ticker">
        {cryptoLogos.map((crypto, index) => (
          <div key={`ticker-${crypto}-${index}`} className="flex items-center space-x-2 mx-8 whitespace-nowrap">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold">{crypto}</span>
            <span className="text-green-400 text-sm">+{(Math.random() * 10).toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>


      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Mining News Section */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r bg-white bg-clip-text text-transparent">
            Latest Crypto Mining News
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* News Cards Carousel */}
        <div className="relative overflow-hidden rounded-2xl mb-16 bg-[#13315c]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsCards.map((card) => (
              <div key={`news-card-${card.id}`} className="w-full flex-shrink-0">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${card.gradient} text-white`}>
                          {card.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {card.timeAgo}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {card.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <button className="px-6 py-3 bg-gradient-to-r bg-black rounded-lg font-semibold hover:bg-gray-950 transition-all duration-200 hover:scale-105">
                          Read More
                        </button>
                        {card.source && (
                          <span className="text-sm text-gray-400">{card.source}</span>
                        )}
                      </div>
                    </div>
                    <div className={`bg-gradient-to-br ${card.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="relative z-10 p-8 flex items-center justify-center h-full">
                        <div className="text-center">
                          {card.category === 'XRP Mining' && (
                            <div className="space-y-4">
                              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                <Zap className="w-10 h-10" />
                              </div>
                              <div className="grid grid-cols-3 gap-2 opacity-50">
                                {[...Array(9)].map((_, i) => (
                                  <div key={`xrp-grid-${i}`} className="w-8 h-8 bg-white/20 rounded"></div>
                                ))}
                              </div>
                            </div>
                          )}
                          {card.category === 'Gaming' && (
                            <div className="space-y-4">
                              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto relative">
                                <Star className="w-10 h-10" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#003f88] rounded-full flex items-center justify-center text-xs">
                                  !
                                </div>
                              </div>
                              <div className="text-4xl font-bold">100K</div>
                              <div className="text-sm opacity-80">FUN TOKENS</div>
                            </div>
                          )}


                         {card.category === 'Cloud Mining' && (
                          <div className="space-y-4">
                            {/* Crypto Icons Grid */}
                            <div className="grid grid-cols-2 gap-4">
                              {['BTC', 'DOGE', 'XRP', 'ETH'].map((crypto) => (
                                <div
                                  key={`cloud-mining-${crypto}`}
                                  className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-white"
                                >
                                  <span className="font-bold text-sm">{crypto}</span>
                                </div>
                              ))}
                            </div>

                            {/* Globe Icon */}
                            <div className="flex items-center justify-center">
                              <Globe className="w-8 h-8 text-white opacity-80" />
                            </div>
                          </div>
                        )}




                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {newsCards.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-[#13315c] hover:bg-[#134074] text-white p-5 rounded-lg transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <TrendingUp className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-semibold">Mining Revenue</h3>
            </div>
            <div className="text-3xl font-bold mb-1">$124,856</div>
            <div className="text-sm">+12.5% from last month</div>
          </div>
          <div className="bg-[#13315c] hover:bg-[#134074] text-white p-5 rounded-lg transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-semibold">Hash Rate</h3>
            </div>
            <div className="text-3xl font-bold mb-1">2.5 TH/s</div>
            <div className="text-sm">Optimal performance</div>
          </div>
          <div className="bg-[#13315c] hover:bg-[#134074] text-white p-5 rounded-lg transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <Coins className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-semibold">Active Miners</h3>
            </div>
            <div className="text-3xl font-bold mb-1">1,247</div>
            <div className="text-sm">Online worldwide</div>
          </div>
        </div>

        {/* Bitcoin News Section */}
        <div className="mt-24 bg-[#13315c] backdrop-blur-lg rounded-2xl border border-white/20 p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r bg-white bg-clip-text text-transparent">
              Bitcoin & Cryptocurrency News
            </h2>
          </div>

          {/* Main Story */}
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <div className="w-full h-[50vh] bg-gradient-to-br from-gray-800/50 to-black flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">₿</div>
                <h2 className="text-2xl font-bold">Bitcoin Hero Image</h2>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                The Bitcoin Story: From Whitepaper to Global Phenomenon
              </h2>
              <p className="text-sm text-gray-400 font-medium">
                Crypto Insights <span className="text-white">Today</span>
              </p>
            </div>
          </div>

          {/* Bitcoin Story Section */}
          <div className="mb-12">
            <article className="bg-white/5 rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Bitcoin Story</h2>
                <p className="text-gray-300 mb-4">
                  As the first-ever and most valuable cryptocurrency by market cap, Bitcoin continues to dominate headlines and shape the trajectory of the entire crypto market.
                </p>
                <p className="text-gray-300 mb-4">
                  First introduced in a whitepaper by 'Satoshi Nakamoto' in 2008, and officially released to the world in January 2009 as the very first decentralized cryptocurrency, Bitcoin was the first financial instrument of its kind to use cryptography to record and send transactions over the blockchain.
                </p>
                {expanded && (
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      The fact that a currency could be transacted peer-to-peer away from central banks and had a permanent and publicly accessible ledger (in the form of the blockchain), was groundbreaking at the time, and it comes as no surprise that this new form of currency would grow in popularity as it did.
                    </p>
                    <p className="text-gray-300">
                      Bitcoin's proof-of-work consensus mechanism ensures security and decentralization, with miners competing to validate transactions and create new blocks in exchange for BTC rewards.
                    </p>
                    <p className="text-gray-300">
                      Since its inception, Bitcoin has weathered multiple market cycles, regulatory challenges, and technological innovations, yet it remains the dominant force in the cryptocurrency space.
                    </p>
                  </div>
                )}
                <button
                  onClick={toggleExpand}
                  className="mt-4 flex items-center text-gray-400 font-medium transition-colors"
                >
                  {expanded ? 'Read less' : 'Read more'}
                  <ChevronDown
                    className={`ml-2 w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </article>
          </div>

          {/* Latest News Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Latest Bitcoin & Cryptocurrency News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestNews.map((news, index) => (
                <div key={`latest-news-${index}`} className="space-y-4 bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-xl"
                    priority={index === 0}
                  />
                  <h3 className="text-lg font-semibold leading-snug text-white">{news.title}</h3>
                  <p className="text-sm text-gray-300">{news.description}</p>
                  <p className="text-sm text-gray-400 font-medium">
                    {news.author} <span className="text-gray-500">{news.timeAgo}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Related Bitcoin Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <div key={`related-article-${index}`} className="bg-white/5 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:bg-white/10">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{article.excerpt}</p>
                    <p className="text-gray-500 text-xs">{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Press Releases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">More Press Releases</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={`press-release-${item}`} className="bg-white/5 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow hover:bg-white/10">
                  <div className="text-sm text-gray-400 mb-2">Tech News • 12 hours ago</div>
                  <h3 className="font-semibold text-white mb-2">
                    Cryptocurrency Market Shows Strong Recovery Signs
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Latest analysis indicates positive trends across major digital assets...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Read More Section with Sponsors */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 text-lg leading-relaxed text-gray-300">
              <p>
                NewsBTC's Bitcoin Resources Page is a comprehensive gateway to the world of Bitcoin and cryptocurrency.
              </p>
              {isReadMoreOpen && (
                <div className="mt-6 space-y-4">
                  <p>
                    Our carefully curated content features the most important Bitcoin news, analysis, and educational resources. Whether you're a beginner or an experienced trader, our coverage has everything you need to stay informed.
                  </p>
                  <p>
                    From technical analysis and price predictions to regulatory updates and adoption news, we cover all aspects of the Bitcoin ecosystem. Our content is updated regularly to ensure you have the latest information.
                  </p>
                  <p>
                    Our featured articles represent the most insightful Bitcoin coverage, selected through a rigorous editorial process to uphold standards of accuracy, transparency, and depth.
                  </p>
                </div>
              )}
              <button
                onClick={toggleReadMore}
                className="mt-6 inline-flex items-center text-gray-400 font-medium transition"
              >
                {isReadMoreOpen ? "Read less" : "Read more"}
                <ChevronDown
                  className={`ml-2 w-4 h-4 transition-transform ${isReadMoreOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>
            </div>

            <div className="bg-white/5 rounded-2xl shadow-lg p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-6">Premium Sponsors</h2>
              <div className="grid grid-cols-2 gap-4">
                {premiumSponsors.map((sponsor, index) => (
                  <div
                    key={`sponsor-${index}`}
                    className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        {sponsor.logo}
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">
                        {sponsor.name}
                      </div>
                      {sponsor.tagline && (
                        <div className="text-xs text-gray-400 uppercase tracking-wide">
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
      </main>
    </div>
  );
};

export default CryptoPlatform;