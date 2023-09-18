import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DesignExellenceAwardss from "../img/Design-Exellence-Awards-2011.png";
import ASEANBUSINESSAWARD2019 from "../img/ASEANBUSINESSAWARD2019.png";
import IPCHAMPION2019 from "../img/IPCHAMPION2019.png";
import IPCHAMPION2013 from "../img/IPCHAMPION2013.png";
import CSRDIWAWARD from "../img/CSR-DIW-AWARD2020.png";
import THAILANDSBRAND from "../img/THAILAND_S-BRAND-1.png";
import InternationalDefense from "../img/International-Defensebr-Exhibition.png";
import HUMANRIGHTAWARD from "../img/HUMANRIGHTAWARD2020.png";
import GreenIndustryy from "../img/GREENINDUSTRYLEVEL2.png";

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

const SliderItems = [
    {
      url: DesignExellenceAwardss,
      title: "DESIGN EXCELLENCE AWARD 2011 (REMARK)",
      desc: 'For First Win 4x4 Armored Vehicle From Minster Of Commerce Of Thailand'
    },
    {
      url: IPCHAMPION2013,
      title: "IP CHAMPION 2013",
      desc: 'In Patent From Department Of Intellectual Property'
    },
    {
      url: IPCHAMPION2019,
      title: "IP CHAMPION 2019",
      desc: (
        <>
          Excellence Intellectual Property<br/>
          Category: Industrial Design (Large <br/>Enterprises And State Enterprises)<br/>
          From Department Of Intellectual Property
        </>
      )
    },
    {
      url: ASEANBUSINESSAWARD2019,
      title: "ASEAN BUSINESS AWARD 2019",
      desc: (
        <>
          In The Field Of Automotion (Mid-Tier)<br/>
          From ASEAN Business Advisory Council:<br/>
          ASEAN-BAC
        </>
      )
    },
    {
      url: InternationalDefense,
      title: "International Defense Exhibition (IDEX2005)",
      desc: (
        <>
          Most Promising Award During<br/>
          International Defense Exhibition (IDEX2005) From Shaikh<br/>
          Nahyan Bin Zayed Al Nahyah
        </>
      )
    },
    {
      url: THAILANDSBRAND,
      title: "THAILAND BRAND",
      desc: (
        <>
          Chaiseri Qualify And Received Logo "Thailand<br/>
          Brand" From Department Of Export<br/>
          Promotion, Ministry Of Commerce
        </>
      )
    },
    {
      url: CSRDIWAWARD,
      title: "CSR-DIW AWARD 2020",
      desc: (
        <>
          In Continue To Hold Activities For Society,<br/>
          Communities And Environment<br/>
          From Department Of Industrial Works
        </>
      )
    },
    {
      url: GreenIndustryy,
      title: "GREEN INDUSTRY LEVEL 2",
      desc: (
        <>
          Green Industry Level 2<br/>
          From Ministry Of Industry<br/>
        </>
      )
    },
    
  ]


const AboutSlider = () => {
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
        {SliderItems.map((slide, index) => {
          return (
            <div className="slider" key={index}>
                <h3 className="py-6 px-3 mx-auto text-[#d73a32] text-center text-[28px] h-[130px] leading-[34px] font-bold">
                {slide.title}
              </h3>
              <img src={slide.url}  draggable="false" className=" object-cover mx-auto" />
              <h3 className="py-6 px-3 mx-auto text-white text-center text-base">
                {slide.desc}
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default AboutSlider;
