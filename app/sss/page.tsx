import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소액결제 현금화 안내 | 시드티켓",
  description: "소액결제 현금화 전문 시드티켓. 안전하고 빠른 현금화 서비스, 최고 수수료, 5분 입금. 24시간 상담 가능.",
  openGraph: {
    title: "소액결제 현금화 안내 | 시드티켓",
    description: "소액결제 현금화 전문 시드티켓. 안전하고 빠른 현금화 서비스, 최고 수수료, 5분 입금.",
  },
};

export default function SSSPage() {
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
              소액결제 현금화 안내
            </h1>
            <p className="text-lg text-slate-600">
              시드티켓은 소액결제 현금화 전문 업체로, 안전하고 빠른 서비스를 제공합니다.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">소액결제 현금화란?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                소액결제 현금화는 휴대폰 소액결제 한도를 현금으로 전환하는 서비스입니다. 
                통신사에서 제공하는 소액결제 한도를 활용하여 필요한 현금을 빠르게 확보할 수 있는 방법입니다.
              </p>
              <p className="text-slate-700 leading-relaxed">
                시드티켓은 정식 사업자 등록 업체로, 안전하고 투명한 거래를 약속드립니다. 
                고객님의 개인정보 보호와 거래 안전을 최우선으로 생각합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">시드티켓 소액결제 현금화의 장점</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">⚡ 빠른 처리 속도</h3>
                  <p className="text-slate-700">
                    상담부터 입금까지 평균 5분 이내 완료. 급하게 현금이 필요하신 분들께 최적의 서비스입니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">💰 최고 수수료</h3>
                  <p className="text-slate-700">
                    업계 최고 수준의 수수료로 제공하여 고객님께 최대한의 현금을 드립니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">🔒 안전한 거래</h3>
                  <p className="text-slate-700">
                    정식 사업자 등록 업체로, 모든 거래가 안전하게 보호됩니다. 개인정보 유출 걱정 없이 이용하실 수 있습니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">📞 24시간 상담</h3>
                  <p className="text-slate-700">
                    연중무휴 24시간 고객센터 운영으로 언제든지 상담받으실 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">이용 가능한 소액결제</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>SKT (T전화)</strong> - T머니, T페이 소액결제 현금화</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>KT (올레)</strong> - 올레페이, 올레머니 소액결제 현금화</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>LG U+ (유플러스)</strong> - U+페이, U+머니 소액결제 현금화</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>정보이용료</strong> - 각 통신사 정보이용료 현금화</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">이용 절차</h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">카카오톡 또는 전화 상담</h3>
                    <p className="text-slate-700">원하시는 금액과 통신사를 말씀해주시면 즉시 상담해드립니다.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">결제 진행</h3>
                    <p className="text-slate-700">상담 후 안내해드린 방법으로 소액결제를 진행해주세요.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">입금 완료</h3>
                    <p className="text-slate-700">결제 확인 후 평균 5분 이내 지정하신 계좌로 입금해드립니다.</p>
                  </div>
                </li>
              </ol>
            </section>

            <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">⚠️ 주의사항</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• 소액결제 한도 내에서만 이용 가능합니다.</li>
                <li>• 통신사 정책에 따라 이용이 제한될 수 있습니다.</li>
                <li>• 개인정보는 안전하게 보호되며, 거래 목적 외 사용하지 않습니다.</li>
                <li>• 미성년자는 이용이 불가능합니다.</li>
              </ul>
            </section>

            <section className="text-center py-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">지금 바로 시작하세요</h2>
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




