import React, { useState } from "react";
import AFV1 from "../img/1AFV.png";
import FWII2 from "../img/2FWII.png";
import ALV3 from "../img/3ALV.png";
import ATV4 from "../img/4ATV.png";
import AFV1jpg from "../img/AFV1.jpg";
import AFV2 from "../img/AFV2.jpg";
import AFV3 from "../img/AFV3.jpg";
import ALV1 from "../img/ALV 1.jpg";
import ALV2C130 from "../img/ALV2C130.jpg";
import ALV3InsideC130 from "../img/ALV3InsideC130.png";
import FWATV from "../img/FW ATV.jpg";
import FWATV2 from "../img/FWATV2.jpg";
import FWATV_FW2 from "../img/FWATV_FW2.jpg";
import FW2AFV from "../img/FW2AFV.png";
import FW2Ambulance from "../img/FW2Ambulance.jpg";
import FW2APC from "../img/FW2APC.png";
import FW2UN from "../img/FW2UN.jpg";
import FW2 from "../img/FW2.jpg";


const images = [
  {
    src: AFV1,
    caption: "1 AFV",
  },
  {
    src: FWII2,
    caption: "2 FW II",
  },
  {
    src: ALV3,
    caption: "3 ALV",
  },
  {
    src: ATV4,
    caption: "4 ATV",
  },
  {
    src: AFV1jpg,
    caption: "AFV 1",
  },
  {
    src: AFV2,
    caption: "AFV 2",
  },
  {
    src: AFV3,
    caption: "AFV 3",
  },
  {
    src: ALV1,
    caption: "ALV 1",
  },
  {
    src: ALV2C130,
    caption: "ALV 2 C130",
  },
  {
    src: ALV3InsideC130,
    caption: "ALV 3 Inside C130",
  },
  {
    src: FWATV,
    caption: "FW ATV",
  },
  {
    src: FWATV2,
    caption: "FW ATV 2",
  },
  {
    src: FWATV_FW2,
    caption: "FW ATV_ FW 2",
  },
  {
    src: FW2AFV,
    caption: "FW2 AFV",
  },
  {
    src: FW2Ambulance,
    caption: "FW2 Ambulance",
  },
  {
    src: FW2APC,
    caption: "FW2 APC",
  },
  
  {
    src: FW2UN,
    caption: "FW2 UN",
  },
  {
    src: FW2,
    caption: "FW2",
  },
  
  // Add more images and captions here
];

const NewsMediaPhotos = () => {
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
              className="w-full h-[260px] md:h-[220px] xl:h-[305px] object-cover"
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

export default NewsMediaPhotos;
