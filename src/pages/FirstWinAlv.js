import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import alvBannerImg from "../img/alvBannerImg.png";

import FirstWinALV from "../img/FIRSTWINALV.png";
import alvImg1 from "../img/alvImg1.png";
import alvImg2 from "../img/alvImg2.jpg";
import OurProductSlider from "../components/ourProductSlider";

function FirstWin2Alv() {
  return (
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section
          className="h-[690px] flex items-end mb-[50px] pb-[40px] px-5 lg:px-[40px] coverCenter"
          style={{ background: `url('${alvBannerImg}')` }}
        >
          <div className="container mx-auto max-w-[1600px] px-6 flex sm:flex-row flex-col justify-between lg:items-end">
            <div>
              <p className="text-white text-3xl lg:text-5xl font-normal">04</p>
              <h2 className="text-white text-3xl lg:text-5xl font-bold mt-3">
                ARMORED VEHICLE
              </h2>
              <h2 className="text-white text-3xl lg:text-5xl font-normal mt-3">
                FIRST WIN ALV
              </h2>
            </div>
          </div>
        </section>

        <section className="container  mx-auto max-w-[1200px] px-6 sm:px-8 xl:px-0 mt-[80px] pb-[80px]">
          <div>
            <p className="text-[#2d2a4a] text-center font-semibold">other product</p>
            <h2 className="text-5xl font-bold text-center text-[#d73a32] mt-[8px]">
              ARMORED VEHICLE
            </h2>
            <p className="text-[#262626] font-medium mt-[20px]">
              We have designed 4×4 Multi-purpose armour vehicle for various
              mission, First Win family, has been using in Thai Armed Forces,
              Government unit and exporting to other countries including the UN
              Peace keeping mission. First Win is a non-chassis based vehicle,
              features an all welded armored steel V-shape monocoque hull. The
              vehicle has high mobility, power to weigh ratio 23-27 hp/ton with
              protection capable up to STANAG Lv4. The protection cover both
              engine and crew compartment. The vehicle can equipped with 7.62
              LMG / 0.50 MG / 40 AGP. It can be transported by airborne, C130,
              A400, Ro-Ro ship and standard rail way.
            </p>
            <p className="text-[#262626] font-medium mt-[20px]">
              First Win family has various variants eg APC (Armored Personal
              Vehicle) with 10+1 seat, ATV (Armored Tactical Vehicle), AFV
              (Armored Fighting Vehicle), AAV (Armoured Ambulance Vehicle), ARV
              (Armored Reconnaissance Vehicle) and etc. In order to be adaptable
              to various user missions, First Win has been designed to scale
              down to compensate the payload / protection / budget.
            </p>
            <img
              src={FirstWinALV}
              className="mx-auto lg:max-w-[749px] mt-[100px]"
              alt=""
            />
          </div>

          <div className="lg:mt-20">
            <h2 className="text-[40px] font-bold text-center text-[#2d2a4a] mt-[8px]">
              FIRST WIN ALV
            </h2>
            <h2 className="text-[40px] font-bold text-center text-[#2d2a4a] ">
              (ARMORED LIGHT VEHICLE)
            </h2>
            <p className="text-[#262626] font-medium mt-[10px]">
              The First Win ALV featuring mine- protected monocoque hull,
              mobility not less than 210 horse power engine and 6 speed
              automatic transmission, heavy duty independent suspension with
              selectable axles differential lock at front and rear axle, and two
              speed transfer case, permanent 4×4 with selectable transfer case
              differential lock. The First Win ALV can carry 10 people. The
              First Win ALV is specially design for Air Force to be able to
              transport by C130 with out preparation.
            </p>
           
            <img
              src={alvImg1}
              className="mx-auto lg:max-w-[770px] mt-[80px]"
              alt=""
            />
            <img
              src={alvImg2}
              className="mx-auto lg:max-w-[770px] mt-[20px]"
              alt=""
            />
          </div>
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

export default FirstWin2Alv;
