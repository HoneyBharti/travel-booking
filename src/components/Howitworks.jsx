import { ArrowBigRight } from 'lucide-react';

const Howitworks = () => {
  return (
    <>
      {/* How It Works Section Header */}
      <div className="mt-6 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mb-4 sm:mb-10 md:mb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
          How It Works
        </h2>
        
        <div className="w-full sm:flex-1 flex items-center gap-2 sm:gap-4">
          <div className="flex-1 h-1.5 sm:h-2.5 bg-gradient-to-r from-[#2C4224] to-[#3F5F34] rounded"></div>
          <button className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2C4224] text-white rounded-full flex items-center justify-center hover:bg-[#3F5F34] transition shadow-lg">
            <ArrowBigRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>

      {/* How It Works Steps */}
      <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8 lg:p-12 shadow-2xl sm:shadow-2xl lg:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-12 md:gap-16 lg:gap-24 relative">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#306400] text-white rounded-full flex items-center justify-center text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-5 md:mb-6">
              1
            </div>

            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-3">
              Enter Your PNR
            </h3>
            <p className="text-gray-600 text-xs sm:text-base leading-snug">
              Simply enter your 10-digit PNR in the search box
            </p>
          </div>

          {/* Dots Between 1 and 2 */}
          <div className="hidden md:flex absolute top-10 lg:top-12 left-1/4 gap-2 translate-x-1/2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2 h-2 lg:w-3 lg:h-3 bg-[#2C2C2C] rounded-full"></div>
            ))}
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#306400] text-white rounded-full flex items-center justify-center text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-5 md:mb-6">
              2
            </div>

            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-3">
              Get Real-Time Update
            </h3>
            <p className="text-gray-600 text-xs sm:text-base leading-snug">
              Instantly view your current train journey status.
            </p>
          </div>

          {/* Dots Between 2 and 3 */}
          <div className="hidden md:flex absolute top-10 lg:top-12 right-1/4 gap-2 -translate-x-1/2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2 h-2 lg:w-3 lg:h-3 bg-[#2C2C2C] rounded-full"></div>
            ))}
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#306400] text-white rounded-full flex items-center justify-center text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-5 md:mb-6">
              3
            </div>

            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-3">
              Travel with Confidence
            </h3>
            <p className="text-gray-600 text-xs sm:text-base leading-snug">
              Stay informed with secure and accurate data.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Howitworks;
