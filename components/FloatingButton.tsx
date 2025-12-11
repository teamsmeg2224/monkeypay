"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 items-end">
      {/* 1. Phone */}
      <a
        href="tel:010-2591-2329"
        className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 hover:scale-110 transition-all flex items-center justify-center border-2 border-white animate-bounce-subtle group"
        aria-label="전화 상담"
      >
        <Phone size={28} className="group-hover:-rotate-12 transition-transform" />
      </a>

      {/* 2. KakaoTalk */}
      <a
        href="https://open.kakao.com/o/sR4Kfk5h"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#FEE500] text-[#191919] rounded-full shadow-lg hover:bg-[#FDD835] hover:scale-110 transition-all flex items-center justify-center border-2 border-white group"
        aria-label="카카오톡 상담"
      >
        <MessageCircle size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
