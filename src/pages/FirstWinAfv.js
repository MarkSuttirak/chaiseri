import React from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import firstwinafvbanner from "../img/first-win-afv-banner.jpg";

import firstAfvGroup from "../img/first-afv-group.png";
import OurProductSlider from '../components/ourProductSlider';

function FirstWinAfv() {



  return (
    
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section
          className="h-[690px] flex items-end mb-[50px] pb-[40px] px-5 lg:px-[40px] coverCenter"
          style={{ background: `url('${firstwinafvbanner}')` }}
        >
          <div className="container mx-auto max-w-[1600px] px-6 flex sm:flex-row flex-col justify-between lg:items-end">
            <div>
              <p className="text-white text-3xl lg:text-5xl font-normal">01</p>
              <h2 className="text-white text-3xl lg:text-5xl font-bold mt-3">
                ARMORED VEHICLE
              </h2>
              <h2 className="text-white text-3xl lg:text-5xl font-normal mt-3">
                FIRST WIN AFV
              </h2>
            </div>
          </div>
        </section>

        <section className="container text-center mx-auto max-w-[1280px] px-6 mt-[80px] pb-[80px]">
          <p className="text-[#2d2a4a] font-semibold">ARMORED VEHICLE</p>
          <h2 className="text-5xl font-bold text-[#d73a32] mt-[8px]">
            FIRST WIN AFV
          </h2>
          <p className="text-[#262626] font-medium mt-[20px]">
            3rd Generation from First Win Armored vehicle family, The First Win
            AFV( Armored Fighting Vehicle) featuring mine- protected monocoque
            hull, mobility not less than 330 Horse power engine and 6 speed
            automatic transmission, heavy duty independent suspension with
            selectable axles differential lock at front and rear axle, and two
            speed transfer case, permanent 4×4 with selectable transfer case
            differential lock. The First Win AFV can carry 9 people and have
            available space to integrate equipment based on user requirement.
            The First Win AFV has been certify by Ministry of Defence, the
            Kingdom of Thailand. The vehicle has met all the requirements of the
            standardized performance and bullet proof in accordance with
            military standards regarding to Armored Vehicles. The AFV vehicle
            has been register in the innovation list by National Science and
            Technology Development Agency (NSTDA), and Budget Bureau, Thailand
          </p>
          <img
            src={firstAfvGroup}
            className="mx-auto mt-[100px]"
            alt=""
          />
        </section>


        <section className='pb-28'>
          <h2 className='text-[40px] text-[#d73a32] font-bold text-center mb-10'>OUR PRODUCTS</h2>
          <OurProductSlider />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FirstWinAfv;
