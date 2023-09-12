import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";

const NewsMedia = () => {
  const [menu, setMenu] = useState(0)
  return (
    <>
      <Header />
      <main>
        <section className='h-[520px] flex items-center mb-[50px]' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`,backgroundSize:'cover'}}>
          <div className="container mx-auto max-w-[1200px] px-6">
            <h1 className="text-white text-6xl font-bold">NEWS & MEDIA</h1>
          </div>
        </section>

        <section className="container mx-auto max-w-[1400px] px-6 mb-[50px]">
          <div className="border-b border-b-[2px] border-b-[#C4C4C4]">
            <div className="flex justify-center">
              <button className={`service-switch ${menu === 0 ? 'active' : ''}`} onClick={() => setMenu(0)}>EXHIBITION</button>
              <button className={`service-switch ${menu === 1 ? 'active' : ''}`} onClick={() => setMenu(1)}>PHOTOS</button>
              <button className={`service-switch ${menu === 2 ? 'active' : ''}`} onClick={() => setMenu(2)}>VIDEOS</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NewsMedia;