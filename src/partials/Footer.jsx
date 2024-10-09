import React from "react";

const Footer = () => {
  const handleScroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div
        className="back-option text-lg cursor-pointer"
        onClick={handleScroll}
      >
        Back to top
      </div>
      <div className="footer-links pb-4 !h-full ">
        <ul className="  ">
          <p>Get to Know Us</p>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Careers
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Blog
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            About DBS
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Investor Relations
          </a>
        </ul>
        <ul className=" lg:block hidden">
          <p>Make Money with Us</p>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Sell products on DBS
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Sell on DBS Business
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Sell apps on DBS
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Become an Affiliate
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Self-Publish with Us
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Host an DBS Hub
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            ›See More Make Money with Us
          </a>
        </ul>
        <ul>
          <p>DBS Payment Products</p>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            DBS Business Card
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Shop with Points
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Reload Your Balance
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            DBS Currency Converter
          </a>
        </ul>
        <ul className=" lg:block hidden">
          <p>Let Us Help You</p>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            DBS and COVID-19
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Your Account
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Your Orders
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Shipping Rates &amp; Policies
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Returns &amp; Replacements
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Manage Your Content and Devices
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            DBS Assistant
          </a>
          <a className=" font-medium  lg:font-normal !text-base lg:!text-xs">
            Help
          </a>
        </ul>
      </div>
      <div className="country-info h-full py-4 flex justify-around items-center mx-auto ">
        <div className="logo">
          <img className=" !w-36 lg:!w-24  " src="/delhiBookStore-logo.png" />
        </div>
        <div className="options h-full lg:!flex  !hidden ">
          <select className=" h-full ">
            <option value="En">English</option>
          </select>
          <select className=" h-full ">
            <option value={1}>$ USD - U.S. Dollar</option>
          </select>
          <select className=" h-full ">
            <option value={4}>United states</option>
          </select>
        </div>
      </div>
      <div className="policies text-xl lg:text-xs h-full py-4">
        <div className="pages">
          <a href="">Conditions of Use</a>
          <a href="">Privacy Notice</a>
          <a href="">Your Ads Privacy Choices</a>
        </div>
        © 1996-2023, DBS.com, Inc. or its affiliates
      </div>
    </footer>
  );
};

export default Footer;
