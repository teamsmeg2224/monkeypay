import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "서비스 정보 | 몽키페이",
  description: "몽키페이 서비스 정보. 소액결제 현금화, 정보이용료 현금화, 상품권 현금화 등 다양한 서비스를 제공합니다.",
  openGraph: {
    title: "서비스 정보 | 몽키페이",
    description: "몽키페이의 다양한 현금화 서비스 정보를 확인하세요.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com"}/banner.png`,
        width: 1200,
        height: 630,
        alt: "몽키페이 서비스 정보",
      },
    ],
  },
};

export default function InfoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com";
  
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "홈",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "서비스 정보",
        "item": `${siteUrl}/info`
      }
    ]
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "소액결제 현금화",
    "provider": {
      "@type": "Organization",
      "name": "몽키페이",
      "url": siteUrl
    },
    "areaServed": {
      "@type": "Country",
      "name": "KR"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://open.kakao.com/o/sR4Kfk5h",
      "serviceType": "카카오톡 상담"
    }
  };

  return (
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Script
        id="service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16">
        <div className="container-main max-w-4xl">
          <div className="mb-12">
            <Link href="/" className="font-black uppercase tracking-wider text-sm mb-4 inline-block hover:underline">
              ← 홈으로 돌아가기
            </Link>
            <h1 className="section-title mb-4">
              서비스 정보
            </h1>
            <p className="text-xl text-gray-700">
              몽키페이이 제공하는 다양한 현금화 서비스에 대해 자세히 알아보세요.
            </p>
          </div>

          <div className="space-y-12">
            <section className="card-brutal p-8">
              <h2 className="text-3xl font-black mb-6 uppercase">몽키페이 소개</h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                몽키페이은 소액결제 현금화 전문 업체로, 고객님의 편의를 최우선으로 생각하는 신뢰할 수 있는 서비스를 제공합니다. 
                정식 사업자 등록 업체로서 안전하고 투명한 거래를 약속드리며, 업계 최고 수준의 수수료와 빠른 입금 서비스를 자랑합니다.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="border-4 border-black p-6 text-center bg-white">
                  <div className="text-4xl font-black mb-2">5분</div>
                  <div className="text-sm text-gray-700 uppercase font-black">평균 입금 시간</div>
                </div>
                <div className="border-4 border-black p-6 text-center bg-white">
                  <div className="text-4xl font-black mb-2">24시간</div>
                  <div className="text-sm text-gray-700 uppercase font-black">연중무휴 상담</div>
                </div>
                <div className="border-4 border-black p-6 text-center bg-white">
                  <div className="text-4xl font-black mb-2">최고</div>
                  <div className="text-sm text-gray-700 uppercase font-black">수수료 제공</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-8 uppercase">제공 서비스</h2>
              <div className="space-y-6">
                <div className="card-brutal p-6">
                  <h3 className="text-2xl font-black mb-4 uppercase">소액결제 현금화</h3>
                  <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                    통신사에서 제공하는 소액결제 한도를 현금으로 전환하는 서비스입니다. SKT, KT, LG U+ 모든 통신사 이용 가능합니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge-brutal">SKT</span>
                    <span className="badge-brutal">KT</span>
                    <span className="badge-brutal">LG U+</span>
                  </div>
                </div>

                <div className="card-brutal p-6">
                  <h3 className="text-2xl font-black mb-4 uppercase">정보이용료 현금화</h3>
                  <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                    휴대폰 정보이용료를 현금으로 전환하는 서비스입니다. 각 통신사의 정보이용료 한도 내에서 이용 가능합니다.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-black">→</span>
                      <span>각 통신사 정보이용료 한도 확인 필요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-black">→</span>
                      <span>빠른 처리 및 안전한 거래 보장</span>
                    </li>
                  </ul>
                </div>

                <div className="card-brutal p-6">
                  <h3 className="text-2xl font-black mb-4 uppercase">상품권 현금화</h3>
                  <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                    다양한 상품권을 현금으로 전환하는 서비스입니다. 문화상품권, 해피머니, 도서상품권 등 다양한 상품권을 현금화할 수 있습니다.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-black">→</span>
                      <span>문화상품권, 해피머니, 도서상품권 등</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-black">→</span>
                      <span>최고가 매입 보장</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-black">→</span>
                      <span>빠른 입금 처리</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-8 uppercase">서비스 특징</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-brutal p-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-black mb-3 uppercase">빠른 처리 속도</h3>
                  <p className="text-gray-700 leading-relaxed">
                    상담부터 입금까지 평균 5분 이내 완료. 급하게 현금이 필요하신 분들께 최적의 서비스입니다.
                  </p>
                </div>
                <div className="card-brutal p-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-black mb-3 uppercase">최고 수수료</h3>
                  <p className="text-gray-700 leading-relaxed">
                    업계 최고 수준의 수수료로 제공하여 고객님께 최대한의 현금을 드립니다.
                  </p>
                </div>
                <div className="card-brutal-dark p-6">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase">안전한 거래</h3>
                  <p className="text-white/90 leading-relaxed">
                    정식 사업자 등록 업체로, 모든 거래가 안전하게 보호됩니다. 개인정보 유출 걱정 없이 이용하실 수 있습니다.
                  </p>
                </div>
                <div className="card-brutal-dark p-6">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase">24시간 상담</h3>
                  <p className="text-white/90 leading-relaxed">
                    연중무휴 24시간 고객센터 운영으로 언제든지 상담받으실 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-8 uppercase">이용 대상</h2>
              <div className="card-brutal p-6">
                <h3 className="font-black text-lg mb-4 uppercase">이용 가능한 분</h3>
                <ul className="space-y-3 text-gray-800 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="font-black text-2xl">✓</span>
                    <span className="text-lg">만 19세 이상 성인</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-2xl">✓</span>
                    <span className="text-lg">본인 명의의 휴대폰 보유자</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-2xl">✓</span>
                    <span className="text-lg">소액결제 한도가 있는 분</span>
                  </li>
                </ul>
                <div className="print-line border-black/20 mb-6"></div>
                <h3 className="font-black text-lg mb-4 uppercase">이용 불가능한 분</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="font-black text-2xl">✗</span>
                    <span className="text-lg">미성년자 (만 19세 미만)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-2xl">✗</span>
                    <span className="text-lg">타인 명의 휴대폰 사용자</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-2xl">✗</span>
                    <span className="text-lg">소액결제 한도가 없는 분</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-8 uppercase">서비스 이용 절차</h2>
              <div className="space-y-6">
                {[
                  { num: "01", title: "상담 신청", desc: "카카오톡 또는 전화로 상담 신청" },
                  { num: "02", title: "수수료 안내", desc: "최적의 수수료 및 입금 계좌 안내" },
                  { num: "03", title: "결제 진행", desc: "안내받은 방법으로 소액결제 진행" },
                  { num: "04", title: "입금 완료", desc: "평균 5분 이내 계좌 입금" },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-black text-white border-4 border-black flex items-center justify-center font-black text-xl shadow-brutal">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl mb-2 uppercase">{step.title}</h3>
                      <p className="text-gray-700 text-lg">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="card-brutal-dark p-8 text-center">
              <h2 className="text-3xl font-black text-white mb-6 uppercase">지금 바로 시작하세요</h2>
              <p className="mb-8 text-white/90 text-lg">24시간 상담 가능, 평균 5분 입금</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://open.kakao.com/o/sR4Kfk5h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal-inverse"
                >
                  카카오톡 상담하기
                </a>
                <a
                  href="tel:010-2591-2329"
                  className="btn-brutal"
                >
                  전화 상담하기
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
