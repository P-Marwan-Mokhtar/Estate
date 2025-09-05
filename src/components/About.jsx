import { useEffect, useRef, useState } from "react";

const About = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        content.current.style.left = 0;
        content.current.style.opacity = 1;
      }
    });
  });
  const content = useRef();
  const [features, setFeatures] = useState([
    { num: "10+", title: "Years of Excellence" },
    { num: "12+", title: "Projects Completed" },
    { num: "20+", title: "Mn. Sq. Ft. Delivered" },
    { num: "25+", title: "Ongoing Projects" },
  ]);
  return (
    <section id="about">
      <div className="container overflow-hidden pb-[100px]">
        <div
          ref={content}
          className="pt-[100px] pb-[50px] flex items-center flex-col justify-center gap-[50px] max-w-full animation-section"
        >
          <div className=" text-center">
            <h1 className=" header-h1 ">
              About <span className="header-span">Our Brand</span>
            </h1>
            <p className="header-p">
              Passionate About properties,Dedicated to <br />
              Your Vision
            </p>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 justify-center gap-[5%]  items-center max-w-full ">
            <img
              src="/src/assets/images/brand_img.png"
              className=" md:h-[500px] xl:h-auto "
              alt=""
            />

            <div className="flex flex-col  gap-[35px] xl:gap-[50px]  max-w-full ">
              <div className="flex justify-between max-w-full flex-wrap w-[350px] md:w-[350px] xl:w-[400px]   ">
                <div className="flex flex-col gap-[30px]">
                  {features.slice(0, 2).map((feature, index) => {
                    return (
                      <div
                        key={index}
                        className="   flex flex-col items-start   "
                      >
                        <h2 className="text-[30px] md:text-[35px] font-semibold">
                          {feature.num}
                        </h2>
                        <p className="opacity-[0.7] text-sm md:text-md">
                          {feature.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-[30px] ">
                  {features.slice(2, 4).map((feature, index) => {
                    return (
                      <div key={index} className="   flex flex-col    ">
                        <h2 className="text-[30px] md:text-[35px] font-semibold">
                          {feature.num}
                        </h2>
                        <p className="opacity-[0.7] text-sm md:text-md">
                          {feature.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-[17px] xl:text-[20px] font-medium text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                suscipit laborum, nulla delectus sed perferendis saepe magnam
                necessitatibus cupiditate deleniti quasi asperiores quo
                consequuntur libero, earum sapiente. Eaque, debitis nulla!
              </p>
              <a href="/">
                <button className="w-[130px] btn text-white">Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
