import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import Swiper modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

// Swiper CSS and Modules
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

export const PromotionCarousel = () => {
  return (
    <div className="w-full group h-full relative bg-custom-gradient px-4 py-4">
      <Swiper
        autoplay={{
          delay: 1000, // Time in ms between slide changes
        }}
        pagination={{ clickable: true }}
        effect="fade" // Optional: use fade effect instead of sliding
        loop={true}
        speed={0} // Set speed to 0 for no sliding effect
        className="w-full h-full mySwiper"
        // navigation={{
        //   prevEl: ".swiper-button-prev",
        //   nextEl: ".swiper-button-next",
        // }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_Know-your-food._CB563199121_.jpg"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_Story-about-friendships._CB563199121_.jpg"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_Books-on-mental-health._CB563199121_.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      {/* <div className="swiper-button-prev custom-button text-slate-500 h-12 w-12 -left-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <CiSquareChevLeft />
      </div>
      <div className="swiper-button-next custom-button text-slate-500 h-12 w-12 -right-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <CiSquareChevRight />
      </div> */}
    </div>
  );
};
export const SpotlightCarousel = () => {
  return (
    <div className="w-full group h-full relative  ">
      <Swiper
        className="w-full h-full mySwiper bg-custom-gradient px-4 py-4"
        slidesPerView={2} // Default to 6 slides per view
        spaceBetween={1}
        navigation={{
          prevEl: ".btn-3-prev",
          nextEl: ".btn-3-next",
        }}
        scrollbar={{
          hide: true,
        }}
        allowTouchMove={false}
        modules={[Scrollbar, Navigation]}
      >
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/Aug2024/Author_of_the_month_._CB567224155_.jpg"
            alt="Image 1"
            className=" w-full max-h-[250px]  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/AugART2024/India100-Ecomm-banner._CB566249242_.jpg"
            alt="Image 2"
            className=" w-full max-h-[250px]  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/July24BB/ATF_MI._CB567636181_.jpg"
            alt="Image 3"
            className=" w-full max-h-[250px]  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/July24BB/Garbha-sanskar-Ecomm-banner._CB567636181_.jpg"
            alt="Image 3"
            className=" w-full max-h-[250px]  object-cover"
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      <div className="swiper-button-prev custom-button bg-white btn-3-prev text-slate-500 h-12 w-12 -left-2  ">
        <CiSquareChevLeft />
      </div>
      <div className="swiper-button-next custom-button bg-white btn-3-next text-slate-500 h-12 w-12 -right-2  ">
        <CiSquareChevRight />
      </div>
    </div>
  );
};
export const AcademicCarousel = () => {
  return (
    <div className="w-full group h-full relative bg-custom-gradient">
      <Swiper
        autoplay={{
          delay: 1000, // Time in ms between slide changes
        }}
        pagination={{ clickable: true }}
        effect="fade" // Optional: use fade effect instead of sliding
        loop={true}
        speed={0} // Set speed to 0 for no sliding effect
        className="w-full h-full mySwiper"
        // navigation={{
        //   prevEl: ".swiper-button-prev",
        //   nextEl: ".swiper-button-next",
        // }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_olympiad._CB563198849_.jpg"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_UPSC._CB563198849_.jpg"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_Excel-MBA-Exam._CB563198849_.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_Books-for-lawyers._CB563198849_.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_Books-on-Medicines-for-budding-Doctors._CB563198849_.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/1500x300_Practice-Question-Banks--Ace-your-exams._CB563198849_.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      {/* <div className="swiper-button-prev custom-button text-slate-500 h-12 w-12 -left-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <CiSquareChevLeft />
      </div>
      <div className="swiper-button-next custom-button text-slate-500 h-12 w-12 -right-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <CiSquareChevRight />
      </div> */}
    </div>
  );
};
export const OfferCarousel = () => {
  return (
    <div className="w-full group h-full relative  ">
      <Swiper
        className="w-full h-full mySwiper  py-4"
        freeMode={true}
        slidesPerView={2}
        spaceBetween={1}
        navigation={{
          prevEl: ".btn-5-prev",
          nextEl: ".btn-5-next",
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Navigation]}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-3 cursor-pointer">
            <img
              src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/770x375_FP-Amazon-Banner-Prime-_New_3._CB563760717_.jpg"
              alt="Image 1"
              className=" w-full max-h-[250px]  object-cover"
            />
            <p className="text-center">Shop now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 cursor-pointer">
            <img
              src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/770x375_FP-Amazon-Banner-New._CB563336571_.jpg"
              alt="Image 2"
              className=" w-full max-h-[250px]  object-cover"
            />
            <p className="text-center">Explore now</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 cursor-pointer">
            <img
              src="https://m.media-amazon.com/images/G/31/img21/Books/SeptBB2024/770x375_WH-Amazon-Banner-updated._CB563339212_.jpg"
              alt="Image 3"
              className=" w-full max-h-[250px]  object-cover"
            />
            <p className="text-center">Order now</p>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      <div className="swiper-button-prev custom-button bg-white btn-5-prev text-slate-500 h-12 w-12 -left-2  ">
        <CiSquareChevLeft />
      </div>
      <div className="swiper-button-next custom-button bg-white btn-5-next text-slate-500 h-12 w-12 -right-2  ">
        <CiSquareChevRight />
      </div>
    </div>
  );
};
