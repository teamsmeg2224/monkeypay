import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "상품안내 | 몽키페이 - 휴대폰 비상금·신용카드 비상금 서비스",
  description: "몽키페이 상품안내. 휴대폰 비상금 서비스(소액결제·정보이용료 각 100만원), 신용카드 비상금 서비스(무이자 최대 12개월 할부). 365일 24시간 연중무휴 서비스. 평균 5~10분 완료.",
  keywords: [
    "휴대폰 비상금",
    "소액결제 현금화",
    "정보이용료 현금화",
    "신용카드 비상금",
    "무이자 할부",
    "비상금 서비스",
    "24시간 비상금",
    "급전",
    "소액결제 한도",
    "상품권 현금화"
  ],
  openGraph: {
    title: "상품안내 | 몽키페이 - 휴대폰·신용카드 비상금 서비스",
    description: "휴대폰 비상금 서비스와 신용카드 비상금 서비스를 제공합니다. 소액결제·정보이용료 각 100만원, 무이자 최대 12개월 할부 가능. 365일 24시간 연중무휴.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com"}/products`,
    siteName: "몽키페이",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com"}/banner.png`,
        width: 1200,
        height: 630,
        alt: "몽키페이 상품안내 - 휴대폰 비상금·신용카드 비상금 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "상품안내 | 몽키페이 - 휴대폰·신용카드 비상금 서비스",
    description: "휴대폰 비상금 서비스와 신용카드 비상금 서비스를 제공합니다. 365일 24시간 연중무휴.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com"}/banner.png`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com"}/products`,
  },
};

export default function ProductsPage() {
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
        "name": "상품안내",
        "item": `${siteUrl}/products`
      }
    ]
  };

  const mobileServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "휴대폰 비상금 서비스",
    "name": "휴대폰 소액결제·정보이용료 비상금 서비스",
    "description": "휴대폰 소액결제와 정보이용료 한도를 현금으로 전환하는 서비스. 각 100만원씩 총 200만원까지 가능.",
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
    }
  };

  const cardServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "신용카드 비상금 서비스",
    "name": "신용카드 무이자 할부 비상금 서비스",
    "description": "신용카드 한도 내에서 간편 결제 후 현금으로 받는 서비스. 무이자 최대 12개월 할부 가능.",
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
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "휴대폰 비상금 서비스는 어떻게 이용하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "휴대폰 소액결제와 정보이용료 한도를 사용하여 모바일 상품권을 구매한 후 현금으로 전환받는 서비스입니다. 소액결제와 정보이용료 각 100만원씩 총 200만원까지 이용 가능하며, 평균 5~10분 내에 완료됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "신용카드 비상금 서비스는 신용점수에 영향이 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아니요, 신용카드 비상금 서비스는 카드론이나 현금서비스와 다르게 신용점수에 전혀 문제가 없습니다. 무이자로 최대 12개월 할부도 가능합니다."
        }
      },
      {
        "@type": "Question",
        "name": "서비스 이용 시간은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "365일 24시간 연중무휴로 언제든지 필요하실 때 비상금 해결이 가능합니다. 시간과 장소에 관계없이 고객센터를 통해 상담받으실 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "휴대폰 비상금 서비스 한도는 언제 초기화되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "휴대폰 비상금 서비스의 소액결제와 정보이용료 한도는 매월 1일에 초기화됩니다. 한도를 모두 사용하셨던 분들도 다음달 1일이 되면 다시 이용 가능합니다."
        }
      }
    ]
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
        id="mobile-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileServiceJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Script
        id="card-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cardServiceJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16">
        <div className="container-main max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="hover:underline font-black uppercase tracking-wider">
                  홈
                </Link>
              </li>
              <li className="font-black">/</li>
              <li className="font-black uppercase" aria-current="page">
                상품안내
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="mb-16 border-b-4 border-black pb-8">
            <h1 className="section-title mb-4">
              상품안내
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              몽키페이이 제공하는 다양한 비상금 서비스를 확인하세요. 
              <span className="font-black"> 365일 24시간 연중무휴</span>로 
              언제든지 급하게 현금이 필요하실 때 빠르고 안전하게 도와드립니다.
            </p>
          </header>

          {/* 대표 상품 1: 휴대폰 비상금 서비스 */}
          <section className="mb-20" itemScope itemType="https://schema.org/Service">
            <div className="card-brutal p-8 md:p-10">
              <div className="mb-8">
                <span className="badge-brutal mb-4 inline-block">
                  대표 상품
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase" itemProp="name">
                  휴대폰 비상금 서비스
                </h2>
              </div>

              <div className="mb-10 space-y-6">
                <p className="text-lg leading-relaxed text-gray-800" itemProp="description">
                  각자 사용중이신 휴대폰 부가 서비스에는 <strong className="font-black">"휴대폰 소액결제"</strong>라는 결제수단이 있는데요
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  휴대폰 소액결제의 한도는 <strong className="font-black">월 100만원</strong>으로 
                  이 금액내에서 쇼핑, 배달 음식 주문 같은 자유로운 사용과 온라인 결제가 가능합니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  요즘은 이 소액결제 한도로 <strong className="font-black">"모바일 상품권"</strong> 구입할 수 있게 되면서 
                  몽키페이은 아래와 같은 방식으로 필요하신 금액만큼 비상금 해결을 도와드리고 있습니다.
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="border-4 border-black p-6 text-center bg-white">
                  <div className="w-20 h-20 bg-black text-white border-4 border-black flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-brutal">
                    1
                  </div>
                  <h3 className="font-black text-lg mb-2 uppercase">몽키페이에 필요<br />금액 상담 요청</h3>
                  <p className="text-sm text-gray-700">카카오톡 또는 전화로<br />필요 금액 상담</p>
                </div>
                <div className="border-4 border-black p-6 text-center bg-white">
                  <div className="w-20 h-20 bg-black text-white border-4 border-black flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-brutal">
                    2
                  </div>
                  <h3 className="font-black text-lg mb-2 uppercase">상담원 배정 후<br />비상금 서비스 진행</h3>
                  <p className="text-sm text-gray-700">전문 상담원이<br />서비스 안내 및 진행</p>
                </div>
                <div className="border-4 border-black p-6 text-center bg-white">
                  <div className="w-20 h-20 bg-black text-white border-4 border-black flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-brutal">
                    3
                  </div>
                  <h3 className="font-black text-lg mb-2 uppercase">서비스 진행 후<br />입금처리</h3>
                  <p className="text-sm text-gray-700">평균 5~10분 내<br />계좌 입금 완료</p>
                </div>
              </div>

              {/* TIP Section */}
              <div className="border-4 border-black p-6 bg-black text-white space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white text-black border-4 border-black flex items-center justify-center font-black text-xs uppercase shadow-brutal">
                    TIP
                  </div>
                  <div>
                    <p className="font-black text-lg mb-2 uppercase">TIP 01</p>
                    <p className="text-white/90 leading-relaxed">
                      위에 말씀드린 이 해당 과정은 <strong>보통 5~10분 내로 모두 완료</strong>가 되며 
                      <strong> 365일 24시간</strong> 언제든지 필요하실 때 비상금 해결이 가능합니다.
                    </p>
                  </div>
                </div>
                <div className="print-line border-white/20"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white text-black border-4 border-black flex items-center justify-center font-black text-xs uppercase shadow-brutal">
                    TIP
                  </div>
                  <div>
                    <p className="font-black text-lg mb-2 uppercase">TIP 02</p>
                    <p className="text-white/90 leading-relaxed">
                      휴대폰 비상금 서비스 같은 경우 <strong>소액결제/정보이용료 각 100만원씩</strong> 한도를 사용하실 수 있습니다. 
                      <strong> (총 200만원까지 가능)</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 대표 상품 2: 신용카드 비상금 서비스 */}
          <section className="mb-20" itemScope itemType="https://schema.org/Service">
            <div className="card-brutal-dark p-8 md:p-10">
              <div className="mb-8">
                <span className="badge-brutal-inverse mb-4 inline-block">
                  대표 상품
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase" itemProp="name">
                  신용카드 비상금 서비스
                </h2>
              </div>

              <div className="mb-10 space-y-6">
                <p className="text-lg leading-relaxed text-white/90" itemProp="description">
                  소지하고 계신 신용카드 한도 내에서 간편 결제 과정을 통해서 결제 하신 후 현금으로 받으시는 서비스 입니다.
                </p>
                <p className="text-lg leading-relaxed text-white/90">
                  신용카드 비상금 서비스의 경우에는 무이자로 최대 <strong className="font-black text-white">12개월 할부</strong>로도 진행이 가능한 비상금 상품 입니다.
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="border-4 border-white p-6 text-center bg-black">
                  <div className="w-20 h-20 bg-white text-black border-4 border-white flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-brutal">
                    1
                  </div>
                  <h3 className="font-black text-white text-lg mb-2 uppercase">몽키페이에 필요<br />금액 상담 요청</h3>
                  <p className="text-sm text-white/80">카카오톡 또는 전화로<br />필요 금액 상담</p>
                </div>
                <div className="border-4 border-white p-6 text-center bg-black">
                  <div className="w-20 h-20 bg-white text-black border-4 border-white flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-brutal">
                    2
                  </div>
                  <h3 className="font-black text-white text-lg mb-2 uppercase">상담원 배정 후<br />비상금 서비스 진행</h3>
                  <p className="text-sm text-white/80">전문 상담원이<br />서비스 안내 및 진행</p>
                </div>
                <div className="border-4 border-white p-6 text-center bg-black">
                  <div className="w-20 h-20 bg-white text-black border-4 border-white flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-brutal">
                    3
                  </div>
                  <h3 className="font-black text-white text-lg mb-2 uppercase">서비스 진행 후<br />입금처리</h3>
                  <p className="text-sm text-white/80">평균 5~10분 내<br />계좌 입금 완료</p>
                </div>
              </div>

              {/* TIP Section */}
              <div className="border-4 border-white p-6 bg-white text-black space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white border-4 border-black flex items-center justify-center font-black text-xs uppercase shadow-brutal">
                    TIP
                  </div>
                  <div>
                    <p className="font-black text-lg mb-2 uppercase">TIP 01</p>
                    <p className="text-gray-800 leading-relaxed">
                      위에 말씀드린 이 해당 과정은 <strong>보통 5~10분 내로 모두 완료</strong>가 되며 
                      <strong> 365일 24시간</strong> 언제든지 필요하실 때 비상금 해결이 가능합니다.
                    </p>
                  </div>
                </div>
                <div className="print-line border-black/20"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white border-4 border-black flex items-center justify-center font-black text-xs uppercase shadow-brutal">
                    TIP
                  </div>
                  <div>
                    <p className="font-black text-lg mb-2 uppercase">TIP 02</p>
                    <p className="text-gray-800 leading-relaxed">
                      <strong>무이자 할부는 카드사 종류에 따라 차이가 있을 수 있음</strong> (고객센터 문의)<br />
                      카드론과 현금 서비스와 다르게 <strong>신용 점수에 전혀 문제가 없으니</strong> 걱정을 하지 않으셔도 됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 몽키페이 마지막 꿀팁 Section */}
          <section className="mb-16">
            <div className="card-brutal p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-center uppercase">
                365일 24시간 나만의 비상금, 몽키페이
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-center text-gray-800">
                  저희 몽키페이 같은 경우에는 <strong className="font-black">365일 24시간 연중무휴</strong>로 언제든지 
                  급하게 현금이 필요하신 분들은 고객센터를 통해서 시간과 장소에 관계없이 비상금 마련 가능합니다.
                </p>
                <p className="text-lg leading-relaxed text-center text-gray-800">
                  휴대폰 비상금 서비스 같은 경우 <strong className="font-black">매월 1일에 한도</strong>가 초기화 되니 
                  한도를 모두 사용하셨던 분들도 다음달 1일이 되면 다시 가능합니다!
                </p>
                <div className="border-4 border-black p-6 text-center bg-black text-white">
                  <p className="font-black text-lg mb-2 uppercase">검색창에 '몽키페이'를</p>
                  <p className="text-2xl font-black uppercase">검색해 보세요</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="card-brutal-dark p-8 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase">지금 바로 시작하세요</h2>
            <p className="mb-8 text-white/90 text-lg">365일 24시간 상담 가능, 평균 5~10분 입금</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://open.kakao.com/o/sR4Kfk5h"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal-inverse"
                aria-label="카카오톡 상담하기"
              >
                카카오톡 상담하기
              </a>
              <a
                href="tel:010-2591-2329"
                className="btn-brutal"
                aria-label="전화 상담하기"
              >
                전화 상담하기
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
