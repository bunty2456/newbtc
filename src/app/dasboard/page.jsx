"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X, Search, Home, TrendingUp, BookOpen, Gamepad2, Dice6, Users, Settings, Bell } from 'lucide-react';

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const newsItems = [
    { id: 'bitcoin-news', label: 'Bitcoin News (BTC)', icon: '₿', href: '/news/bitcoin' },
    { id: 'ethereum-news', label: 'Ethereum News (ETH)', icon: 'Ξ', href: '/news/ethereum' },
    { id: 'ripple-news', label: 'Ripple News (XRP)', icon: 'X', href: '/news/ripple' },
    { id: 'shiba-news', label: 'Shiba Inu News (SHIB)', icon: '🐕', href: '/news/shiba-inu' },
    { id: 'dogecoin-news', label: 'Dogecoin News (DOGE)', icon: 'D', href: '/news/dogecoin' },
    { id: 'cardano-news', label: 'Cardano News (ADA)', icon: 'A', href: '/news/cardano' },
  ];

  const priceItems = [
    { id: 'bitcoin-price', label: 'Bitcoin (BTC) Price', icon: '₿', href: '/prices/bitcoin' },
    { id: 'ethereum-price', label: 'Ethereum (ETH) Price', icon: 'Ξ', href: '/prices/ethereum' },
    { id: 'dogecoin-price', label: 'Dogecoin (DOGE) Price', icon: 'D', href: '/prices/dogecoin' },
    { id: 'ripple-price', label: 'Ripple (XRP) Price', icon: 'X', href: '/prices/ripple' },
    { id: 'cardano-price', label: 'Cardano (ADA) Price', icon: 'A', href: '/prices/cardano' },
    { id: 'solana-price', label: 'Solana (SOL) Price', icon: 'S', href: '/prices/solana' },
  ];

  const mainMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/dashboard' },
    { id: 'all-crypto', label: 'All Crypto', icon: TrendingUp, href: '/crypto' },
    { id: 'resources', label: 'Crypto Resources & Directory', icon: BookOpen, href: '/resources' },
    { id: 'play-games', label: 'Play Games', icon: Gamepad2, badge: 'Try', href: '/games' },
    { id: 'casinos', label: 'Casinos', icon: Dice6, badge: 'Try', href: '/casinos' },
    { id: 'community', label: 'Community', icon: Users, href: '/community' },
    { id: 'notifications', label: 'Notifications', icon: Bell, href: '/notifications' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
  ];

  // Function to check if a route is active
  const isActiveRoute = (href) => {
    return pathname === href;
  };

  // Function to get active page title based on pathname
  const getActivePageTitle = () => {
    const allItems = [...mainMenuItems, ...newsItems, ...priceItems];
    const activeItem = allItems.find(item => item.href === pathname);
    return activeItem ? activeItem.label : 'Dashboard';
  };

  const renderPageContent = () => {
    switch (pathname) {
      case '/dashboard':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-2">Welcome to NewsBTC Dashboard</h2>
              <p className="opacity-90">Stay updated with the latest cryptocurrency news and market trends</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-gray-800 mb-2">Market Overview</h3>
                <p className="text-gray-600">Track real-time crypto prices and market cap</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-gray-800 mb-2">Latest News</h3>
                <p className="text-gray-600">Breaking news and analysis from crypto world</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-gray-800 mb-2">Portfolio</h3>
                <p className="text-gray-600">Manage your crypto investments</p>
              </div>
            </div>
          </div>
        );
      case '/news/bitcoin':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-600 p-6 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-2">₿ Bitcoin News</h2>
              <p className="opacity-90">Latest Bitcoin developments and market analysis</p>
            </div>
            <div className="grid gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-800 mb-2">Bitcoin Reaches New ATH Following Institutional Adoption</h3>
                  <p className="text-gray-600 mb-3">Major corporations continue to add Bitcoin to their treasury reserves...</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>2 hours ago</span>
                    <span className="mx-2">•</span>
                    <span>Bitcoin News</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case '/prices/ethereum':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-2">Ξ Ethereum Price</h2>
              <p className="opacity-90">Real-time ETH price tracking and analysis</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-gray-800 mb-4">Current Price</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$3,847.92</div>
                <div className="text-green-600 text-sm">+2.45% (24h)</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-gray-800 mb-4">Market Cap</h3>
                <div className="text-xl font-bold text-gray-800 mb-2">$462.8B</div>
                <div className="text-gray-600 text-sm">24h Volume: $18.2B</div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-500 to-gray-700 p-6 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-2">Page Content</h2>
              <p className="opacity-90">This is the content for {getActivePageTitle()}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-800 mb-2">Coming Soon</h3>
              <p className="text-gray-600">This page is under development. Check back soon!</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-80' : 'w-16'} transition-all duration-300 bg-white shadow-lg border-r border-gray-200`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${!isOpen && 'justify-center'}`}>
              <Link href="/dashboard" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </Link>
              {isOpen && (
                <div>
                  <Link href="/dashboard">
                    <h1 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">NEWSBTC</h1>
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {/* Main Menu Items */}
          {mainMenuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all hover:bg-gray-100 ${
                isActiveRoute(item.href) ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon size={20} />
                {isOpen && <span className="font-medium">{item.label}</span>}
              </div>
              {isOpen && item.badge && (
                <span className={`px-2 py-1 text-xs rounded-full ${
                  item.badge === 'Try' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          {/* Cryptocurrency News Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('news')}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all hover:bg-gray-100 ${
                activeDropdown === 'news' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <BookOpen size={20} />
                {isOpen && <span className="font-medium">Cryptocurrency News</span>}
              </div>
              {isOpen && (
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'news' ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>
            {isOpen && activeDropdown === 'news' && (
              <div className="ml-4 mt-2 space-y-1">
                {newsItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all hover:bg-gray-100 ${
                      isActiveRoute(item.href) ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Crypto Prices Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('prices')}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all hover:bg-gray-100 ${
                activeDropdown === 'prices' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <TrendingUp size={20} />
                {isOpen && <span className="font-medium">Crypto Prices</span>}
              </div>
              {isOpen && (
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'prices' ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>
            {isOpen && activeDropdown === 'prices' && (
              <div className="ml-4 mt-2 space-y-1">
                {priceItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all hover:bg-gray-100 ${
                      isActiveRoute(item.href) ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">{getActivePageTitle()}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderPageContent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardSidebar;