import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import RunflatBannerImg from "../img/RunflatBannerImg.png";
import Download from "../img/download.svg";
import RunFlatOtherProduct from "../img/Runflat-01-2-1.png";

function Runflat50km() {
  return (
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section
          className="h-[690px] flex items-end mb-[50px] pb-[40px] px-[40px] coverCenter"
          style={{ background: `url('${RunflatBannerImg}')` }}
        >
          <div className="container mx-auto max-w-[1600px] px-6 flex justify-between items-end">
            <div>
              <p className="text-white text-5xl font-normal">01</p>
              <h1 className="text-white text-5xl font-bold mt-3">
                RUNFLAT SYSTEM
              </h1>
            </div>
            <div>
              <a
                href=""
                className="flex bg-[#D73A32AB] text-[24px] font-medium text-white py-[18px] px-[32px]"
              >
                <button>DOCUMENT </button>
                <img src={Download} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section className="container text-center mx-auto max-w-[1280px] px-6 mt-[80px] pb-[120px]">
          <p className="text-[#2d2a4a] font-semibold">other product</p>
          <h2 className="text-5xl font-bold text-[#d73a32] mt-[8px]">RUNFLAT</h2>
          <p className="text-[#262626] font-medium mt-[20px]">
            Chaiseri Runflat provide safety for operator to continue their
            mission or escape at high speed during flat tire. Our runflat is
            single piece rubber heavy duty runflat capable of running at maximum
            speed of 90 km/h at first 3 Km and reduce speed to 50 km/h for 22 km
            while maintaining vehicle maneuver.
          </p>
          <img src={RunFlatOtherProduct} className="mx-auto mt-[100px]" alt="" />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Runflat50km;
