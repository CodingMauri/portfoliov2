import React from "react";
import background from "../assets/Images/moto.PNG";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black to-[#141414] z-1 p-2">
      <div className="w-full h-full flex justify-center items-center absolute z-0">
        <div className="w-full  absolute left-0 outline-3 outline-white h-full rounded-lg p-10 z-10">
          <img
            className=" w-1/3 h-full object-cover  rounded-3xl"
            alt="background"
            src={background}
          />
        
        </div>
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-[#141414]" />
        <div className="w-[75%] aspect-square flex flex-col absolute p-5 m-5 items-center justify-center">
          <h1 className=" text-white  text-8xl p-4 font-banner z-10">
            {" "}
            Hi I'm Mauricio
          </h1>
          <h2 className="text-white text-9xl font-banner z-10">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Web Developer",
                  "Full-Stack Engineer",
                  "MotoDude",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};
