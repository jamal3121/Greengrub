import React, { useEffect, useState } from "react";
import { Leaf } from "../../Data/bannerAndLogoData";
import "./SpecialOffer.css";

const SpecialOffer = () => {
  // Calculate the end time
  const endTime =
    Math.floor(Date.now() / 1000) +
    (108 * 24 * 60 * 60 + 7 * 60 * 60 + 30 * 60);

  const calculateTimeLeft = () => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const secondsLeft = endTime - currentTime; // Calculate seconds left

    if (secondsLeft < 0) return {}; // Timer ended

    return {
      days: Math.floor(secondsLeft / (24 * 60 * 60)),
      hours: Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60)),
      minutes: Math.floor((secondsLeft % (60 * 60)) / 60),
      seconds: secondsLeft % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear the timer on unmount
  }, []);

  return (
    <div className="relative mt-[-300px] offersection">
      <img
        className="rotate-180"
        src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-curve_31a633ea-97a4-4e66-9563-903ca8c60314.png?v=1706184381"
        alt=""
      />
      <div className="w-[60%] h-full flex flex-col items-start ml-20 justify-center">
        <img className="mb-5" src={Leaf.imageUrl} alt="" />
        <p className="text-green mb-5 font-bold text-xl">SPECIAL OFFER</p>
        <h1 className="text-5xl w-[100%] font-bold mb-5 text-gray-800">
          Special Deal Of The Week: Get Save 40% OFF
        </h1>
        <div className="timer gap-10 flex items-center justify-between">
          {timeLeft.days !== undefined && (
            <>
              <p className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg w-28 h-28 justify-center font-extrabold">
                <span className="font-bold text-2xl">{timeLeft.days}</span> <span> Day </span>
              </p>
              <p className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg w-28 h-28 justify-center font-extrabold">
                <span className="font-bold text-2xl">{timeLeft.hours}</span> <span> Hour </span>
              </p>
              <p className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg w-28 h-28 justify-center font-extrabold">
                <span className="font-bold text-2xl">{timeLeft.minutes}</span> <span> Min </span>
              </p>
              <p className="flex flex-col items-center gap-2 bg-green text-white p-2 rounded-lg w-28 h-28 justify-center font-extrabold">
                <span className="font-bold text-2xl">{timeLeft.seconds}</span> <span> Sec</span>
              </p>
            </>
          )}
        </div>
        <button className="mt-10 w-36 p-3 rounded-xl bg-green text-white">SHOP NOW</button>
      </div>
      <img
        src="https://greengrub-theme.myshopify.com/cdn/shop/files/L01-curve_31a633ea-97a4-4e66-9563-903ca8c60314.png?v=1706184381"
        alt=""
        className="absolute bottom-0"
      />
    </div>
  );
};

export default SpecialOffer;
