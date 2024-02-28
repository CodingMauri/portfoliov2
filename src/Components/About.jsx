import React from "react";
import aboutPhoto from "../assets/Images/CMP_4893_edited.PNG";
export const About = () => {
  return (
    <div className="w-full h-full flex bg-[#141414]">
      <div className="flex flex-col w-1/2 h-full">
        <h1 className="pl-10 text-white font-banner text-6xl">About</h1>
        <p className=" font-lg text-white font-sans p-10">

          Empowering visions through code, I am a Bay Area-based software
          developer with a passion for crafting dynamic web applications.
          Whether it's translating ideas into digital reality or cruising
          through lines of code, I thrive on the thrill of bringing concepts to
          life. As a dedicated motorcyclist, I navigate the digital landscape
          with the same precision and enthusiasm, fueled by a love for the open
          road and a good cup of coffee. Let's ride the waves of innovation
          together and brew success in every line of code.

        </p>
      </div>
      <div className="w-1/2 aspect-square flex p-5 m-10 items-center justify-center">
        <img className=" object-cover w-full h-full rounded-full" src={aboutPhoto} alt="about" />
      </div>
    </div>
  );
};
