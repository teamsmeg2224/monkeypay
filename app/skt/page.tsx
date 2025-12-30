import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SKT 소액결제 현금화 | 몽키페이",
  description: "SKT(티전화) 소액결제 현금화 전문 몽키페이. T머니, T페이 소액결제를 최고 수수료로 현금화. 평균 5분 입금, 24시간 상담.",
  openGraph: {
    title: "SKT 소액결제 현금화 | 몽키페이",
    description: "SKT 소액결제 현금화 전문 몽키페이. 최고 수수료, 빠른 입금.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com"}/banner.png`,
        width: 1200,
        height: 630,
        alt: "SKT 소액결제 현금화",
      },
    ],
  },
};

export default function SKTPage() {
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
        "name": "SKT 소액결제 현금화",
        "item": `${siteUrl}/skt`
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
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16">
        <div className="container-main max-w-4xl">
          <div className="mb-12">
            <Link href="/" className="font-black uppercase tracking-wider text-sm mb-4 inline-block hover:underline">
              ← 홈으로 돌아가기
            </Link>
            <h1 className="section-title mb-4">
              SKT 소액결제 현금화
            </h1>
            <p className="text-xl text-gray-700">
              SKT(티전화) 소액결제 현금화 전문 몽키페이. T머니, T페이를 최고 수수료로 현금화해드립니다.
            </p>
          </div>

          <div className="space-y-12">
            <section className="card-brutal p-8">
              <h2 className="text-3xl font-black mb-6 uppercase">SKT 소액결제 현금화란?</h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                SKT(티전화) 소액결제 현금화는 SK텔레콤에서 제공하는 T머니, T페이 소액결제 한도를 현금으로 전환하는 서비스입니다. 
                몽키페이은 SKT 소액결제 현금화 전문 업체로, 안전하고 빠른 서비스를 제공합니다.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                SKT 고객님들께 업계 최고 수준의 수수료와 평균 5분 이내의 빠른 입금 서비스를 제공합니다.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-8 uppercase">SKT 소액결제 현금화 특징</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-brutal p-6">
                  <h3 className="text-xl font-black mb-3 uppercase">⚡ 빠른 처리</h3>
                  <p className="text-gray-700 leading-relaxed">
                    SKT 소액결제 확인 후 평균 5분 이내 입금. 급하게 현금이 필요하신 SKT 고객님들께 최적의 서비스입니다.
                  </p>
                </div>
                <div className="card-brutal p-6">
                  <h3 className="text-xl font-black mb-3 uppercase">💰 최고 수수료</h3>
                  <p className="text-gray-700 leading-relaxed">
                    SKT 소액결제 현금화 업계 최고 수준의 수수료를 제공하여 고객님께 최대한의 현금을 드립니다.
                  </p>
                </div>
                <div className="card-brutal-dark p-6">
                  <h3 className="text-xl font-black text-white mb-3 uppercase">🔒 안전한 거래</h3>
                  <p className="text-white/90 leading-relaxed">
                    정식 사업자 등록 업체로 모든 거래가 안전하게 보호됩니다. SKT 고객님의 개인정보는 철저히 보호됩니다.
                  </p>
                </div>
                <div className="card-brutal-dark p-6">
                  <h3 className="text-xl font-black text-white mb-3 uppercase">📞 24시간 상담</h3>
                  <p className="text-white/90 leading-relaxed">
                    연중무휴 24시간 SKT 소액결제 현금화 상담 서비스를 제공합니다. 언제든지 편하게 문의해주세요.
                  </p>
                </div>
              </div>
            </section>

            <section className="card-brutal-dark p-8 text-center">
              <h2 className="text-3xl font-black text-white mb-6 uppercase">SKT 고객님을 위한 특별 서비스</h2>
              <p className="text-white/90 mb-8 text-lg">
                SKT 소액결제 현금화 전문 몽키페이에서 최고의 서비스를 경험하세요.
              </p>
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
