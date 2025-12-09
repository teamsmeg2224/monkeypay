import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용 가이드 | 시드티켓",
  description: "시드티켓 소액결제 현금화 이용 가이드. 단계별 상세 설명, 주의사항, 자주 묻는 질문까지 한 번에 확인하세요.",
  openGraph: {
    title: "이용 가이드 | 시드티켓",
    description: "시드티켓 소액결제 현금화 이용 가이드. 단계별 상세 설명과 주의사항을 확인하세요.",
  },
};

export default function GuidePage() {
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
              이용 가이드
            </h1>
            <p className="text-lg text-slate-600">
              시드티켓 소액결제 현금화 서비스를 처음 이용하시는 분들을 위한 상세 가이드입니다.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">전체 이용 절차</h2>
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

            <section className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">이용 전 확인사항</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">✓ 소액결제 한도 확인</h3>
                  <p className="text-slate-700 text-sm">
                    통신사 앱 또는 고객센터에서 현재 사용 가능한 소액결제 한도를 확인해주세요. 
                    한도 내에서만 현금화가 가능합니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">✓ 본인 명의 휴대폰</h3>
                  <p className="text-slate-700 text-sm">
                    소액결제 현금화는 본인 명의의 휴대폰에서만 가능합니다. 
                    타인 명의 휴대폰은 이용이 불가능합니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">✓ 성인 인증</h3>
                  <p className="text-slate-700 text-sm">
                    만 19세 이상 성인만 이용 가능합니다. 
                    미성년자는 법적으로 이용이 제한됩니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">자주 묻는 질문</h2>
              <div className="space-y-4">
                <details className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <summary className="font-bold text-slate-900 cursor-pointer">입금까지 얼마나 걸리나요?</summary>
                  <p className="mt-3 text-slate-700">
                    결제 확인 후 평균 5분 이내 입금해드립니다. 다만, 은행 점검 시간이나 주말/공휴일에는 다소 지연될 수 있습니다.
                  </p>
                </details>
                <details className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <summary className="font-bold text-slate-900 cursor-pointer">수수료는 얼마인가요?</summary>
                  <p className="mt-3 text-slate-700">
                    금액과 통신사에 따라 상이하며, 업계 최고 수준의 수수료를 제공합니다. 정확한 수수료는 상담 시 안내해드립니다.
                  </p>
                </details>
                <details className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <summary className="font-bold text-slate-900 cursor-pointer">개인정보는 안전한가요?</summary>
                  <p className="mt-3 text-slate-700">
                    네, 시드티켓은 정식 사업자 등록 업체로 개인정보보호법을 준수합니다. 거래 목적 외로 사용하지 않으며, 안전하게 보호합니다.
                  </p>
                </details>
                <details className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <summary className="font-bold text-slate-900 cursor-pointer">언제든지 이용 가능한가요?</summary>
                  <p className="mt-3 text-slate-700">
                    네, 연중무휴 24시간 상담 및 서비스 이용이 가능합니다. 언제든지 카카오톡 또는 전화로 문의해주세요.
                  </p>
                </details>
              </div>
            </section>

            <section className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">궁금한 점이 있으신가요?</h2>
              <p className="mb-6 opacity-90">24시간 상담 가능한 고객센터로 문의해주세요</p>
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

