"use client";

import { MessageCircle, Phone, ShieldCheck, Clock } from "lucide-react";
import Script from "next/script";

const faqs = [
  { 
    icon: <ShieldCheck size={24} className="text-purple-400" />,
    q: "정말 안전한가요?", 
    a: "네, 100% 안전합니다. 정식 사업자 등록 업체로서 모든 거래는 합법적인 절차로 진행되며, 개인정보는 절대 저장되지 않고 즉시 파기됩니다." 
  },
  { 
    icon: <Clock size={24} className="text-orange-400" />,
    q: "입금까지 얼마나 걸리나요?", 
    a: "신청부터 입금까지 평균 5분 이내에 완료됩니다. 365일 24시간 자동화 시스템이 가동되어 밤늦은 시간이나 주말에도 즉시 처리됩니다." 
  },
  { 
    icon: <MessageCircle size={24} className="text-cyan-400" />,
    q: "상담은 어떻게 하나요?", 
    a: "카카오톡 또는 전화로 간편하게 상담하실 수 있습니다. 전문 상담원이 24시간 대기 중이며, 원하시는 금액만 말씀해주시면 바로 진행됩니다." 
  },
  { 
    icon: <Phone size={24} className="text-pink-400" />,
    q: "정보이용료나 상품권도 가능한가요?", 
    a: "네, 가능합니다. 휴대폰 소액결제뿐만 아니라 구글 정보이용료(콘텐츠이용료), 각종 모바일 상품권도 업계 최고가로 매입해 드립니다." 
  },
];

export default function FAQ() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com";
  
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <section id="faq" className="py-32 bg-[#0a0a0f] border-t border-white/5" itemScope itemType="https://schema.org/FAQPage">
        <div className="container-main">
          <div className="text-center mb-20">
            <h2 className="section-title">자주 묻는 질문</h2>
            <p className="section-desc mx-auto">궁금하신 점을 빠르게 해결해 드립니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" itemScope itemType="https://schema.org/ItemList">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-8 card-hover border border-white/5"
                itemScope 
                itemType="https://schema.org/Question"
                itemProp="itemListElement"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass-strong rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                    {faq.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-3" itemProp="name">{faq.q}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-400 leading-relaxed text-sm" itemProp="text">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">더 궁금한 점이 있으신가요?</p>
            <a href="tel:010-2591-2329" className="btn-primary inline-flex items-center gap-2">
              <Phone size={18} /> 24시간 상담 연결
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
