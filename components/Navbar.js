import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full opacity-100 z-50 relative"
    >
      <nav className="container mx-auto flex justify-between items-center p-2">
        <Link href="/">
          <Image
            src="/images/glamour-new.jpg"
            width={240}
            height={120}
            alt="Kaktus-Logo"
            className="object-cover"
            priority
          />
        </Link>
        <div className="flex items-center justify-center">
          <Link
            href="/menu"
            className="flex flex-row items-center justify-center text-white font-extrabold tracking-wider text-lg px-4 py-2 rounded hover:bg-white/10 transition gap-2 min-w-[80px]"
            style={{ minWidth: "80px" }}
          >
            <span className="flex w-full text-center justify-start items-start">
              Menü
            </span>
          </Link>
          <svg
            viewBox="0 0 32 32"
            width="56"
            height="56"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 4C9.92487 4 5 8.92487 5 15V16C5 16.5523 5.44772 17 6 17H26C26.5523 17 27 16.5523 27 16V15C27 8.92487 22.0751 4 16 4ZM16 6C21.5228 6 26 10.4772 26 16H6C6 10.4772 10.4772 6 16 6ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21H26C26.5523 21 27 20.5523 27 20C27 19.4477 26.5523 19 26 19H6Z" />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
