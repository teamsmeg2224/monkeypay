import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com";

export const metadata: Metadata = {
  title: "몽키페이 - 소액결제·정보이용료·상품권 현금화 업계 1위 | 5분 입금 24시간 상담",
  description: "급할 땐 고민말고 몽키페이. 소액결제, 정보이용료, 상품권 최고가 매입. 평균 5분 입금, 365일 24시간 연중무휴 상담. SKT, KT, LG U+ 모든 통신사 지원. 정식 사업자 등록 업체 안전 거래.",
  keywords: [
    "소액결제 현금화",
    "정보이용료 현금화",
    "상품권 현금화",
    "소액결제 한도",
    "휴대폰 소액결제",
    "급전",
    "비상금",
    "24시간 소액결제",
    "SKT 소액결제",
    "KT 소액결제",
    "LG U+ 소액결제",
    "소액결제 즉시 입금",
    "소액결제 수수료",
    "소액결제 현금화 방법",
    "모바일 상품권 현금화"
  ],
  openGraph: {
    title: "몽키페이 - 소액결제·정보이용료·상품권 현금화 업계 1위",
    description: "급할 땐 고민말고 몽키페이. 소액결제, 정보이용료, 상품권 최고가 매입. 5분 총알 입금, 24시간 안전 상담.",
    url: siteUrl,
    siteName: "몽키페이",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 1200,
        height: 630,
        alt: "몽키페이 - 소액결제 현금화 업계 1위",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "몽키페이 - 소액결제·정보이용료·상품권 현금화 업계 1위",
    description: "급할 땐 고민말고 몽키페이. 소액결제, 정보이용료, 상품권 최고가 매입. 5분 총알 입금, 24시간 안전 상담.",
    images: [`${siteUrl}/banner.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "몽키페이",
    "url": siteUrl,
    "description": "소액결제, 정보이용료, 상품권 현금화 전문 서비스. 평균 5분 입금, 365일 24시간 연중무휴 상담.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "몽키페이",
      "url": siteUrl
    }
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
      "serviceType": "카카오톡 상담",
      "availableLanguage": "ko"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "offers": {
      "@type": "Offer",
      "description": "소액결제 현금화 서비스",
      "priceCurrency": "KRW"
    }
  };

  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c")
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
      <main className="min-h-screen bg-[#fafafa]">
      <Header />
        
        {/* Hero Section - Magazine Style */}
        <section className="pt-32 pb-16 border-b-4 border-black">
          <div className="container-main">
            <div className="grid-magazine">
              <div className="asymmetric-left">
                <div className="mb-8">
                  <span className="badge-brutal mb-4 inline-block">NEW</span>
                  <h1 className="text-[clamp(3rem,12vw,10rem)] font-black leading-[0.9] mb-6 text-black uppercase tracking-tighter">
                    소액결제<br />
                    현금화<br />
                    <span className="text-outline">5분</span>
                  </h1>
                </div>
                <p className="text-2xl md:text-3xl font-bold mb-8 text-black leading-tight max-w-2xl">
                  복잡한 절차 없이 상담부터 입금까지 단 5분.<br />
                  업계 1위 몽키페이에서 수수료 최저가로 진행하세요.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <a href="https://open.kakao.com/o/sR4Kfk5h" target="_blank" rel="noopener noreferrer" className="btn-brutal">
                    카카오톡 상담
                  </a>
                  <a href="tel:010-2591-2329" className="btn-brutal btn-brutal-inverse">
                    전화 상담
                  </a>
                </div>
              </div>
              <div className="asymmetric-right">
                <div className="card-brutal-dark p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-white text-sm font-bold mb-4 uppercase tracking-wider">실시간 통계</div>
                    <div className="text-6xl font-black text-white mb-2">5분</div>
                    <div className="text-white/80 mb-8">평균 입금 시간</div>
                    <div className="print-line border-white/20 mb-6"></div>
                    <div className="text-6xl font-black text-white mb-2">99%</div>
                    <div className="text-white/80 mb-8">고객 만족도</div>
                    <div className="print-line border-white/20 mb-6"></div>
                    <div className="text-6xl font-black text-white mb-2">24/7</div>
                    <div className="text-white/80">연중무휴 운영</div>
                  </div>
                  <div className="mt-8 pt-8 border-t-4 border-white">
                    <div className="text-white text-xs font-bold uppercase tracking-widest mb-2">상담 전화</div>
                    <a href="tel:010-2591-2329" className="text-3xl font-black text-white hover:underline">
                      010-2591-2329
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Asymmetric */}
        <section id="services" className="py-16 border-b-4 border-black">
          <div className="container-main">
            <div className="mb-12">
              <h2 className="section-title">서비스</h2>
            </div>
            <div className="grid-magazine">
              <div className="asymmetric-left">
                <div className="card-brutal p-8 mb-6">
                  <div className="text-6xl font-black mb-4">01</div>
                  <h3 className="text-3xl font-black mb-4 uppercase">휴대폰 비상금</h3>
                  <p className="text-lg mb-6 text-gray-700">
                    소액결제·정보이용료 각 100만원씩 총 200만원까지 가능. 
                    매월 1일 한도 초기화로 반복 이용 가능합니다.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">→</span>
                      <span>소액결제 한도 100만원</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">→</span>
                      <span>정보이용료 한도 100만원</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">→</span>
                      <span>평균 5~10분 입금</span>
                    </li>
                  </ul>
                  <a href="/products" className="btn-brutal text-sm">
                    자세히 보기
                  </a>
                </div>
              </div>
              <div className="asymmetric-right">
                <div className="card-brutal-dark p-8 mb-6">
                  <div className="text-6xl font-black text-white mb-4">02</div>
                  <h3 className="text-3xl font-black text-white mb-4 uppercase">신용카드 비상금</h3>
                  <p className="text-lg mb-6 text-white/80">
                    신용카드 한도 내에서 간편 결제 후 현금으로 받는 서비스. 
                    무이자 최대 12개월 할부 가능.
                  </p>
                  <ul className="space-y-2 mb-6 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">→</span>
                      <span>신용점수 영향 없음</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">→</span>
                      <span>무이자 할부 가능</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">→</span>
                      <span>카드 한도 내 이용</span>
                    </li>
                  </ul>
                  <a href="/products" className="btn-brutal-inverse text-sm">
                    자세히 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process - Horizontal Timeline */}
        <section id="process" className="py-16 border-b-4 border-black bg-black text-white">
          <div className="container-main">
            <div className="mb-12">
              <h2 className="section-title text-white">이용 방법</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "상담 신청", desc: "카카오톡이나 전화로 원하는 금액을 말씀해주세요." },
                { num: "02", title: "한도 조회", desc: "본인 인증 후 최대 이용 한도를 즉시 확인합니다." },
                { num: "03", title: "입금 완료", desc: "확인 즉시 고객님의 계좌로 송금해드립니다." },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="mb-4">
                    <div className="text-8xl font-black text-white/20 mb-2">{step.num}</div>
                    <h3 className="text-2xl font-black text-white uppercase mb-4">{step.title}</h3>
                    <p className="text-white/80 text-lg">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 right-0 w-full h-1 bg-white/20">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-white/20 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features - Magazine Grid */}
        <section className="py-16 border-b-4 border-black">
          <div className="container-main">
            <div className="grid-magazine">
              <div className="asymmetric-full mb-12">
                <h2 className="section-title">왜 몽키페이인가</h2>
              </div>
              <div className="asymmetric-left">
                <div className="space-y-6">
                  <div className="card-brutal p-6">
                    <div className="text-4xl font-black mb-3">⚡</div>
                    <h3 className="text-xl font-black mb-2 uppercase">평균 5분 입금</h3>
                    <p className="text-gray-700">AI 자동 매입 시스템이 365일 실시간으로 처리합니다.</p>
                  </div>
                  <div className="card-brutal p-6">
                    <div className="text-4xl font-black mb-3">💰</div>
                    <h3 className="text-xl font-black mb-2 uppercase">업계 최고가</h3>
                    <p className="text-gray-700">불필요한 수수료 거품을 완전히 뺐습니다.</p>
                  </div>
                </div>
              </div>
              <div className="asymmetric-right">
                <div className="space-y-6">
                  <div className="card-brutal-dark p-6">
                    <div className="text-4xl font-black text-white mb-3">🔒</div>
                    <h3 className="text-xl font-black text-white mb-2 uppercase">철저한 보안</h3>
                    <p className="text-white/80">개인정보는 암호화되어 처리되며 즉시 파기됩니다.</p>
                  </div>
                  <div className="card-brutal-dark p-6">
                    <div className="text-4xl font-black text-white mb-3">📞</div>
                    <h3 className="text-xl font-black text-white mb-2 uppercase">24시간 상담</h3>
                    <p className="text-white/80">연중무휴 24시간 고객센터 운영합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews - Minimal List */}
        <section id="reviews" className="py-16 border-b-4 border-black bg-[#f5f5f5]">
          <div className="container-main">
            <div className="mb-12">
              <h2 className="section-title">고객 후기</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "김**", content: "처음이라 걱정했는데 상담사분이 너무 친절하게 설명해주셔서 안심하고 진행했어요. 입금도 진짜 3분만에 들어오네요!", rating: 5 },
                { name: "이**", content: "가게 운영하다 급전이 필요해서 알아봤는데 여기가 수수료 제일 싸네요. 새벽인데도 바로 답장해주셔서 놀랐습니다.", rating: 5 },
                { name: "박**", content: "다른 곳은 이것저것 요구하는게 많던데 여기는 절차가 정말 깔끔해요. 미납 있었는데도 잘 해결해주셔서 다행입니다.", rating: 5 },
                { name: "최**", content: "소액결제 현금화 처음 해보는데 생각보다 너무 쉽네요. 상담도 친절하고 입금도 빠르고... 다음 달에도 또 이용할 것 같아요.", rating: 5 },
              ].map((review, i) => (
                <div key={i} className="card-brutal p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-black text-lg">{review.name}</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className={j < review.rating ? "text-black" : "text-gray-300"}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{review.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Simple List */}
        <section id="faq" className="py-16 border-b-4 border-black">
          <div className="container-main">
            <div className="mb-12">
              <h2 className="section-title">자주 묻는 질문</h2>
            </div>
            <div className="space-y-4 max-w-3xl">
              {[
                { q: "정말 안전한가요?", a: "네, 100% 안전합니다. 정식 사업자 등록 업체로서 모든 거래는 합법적인 절차로 진행되며, 개인정보는 절대 저장되지 않고 즉시 파기됩니다." },
                { q: "입금까지 얼마나 걸리나요?", a: "신청부터 입금까지 평균 5분 이내에 완료됩니다. 365일 24시간 자동화 시스템이 가동되어 밤늦은 시간이나 주말에도 즉시 처리됩니다." },
                { q: "상담은 어떻게 하나요?", a: "카카오톡 또는 전화로 간편하게 상담하실 수 있습니다. 전문 상담원이 24시간 대기 중이며, 원하시는 금액만 말씀해주시면 바로 진행됩니다." },
                { q: "정보이용료나 상품권도 가능한가요?", a: "네, 가능합니다. 휴대폰 소액결제뿐만 아니라 구글 정보이용료(콘텐츠이용료), 각종 모바일 상품권도 업계 최고가로 매입해 드립니다." },
              ].map((faq, i) => (
                <details key={i} className="card-brutal p-6 cursor-pointer">
                  <summary className="font-black text-lg mb-3 list-none cursor-pointer">
                    <span className="flex items-center justify-between">
                      <span>{faq.q}</span>
                      <span className="text-2xl">+</span>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-black text-white">
          <div className="container-main text-center">
            <h2 className="section-title text-white mb-6">지금 바로 시작하세요</h2>
            <p className="text-xl mb-8 text-white/80">365일 24시간 상담 가능, 평균 5~10분 입금</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://open.kakao.com/o/sR4Kfk5h" target="_blank" rel="noopener noreferrer" className="btn-brutal-inverse">
                카카오톡 상담하기
              </a>
              <a href="tel:010-2591-2329" className="btn-brutal">
                전화 상담하기
              </a>
            </div>
          </div>
        </section>

      <Footer />
      <FloatingButton />
    </main>
    </>
  );
}
