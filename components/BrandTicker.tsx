"use client";

import { BookOpen, Ticket, Barcode, Zap, Flower2, ShoppingBag } from "lucide-react";

// Brand Logo Component
const BrandLogo = ({ name }: { name: string }) => {
  switch (name) {
    case "컬쳐랜드":
      return (
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#ea580c] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Barcode size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold leading-none tracking-widest">CULTURE LAND</span>
            <span className="text-lg font-extrabold text-gray-800 tracking-tight">컬쳐랜드</span>
          </div>
        </div>
      );
    case "메이드쿠폰":
      return (
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#db2777] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Ticket size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
             <span className="text-[10px] text-gray-400 font-bold leading-none tracking-widest">MADE COUPON</span>
            <span className="text-lg font-extrabold text-gray-800 tracking-tight">메이드쿠폰</span>
          </div>
        </div>
      );
    case "롯데모바일":
      return (
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#dc2626] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform font-serif font-bold text-2xl italic">
            L
          </div>
          <div className="flex flex-col">
             <span className="text-[10px] text-gray-400 font-bold leading-none tracking-widest">LOTTE</span>
            <span className="text-lg font-extrabold text-gray-800 tracking-tight">롯데모바일</span>
          </div>
        </div>
      );
    case "틴캐시":
      return (
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Zap size={24} strokeWidth={2.5} fill="currentColor" />
          </div>
          <div className="flex flex-col">
             <span className="text-[10px] text-gray-400 font-bold leading-none tracking-widest">TEEN CASH</span>
            <span className="text-lg font-extrabold text-gray-800 tracking-tight">틴캐시</span>
          </div>
        </div>
      );
    case "북앤라이프":
      return (
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#d97706] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
             <span className="text-[10px] text-gray-400 font-bold leading-none tracking-widest">BOOK&LIFE</span>
            <span className="text-lg font-extrabold text-gray-800 tracking-tight">북앤라이프</span>
          </div>
        </div>
      );
    case "신세계상품권":
      return (
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <ShoppingBag size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
             <span className="text-[10px] text-gray-400 font-bold leading-none tracking-widest">SHINSEGAE</span>
            <span className="text-lg font-extrabold text-gray-800 tracking-tight">신세계상품권</span>
          </div>
        </div>
      );
    default:
      return <span className="text-lg font-bold text-gray-700">{name}</span>;
  }
};

export default function BrandTicker() {
  const brands = [
    "컬쳐랜드",
    "메이드쿠폰",
    "롯데모바일",
    "틴캐시",
    "북앤라이프",
    "신세계상품권",
  ];

  // Duplicate array for infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="w-full bg-white border-y border-gray-100 py-10 overflow-hidden relative z-20">
      {/* Fade Gradient Overlays - Enhanced for cleaner look */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex animate-ticker w-max">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-12 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-default"
          >
            <BrandLogo name={brand} />
          </div>
        ))}
      </div>
    </div>
  );
}
