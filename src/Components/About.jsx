import React from "react";
import aboutImage from "../assets/Images/CMP_4893_edited.PNG";
const About = () => {
  return (
    <div className="w-full h-full flex bg-[#141414]">
      
      <div className="flex-col p-10">
        <h2 className="p-10  text-white text-8xl font-banner">About</h2>
        <div className="w-1/2 h-1/2 p-10">
          <p className="w-full text-white text-md leading-7">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center aspect-square mx-auto p-10  right-0">
        <img className="w-1/2 h-[75%] object-cover rounded-3xl" src={aboutImage} />
      </div>
    </div>
  );
};

export default About;
