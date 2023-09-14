import React  from "react";

const NewsMediaVideos = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-8">
      <div className="">
      <iframe
        
        height="230"
        src="https://www.youtube.com/embed/oVMm6WFd7S4?si=MMfs3W30HazmG_OX"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full max-w-screen-lg"
      ></iframe>
    </div>
        <div>
        <iframe
       
        height="230"
        src="https://www.youtube.com/embed/aDMLpBIBp4g?si=E1WBbrQQKMaN7Wb0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full max-w-screen-lg"
      ></iframe>
        </div>
      </div>
  
    </div>
  );
};

export default NewsMediaVideos;
