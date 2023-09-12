import Footer from "../components/footer";
import Header from "../components/header";

const AboutUs = () => {
  return (
    <>
      <Header />

      <main>
        <section className='h-[520px] flex items-center mb-[50px]' style={{background:`url('https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`,backgroundSize:'cover'}}>
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-white text-6xl">ABOUT US</h1>
          </div>
        </section>

        <section className="container mx-auto max-w-7xl">
          <p>Chaiseri is a Thai company specialize in Defense Land system for Armored vehicle, Tracks system, Runflat, and maintenance, upgrading service for military vehicle. We design, manufacture, recondition, upgrade military vehicle and its subsystem to meet satisfaction of the growing needs of armed forces and internal security organization. Our product and service under brand “Chaiseri” has been delivered to 6 continents, more than 40 countries. Helping to maintain the peace of nations and increasing land system readiness to the end user defense forces, we have experienced in the business since 1968 (B.E. 2511)</p>
          <p className="mt-4">CHAISERI production facility, area of 140,000 sqm, located in industrial district, Pathumthani, Thailand, 40 km North from Bangkok city center and 50 km to seaport. We have various type of machine from latest state of the art CNC machine, various type of cutting machine, pressing machine, dynamometer test, various type of test machine, sand blasting room, paint / coating room and oven, rubber forming and etc. We have system integration engineer and technician more than 30 peoples and various type of machine for service customer. Product and Service are categorized in to 5 segments.</p>
          <ol className="list-decimal ml-8 mt-4">
            <li>Armored Vehicle</li>
            <li>Tracks System</li>
            <li>Recondition and Upgrading Military Vehicle</li>
            <li>Runflat</li>
            <li>Customize Armored vehicle for specific mission</li>
          </ol>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutUs;