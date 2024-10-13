import React from "react";
import { Leaf } from "../../Data/bannerAndLogoData";
import { FreshProductsData } from "../../Data/ProductData";
import Slider from "react-slick/lib/slider";

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
      <div className=" flex flex-col items-center justify-center p-3 mb-3 text-01">
        <img className=" mb-6" src={Leaf.imageUrl} alt="" />
        <p className="text-green-600 font-bold text-lg">FRESH PRODUCTS</p>
        <h1 className="w-[40%] text-center text-4xl font-extrabold text-gray-900 mt-3">
          Today's New Honest Product's Available
        </h1>
      </div>
      <div className=" category category-Slider h-[500px]">
        <Slider {...settings}>
          {FreshProductsData.map((card) => (
            <div key={card.id} className="pt-3 pb-3 pl-2 pr-2">
              <div className="card2 bg-white rounded-lg category-card">
                <div className="overflow-hidden rounded-xl">
                  <div className="img-Container">
                    <img
                      className=" w-[100%] h-auto"
                      src={card.url}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center cat-cont justify-center flex-col">
                  <p className="text-lg font-bold text-green cat-tit">
                    {card.product_Name}
                  </p>
                  <p className="category-btn w-fit mt-3 pt-2 pb-2 pr-4 pl-4 bg-green text-white font-semibold rounded-xl">
                    {card.discountedPrice} Products
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
