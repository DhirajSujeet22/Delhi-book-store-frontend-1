import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { itemsData } from "../../data/demoItem";
import categoryService from "../../services/category.service";

const SubCategorySwiper = ({
  data,
  id,
  setOffset,
  loading,
  limit,
  setLoading,
}) => {
  const swiperRef = useRef(null);

  console.log({ data });

  return (
    <div>
      <h1 className="font-medium text-2xl my-4">Featured Categories</h1>
      {data.length > 0 ? (
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={6}
          breakpoints={{
            1200: { slidesPerView: 6 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {data.map((category, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/category/${id}`}
                className="text-sm font-medium text-black flex justify-center flex-col items-center text-center"
              >
                <div className="flex justify-center items-center my-auto w-44 h-44 rounded-full bg-custom-gradient">
                  <img
                    className="h-3/4"
                    src={`https://covers.openlibrary.org/b/isbn/${category.products_code}-L.jpg`}
                    alt={category.categories_name}
                  />
                </div>
                <br />
                <p className="text-center">
                  {category.categories_name.charAt(0).toUpperCase() +
                    category.categories_name.slice(1).toLowerCase()}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No subcategories found.</p>
      )}
      {loading && <p>Loading...</p>} {/* Show loading indicator */}
    </div>
  );
};

export default SubCategorySwiper;
