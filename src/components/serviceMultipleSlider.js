import { useRef, useEffect, useState } from "react";

const MultiSlider = ({resources, withTitle, titleColor = 'black', descColor = 'black'}) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
  

  return (
    <div className="carousel py-20 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white h-full w-10 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white h-full w-10 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex justify-between gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {resources.map((resource, index) => {
            return (
              <div className="flex flex-col">
                {withTitle && (
                  <h3 className="py-6  mx-auto text-[20px] leading-[32px] font-bold h-28" style={{color:titleColor}}>
                    {resource.title}
                  </h3>
                )}
                <div
                  key={index}
                  className="carousel-item text-center relative object-cover w-[222px] h-[181px] snap-start"
                >
                  <a
                    href={resource.link}
                    className="h-full w-full  block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                   
                  >
                    <img
                      src={resource.imageUrl || ''}
                      alt={resource.title}
                      className="h-[150px] w-full object-cover"
                    />
                  </a>
                </div>
                {withTitle ? (
                  <h3 className="py-6 px-3 mx-auto text-base de" style={{color:descColor}}>
                    {resource.desc}
                  </h3>
                ) : (
                  <h3 className="py-6 px-3 mx-auto text-xl ab" style={{color:titleColor}}>
                    {resource.title}
                  </h3>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MultiSlider;