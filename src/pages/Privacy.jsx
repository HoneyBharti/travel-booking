'use client';

import { useState } from 'react';

export default function PrivacyPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    // If the clicked section is already open, close it. Otherwise, open the new section.
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 'information-collected',
      title: '1. Information We Collect',
      content: 'We do not permanently store PNR numbers entered on our website. When you contact us, we may collect your name and email address. We may also collect non-personal data such as browser type, device type, and IP address for analytics and security purposes.',
    },
    {
      id: 'use-of-information',
      title: '2. Use of Information',
      content: 'We use collected information to provide PNR status and train-related information, improve website performance and user experience, and respond to user inquiries. All data handling is done in compliance with applicable privacy laws.',
    },
    {
      id: 'cookies-advertising',
      title: '3. Cookies & Advertising',
      content: 'ChaloTrain may use cookies to enhance user experience. We may display advertisements through third-party networks such as Google AdSense. These services may use cookies to display relevant ads. Users can disable cookies through their browser settings.',
    },
    {
      id: 'third-party-apis',
      title: '4. Third-Party APIs',
      content: 'Train and PNR information is fetched using third-party data providers. We do not control or guarantee the accuracy of data provided by these sources. We recommend verifying critical information from official sources.',
    },
    {
      id: 'data-protection',
      title: '5. Data Protection',
      content: 'We implement reasonable security measures to protect user information. However, no method of transmission over the internet is 100% secure. Users should be aware of potential security risks when transmitting sensitive information online.',
    },
    {
      id: 'external-links',
      title: '6. External Links',
      content: 'Our website may contain links to external websites. We are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of any external sites before providing personal information.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8 md:text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2217] mb-2">
            Privacy <span className="text-[#FFB500]">Policy</span>
          </h1>
          <p className="text-gray-600 text-base mb-2">
            Understanding how we protect your privacy and data
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>🔒 Effective Date: 2026</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-[#1A2217]/5 to-[#2C4224]/5 border border-[#FFB500]/20 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1A2217] mb-2">Welcome to ChaloTrain Privacy Policy</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at <span className="font-semibold text-[#FFB500]">chalotrain.com</span>. Please read this policy carefully to understand our privacy practices.
          </p>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-3 mb-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white border border-[#FFB500]/20 rounded-lg overflow-hidden hover:border-[#FFB500]/40 transition shadow-sm"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#FFB500]/5 transition"
              >
                <h3 className="text-sm font-bold text-[#1A2217] text-left">{section.title}</h3>
                <span className={`text-[#FFB500] text-sm transition-transform ${openSection === section.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {openSection === section.id && (
                <div className="px-4 py-3 border-t border-[#FFB500]/10 bg-[#1A2217]/5">
                  <p className="text-gray-600 text-xs leading-relaxed">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-[#2C4224] to-[#3F5F34] rounded-xl p-4">
            <h3 className="text-base font-bold text-[#FFB500] mb-2 flex items-center gap-2">
              <span>✓</span> What We Don't Do
            </h3>
            <ul className="space-y-1 text-white/80 text-xs">
              <li>✗ Don't permanently store your PNR numbers</li>
              <li>✗ Don't sell your personal data</li>
              <li>✗ Don't share data with third parties without consent</li>
              <li>✗ Don't track browsing history excessively</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#FFB500] to-[#FFC500] rounded-xl p-4">
            <h3 className="text-base font-bold text-[#1A2217] mb-2 flex items-center gap-2">
              <span>🔒</span> Your Rights
            </h3>
            <ul className="space-y-1 text-[#1A2217]/80 text-xs">
              <li>✓ Right to know what data we collect</li>
              <li>✓ Right to access your information</li>
              <li>✓ Right to request data deletion</li>
              <li>✓ Right to disable cookies anytime</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#1A2217] to-[#2C4224] rounded-xl p-5 mb-6">
          <h2 className="text-xl font-bold text-[#FFB500] mb-2">Contact Information</h2>
          <p className="text-white/80 text-sm mb-3">
            For any privacy-related queries, concerns, or to exercise your privacy rights, please contact us:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#FFB500] text-base">📧</span>
              <a href="mailto:chalotrain@chalotrain.com" className="text-white/80 hover:text-[#FFB500] transition text-sm">
                chalotrain@chalotrain.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FFB500] text-base">🌍</span>
              <span className="text-white/80 text-sm">Website: chalotrain.com</span>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-white border border-[#FFB500]/30 rounded-xl p-4 shadow-sm">
          <div className="flex gap-3">
            <span className="text-xl text-[#FFB500]">ℹ️</span>
            <div>
              <h3 className="text-base font-bold text-[#1A2217] mb-1">Policy Updates</h3>
              <p className="text-gray-600 text-xs">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" above. Your continued use of our website constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}