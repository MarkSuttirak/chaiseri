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
                    <img src={item.imageUrl} alt={item.title} className="h-[237px] object-cover" />
                    <p className="mt-2 text-[32px] text-[#2d2a4a] font-bold ">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="carousel-control left">
            &laquo;
            </button>
            <button onClick={nextSlide} className="carousel-control right">
            &raquo;
            </button>
          </div>
    </>
  )
}

export default OurProductSlider