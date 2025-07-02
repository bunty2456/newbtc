import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Tony Severino",
      role: "Head of Research",
      image: "/images/team/tony-severino.jpg"
    },
    {
      name: "Best Owie",
      role: "Managing Editor",
      image: "/images/team/best-owie.jpg"
    },
    {
      name: "Reynaldo Marquez",
      role: "Managing Editor",
      image: "/images/team/reynaldo-marquez.jpg"
    },
    {
      name: "Jet Encila",
      role: "Weekend Editor",
      image: "/images/team/jet-encila.jpg"
    },
    {
      name: "Jake Simmons",
      role: "News Specialist",
      image: "/images/team/jake-simmons.jpg"
    },
    {
      name: "Dalmas Ngetich",
      role: "News Specialist",
      image: "/images/team/dalmas-ngetich.jpg"
    }
  ];

  const partners = [
    { name: "eToro", logo: "/images/partners/etoro.png" },
    { name: "SimpleFX", logo: "/images/partners/simplefx.png" },
    { name: "Huobi", logo: "/images/partners/huobi.png" },
    { name: "KuCoin", logo: "/images/partners/kucoin.png" }
  ];

  return (
    <>
      <Head>
        <title>About Us - NewsBTC</title>
        <meta name="description" content="Learn about NewsBTC, your one-stop destination for cryptocurrency news, analysis, and insights since 2013." />
      </Head>

      <div className="min-h-screen text-white bg-[#0b2545]">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About Us
              </h1>
              <h2 className="text-2xl font-semibold text-gray-300 mb-6">
                Welcome to NewsBTC
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Your one-stop destination for the latest, unbiased news, analysis, and insights from 
                the world of cryptocurrency.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-2xl p-8 h-80">
                <div className="relative h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 rounded-2xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L18 7L16.74 12L22 13.09L15.74 14.17L17 19L12 17.83L7 19L8.26 13.91L2 12.83L7.26 11.74L6 7L11.09 8.17L12 2Z"/>
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-bold">Our Story</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-2xl p-8 h-96 mb-8">
                <div className="relative h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30 rounded-2xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-full"></div>
                      <div className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-3/4"></div>
                      <div className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Established in 2013, NewsBTC is a pioneer in the crypto industry and a wholly-owned, 
                independent publisher. Please keep reading to learn more about us, our mission, our content, 
                our team, and much more.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                We believe in the power of information and its role in positively shaping the future 
                of the global economy. Since our inception, we have been dedicated to high-quality, 
                transparent, and accurate news about the cryptocurrency industry.
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-2xl p-8 h-80 mb-8">
                <div className="relative h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 rounded-2xl"></div>
                  <div className="relative z-10 text-center">
                    <svg className="w-20 h-20 mx-auto mb-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                    </svg>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Founded in 2013, NewsBTC emerged as one of the first dedicated platforms providing 
                news, analysis, and insights into the burgeoning world of cryptocurrency. Born out of 
                a passion for the potential of blockchain technology and digital currencies, we recognized 
                early on the need for accurate, reliable information in a rapidly evolving industry. From 
                the initial days of Bitcoin to the diverse ecosystem of today, NewsBTC has been at the 
                forefront, delivering comprehensive coverage and helping shape the narrative of the crypto revolution.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
          <h2 className="text-4xl font-bold text-white mb-8">Our Team</h2>
          
          <div className="mb-12">
            <p className="text-gray-400 leading-relaxed mb-6">
              We are a dynamic team of journalists, analysts, and technologists who share an 
              unwavering passion for the decentralized revolution and its impact on the future of finance.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We are committed to delivering unbiased, in-depth analysis and news to our readers. 
              Our content helps them make informed decisions in an ever-changing market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-200 rounded-2xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-cyan-500 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Clients & Partners Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Our Clients & Partners</h2>
          
          <p className="text-gray-400 leading-relaxed mb-12">
            NewsBTC's valued partners across the cryptocurrency industry include eToro, Huobi, 
            KuCoin, SimpleFX, and many others. We deeply respect the relationships we build 
            with our partners while maintaining editorial integrity across all content.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <span className="text-2xl font-bold text-gray-400">{partner.name}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-2xl p-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 rounded-2xl"></div>
              <div className="relative z-10 flex items-center justify-center">
                <svg className="w-32 h-32 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journalism Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Journalism</h2>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                At NewsBTC, our commitment to excellence in journalism is unwavering. We adhere to 
                the highest standards of journalistic integrity, ensuring that our reporting is 
                unbiased, transparent, and backed by thorough research.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Our journalism is characterized by a deep understanding of the crypto industry and 
                a dedication to uncovering the truth. We believe in the power of information to 
                drive informed decision-making and positively impact the global economy. Our articles 
                are crafted with precision and clarity, designed to provide valuable insights to 
                both novice and experienced readers alike.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                We go beyond just reporting the news; we provide in-depth analysis, expert commentary, 
                and comprehensive coverage of the trends and events shaping the crypto landscape. 
                Our investigative pieces delve into the complexities of the market, while our opinion 
                articles offer thought-provoking perspectives on the future of digital currencies. 
                At NewsBTC, we are committed to fostering a well-informed and engaged crypto community 
                through our unwavering dedication to quality journalism.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-2xl p-8 h-96">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-full opacity-60"></div>
                    <div className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-4/5 opacity-60"></div>
                    <div className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-3/5 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-2xl p-8 h-96">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30 rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-24 h-24 mx-auto text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2L13.09,8.26L18,7L16.74,12L22,13.09L15.74,14.17L17,19L12,17.83L7,19L8.26,13.91L2,12.83L7.26,11.74L6,7L11.09,8.17L12,2Z"/>
                  </svg>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-center space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                NewsBTC's mission is to empower our audience with the most relevant, up-to-date, 
                and comprehensive information about the rapidly evolving world of cryptocurrency.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                We strive to be the leading news platform that fosters trust, transparency, and 
                integrity in the blockchain and crypto sphere.
              </p>
            </div>
          </div>
        </section>

        {/* Our Community Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Community</h2>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                At NewsBTC, our community is at the heart of everything we do. We are more than just 
                a news platform; we are a vibrant ecosystem of cryptocurrency enthusiasts, investors, 
                technologists, and innovators who share a common passion for the decentralized revolution.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Our community thrives on high-quality, unbiased, and comprehensive content. From breaking 
                news and in-depth analysis to expert opinions and educational resources, we ensure that 
                our readers stay informed and empowered. We believe in fostering a well-informed community 
                that can navigate the complexities of the cryptocurrency market with confidence.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                We provide various interactive platforms where our community members can engage, discuss, 
                and share their insights. Our social media channels, forums, and comment sections are 
                buzzing with activity, enabling readers to connect with like-minded individuals, ask questions, 
                and exchange ideas. We value the diverse perspectives within our community and encourage 
                open and respectful dialogue.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-2xl p-8 h-80">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
                    </svg>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded opacity-60"></div>
                    <div className="h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded opacity-80"></div>
                    <div className="h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Our Commitment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                At NewsBTC, we are steadfast in our commitment to uphold the highest standards 
                of journalistic integrity. Since our inception in 2013, we have dedicated ourselves to 
                providing comprehensive and trustworthy coverage of the cryptocurrency market. 
                Our editorial independence and rigorous fact-checking processes ensure that all 
                information shared is verified and free from external influences.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                We maintain a clear separation between editorial content and any sponsored articles, 
                ensuring that all our reports are transparent and unbiased. Our team of experienced 
                journalists and analysts adhere to strict ethical guidelines and rely on credible 
                sources and in-depth research to deliver news and analysis. This meticulous approach 
                enables us to present not only the facts but also thoughtful insights that respect 
                and enhance our readers' understanding of the dynamic and complex cryptocurrency landscape.
              </p>
            </div>
            
            <div className="text-gray-400 leading-relaxed">
              <p>
                Our community thrives on high-quality, unbiased, and comprehensive content. From breaking 
                news and in-depth analysis to expert opinions and educational resources, we ensure that 
                our readers stay informed and empowered. We believe in fostering a well-informed community 
                that can navigate the complexities of the cryptocurrency market with confidence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;