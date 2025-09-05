import { projectsData } from "../assets/images/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";

const Projects = () => {
  const breakpoints = {
    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1375) {
        content.current.style.left = 0;
        content.current.style.opacity = 1;
      }
    });
  });
  const content = useRef();
  return (
    <section id="projects" className="pb-[100px]">
      <div className="container overflow-x-hidden">
        <div className="pt-[100px] ">
          <div className="text-center mb-[80px]">
            <h1 className="header-h1 ">
              Projects <span className="header-span ">Completed</span>
            </h1>
            <p className="header-p">
              Crafting Spaces, Building Legacies-Explore
              <br />
              Our Portfolio
            </p>
          </div>
          <div ref={content} className="animation-section">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={breakpoints}
              loop={true}
              navigation={true}
              spaceBetween={30}
              slidesPerView={3}
              modules={[Navigation]}
              className="mySwiper"
            >
              {projectsData.map((data, index) => {
                return (
                  <SwiperSlide>
                    {" "}
                    <div key={index}>
                      <img src={data.image} alt="" className="rounded-[10px]" />
                      <div className="  absolute left-0 right-0 bottom-[-30px]  flex justify-center">
                        <div className="inline-block   rounded-[5px]  w-3/4  bg-white shadow-md px-4 py-2">
                          <h4 className=" text-md  md:text-xl  font-semibold text-gray-800">
                            {data.title}
                          </h4>
                          <p className="text-gray-500 text-[12px] md:text-sm">
                            {data.price} | {data.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
