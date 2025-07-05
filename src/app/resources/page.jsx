"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Coins, TrendingUp, Globe, Clock, Star, ChevronDown, Gamepad2, BookOpen, Building2, Newspaper } from 'lucide-react';
import Head from 'next/head';

const CryptoPlatform = () => {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [hoveredSponsor, setHoveredSponsor] = useState(null);
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState(['dashboard']);

  // Data
  const newsCards = [
    {
      id: 1,
      title: "From traditional mining to smart contract mining, XRP Mining smart contract system completely changes the way of crypto mining",
      content: "As the cryptocurrency market continues to develop, traditional mining methods are facing problems of high energy consumption, expensive equipment, and complex operations. However, with the emergence of smart contract technology, a new mining model is gradually changing the entire industry landscape.",
      image: "/api/placeholder/400/200",
      category: "XRP Mining",
      timeAgo: "2 hours ago",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "This Simple Deposit Trick Could Win You 100,000 FUN Instantly",
      content: "FUNToken is turning traditional deposits into dynamic, reward-driven experiences by giving users instant Wheel of Fortune spins for deposits of...",
      image: "/api/placeholder/400/200",
      category: "Gaming",
      timeAgo: "15 hours ago",
      source: "PR Desk",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      id: 3,
      title: "UK-certified ETHRANSACTION Cloud Mining Launches Best Free Cloud Mining for BTC, DOGE, XRP and Other Popular Coins Enthusiasts",
      content: "LONDON, United Kingdom, June 30, 2025 (GLOBE NEWSWIRE) — Traditionally, cryptocurrency mining has been dominated by expensive hardware setups and high electricity costs.",
      image: "/api/placeholder/400/200",
      category: "Cloud Mining",
      timeAgo: "1 day ago",
      gradient: "from-green-500 to-teal-400"
    }
  ];

  const cryptoLogos = ['BTC', 'ETH', 'XRP', 'DOGE', 'ADA', 'DOT'];

  const premiumSponsors = [
    { name: "BitStarz", logo: "🌟", tagline: "DREAM BIG. WIN BIGGER", category: "casino", color: "from-purple-500 to-pink-500" },
    { name: "CryptoSlots", logo: "🎰", tagline: "Premium Gaming", category: "casino", color: "from-red-500 to-orange-500" },
    { name: "Coins.Game", logo: "⚡", tagline: "Play & Win", category: "game", color: "from-yellow-500 to-orange-500" },
    { name: "BC.Game", logo: "🛡️", tagline: "Blockchain Gaming", category: "game", color: "from-green-500 to-blue-500" },
    { name: "SimpleFX", logo: "📈", tagline: "Simple Trading", category: "trading", color: "from-blue-500 to-purple-500" },
    { name: "1xBit", logo: "🎯", tagline: "Sports & Casino", category: "betting", color: "from-indigo-500 to-purple-500" },
    { name: "Savvy Mining", logo: "⚡", tagline: "Smart Mining", category: "mining", color: "from-yellow-400 to-yellow-600" },
    { name: "ANC Mining", logo: "⛏️", tagline: "Protected Mining", category: "mining", color: "from-gray-600 to-gray-800" },
    { name: "RippleCoin Mining", logo: "🪙", tagline: "MINING", category: "mining", color: "from-blue-400 to-blue-600" },
    { name: "EthTransaction", logo: "💎", tagline: "", category: "service", color: "from-orange-400 to-orange-600" }
  ];

  const categories = [
    { id: 'bitcoin', name: 'Bitcoin', gradient: 'from-orange-500 to-yellow-500' },
    { id: 'ethereum', name: 'Ethereum', gradient: 'from-purple-500 to-blue-500' },
    { id: 'mining', name: 'Mining', gradient: 'from-blue-500 to-cyan-400' },
    { id: 'defi', name: 'DeFi', gradient: 'from-green-500 to-teal-500' },
    { id: 'nft', name: 'NFTs', gradient: 'from-pink-500 to-purple-500' },
    { id: 'exchange', name: 'Exchanges', gradient: 'from-yellow-500 to-orange-500' },
    { id: 'wallet', name: 'Wallets', gradient: 'from-blue-400 to-indigo-500' },
    { id: 'regulation', name: 'Regulation', gradient: 'from-gray-500 to-gray-700' }
  ];

  const cryptoNews = [
    {
      id: 1,
      title: "Bitcoin Reaches New All-Time High as Institutional Adoption Grows",
      excerpt: "Major corporations continue to add Bitcoin to their balance sheets, driving unprecedented demand and price discovery.",
      category: "Bitcoin",
      time: "2 hours ago",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Ethereum 2.0 Staking Rewards Exceed Expectations",
      excerpt: "Validators are earning higher than projected returns as network participation stabilizes.",
      category: "Ethereum",
      time: "4 hours ago",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "DeFi Protocol Launches Revolutionary Yield Farming Strategy",
      excerpt: "New automated market maker promises to optimize yields through advanced algorithmic trading.",
      category: "DeFi",
      time: "6 hours ago",
      image: "/api/placeholder/400/250"
    }
  ];

  // Animation effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Navigation functions
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleExpand = () => setExpanded(!expanded);
  const toggleReadMore = () => setIsReadMoreOpen(!isReadMoreOpen);

  const handleViewChange = (view) => {
    setIsLoading(true);
    setNavigationHistory(prev => [...prev, view]);
    
    setTimeout(() => {
      setActiveView(view);
      setIsLoading(false);
      if (view === 'all-crypto') setSidebarOpen(true);
    }, 300);
  };

  const handleDashboard = () => {
    setActiveView('dashboard');
    setSidebarOpen(false);
    setNavigationHistory(['dashboard']);
  };

  const handleBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop();
      const previousView = newHistory[newHistory.length - 1];
      
      setNavigationHistory(newHistory);
      setIsLoading(true);
      
      setTimeout(() => {
        setActiveView(previousView);
        setIsLoading(false);
        if (previousView === 'dashboard') setSidebarOpen(false);
      }, 300);
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % newsCards.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + newsCards.length) % newsCards.length);

  const getAnimationClass = (elementId) => {
    return animatedElements.has(elementId) ? 'animate-fade-in-up' : 'opacity-0 translate-y-8';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <Head>
        <title>CryptoMiner Pro - Comprehensive Cryptocurrency Platform</title>
        <meta name="description" content="Your complete source for cryptocurrency news, mining, and market analysis" />
      </Head>

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h1 className="text-xl font-bold">CryptoMiner Pro</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button 
                  onClick={handleDashboard}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeView === 'dashboard' ? 'bg-blue-600 text-white shadow-md' : 'hover:text-cyan-400'}`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => handleViewChange('all-crypto')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeView === 'all-crypto' ? 'bg-blue-600 text-white shadow-md' : 'hover:text-cyan-400'}`}
                >
                  All Crypto
                </button>
                <a href="#" className="hover:text-cyan-400 transition-colors">Mining</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">News</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Trading</a>
              </nav>
              <button 
                onClick={toggleSidebar}
                className="md:hidden p-2 rounded-md hover:bg-white/10 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Crypto Ticker */}
        <div className="bg-black/30 backdrop-blur-sm border-b border-white/10 py-2 overflow-hidden">
          <div className="flex animate-pulse">
            {cryptoLogos.map((crypto, index) => (
              <div key={index} className="flex items-center space-x-2 mx-8 whitespace-nowrap">
                <Coins className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold">{crypto}</span>
                <span className="text-green-400 text-sm">+{(Math.random() * 10).toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        {navigationHistory.length > 1 && (
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 py-3">
            <div className="container mx-auto px-6">
              <div className="flex items-center space-x-2 text-white">
                <button 
                  onClick={handleBack}
                  className="flex items-center space-x-1 hover:text-gray-200 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium">Back</span>
                </button>
                <span className="text-white/60">›</span>
                <span className="text-sm font-medium">
                  {activeView === 'all-crypto' ? 'All Crypto' : 'Dashboard'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-40 w-64 bg-gray-900/95 backdrop-blur-lg border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button 
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto h-full py-4">
            <div className="px-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 hover:translate-x-2 ${activeView === category.id ? 'bg-white/10 font-medium' : ''}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8 lg:ml-64">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
            </div>
          ) : (
            <>
              {activeView === 'dashboard' && (
                <div className="space-y-12">
                  {/* Mining News Section */}
                  <section>
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Latest Crypto Mining News
                      </h2>
                      <div className="flex space-x-2">
                        <button 
                          onClick={prevSlide}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* News Cards Carousel */}
                    <div className="relative overflow-hidden rounded-2xl mb-8">
                      <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {newsCards.map((card) => (
                          <div key={card.id} className="w-full flex-shrink-0">
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                              <div className="grid md:grid-cols-2 gap-0">
                                {/* Content */}
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
                                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover:scale-105">
                                      Read More
                                    </button>
                                    {card.source && (
                                      <span className="text-sm text-gray-400">{card.source}</span>
                                    )}
                                  </div>
                                </div>

                                {/* Visual */}
                                <div className={`bg-gradient-to-br ${card.gradient} relative overflow-hidden`}>
                                  <div className="absolute inset-0 bg-black/20"></div>
                                  <div className="relative z-10 p-8 flex items-center justify-center h-full">
                                    <div className="text-center">
                                      {card.category === 'XRP Mining' && (
                                        <div className="space-y-4">
                                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                            <Zap className="w-10 h-10" />
                                          </div>
                                          <div className="grid grid-cols-3 gap-2 opacity-50">
                                            {[...Array(9)].map((_, i) => (
                                              <div key={i} className="w-8 h-8 bg-white/20 rounded"></div>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                      {card.category === 'Gaming' && (
                                        <div className="space-y-4">
                                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto relative">
                                            <Star className="w-10 h-10" />
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-xs">
                                              !
                                            </div>
                                          </div>
                                          <div className="text-4xl font-bold">100K</div>
                                          <div className="text-sm opacity-80">FUN TOKENS</div>
                                        </div>
                                      )}
                                      {card.category === 'Cloud Mining' && (
                                        <div className="space-y-4">
                                          <div className="grid grid-cols-2 gap-2">
                                            {['BTC', 'DOGE', 'XRP', 'ETH'].map((crypto) => (
                                              <div key={crypto} className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                                                <span className="font-bold text-sm">{crypto}</span>
                                              </div>
                                            ))}
                                          </div>
                                          <div className="flex items-center justify-center">
                                            <Globe className="w-8 h-8" />
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

                    {/* Slide Indicators */}
                    <div className="flex justify-center space-x-2 mt-4">
                      {newsCards.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            currentSlide === index 
                              ? 'bg-cyan-400 w-8' 
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </section>

                  {/* Stats Section */}
                  <section className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl border border-green-500/30 p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <TrendingUp className="w-8 h-8 text-green-400" />
                        <h3 className="text-xl font-semibold">Mining Revenue</h3>
                      </div>
                      <div className="text-3xl font-bold text-green-400 mb-1">$124,856</div>
                      <div className="text-sm text-gray-400">+12.5% from last month</div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl border border-blue-500/30 p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <Zap className="w-8 h-8 text-blue-400" />
                        <h3 className="text-xl font-semibold">Hash Rate</h3>
                      </div>
                      <div className="text-3xl font-bold text-blue-400 mb-1">2.5 TH/s</div>
                      <div className="text-sm text-gray-400">Optimal performance</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl border border-purple-500/30 p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <Coins className="w-8 h-8 text-purple-400" />
                        <h3 className="text-xl font-semibold">Active Miners</h3>
                      </div>
                      <div className="text-3xl font-bold text-purple-400 mb-1">1,247</div>
                      <div className="text-sm text-gray-400">Online worldwide</div>
                    </div>
                  </section>

                  {/* Categories Section */}
                  <section>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                      Explore Categories
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {categories.map((category) => (
                        <div 
                          key={category.id}
                          className={`bg-gradient-to-r ${category.gradient} rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                        >
                          <h3 className="text-xl font-bold text-white">{category.name}</h3>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {activeView === 'all-crypto' && (
                <div className="space-y-8">
                  <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    All Crypto News
                  </h1>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cryptoNews.map((news) => (
                      <div 
                        key={news.id}
                        className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                          <div className="relative z-10 text-center">
                            <div className="text-4xl mb-2">📰</div>
                            <h3 className="text-xl font-bold">{news.category}</h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded">
                              {news.time}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                          <p className="text-gray-300 mb-4">{news.excerpt}</p>
                          <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            Read More →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Premium Sponsors */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      Premium Sponsors
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {premiumSponsors.map((sponsor, index) => (
                        <div
                          key={sponsor.name}
                          className={`bg-gradient-to-r ${sponsor.color} p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105`}
                          onMouseEnter={() => setHoveredSponsor(index)}
                          onMouseLeave={() => setHoveredSponsor(null)}
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-2">{sponsor.logo}</div>
                            <div className="text-sm font-bold text-white truncate">
                              {sponsor.name}
                            </div>
                            <div className="text-xs text-white/80 mt-1">
                              {sponsor.tagline}
                            </div>
                          </div>
                          
                          {hoveredSponsor === index && (
                            <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-sm">Click to Visit</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CryptoPlatform;