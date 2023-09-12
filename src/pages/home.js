import Footer from "../components/footer";
import Header from "../components/header";
import ImgSlider from "../components/imgslider";
import MultiSlider from "../components/multipleSlider";

const HomePage = () => {
  const imagesBanner = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const items = [
    {
      imageUrl: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      title: "System Integration",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80",
      title: "System Integration",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80",
      title: "System Integration",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80",
      title: "System Integration",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80",
      title: "System Integration",
    },
  ]

  return (
    <>
    <Header />

    <ImgSlider />
    <main>
      <section className="text-center container mx-auto pt-20 pb-[35px]">
        <div className="mx-auto max-w-[800px] sm:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#D73A32]">CHAISERI</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Celebrating 50 years Reliable and Trusted partner in Defense Land system
          </p>
        </div>
      </section>

      <section>
        <div className="flex w-full">
          <div className='h-[480px] w-[18%]'>
            <img src={imagesBanner[0]} alt="" className="h-full object-cover"/>
          </div>
          <div className='h-[480px] w-[18%]'>
            <img src={imagesBanner[1]} alt="" className="h-full object-cover"/>
          </div>
          <div className='h-[480px] w-[28%]'>
            <img src={imagesBanner[2]} alt="" className="h-full object-cover"/>
          </div>
          <div className='h-[480px] w-[18%]'>
            <img src={imagesBanner[0]} alt="" className="h-full object-cover"/>
          </div>
          <div className='h-[480px] w-[18%]'>
            <img src={imagesBanner[1]} alt="" className="h-full object-cover"/>
          </div>
        </div>
        <div className="flex w-full">
          <h1 className="p-4 w-[18%] text-center bg-[#D73A32] text-white">System Integration</h1>
          <h1 className="p-4 w-[18%] text-center bg-white text-black">System Integration</h1>
          <h1 className="p-4 w-[28%] text-center bg-[#3A4F66] text-white">System Integration</h1>
          <h1 className="p-4 w-[18%] text-center bg-white text-black">System Integration</h1>
          <h1 className="p-4 w-[18%] text-center bg-[#D73A32] text-white">System Integration</h1>
        </div>
      </section>

      <section className="text-center container mx-auto pt-20 pb-[50px]">
        <div className="mx-auto max-w-[800px] sm:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight">CHAISERI</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#D73A32]">OUR PRODUCTS</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chaiseri is a Thai company specialize in Defense Land system for Armored vehicle, <br/>Tracks system, Runflat, and maintenance, upgrading service for military vehicle.
          </p>
        </div>
      </section>

      <section className="text-center container mx-auto pt-20 pb-[50px]">
        <MultiSlider resources={items}/>
      </section>

      <section className="text-center container mx-auto pt-20 pb-[50px]">
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#D73A32] mb-[50px]">UPGRADING MILITARY VEHICLE</h2>
        <div className="flex w-full justify-center gap-x-5">
          <div className='w-[260px] h-[480px] relative object-cover' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
            <div className="absolute text-white w-full p-4 bottom-0 text-left text-3xl">BEFORE</div>
          </div>
          <div className='w-[260px] h-[480px] relative object-cover' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
            <div className="absolute text-white w-full p-4 bottom-0 text-left text-3xl">AFTER</div>
          </div>
        </div>
      </section>

      <section className="text-center container mx-auto pt-20 pb-[50px]">
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#D73A32] mb-[50px]">SERVICE - RECONDITIONING</h2>
        <div className="flex w-full justify-center gap-x-5">
          <div className='w-[260px] h-[480px] relative object-cover' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
            <div className="absolute text-white w-full p-4 bottom-0 text-left text-3xl">BEFORE</div>
          </div>
          <div className='w-[260px] h-[480px] relative object-cover' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`}}>
            <div className="absolute text-white w-full p-4 bottom-0 text-left text-3xl">AFTER</div>
          </div>
        </div>
      </section>

      <section className="text-center container mx-auto pt-20 pb-[50px]">
        <div className="mx-auto max-w-[800px] sm:text-center mb-[50px]">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#D73A32]">CHAISERI SUCCESS</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          CHAISERI has successfully designed and developed products and service based on customer requirement since 1968. Our products have been in service in 6 continent, more than 40 countries.
          </p>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x lg:py-8">
            <div className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
              <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                <div className="ml-4 flex flex-auto flex-col">
                  <h3 className="font-medium text-2xl text-black">since</h3>
                  <p className="text-6xl text-[#D73A32] font-bold">1968</p>
                </div>
              </div>
            </div>
            <div className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
              <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                <div className="ml-4 flex flex-auto flex-col">
                  <p className="text-6xl text-[#D73A32] font-bold">40+</p>
                  <h3 className="font-medium text-2xl text-black">Countries</h3>
                </div>
              </div>
            </div>
            <div className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
              <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                <div className="ml-4 flex flex-auto flex-col">
                  <p className="text-6xl text-[#D73A32] font-bold">6</p>
                  <h3 className="font-medium text-2xl text-black">Continents</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-[50px]">
        <figure>
          <img src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" className="w-full object-cover"/>
          <figcaption className="bg-black py-[75px] text-center px-10">
            <h1 className="font-bold text-3xl mb-2 text-[#D73A32] mb-[48px]">SERVICE - RECONDITIONING</h1>
            <p className="text-white">is a Thai company specialize in Defense Land system for Armored Vehicle, Tracks system, runflat. We are ready to design and customize our product to meet with user requirement.</p>
          </figcaption>
        </figure>
      </section>

      <section className="text-center pt-20 pb-[50px]">
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#D73A32] mb-[50px]">AWARDS</h2>

        <div className="flex w-full justify-center">
          <img src='https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' alt="" className="w-1/2 object-cover"/>

          <div className="w-1/2 bg-[#D73A32] flex flex-col gap-y-5 justify-center items-start px-20">
            <h1 className="text-white text-5xl">NEWS & MEDIA</h1>
            <button className="py-2 px-5 bg-white text-[#D73A32] text-xl">View more</button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  )
}

export default HomePage;