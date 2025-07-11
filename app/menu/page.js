"use client";
import Image from "next/image";
import { useState } from "react";

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
  // Butonlar ve bölümler için id'ler oluştur
  const sectionIds = sectionTitles.map((title) =>
    title.replace(/\s+/g, "-").toLowerCase()
  );

  // Örnek veri (her bölüm için kartlar)
  const exampleCards = [
    {
      title: "Original Croissant",
      desc: "1 Croissant, 1 Çorba Ekmeği, Izgara Yeşil Zeytin, Avokado, Labne Peynir, Köz Biber...",
      price: "₺410.00",
      img: "/images/sample1.jpg",
      icons: ["/images/vegan.png", "/images/gluten.png"],
    },
    {
      title: "French Croissant",
      desc: "1 Croissant, Göz Yumurta, Dana Jambon, Füme Et, Labne Peynir, 2 Dilim Portakal...",
      price: "₺445.00",
      img: "/images/sample2.jpg",
      icons: ["/images/vegan.png"],
    },
    {
      title: "Turkish Croissant",
      desc: "2 Baby Croissant, 1 Dilim Ekşi Maya Ekmeği, Göz Yumurta, Dana Izgara Sucuk...",
      price: "₺470.00",
      img: "/images/sample3.jpg",
      icons: ["/images/vegan.png", "/images/gluten.png"],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7]">
      {/* Header */}
      <header className="w-full border-b border-[#ececec] bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4">
          <Image
            src="/images/lecroissanti-logo.png"
            alt="Le Croissanti Logo"
            width={180}
            height={60}
            className="object-contain"
            priority
          />
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#18181b] mb-2 mt-4">
          Le Croissanti
        </h1>
        {/* Tıklanabilir butonlar */}
        <div className="flex flex-wrap gap-3 mb-8">
          {sectionTitles.map((title, idx) => (
            <button
              key={title}
              onClick={() => {
                const el = document.getElementById(sectionIds[idx]);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="border border-[#b97a2a] text-[#b97a2a] px-6 py-2 rounded-lg font-semibold shadow-sm bg-white hover:bg-[#f5e7d6] transition"
            >
              {title}
            </button>
          ))}
        </div>
        {/* Bölümler */}
        {sectionTitles.map((title, idx) => (
          <section key={title} id={sectionIds[idx]} className="mb-10">
            <div className="border-2 border-[#b97a2a] rounded-xl p-4 mb-4 bg-white">
              <h2 className="text-xl md:text-2xl font-bold text-[#b97a2a] mb-2 flex items-center gap-2">
                {title}
              </h2>
              <div className="text-right text-sm text-gray-500 mb-2">
                *20-25 dk. hazırlanma süresi vardır.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exampleCards.map((card, i) => (
                  <button
                    key={i}
                    className="flex flex-row items-center bg-[#faf9f7] rounded-lg shadow p-4 gap-4 w-full text-left hover:bg-[#f5e7d6] transition"
                    onClick={() => {
                      setSelectedCard(card);
                      setModalOpen(true);
                    }}
                  >
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-1">{card.title}</div>
                      <div className="text-sm text-gray-700 mb-2 line-clamp-2">
                        {card.desc}
                      </div>
                      <div className="text-[#b97a2a] font-bold mb-2">
                        {card.price}
                      </div>
                      <div className="flex gap-2">
                        {card.icons.map((icon, j) => (
                          <Image
                            key={j}
                            src={icon}
                            alt="icon"
                            width={22}
                            height={22}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Image
                        src={card.img}
                        alt={card.title}
                        width={90}
                        height={90}
                        className="rounded-lg object-cover w-[90px] h-[90px]"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ))}
        {/* Modal */}
        {modalOpen && selectedCard && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalOpen(false);
            }}
          >
            <div className="bg-[#faf9f7] rounded-xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 left-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
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
              <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center bg-white">
                <Image
                  src={selectedCard.img}
                  alt={selectedCard.title}
                  width={400}
                  height={400}
                  className="object-cover rounded-lg max-h-96"
                />
              </div>
              {/* Info */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xl md:text-2xl font-bold mb-2">
                    {selectedCard.title}
                  </div>
                  <div className="text-base md:text-lg text-gray-800 mb-4">
                    {selectedCard.desc}
                  </div>
                  {/* Ekstra bilgiler örnek */}
                  <div className="mb-4">
                    <div className="font-semibold mb-1">
                      İlave olarak ekleyebilirsiniz:
                    </div>
                    <ul className="list-disc pl-5 text-sm md:text-base">
                      <li>
                        Avokado Dip Sos <b>49 ₺</b>
                      </li>
                      <li>
                        Füme Et <b>58 ₺</b>
                      </li>
                      <li>
                        Izgara Dana Sosis <b>150 ₺</b>
                      </li>
                      <li>
                        Köz Patlıcan Sos <b>45 ₺</b>
                      </li>
                      <li>
                        Göz Yumurta <b>40 ₺</b>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[#b97a2a] font-bold text-lg mb-2">
                    {selectedCard.price}
                  </div>
                  <div className="flex gap-2 mb-4">
                    {selectedCard.icons.map((icon, j) => (
                      <Image key={j} src={icon} alt="icon" width={28} height={28} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  <span className="text-gray-700 text-sm">20 Min</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Menu;
