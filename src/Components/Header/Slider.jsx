import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade } from "react-awesome-reveal";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router"; 

const sliderData = [
  {
    backgroundImage: `https://i.ibb.co/08b3nWk/pexels-cesarperez209-733745-1.jpg`,
    title: "Not All Who Wander Are Lost",
    paragraph: "Skip the waiting. Get the wheels and let your next story begin.",
    linkTo: '/availableCars',
  },
  {
    backgroundImage: `https://i.ibb.co/Fk8YkpXG/grant-ritchie-j0-YPbv-Xu4t0-unsplash-1.jpg`,
    title: "Winter? Let’s Not Hibernate.",
    paragraph: "Heaters on, playlist ready. Grab the keys and chase the snow your way.",
    linkTo: '/availableCars',
  },
  {
    backgroundImage: `https://i.ibb.co/LDf4S4Vp/koke-mayayo-thevisualkiller-u-G8-RGAp-PGWk-unsplash-1.jpg`,
    title: "From City Lights to Desert's sun.",
    paragraph: "Wherever your weekend takes you, we’ve got the ride that fits the vibe.",
    linkTo: '/availableCars',
  },
  {
    backgroundImage: `https://i.ibb.co/bRzxDKyN/tabea-schimpf-O7-Wzqme-Yoqc-unsplash-1-1.jpg`,
    title: "Your Plan B Is Parked and Ready",
    paragraph: "Missed the bus? Flight too pricey? Spontaneous getaway? Say less.",
    linkTo: '/availableCars',
  },
  {
    backgroundImage: `https://i.ibb.co/Lh5zCDyw/jonathan-daniels-8-O31-Oba-VSk-unsplash-1.jpg`,
    title: "You Pick the Playlist, We’ll Handle the Car",
    paragraph: "Cruise in comfort, solo or with the squad. All roads welcome.",
    linkTo: '/availableCars',
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 5000, // Autoplay delay in ms
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative text-center lg:h-[100vh] md:h-150 h-100 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <Fade delay={200} duration={1000}>
                <h3 className="relative text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
                  {slide.title}
                </h3>
              </Fade>
              <p className="relative mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-lg max-w-xl">
                {slide.paragraph}
              </p>
              <button className="px-6 py-3 my-6  bg-[#F3F3E0] hover:bg-[#777772] hover:text-white rounded-full font-semibold transition
                               shadow-md hover:shadow-lg cursor-pointer relative">
                <Link to={slide.linkTo}>
                  Get Rolling
                </Link>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
