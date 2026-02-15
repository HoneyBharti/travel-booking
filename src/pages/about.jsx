'use client';

export default function AboutPage() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast PNR Status Checking',
      description: 'Get real-time updates on your train journey status instantly',
    },
    {
      icon: '📱',
      title: 'Mobile-Friendly Experience',
      description: 'Seamless experience across all devices and screen sizes',
    },
    {
      icon: '🔒',
      title: 'Secure & Privacy-Focused',
      description: 'Your data is protected with industry-leading security measures',
    },
    {
      icon: '🌐',
      title: 'Expanding Services',
      description: 'Soon: Hotel, Bus, and Flight booking options',
    },
    {
      icon: '🚄',
      title: 'Railway Information',
      description: 'Access comprehensive train and travel-related information',
    },
    {
      icon: '💡',
      title: 'User-Friendly Design',
      description: 'Intuitive interface designed for all users',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section - Mobile Optimized */}
        <div className="mb-12 text-center sm:text-center md:text-center lg:text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2217] mb-4 text-left sm:text-center">
            About <span className="text-[#FFB500]">ChaloTrain</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-left sm:text-center">
            Your independent travel information platform, dedicated to helping millions of travelers across India access fast, reliable, and user-friendly railway information.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1A2217] mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ChaloTrain is an independent travel information platform created to help users easily check PNR status and access train-related updates in a fast and user-friendly way.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to provide simple, reliable, and accessible railway information for millions of travelers across India. We focus on making train travel information accessible to everyone, regardless of their technical expertise.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FFB500] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-[#1A2217] text-xl font-bold">✓</span>
              </div>
              <p className="text-gray-600">Trusted by thousands of travelers</p>
            </div>
          </div>
          <div className="bg-red-100 border border-[#FFB500]/20 rounded-xl p-6">
            <div className="flex gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h2 className="text-2xl font-bold text-[#1A2217] mb-3">Important Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  ChaloTrain is an independent online platform providing informational services related to train and PNR status. This disclaimer covers important legal information about our services and relationship with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Focus On - Mobile Optimized (Reduced Size) */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2217] mb-4 sm:mb-8 ">What We Focus On</h2>
          <div className="grid md:grid-cols-3 gap-3 sm:gap-6">
            {[
              { title: 'Fast PNR Status Checking', desc: 'Real-time updates on your journey status' },
              { title: 'Mobile-Friendly Experience', desc: 'Seamless experience on all devices' },
              { title: 'Secure & Privacy-Focused Browsing', desc: 'Your data protection is our priority' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-[#1A2217]/5 to-[#2C4224]/5 border border-[#FFB500]/20 rounded-lg sm:rounded-xl p-3 sm:p-6 hover:border-[#FFB500]/40 transition">
                <h3 className="text-base sm:text-xl font-bold text-[#FFB500] mb-1 sm:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-base leading-tight sm:leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Expansion */}
        <div className="bg-gradient-to-r from-[#2C4224] to-[#3F5F34] rounded-xl p-10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Expanding Services</h2>
          <p className="text-white/80 mb-6">
            ChaloTrain is continuously working to expand services including hotel, bus, and flight information in the near future. We're committed to becoming your one-stop solution for all travel needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white px-6 py-3 rounded-lg border border-[#FFB500]/30">
              <span className="text-[#FFB500] font-semibold">🏨 Hotels Coming Soon</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg border border-[#FFB500]/30">
              <span className="text-[#FFB500] font-semibold">🚌 Bus Tickets Coming Soon</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg border border-[#FFB500]/30">
              <span className="text-[#FFB500] font-semibold">✈️ Flights Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Features Grid - Mobile Optimized with Icon Left & Text Right */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1A2217] mb-8 text-center">Why Choose ChaloTrain</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="bg-white border border-[#FFB500]/20 rounded-xl p-4 hover:border-[#FFB500]/40 hover:shadow-lg transition shadow-sm flex items-start gap-3">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-[#1A2217] mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA - Mobile Optimized with Reduced Height */}
        <div className="bg-gradient-to-r from-[#FFB500] to-[#FFC500] rounded-xl p-6 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2217] mb-2">Have Questions?</h2>
          <p className="text-[#1A2217]/80 text-sm md:text-base mb-4 max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions or feedback about ChaloTrain.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#1A2217] text-[#FFB500] px-6 py-2.5 rounded-lg font-bold hover:bg-[#2C4224] transition transform hover:scale-105 text-sm"
          >
            Get In Touch
          </a>
        </div>
      </main>
    </div>
  );
}