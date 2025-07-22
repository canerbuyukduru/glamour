import React from "react";
import TextAnimation from "./TextAnimation";

const ArticleSection = ({articleTitle,articleText,articleTitle1,articleText1,articleTitle2,articleText2}) => {
  return (
    <div className="sm:px-4 py-12">
      <h2 className="text-center mb-8 text-2xl sm:text-4xl lg:text-5xl text-[#8B0000] font-bold leading-tight italic">
        Glamour Cafe: Lezzetin ve Zarafetin Buluşma Noktası:
      
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-4 py-16">
        <div className="pt-8 md:pt-32 px-2 md:px-4 flex-1">
          <TextAnimation className={"text-[#8B0000] font-bold text-xl sm:text-2xl lg:text-3xl mb-4 text-center md:text-left"} text1={articleTitle} />
          <TextAnimation className="text-lg sm:text-xl lg:text-2xl text-center md:text-left" text1={articleText} />
        </div>
        <div className="px-2 md:px-4 flex-1">
          <TextAnimation className={"text-[#8B0000] font-bold text-xl sm:text-2xl lg:text-3xl mb-4 text-center md:text-left"} text1={articleTitle1}/>
          <TextAnimation className="text-lg sm:text-xl lg:text-2xl text-center md:text-left" text1={articleText1} />
        </div>
        <div className="pt-8 md:pt-32 px-2 md:px-4 flex-1">
          <TextAnimation className={"text-[#8B0000] font-bold text-xl sm:text-2xl lg:text-3xl mb-4 text-center md:text-left"} text1={articleTitle2} />
          <TextAnimation className="text-lg sm:text-xl lg:text-2xl text-center md:text-left" text1= {articleText2} />
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
