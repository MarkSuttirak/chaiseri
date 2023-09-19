import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import TrackSystemBannerImg from "../img/TrackSystemBannerImg.png";

import C142 from "../img/C142-2.png";
import C154 from "../img/C154.png";
import OurProductSlider from "../components/ourProductSlider";

function TrackShoes() {
  return (
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section
          className="h-[690px] trackSystemHeader flex items-end mb-[50px] pb-[40px] px-5 lg:px-[40px] coverCenter"
          style={{ background: `url('${TrackSystemBannerImg}')` }}
        >
          <div className="container mx-auto max-w-[1600px] px-6 flex sm:flex-row flex-col justify-between lg:items-end">
            <div>
              <p className="text-[#f60606] text-3xl lg:text-5xl font-normal">
                01
              </p>
              <h2 className="text-[#f60606] text-3xl lg:text-5xl font-bold mt-3">
                TRACK SYSTEM
              </h2>
              <h2 className="text-[#f60606] text-3xl lg:text-5xl font-normal mt-3">
                TRACK SHOES
              </h2>
            </div>
          </div>
        </section>

        <section className="container  mx-auto max-w-[1200px] px-6 sm:px-8 xl:px-0 mt-[80px] pb-[80px]">
          <p className="text-[#2d2a4a]  text-center font-semibold">other product</p>
          <h2 className="text-5xl text-center  font-bold text-[#d73a32] mt-[8px]">
            TRACK SYSTEM
          </h2>
          <p className="text-[#262626] font-medium mt-[20px]">
            First production of the track system has been produced in 1988. The
            track production has been running continuously since 1988 Chaiseri
            has been known for many years for Track system OEM. We have produce
            track shoe, road wheel, idle wheel, sprocket ring, support roller
            for all type of armed track vehicle eg M113, M60, M109, BMP-3, T72,
            T85, PZ45 and etc. All these parts are produce by hot forging metal
            with latest technology of rubber. We can support customer with both
            OEM part and replacing the original track system with Chaiseri
            Design track solution.
          </p>
          <p className="text-[#262626] font-medium mt-[20px]">
            CHAISERI design Track system, is double pin track integrated with
            rubber. It has more than 60% composition of rubber. With the
            property of rubber, it can reduce the vibration and noise, enlarge
            the vehicle electronic life span, increase the vehicle mobility,
            reduce the fuel consumption. With our engineering expertise,
            CHAISERI design the CHAISERI track based on parameter from customer
            to optimise the weight of the track, vehicle payload, vehicle
            mobility and fuel consumption.
          </p>
        </section>

        <section className="mx-auto max-w-[1200px] text-center container px-4  mb-3 sm:px-7 xl:px-0">
          <h2 className="text-4xl font-bold text-[#2d2a4a] mt-[8px]">
            TRACK SHOES C142-2 FOR M48/M60 SERIES
          </h2>
          <img src={C142} className="mt-[30px] w-full" alt="" />

          <h2 className="text-4xl font-bold text-[#2d2a4a] mt-[100px]">
          TRACK SHOES T157 FOR M2 TANK
          </h2>

          <img src={C154} className=" mt-[30px] w-full" alt="" />
        </section>

      
      </main>
      <Footer />
    </>
  );
}

export default TrackShoes;
