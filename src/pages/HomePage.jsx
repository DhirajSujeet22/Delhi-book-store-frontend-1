import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { genre, itemsData } from "../data/demoItem";
import ItemCard from "../components/cards/ItemCard";
import { CiSquareChevRight, CiSquareChevLeft } from "react-icons/ci";
import {
  AcademicCarousel,
  OfferCarousel,
  PromotionCarousel,
  SpotlightCarousel,
} from "../components/Carousel";

import { Link } from "react-router-dom";
import categoryService from "../services/category.service";
import LeftSidebar from "../components/LeftSidebar";
import ImageRowSection from "./Categoryslider";

const HomePage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const backgroundImages = [
    'url("https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Hindi._SS400_QL85_FMpng_.png")', // Replace with your image URLs
    'url("https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Marathi._SS400_QL85_FMpng_.png")',
    'url("https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Tamil._SS400_QL85_FMpng_.png")',
    'url("https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Bengali._SS400_QL85_FMpng_.png")',
    'url("https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Malayalam._SS400_QL85_FMpng_.png")',
    'url("https://m.media-amazon.com/images/G/31/img21/Books/Jupiter2024/Other-lang._SS400_QL85_FMpng_.png")',
  ];
  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  };

  const [loading, setLoading] = useState(true);
  const [setCategory] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      const response = await categoryService.getAllParent();
      if (response.data.result) {
        setCategory(response.data.result);
      }
      setLoading(false);
    };
    apiData();
  }, []);

  return (
    <>
      
      <div className=" w-full h-full grid grid-cols-12">
        {/* {left side bar menu} */}
        <LeftSidebar />
        {/* {left side bar menu} */}
        
        <div className=" col-span-12 lg:col-span-10  px-5 pb-4 ">
        <ImageRowSection />
          <div className=" flex flex-col py-4 ">
            <h3 className=" font-bold text-2xl">
              Hot Off the press | Children books
            </h3>

            <div className=" relative   py-4 px-12 w-full   ">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={6} // Default to 6 slides per view
                breakpoints={{
                  1200: { slidesPerView: 5 }, // 1200px and up: 6 slides
                  992: { slidesPerView: 4 }, // 992px and up: 4 slides
                  768: { slidesPerView: 3 }, // 768px and up: 3 slides
                  576: { slidesPerView: 2 }, // 576px and up: 2 slides
                  0: { slidesPerView: 2 }, // Less than 576px: 1 slide
                }}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                // pagination={{ clickable: true }}
              >
                {itemsData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ItemCard image={item.imageUrl} title={item.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Custom navigation buttons */}
              <div className="swiper-button-prev custom-button text-slate-500 h-12 w-12 -left-2">
                <CiSquareChevLeft />
              </div>
              <div className="swiper-button-next custom-button text-slate-500 h-12 w-12 -right-2">
                <CiSquareChevRight />
              </div>
            </div>
          </div>

          <div>
            {" "}
            <PromotionCarousel />
          </div>

          <div className=" flex flex-col py-4 ">
            <h3 className=" font-bold text-2xl">Anticipated books of 2024</h3>

            <div className=" relative   py-4 px-12 w-full   ">
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={6} // Default to 6 slides per view
                breakpoints={{
                  1200: { slidesPerView: 5 }, // 1200px and up: 6 slides
                  992: { slidesPerView: 4 }, // 992px and up: 4 slides
                  768: { slidesPerView: 3 }, // 768px and up: 3 slides
                  576: { slidesPerView: 2 }, // 576px and up: 2 slides
                  0: { slidesPerView: 2 }, // Less than 576px: 1 slide
                }}
                navigation={{
                  prevEl: ".btn-2-prev",
                  nextEl: ".btn-2-next",
                }}
              >
                {itemsData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ItemCard image={item.imageUrl} title={item.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Custom navigation buttons */}
              <div className="swiper-button-prev btn-2-prev custom-button text-slate-500 h-12 w-12 -left-2">
                <CiSquareChevLeft />
              </div>
              <div className="swiper-button-next btn-2-next custom-button text-slate-500 h-12 w-12 -right-2">
                <CiSquareChevRight />
              </div>
            </div>
          </div>

          <div>
            <SpotlightCarousel />
          </div>

          <div className=" flex flex-col py-4 ">
            <h3 className=" font-bold text-2xl">2024 Booker Prize shortlist</h3>

            <div className=" relative overflow-auto lg:overflow-hidden   py-4 px-12 w-full  ">
              <div className=" overflow-autos flex justify-between gap-3 ">
                {itemsData.slice(0, 5).map((item, index) => (
                  <ItemCard
                    key={index}
                    image={item.imageUrl}
                    title={item.title}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className=" flex flex-col bg-[#EAEAEA] px-4 py-3 ">
            <div className="bg-[#FCBA03] py-3 px-4 flex flex-col gap-3">
              <h3 className="text-lg lg:text-xl font-semibold">
                Shop by genre
              </h3>
              <div className="grid grid-cols-12 gap-4">
                {genre.map((genreItem, index) => (
                  <div key={index} className="w-full col-span-3 lg:col-span-2">
                    <img
                      className="w-full cursor-pointer"
                      src={genreItem.imageUrl}
                      alt={`genre-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#fef8d8] py-3 flex flex-col gap-3">
              <h3 className="text-lg lg:text-xl font-semibold text-black pl-4">
                Books for all Academic needs
              </h3>

              <div className=" px-2">
                {" "}
                <AcademicCarousel />
              </div>
            </div>

            <div className=" flex bg bg-[#fef8d8] ">
              <div className=" w-56 h-auto  ">
                <img
                  className="text-black"
                  src="https://m.media-amazon.com/images/G/31/img21/Books/Aug2024/434x530_Exam-Books-rev._CB565488257_.png"
                  alt=""
                />
              </div>
              <div className=" w-56 h-auto">
                <img
                  className=""
                  src="https://m.media-amazon.com/images/G/31/img21/Books/Aug2024/434x530_School-books-rev._CB565488257_.png"
                  alt=""
                />
              </div>
              <div className=" w-56 h-auto">
                <img
                  className=""
                  src="https://m.media-amazon.com/images/G/31/img21/Books/Aug2024/434x530_University-booksrev._CB565488257_.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col py-4 ">
            <h3 className=" font-bold text-2xl">
              Barack Obama's 2024 reading list
            </h3>

            <div className=" relative   py-4 px-12 w-full   ">
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={6} // Default to 6 slides per view
                breakpoints={{
                  1200: { slidesPerView: 5 }, // 1200px and up: 6 slides
                  992: { slidesPerView: 4 }, // 992px and up: 4 slides
                  768: { slidesPerView: 3 }, // 768px and up: 3 slides
                  576: { slidesPerView: 2 }, // 576px and up: 2 slides
                  0: { slidesPerView: 2 }, // Less than 576px: 1 slide
                }}
                navigation={{
                  prevEl: ".btn-4-prev",
                  nextEl: ".btn-4-next",
                }}
              >
                {itemsData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ItemCard image={item.imageUrl} title={item.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Custom navigation buttons */}
              <div className="swiper-button-prev btn-4-prev custom-button text-slate-500 h-12 w-12 -left-2">
                <CiSquareChevLeft />
              </div>
              <div className="swiper-button-next btn-4-next custom-button text-slate-500 h-12 w-12 -right-2">
                <CiSquareChevRight />
              </div>
            </div>
          </div>
          <section className="w-full py-8 px-4  justify-center bg-[#fef8d8]">
         <p className="font-bold text-2xl">
  Explore in your own Language
</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
              {/* Repeating the round divs six times */}
              
              {backgroundImages.map((image, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-cover bg-center rounded-full w-36 h-36 mx-auto"
                  style={{ backgroundImage: image }}
                ></div>
              ))}
            </div>
          </section>

          <div>
            <OfferCarousel />
          </div>
          <span className="block text-center bg-gray-200 mt-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline  cursor-pointer transition-colors duration-300 ease-in-out"
            >
              View More Deals
            </a>
          </span>
        </div>
      </div>

      <div className="p-2 md:p-2  bg-gray-50 text-gray-800">
        <h2 className="text-1xl  text-red-500 font-semibold mb-1">
          DBS Offers an Extraordinary Collection of Action and Adventure Books
        </h2>
        <p className="text-1xl font-semibold mt-2 mb-1">
          Get hooked to action-packed fiction, visit{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Action & Adventure
          </span>
          .
        </p>
        <p className="text-sm">
          Are you hooked more into books that give you excitement to make your
          boring weekend into action-packed? A lot of books can actually play
          the part of a boredom buster with much excitement and adventure. A
          good collection of Sidney Sheldon or some editions of classics or the
          Dan Brown creative, you name it, it’s featured in the Amazon list.
          Grab your favourite book right away.
        </p>

        <h3 className="text-1xl font-semibold mt-2 mb-1">
          Action and Adventures Books are Always Fun
        </h3>
        <p className="text-sm">
          Action and adventure books have always been a favourite to most of us,
          especially during our childhood days when the fantasies knew no
          limits. *The Adventures of Huckleberry Finn* were not just
          Huckleberry’s adventures alone; our childhood days were all an
          integral part of it. In that way, these books shaped our imagination
          and so should we do with the little ones of today’s time. Introduce
          your child to your childhood adventure books and let their imagination
          run wild. Continue your passion for action and adventure books and
          expand your collection by buying online at Amazon.in.
        </p>

        <h3 className="text-1xl font-semibold mt-2 mb-1">
          A Budget-Friendly Collection
        </h3>
        <p className="text-sm">
          The collection of action and adventure books available at Amazon.in is
          wide and includes an exclusive list of books at discounted rates.
          Moreover, you get an amazing collection in various other languages,
          including Spanish, French, German, Italian, etc. There’s no way you’ll
          run out of choices from the extensive range of action and adventure
          books.
        </p>

        <h3 className="text-1xl font-semibold mt-2 mb-1">
          Shop Online Action and Adventure Books at DBS
        </h3>
        <p className="text-sm">
          Amazon.in offers you the extensive collection of books in different
          formats. Kindle versions of most of the books can be grabbed either at
          really low prices or absolutely free of cost. Narrow down your search
          based on the formats available, including board book, Kindle eBooks,
          paperback, audiobook, pocket book, bundle, loose leaf, etc. Find your
          favourite author and narrow down your search further to find what you
          want. Avail cash on delivery on most of the books available. If you
          are looking for books on heavy discounts, you won’t be disappointed
          either. At Amazon.in, you can avail books at discount rates of 10%,
          25%, 35% and even 50% or more. Whatever your budget, Amazon.in offers
          you a great deal on your favourite action and adventure books.
        </p>
      </div>
    </>
  );
};

export default HomePage;
