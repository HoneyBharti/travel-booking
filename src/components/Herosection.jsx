import React from "react";

const Herosection = () => {
  return (
    <section
      className="relative w-full min-h-screen sm:min-h-[550px] md:min-h-[650px] lg:min-h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/herobg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT SECTION */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10 flex flex-col justify-center min-h-screen pt-16 sm:pt-0">
        
        {/* Heading - Mobile (≤640px) */}
        <div className="block sm:hidden">
          <div className="text-white text-3xl xs:text-4xl font-bold leading-tight">
            CHECK YOUR
          </div>
          <div className="text-[#FFB500] pt-2 text-3xl xs:text-4xl font-bold leading-tight">
            TRAIN JOURNEY STATUS
          </div>
        </div>

        {/* Heading - Tablet (640px - 1024px) */}
        <div className="hidden sm:block lg:hidden text-white text-4xl md:text-5xl font-bold leading-tight heading-768-870">
          CHECK YOUR{" "}
          <span className="text-[#FFB500]">TRAIN</span>
          <br />
          <span className="text-[#FFB500]">JOURNEY STATUS</span>
        </div>

        {/* Heading - Desktop (≥1024px) */}
        <div className="hidden lg:block text-white text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
          CHECK YOUR{" "}
          <span className="text-[#FFB500]">TRAIN</span>
          <br />
          <span className="text-[#FFB500]">JOURNEY STATUS</span>
        </div>

        {/* Subheading - Responsive */}
        <p className="text-gray-200 mt-4 xs:mt-5 sm:mt-5 md:mt-6 lg:mt-8 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl">
          Fast. Secure. Real-Time PNR Updates.
        </p>

        {/* Input + Button Container */}
        <div className="mt-8 xs:mt-10 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 max-w-2xl w-full">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
            
            <input
              type="text"
              placeholder="Enter 10-Digit PNR"
              maxLength="10"
              aria-label="Enter your 10-digit PNR number"
              className="w-full sm:flex-1 px-5 sm:px-6 md:px-8 h-14 xs:h-16 sm:h-16 md:h-20 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-white text-gray-700 text-base xs:text-lg sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-[#FFB500]"
            />

            <button className="w-full sm:w-auto bg-[#FFB500] hover:bg-yellow-500 text-black font-semibold px-6 xs:px-8 sm:px-8 md:px-10 h-14 xs:h-16 sm:h-16 md:h-20 rounded-lg sm:rounded-r-lg sm:rounded-l-none text-base xs:text-lg sm:text-lg md:text-xl transition duration-300 whitespace-nowrap">
              Check Status
            </button>

          </div>
        </div>

        {/* Legal Text */}
        <p className="text-white/80 text-sm xs:text-base sm:text-base md:text-lg lg:text-xl mt-5 xs:mt-6 sm:mt-6 md:mt-8 max-w-xl leading-relaxed">
          We do not store your PNR or personal data. Status is fetched securely from authorized railway APIs.
        </p>

      </div>

      {/* TRAIN IMAGE - Fully Responsive */}
      <div className="absolute right-0 z-10"
           style={{
             top: 'clamp(5rem, 16vw, 12rem)',
           }}>
        <img
          src="/herosectionimag.png"
          alt="Train illustration"
          className="w-auto object-contain"
          style={{
            height: 'clamp(10rem, 40vw, 35rem)',
            maxHeight: '550px',
          }}
        />
      </div>

      {/* Custom CSS */}
      <style>{`
        @media (min-width: 850px) and (max-width: 1234px) {
          .absolute.right-0.z-10 {
            top: 3rem !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 870px) {
          .heading-768-870 {
            font-size: 2.8rem !important;
          }
        }
      `}</style>

    </section>
  );
};

export default Herosection;