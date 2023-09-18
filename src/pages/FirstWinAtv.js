import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import firstwinatvbanner from "../img/first-win-atv-banner.png";

import FWATV2 from "../img/FW-ATV2.jpg";
import OurProductSlider from "../components/ourProductSlider";

function FirstWinAtv() {
  return (
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section
          className="h-[690px] flex items-end mb-[50px] pb-[40px] px-5 lg:px-[40px] coverCenter"
          style={{ background: `url('${firstwinatvbanner}')` }}
        >
          <div className="container mx-auto max-w-[1600px] px-6 flex sm:flex-row flex-col justify-between lg:items-end">
            <div>
              <p className="text-white text-3xl lg:text-5xl font-normal">02</p>
              <h2 className="text-white text-3xl lg:text-5xl font-bold mt-3">
                ARMORED VEHICLE
              </h2>
              <h2 className="text-white text-3xl lg:text-5xl font-normal mt-3">
                FIRST WIN ATV
              </h2>
            </div>
          </div>
        </section>

        <section className="container  mx-auto max-w-[1240px] px-6 mt-[80px] pb-[80px]">
          <p className="text-[#2d2a4a] text-center font-semibold">ARMORED VEHICLE</p>
          <h2 className="text-5xl font-bold text-center text-[#d73a32] mt-[8px]">
            FIRST WIN ATV
          </h2>
          <p className="text-[#262626] font-medium mt-[20px]">
            3rd Generation from First Win Armored vehicle family, The First Win
            ATV (Armored Tactical Vehicle) featuring mine- protected monocoque
            hull, mobility not less than 300 horse power engine and 6 speed
            automatic transmission, heavy duty independent suspension with
            selectable axles differential lock at front and rear axle, and two
            speed transfer case, permanent 4×4 with selectable transfer case
            differential lock. The First Win ATV can carry 11 people. The First
            Win ATV is ideal solution for cross country and city use where
            mobility and protection is priority.
          </p>
          <img src={FWATV2} className="mx-auto max-w-[749px] mt-[100px]" alt="" />
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

export default FirstWinAtv;
