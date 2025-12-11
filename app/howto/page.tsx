import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소액결제 현금화 방법 | 시드티켓",
  description: "소액결제 현금화 방법 상세 가이드. 단계별 절차, 준비물, 주의사항까지 모든 것을 확인하세요. 시드티켓과 함께 쉽고 빠르게 현금화하세요.",
  openGraph: {
    title: "소액결제 현금화 방법 | 시드티켓",
    description: "소액결제 현금화 방법을 단계별로 상세히 안내합니다.",
  },
};

export default function HowToPage() {
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
              소액결제 현금화 방법
            </h1>
            <p className="text-lg text-slate-600">
              시드티켓과 함께 소액결제를 현금으로 전환하는 방법을 단계별로 상세히 안내합니다.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">소액결제 현금화 준비사항</h2>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
                <h3 className="font-bold text-slate-900 mb-3">필수 준비물</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ 본인 명의의 휴대폰 (만 19세 이상)</li>
                  <li>✓ 소액결제 한도 확인</li>
                  <li>✓ 입금받을 계좌 정보</li>
                  <li>✓ 신분증 (본인 인증용)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                <h3 className="font-bold text-slate-900 mb-3">이용 전 확인사항</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• 소액결제 한도가 충분한지 확인</li>
                  <li>• 미납이 없는지 확인</li>
                  <li>• 본인 명의 휴대폰인지 확인</li>
                  <li>• 만 19세 이상 성인인지 확인</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">단계별 현금화 방법</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">상담 신청</h3>
                      <p className="text-slate-700 mb-3">
                        카카오톡 오픈채팅 또는 전화(010-2591-2329)로 상담을 신청해주세요. 
                        원하시는 현금화 금액과 통신사(SKT/KT/LG U+)를 말씀해주시면 즉시 상담해드립니다.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <a href="https://open.kakao.com/o/sR4Kfk5h" target="_blank" rel="noopener noreferrer" className="text-sm bg-[#FEE500] text-[#191919] px-4 py-2 rounded-lg font-medium">
                          카카오톡 상담
                        </a>
                        <a href="tel:010-2591-2329" className="text-sm bg-slate-900 text-white px-4 py-2 rounded-lg font-medium">
                          전화 상담
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">수수료 및 입금 계좌 안내</h3>
                      <p className="text-slate-700 mb-3">
                        상담원이 최적의 수수료를 안내해드리며, 입금받으실 계좌 정보를 확인합니다. 
                        시드티켓은 업계 최고 수준의 수수료를 제공하여 고객님께 최대한의 현금을 드립니다.
                      </p>
                      <p className="text-sm text-slate-600 italic">
                        * 수수료는 금액과 통신사에 따라 상이할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-6 py-4 bg-purple-50 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">소액결제 진행</h3>
                      <p className="text-slate-700 mb-3">
                        안내받은 상품 또는 서비스로 소액결제를 진행해주세요. 
                        결제 완료 후 상담원에게 알려주시면 즉시 확인 절차를 진행합니다.
                      </p>
                      <div className="bg-white rounded-lg p-4 mt-3 border border-purple-200">
                        <p className="text-sm font-medium text-slate-900 mb-2">결제 시 주의사항:</p>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• 정확한 금액으로 결제해주세요</li>
                          <li>• 결제 완료 후 즉시 상담원에게 알려주세요</li>
                          <li>• 결제 내역 스크린샷을 준비해주시면 더 빠른 처리가 가능합니다</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">입금 완료</h3>
                      <p className="text-slate-700 mb-3">
                        결제 확인 후 평균 5분 이내 지정하신 계좌로 입금해드립니다. 
                        입금 완료 시 알림을 드리며, 거래가 완료됩니다.
                      </p>
                      <div className="bg-white rounded-lg p-4 mt-3 border border-orange-200">
                        <p className="text-sm font-medium text-slate-900 mb-2">입금 확인 방법:</p>
                        <ul className="text-sm text-slate-700 space-y-1">
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

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">통신사별 현금화 방법</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">SKT</h3>
                  <p className="text-sm text-slate-700">T머니, T페이 소액결제 현금화</p>
                  <Link href="/skt" className="text-blue-600 text-sm hover:underline mt-2 inline-block">
                    자세히 보기 →
                  </Link>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">KT</h3>
                  <p className="text-sm text-slate-700">올레페이, 올레머니 소액결제 현금화</p>
                  <Link href="/kt" className="text-green-600 text-sm hover:underline mt-2 inline-block">
                    자세히 보기 →
                  </Link>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">LG U+</h3>
                  <p className="text-sm text-slate-700">U+페이, U+머니 소액결제 현금화</p>
                  <Link href="/lgu" className="text-purple-600 text-sm hover:underline mt-2 inline-block">
                    자세히 보기 →
                  </Link>
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





