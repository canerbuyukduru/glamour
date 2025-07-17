"use client";
import React from "react";

const TextVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold">
        Kalite ve Doğallık: Lezzetin Arkasındaki Güç
      </h2>
      <p className="text-base sm:text-lg lg:text-2xl my-6 text-center text-[#1d1d1f]">
        Le Croissanti’de her kruvasan, doğallığın ve emeğin lezzetle buluştuğu
        bir sanat eseridir. Afyon’un verimli topraklarında beslenen ineklerden
        elde ettiğimiz sütle üretilen tereyağımız ve gizli tarifimizle
        hazırlanan hamurlar, kendi üretim tesisimizde özenle şekillenir. Her
        ısırıkta, kalitenin ve doğallığın gerçek tadına varırsınız.
      </p>
      <div className="w-full flex justify-center">
        <video
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[200px] sm:h-[420px] md:h-[540px] lg:h-[620px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default TextVideo;
