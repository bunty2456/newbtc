// pages/privacy.js or app/privacy/page.js (depending on your Next.js version)
"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function PrivacyCenter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && consent) {
      // Handle newsletter signup
      console.log('Newsletter signup:', { email, consent });
      // Add your newsletter signup logic here
      alert('Thank you for subscribing!');
      setEmail('');
      setConsent(false);
    } else {
      alert('Please enter your email and consent to data collection.');
    }
  };

  const sponsors = [
    { name: 'bitStarz', logo: '🌟', subtitle: 'DREAM BIG. WIN BIGGER' },
    { name: 'CRYPTOSLOTS', logo: '🎰', subtitle: '' },
    { name: 'COINS.GAME', logo: '⚡', subtitle: '' },
    { name: 'BC.GAME', logo: '🎮', subtitle: '' },
    { name: 'SIMPLEFX', logo: '📈', subtitle: '' },
    { name: '1xBit', logo: '1️⃣', subtitle: '' },
    { name: 'SAVVY MINING', logo: '⚡', subtitle: '' },
    { name: 'XRP Mining', logo: '💰', subtitle: '' },
    { name: 'RIPPLECOIN MINING', logo: '🪙', subtitle: '' },
    { name: 'ETHRANSACTION', logo: '💎', subtitle: '' },
    { name: 'Sunny Mining', logo: '☀️', subtitle: '' },
    { name: 'BJ MINING', logo: '⛏️', subtitle: '' },
    { name: 'CRYPTO MINING FIRM', logo: '🔧', subtitle: '' },
    { name: 'HASH', logo: '#️⃣', subtitle: 'Sign up and get $500 for free' },
    { name: 'RIMINING', logo: '🔄', subtitle: '' },
    { name: 'UFO Miner', logo: '🛸', subtitle: '' }
  ];

  return (
    <>
      <Head>
        <title>Privacy Center</title>
        <meta name="description" content="Privacy Center - Cookie Policy, Privacy Policy, Data Requests" />
      </Head>
      
      <div className="min-h-screen bg-[#0b2545]">
        {/* Navigation Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <nav className="text-sm text-gray-600">
                <span className="hover:text-gray-900 cursor-pointer">Home</span>
                <span className="mx-2">›</span>
                <span className="text-gray-400">Privacy Center</span>
              </nav>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Privacy Center Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-white mb-8">Privacy Center</h1>
              
              <div className="space-y-8">
                {/* Cookie Policy */}
                <div className="bg-[#13315c] hover:bg-[#134074] text-white rounded-lg shadow-sm border p-6 transition-colors duration-300 hover:text-black">

                  <h2 className="text-xl font-semibold  mb-2">Cookie Policy</h2>
                  <p className="text-gray-400">Read more about our Cookie Policy</p>
                </div>

                {/* Privacy Policy */}
                <div className="bg-[#13315c] hover:bg-[#134074] text-white rounded-lg shadow-sm border p-6 transition-colors duration-300 hover:text-black">

                  <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
                  <p className="text-gray-400">Read about our Privacy Policy here</p>
                </div>

                {/* Request Data */}
                <div className="bg-[#13315c] hover:bg-[#134074] text-white rounded-lg shadow-sm border p-6 transition-colors duration-300 hover:text-black">

                  <h2 className="text-xl font-semibol mb-2">Request Data</h2>
                  <p className="text-gray-400">Submit a request to get all your data stored</p>
                </div>

                {/* Forget Me */}
                <div className="bg-[#13315c] hover:bg-[#134074] text-white rounded-lg shadow-sm border p-6 transition-colors duration-300 hover:text-black">

                  <h2 className="text-xl font-semibold mb-2">Forget Me</h2>
                  <p className="text-gray-400">Submit a request to erase your private data</p>
                </div>
              </div>
            </div>



            {/* Sidebar */}
            <div className="space-y-8">
              {/* Premium Sponsors */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Premium Sponsors</h3>
                <div className="grid grid-cols-2 gap-4">
                  {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex flex-col items-center p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-2xl mb-1">{sponsor.logo}</div>
                      <div className="text-xs font-semibold text-center text-gray-800">{sponsor.name}</div>
                      {sponsor.subtitle && (
                        <div className="text-xs text-gray-500 text-center mt-1">{sponsor.subtitle}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Be the first to get the latest important crypto news & events to your inbox.
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:border-transparent"
                    required
                  />
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 text-white bg-black border-gray-300 rounded focus:ring-cyan-500"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to my data being collected and stored
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-4 border-2 bg-black text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}