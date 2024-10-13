import React from "react";
import { Leaf, serviceImage } from "../../Data/bannerAndLogoData";
import "./Service.css";
import Slider from "react-slick/lib/slider";
const Service = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides in milliseconds
    pauseOnHover: true, // Pause autoplay on hover
  };
  return (
    <div className="w-[100%] mt-10">
      <div className="w-[100%] title-content flex flex-col gap-5 items-center justify-center">
        <img className=" w-20" src={Leaf.imageUrl} alt="" />
        <p className="text-green text-lg font-extrabold">FARMING WITH LOVE</p>
        <h1 className="text-4xl w-[40%] text-center leading-10 font-extrabold text-gray-900">
          What They’re Talking About Our Company?
        </h1>
      </div>
      <div className="mb-10">
        <div className="flex items-center large-card gap-14 pl-10 pr-10 justify-between relative">
          {serviceImage.map((items) => (
            <div className="p-5 relative flex serv-card flex-col items-center mt-28">
              <div className="absolute top-[-50px] bg-white w-[120px] h-[120px] border-[7px] border-gray-100 rounded-full p-4 ">
                <img
                  className="  flex w-full h-full items-center justify-center"
                  src={items.imageUrl}
                  alt=""
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-5 text-center flex items-center justify-start flex-col gap-4">
                <p className="mt-10 text-xl font-bold">{items.title}</p>
                <p className="mb-10 text-md text-gray-600">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-container">
          <Slider {...settings} className="p-2">
            {serviceImage.map((card, index) => (
              <div key={index} className="card ">
                <div className="w-[100%] flex items-center justify-center">
                  <img className="w-20 h-20 bg-white p-2 rounded-full border " src={card.imageUrl} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-[100%] p-5 flex items-center justify-center">
        <iframe
          width="90%"
          height="450px"
          className="rounded-3xl"
          src="https://www.youtube.com/embed/_9VUPq3SxOc?si=yijjcmGXvItAfX-F"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style={{ display: "block", margin: "auto" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Service;
