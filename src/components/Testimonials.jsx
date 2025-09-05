import { useEffect, useRef } from "react";
import { assets, testimonialsData } from "../assets/images/assets";

const Testimonials = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2250) {
        content.current.style.left = 0;
        content.current.style.opacity = 1;
      }
    });
  });
  const content = useRef();

  return (
    <section className="pt-[100px]" id="testimonials">
      <div className="container overflow-hidden">
        <div className="text-center mb-[50px]">
          <h1 className="header-h1">
            Customer <span className="header-span">Testimonials</span>
          </h1>
          <p className="header-p">
            Real Stories Those Who Found Home
            <br /> with Us
          </p>
        </div>
        <div
          ref={content}
          className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px]  justify-center animation-section pb-[100px]"
        >
          {testimonialsData.map((data) => {
            return (
              <div className="bg-white shadow-[0px_0px_8px_1px_#e3dbdb] rounded-[5px] py-[50px] flex flex-col items-center justify-center  px-[40px]">
                <img
                  src={data.image}
                  className="w-[80px] h-[80px] mb-[20px]"
                  alt=""
                />
                <h2 className="text-[20px] font-semibold">{data.name}</h2>
                <h3 className="text-gray-500 mb-[15px]">{data.title}</h3>
                <div className="flex gap-[5px]">
                  {Array.from({ length: data.rating }, (item, index) => (
                    <img
                      src={assets.star_icon}
                      className="mb-[15px]"
                      key={index}
                      alt=""
                    />
                  ))}
                </div>
                <p className="text-center text-[18px] text-gray-500 font-semibold">
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
