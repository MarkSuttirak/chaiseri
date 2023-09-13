import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Footer from "../components/footer";
import Header from "../components/header";
import ServiceMultiSlider from "../components/serviceMultipleSlider";
import AboutUsBannerImg from "../img/AboutUsBannerImg.png";
import GreenIndustry from "../img/Green-industry.png";
import LITTLEGOVERNORPROJECT from "../img/LITTLE-GOVERNOR-PROJECT.png";
import DONATINGTOGOVERNMENT from "../img/DONATING-TO-GOVERNMENT.png";
import Award2006 from "../img/2006.png";
import Award2007 from "../img/2007.png";
import Award2008 from "../img/2008.png";
import Award2015 from "../img/2015.png";
import Award2018 from "../img/2018.png";
import Award2014 from "../img/2014-Design-Excellence-Award.png";
import QualityManagement from "../img/QualityManagement.png";
import EnvironmentalManagement from "../img/EnvironmentalManagement.png";
import HealthSafetyManagement from "../img/HealthSafetyManagement.png";
import HUMANRIGHTAWARD from "../img/HUMANRIGHTAWARD2020.png";
import GREENINDUSTRY from "../img/GREENINDUSTRYLEVEL2.png";
import CSRDIWAWARD from "../img/CSR-DIW-AWARD2020.png";
import THAILANDSBRAND from "../img/THAILAND_S-BRAND-1.png";
import InternationalDefense from "../img/International-Defensebr-Exhibition.png";
import ASEANBUSINESSAWARD2019 from "../img/ASEANBUSINESSAWARD2019.png";
import IPCHAMPION2019 from "../img/IPCHAMPION2019.png";
import IPCHAMPION2013 from "../img/IPCHAMPION2013.png";
import DesignExellenceAwards from "../img/Design-Exellence-Awards-2011.png";



const csractivities = [
  {
    title: 'Green industry',
    desc: 'Project for Cultivate youth to see the importance of trees.',
    source:
    GreenIndustry,
  },
  {
    title: 'LITTLE GOVERNOR PROJECT',
    desc: 'Inspiring youth to see, to think, and to feel the responsibility of Governor and to experience the technology, how to build the armored vehicle.',
    source:
    LITTLEGOVERNORPROJECT
  },
  {
    title: 'DONATING TO GOVERNMENT',
    desc: 'Being part of the society helping each other during crisis time with Strom and Flood in Southern part of Thailand.',
    source:DONATINGTOGOVERNMENT
  },
]

const awards = [
  {
    title: 'PRIME MINISTER’S EXPORT AWARD 2006',
    desc: 'For Distinctive Development & Marketing of Thai Owned Design',
    source:Award2006
  },
  {
    title: 'PRIME MINISTER’S EXPORT AWARD 2007',
    desc: 'For Outstanding Performance as Thai Owned Brand',
    source:Award2007
  },
  {
    title: 'PRIME MINISTER’S EXPORT AWARD 2008',
    desc: 'Design Excellence Award Track Shoes for All Type Amored Track Vehicle',
    source:Award2008
  },
  {
    title: 'PRIME MINISTER’S EXPORT AWARD 2015',
    desc: 'For Outstanding Performance as Best Thai Brand',
    source:Award2015},
  {
    title: 'PRIME MINISTER’S EXPORT AWARD 2018',
    desc: 'For Outstanding Performance as Best Exporter',
    source:Award2018 },
  {
    title: 'IPITEX 2014 DESIGN EXCELLENCE AWARD FOR ARMORED VEHICLE',
    desc: 'Bullet and Blast protection 4×4 type by CHAISERI from Department of Export Promotion',
    source:Award2014,
  }
]

const awardsTwo = [
  {
    year: '2015',
    desc: 'Quality Management System Standard',
    source:QualityManagement},
  {
    year: '2015',
    desc: 'Environmental Management System Standard',
    source:EnvironmentalManagement
  },
  {
    year: '2018',
    desc: 'Health Safety Management System Standard',
    source:HealthSafetyManagement
  },
]

const AboutUs = () => {
  const items = [
    {
      imageUrl: DesignExellenceAwards,
      title: "DESIGN EXCELLENCE AWARD 2011 (REMARK)",
      desc: 'For First Win 4x4 Armored Vehicle From Minster Of Commerce Of Thailand'
    },
    {
      imageUrl: IPCHAMPION2013,
      title: "IP CHAMPION 2013",
      desc: 'In Patent From Department Of Intellectual Property'
    },
    {
      imageUrl: IPCHAMPION2019,
      title: "IP CHAMPION 2019",
      desc: (
        <>
          Excellence Intellectual Property<br/>
          Category: Industrial Design (Large <br/>Enterprises And State Enterprises)<br/>
          From Department Of Intellectual Property
        </>
      )
    },
    {
      imageUrl: ASEANBUSINESSAWARD2019,
      title: "ASEAN BUSINESS AWARD 2019",
      desc: (
        <>
          In The Field Of Automotion (Mid-Tier)<br/>
          From ASEAN Business Advisory Council:<br/>
          ASEAN-BAC
        </>
      )
    },
    {
      imageUrl: InternationalDefense,
      title: "International Defense Exhibition (IDEX2005)",
      desc: (
        <>
          Most Promising Award During<br/>
          International Defense Exhibition (IDEX2005) From Shaikh<br/>
          Nahyan Bin Zayed Al Nahyah
        </>
      )
    },
    {
      imageUrl: THAILANDSBRAND,
      title: "THAILAND BRAND",
      desc: (
        <>
          Chaiseri Qualify And Received Logo "Thailand<br/>
          Brand" From Department Of Export<br/>
          Promotion, Ministry Of Commerce
        </>
      )
    },
    {
      imageUrl: CSRDIWAWARD,
      title: "CSR-DIW AWARD 2020",
      desc: (
        <>
          In Continue To Hold Activities For Society,<br/>
          Communities And Environment<br/>
          From Department Of Industrial Works
        </>
      )
    },
    {
      imageUrl: GreenIndustry,
      title: "GREEN INDUSTRY LEVEL 2",
      desc: (
        <>
          Green Industry Level 2<br/>
          From Ministry Of Industry<br/>
        </>
      )
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80",
      title: "GREEN INDUSTRY LEVEL 2",
      desc: (
        <>
          Green Industry Level 2<br/>
          From Ministry Of Industry<br/>
        </>
      )
    },
  ]

  return (
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section className='h-[520px] flex items-center mb-[50px] coverCenter' style={{background:`url('${AboutUsBannerImg}')`}}>
          <div className="container mx-auto max-w-[1280px] px-6">
            <h1 className="text-white text-6xl font-bold">ABOUT US</h1>
          </div>
        </section>

        <section className="container mx-auto max-w-[1280px] px-6">
          <p className="font-medium text-black">Chaiseri is a Thai company specialize in Defense Land system for Armored vehicle, Tracks system, Runflat, and maintenance, upgrading service for military vehicle. We design, manufacture, recondition, upgrade military vehicle and its subsystem to meet satisfaction of the growing needs of armed forces and internal security organization. Our product and service under brand “Chaiseri” has been delivered to 6 continents, more than 40 countries. Helping to maintain the peace of nations and increasing land system readiness to the end user defense forces, we have experienced in the business since 1968 (B.E. 2511)</p>
          <p className="mt-4 font-medium text-black">CHAISERI production facility, area of 140,000 sqm, located in industrial district, Pathumthani, Thailand, 40 km North from Bangkok city center and 50 km to seaport. We have various type of machine from latest state of the art CNC machine, various type of cutting machine, pressing machine, dynamometer test, various type of test machine, sand blasting room, paint / coating room and oven, rubber forming and etc. We have system integration engineer and technician more than 30 peoples and various type of machine for service customer. Product and Service are categorized in to 5 segments.</p>
          <ol className="list-decimal ml-8 mt-4 space-y-1">
            <li className="font-medium text-black">Armored Vehicle</li>
            <li className="font-medium text-black">Tracks System</li>
            <li className="font-medium text-black">Recondition and Upgrading Military Vehicle</li>
            <li className="font-medium text-black">Runflat</li>
            <li className="font-medium text-black">Customize Armored vehicle for specific mission</li>
          </ol>
        </section>

        <section className="container mx-auto max-w-[1280px] px-6 lg:flex gap-x-2 m-[120px]">
          <div className="lg:w-1/3 pb-[10px]">
            <h2 className="font-bold tracking-tight text-center lg:text-left text-5xl text-[#2d2a4a]">VISION</h2>
          </div>
          <div className="border-t border-t-[2px] border-t-black flex lg:w-1/3 mt-[2px] pt-1">
            <ArrowUpRightIcon className="w-5 h-5 mt-1" />
            <p className="text-[18px] leading-7 font-medium ml-2">To be Thai reliable and trusted partner in <br/>Defense Land system</p>
          </div>
        </section>

        <section className="container mx-auto max-w-[1280px] px-6 lg:flex gap-x-2 m-[120px]">
          <div className="lg:w-1/3 pb-[10px]">
            <h2 className="font-bold tracking-tight text-center lg:text-left text-5xl text-[#D73A32]">OUR VALUES</h2>
          </div>
          <div className="flex flex-col mt-[10px] lg:w-2/3 lg:mt-[2px]">
            <div className="border-t border-t-[1px] border-t-black py-4">
              <h2 className="text-3xl font-semibold mb-2">Integrity</h2>
              <p className="text-[18px] leading-7 font-medium">Doing what is right, and keep what we promise</p>
            </div>
            <div className="border-t border-t-[1px] border-t-black py-4">
              <h2 className="text-3xl font-semibold mb-2">Customer satisfaction</h2>
              <p className="text-[18px] leading-7 font-medium">Consistency to high customer satisfaction</p>
            </div>
            <div className="border-t border-t-[1px] border-t-black py-4">
              <h2 className="text-3xl font-semibold mb-2">Excellence</h2>
              <p className="text-[18px] leading-7 font-medium">Be reliable, consistent every time, and to improve everyday</p>
            </div>
            <div className="border-t border-t-[1px] border-t-black py-4">
              <h2 className="text-3xl font-semibold mb-2">Caring</h2>
              <p className="text-[18px] leading-7 font-medium">Ensures that customers are cared for, their needs are listened to, and helping them in finding the right solution and Caring for society.</p>
            </div>
            <div className="border-t border-t-[1px] border-t-black py-4">
              <h2 className="text-3xl font-semibold mb-2">Teamwork</h2>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-[1280px] px-6 lg:flex gap-x-2 m-[120px]">
          <div className="lg:w-1/3 pb-[10px]">
            <h2 className="font-bold tracking-tight text-center lg:text-left text-5xl text-[#2d2a4a]">MISSION</h2>
          </div>
          <div className="flex lg:w-2/3 mt-[10px] lg:mt-0">
            <p className="text-[18px] leading-7 font-medium">To provide defense material that is good quality and fulfilling the requirement by combining in house capability and integrating of innovation</p>
          </div>
        </section>

        <section className="container mx-auto max-w-[1280px] px-6 lg:flex gap-x-2 m-[120px]">
          <div className="lg:w-1/3 pb-[10px]">
            <h2 className="font-bold tracking-tight text-center lg:text-left text-5xl text-[#2d2a4a]">QUALITY ASSURANCE</h2>
          </div>
          <div className="flex flex-col lg:w-2/3 mt-[10px] lg:mt-0 gap-y-4">
            <p className="text-[18px] leading-7 font-medium">In our continuous quality control process, we have stringent batch laboratory test of raw materials and field testing under actual operating condition which are standard practice of Chaiseri in order to make the products’ quality according to Military specification and NATO standard.</p>
            <p className="text-[18px] leading-7 font-medium">Every product manufactured by Chaiseri thoroughly examined by an in-house quality assurance team, from raw materials to finished products, hence we always offer top quality products to our clients. Also, we have received certificates of appreciation for our products and services from our previous customers.</p>
            <p className="text-[18px] leading-7 font-medium">With our policy of supplying excellent quality at reasonable prices together with on-time delivery, our customers can ensure that every single product from Chaiseri will meet the customer expectation.</p>
          </div>
        </section>

        <section className="container mx-auto max-w-[1280px] px-6 lg:flex m-[120px] h-[600px]">
          <div className="lg:w-2/3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15482.881382754513!2d100.48955700000002!3d14.034584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28774cf00127f%3A0xa9d78fc5ed1d4d36!2sChaiseri%20Metal%20%26%20Rubber%20Co.%2CLTD.!5e0!3m2!1sen!2sus!4v1694491001693!5m2!1sen!2sus" className="border-0 w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="lg:w-1/3 bg-[#2D2A4A] flex flex-col justify-between p-[60px]">
            <h2 className="font-bold tracking-tight text-center lg:text-left text-5xl text-white">LOCATION</h2>
            <p className="text-white font-medium">Chaiseri is located in the province of Pathumthani, which is north of Bangkok, Thailand.</p>
          </div>
        </section>

        <section className="container mx-auto max-w-[1600px] px-6 m-[120px]">
          <div className="flex flex-col text-center w-full">
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl text-[#2d2a4a]">CORPORATE SOCIAL RESPONSIBILITY</h2>
            <p className="text-[22px] leading- text-[#a51931]">
            Chaiseri serve local community
            </p>
          </div>
          <div className="my-[5%]">
            <ul role="list" className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10">
              {csractivities.map((activity) => (
                <li key={activity.source} className="relative flex flex-col gap-y-3">
                  <div className="group block w-full overflow-hidden rounded-sm">
                    <img src={activity.source} alt="" className="pointer-events-none"/>
                  </div>
                  <h2 className="font-semibold tracking-tight text-center lg:text-left text-4xl text-[#D73A32]">{activity.title}</h2>
                  <p className="pointer-events-none block text-base font-medium text-[#262626]">{activity.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto max-w-[1600px] px-6 m-[120px]">
          <div className="text-center w-full">
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#D73A32]">AWARDS</h2>
          </div>
          <div className="my-[5%]">
            <ul role="list" className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10">
              {awards.map((award) => (
                <li key={award.source} className="relative flex flex-col gap-y-3">
                  <div className="group block w-full overflow-hidden rounded-lg">
                    <img src={award.source} alt="" className="pointer-events-none mx-auto"/>
                  </div>
                  <h2 className="mt-5 font-semibold tracking-tight text-center lg:text-left text-3xl text-[#D73A32]">{award.title}</h2>
                  <p className="pointer-events-none block text-base font-medium text-[#262626]">{award.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 bg-black">
          <ServiceMultiSlider resources={items} withTitle={true} titleColor="#D73A32" descColor="white"/>
        </section>

        

        <section className="container  px-6 py-20  bg-[#EFEFEF]">
          <div className=" max-w-[1280px] mx-auto">
          <ul role="list" className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10">
            {awardsTwo.map((award) => (
              <li key={award.source} className="relative flex flex-col gap-y-3">
                <div className="group block w-full overflow-hidden rounded-lg">
                  <img src={award.source} alt="" className="pointer-events-none mx-auto"/>
                </div>
                <h2 className="font-semibold tracking-tight text-center text-2xl">{award.year}</h2>
                <p className="pointer-events-none block text-base text-center font-medium text-black">{award.desc}</p>
              </li>
            ))}
          </ul>
          </div>
          
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutUs;