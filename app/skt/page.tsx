import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SKT 소액결제 현금화 | 시드티켓",
  description: "SKT(티전화) 소액결제 현금화 전문 시드티켓. T머니, T페이 소액결제를 최고 수수료로 현금화. 평균 5분 입금, 24시간 상담.",
  openGraph: {
    title: "SKT 소액결제 현금화 | 시드티켓",
    description: "SKT 소액결제 현금화 전문 시드티켓. 최고 수수료, 빠른 입금.",
  },
};

export default function SKTPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="container-main max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">
              ← 홈으로 돌아가기
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              SKT 소액결제 현금화
            </h1>
            <p className="text-lg text-slate-600">
              SKT(티전화) 소액결제 현금화 전문 시드티켓. T머니, T페이를 최고 수수료로 현금화해드립니다.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">SKT 소액결제 현금화란?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                SKT(티전화) 소액결제 현금화는 SK텔레콤에서 제공하는 T머니, T페이 소액결제 한도를 현금으로 전환하는 서비스입니다. 
                시드티켓은 SKT 소액결제 현금화 전문 업체로, 안전하고 빠른 서비스를 제공합니다.
              </p>
              <p className="text-slate-700 leading-relaxed">
                SKT 고객님들께 업계 최고 수준의 수수료와 평균 5분 이내의 빠른 입금 서비스를 제공합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">SKT 소액결제 현금화 특징</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">⚡ 빠른 처리</h3>
                  <p className="text-slate-700 text-sm">
                    SKT 소액결제 확인 후 평균 5분 이내 입금. 급하게 현금이 필요하신 SKT 고객님들께 최적의 서비스입니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">💰 최고 수수료</h3>
                  <p className="text-slate-700 text-sm">
                    SKT 소액결제 현금화 업계 최고 수준의 수수료를 제공하여 고객님께 최대한의 현금을 드립니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">🔒 안전한 거래</h3>
                  <p className="text-slate-700 text-sm">
                    정식 사업자 등록 업체로, SKT 소액결제 현금화 거래가 안전하게 보호됩니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">📞 24시간 상담</h3>
                  <p className="text-slate-700 text-sm">
                    SKT 소액결제 현금화 관련 상담을 연중무휴 24시간 받으실 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">SKT 소액결제 현금화 이용 방법</h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">카카오톡 또는 전화 상담</h3>
                    <p className="text-slate-700">SKT 소액결제 현금화를 원하시는 금액을 말씀해주시면 즉시 상담해드립니다.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">T머니 또는 T페이 결제</h3>
                    <p className="text-slate-700">상담 후 안내해드린 방법으로 SKT 소액결제를 진행해주세요.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">입금 완료</h3>
                    <p className="text-slate-700">SKT 소액결제 확인 후 평균 5분 이내 지정하신 계좌로 입금해드립니다.</p>
                  </div>
                </li>
              </ol>
            </section>

            <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">SKT 소액결제 현금화 주의사항</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• SKT 소액결제 한도 내에서만 이용 가능합니다.</li>
                <li>• 본인 명의의 SKT 휴대폰에서만 이용 가능합니다.</li>
                <li>• SKT 정책에 따라 이용이 제한될 수 있습니다.</li>
                <li>• 미성년자는 이용이 불가능합니다.</li>
              </ul>
            </section>

            <section className="text-center py-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">SKT 소액결제 현금화 지금 바로 시작하세요</h2>
              <p className="text-slate-600 mb-6">24시간 상담 가능, 평균 5분 입금</p>
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
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}





