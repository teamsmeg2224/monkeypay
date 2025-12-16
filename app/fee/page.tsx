import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "수수료 안내 | 시드티켓",
  description: "시드티켓 소액결제 현금화 수수료 안내. 업계 최고 수준의 수수료로 제공. 금액별, 통신사별 수수료 비교 및 상세 안내.",
  openGraph: {
    title: "수수료 안내 | 시드티켓",
    description: "시드티켓 소액결제 현금화 수수료 안내. 업계 최고 수준의 수수료를 확인하세요.",
  },
};

export default function FeePage() {
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
              수수료 안내
            </h1>
            <p className="text-lg text-slate-600">
              시드티켓은 업계 최고 수준의 수수료로 고객님께 최대한의 현금을 드립니다.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">시드티켓 수수료 정책</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                시드티켓은 고객님께 최대한의 현금을 드리기 위해 업계 최고 수준의 수수료를 제공합니다. 
                금액과 통신사에 따라 수수료가 상이할 수 있으며, 정확한 수수료는 상담 시 안내해드립니다.
              </p>
              <div className="bg-white rounded-lg p-6 mt-4 border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-3">수수료 특징</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ 업계 최고 수준의 수수료 제공</li>
                  <li>✓ 금액이 클수록 더 유리한 수수료</li>
                  <li>✓ 통신사별 최적화된 수수료</li>
                  <li>✓ 숨겨진 수수료 없음, 투명한 정산</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">수수료 결정 요소</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">💰 현금화 금액</h3>
                  <p className="text-slate-700 text-sm">
                    현금화 금액이 클수록 더 유리한 수수료를 제공합니다. 대량 거래 시 추가 할인 혜택도 제공됩니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">📱 통신사</h3>
                  <p className="text-slate-700 text-sm">
                    SKT, KT, LG U+ 각 통신사별로 최적화된 수수료를 제공합니다. 통신사 정책에 따라 수수료가 달라질 수 있습니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">⏰ 거래 시간</h3>
                  <p className="text-slate-700 text-sm">
                    평일과 주말, 공휴일 모두 동일한 수수료를 적용합니다. 시간대와 관계없이 공정한 수수료를 제공합니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">🔄 거래 빈도</h3>
                  <p className="text-slate-700 text-sm">
                    단골 고객님께는 더 유리한 수수료를 제공합니다. 정기적으로 이용하시면 추가 혜택을 받으실 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">수수료 비교</h2>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-slate-700 mb-4">
                  시드티켓은 업계 최고 수준의 수수료를 제공하여 고객님께 최대한의 현금을 드립니다. 
                  다른 업체와 비교해보시면 차이를 확인하실 수 있습니다.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-green-800 font-medium text-sm">
                    💡 정확한 수수료는 상담 시 금액과 통신사를 확인한 후 안내해드립니다. 
                    부담 없이 문의해주시면 최적의 수수료를 제안해드리겠습니다.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">수수료 관련 주의사항</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• 수수료는 거래 전 상담 시 명확히 안내해드립니다.</li>
                <li>• 숨겨진 수수료나 추가 비용은 없습니다.</li>
                <li>• 입금 완료 후 수수료 변경은 불가능합니다.</li>
                <li>• 수수료는 현금화 금액에서 차감되어 입금됩니다.</li>
              </ul>
            </section>

            <section className="text-center py-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">정확한 수수료 확인하기</h2>
              <p className="text-slate-600 mb-6">상담을 통해 최적의 수수료를 확인하세요</p>
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








