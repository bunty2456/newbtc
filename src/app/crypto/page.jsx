// pages/index.js
"use client";
import Head from 'next/head';
import { useState, useEffect } from 'react';

const categories = [
  {
    id: 'aave',
    name: 'Aave',
    gradient: 'from-purple-400 to-blue-400'
  },
  {
    id: 'academy',
    name: 'Academy',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'ai-tech',
    name: 'AI and Tech',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    id: 'ai-news',
    name: 'AI News',
    gradient: 'from-cyan-400 to-blue-400'
  },
  {
    id: 'algorand',
    name: 'Algorand',
    gradient: 'from-green-400 to-teal-500'
  },
  {
    id: 'ape',
    name: 'APE',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'aptos',
    name: 'Aptos (APT)',
    gradient: 'from-gray-400 to-gray-600'
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    id: 'axs',
    name: 'AXS',
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    id: 'bch',
    name: 'BCH',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    id: 'binance-coin',
    name: 'Binance Coin',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'binance-smart-chain',
    name: 'Binance Smart Chain',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'bitcoin-cash',
    name: 'Bitcoin Cash',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'bitcoin-sv',
    name: 'Bitcoin SV',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'bone',
    name: 'BONE',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    id: 'bonk',
    name: 'BONK',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'cardano',
    name: 'Cardano',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'celestia',
    name: 'Celestia',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'celsius',
    name: 'Celsius',
    gradient: 'from-blue-500 to-teal-500'
  },
  {
    id: 'chainlink',
    name: 'Chainlink',
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'chiliz',
    name: 'Chiliz (CHZ)',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    gradient: 'from-blue-500 to-cyan-500'
  }
];

const cryptoNews = [
  {
    id: 1,
    title: 'Bitcoin Reaches New All-Time High as Institutional Adoption Grows',
    excerpt: 'Major corporations continue to add Bitcoin to their balance sheets, driving unprecedented demand and price discovery.',
    category: 'Bitcoin',
    time: '2 hours ago',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Ethereum 2.0 Staking Rewards Exceed Expectations',
    excerpt: 'Validators are earning higher than projected returns as network participation stabilizes.',
    category: 'Ethereum',
    time: '4 hours ago',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'DeFi Protocol Launches Revolutionary Yield Farming Strategy',
    excerpt: 'New automated market maker promises to optimize yields through advanced algorithmic trading.',
    category: 'DeFi',
    time: '6 hours ago',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'NFT Marketplace Sees Record Trading Volume',
    excerpt: 'Digital art and collectibles market explodes with mainstream adoption and celebrity endorsements.',
    category: 'NFTs',
    time: '8 hours ago',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Central Bank Digital Currency Pilot Program Launches',
    excerpt: 'Government-backed digital currency testing begins in major metropolitan areas.',
    category: 'CBDC',
    time: '10 hours ago',
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'Layer 2 Solutions Show Promise for Scaling Blockchain',
    excerpt: 'New scaling solutions demonstrate significant improvements in transaction speed and cost reduction.',
    category: 'Technology',
    time: '12 hours ago',
    image: '/api/placeholder/400/250'
  }
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState(['dashboard']);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleViewChange = (view) => {
    setIsLoading(true);
    
    // Add to navigation history
    setNavigationHistory(prev => [...prev, view]);
    
    setTimeout(() => {
      setActiveView(view);
      setIsLoading(false);
      if (view === 'all-crypto') {
        setSidebarOpen(true);
      }
    }, 300);
  };

  const handleAllCrypto = () => {
    handleViewChange('all-crypto');
  };

  const handleDashboard = () => {
    handleViewChange('dashboard');
    setSidebarOpen(false);
    setNavigationHistory(['dashboard']);
  };

  // Enhanced back button handler
  const handleBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop(); // Remove current view
      const previousView = newHistory[newHistory.length - 1];
      
      setNavigationHistory(newHistory);
      setIsLoading(true);
      
      setTimeout(() => {
        setActiveView(previousView);
        setIsLoading(false);
        if (previousView === 'dashboard') {
          setSidebarOpen(false);
        }
      }, 300);
    }
  };

  const canGoBack = navigationHistory.length > 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>NewsBTC - Dashboard</title>
        <meta name="description" content="Latest cryptocurrency news and analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-30 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200">
                  NewsBTC
                </h1>
              </div>
              
              {/* Back Button in Navigation - Now shows for all views */}
              <button 
                onClick={handleBack}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium">Back</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleDashboard}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeView === 'dashboard' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Dashboard
              </button>
              <button 
                onClick={handleAllCrypto}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeView === 'all-crypto' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Crypto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb with Back Button - Now shows for all views */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 py-3 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-white">
            <button 
              onClick={handleBack}
              className="flex items-center space-x-1 hover:text-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1 transform hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">
                {activeView === 'dashboard' ? 'Back' : 'Back to Dashboard'}
              </span>
            </button>
            <span className="text-white/60 animate-pulse">›</span>
            <span className="text-sm font-medium">
              {activeView === 'all-crypto' ? 'All Crypto' : 'Dashboard'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
            <button 
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto h-full pb-16">
            <div className="px-4 py-6">
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 animate-slide-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 ${sidebarOpen ? 'lg:ml-0' : ''}`}>
          <div className="p-8">
            {isLoading && (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
            
            {!isLoading && activeView === 'dashboard' && (
              <div className="animate-fade-in">
                <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-down">
                  Dashboard
                </h1>
                
                {/* Description */}
                <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <p className="text-gray-700 leading-relaxed">
                    At NewsBTC, we understand the crucial role timely and accurate information 
                    plays for both investors and traders. Our commitment is to provide you with 
                    comprehensive, up-to-the-minute updates and in-depth analysis.
                  </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categories.map((category, index) => (
                    <div 
                      key={category.id} 
                      className="group cursor-pointer animate-fade-in-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`
                        relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
                        bg-gradient-to-r ${category.gradient}
                      `}>
                        <div className="h-32">
                          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                              <div className="w-6 h-6 bg-white rounded-full opacity-80 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                          <h3 className="text-white font-semibold text-lg group-hover:text-gray-200 transition-colors transform group-hover:translate-x-1 duration-300">
                            {category.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!isLoading && activeView === 'all-crypto' && (
              <div className="animate-fade-in">
                <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-down">
                  All Crypto News
                </h1>
                
                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {cryptoNews.map((news, index) => (
                    <div 
                      key={news.id} 
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x"></div>
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 relative z-10">
                          <div className="w-8 h-8 bg-white rounded-full opacity-80 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded animate-bounce">
                            {news.category}
                          </span>
                          <span className="text-gray-500 text-sm ml-2">{news.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {news.excerpt}
                        </p>
                        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-all duration-200 transform hover:translate-x-1">
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden animate-fade-in"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}