import React from "react";

const Contact = () => {
  return (
    <section className="py-[100px]" id="contact">
      <div className="container">
        {" "}
        <div className="text-center mb-[100px]">
          <h1 className="header-h1">
            Contact <span className="header-span">With Us</span>
          </h1>
          <p className="header-p">
            Ready to Make a Move?Let's Build Your <br /> Future Together
          </p>
        </div>
        <div className="w-[800px] mx-auto max-w-full">
          <form action="" className="flex flex-col gap-[30px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] ">
              <label htmlFor="" className="flex flex-col gap-[5px]">
                Your Name
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-[10px] border-2 border-gray-300 rounded-[5px] "
                />
              </label>
              <label htmlFor="" className="flex flex-col gap-[5px]">
                Your Email
                <input
                  type="text"
                  placeholder="Your Email"
                  className="p-[10px] border-2 border-gray-300 rounded-[5px]"
                />
              </label>
            </div>
            <label htmlFor="" className="flex flex-col gap-[5px] ">
              Message
              <textarea
                name=""
                rows={8}
                id=""
                placeholder="Message"
                className="p-[10px] border-2 border-gray-300 rounded-[5px]  "
              ></textarea>
            </label>
          <button className=" w-[200px] text-white btn block mx-auto">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
