import React, { useState } from "react";
import IDEXAbuDhabi2023 from "../img/2023IDEX@AbuDhabi.jpg";
import DefenseandSecurity2019 from "../img/2019DefenseandSecurity.jpg";
import IDEXAbuDhabi2019 from "../img/2019IDEX@AbuDhabi.jpg";
import ArmyexhibitionRussia2019 from "../img/2019ArmyexhibitionRussia.jpeg";
import INDODEFENCE2018 from "../img/2018INDODEFENCE.jpg";
import DefenseandSecurity2017 from "../img/2017DefenseandSecurity.jpg";
import IDEX2015 from "../img/2015IDEX.jpg";
import DSA2014 from "../img/2014DSA.jpg";
import IDEX12013 from "../img/2013IDEX1.jpg";
import IDEX22013 from "../img/2013IDEX2.jpg";
import DefenseandSecurity2013 from "../img/2013DefenseandSecurity.jpg";
import DefenseandSecurity22013 from "../img/2013DefenseandSecurity2.jpg";
import DefenseandSecurity32013 from "../img/2013DefenseandSecurity3.jpg";
import GulfDefenseandAerospace12013 from "../img/2013GulfDefenseandAerospace1.jpg";
import GulfDefenseandAerospace22013 from "../img/2013GulfDefenseandAerospace2.jpg";
import Eurosatory2012 from "../img/2012Eurosatory2012.jpeg";
import DefenseandSecurity2012 from "../img/2012DefenseandSecurity2012.jpg";
import IDEX20112011 from "../img/2011IDEX2011.jpg";
import Eurosatory20102010 from "../img/2010Eurosatory2010.jpg";


const images = [
  {
    src: IDEXAbuDhabi2023,
    caption: "2023 IDEX @ Abu Dhabi",
  },
  {
    src: DefenseandSecurity2019,
    caption: "2019 Defense and Security",
  },
  {
    src: IDEXAbuDhabi2019,
    caption: "2019 IDEX @ Abu Dhabi",
  },
  {
    src: ArmyexhibitionRussia2019,
    caption: "2019 Army exhibition RussiaImage 4 Caption",
  },
  {
    src: INDODEFENCE2018,
    caption: "2018 INDODEFENCE",
  },
  {
    src: DefenseandSecurity2017,
    caption: "2017 Defense and Security",
  },
  {
    src: IDEX2015,
    caption: "2015 IDEX",
  },
  {
    src: DSA2014,
    caption: "2014 DSA",
  },
  {
    src: IDEX12013,
    caption: "2013 IDEX 1",
  },
  {
    src: IDEX22013,
    caption: "2013 IDEX 2",
  },
  {
    src: DefenseandSecurity2013,
    caption: "2013 Defense and Security",
  },
  {
    src: DefenseandSecurity22013,
    caption: "2013 Defense and Security 2",
  },
  {
    src: DefenseandSecurity32013,
    caption: "2013 Defense and Security 3",
  },
  {
    src: GulfDefenseandAerospace12013,
    caption: "2013 Gulf Defense and Aerospace 1",
  },
  {
    src: GulfDefenseandAerospace22013,
    caption: "2013 Gulf Defense and Aerospace 2",
  },
  {
    src: Eurosatory2012,
    caption: "2012 Eurosatory 2012",
  },
  {
    src: DefenseandSecurity2012,
    caption: "2012 Defense and Security 2012",
  },
  {
    src: IDEX20112011,
    caption: "2011 IDEX2011",
  },
  {
    src: Eurosatory20102010,
    caption: "2010 Eurosatory 2010",
  },
  
  // Add more images and captions here
];

const NewsMediaExhibition = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="cursor-pointer"
          >
            <img
              src={image.src}
              alt={`Image ${index}`}
              className="w-full h-[250px] lg:h-[305px] object-cover"
            />
            <p className=" text-[#2d2a4a] text-[20px] leading-[33px] font-medium mt-2 text-center xl:text-left">{image.caption}</p>
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-80 cursor-pointer"
            onClick={closeLightbox}
          />
          <div className="fixed z-50 p-4 max-w-screen-lg max-h-screen overflow-auto flex flex-col items-center justify-center">
            <button
              className="absolute top-0 left-0 m-4 text-white text-5xl cursor-pointer shadow-sm prevBtn"
              onClick={prevImage}
              disabled={selectedImage === 0}
            >
              &laquo;
            </button>
            <img
              src={images[selectedImage].src}
              alt={`Image ${selectedImage}`}
              className="max-w-full max-h-full"
            />
            <button
              className="absolute top-0 right-0 m-4 text-white text-5xl cursor-pointer nextBtn"
              onClick={nextImage}
              disabled={selectedImage === images.length - 1}
            >
              &raquo;
            </button>
            <button
              className="absolute top-0 right-0 m-4 text-white text-5xl cursor-pointer closeBtn"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <p className="text-center mt-2">{images[selectedImage].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsMediaExhibition;
