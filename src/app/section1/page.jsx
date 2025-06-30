// app/bitcoin/page.js
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const BitcoinPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const toggleReadMore = () => setIsReadMoreOpen(!isReadMoreOpen);

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
      image: "/editors/bitcoin1.jpg",
      title: "Bitcoin Slips Under 200-Day Moving Average – Will The Downtrend Continue?",
      author: "Ash Tiwari",
      timeAgo: "3 months ago",
    },
    {
      image: "/editors/ethereum.jpg",
      title: "Ethereum Risks Another 15% Correction After Fall Below $2,000 – What's Next For ETH?",
      author: "Rubmar Garcia",
      timeAgo: "3 weeks ago",
    },
    {
      image: "/editors/bitcoin2.jpg",
      title: "Bitcoin To Bottom Around $70,000? Arthur Hayes Says Correction 'Very Normal' In A Bull Market",
      author: "Ash Tiwari",
      timeAgo: "3 months ago",
    },
  ];

  const latestNews = [
    {
      image: "/editors/solana.jpg",
      title: "Solana Forms Bullish Flag On Daily Chart — Breakout Imminent?",
      description: "Solana is displaying signs of strength as it trades with a key chart pattern, which indicates that the altcoin is...",
      author: "Sandra White",
      timeAgo: "2 hours ago"
    },
    {
      image: "/editors/xrp2.jpg",
      title: "Analyst Reveals Rational Behind XRP Price Reaching $9.5 And $37.5",
      description: "Crypto analyst Egrag Crypto has provided a detailed breakdown of how the XRP price could reach between $9.5 and $37.5....",
      author: "Sandra White",
      timeAgo: "5 hours ago"
    },
    {
      image: "/editors/xrp3.jpg",
      title: "Wave 3 Ignites As XRP Breaks Structure — Analyst Says 'Fireworks Ahead'",
      description: "Hours after Ripple Labs said it would abandon its long-running appeal in its securities case with the US Securities and...",
      author: "Sandra White",
      timeAgo: "7 hours ago"
    },
    {
      image: "/editors/cardano.jpg",
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
      image: "/bitcoin-news-1.jpg"
    },
    {
      title: "Institutional Adoption of Bitcoin Reaches New Highs",
      excerpt: "Major financial institutions are increasing their Bitcoin holdings...",
      date: "May 12, 2023",
      image: "/bitcoin-news-2.jpg"
    },
    {
      title: "Bitcoin Halving 2024: What to Expect",
      excerpt: "The next Bitcoin halving event is approaching. Here's how it might affect the market...",
      date: "May 10, 2023",
      image: "/bitcoin-news-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Story */}
        <div className="md:col-span-2">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/bitcoin-hero.jpg"
              alt="Bitcoin News"
              width={1200}
              height={600}
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                The Bitcoin Story: From Whitepaper to Global Phenomenon
              </h2>
              <p className="text-sm text-orange-400 font-medium">
                Crypto Insights <span className="text-white">Today</span>
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar - Editors Pick */}
        <aside className="space-y-8">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Editors Pick</h3>
          <div className="space-y-6">
            {editorsPick.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold leading-snug text-gray-900 hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="text-orange-600 font-medium">{item.author}</span> {item.timeAgo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Bitcoin Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Bitcoin Story</h2>
            
            <p className="text-gray-700 mb-4">
              As the first-ever and most valuable cryptocurrency by market cap, Bitcoin continues to dominate headlines and shape the trajectory of the entire crypto market.
            </p>

            <p className="text-gray-700 mb-4">
              First introduced in a whitepaper by 'Satoshi Nakamoto' in 2008, and officially released to the world in January 2009 as the very first decentralized cryptocurrency, Bitcoin was the first financial instrument of its kind to use cryptography to record and send transactions over the blockchain.
            </p>

            {expanded && (
              <div className="space-y-4">
                <p className="text-gray-700">
                  The fact that a currency could be transacted peer-to-peer away from central banks and had a permanent and publicly accessible ledger (in the form of the blockchain), was groundbreaking at the time, and it comes as no surprise that this new form of currency would grow in popularity as it did.
                </p>
                <p className="text-gray-700">
                  Bitcoin's proof-of-work consensus mechanism ensures security and decentralization, with miners competing to validate transactions and create new blocks in exchange for BTC rewards.
                </p>
                <p className="text-gray-700">
                  Since its inception, Bitcoin has weathered multiple market cycles, regulatory challenges, and technological innovations, yet it remains the dominant force in the cryptocurrency space.
                </p>
              </div>
            )}

            <button
              onClick={toggleExpand}
              className="mt-4 flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Latest Bitcoin & Cryptocurrency News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestNews.map((news, index) => (
            <div key={index} className="space-y-4">
              <Image
                src={news.image}
                alt={news.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="text-lg font-semibold leading-snug">{news.title}</h3>
              <p className="text-sm text-gray-600">{news.description}</p>
              <p className="text-sm text-orange-600 font-medium">{news.author} <span className="text-gray-500">{news.timeAgo}</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Related Bitcoin Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                <p className="text-gray-500 text-xs">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Read More Section */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Read More Content */}
        <div className="lg:col-span-2 text-lg leading-relaxed text-gray-700">
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
            className="mt-6 inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition"
          >
            {isReadMoreOpen ? "Read less" : "Read more"}
            <ChevronDown
              className={`ml-2 w-4 h-4 transition-transform ${isReadMoreOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>

        {/* Sponsors Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
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
  );
};

export default BitcoinPage;