import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { LiaHandPointRight } from "react-icons/lia";
import "./Navbar.css";
const TopHeader = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const handleLang = () => {
    setIsLangOpen(!isLangOpen);
  };
  const handleCountry = () => {
    setIsCountryOpen(!isCountryOpen);
  };
  const cards = [
    {
      id: 1,
      icon: <LiaHandPointRight />,
      text: "Use discount code 'GREENGRUB001' to get 5% off",
    },
    {
      id: 2,
      icon: <LiaHandPointRight />,
      text: "Get a $50 gift card on a purchase over $1000",
    },
    {
      id: 3,
      icon: <LiaHandPointRight />,
      text: "Purchase for up to $50 and get free shipping",
    },
  ];

  return (
    <div className=" flex justify-between items-center pt-3 pb-3 bg-green topHeader">
      <div className="ml-2 help">
        <p className=" text-md text-white font-semibold">
          Need help ? call us:+01 0123 456 789
        </p>
      </div>
      <div>
        <p className="flex items-center text-white font-semibold text-md gap-2">
          <LiaHandPointRight /> For free shipping purchase only $50{" "}
        </p>
      </div>
      <div className="p-2 gap-3 text-white flex font-semibold mr-4 help">
        <ul>
          <li>
            <p
              className=" cursor-pointer relative pr-3 flex items-center"
              onClick={handleCountry}
            >
              United State <RiArrowDownSLine className="ml-2 text-2xl" />{" "}
            </p>
            {isCountryOpen && (
              <div className="absolute top-10 right-[120px] bg-white w-[160px] text-gray-900 rounded-lg p-4  z-50 bx-shadow">
                <ul className="flex flex-col items-start gap-6">
                  {["Austria", "Canada", "India"].map((items) => (
                    <li className=" hover:text-gray-500 ">
                      <a href="#">{items}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
        <ul>
          <li>
            <p
              className="cursor-pointer flex items-center"
              onClick={handleLang}
            >
              English <RiArrowDownSLine className="ml-2 text-2xl" />
            </p>
            {isLangOpen && (
              <div className="absolute top-10 right-[10px] bg-white w-[160px] text-gray-900 rounded-lg p-4  z-50 bx-shadow">
                <ul className="flex flex-col items-start gap-6">
                  {["English", "Tamil", "Hindi"].map((items) => (
                    <li>
                      <a href="#">{items}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
