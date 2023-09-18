import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Firstwin2BannerImg from "../img/Firstwin2BannerImg.png";

import firstWinGroup from "../img/first-win-group.png";
import OurProductSlider from "../components/ourProductSlider";

function FirstWin2() {
  return (
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section
          className="h-[690px] flex items-end mb-[50px] pb-[40px] px-5 lg:px-[40px] coverCenter"
          style={{ background: `url('${Firstwin2BannerImg}')` }}
        >
          <div className="container mx-auto max-w-[1600px] px-6 flex sm:flex-row flex-col justify-between lg:items-end">
            <div>
              <p className="text-white text-3xl lg:text-5xl font-normal">03</p>
              <h2 className="text-white text-3xl lg:text-5xl font-bold mt-3">
                ARMORED VEHICLE
              </h2>
              <h2 className="text-white text-3xl lg:text-5xl font-normal mt-3">
                FIRST WIN 2
              </h2>
            </div>
          </div>
        </section>

        <section className="container  mx-auto max-w-[1240px] px-6 mt-[80px] pb-[80px]">
          <p className="text-[#2d2a4a] text-center font-semibold">ARMORED VEHICLE</p>
          <h2 className="text-5xl font-bold text-center text-[#d73a32] mt-[8px]">
            FIRST WIN 2
          </h2>
          <p className="text-[#262626] font-medium mt-[20px]">
            The First Win 2 featuring mine- protected monocoque hull, mobility
            not less than 300 horsepower engine and 6 speed automatic
            transmission, heavy duty axle with leaf spring and two speed
            transfer case, permanent 4×4 with selectable transfer case
            differential lock. The First Win 2 can carry 11 people. The vehicle
            can be customize based on user requirement for example, Armored
            Personal Carrier, Armored Ambulance vehicle, Armored Fighting
            vehicle, and Armored Forward Observation vehicle.
          </p>
          <img
            src={firstWinGroup}
            className="mx-auto max-w-[749px] mt-[100px]"
            alt=""
          />
        </section>

        <section className='pb-28 max-w-[1280px] mx-auto'>
          <h2 className="text-[40px] text-[#d73a32] font-bold text-center mb-10">
            OUR PRODUCTS
          </h2>
          <OurProductSlider />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FirstWin2;
