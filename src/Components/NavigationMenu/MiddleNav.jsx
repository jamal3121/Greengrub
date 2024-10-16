import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { logo } from "../../Data/bannerAndLogoData";
import { GoPerson } from "react-icons/go";
import { PiSuitcase } from "react-icons/pi";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const MiddleNav = () => {

  return (
    <div className="w-[100%]">
      <div className="flex items-center justify-between pt-8 pb-8 pl-6 pr-6 cursor-pointer bg-white border-b border-gray-300 d-none">
        <div className=" search flex items-center justify-center text-md font-semibold bg-gray-200 p-2 pt-3 pb-3 rounded-lg text-black maxsize">
          <input
            type="text"
            placeholder="Search"
            id=""
            className="border-0 outline-0 pl-2 text-md bg-gray-200 text-black "
          />
          <SlMagnifier className="text-lg font-bold mr-3" />
        </div>
        <div className="logo mr-7 flex items-center justify-center ml-[-5%]">
          <img src={logo.imageUrl} alt="" />
        </div>
        <div className="flex gap-4 text-3xl items-center">
          <GoPerson />
          <button className="hover:bg-black flex items-center text-lg p-3 bg-green text-white gap-3 rounded-2xl ">
            <PiSuitcase className="text-3xl" />
            <p className="text-md bg-white w-[20px] h-[20px] flex items-center justify-center text-black rounded-full">
              0
            </p>
            <p className="ml-[-10px]">Cart</p>
          </button>
        </div>
      </div>

      {/* small screen  */}
      <div className="relative smallscreen flex justify-between ds-none p-2 bg-white items-center w-[100%]">
        {/* bar icons   */}
        <div className="w-[100%] relative">
          <FaBars />
        </div>
        {/* icons  */}
        <div className="logo w-[100%] flex items-center justify-center">
          <img src={logo.imageUrl} alt="" />
        </div>
        {/* search   */}
        <div className="w-[100%] flex gap-2 items-center justify-end">
          <div className=" flex items-center justify-center">
            <SlMagnifier className="text-md   font-bold" />
          </div>
          <div className="flex gap-2 text-xl items-end  ">
            <button className="hover:bg-black flex items-center text-sm bg-green text-white gap-1 rounded-md pt-0.5 pb-0.5 pl-1 pr-1 ">
              <PiSuitcase className="text-xl" />
              <p className="text-md bg-white w-[15px] h-[15px] flex items-center justify-center text-black rounded-full">
                0
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
