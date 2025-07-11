import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-10 mt-16 border-t border-gray-800">
      {/* Google Map */}
      <div className="w-full flex flex-col items-center mb-6">
        <div className="w-full h-48 md:h-64 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.839073964624!2d35.32133531537444!3d37.0024799799007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f4e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sLe%20Croissanti!5e0!3m2!1str!2str!4v1689000000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Le Croissanti Konum"
          ></iframe>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-start md:items-stretch gap-8">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col md:items-center items-start gap-2">
          <h3 className="text-xl font-bold mb-2 text-left md:text-center w-full">
            İletişim
          </h3>
          <div className="flex items-center gap-2">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="tel:+905551112233" className="hover:underline">
              +90 555 111 22 33
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <a href="mailto:info@lecroissanti.com" className="hover:underline">
              info@lecroissanti.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382a9.936 9.936 0 0 1-4.472 1.118A9.936 9.936 0 0 1 8.528 14.382l-2.122 2.122A1 1 0 0 1 5 16.293V15a10 10 0 1 1 14 0v1.293a1 1 0 0 1-1.406.211l-2.122-2.122z" />
            </svg>
            <a
              href="https://wa.me/905551112233"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
        {/* Socials */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-3">
          <h3 className="text-xl font-bold mb-2 text-center w-full">
            Sosyal Medya
          </h3>
          <div className="flex gap-4 justify-center w-full">
            <a
              href="https://instagram.com/lecroissanti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} DesignedBy:Oxx Medya CodedBy:MerCan. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
