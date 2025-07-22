"use client";

import Image from "next/image";

const TextCarouselLeft = (  { title,src, src1, text, text1, text2 }) => {
  return (
    <section className="flex flex-col 2xl:flex-row justify-center items-center">
      <div className="w-full 2xl:w-1/2 flex flex-col items-center">
        <h2 className="text-center font text-2xl 2xl:text-4xl font-bold mb-6 text-[#8B0000]">
         {title}
        </h2>
        <div>
          <div className="text-[20px] text-[#1d1d1f] mb-4 max-w-xl text-center">
           {text}
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w-1/2 flex justify-center">
        {/* Image Carousel */}
        <div className="w-full max-w-xl">
          <div>
            <Image
              src={src || "/images/lahmacun.webp"}
              width={620}
              height={620}
              alt="Görsel 1"
              className="object-cover w-full h-[340px] 2xl:w-[620px] 2xl:h-[620px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextCarouselLeft;
