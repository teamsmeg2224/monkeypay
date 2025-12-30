"use client";

import Link from "next/link";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t-4 border-white">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <Logo textClassName="text-white" />
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              몽키페이은 정식 사업자 등록 업체로 안전하고 투명한 거래를 약속드립니다. 
              24시간 365일 고객님의 편의를 위해 항상 깨어있습니다.
            </p>
            <div className="space-y-2">
              <div className="text-white font-black uppercase text-sm">상담 전화</div>
              <a href="tel:010-2591-2329" className="text-2xl font-black text-white hover:underline block">
                010-2591-2329
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase mb-6 text-lg">서비스 메뉴</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-white/80 hover:text-white hover:underline transition-colors" title="상품안내">상품안내</Link></li>
              <li><Link href="/info" className="text-white/80 hover:text-white hover:underline transition-colors" title="서비스 정보">서비스 정보</Link></li>
              <li><Link href="/guide" className="text-white/80 hover:text-white hover:underline transition-colors" title="이용 가이드">이용 가이드</Link></li>
              <li><Link href="/reviews" className="text-white/80 hover:text-white hover:underline transition-colors" title="고객 후기">고객 후기</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-white hover:underline transition-colors" title="자주 묻는 질문">자주 묻는 질문</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase mb-6 text-lg">고객센터</h4>
            <div className="card-brutal-dark p-6 border-white">
              <div className="text-white/80 mb-4 text-sm uppercase tracking-wider">연중무휴 24시간</div>
              <a href="https://open.kakao.com/o/sR4Kfk5h" target="_blank" rel="noopener noreferrer" className="btn-brutal-inverse inline-flex items-center gap-2 text-sm">
                카카오톡 상담하기 <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-white pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-white/60 text-sm">Copyright © {new Date().getFullYear()} 몽키페이. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="text-white/60 hover:text-white hover:underline transition-colors text-sm" title="이용약관">이용약관</Link>
            <Link href="/privacy" className="text-white/60 hover:text-white hover:underline transition-colors text-sm" title="개인정보처리방침">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
