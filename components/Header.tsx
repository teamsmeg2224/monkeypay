"use client";

import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "상품안내", href: "/products" },
    { name: "서비스", href: "#services" },
    { name: "이용방법", href: "#process" },
    { name: "후기", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? "bg-white border-b-4 border-black shadow-lg py-3" 
          : "bg-white py-4"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo textClassName="text-black" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black font-black text-sm uppercase tracking-wider hover:underline transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center gap-4 pl-6 border-l-4 border-black">
              <a
                href="https://open.kakao.com/o/sR4Kfk5h"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal text-sm py-2 px-4"
              >
                문의하기
              </a>
              <a
                href="tel:010-2591-2329"
                className="btn-brutal text-sm py-2 px-4"
              >
                <Phone size={16} className="inline mr-2" />
                전화
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black p-2 border-4 border-black" 
            onClick={toggleMenu}
            aria-label="메뉴 열기"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-4 border-black">
          <nav className="container-main py-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black font-black text-lg uppercase border-b-2 border-black py-3 hover:bg-black hover:text-white transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t-4 border-black space-y-3">
              <a
                href="https://open.kakao.com/o/sR4Kfk5h"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal-inverse block w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                문의하기
              </a>
              <a href="tel:010-2591-2329" className="btn-brutal block text-center">
                <Phone size={20} className="inline mr-2" />
                010-2591-2329
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
