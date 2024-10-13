import React from "react";
import { Leaf } from "../../Data/bannerAndLogoData";
import './Discover.css'
const Discover = () => {
  return (
    <div className="mt-10 w-[100%] p-3 flex items-start justify-between gap-10 discovery-container ">
      {/* left  */}
      <div className="flex text-wrap justify-center gap-2 w-[100%] left-01 flex-col">
        <div className="p-3 mb-3 text-01">
          <img className=" mb-6" src={Leaf.imageUrl} alt="" />
          <p className="text-green-600 font-bold text-lg" >WELCOME TO GREENGRUB</p>
          <h1 className="text-4xl font-bold text-gray-700 mt-3">Be Healthy & Eat Only Pure Organic Food</h1>
        </div>
        <div className="p-3 flex items-center img justify-between gap-5 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-5">
            <img 
            className="bg-gray-200 h-20 p-2 w-20 rounded-full"
              src="https://greengrub-theme.myshopify.com/cdn/shop/files/L02-services-01.png?v=1702270089&width=1920"
              alt=""
            />
            <p className="text-xl font-bold text-gray-600 flex items-center justify-center">Agriculture & Natural Foods</p>
          </div>
          <div className="flex items-center gap-5">
            <img
              className="bg-gray-200 h-20 p-2 w-20 rounded-full"
              src="https://greengrub-theme.myshopify.com/cdn/shop/files/L02-services-02_2c21cdf5-5445-4ae1-9ff7-438831e8eff9.png?v=1702288646&width=1920"
              alt=""
            />
            <p className="text-xl font-bold text-gray-600 flex items-center justify-center">Fresh Healthy Vegetables & Fruits</p>
          </div>
        </div>
        <div className="p-3 text-gray-500 font-semibold italic">
          <p className="mb-5">
            Eating a diet that consists of pure and organic foods can contribute
            to overall health and well-being. Organic foods are grown without
            synthetic pesticides, herbicides, and fertilizers, and they often
            contain fewer artificial additives.
          </p>
          <button className="bg-green text-sm text-white pt-3 pb-3 pl-5 pr-5 rounded-lg">DISCOVER MORE</button>
        </div>
      </div>
      {/* right  */}
      <div className="flex items-start discovery-right gap-10 p-3 w-[100%]">
        {/* right 01 */}
        <div className=" flex flex-col gap-14 image-01 ">
          <div className="overflow-hidden rounded-xl">
            <div className="image">
              <img
              className="rounded-xl"
                src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-cms-01.webp?v=1701928884&width=1920"
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <div className="image">
              <img
              className="rounded-xl"
                src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-cms-02.webp?v=1701928884&width=1920"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* right 02  */}
        <div className="relative right-02">
          <div className="relative">
            <img
            className="rounded-2xl"
              src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-cms-03.webp?v=1701928884&width=1920"
              alt=""
            />
          </div>
          <div className="absolute bottom-[-90px] anime  right-6 flex items-center justify-center ">
            <img
            className="w-[300px] shadow-2xl rounded-2xl " 
              src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-cms-04.webp?v=1701928884&width=1920"
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Discover;
