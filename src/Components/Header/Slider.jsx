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

const Slider =()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1000}  
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative   text-center lg:lg:h-[100vh] h-100  bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
            style={{
              backgroundImage: `url(https://i.ibb.co/ymjpXf6L/pexels-cesarperez209-733745.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black/40  "></div>
            <Fade delay={200} duration={1000}>
              <h3 className=" relative text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
                Not All Who Wander Are Lost
              </h3>
            </Fade>
            <p className="relative mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-lg max-w-xl">
              Skip the waiting. Get the wheels and let your next story begin.
            </p>
            <button className="relative mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
              <Link to='/availableCars'>
              Get Rolling</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative   text-center lg:lg:h-[100vh] h-100  bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
            style={{
              backgroundImage: `url(https://i.ibb.co/1tCVpg5w/grant-ritchie-j0-YPbv-Xu4t0-unsplash.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black/40  "></div>
            <Fade delay={200} duration={1000}>
              <h3 className="relative text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
                Winter? Let’s Not Hibernate.
              </h3>
            </Fade>
            <p className="relative mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-lg max-w-xl">
              Heaters on, playlist ready. Grab the keys and chase the snow your
              way.
            </p>
            <button className="relative mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
              <Link to='/availableCars'>
              Get Rolling</Link>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative   text-center lg:lg:h-[100vh] h-100  bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
            style={{
              backgroundImage: `url(https://i.ibb.co/JwXrNSMS/koke-mayayo-thevisualkiller-u-G8-RGAp-PGWk-unsplash.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black/40  "></div>
            <Fade delay={200} duration={1000}>
              <h3 className="relative text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
                From City Lights to Desert's sun.
              </h3>
            </Fade>
            <p className="relative mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-lg max-w-xl">
              Wherever your weekend takes you, we’ve got the ride that fits the
              vibe.
            </p>
            <button className="relative mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
              <Link to='/availableCars'>
              Get Rolling</Link>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative   text-center lg:lg:h-[100vh] h-100 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
            style={{
              backgroundImage: `url( https://i.ibb.co/JF8DtDYj/tabea-schimpf-O7-Wzqme-Yoqc-unsplash.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black/40  "></div>
            <Fade delay={200} duration={1000}>
              <h3 className="relative text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
                Your Plan B Is Parked and Ready
              </h3>
            </Fade>
            <p className="relative mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-lg max-w-xl">
              Missed the bus? Flight too pricey? Spontaneous getaway? Say less.
            </p>
            <button className="relative mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
              <Link to='/availableCars'>
              Get Rolling</Link>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative   text-center lg:lg:h-[100vh]  h-100 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
            style={{
              backgroundImage: `url(https://i.ibb.co/xqV4FMBR/jonathan-daniels-8-O31-Oba-VSk-unsplash.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black/40  "></div>
            <Fade delay={200} duration={1000}>
              <h3 className="relative text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
                You Pick the Playlist, We’ll Handle the Car
              </h3>
            </Fade>
            <p className="relative mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-lg max-w-xl">
              Cruise in comfort, solo or with the squad. All roads welcome.
            </p>
            <button className="relative mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
              <Link to='/availableCars'>
              Get Rolling</Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;