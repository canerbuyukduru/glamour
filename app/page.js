"use client";
import HeroSection from "@/components/HeroSection";
import TextCarouselRight from "@/components/TextCarouselRight";
import TextCarouselLeft from "@/components/TextCarouselLeft";
import ArticleSection from "@/components/ArticleSection";
import { useEffect, useState } from "react";
import TextVideo from "@/components/TextVideo";
import Footer from "@/components/Footer";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        window.scrollTo(0, currentScroll - Math.max(20, currentScroll / 15));
        window.requestAnimationFrame(scrollStep);
      }
    };
    window.requestAnimationFrame(scrollStep);
  };

  return (
    <div>
      <HeroSection />
      <main className="container mx-auto px-8 py-6 space-y-12">
        <TextCarouselLeft text={"Sakin ve samimi bir ortamda, kendinizi evinizde hissedeceğiniz Glamour Cafe'de buluşuyoruz. Kaliteli kahve çekirdeklerimizden özenle hazırlanan lezzetli kahveler, taptaze pastalar ve tatlı çeşitlerimizle gününüze tat katmayı amaçlıyoruz. Vizyonumuz, sadece bir kahve molası değil; aynı zamanda huzur ve keyif dolu anlar yaratmak. Glamour Cafe, dostlukların pekiştiği, özel anların paylaşıldığı ve kendinize ayırdığınız değerli zamanın adresi."} title={"Glamour Cafe'ye Hoş Geldiniz!"}/>
       <ArticleSection articleTitle={"Eşsiz Kahve Deneyimi"} articleText={"Glamour Cafe’de kahve, sadece bir içecek değil; bir sanat eseridir. Özenle seçilen çekirdekler, ustalarımızın maharetli ellerinde kavrularak her yudumda yoğun aromalar ve dengeli tatlar sunar. Sabahın ilk ışıklarından akşamın huzur dolu anlarına kadar, kahvemiz size enerji ve keyif vermek için burada."} articleTitle1={"Taptaze Pasta ve Tatlılar"} articleText1={"Kahvenizin yanında en taze, en lezzetli pasta ve tatlılar bizim imzamızdır. Her biri, doğal malzemelerle ve sevgiyle hazırlanır; damağınızda unutulmaz tatlar bırakır. Glamour Cafe’de tatlı anlar, eşsiz lezzetlerle taçlanır."} articleTitle2={"Rahatlığın ve Şıklığın Buluştuğu Alan"} articleText2={"Glamour Cafe, zarafeti ve sıcaklığı bir arada sunar. Modern ve samimi dekorasyonumuz, sevdiklerinizle keyifli vakit geçirmeniz için mükemmel bir ortam yaratır. Burada, sadece lezzet değil; anılar da paylaşılıyor."} />
        <TextCarouselRight text={"Her fincanda ustalık ve tutkuyu hissedin. Özenle seçilmiş kahve çekirdeklerimiz, özel kavurma teknikleriyle harmanlanarak size benzersiz bir lezzet deneyimi sunuyor. Aromasıyla gününüze tazelik ve canlılık katan bu kahve, sadece bir içecek değil; bir ritüel, bir keyif anıdır. Glamour Cafe farkıyla kahvenin gerçek tadını keşfedin."} title={"Glamour Cafe’nin Özel Harmanı: Sabah Enerjinizi Yenileyin"}/>
        
        {/* <TextVideo/> */}
        <Footer/>
      </main>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Yukarı çık"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
