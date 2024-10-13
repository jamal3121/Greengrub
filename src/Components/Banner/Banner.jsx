import React from "react";
import { banner2 } from "../../Data/bannerAndLogoData";
import './Banner.css';

const Banner = () => {
  return (
    <div className="w-[100%] mt-10 mb-10 flex banner justify-between items-center p-5 gap-10">
      {banner2.map((items, index) => (
        <div className="relative overflow-hidden rounded-3xl w-[100%] bannerContainer" key={index}>
          <div className="w-[100%] ">
            <img className="w-[100%] h-[100%] rounded-3xl bannerImg" src={items.imageUrl} alt={items.title} />
          </div>
          <div className="absolute top-[10%] left-[3%] flex flex-col bannerContent justify-center w-[45%] text-white">
            <p className="text-lg font-extrabold mb-3">{items.title}</p>
            <h2 className="text-3xl font-extrabold mb-5">{items.description}</h2>
            <button type="button" className="p-3 w-fit bg-white text-gray-900 rounded-2xl">SHOP NOW</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
