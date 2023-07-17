import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

const FilmCarousel = ({ sectionTitle, data }) => {
  const { url } = useSelector((state) => state.home);
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    if (data) {
      const refinedData = data.map((d) => {
        return { image: url.backdrop + d?.backdrop_path, name: d?.title };
      });
      setFinalData(refinedData);
    }
  }, [data, url]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 6,
    },
    midi2:{
      breakpoint:{
        max:900,min:750
      },
      items:4
    },
    tablet: {
      breakpoint: { max: 750, min: 600 },
      items: 3,
    },
   
    midi:{
      breakpoint:{max:600,min:464},
      items:2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cardWidth = 200; // Fixed width for each card
  const cardHeight = 360; // Fixed height for each card
  const cardMargin = 10; // Margin between each card

  const CustomButtonGroup = ({ next, previous }) => (
    <div className="gap-3 flex absolute top-0 right-3">
      {/* Previous button */}
      <button
        className="carousel-button bg-slate-400 rounded-full p-2 text-white"
        onClick={() => previous()}
      >
        {/* SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      {/* Next button */}
      <button
        className="carousel-button bg-slate-400 rounded-full p-2 text-white"
        onClick={() => next()}
      >
        {/* SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="relative mt-2 flex flex-col gap-2">
      <h1 className="text-3xl ms-3 font-bold">{sectionTitle}</h1>
      {finalData && finalData.length > 0 ? (
        <Carousel
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup />}
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          draggable={true}
          itemClass={`carousel-item-padding-${cardMargin}`}
        >
          {finalData.map((film, ind) => (
            <div
              className={`rounded-md overflow-hidden m-2 h-[13rem] carousel-card relative`}
              key={ind}
              // style={{
              //   width: cardWidth,
              //   height: cardHeight,
              //   marginRight: cardMargin,
              // }}
            >
              <img
                className="w-full h-full object-cover"
                src={
                  film?.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YYrbLm7f7qpAO8xGojz7PHa3wxPEqG3mjbUARZY&s"
                }
                alt={film.name}
              />
              <h1 className="px-3 w-full py-2 absolute bottom-0 left-0 ring-0 text-center z-50 text-white bg-black bg-opacity-50">
                {film?.name || "No Name"}
              </h1>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>Loading films...</p> // Placeholder for loading state
      )}
    </div>
  );
};

export default FilmCarousel;
