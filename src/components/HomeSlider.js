import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FIRSTWINAFV from "../img/FIRSTWINAFV.png";
import FirstWinAtv from "../img/FirstWinAtv.png";
import FIRSTWIN2 from "../img/FIRSTWIN2.png";
import FIRSTWINALV from "../img/FIRSTWINALV.png";
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
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const resourcesdd = [
    {
      url: FIRSTWINAFV,
      title: "FIRST WIN AFV",
    },
    {
      url: FirstWinAtv,
      title: "First win atv",
    },
    {
      url: FIRSTWIN2,
      title: "FIRST WIN 2",
    },
    {
      url: FIRSTWINALV,
      title: "FIRST WIN ALV",
    },
    {
      url: FIRSTWINAFV,
      title: "FIRST WIN AFV",
    },
  ];


const HomeSlider = () => {
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
        {resourcesdd.map((resource, index) => {
          return (
            <div className="slider" key={index}>
              <img src={resource.url}  draggable="false" className="w-[222px] h-[181px] object-cover mx-auto" />
              <h3 className="py-6 px-3 mx-auto text-[#2d2a4a] text-[32px] leading-[48px] font-bold">
                {resource.title}
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeSlider;
