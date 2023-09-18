import React, { useState } from 'react';

import OurProductFIRSTWIN2nload from "../img/OurProductFIRSTWIN2.png";
import OurProductFW2Ambulance from "../img/OurProductFW2Ambulance.png";
import OurProductFirstWinAFV from "../img/OurProductFirstWinAFV.png";
import OurProductFirstWinALV from "../img/OurProductFirstWinALV.png";
import OurProductFirstWinATV from "../img/OurProductFirstWinATV.png";



function OurProductSlider() {

    const items = [
        {
          imageUrl: OurProductFIRSTWIN2nload,
          title: 'FIRST WIN 2',
        },
        {
          imageUrl: OurProductFW2Ambulance,
          title: 'First Win 2 Ambulance',
        },
        {
          imageUrl: OurProductFirstWinAFV,
          title: 'First Win AFV',
        },
        {
          imageUrl: OurProductFirstWinALV,
          title: 'First Win ALV',
        },
        {
          imageUrl: OurProductFirstWinATV,
          title: 'First Win ATV',
        },
      ];

      const [startIndex, setStartIndex] = useState(0);
    
      const prevSlide = () => {
        setStartIndex((prevStartIndex) =>
          prevStartIndex === 0 ? items.length - 3 : prevStartIndex - 1
        );
      };
    
      const nextSlide = () => {
        setStartIndex((prevStartIndex) =>
          prevStartIndex === items.length - 3 ? 0 : prevStartIndex + 1
        );
      };
    
      const visibleItems = items.slice(startIndex, startIndex + 3);
  return (
    <>
        <div className="container mx-auto max-w-[1200px] ourProductSlider px-6 relative">
            <div className="text-center">
              <div className="carousel">
                {visibleItems.map((item, index) => (
                  <div key={index} className="carousel-item">
                    <img src={item.imageUrl} alt={item.title} className="h-[237px] object-cover mx-auto" />
                    <p className="mt-2 text-[32px] text-[#2d2a4a] font-bold ">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="carousel-control left">
            <svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="w-6 h-6"
      viewBox="0 0 320 448"
    >
      <path
        className="fill-opacity-100"
        d="M203.563 988.362 240 950.902l-119.193-122.54L240 705.822l-36.437-37.46-36.404 37.426.034.034L48 828.362l119.193 122.54-.033.034 36.403 37.426z"
        transform="translate(0 -604.362)"
      />
    </svg>
            </button>
            <button onClick={nextSlide} className="carousel-control right">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 320 448"
      className="w-6 h-6"  // Set the width and height using Tailwind CSS classes
    >
      <path
        
        d="M116.437 988.362 80 950.902l119.193-122.54L80 705.822l36.437-37.46 36.404 37.426-.034.034L272 828.362l-119.193 122.54.033.034-36.403 37.426z"
        transform="translate(0 -604.362)"
        className="fill-opacity-100 stroke-primary stroke-32 stroke-linecap-butt stroke-linejoin-miter stroke-miterlimit-4 stroke-dasharray-none"  // Apply Tailwind CSS classes to style the path
      />
    </svg>
            </button>
          </div>
    </>
  )
}

export default OurProductSlider