"use client";

import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
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
    { name: "서비스 소개", href: "#features" },
    { name: "이용방법", href: "#process" },
    { name: "이용후기", href: "#reviews" },
    { name: "자주묻는질문", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <Logo textClassName="text-slate-900" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-[15px] relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-5 pl-8 border-l border-slate-200">
            <div className="text-right hidden lg:block">
              <div className="text-[11px] text-blue-600 font-bold mb-0.5 tracking-tight">365일 24시간 상담</div>
              <div className="text-lg font-extrabold text-slate-900 leading-none tracking-tight">010-2591-2329</div>
            </div>
            <a
              href="tel:010-2591-2329"
              className="btn-primary flex items-center gap-2 !py-3 !px-5 !rounded-xl shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">전화상담</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900 p-2 relative z-50" 
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-24 px-6 overflow-y-auto animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-4 text-xl font-bold text-slate-900 border-b border-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-8 space-y-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                 <p className="text-slate-500 text-sm mb-1">365일 24시간 연중무휴</p>
                 <p className="text-2xl font-extrabold text-slate-900 mb-4">010-2591-2329</p>
                 <div className="grid grid-cols-2 gap-3">
                    <a href="tel:010-2591-2329" className="flex items-center justify-center gap-2 py-3 bg-slate-900 text-white font-bold rounded-xl">
                      <Phone size={18} /> 전화
                    </a>
                    <a href="https://open.kakao.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-[#FEE500] text-[#191919] font-bold rounded-xl">
                      <MessageCircle size={18} /> 카톡
                    </a>
                 </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
