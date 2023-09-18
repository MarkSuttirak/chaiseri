import Footer from "../components/footer";
import Header from "../components/header";
import ImgSlider from "../components/imgslider";
import MultiSlider from "../components/multipleSlider";
import LogoCHAISERI from "../img/Logo-CHAISERI-2.png";
import ThaiFlag from "../img/thai-flag1.png";
import Recondition from "../img/Recondition.png";
import UpgradeE from "../img/Upgrade.png";
import PMAward from "../img/PMAward.png";
import SystemIntegration from "../img/SystemIntegration.jpg";
import trackSystem from "../img/trackSystem.png";
import ArmoredVehicle from "../img/ArmoredVehicle.jpg";
import Runflat from "../img/Runflat.png";
import Services from "../img/Services.png";
import UpgradingBefore from "../img/UpgradingBefore.jpg";
import UpgradingAfter from "../img/UpgradingAfter.jpg";

import HomeSlider from "../components/HomeSlider";

const HomePage = () => {
  const imagesBanner = [
    SystemIntegration,
    trackSystem,
    ArmoredVehicle,
    Runflat,
    Services,
  ];

 
  return (
    <>
      <Header />

      <ImgSlider />
      <main className="bg-[#FAFBFC]">
        <section className="text-center container mx-auto pt-20 pb-[35px]">
          <div className="mx-auto max-w-[800px] sm:text-center">
            <img className="mx-auto" src={LogoCHAISERI} />
            <p className="mt-2 text-base font-medium leading-8 text-[#3a4f66] px-4">
              Celebrating 50 years Reliable and Trusted partner in Defense Land
              system
            </p>
          </div>
        </section>

        <section>
          <div className="flex flex-wrap w-full flex-col lg:flex-row">
            <div className="lg:h-[480px] lg:w-[16.67%]">
              <img
                src={imagesBanner[0]}
                alt=""
                className="h-full object-cover w-full"
              />
              <h1 className="py-4 text-center text-2xl leading-[24px] font-semibold uppercase bg-[#D73A32] text-white">
                System Integration
              </h1>
            </div>
            <div className="lg:h-[480px] lg:w-[16.67%]">
              <img
                src={imagesBanner[1]}
                alt=""
                className="h-full object-cover w-full"
              />
              <h1 className="p-4 text-center text-2xl leading-[24px] font-semibold uppercase bg-white text-black">
                TRACK SYSTEM
              </h1>
            </div>
            <div className="lg:h-[480px] lg:w-[32.33%]">
              <img
                src={imagesBanner[2]}
                alt=""
                className="h-full object-cover w-full"
              />
              <h1 className="p-4  text-center text-2xl leading-[24px] font-semibold uppercase bg-[#2D2A4A] text-white">
                Armored Vehicle
              </h1>
            </div>
            <div className="lg:h-[480px] lg:w-[16.67%]">
              <img
                src={imagesBanner[3]}
                alt=""
                className="h-full object-cover w-full"
              />
              <h1 className="p-4 text-center text-2xl leading-[24px] font-semibold uppercase bg-white text-black">
                Runflat
              </h1>
            </div>
            <div className="lg:h-[480px] lg:w-[16.67%]">
              <img
                src={imagesBanner[4]}
                alt=""
                className="h-full object-cover w-full"
              />
              <h1 className="py-4 text-center text-2xl leading-[24px] font-semibold uppercase bg-[#D73A32] text-white">
                Service
              </h1>
            </div>
          </div>
        </section>

        <section className="text-center  mx-auto mt-36 pb-[50px]">
          <div className="mx-auto max-w-[800px] sm:text-center">
            <p className="text-[#3a4f66] text-base font-bold ">CHAISERI</p>
            <h2 className="mt-2 text-[38px] sm:text-[46px] leading-[38px] sm:leading-[46px] font-bold text-[#D73A32]">
              OUR PRODUCTS
            </h2>
            <p className="mt-6 text-base font-bold text-[#3a4f66]">
              Chaiseri is a Thai company specialize in Defense Land system for
              Armored vehicle, <br />
              Tracks system, Runflat, and maintenance, upgrading service for
              military vehicle.
            </p>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto pt-20 pb-[50px] text-center homeSlider">
          <HomeSlider  />
        </section>

        

        <section className="text-center container mx-auto pt-10 pb-[50px] px-[30px]">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-[46px] text-[#D73A32] mb-[50px]">
            UPGRADING MILITARY VEHICLE
          </h2>
          <div className="flex flex-col lg:flex-row  w-full justify-center gap-x-5">
            <div
              className="w-full lg:w-[260px] h-[400px] relative beforeAfterImg"
              style={{
                background: `url(${UpgradingBefore})`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
              }}
            >
              <div className="absolute text-white w-full p-4 font-semibold bottom-0 text-left text-4xl">
                BEFORE
              </div>
            </div>

            <div
              className="w-full lg:w-[260px] h-[400px] mt-5 lg:mt-0 relative beforeAfterImg"
              style={{
                background: `url(${UpgradingAfter})`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
              }}
            >
              <div className="absolute text-white w-full p-4 font-semibold bottom-0 text-left text-4xl">
                AFTER
              </div>
            </div>
          </div>
        </section>

        <section className="text-center container mx-auto pt-20 pb-[50px] px-[30px]">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-[46px] text-[#D73A32] mb-[50px]">
            SERVICE – RECONDITIONING
          </h2>
          <div className="flex flex-col lg:flex-row  w-full justify-center gap-x-5">
            <div
              className="w-full lg:w-[260px] h-[400px] relative beforeAfterImg"
              style={{
                background: `url(${Recondition})`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
              }}
            >
              <div className="absolute text-white w-full p-4 font-semibold bottom-0 text-left text-4xl">
                BEFORE
              </div>
            </div>

            <div
              className="w-full lg:w-[260px] h-[400px] mt-5 lg:mt-0 relative beforeAfterImg"
              style={{
                background: `url(${UpgradeE})`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
              }}
            >
              <div className="absolute text-white w-full p-4 font-semibold bottom-0 text-left text-4xl">
                AFTER
              </div>
            </div>
          </div>
        </section>

        <section className="text-center container mx-auto pt-28 mt-10 pb-[50px] chaiseriSuccessSec">
          <div className="flex flex-col lg:flex-row mx-auto justify-center items-center">
            <img src={LogoCHAISERI} className="" alt="" />

            <h2 className="mt-2 text-[38px] sm:text-[46px] leading-[38px] sm:leading-[46px] font-bold text-[#D73A32]">
              <span>SUCCESS</span>
            </h2>
          </div>
          <div className="mx-auto max-w-[800px] sm:text-center mb-[50px] px-[30px]">
            <p className="mt-6 text-base font-medium leading-8 text-[#3a4f66]">
              CHAISERI has successfully designed and developed products and
              service based on customer requirement since 1968. Our products
              have been in service in 6 continent, more than 40 countries.
            </p>
          </div>

          <div className=" ">
            <div className="mx-auto max-w-7xl divide-y lg:divide-[#D73A32] lg:flex lg:justify-center lg:divide-y-0 lg:divide-x lg:py-8">
              <div className="py-1 lg:w-1/3 lg:flex-none lg:py-0">
                <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                  <div className="ml-4 flex flex-auto flex-col">
                    <h3 className="font-medium text-[44px] leading-[44px] text-black uppercase">
                      since
                    </h3>
                    <p className="text-[80px] sm-[120px] lg:text-[134px] leading-[120px] text-[#D73A32] font-medium">
                      1968
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-1 lg:w-1/3 lg:flex-none lg:py-0">
                <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                  <div className="ml-4 flex flex-auto flex-col">
                    <p className="text-[80px] sm-[120px] lg:text-[134px] leading-[120px] text-[#D73A32] font-medium">
                      40+
                    </p>
                    <h3 className="font-medium text-[44px] leading-[44px] mt-10 text-black uppercase">
                      Countries
                    </h3>
                  </div>
                </div>
              </div>
              <div className="py-1 lg:w-1/3 lg:flex-none lg:py-0">
                <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                  <div className="ml-4 flex flex-auto flex-col">
                    <p className="text-[80px] sm-[120px] lg:text-[134px] leading-[120px] text-[#D73A32] font-medium">
                      6
                    </p>
                    <h3 className="font-medium text-[44px] leading-[44px] mt-10 text-black uppercase">
                      Continents
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" pb-[50px]">
          <figure>
            <img src={ThaiFlag} alt="" className="w-full object-cover" />
            <figcaption className="bg-black py-[75px] text-center px-10">
              <img src={LogoCHAISERI} className="w-40 h-auto mx-auto" alt="" />

              <p className="text-white text-[32px] leading-[48px] font-bold max-w-[1270px] mt-12 uppercase mx-auto">
                is a Thai company specialize in Defense Land system for Armored
                Vehicle, Tracks system, runflat. We are ready to design and
                customize our product to meet with user requirement.
              </p>
            </figcaption>
          </figure>
        </section>

        <section className="text-center pt-20 lg:pb-[50px]">
          <h2 className="mt-2 text-[38px] sm:text-[46px] leading-[38px] sm:leading-[46px] font-bold text-[#D73A32] mb-[48px]">
            AWARDS
          </h2>

          <div className="flex flex-col lg:flex-row w-full justify-center">
            <img
              src={PMAward}
              alt=""
              className="w-full lg:w-[60%] object-cover"
            />

            <div className="w-full lg:w-[40%] flex flex-col gap-y-5 justify-center items-start">
              <div className="awardsRightInnserSec flex justify-center bg-[#D73A32] w-full">
                <div className="w-full lg:w-[380px] flex flex-col justify-center items-center lg:items-start  h-[50vh]">
                  <h1 className="text-white text-[32px] lg:text-[60px] leading-[45px]  lg:leading-[84px] font-medium">
                    News &Media
                  </h1>
                  <button className="py-4 px-7 mt-8 mb-2 bg-white text-[#D73A32] text-base leading-4 font-bold">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
