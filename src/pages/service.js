import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../components/footer"
import Header from "../components/header"
import { useState } from "react"

const Service = () => {
  // if swapSwitch is true, this refers to the 'recondition' section.
  // if swapSwitch is false, this refers to the 'upgrade' section.

  const [swapSwitch, setSwapSwitch] = useState(true)

  return (
    <>
      <Header />
      <main>
        <section className='h-[520px] flex items-center mb-[50px]' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`,backgroundSize:'cover'}}>
          <div className="container mx-auto max-w-[1200px] px-6 text-right">
            <h1 className="text-white text-6xl font-bold">UPGRADING</h1>
          </div>
        </section>

        <section className="container mx-auto max-w-[1400px] px-6 mb-[50px]">
          <div className="border-b border-b-[2px] border-b-[#C4C4C4]">
            <div className="flex justify-center">
              <button className={`service-switch ${swapSwitch ? 'active' : ''}`} onClick={() => setSwapSwitch(true)}>RECONDITION</button>
              <button className={`service-switch ${swapSwitch ? '' : 'active'}`} onClick={() => setSwapSwitch(false)}>UPGRADE</button>
            </div>
          </div>
        </section>

        {swapSwitch ? (
          <>
            <section className="container mx-auto max-w-[1200px] px-6 mb-[50px]">
              <p className="text-center">With over 40 years of refurbishment and upgrading of military vehicle, we experience in extending the service life of armored track vehicle, armored wheel vehicle and logistic military vehicle for a total of more than 2,000 vehicle. The various type of vehicles include APC M113, APC T-85, AAVP7A1, HMMWV, V150, M816, M543, M35, M602, M151 and etc. Not only MRO on the complete vehicle, we also experience in upgrading subsystem eg M60 engine, M109 Howitzer engine, M113 power-pack and etc.</p>
            </section>

            <section className="container mx-auto max-w-[1200px] px-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className='h-[400px] flex justify-center items-center text-center' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
                  <h1 className="text-4xl text-white font-semibold">ARMORED<br/>WHEEL<br/>VEHICLE</h1>
                </div>
                <div className='h-[400px] flex justify-center items-center text-center' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
                  <h1 className="text-4xl text-white font-semibold">ARMORED<br/>TRACK<br/>VEHICLE</h1>
                </div>
                <div className='h-[400px] flex justify-center items-center text-center' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
                  <h1 className="text-4xl text-white font-semibold">ARMORED<br/>MILITARY<br/>VEHICLE</h1>
                </div>
              </div>
            </section>

            <section className="container mx-auto max-w-[800px] px-6 mt-[50px]">
              <img src='https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' alt="" className="w-full object-cover"/>
            </section>
          </>
        ) : (
          <>
            <section className="container mx-auto max-w-[1200px] px-6 mb-[50px]">
              <p className="text-center">With over 40 years of refurbishment and upgrading of military vehicle, we experience in extending the service life of armored track vehicle, armored wheel vehicle and logistic military vehicle for a total of more than 2,000 vehicle. The various type of vehicles include APC M113, APC T-85, AAVP7A1, HMMWV, V150, M816, M543, M35, M602, M151 and etc. Not only MRO on the complete vehicle, we also experience in upgrading subsystem eg M60 engine, M109 Howitzer engine, M113 power-pack and etc.</p>
            </section>

            <section className="container mx-auto max-w-[1200px] px-6 mb-[50px]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className='h-[400px] flex justify-center items-center text-center' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
                  <h1 className="text-4xl text-white font-semibold">M60 <br/>ENGINE</h1>
                </div>
                <div className='h-[400px] flex justify-center items-center text-center' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
                  <h1 className="text-4xl text-white font-semibold">M109<br/>HOWITZER<br/>ENGINE</h1>
                </div>
                <div className='h-[400px] flex justify-center items-center text-center' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
                  <h1 className="text-4xl text-white font-semibold">M113<br/>POWER-<br/>PACK</h1>
                </div>
              </div>
            </section>

            <h2 className="mt-2 font-bold tracking-tight text-4xl text-[#D73A32] text-center">V150 UPGRADE</h2>

            <section className="bg-black mt-2">
              <div className="container mx-auto max-w-[1200px] p-6 flex justify-center gap-x-10">
                <SimpleImageSlider 
                  width='456px'
                  height='304px'
                  images={[
                    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                  ]}
                  showNavs={true}
                />
                <SimpleImageSlider 
                  width='456px'
                  height='304px'
                  images={[
                    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
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