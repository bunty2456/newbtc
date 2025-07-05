// pages/index.js
"use client";
import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'

export default function BitcoinNews() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const mainNews = [
    {
      id: 1,
      title: "Bitcoin Wave Count Predicts Price Surge To $120,000 — But $45,000 Support Critical",
      author: "Michael Thompson",
      time: "2 hours ago",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Bitcoin Forms Ascending Triangle Pattern — $85,000 Resistance Back In Focus?",
      author: "Sarah Davis",
      time: "4 hours ago",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Bitcoin Liquid Staking Hits New ATH With 2.1 Million BTC Locked — Will Price Follow?",
      author: "David Wilson",
      time: "6 hours ago",
      image: "/api/placeholder/600/400"
    }
  ]

  const featuredArticles = [
    {
      title: "Bitcoin Price Targets $150,000 As Analyst Calls It A 'Powder Keg'",
      description: "The Bitcoin price is flashing major upside signals as on-chain and market activity align toward a potential breakout to the...",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Bitcoin Forms Rising Wedge Pattern — $65,000 Support Back In Focus?",
      description: "Bitcoin is trading above the $70,000 mark but continues to struggle with strong resistance near $75,000, a key level that...",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Bitcoin Liquid Staking Hits New ATH With 2.1 Million BTC Locked — Will Price Follow?",
      description: "Bitcoin (BTC) is up more than 12% over the past 48 hours, climbing from around $65,000 on July 1 to...",
      image: "/api/placeholder/300/200"
    }
  ]

  const sidebarNews = [
    {
      title: "Ethereum Price Continues To Struggle Below $2,500 — Levels To Watch",
      author: "Alex Johnson",
      time: "1 hour ago",
      image: "/api/placeholder/100/100"
    },
    {
      title: "Solana Tests Rising Channel Support — Breakdown Could Send Price To $85.50 Level",
      author: "Maria Garcia",
      time: "3 hours ago",
      image: "/api/placeholder/100/100"
    },
    {
      title: "Dogecoin Near Historic Weekly Close Despite Drop — Analyst Warns Of Volatile Weekend",
      author: "James Chen",
      time: "5 hours ago",
      image: "/api/placeholder/100/100"
    }
  ]

  const recentNews = [
    {
      title: "Bitcoin In Demand: ETF Inflow Streak Extends To 9 Weeks",
      description: "Institutional demand for Bitcoin appears strong as spot exchange-traded funds (ETFs) have recorded ninth-straight week of inflows. US Bitcoin Spot...",
      author: "Robert Lee",
      time: "2 days ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Bitcoin Indecision Masks A Bullish Setup — Here's Why Altcoins Hold The Key",
      description: "In his latest update on X, highlighted Bitcoin currently has strong support at $70,000, but one analyst has pointed out that if the level fails, the next...",
      author: "Emma White",
      time: "3 days ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "BitMine Stock Soars 800% After $400 Million Raise For Bitcoin Treasury",
      description: "Tom Lee, the market strategist known for his insightful predictions on Bitcoin (BTC) and broader crypto prices, has taken on...",
      author: "Kevin Brown",
      time: "3 days ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Bitcoin Just Got Its MicroStrategy —Tom Lee Bets On Soaring BTC Price",
      description: "Nearly three years after the Merge formally switched Bitcoin to proof-of-stake on 15 September 2022, a publicly listed Bitcoin miner...",
      author: "Lisa Anderson",
      time: "4 days ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Bitcoin At Risk? If $70,000 Cracks, $58,000 May Be Coming",
      description: "Bitcoin currently has strong support at $70,000, but one analyst has pointed out that if the level fails, the next...",
      author: "Tom Rodriguez",
      time: "4 days ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Strong Bitcoin Accumulation Detected: Long-Term Holders Buying Heavy During Consolidation",
      description: "Bitcoin is trading above $72,000 after enduring several days of volatility and uncertainty. The price has managed to stabilize despite...",
      author: "Anna Kim",
      time: "5 days ago",
      image: "/api/placeholder/400/250"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Bitcoin (BTC) News Today - Latest Bitcoin News & Price Analysis</title>
        <meta name="description" content="Latest Bitcoin (BTC) news today, we cover price forecasts and today's updates. We keep you connected with what happens now." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-orange-500">₿NEWSBTC</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Reason to trust</span>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-green-400">✓</span>
                <span>Strict editorial policy that focuses on accuracy, relevance, and impartiality</span>
              </div>
              <div className="flex items-center space-x-2 text-sm mt-1">
                <span className="text-green-400">✓</span>
                <span>Created by industry experts and meticulously reviewed</span>
              </div>
              <div className="flex items-center space-x-2 text-sm mt-1">
                <span className="text-green-400">✓</span>
                <span>The highest standards in reporting and publishing</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Bitcoin (BTC) news today</h2>
          <p className="text-gray-400 mb-6">Latest Bitcoin (BTC) news today, we cover price forecasts and today's updates. We keep you connected with what happens now.</p>
          
          {/* Featured Article */}
          <div className="relative bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg overflow-hidden mb-6">
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative p-8 flex items-center">
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-4 leading-tight">
                  Bitcoin Wave Count Predicts Price Surge To $120,000 — But $45,000 Support Critical
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="text-cyan-400">Michael Thompson</span>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="ml-8">
                <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center text-6xl">
                  ₿
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentSlide(Math.min(2, currentSlide + 1))}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            →
          </button>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredArticles.map((article, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center">
                <span className="text-6xl">₿</span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 leading-tight">{article.title}</h4>
                <p className="text-gray-400 text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Articles */}
          <div className="lg:col-span-2 space-y-6">
            {recentNews.map((article, index) => (
              <article key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-48 bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center">
                      <span className="text-4xl">₿</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2 leading-tight">{article.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{article.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="text-cyan-400">{article.author}</span>
                      <span>{article.time}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top Bitcoin News */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-4">Top Bitcoin News</h3>
              <div className="space-y-4">
                {sidebarNews.map((item, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">₿</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm leading-tight mb-1">{item.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <span className="text-cyan-400">{item.author}</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Sponsors */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-4">Premium Sponsors</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-orange-500 font-bold">bit★Starz</div>
                  <div className="text-xs text-gray-400">DREAM BIG. WIN BIGGER</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-red-500 font-bold">CRYPTO$LOTS</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-yellow-500 font-bold">COINS⚡GAME</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-green-500 font-bold">BC.GAME</div>
                </div>
              </div>
            </div>

            {/* Mining Sponsors */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700 rounded p-2 text-center">
                  <div className="text-yellow-500">SAVVY MINING</div>
                </div>
                <div className="bg-gray-700 rounded p-2 text-center">
                  <div className="text-orange-500">Paladin Mining</div>
                </div>
                <div className="bg-gray-700 rounded p-2 text-center">
                  <div className="text-blue-500">ARP Mining</div>
                </div>
                <div className="bg-gray-700 rounded p-2 text-center">
                  <div className="text-orange-500">RIPPLECOIN MINING</div>
                </div>
                <div className="bg-gray-700 rounded p-2 text-center">
                  <div className="text-yellow-500">Sunny Mining</div>
                </div>
                <div className="bg-gray-700 rounded p-2 text-center">
                  <div className="text-blue-500">BJMINING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

