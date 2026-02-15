import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "⏱️",
      title: "Fast & Reliable",
      description: "Get instant updates on your train status"
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Secure & Safe",
      description: "Your data is protected with top security"
    },
    {
      id: 3,
      icon: "🎧",
      title: "24/7 Support",
      description: "Always here to help you anytime"
    }
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title with Decorative Brackets */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Left Bracket */}
          <div className="hidden sm:block w-12 h-16 md:w-16 md:h-20 border-l-4 border-b-4 border-[#55AF00] rounded-bl-2xl"></div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 whitespace-nowrap">
            Why Choose Us?
          </h2>
          
          {/* Right Bracket */}
          <div className="hidden sm:block w-12 h-16 md:w-16 md:h-20 border-r-4 border-t-4 border-[#55AF00] rounded-tr-2xl"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl">{feature.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                {feature.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
