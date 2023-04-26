import { Carousel } from "flowbite-react";
import React from "react";
import { carouselTxt } from "../../tempData/carouselTxt";

const TextCaroucel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="bg-white text-center text-lg xl:text-2xl lg:text-4xl ">
        {
            carouselTxt.map((txt, idx) => {
                return (
                <div key={idx}>
                    <p>“{txt.text}”</p>
                    <p> - {txt.by} - </p>
                </div>
            )})
        }
      </Carousel>
    </div>
  );
};

export default TextCaroucel;
