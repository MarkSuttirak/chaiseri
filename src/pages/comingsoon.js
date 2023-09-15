import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ComingSoonBgImg from "../img/ComingSoonBgImg.png";
function ComingSoon() {
  return (
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section
          className="h-[600px] lg:h-[480px] trackSystemHeader flex flex-col items-center justify-center  py-[10px]  coverCenter"
          style={{ background: `url('${ComingSoonBgImg}')` }}
        >
          <p className="text-[14px] font-bold text-white mt-4 tracking-[2.7px]"> CHAISERI</p>

          <h2 className="text-[33px] sm:text-[84px] font-bold text-white mt-7">COMING SOON</h2>
          <p className="text-[11px] sm:text-[18px] text-white mt-3">
            PREPARING SOMETHING AMAZING FOR YOU
          </p>
          <div className="mt-8">
            <p className=" sm:w-[700px] bg-white text-center p-[25px] mx-[20px]">
              <strong class="font-bold text-[#3a4f66]">Email:</strong>
              <a
                className="text-[#2872fa] underline"
                href="mailto:info@chaiseri-defense.com"
                target="_blank"
              >
                info@chaiseri-defense.com
              </a>
              <br />
              <strong class="font-bold text-[#3a4f66]">Tel:</strong>&nbsp;
              <a className="text-[#2872fa] underline" href="tel:006625814981">
                +6625814981
              </a>
            </p>

            <div className="mt-[30px] text-center">
              <button className="text-[18px] py-[20px] px-[25px] sm:px-[30px] font-bold text-white bg-[#CC2315]">
                
                CONTACT US
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ComingSoon;
