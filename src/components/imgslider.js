import SimpleImageSlider from "react-simple-image-slider";
import home1 from "../img/home1.jpg";
import home2 from "../img/home2.png";
import home3 from "../img/home3.jpg";
import home4 from "../img/home4.jpeg";
import Home5 from "../img/Home5.png";

const ImgSlider = () => {
  const images = [
    home1,
    home2,
    home3,
    home4,
    Home5,
  ];


  const mobileImages = [

    home2,
    home3,
    home4,
    Home5,
  ];

  return (
    <>
    <div className="hidden sm:block">
        <SimpleImageSlider
          width='100%'
          height={732}
          images={images}
          showNavs={true}
        />
      </div>

       {/* Display the second set on mobile screens */}
      <div className="block sm:hidden">
        <SimpleImageSlider
          width='100%'
          height={732}
          images={mobileImages}
          showNavs={true}
        />
      </div>
      </>
  )
}

export default ImgSlider;