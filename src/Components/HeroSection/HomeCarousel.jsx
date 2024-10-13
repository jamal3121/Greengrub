import React from "react";
import Slider from "react-slick/lib/slider";
import "./HomeCarousel.css"; // Import your styles here
import { smallScreenBanner } from "../../Data/bannerAndLogoData";

const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // Enable fade effect for smoother transitions
    cssEase: "linear", // Use a linear easing for smoothness
  };

  const largeScreenBanner = [
    {
      id: 1,
      imageUrl:
        "https://greengrub-theme.myshopify.com/cdn/shop/files/L01-slider-02.webp?v=1701928424&width=1920",
      alt: "Banner Image 1",
    },
    {
      id: 2,
      imageUrl:
        "https://greengrub-theme.myshopify.com/cdn/shop/files/L01-slider-01.webp?v=1701928424&width=1920",
      alt: "Banner Image 2",
    },
  ];

  return (
    <div className="carousel relative">
      <Slider {...settings} className="bigbanner">
        {largeScreenBanner.map((image) => (
          <div className="relative" key={image.id}>
            <img src={image.imageUrl} alt={image.alt} />
            {image.id === 1 && (
              <div className="absolute top-0 left-[50%] h-[100%] w-[45%] flex flex-col justify-center items-start">
                <p className="text-xl mb-2 font-extrabold text-green">
                  ORGANIC AND HEALTHY FRESH FOOD PROVIDER
                </p>
                <h2 className="mb-4 text-6xl font-bold text-gray-800 text-wrap">
                  New Honest Products Available Now
                </h2>
                <p className="mb-5">
                  <span className="font-bold mr-2 text-md">FLAT</span>
                  <span className="font-extrabold text-green text-3xl">
                    30% OFF
                  </span>
                </p>
                <div className=" flex items-center gap-10">
                  <button className="pt-4 rounded-xl pb-4 pl-5 pr-5 text-md font-semibold text-white bg-green hover:bg-gray-800">
                    CODE:GREENGRUB001
                  </button>
                  <button className="pt-4 pb-4 pl-5 pr-5 rounded-xl text-md font-semibold bg-gray-800 text-white hover:bg-green">
                    SHOP NOW
                  </button>
                </div>
              </div>
            )}
            {image.id === 2 && (
              <div className="absolute top-0 left-[5%] h-[100%] w-[45%] flex flex-col justify-center items-start">
                <p className="text-xl mb-2 font-extrabold text-green">
                  READY FOR INSTANT AND CONVENIENT USE
                </p>
                <h2 className="mb-4 text-6xl font-bold text-gray-800 text-wrap">
                  Tasty & Fresh Healthy Organic Foods{" "}
                </h2>
                <p className="mb-5">
                  <span className="font-bold mr-2 text-md">FLAT</span>
                  <span className="font-extrabold text-green text-3xl">
                    20% OFF
                  </span>
                </p>
                <div className=" flex items-center gap-10">
                  <button className="pt-4 rounded-xl pb-4 pl-5 pr-5 text-md font-semibold text-white bg-green hover:bg-gray-800">
                    CODE:GREENGRUB001
                  </button>
                  <button className="pt-4 pb-4 pl-5 pr-5 rounded-xl text-md font-semibold bg-gray-800 text-white hover:bg-green">
                    SHOP NOW
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
      <Slider {...settings} className="smallbanner">
        {smallScreenBanner.map((image) => (
          <div className="relative" key={image.id}>
            <img src={image.imageUrl} alt={image.alt} />
            {image.id === 1 && (
              <div className="absolute top-0 left-[30%] text-wrap h-[100%] w-[70%] flex flex-col justify-center items-start">
                <p className="text-sm font-extrabold text-green mb-2">
                  ORGANIC AND HEALTHY FRESH FOOD PROVIDER
                </p>
                <h2 className="mb-3 font-bold text-gray-800 text-md text-wrap">
                  New Honest Products Available Now
                </h2>
                <p className="5">
                  <span className="font-bold text-xs pr-1">FLAT</span>
                  <span className="font-extrabold text-md text-green ">
                    30% OFF
                  </span>
                </p>
                <div className=" flex items-center gap-2 mt-2">
                  <button className=" rounded-sm text-xs p-1  font-semibold text-white bg-green hover:bg-gray-800">
                    CODE:GREENGRUB001
                  </button>
                  <button className="rounded-sm p-1 text-xs  font-semibold bg-gray-800 text-white hover:bg-green">
                    SHOP NOW
                  </button>
                </div>
              </div>
            )}
            {image.id === 2 && (
              <div className="absolute top-0 right-[25%] h-[100%] w-[70%] flex flex-col justify-center items-start">
                 <p className=" text-sm mb-2 font-extrabold text-green">
                  READY FOR INSTANT AND CONVENIENT USE
                </p>
                <h2 className="text-lg font-bold text-gray-800 text-wrap">
                  Tasty & Fresh Healthy Organic Foods{" "}
                </h2>
                <p className="mb-5">
                  <span className="font-bold text-xs mr-1 ">FLAT</span>
                  <span className="font-extrabold text-md text-green ">
                    20% OFF
                  </span>
                </p>
                <div className=" flex items-center gap-5">
                  <button className=" text-xs p-1 rounded-sm font-semibold text-white bg-green hover:bg-gray-800">
                    CODE:GREENGRUB001
                  </button>
                  <button className="text-xs p-1 rounded-sm font-semibold bg-gray-800 text-white hover:bg-green">
                    SHOP NOW 
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
      <img
        className="absolute bottom-0"
        src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-curve_31a633ea-97a4-4e66-9563-903ca8c60314.png?v=1706184381"
        alt=""
      />
    </div>
  );
};

export default HomeCarousel;
