import React from "react";
import "./Testimonial.css";
import { Leaf } from "../../Data/bannerAndLogoData";
import { RiDoubleQuotesL } from "react-icons/ri";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import Slider from "react-slick";
import { ReviewsDemo } from "../../Data/ReviewsData/ReviewsDemo";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 5 cards by default
    slidesToScroll: 1,
    autoplay: true, // This should be true
    autoplaySpeed: 3000, // Adjust speed as necessary
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600, // Mobile view
        settings: {
          slidesToShow: 1, // Show 2 cards in mobile view
          slidesToScroll: 1, // Added for consistency
        },
      },
    ],
  };
  return (
    <div className="w-[100%] flex items-start  testimonial justify-between gap-10 p-5 mb-0">
      {/* left side  */}
      <div className="relative left w-[50%] mt-10 flex items-start justify-between gap-5">
        <div className="relative">
          <div className="overflow-hidden leftimg ">
            <div>
              <img
                className="image01 "
                src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-cms-05.webp?v=1701932991&width=1920"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="absolute anime  top-2 left003 left-72">
          <img
            className="w-[300px] rounded-2xl shadow-2xl  "
            src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-cms-04.webp?v=1701928884&width=1920"
            alt=""
          />
        </div>
        <div className="relative top-48 overflow-hidden leftimg rounded-2xl">
          <div>
            <img
              className="image01 rounded-2xl"
              src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-cms-06.webp?v=1701932991&width=1920"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* right side  */}
      <div className="right w-[50%]">
        <div className="p-3 mb-3 testo text-01">
          <img className=" mb-6" src={Leaf.imageUrl} alt="" />
          <p className="text-green-600 font-bold text-lg">TESTIMONIAL</p>
          <h1 className="text-4xl font-bold text-gray-700 mt-3">
            What is Customer’s Feedback Reviews Say?
          </h1>
        </div>
        <Slider {...settings} className="testi-slider">
          {ReviewsDemo.map((items) => (
            <div key={items.id} className="w-full first-div">
              <div className="review border-b border-gray-200 p-4">
                <div className="reviews">
                  <RiDoubleQuotesL className="text-7xl font-light text-gray-700" />
                  <p className="text-sm text-gray-700 font-semibold mb-2">
                    The reviews found these sites are often detail hoses and
                    doesn't like about their experience detail Hassen detail
                    here these sites..
                  </p>
                  <p className="flex items-center text-green text-lg mb-2">
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStarHalf />
                  </p>
                  <h1 className="text-xl font-extrabold text-gray-900 pb-4">
                    {items.Customer} - {items.profession}
                  </h1>
                </div>
              </div>
              <div className="productcard flex items-center justify-start mt-3 gap-10 w-4/5">
                <img
                  className="w-20 rounded-xl"
                  src={items.Url}
                  alt={items.productPurchased}
                />
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-bold text-gray-900">
                    {items.productPurchased}
                  </h1>
                  <p className="flex items-center justify-start gap-5">
                    <span className="font-bold text-gray-400 line-through">
                      ${items.mrp}.00
                    </span>
                    <span className="font-extrabold text-gray-900">
                      ${items.price}.00
                    </span>
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

export default Testimonial;
