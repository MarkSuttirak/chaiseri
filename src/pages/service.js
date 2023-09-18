import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../components/footer"
import Header from "../components/header"
import { useState } from "react"
import ServiceBgImg from "../img/ServiceBgImg.jpg";
import armoredWheelVehicle from "../img/armoredWheelVehicle.png";
import logisticMilitaryVehicle from "../img/logisticMilitaryVehicle.png";
import armoredTrackVehicle from "../img/armoredTrackVehicle.png";
import RemanufacturerUpgradeRight from "../img/RemanufacturerUpgradeRight.png";
import M60Engine from "../img/M60Engine.png";
import M109Engine from "../img/M109Engine.png";
import M113Power from "../img/M113Power.png";
import ServiceGallery1Img1 from "../img/ServiceGallery1Img1.jpg";
import ServiceGallery1Img2 from "../img/ServiceGallery1Img2.jpg";
import ServiceGallery1Img3 from "../img/ServiceGallery1Img3.jpg";
import ServiceGallery1Img4 from "../img/ServiceGallery1Img4.jpg";
import ServiceGallery1Img5 from "../img/ServiceGallery1Img5.jpg";
import ServiceGallery1Img6 from "../img/ServiceGallery1Img6.jpg";
import ServiceGallery1Img7 from "../img/ServiceGallery1Img7.jpg";
import ServiceGallery2Img1 from "../img/ServiceGallery2Img1.jpg";
import ServiceGallery2Img2 from "../img/ServiceGallery2Img2.jpg";
import ServiceGallery2Img3 from "../img/ServiceGallery2Img3.jpg";
import ServiceGallery2Img4 from "../img/ServiceGallery2Img4.jpg";
import ServiceGallery2Img5 from "../img/ServiceGallery2Img5.jpg";

const Service = () => {
  // if swapSwitch is true, this refers to the 'recondition' section.
  // if swapSwitch is false, this refers to the 'upgrade' section.

  const [swapSwitch, setSwapSwitch] = useState(true)

  return (
    <>
      <Header />
      <main className="bg-[#FAFBFC]">
      <section className="h-[520px] flex items-center mb-[50px] topBanner" style={{ background: `url('${ServiceBgImg}')` }}>
  <div className="container mx-auto max-w-[1200px] px-6 text-right">
    <h1 className="text-white text-6xl font-bold">UPGRADING</h1>
  </div>
</section>

        

        <section className="container mx-auto max-w-[1400px] px-6 mb-[70px]">
          <div className="border-b border-b-[2px] border-b-[#C4C4C4]">
            <div className="flex justify-center">
              <button className={`service-switch ${swapSwitch ? 'active' : ''}`} onClick={() => setSwapSwitch(true)}>RECONDITION</button>
              <button className={`service-switch ${swapSwitch ? '' : 'active'}`} onClick={() => setSwapSwitch(false)}>UPGRADE</button>
            </div>
          </div>
        </section>

        {swapSwitch ? (
          <>
            <section className="container mx-auto max-w-[1200px] px-6 mb-[70px]">
              <p className="text-center">With over 40 years of refurbishment and upgrading of military vehicle, we experience in extending the service life of armored track vehicle, armored wheel vehicle and logistic military vehicle for a total of more than 2,000 vehicle. The various type of vehicles include APC M113, APC T-85, AAVP7A1, HMMWV, V150, M816, M543, M35, M602, M151 and etc. Not only MRO on the complete vehicle, we also experience in upgrading subsystem eg M60 engine, M109 Howitzer engine, M113 power-pack and etc.</p>
            </section>

            <section className="container mx-auto max-w-[1000px] px-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className='h-[400px] flex justify-center items-center bg-center text-center' style={{background:`url('${armoredWheelVehicle}')`,backgroundPosition:'center',backgroundSize:'cover'}}>
                  <h1 className="text-5xl text-white font-semibold">ARMORED<br/>WHEEL<br/>VEHICLE</h1>
                </div>
                <div className='h-[400px] flex justify-center items-center text-center' style={{background:`url('${armoredTrackVehicle}')`,backgroundPosition:'center',backgroundSize:'cover'}}>
                  <h1 className="text-5xl text-white font-semibold">ARMORED<br/>TRACK<br/>VEHICLE</h1>
                </div>
                <div className='h-[400px] flex justify-center items-center text-center' style={{background:`url('${logisticMilitaryVehicle}')`,backgroundPosition:'center',backgroundSize:'cover'}}>
                  <h1 className="text-5xl text-white font-semibold">ARMORED<br/>MILITARY<br/>VEHICLE</h1>
                </div>
              </div>
            </section>

            <section className="container mx-auto max-w-[1000px] px-6 mt-[50px] pb-40">
              <img src={RemanufacturerUpgradeRight} alt="" className="w-full object-cover"/>
            </section>
          </>
        ) : (
          <>
            <section className="container mx-auto max-w-[1200px] px-6 mb-[50px]">
              <p className="text-center">With over 40 years of refurbishment and upgrading of military vehicle, we experience in extending the service life of armored track vehicle, armored wheel vehicle and logistic military vehicle for a total of more than 2,000 vehicle. The various type of vehicles include APC M113, APC T-85, AAVP7A1, HMMWV, V150, M816, M543, M35, M602, M151 and etc. Not only MRO on the complete vehicle, we also experience in upgrading subsystem eg M60 engine, M109 Howitzer engine, M113 power-pack and etc.</p>
            </section>

            <section className="container mx-auto max-w-[1000px] px-6 mb-[50px]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className='h-[400px] flex justify-center items-center text-center coverCenter' style={{background:`url('${M60Engine}')`}}>
                  <h1 className="text-5xl text-white font-semibold">M60 <br/>ENGINE</h1>
                </div>
                <div className='h-[400px] flex justify-center items-center text-center coverCenter' style={{background:`url('${M109Engine}')`}}>
                  <h1 className="text-5xl text-white font-semibold">M109<br/>HOWITZER<br/>ENGINE</h1>
                </div>
                <div className='h-[400px] flex justify-center items-center text-center coverCenter' style={{background:`url('${M113Power}')`}}>
                  <h1 className="text-5xl text-white font-semibold">M113<br/>POWER-<br/>PACK</h1>
                </div>
              </div>
            </section>

            <h2 className="mt-2 font-bold text-6xl text-[#ff0404] text-center">V150 UPGRADE</h2>

            <section className="bg-black mt-2 pt-8 pb-16 mb-7">
              <div className="container mx-auto max-w-[1200px] p-6 serviceSlider flex justify-between gap-x-10">
                <SimpleImageSlider 
                  width='516px'
                  height='360px'
                  className='leftSlider'
                  images={[
                    ServiceGallery1Img1,
                    ServiceGallery1Img2,
                    ServiceGallery1Img3,
                    ServiceGallery1Img4,
                    ServiceGallery1Img5,
                    ServiceGallery1Img6,
                    ServiceGallery1Img7,
                  ]}
                  showNavs={true}
                />
                <SimpleImageSlider 
                  width='516px'
                  height='360px'
                  images={[
                    ServiceGallery2Img1,
                    ServiceGallery2Img2,
                    ServiceGallery2Img3,
                    ServiceGallery2Img4,
                    ServiceGallery2Img5,
                  ]}
                  showNavs={true}
                />
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Service