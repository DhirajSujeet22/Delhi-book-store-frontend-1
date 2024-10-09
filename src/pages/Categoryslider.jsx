import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import "swiper/swiper-bundle.min.css"; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const ImageRowSection = () => {
  // Array of objects containing image URLs and names
  const items = [
    {
      image:
        "https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Halo-NRPO._SS300_QL85_FMpng_.png", // Replace with your image URLs
      name: "Fiction",
    },
    {
      image:
        "https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Halo-Fiction._SS300_QL85_FMpng_.png",
      name: "Non-Fiction",
    },
    {
      image:
        "https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Halo-Non-fiction._SS300_QL85_FMpng_.png",
      name: "University",
    },
    {
      image:
        "https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Halo-Exam._SS300_QL85_FMpng_.png",
      name: "School",
    },
    {
      image:
        "https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Halo-Children._SS300_QL85_FMpng_.png",
      name: "Children Books",
    },
    {
      image:
        "https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Halo-Books-in-Indian-languages._SS300_QL85_FMpng_.png",
      name: "Science",
    },
    {
      image:
        "https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Halo-Books-in-Indian-languages._SS300_QL85_FMpng_.png",
      name: "Indian Book",
    },
    {
      image:
        "https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Halo-BxGy._SS300_QL85_FMpng_.png",
      name: "History",
    },
  ];

  return (
    <section className="w-full py-8 px-4">
      <Swiper
        modules={[Navigation,Autoplay, Pagination]}
        spaceBetween={15}
        slidesPerView={7} // Default number of slides visible
        navigation
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{ clickable: true }}
        breakpoints={{
          // Responsiveness for different screen sizes
          320: { slidesPerView: 1 }, // 1 slide on small devices
          640: { slidesPerView: 2 }, // 2 slides on medium devices
          768: { slidesPerView: 3 }, // 3 slides on tablets
          1024: { slidesPerView: 4 }, // 4 slides on larger screens
          1280: { slidesPerView: 5 }, // 5 slides on larger screens
          1536: { slidesPerView: 6 }, // 6 slides on larger screens
        }}
        className="mySwiper"
      >
        {/* Rendering SwiperSlides for each item */}
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover mb-2" // Adjust image size as needed
            />
            <p className="text-center font-semibold">{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageRowSection;

