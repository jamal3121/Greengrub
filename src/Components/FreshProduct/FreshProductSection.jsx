import React from "react";
import { Leaf } from "../../Data/bannerAndLogoData";
import { FreshProductsData } from "../../Data/ProductData";
import Slider from "react-slick/lib/slider";
import './FreshProduct.css'
const FreshProductSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 cards by default
    slidesToScroll: 1,
    autoplay: true, // This should be true
    autoplaySpeed: 3000, // Adjust speed as necessary
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600, // Mobile view
        settings: {
          slidesToShow: 2, // Show 2 cards in mobile view
          slidesToScroll: 1, // Added for consistency
        },
      },
    ],
  };
  return (
    <div className="mt-10 mb-10">
      <div className=" flex title-content flex-col items-center justify-center p-3 mb-3 text-01">
        <img className=" mb-6" src={Leaf.imageUrl} alt="" />
        <p className="text-green-600 font-bold text-lg">FRESH PRODUCTS</p>
        <h1 className="w-[40%] text-center text-4xl font-extrabold text-gray-900 mt-3">
          Today's New Honest Product's Available
        </h1>
      </div>
      <div className="slider h-[500px]">
        <Slider {...settings}>
          {FreshProductsData.map((frshitems,index) => (
            <div key={frshitems.id} className="pt-3 pb-3 pl-2 pr-2 rounded-lg">
              <div className="contine">
                <div className="overflow-hidden bg-gray-300 rounded-xl border-b border-thin">
                  <div className="img-Container">
                    <img
                      className=" w-[100%] h-auto"
                      src={frshitems.url}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center cat-cont justify-center flex-col ">
                  <p className="text-lg font-bold text-gray-900 cat-tit">
                    {frshitems.product_Name}</p>
                  <p className="font-extrabold text-md text-green rounded-xl flex items-center gap-5">
                    <span className="text-gray-500 line-through font-light"> ${frshitems.mrp}.00 </span>
                    <span> ${frshitems.discountedPrice}.00</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreshProductSection;
