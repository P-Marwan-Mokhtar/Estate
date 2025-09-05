




const Landing = () => {
  return (
    <section id="home" className="bg-[url(/src/assets/images/header_img.png)] w-full h-[100vh] bg-center bg-cover ">
      <div className="container">
        <div className="flex text-white justify-center items-center flex-col gap-[50px] h-[100vh] font-bold text-center">
          <h1 className=" text-[40px] md:text-[60px] xl:text-[80px]">Explore homes that <br /> fit your dreams</h1>
          <div className="flex  gap-[30px]">
            <a href="/"><button className="w-[130px] h-[40px] border-[1px] rounded-[5px] border-white  cursor-pointer">Projects</button></a>
            <a href="#contact"><button className="w-[130px] btn">Contact Us</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
