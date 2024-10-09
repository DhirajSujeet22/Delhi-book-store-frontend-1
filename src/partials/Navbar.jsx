import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className=" h-full lg:min-h-20 min-h-16 w-full ">
        <div className=" w-full flex my-auto gap-3 justify-start items-start text-start py-4 ">
          <div className="nav-left flex flex-col gap-3 lg:flex-row">
            <div className="nav-logo">
              <Link to="/">
                <img
                  className=" !w-36 lg:!w-24  "
                  src="/delhiBookStore-logo.png"
                />
              </Link>
            </div>
            <div className="location lg:flex hidden">
              <p className="top-text">Deliver to</p>
              <div className="location-icon">
                <i className="fa-solid fa-location-dot px-1" />
                <p className="bottom-text">India</p>
              </div>
            </div>
          </div>
          <div className="nav-center mt-2 px-4 h-16 lg:h-10 flex items-center">
            <div className="relative inline-block">
              <div className="relative inline-block">
                <select
                  defaultValue="All"
                  className="bg-gray-200 text-[#28416c] search-dropdown w-20 lg:w-16 text-lg lg:text-[0.8rem] pl-3 pr-8 py-[0.4rem]   appearance-none focus:outline-none"
                >
                  <option className="h-12">All</option>
                  <option className="h-12">All Departments</option>
                  <option className="h-12">Arts & Crafts</option>
                </select>
                {/* Custom arrow using FontAwesome on the right */}
                <i className="fa-solid fa-angle-down absolute top-1/2 right-3 transform -translate-y-1/2 text-[#28416c] pointer-events-none"></i>
              </div>
              {/* Custom arrow using FontAwesome on the right */}
              <i className="fa-solid fa-angle-down absolute top-1/2 right-3 transform -translate-y-1/2 text-[#28416c] pointer-events-none"></i>
            </div>
            <input
              type="text"
              placeholder="Search Delhi Book Store"
              className="search-box w-full px-4 py-[0.4rem] sm:py-[0.6rem]  text-black text-lg lg:text-sm  focus:outline-none"
            />
            <div className="py-[0.7rem] sm:py-0  search-icon flex justify-center items-center text-center h-full w-16">
              <i className="text-[1.5rem] sm:pt-2 sm:text-3xl lg:text-xl w-full fa-solid fa-magnifying-glass text-[#28416c] flex justify-center rounded-tl-none rounded-bl-none rounded-tr-[0.3rem] rounded-br-[0.3rem]"></i>
            </div>
          </div>
        </div>
        <div className="nav-right lg:flex hidden">
          <div className="language-option">
            <div className="flag">
              <i className="fa-regular fa-flag" />
            </div>
            <select className="select-language">
              <option value="lan">EN</option>
              <option value="lan">ES</option>
              <option value="lan">AR</option>
            </select>
          </div>
          <div className="account-option">
            <p className="top-text">Hello, sign in</p>
            <select className="select-account">
              <option value="Account">Account &amp; Lists</option>
              <option value="Account">Account &amp; Lists</option>
              <option value="Account">Account &amp; Lists</option>
            </select>
          </div>
          <div className="order-option">
            <p className="top-text">Returns</p>
            <p className="bottom-text">&amp; Orders</p>
          </div>
          <div className="cart-option">
            <div className="cart-logo">
              <i className="fa-solid fa-cart-shopping" />
            </div>
            Cart
          </div>
        </div>
      </nav>
      <div className="nav-options text-xl lg:text-sm h-16 lg:h-8 ">
        <div className="all-logo">
          <i className="fa-solid fa-bars" />
          <p className="list">All</p>
        </div>
        <div className="options   ">
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Registry</p>
          <p>Gift Cards</p>
          <p> Sell</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
