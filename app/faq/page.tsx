import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";
import Script from "next/script";
import { ShieldCheck, Clock, MessageCircle, Phone, CreditCard, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "자주 묻는 질문 FAQ | 시드티켓",
  description: "시드티켓 소액결제 현금화 서비스에 대한 자주 묻는 질문과 답변. 안전성, 수수료, 입금 시간, 이용 방법 등 모든 궁금증을 해결하세요.",
  openGraph: {
    title: "자주 묻는 질문 FAQ | 시드티켓",
    description: "시드티켓 소액결제 현금화 서비스에 대한 자주 묻는 질문과 답변을 확인하세요.",
  },
};

const faqs = [
  { 
    q: "정말 안전한가요?", 
    a: "네, 100% 안전합니다. 정식 사업자 등록 업체로서 모든 거래는 합법적인 절차로 진행되며, 개인정보는 절대 저장되지 않고 즉시 파기됩니다. 또한 모든 거래는 암호화된 채널을 통해 안전하게 처리됩니다." 
  },
  { 
    q: "입금까지 얼마나 걸리나요?", 
    a: "신청부터 입금까지 평균 5분 이내에 완료됩니다. 365일 24시간 자동화 시스템이 가동되어 밤늦은 시간이나 주말, 공휴일에도 즉시 처리됩니다. 다만, 은행 점검 시간이나 시스템 점검 시에는 다소 지연될 수 있습니다." 
  },
  { 
    q: "상담은 어떻게 하나요?", 
    a: "카카오톡 오픈채팅 또는 전화(010-2591-2329)로 간편하게 상담하실 수 있습니다. 전문 상담원이 24시간 대기 중이며, 원하시는 금액만 말씀해주시면 바로 진행됩니다. 상담은 무료이며, 부담 없이 문의하실 수 있습니다." 
  },
  { 
    q: "정보이용료나 상품권도 가능한가요?", 
    a: "네, 가능합니다. 휴대폰 소액결제뿐만 아니라 구글 정보이용료(콘텐츠이용료), 각종 모바일 상품권(문화상품권, 해피머니, 도서상품권 등)도 업계 최고가로 매입해 드립니다." 
  },
  { 
    q: "수수료는 얼마인가요?", 
    a: "금액과 통신사에 따라 수수료가 상이하며, 업계 최고 수준의 수수료를 제공합니다. 정확한 수수료는 상담 시 안내해드리며, 고객님께 최대한의 현금을 드리기 위해 항상 최선을 다하고 있습니다." 
  },
  { 
    q: "미납이 있어도 가능한가요?", 
    a: "미납이 있는 경우에도 일부 가능합니다. 다만, 미납 금액에 따라 이용 가능한 한도가 제한될 수 있으며, 정확한 상담을 통해 가능 여부를 확인해드립니다. 미납 해결 후 이용하시면 더 유리한 조건으로 서비스를 이용하실 수 있습니다." 
  },
  { 
    q: "본인 명의가 아니면 안 되나요?", 
    a: "네, 본인 명의의 휴대폰에서만 이용 가능합니다. 타인 명의 휴대폰은 법적으로 이용이 불가능하며, 본인 인증을 통해 명의를 확인합니다. 이는 고객님의 안전과 법적 보호를 위한 조치입니다." 
  },
  { 
    q: "만 19세 미만도 이용 가능한가요?", 
    a: "아니요, 만 19세 이상 성인만 이용 가능합니다. 미성년자는 법적으로 소액결제 현금화 서비스를 이용할 수 없습니다. 본인 인증 시 생년월일을 확인하여 성인 여부를 검증합니다." 
  },
  { 
    q: "거래 내역은 어떻게 확인하나요?", 
    a: "거래 내역은 카카오톡 또는 문자로 안내해드리며, 입금 완료 시 알림을 발송합니다. 또한 고객센터로 문의하시면 거래 내역을 확인해드릴 수 있습니다. 모든 거래는 투명하게 기록되며, 필요 시 확인 가능합니다." 
  },
  { 
    q: "환불이 가능한가요?", 
    a: "입금 완료 후에는 환불이 불가능합니다. 다만, 회사의 귀책사유로 인한 서비스 미제공 시에는 수수료를 환불해드립니다. 거래 전 충분한 상담을 통해 신중하게 결정하시기 바랍니다." 
  },
  { 
    q: "어떤 통신사가 가능한가요?", 
    a: "SKT(티전화), KT(올레), LG U+(유플러스) 모든 통신사에서 이용 가능합니다. 각 통신사별로 소액결제 한도와 이용 방법이 다를 수 있으니, 상담 시 통신사를 말씀해주시면 정확히 안내해드립니다." 
  },
  { 
    q: "개인정보는 어떻게 보호되나요?", 
    a: "시드티켓은 개인정보보호법을 준수하며, 거래 목적 외로 개인정보를 사용하지 않습니다. 제공해주신 정보는 거래 완료 후 안전하게 파기되며, 암호화된 채널을 통해 전송됩니다. 자세한 내용은 개인정보처리방침을 참고해주세요." 
  },
];

export default function FAQPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  
  // FAQPage 구조화 데이터
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
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="container-main max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">
              ← 홈으로 돌아가기
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              자주 묻는 질문
            </h1>
            <p className="text-lg text-slate-600">
              시드티켓 소액결제 현금화 서비스에 대한 자주 묻는 질문과 답변입니다.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <summary className="font-bold text-slate-900 cursor-pointer text-lg mb-2">
                  {faq.q}
                </summary>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">더 궁금한 점이 있으신가요?</h2>
            <p className="text-slate-600 mb-6">24시간 상담 가능한 고객센터로 문의해주세요</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://open.kakao.com/o/sR4Kfk5h"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FEE500] text-[#191919] font-bold px-8 py-4 rounded-xl hover:bg-[#FDD835] transition-colors"
              >
                카카오톡 상담하기
              </a>
              <a
                href="tel:010-2591-2329"
                className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors"
              >
                전화 상담하기
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}




