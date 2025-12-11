import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 정보 | 시드티켓",
  description: "시드티켓 서비스 정보. 소액결제 현금화, 정보이용료 현금화, 상품권 현금화 등 다양한 서비스를 제공합니다.",
  openGraph: {
    title: "서비스 정보 | 시드티켓",
    description: "시드티켓의 다양한 현금화 서비스 정보를 확인하세요.",
  },
};

export default function InfoPage() {
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
              서비스 정보
            </h1>
            <p className="text-lg text-slate-600">
              시드티켓이 제공하는 다양한 현금화 서비스에 대해 자세히 알아보세요.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">시드티켓 소개</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                시드티켓은 소액결제 현금화 전문 업체로, 고객님의 편의를 최우선으로 생각하는 신뢰할 수 있는 서비스를 제공합니다. 
                정식 사업자 등록 업체로서 안전하고 투명한 거래를 약속드리며, 업계 최고 수준의 수수료와 빠른 입금 서비스를 자랑합니다.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 text-center border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5분</div>
                  <div className="text-sm text-slate-600">평균 입금 시간</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24시간</div>
                  <div className="text-sm text-slate-600">연중무휴 상담</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">최고</div>
                  <div className="text-sm text-slate-600">수수료 제공</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">제공 서비스</h2>
              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">소액결제 현금화</h3>
                  <p className="text-slate-700 mb-4">
                    통신사에서 제공하는 소액결제 한도를 현금으로 전환하는 서비스입니다. SKT, KT, LG U+ 모든 통신사 이용 가능합니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">SKT</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">KT</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">LG U+</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">정보이용료 현금화</h3>
                  <p className="text-slate-700 mb-4">
                    휴대폰 정보이용료를 현금으로 전환하는 서비스입니다. 각 통신사의 정보이용료 한도 내에서 이용 가능합니다.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 각 통신사 정보이용료 한도 확인 필요</li>
                    <li>• 빠른 처리 및 안전한 거래 보장</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">상품권 현금화</h3>
                  <p className="text-slate-700 mb-4">
                    다양한 상품권을 현금으로 전환하는 서비스입니다. 문화상품권, 해피머니, 도서상품권 등 다양한 상품권을 현금화할 수 있습니다.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 문화상품권, 해피머니, 도서상품권 등</li>
                    <li>• 최고가 매입 보장</li>
                    <li>• 빠른 입금 처리</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">서비스 특징</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">빠른 처리 속도</h3>
                  <p className="text-slate-700 text-sm">
                    상담부터 입금까지 평균 5분 이내 완료. 급하게 현금이 필요하신 분들께 최적의 서비스입니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">최고 수수료</h3>
                  <p className="text-slate-700 text-sm">
                    업계 최고 수준의 수수료로 제공하여 고객님께 최대한의 현금을 드립니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">안전한 거래</h3>
                  <p className="text-slate-700 text-sm">
                    정식 사업자 등록 업체로, 모든 거래가 안전하게 보호됩니다. 개인정보 유출 걱정 없이 이용하실 수 있습니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">24시간 상담</h3>
                  <p className="text-slate-700 text-sm">
                    연중무휴 24시간 고객센터 운영으로 언제든지 상담받으실 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">이용 대상</h2>
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="font-bold text-slate-900 mb-3">이용 가능한 분</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>만 19세 이상 성인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>본인 명의의 휴대폰 보유자</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>소액결제 한도가 있는 분</span>
                  </li>
                </ul>
                <h3 className="font-bold text-slate-900 mb-3 mt-6">이용 불가능한 분</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>미성년자 (만 19세 미만)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>타인 명의 휴대폰 사용자</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>소액결제 한도가 없는 분</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">서비스 이용 절차</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">상담 신청</h3>
                    <p className="text-slate-700 text-sm">카카오톡 또는 전화로 상담 신청</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">수수료 안내</h3>
                    <p className="text-slate-700 text-sm">최적의 수수료 및 입금 계좌 안내</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">결제 진행</h3>
                    <p className="text-slate-700 text-sm">안내받은 방법으로 소액결제 진행</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">입금 완료</h3>
                    <p className="text-slate-700 text-sm">평균 5분 이내 계좌 입금</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h2>
              <p className="mb-6 opacity-90">24시간 상담 가능, 평균 5분 입금</p>
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
                  className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
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





