import React from "react";
import "./Category.css";
import Slider from "react-slick";
import { cateogoryMain } from "../../Data/bannerAndLogoData";

const CategorySlider = () => {
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
    <div className=" category category-Slider h-[500px]">
      <Slider {...settings}>
        {cateogoryMain.map((card) => (
          <div key={card.id} className="pt-3 pb-3 pl-2 pr-2">
            <div className="card2 bg-white rounded-lg category-card">
              <div className="overflow-hidden rounded-xl">
                <div className="img-Container">
                  <img
                    className=" w-[100%] h-auto"
                    src={card.imageUrl}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-5 flex items-center cat-cont justify-center flex-col">
                <p className="text-lg font-bold text-green cat-tit">
                  {card.category}
                </p>
                <p className="category-btn w-fit mt-3 pt-2 pb-2 pr-4 pl-4 bg-green text-white font-semibold rounded-xl">
                  {card.totalProducts} Products
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
