"use client";

import Image from "next/image";

const TextCarouselRight = ({ src, src1, text, text1, text2 }) => {
  return (
    <section className="flex flex-col 2xl:flex-row justify-center items-center gap-8 2xl:gap-16 px-4 py-6">
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
      <div className="w-full 2xl:w-1/2 flex flex-col items-center">
        <h2 className="text-center font text-2xl 2xl:text-4xl font-bold mb-6 text-white">
          Lezzetin Sanatı: Her Isırıkta Bir Hikaye
        </h2>
        <div>
          <div className="text-[20px] text-white mb-4 max-w-xl text-left">
            Le Croissanti’de bir kruvasan yalnızca hamur işi değil, duyulara
            hitap eden bir sanat eseridir. Kat kat açılmış hamurda, sabırla
            yoğrulmuş ustalık ve Afyon’un doğal tereyağıyla harmanlanmış bir
            tutku yatıyor. Her ısırıkta, Fransız pastacılığının incelikleriyle
            yoğrulmuş benzersiz bir hikâyeye davetlisiniz. Çıtır dış katmanın
            altında saklanan yumuşacık dokular, size her lokmada yeniden âşık
            olacağınız bir deneyim sunar
          </div>
          <div className="text-[20px] text-white mb-4 max-w-xl text-left">
            Le Croissanti’de bir kruvasan yalnızca hamur işi değil, duyulara
            hitap eden bir sanat eseridir. Kat kat açılmış hamurda, sabırla
            yoğrulmuş ustalık ve Afyon’un doğal tereyağıyla harmanlanmış bir
            tutku yatıyor. Her ısırıkta, Fransız pastacılığının incelikleriyle
            yoğrulmuş benzersiz bir hikâyeye davetlisiniz. Çıtır dış katmanın
            altında saklanan yumuşacık dokular, size her lokmada yeniden âşık
            olacağınız bir deneyim sunar
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextCarouselRight;
