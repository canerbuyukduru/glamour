import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[500px] mb-12">
      <Navbar />
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/videos/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <div className="bg-black/40 absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Daire şeklinde dönen animasyonlu yazı */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-40 h-40 sm:w-64 sm:h-64 flex items-center justify-center">
          <svg
            className="w-full h-full animate-spin-slow"
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              />
            </defs>
            <text
              fill="#ffff"
              fontSize="14"
              fontFamily="Arial"
              letterSpacing="3"
            >
              <textPath xlinkHref="#circlePath">
                GLAMOUR • GLAMOUR • GLAMOUR • GLAMOUR •
              </textPath>
            </text>
          </svg>
          <span className="absolute text-white text-lg sm:text-2xl font-bold text-center px-2">
            GLAMOUR
          </span>
        </div>
      </div>
      {/* Diğer içerikler buraya eklenebilir */}
    </div>
  );
};

export default HeroSection;
