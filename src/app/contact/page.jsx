"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    message: '',
    consent: false,
    captcha: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <Head>
        <title>Contact - newsBTC</title>
        <meta name="description" content="Get in touch with newsBTC" />
      </Head>

      <div className="min-h-screen bg-[#0b2545]">
        {/* Navigation Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <nav className="text-sm text-gray-500">
                <span>Home</span>
                <span className="mx-2">›</span>
                <span>Contact</span>
              </nav>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
                
                <p className="text-gray-600 mb-4">
                  Have feedback? Questions? Cool information? Get in touch with newsBTC.
                </p>
                
                <p className="text-gray-600 mb-8">
                  We are happy to read about your projects, so don't be shy about sending them along.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border bg-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border bg-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border bg-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border bg-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a reason</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="press">Press Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border bg-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="captcha"
                      checked={formData.captcha}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-700">I'm not a robot</span>
                    <div className="text-xs text-gray-500">
                      <div>reCAPTCHA</div>
                      <div>Privacy - Terms</div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I consent to my submitted data being collected and stored
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-[#13315c] hover:bg-[#134074] text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 hover:text-black"
                  >
                    
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Premium Sponsors Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Premium Sponsors</h2>
                
                <div className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-sm font-semibold">bit⭐Starz</span>
                    </div>
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-sm font-semibold text-red-500">CRYPTOSLOTS</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-sm font-semibold">COINS⚡GAME</span>
                    </div>
                    <div className="flex items-center justify-center p-3 border rounded-lg bg-green-500">
                      <span className="text-sm font-semibold text-white">BC.GAME</span>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-sm font-semibold">SIMPLEFX</span>
                    </div>
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-sm font-semibold">1xBit</span>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold text-yellow-600">SAVVY MINING</span>
                    </div>
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold text-yellow-600">XRP Mining</span>
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold text-orange-600">RIPPLECOIN MINING</span>
                    </div>
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold text-green-600">ETHRANSACTION</span>
                    </div>
                  </div>

                  {/* Row 6 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold text-yellow-600">Sunny Mining</span>
                    </div>
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold text-blue-600">BJMINING</span>
                    </div>
                  </div>

                  {/* Row 7 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold text-orange-600">CRYPTO MINING FIRM</span>
                    </div>
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold">HASHIT</span>
                    </div>
                  </div>

                  {/* Row 8 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-3 border rounded-lg bg-yellow-600">
                      <span className="text-xs font-semibold text-white">RIMINING</span>
                    </div>
                    <div className="flex items-center justify-center p-3 border rounded-lg">
                      <span className="text-xs font-semibold text-yellow-600">UPTO Miner</span>
                    </div>
                  </div>
                </div>

                {/* Ad Banners */}
                <div className="mt-8 space-y-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-4 text-white">
                    <div className="text-lg font-bold">This One Might Do More</div>
                    <div className="text-sm mt-2">FUTURE PEPE</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-4 text-white">
                    <div className="text-lg font-bold">BC.GAME</div>
                    <div className="text-sm mt-2">GET 5 BTC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}