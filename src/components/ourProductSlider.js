import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OurProductFIRSTWIN2nload from "../img/OurProductFIRSTWIN2.png";
import OurProductFW2Ambulance from "../img/OurProductFW2Ambulance.png";
import OurProductFirstWinAFV from "../img/OurProductFirstWinAFV.png";
import OurProductFirstWinALV from "../img/OurProductFirstWinALV.png";
import OurProductFirstWinATV from "../img/OurProductFirstWinATV.png";

// import "./styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 200 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const items = [
    {
      url: OurProductFIRSTWIN2nload,
      title: 'FIRST WIN 2',
    },
    {
      url: OurProductFW2Ambulance,
      title: 'First Win 2 Ambulance',
    },
    {
      url: OurProductFirstWinAFV,
      title: 'First Win AFV',
    },
    {
      url: OurProductFirstWinALV,
      title: 'First Win ALV',
    },
    {
      url: OurProductFirstWinATV,
      title: 'First Win ATV',
    },
  ];


const ourProduct = () => {
  return (
    <div className="parent align-middle">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed = {4000}
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {items.map((resource, index) => {
          return (
            <div className="slider" key={index}>
              <img src={resource.url}  draggable="false" className="w-[336px] h-[252px] object-cover mx-auto" />
              <h3 className="py-6 px-3 mx-auto text-center text-[#2d2a4a] text-[32px] leading-[48px] font-bold">
                {resource.title}
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default ourProduct;
