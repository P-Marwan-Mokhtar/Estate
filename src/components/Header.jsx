import { useRef, useState } from "react";
import { assets } from "../assets/images/assets";

const Header = () => {
  const [links, setLinks] = useState([
    { link: "Home" },
    { link: "About" },
    { link: "Projects" },
    { link: "Testimonials" },
  ]);
  const navBar = useRef();
  const openMenu = () => {
    navBar.current.style.left = " 0";
  };
  const closeMenu = () => {
    navBar.current.style.left = "-100%";
  };
  return (
    <header className="absolute w-full">
      <div className="container py-[30px] ">
        <div className="flex justify-between gap-[10px] items-center text-white ">
          <a href="">
            {" "}
            <img src="/src/assets/images/logo.svg" alt="" />
          </a>
          <ul
            ref={navBar}
            className=" items-center flex top-0 right-0 pt-[100px] md:pt-0 fixed flex-col z-30 text-black h-[100vh] w-[100%] md:flex-row md:text-white md:z-0 left-[-100%]    bg-white md:static md:bg-transparent   md:w-auto md:h-auto gap-[30px] md:gap-[50px]  transition-all duration-500  md:transition-none"
          >
            <a
              href="#"
              className="absolute top-15 right-8 md:hidden"
              onClick={closeMenu}
            >
              <img src={assets.cross_icon} alt="" className="w-[30px]" />
            </a>
            <img
              src={assets.logo_header_dark}
              className=" w-[150px] md:hidden"
              alt=""
            />
            {links.map((data) => {
              return (
                <li key={data.link}>
                  <a
                    href={`#${data.link.toLowerCase()}`}
                    onClick={closeMenu}
                    className="font-medium  p-[10px] rounded-[30px] hover:bg-black md:hover:bg-transparent hover:text-white md:hover:text-gray-400 transition-all duration-150"
                  >
                    {data.link}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="/" className="hidden md:block">
            <button className=" w-[100px] md:w-[130px] text-black bg-white rounded-[30px] font-medium h-[40px] hover:bg-transparent border-2 hover:text-white border-white transition-all duration-200">
              Sign Up
            </button>
          </a>

          <a href="#" className=" md:hidden" onClick={openMenu}>
            <img src={assets.menu_icon} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
