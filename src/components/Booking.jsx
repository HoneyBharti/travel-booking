import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import demo2 from "../assets/demo2.png"
import demo3 from "../assets/demo3.png"
import demo5 from "../assets/demo5.png"
import train from "../assets/train.jpeg"
import flight from "../assets/flight.jpeg"
import hotel from "../assets/hotel.jpeg"
import bus from "../assets/bus.jpeg"
import Howitworks from "./Howitworks";

const Booking = () => {

  const cards = [
    {
      id: 1,
      title: "Train Booking",
      image: train,
      alt: "Train Booking"
    },
    {
      id: 2,
      title: "Flight Booking",
      image: flight,
      alt: "Flight Booking"
    },
    {
      id: 3,
      title: "Hotel Booking",
      image: hotel,
      alt: "Hotel Booking"
    },
    {
      id: 4,
      title: "Bus Booking",
      image: bus,
      alt: "Bus Booking"
    }
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 min-h-screen relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
      
      {/* Vertical Bars - Exactly as original, only on desktop */}
      <div className="hidden xl:flex absolute -top-6 left-0 right-0 justify-center z-10 pointer-events-none">
        <div className="w-full h-12 flex items-center justify-between px-4">
          {Array.from({ length: 70 }).map((_, i) => (
            <div
              key={i}
              className="w-[3px] h-8 bg-gray-400 opacity-80"
            ></div>
          ))}
        </div>
      </div>
      
        {/* Top Tabs - Mobile optimized */}
        <div className="flex justify-center overflow-x-auto w-full mb-4">
          <div className="flex items-center justify-center bg-gradient-to-r from-[#2C4224] to-[#3F5F34] rounded-lg overflow-hidden shadow-lg w-full">
            
            {["Trains", "Flights", "Hotels", "Bus Tickets"].map((item, index) => (
              <div
                key={index}
                className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-5 lg:py-7 text-white text-xs sm:text-sm md:text-base font-medium border-r border-white/20 last:border-r-0 whitespace-nowrap text-center hover:bg-white/10 transition"
              >
                {item}
              </div>
            ))}

            <div className="px-3 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-5 lg:py-7 bg-[#FFB500] text-black font-bold text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-[#FFC500] transition border-4 border-[#3F5F34] rounded-md flex-shrink-0">
              Coming Soon
            </div>
          </div>
        </div>

        {/* Dot Indicator */}
        <div className="flex justify-center mt-2 sm:mt-4 md:mt-6">
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#2C4224] rounded-full -ml-16 sm:-ml-20 md:-ml-24 lg:-ml-32"></div>
        </div>

        {/* Launching Soon Bar */}
        <div className="flex justify-center mt-3 md:mt-4 px-0">
          <div className="bg-gradient-to-r from-[#2C4224] to-[#3F5F34] text-white px-3 sm:px-8 md:px-16 lg:px-24 py-2 sm:py-3 md:py-4 lg:py-5 rounded-lg shadow-lg text-center font-semibold text-xs sm:text-sm md:text-base w-[55%] sm:w-[50%] md:w-[60%] -ml-16 sm:-ml-20 md:-ml-24 lg:-ml-32">
            Bookings launching soon
          </div>
        </div>


        {/* Swiper Cards Section */}
        <div className="mt-6 sm:mt-10 md:mt-16 relative group px-0 sm:px-2 md:px-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              }
            }}
            navigation={{
              nextEl: ".booking-next",
              prevEl: ".booking-prev",
            }}
            className="booking-swiper w-full"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="flex">
                <div className="relative rounded-md overflow-hidden shadow-lg group w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-3 sm:p-4">
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-medium">
                      {card.title}
                    </h3>
                    <button className="mt-1 sm:mt-2 bg-[#FFB500] text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm hover:bg-[#FFC500] transition">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous Button */}
          <button
            className="booking-prev absolute left-0 sm:left-[-40px] md:left-[-60px] lg:left-[-80px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#FFB500] text-black rounded-full flex items-center justify-center hover:bg-[#FFC500] transition shadow-lg text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
            aria-label="Previous slide"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            className="booking-next absolute right-0 sm:right-[-40px] md:right-[-60px] lg:right-[-80px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#FFB500] text-black rounded-full flex items-center justify-center hover:bg-[#FFC500] transition shadow-lg text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
            aria-label="Next slide"
          >
            ❯
          </button>
        </div>

        {/* Promotional Banner Swiper */}
        <div className="mt-6 sm:mt-10 md:mt-16 lg:mt-20 relative group px-0 sm:px-2 md:px-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".promo-next",
              prevEl: ".promo-prev",
            }}
            className="promo-swiper w-full"
          >
            {/* Banner 1 */}
            <SwiperSlide>
              <div className="w-full h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden shadow-lg">
                <img src={demo2} alt="Promotional banner 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            {/* Banner 2 */}
            <SwiperSlide>
              <div className="w-full h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden shadow-lg">
                <img src={demo3} alt="Promotional banner 2" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            {/* Banner 3 */}
            <SwiperSlide>
              <div className="w-full h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden shadow-lg">
                <img src={demo5} alt="Promotional banner 3" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Promo Previous Button */}
          <button
            className="promo-prev absolute left-0 sm:left-[-40px] md:left-[-60px] lg:left-[-80px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#1A7F4A] text-white rounded-full flex items-center justify-center hover:bg-[#2C9D5C] transition shadow-lg text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
            aria-label="Previous banner"
          >
            ❮
          </button>

          {/* Promo Next Button */}
          <button
            className="promo-next absolute right-0 sm:right-[-40px] md:right-[-60px] lg:right-[-80px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#1A7F4A] text-white rounded-full flex items-center justify-center hover:bg-[#2C9D5C] transition shadow-lg text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
            aria-label="Next banner"
          >
            ❯
          </button>
        </div>

 <Howitworks/>
      </div>
    </section>

    
  );
};

export default Booking;