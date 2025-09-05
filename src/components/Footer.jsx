import { useState } from "react";
import { assets } from "../assets/images/assets";

const Footer = () => {
  const [links, setLinks] = useState([
    { link: "Home" },
    { link: "About us" },
    { link: "Contact us" },
    { link: "Privacy Policy" },
  ]);
  return (
    <footer className="bg-[#101828] text-white">
      <div className="container py-[40px] border-b-[1px] border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          <div>
            <img src={assets.logo_dark} alt="" className="mb-[20px]" />
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              laborum nihil? Consequuntur optio est a facilis veniam quod
              deserunt vel inventore. Molestiae quia ?
            </p>
          </div>
          <div>
            <ul className=" flex w-full md:w-[35%] md:mx-auto flex-col gap-[10px]">
              <h2 className="font-bold text-[20px] mb-[10px]">Company</h2>
              {links.map((link) => {
                return (
                  <a
                    href={`#${link.link.toLocaleLowerCase()}`}
                    className="text-gray-400"
                  >
                    <li>{link.link}</li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h1 className="font-bold text-[20px]">
              Subscribe to our newsletter
            </h1>
            <p className="text-gray-400 text-sm md:text-md">
              The latest news, articles, and resources, sent
              <br />
              to your index weekly.
            </p>
            <div className="flex flex-col md:flex-row gap-[10px]">
              <input
                type="text"
                className="bg-gray-800 h-[40px] pl-[10px] rounded-[5px] w-full "
                placeholder="Enter Your Email"
              />
              <a href="">
                <button className="btn w-full md:w-[130px]">Subscribe</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container py-[20px] text-center">
          <p className="text-gray-500 text-sm md:text-md">
            Copyright 2025 © GreatStock. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
