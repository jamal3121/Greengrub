import React from "react";
import "./Category.css";
import { Leaf } from "../../Data/bannerAndLogoData";
import CategorySlider from "./CategorySlider";
const Category = () => {
  return (
    <div className="relative category pt-10  w-[100%]">
      <div className="mt-10 w-[100%]">
        <div className="w-[100%] flex items-center justify-center smallScreenmai gap-5 flex-col">
          <img className="" src={Leaf.imageUrl} alt="" />
          <p className="text-green text-xl font-extrabold ">SHOP BY CATEGORIES</p>
          <h1 className="text-gray-800 text-3xl w-[35%] text-center font-extrabold">Organic & Healthy Foods Provider Farming</h1>
        </div>
        <div>
            <CategorySlider/>
        </div>
      </div>
      <img
        className="absolute imagebottom bottom-0"
        src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-curve_31a633ea-97a4-4e66-9563-903ca8c60314.png?v=1706184381"
        alt=""
      />
    </div>
  );
};

export default Category;
