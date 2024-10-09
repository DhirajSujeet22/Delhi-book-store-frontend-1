import React from "react";
import ReactStars from "react-rating-stars-component";

const ItemCard = ({ title, image }) => {
  return (
      <>
        <div className="relative rounded h-full  justify-center  mx-auto items-center min-h-72 min-w-44 group border border-solid flex flex-col gap-2 ">
          <div className=" flex-1 mx-auto items-center  flex justify-center w-full h-full bg-custom-gradient">
            <img
              className=" h-52 max-w-44 object-cover"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex flex-1  flex-col pb-4 justify-center items-center ">
            <p className="text-center items-center ">{title}</p>
            <ReactStars
              count={5}
              value={4}
              isHalf={true}
              activeColor="#DF7921"
              edit={false}
            />

            <div
              className=" flex gap-1 justify-center items-center text-center"
              aria-hidden="true"
            >
              <div>
                <sup className="a-price-symbol">₹</sup>
                <span className="a-price-whole">197</span>
              </div>
              <div className=" line-through text-xs text-[#565959]">
                <span className="a-price-symbol">₹</span>
                <span className="a-price-whole  ">250</span>
              </div>
              <div className=" text-xs text-[#565959]">
                <span className="a-price-whole  ">(21% off)</span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};




export default ItemCard;
