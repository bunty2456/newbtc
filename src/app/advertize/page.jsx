"use client";

import React, { useState } from 'react';
import { Download, FileText, ChevronDown } from 'lucide-react';

const AdvertisingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    advertisementRequest: '',
    additionalNote: '',
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
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-[#0b2545]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Advertising Header */}
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl font-bold text-white mb-8">
                Advertising
              </h1>
              
              <h2 className="text-2xl font-semibold text-gray-300 mb-6">
                Want to Know More About Advertising On NewsBTC
              </h2>
              
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className="animate-slide-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                  Over the years, NewsBTC has established itself as a leading news resource in the 
                  cryptocurrency industry with a global reach.
                </p>
                
                <p className="animate-slide-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                  The platform boasts of captive readership from various sections of the industry and 
                  also a huge interest in advertising options among the cryptocurrency businesses. 
                  In addition to regular crypto-businesses and projects, the publication has also run 
                  campaigns to play a pivotal role in many successful ICOs and crowdsales.
                </p>
                
                <p className="animate-slide-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                  To give a conservative glimpse of the publication's readership, NewsBTC attracts 
                  over <span className="font-semibold text-blue-600">1.5 million visitors monthly</span> and <span className="font-semibold text-blue-600">3 million sessions</span>.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 animate-slide-up opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                  <p className="bg-[#13315c] hover:bg-[#134074] text-white p-5 rounded-lg transition-colors duration-300 hover:text-black">

                    Interested in advertising on NewsBTC? Just drop an email to{' '}
                    <a href="mailto:contact@newsbtc.com" className="text-blue-600 hover:text-blue-800 font-medium">
                      contact@newsbtc.com
                    </a>{' '}
                    for more information and any additional clarification if required.
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 animate-slide-up opacity-0" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                  <p className="bg-[#13315c] hover:bg-[#134074] text-white p-5 rounded-lg transition-colors duration-300 hover:text-black">
                    Do note: For safety and security, ensure payments are sent only to official NewsBTC 
                    email addresses (example@newsbtc.com).
                  </p>
                </div>
              </div>
            </div>

            

            {/* Media Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up opacity-0" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
              <h3 className="text-2xl font-bold text-black mb-6">Media Contact Form</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border bg-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border bg-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Advertisement Request
                  </label>
                  <div className="relative">
                    <select
                      name="advertisementRequest"
                      value={formData.advertisementRequest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none bg-black hover:border-blue-400"
                    >
                      <option value="">Please Choose</option>
                      <option value="banner">Banner Advertisement</option>
                      <option value="sponsored">Sponsored Content</option>
                      <option value="newsletter">Newsletter Sponsorship</option>
                      <option value="social">Social Media Promotion</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Note (If Any)
                  </label>
                  <textarea
                    name="additionalNote"
                    value={formData.additionalNote}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border bg-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-vertical hover:border-blue-400"
                    placeholder="Please provide any additional details about your advertising requirements..."
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="captcha"
                      checked={formData.captcha}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 transition-colors"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      I'm not a robot (reCAPTCHA simulation)
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 transition-colors"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      I consent to my submitted data being collected and stored
                    </label>
                  </div>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="bg-[#13315c] hover:bg-[#134074] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 transform hover:text-black hover:shadow-lg active:scale-95"
                >

                  
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Download Media Kit */}
              <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 rounded-lg p-8 text-white animate-float shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Download our Media Kit</h3>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                </div>
                <button className="w-full text-center text-gray-300 hover:text-white underline transition-colors duration-300">
                  Download Now
                </button>
              </div>

              {/* Submit Press Release */}
              <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 rounded-lg p-8 text-white animate-float shadow-lg hover:shadow-xl transition-shadow duration-300" style={{animationDelay: '0.5s'}}>
                <h3 className="text-xl font-bold mb-4">Submit a Press Release</h3>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <button className="w-full text-center text-gray-300 hover:text-white underline transition-colors duration-300">
                  Submit Now
                </button>
              </div>

              {/* Additional Info Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 animate-slide-in-right hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Advertising Benefits</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></span>
                    <span className="group-hover:text-gray-800 transition-colors">Global cryptocurrency audience</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></span>
                    <span className="group-hover:text-gray-800 transition-colors">1.5M+ monthly visitors</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></span>
                    <span className="group-hover:text-gray-800 transition-colors">High engagement rates</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></span>
                    <span className="group-hover:text-gray-800 transition-colors">Industry-leading content</span>
                  </li>
                </ul>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-6 text-white animate-pulse-slow">
                <h4 className="text-lg font-bold mb-3">Our Reach</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monthly Visitors</span>
                    <span className="font-bold">1.5M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Sessions</span>
                    <span className="font-bold">3M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Global Reach</span>
                    <span className="font-bold">Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AdvertisingPage;