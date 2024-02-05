import React from "react";
import background from "../assets/Images/CMP_4893_edited.PNG"
import Typewriter from "typewriter-effect";
export const Hero = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black to-[#141414] z-1">
      <div className="w-full h-full flex justify-center items-center absolute z-0">
        <img className="w-1/2 h-full rounded-full object-cover absolute right-0 p-10 z-10" alt = "background" src = {background} />
        <div className = "absolute w-full h-full bg-gradient-to-b from-transparent to-[#141414]" />
        <div className="w-[75%] aspect-square flex flex-col absolute p-5 m-5 items-center justify-center">
          <h1 className="text-white text-8xl p-4 font-banner z-10"> Hi I'm Mauricio</h1>
          <h2 className = 'text-white text-8xl font-banner z-10'>
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
