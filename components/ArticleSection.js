import React from "react";
import TextAnimation from "./TextAnimation";

const ArticleSection = () => {
  return (
    <div className="sm:px-4 py-6">
      <h2 className="text-center mb-8 text-2xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
        Lezzetin Sanatla Buluştuğu Yüzyıl:
        <br className="block sm:hidden" />
        Le Croissanti’ye Hoş Geldiniz!
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-4">
        <div className="pt-8 md:pt-32 px-2 md:px-4 flex-1">
          <TextAnimation className={"text-amber-700 text-xl sm:text-2xl lg:text-3xl mb-4 text-center md:text-left"} text1="Küçük Bir Hayal, Büyük Bir Marka: İlk Adım Gürselpaşa" />
          <TextAnimation className="text-lg sm:text-xl lg:text-2xl text-center md:text-left" text1="Le Croissanti’nin temelleri 2022 yılında Adana Gürselpaşa’da, sadece 6 masa ve 3 çalışanla atıldı. Başlangıçta küçük gibi görünen bu hayal, taptaze kruvasanlar, samimi bir ortam ve kaliteli hizmetle kısa sürede büyük bir ilgiye dönüştü. İlk şubemiz, mahallemizin vazgeçilmez tat duraklarından biri haline geldi." />
        </div>
        <div className="px-2 md:px-4 flex-1">
          <TextAnimation className={"text-amber-700 text-xl sm:text-2xl lg:text-3xl mb-4 text-center md:text-left"} text1="Küçük Bir Hayal, Büyük Bir Marka: İlk Adım Gürselpaşa" />
          <TextAnimation className="text-lg sm:text-xl lg:text-2xl text-center md:text-left" text1="Le Croissanti’nin temelleri 2022 yılında Adana Gürselpaşa’da, sadece 6 masa ve 3 çalışanla atıldı. Başlangıçta küçük gibi görünen bu hayal, taptaze kruvasanlar, samimi bir ortam ve kaliteli hizmetle kısa sürede büyük bir ilgiye dönüştü. İlk şubemiz, mahallemizin vazgeçilmez tat duraklarından biri haline geldi." />
        </div>
        <div className="pt-8 md:pt-32 px-2 md:px-4 flex-1">
          <TextAnimation className={"text-amber-700 text-xl sm:text-2xl lg:text-3xl mb-4 text-center md:text-left"} text1="Küçük Bir Hayal, Büyük Bir Marka: İlk Adım Gürselpaşa" />
          <TextAnimation className="text-lg sm:text-xl lg:text-2xl text-center md:text-left" text1="Le Croissanti’nin temelleri 2022 yılında Adana Gürselpaşa’da, sadece 6 masa ve 3 çalışanla atıldı. Başlangıçta küçük gibi görünen bu hayal, taptaze kruvasanlar, samimi bir ortam ve kaliteli hizmetle kısa sürede büyük bir ilgiye dönüştü. İlk şubemiz, mahallemizin vazgeçilmez tat duraklarından biri haline geldi." />
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
