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
        <TextCarouselLeft />
        <TextCarouselRight />
        <ArticleSection />
        <TextVideo/>
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
