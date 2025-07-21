"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductsData from "../../products.json";
import "./menu-animations.css";

const sectionTitles = [
  "Espresso Bar",
  "Ice Bar",
  "Pastalar",
  "Waffle",
  "Special Tatlılar",
  "Special İçecekler",
  "Sıcak İçecekler",
  "Türk Kahveleri",
];

const Menu = () => {
  const router = useRouter();

  const sectionIds = sectionTitles.map((title) =>
    title.replace(/\s+/g, "-").toLowerCase()
  );

  const sectionKeyMap = {
    "Espresso Bar": "espressoBar",
    "Ice Bar": "iceBar",
    "Pastalar": "pastalar",
    "Waffle": "waffle",
    "Special Tatlılar": "specialTatlilar",
    "Special İçecekler": "specialIcecekler",
    "Sıcak İçecekler": "sicakIcecekler",
    "Türk Kahveleri": "turkKahveleri",
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Anasayfaya yönlendirme
  const goBackHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#e0d9cc] relative">
      {/* Sol üst geri butonu - Anasayfaya yönlendirme */}
      <button
        onClick={goBackHome}
        aria-label="Ana sayfaya dön"
        className="
        cursor-pointer
          fixed top-5 left-5 z-[150] flex items-center justify-center
          w-12 h-12 rounded-full bg-[#d4af7f] text-white shadow-lg
          hover:bg-[#b38834] transition-colors duration-300
          focus:outline-none focus:ring-2 focus:ring-[#b38834] focus:ring-offset-2
        "
        title="Ana sayfaya dön"
      >
        {/* Sol ok icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Header */}
      <header className="w-full bg-[#e0d9cc] z-10 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center py-6 px-4">
          <Image
            src="/images/glamour-new.jpg"
            alt="Glamour Logo"
            width={280}
            height={70}
            className="object-cover shadow-lg animate-fade-in rounded-lg"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {/* Section Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {sectionTitles.map((title, idx) => (
            <button
              key={title}
              onClick={() => {
                const el = document.getElementById(sectionIds[idx]);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="
                cursor-pointer
                border-2 border-[#D4AF7F] text-[#8b6f35]
                px-7 py-2 rounded-lg font-semibold shadow-sm
                bg-white hover:bg-[#f3e6d2] hover:text-[#5a4725]
                transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-[#D4AF7F] focus:ring-offset-1
              "
            >
              {title}
            </button>
          ))}
        </div>

        {/* Sections */}
        {sectionTitles.map((title, idx) => {
          const sectionKey = sectionKeyMap[title];
          const cards = ProductsData[sectionKey] || [];

          return (
            <section key={title} id={sectionIds[idx]} className="mb-10">
              <div className="border-2 border-[#D4AF7F] rounded-xl p-5 mb-6 bg-[#faf9f7] shadow-md">
                <h2 className="text-2xl font-extrabold text-[#8b6f35] mb-3 tracking-wide flex items-center gap-2">
                  {title}
                </h2>
                <div className="text-right text-sm text-[#8b6f35] italic mb-3 select-none">
                  *20-25 dk. hazırlanma süresi vardır.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cards.length === 0 ? (
                    <div className="text-gray-500 italic col-span-full">
                      Ürün bulunamadı.
                    </div>
                  ) : (
                    cards.map((card, i) => (
                      <button
                        key={i}
                        className="
                          flex items-center w-full gap-4 p-5
                          bg-[#faf9f7]
                          rounded-lg shadow-xl
                          text-left cursor-pointer
                          hover:bg-[#e5c27a]
                          transition-all duration-300
                          transform hover:-translate-y-1 hover:scale-[1.02]
                        "
                        onClick={() => {
                          setSelectedCard(card);
                          setModalOpen(true);
                        }}
                      >
                        <div className="flex-1">
                          <div className="font-bold text-lg mb-1 text-[#3c3a36]">
                            {card.name}
                          </div>
                          <div className="text-sm mb-2 text-[#4a4a4a] line-clamp-2">
                            {card.description}
                          </div>
                          <div className="text-[#b97a2a] font-bold mb-2">
                            {card.price}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src={card.image}
                            alt={card.name}
                            width={90}
                            height={90}
                            className="rounded-lg object-cover w-[90px] h-[90px]"
                          />
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </section>
          );
        })}

        {/* Modal */}
        {modalOpen && selectedCard && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center
                       bg-black/50 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalOpen(false);
            }}
          >
            <div
              className="
                bg-[#faf9f7] rounded-xl shadow-2xl max-w-4xl w-full
                flex flex-col md:flex-row overflow-hidden relative p-6
              "
            >
              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="
                  absolute top-5 left-5 bg-white rounded-full p-2 shadow
                  hover:bg-[#f3e6d2] transition
                "
                aria-label="Close modal"
              >
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-lg overflow-hidden max-h-96">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-[#222f3e] mb-3">
                    {selectedCard.name}
                  </h3>
                  <p className="text-[#2c2c2c] text-lg mb-5">
                    {selectedCard.description}
                  </p>
                  <p className="text-[#b97a2a] font-bold text-2xl">
                    {selectedCard.price}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-6 text-[#6a5829] text-sm font-semibold select-none">
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="stroke-current"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  <span>20 Min</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Sayfa üstüne dön"
          className="
          cursor-pointer
            fixed bottom-8 right-8 z-[150] w-12 h-12 rounded-full
            bg-[#d4af7f] text-white shadow-lg
            flex items-center justify-center
            hover:bg-[#b38834] transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-[#b38834] focus:ring-offset-2
          "
          title="Sayfa üstüne dön"
        >
          {/* Yukarı ok icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Menu;
