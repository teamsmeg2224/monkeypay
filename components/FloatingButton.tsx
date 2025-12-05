"use client";

import { MessageCircle, Phone, MessageSquareText } from "lucide-react";

declare global {
  interface Window {
    ChannelIO?: any;
    ChannelIOInitialized?: boolean;
  }
}

export default function FloatingButton() {
  const openChannelTalk = () => {
    if (window.ChannelIO) {
      window.ChannelIO('showMessenger');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={openChannelTalk}
        className="w-14 h-14 bg-[#5C46E6] text-white rounded-full shadow-lg hover:bg-[#4c3aaf] hover:scale-110 transition-all flex items-center justify-center border-2 border-white group"
        aria-label="채널톡 상담"
      >
         <MessageSquareText size={28} fill="currentColor" className="group-hover:scale-110 transition-transform" />
      </button>
      
      <a
        href="https://open.kakao.com" // 실제 카카오톡 오픈채팅 링크로 교체 필요
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#FEE500] text-[#191919] rounded-full shadow-lg hover:bg-[#FDD835] hover:scale-110 transition-all flex items-center justify-center border-2 border-white group"
        aria-label="카카오톡 상담"
      >
        <MessageCircle size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
      </a>
      
      <a
        href="tel:010-2591-2329"
        className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 hover:scale-110 transition-all flex items-center justify-center border-2 border-white animate-bounce-subtle group"
        aria-label="전화 상담"
      >
        <Phone size={28} className="group-hover:-rotate-12 transition-transform" />
      </a>
    </div>
  );
}
