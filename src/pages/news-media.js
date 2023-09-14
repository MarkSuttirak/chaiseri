import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsMediaExhibition from "../components/NewsMediaExhibition";
import NewsMediaPhotos from "../components/NewsMediaPhotos";
import NewsBannerImg from "../img/NewsBannerImg.png";
import NewsMediaVideos from "../components/NewsMediaVideos";

const NewsMedia = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header />

      <main className="bg-[#FAFBFC]">
        <section className="h-[520px] flex items-center mb-[50px] coverCenter" style={{ background: `url('${NewsBannerImg}')` }}>
          <div className="container mx-auto max-w-[1200px] px-6">
            <h1 className="text-white text-6xl font-bold">NEWS & MEDIA</h1>
          </div>
        </section>

        <section className="container mx-auto max-w-[1400px] px-6 mb-[50px]">
          <div className="border-b border-b-[2px] border-b-[#C4C4C4]">
            <div className="flex justify-center">
              <button
                className={`service-switch ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => handleTabClick(0)}
              >
                EXHIBITION
              </button>
              <button
                className={`service-switch ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
              >
                PHOTOS
              </button>
              <button
                className={`service-switch ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                VIDEOS
              </button>
            </div>
          </div>
        </section>

        {activeTab === 0 ? (
          <section className="container mx-auto max-w-[1280px] px-6 mb-20">
            <NewsMediaExhibition />
          </section>
        ) : activeTab === 1 ? (
          <section className="container mx-auto max-w-[1280px] px-6 mb-20">
           <NewsMediaPhotos />
          </section>
        ) : (
          <section className="container mx-auto max-w-[1280px] px-6 mb-20">
            <NewsMediaVideos />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default NewsMedia;
