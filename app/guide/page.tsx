import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "이용 가이드 | 몽키페이",
  description: "몽키페이 소액결제 현금화 이용 가이드. 단계별 상세 설명, 주의사항, 자주 묻는 질문까지 한 번에 확인하세요.",
  openGraph: {
    title: "이용 가이드 | 몽키페이",
    description: "몽키페이 소액결제 현금화 이용 가이드. 단계별 상세 설명과 주의사항을 확인하세요.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com"}/banner.png`,
        width: 1200,
        height: 630,
        alt: "몽키페이 이용 가이드",
      },
    ],
  },
};

export default function GuidePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com";
  
  // BreadcrumbList 구조화 데이터
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
        "name": "이용 가이드",
        "item": `${siteUrl}/guide`
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
              이용 가이드
            </h1>
            <p className="text-xl text-gray-700">
              몽키페이 소액결제 현금화 서비스를 처음 이용하시는 분들을 위한 상세 가이드입니다.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-black mb-8 uppercase">전체 이용 절차</h2>
              <div className="space-y-6">
                <div className="card-brutal p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-black text-white border-4 border-black flex items-center justify-center font-black text-xl shadow-brutal">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black mb-3 uppercase">상담 신청</h3>
                      <p className="text-gray-800 mb-4 text-lg leading-relaxed">
                        카카오톡 오픈채팅 또는 전화(010-2591-2329)로 상담을 신청해주세요. 
                        원하시는 현금화 금액과 통신사(SKT/KT/LG U+)를 말씀해주시면 즉시 상담해드립니다.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <a href="https://open.kakao.com/o/sR4Kfk5h" target="_blank" rel="noopener noreferrer" className="btn-brutal text-sm">
                          카카오톡 상담
                        </a>
                        <a href="tel:010-2591-2329" className="btn-brutal-inverse text-sm">
                          전화 상담
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-brutal p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-black text-white border-4 border-black flex items-center justify-center font-black text-xl shadow-brutal">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black mb-3 uppercase">수수료 및 입금 계좌 안내</h3>
                      <p className="text-gray-800 mb-3 text-lg leading-relaxed">
                        상담원이 최적의 수수료를 안내해드리며, 입금받으실 계좌 정보를 확인합니다. 
                        몽키페이은 업계 최고 수준의 수수료를 제공하여 고객님께 최대한의 현금을 드립니다.
                      </p>
                      <p className="text-sm text-gray-600 font-black">
                        * 수수료는 금액과 통신사에 따라 상이할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-brutal-dark p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-white text-black border-4 border-white flex items-center justify-center font-black text-xl shadow-brutal">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-3 uppercase">소액결제 진행</h3>
                      <p className="text-white/90 mb-4 text-lg leading-relaxed">
                        안내받은 상품 또는 서비스로 소액결제를 진행해주세요. 
                        결제 완료 후 상담원에게 알려주시면 즉시 확인 절차를 진행합니다.
                      </p>
                      <div className="border-4 border-white p-4 mt-3 bg-white text-black">
                        <p className="text-sm font-black mb-2 uppercase">결제 시 주의사항:</p>
                        <ul className="text-sm text-gray-800 space-y-1">
                          <li>• 정확한 금액으로 결제해주세요</li>
                          <li>• 결제 완료 후 즉시 상담원에게 알려주세요</li>
                          <li>• 결제 내역 스크린샷을 준비해주시면 더 빠른 처리가 가능합니다</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-brutal p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-black text-white border-4 border-black flex items-center justify-center font-black text-xl shadow-brutal">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black mb-3 uppercase">입금 완료</h3>
                      <p className="text-gray-800 mb-4 text-lg leading-relaxed">
                        결제 확인 후 평균 5분 이내 지정하신 계좌로 입금해드립니다. 
                        입금 완료 시 알림을 드리며, 거래가 완료됩니다.
                      </p>
                      <div className="border-4 border-black p-4 mt-3 bg-black text-white">
                        <p className="text-sm font-black mb-2 uppercase">입금 확인 방법:</p>
                        <ul className="text-sm text-white/90 space-y-1">
                          <li>• 입금 완료 시 카카오톡 또는 문자로 알림 발송</li>
                          <li>• 인터넷뱅킹 또는 모바일뱅킹에서 입금 내역 확인</li>
                          <li>• 입금 지연 시 즉시 고객센터로 문의해주세요</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="card-brutal p-8">
              <h2 className="text-3xl font-black mb-8 uppercase">이용 전 확인사항</h2>
              <div className="space-y-4">
                <div className="border-4 border-black p-5 bg-white">
                  <h3 className="font-black text-lg mb-2 uppercase">✓ 소액결제 한도 확인</h3>
                  <p className="text-gray-700 text-lg">
                    통신사 앱 또는 고객센터에서 현재 사용 가능한 소액결제 한도를 확인해주세요. 
                    한도 내에서만 현금화가 가능합니다.
                  </p>
                </div>
                <div className="border-4 border-black p-5 bg-white">
                  <h3 className="font-black text-lg mb-2 uppercase">✓ 본인 명의 휴대폰</h3>
                  <p className="text-gray-700 text-lg">
                    소액결제 현금화는 본인 명의의 휴대폰에서만 가능합니다. 
                    타인 명의 휴대폰은 이용이 불가능합니다.
                  </p>
                </div>
                <div className="border-4 border-black p-5 bg-white">
                  <h3 className="font-black text-lg mb-2 uppercase">✓ 성인 인증</h3>
                  <p className="text-gray-700 text-lg">
                    만 19세 이상 성인만 이용 가능합니다. 
                    미성년자는 법적으로 이용이 제한됩니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-8 uppercase">자주 묻는 질문</h2>
              <div className="space-y-4">
                <details className="card-brutal p-5 cursor-pointer">
                  <summary className="font-black text-lg cursor-pointer list-none">
                    <div className="flex items-center justify-between">
                      <span>입금까지 얼마나 걸리나요?</span>
                      <span className="text-2xl font-black">+</span>
                    </div>
                  </summary>
                  <div className="print-line border-black/20 my-4"></div>
                  <p className="text-gray-800 text-lg">
                    결제 확인 후 평균 5분 이내 입금해드립니다. 다만, 은행 점검 시간이나 주말/공휴일에는 다소 지연될 수 있습니다.
                  </p>
                </details>
                <details className="card-brutal p-5 cursor-pointer">
                  <summary className="font-black text-lg cursor-pointer list-none">
                    <div className="flex items-center justify-between">
                      <span>수수료는 얼마인가요?</span>
                      <span className="text-2xl font-black">+</span>
                    </div>
                  </summary>
                  <div className="print-line border-black/20 my-4"></div>
                  <p className="text-gray-800 text-lg">
                    금액과 통신사에 따라 상이하며, 업계 최고 수준의 수수료를 제공합니다. 정확한 수수료는 상담 시 안내해드립니다.
                  </p>
                </details>
                <details className="card-brutal p-5 cursor-pointer">
                  <summary className="font-black text-lg cursor-pointer list-none">
                    <div className="flex items-center justify-between">
                      <span>개인정보는 안전한가요?</span>
                      <span className="text-2xl font-black">+</span>
                    </div>
                  </summary>
                  <div className="print-line border-black/20 my-4"></div>
                  <p className="text-gray-800 text-lg">
                    네, 몽키페이은 정식 사업자 등록 업체로 개인정보보호법을 준수합니다. 거래 목적 외로 사용하지 않으며, 안전하게 보호합니다.
                  </p>
                </details>
                <details className="card-brutal p-5 cursor-pointer">
                  <summary className="font-black text-lg cursor-pointer list-none">
                    <div className="flex items-center justify-between">
                      <span>언제든지 이용 가능한가요?</span>
                      <span className="text-2xl font-black">+</span>
                    </div>
                  </summary>
                  <div className="print-line border-black/20 my-4"></div>
                  <p className="text-gray-800 text-lg">
                    네, 연중무휴 24시간 상담 및 서비스 이용이 가능합니다. 언제든지 카카오톡 또는 전화로 문의해주세요.
                  </p>
                </details>
              </div>
            </section>

            <section className="card-brutal-dark p-8 text-center">
              <h2 className="text-3xl font-black text-white mb-6 uppercase">궁금한 점이 있으신가요?</h2>
              <p className="mb-8 text-white/90 text-lg">24시간 상담 가능한 고객센터로 문의해주세요</p>
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








