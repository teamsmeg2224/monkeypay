"use client";

import Link from "next/link";
import Logo from "./Logo";
import { ShieldCheck, Phone, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="mb-6">
               <div className="flex items-center gap-2.5 mb-4">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <rect x="10" y="20" width="80" height="60" rx="16" fill="#3b82f6" />
                      <path d="M50 70C50 70 35 60 35 45C35 35 42 28 50 28C58 28 65 35 65 45C65 60 50 70 50 70Z" fill="white" />
                    </svg>
                  </div>
                  <span className="text-2xl font-extrabold tracking-tight text-white">
                    시드티켓
                  </span>
               </div>
               <p className="text-slate-400 leading-relaxed text-sm pr-8">
                 시드티켓은 정식 사업자 등록 업체로 안전하고 투명한 거래를 약속드립니다. 
                 24시간 365일 고객님의 편의를 위해 항상 깨어있습니다.
               </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50">
                <ShieldCheck size={14} className="text-green-400" />
                <span className="text-xs font-medium text-slate-300">정식등록업체</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50">
                <Clock size={14} className="text-blue-400" />
                <span className="text-xs font-medium text-slate-300">24시간 운영</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">서비스 메뉴</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#features" className="hover:text-blue-400 transition-colors">서비스 소개</Link></li>
              <li><Link href="#process" className="hover:text-blue-400 transition-colors">이용 방법</Link></li>
              <li><Link href="#reviews" className="hover:text-blue-400 transition-colors">실시간 후기</Link></li>
              <li><Link href="#faq" className="hover:text-blue-400 transition-colors">자주 묻는 질문</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">고객센터</h4>
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-800">
              <a href="tel:010-2591-2329" className="block text-3xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                010-2591-2329
              </a>
              <p className="text-sm text-slate-400 mb-4">연중무휴 24시간 상담 가능</p>
              <a href="https://open.kakao.com/o/sR4Kfk5h" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 bg-[#FEE500] text-[#191919] font-bold rounded-xl hover:bg-[#FDD835] transition-colors gap-2 text-sm">
                카카오톡 상담하기 <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500">
          <div className="space-y-1">
            <p className="mt-2">Copyright © {new Date().getFullYear()} SeedTicket. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
            <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
