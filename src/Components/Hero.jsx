import React from "react";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black to-[#141414] z-1">
      <div className="w-full h-full flex left-0 absolute z-1 items-center">
        {/* <img className="w-full h-full object-cover m-1 " alt = "background" src = {background} /> */}
        <div className="w-[75%] aspect-square flex flex-col absolute p-5 m-5 items-center  left-0 justify-center">
          <h1 className="text-white text-8xl left-0 text-shadow-lg shadow-black p-4 font-banner z-10"> Hi I'm Mauricio</h1>
          <h2 className = 'text-white text-shadow-lg shadow-black text-8xl font-banner z-10'>
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
