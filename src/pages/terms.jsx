'use client';

import { useState } from 'react';

export default function TermsPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    // If the clicked section is already open, close it. Otherwise, open the new section.
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 'use-of-service',
      title: '1. Use of Service',
      content: 'The website is intended for informational purposes only. You agree not to misuse, disrupt, or attempt unauthorized access to our systems. You shall use this platform responsibly and in accordance with all applicable laws and regulations.',
    },
    {
      id: 'accuracy',
      title: '2. Accuracy of Information',
      content: 'We do not guarantee the accuracy or timeliness of train or PNR information, as it is sourced from third-party providers. While we strive to keep information current, users should verify details from official railway sources before making travel decisions.',
    },
    {
      id: 'liability',
      title: '3. Limitation of Liability',
      content: 'Under no circumstances shall ChaloTrain be liable for any direct or indirect damages resulting from the use of our website. This includes but is not limited to loss of data, business interruption, or any consequential damages arising from use or inability to use our services.',
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property',
      content: 'All content, branding, design, and materials on ChaloTrain are the intellectual property of ChaloTrain unless otherwise stated. Unauthorized reproduction, distribution, or use of any content is strictly prohibited.',
    },
    {
      id: 'modifications',
      title: '5. Modifications',
      content: 'We reserve the right to update or modify these terms at any time without prior notice. Continued use of the website following changes constitutes your acceptance of the modified terms. It is your responsibility to review these terms periodically.',
    },
    {
      id: 'governing-law',
      title: '6. Governing Law',
      content: 'These terms shall be governed by and interpreted in accordance with the laws of India. Any legal action or proceeding shall be resolved exclusively in the courts of India.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8 md:text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2217] mb-2">
            Terms & <span className="text-[#FFB500]">Conditions</span>
          </h1>
          <p className="text-gray-600 text-base mb-2">
            Please read these terms carefully before using ChaloTrain
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>📋 Effective Date: 2026</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-[#1A2217]/5 to-[#2C4224]/5 border border-[#FFB500]/20 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1A2217] mb-2">Agreement to Terms</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            By accessing and using ChaloTrain, you agree to comply with the following terms and conditions. If you do not agree to any part of these terms, you may not use our website or services. These terms apply to all visitors, users, and others who access or use our platform.
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

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#1A2217] to-[#2C4224] rounded-xl p-5 mb-6">
          <h2 className="text-xl font-bold text-[#FFB500] mb-2">Questions About These Terms?</h2>
          <p className="text-white/80 text-sm mb-3">
            If you have any questions or concerns about these Terms & Conditions, please don't hesitate to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="/contact" 
              className="inline-block bg-[#FFB500] text-[#1A2217] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#FFC500] transition text-center shadow-md"
            >
              Contact Us
            </a>
            <a 
              href="mailto:chalotrain@chalotrain.com" 
              className="inline-block border-2 border-[#FFB500] text-[#FFB500] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#FFB500]/10 transition text-center"
            >
              Email: chalotrain@chalotrain.com
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-white border border-[#FFB500]/30 rounded-xl p-4 shadow-sm">
          <div className="flex gap-3">
            <span className="text-xl text-[#FFB500]">⚠️</span>
            <div>
              <h3 className="text-base font-bold text-[#1A2217] mb-1">Important Notice</h3>
              <p className="text-gray-600 text-xs">
                These terms and conditions are subject to change at any time. We encourage you to review them regularly to stay informed of any updates.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}