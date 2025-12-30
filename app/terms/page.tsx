import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 | 몽키페이",
  description: "몽키페이 소액결제 현금화 서비스 이용약관. 서비스 이용에 관한 모든 약관을 확인하실 수 있습니다.",
  openGraph: {
    title: "이용약관 | 몽키페이",
    description: "몽키페이 소액결제 현금화 서비스 이용약관을 확인하세요.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16">
        <div className="container-main max-w-4xl">
          <div className="mb-12">
            <Link href="/" className="font-black uppercase tracking-wider text-sm mb-4 inline-block hover:underline">
              ← 홈으로 돌아가기
            </Link>
            <h1 className="section-title mb-4">
              이용약관
            </h1>
            <p className="text-xl text-gray-700">
              몽키페이 소액결제 현금화 서비스 이용약관입니다. 서비스 이용 전 반드시 확인해주세요.
            </p>
            <p className="text-sm text-gray-600 mt-2 font-black uppercase">
              최종 수정일: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제1조 (목적)</h2>
              <p className="text-slate-700 leading-relaxed">
                본 약관은 몽키페이(이하 "회사")이 제공하는 소액결제 현금화 서비스(이하 "서비스")의 이용과 관련하여 
                회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제2조 (정의)</h2>
              <div className="space-y-3 text-slate-700">
                <p><strong>1. "서비스"</strong>란 회사가 제공하는 소액결제 현금화 서비스를 의미합니다.</p>
                <p><strong>2. "이용자"</strong>란 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는 자를 의미합니다.</p>
                <p><strong>3. "소액결제 현금화"</strong>란 통신사에서 제공하는 소액결제 한도를 활용하여 현금을 확보하는 서비스를 의미합니다.</p>
                <p><strong>4. "수수료"</strong>란 서비스 이용에 따른 대가로 지급되는 금액을 의미합니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제3조 (약관의 효력 및 변경)</h2>
              <div className="space-y-3 text-slate-700">
                <p>1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</p>
                <p>2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</p>
                <p>3. 약관이 변경되는 경우 회사는 변경 사항을 시행일 7일 전부터 서비스 내 공지사항을 통해 공지합니다.</p>
                <p>4. 이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제4조 (서비스의 제공 및 변경)</h2>
              <div className="space-y-3 text-slate-700">
                <p>1. 회사는 다음과 같은 서비스를 제공합니다:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>소액결제 현금화 서비스</li>
                  <li>정보이용료 현금화 서비스</li>
                  <li>상품권 현금화 서비스</li>
                  <li>기타 회사가 정하는 서비스</li>
                </ul>
                <p>2. 회사는 서비스의 내용, 이용 방법, 이용 시간을 변경할 수 있으며, 변경 시 사전에 공지합니다.</p>
                <p>3. 회사는 서비스 제공을 위해 필요한 경우 이용자에게 정보를 요청할 수 있습니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제5조 (이용자의 의무)</h2>
              <div className="space-y-3 text-slate-700">
                <p>1. 이용자는 다음 행위를 하여서는 안 됩니다:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>타인의 명의를 도용하거나 부정한 방법으로 서비스를 이용하는 행위</li>
                  <li>회사가 제공하는 서비스의 안정적 운영을 방해하는 행위</li>
                  <li>법령 또는 본 약관에서 금지하는 행위</li>
                  <li>기타 공서양속에 반하는 행위</li>
                </ul>
                <p>2. 이용자는 본인 명의의 휴대폰을 사용해야 하며, 만 19세 이상 성인이어야 합니다.</p>
                <p>3. 이용자는 서비스 이용 시 제공한 정보의 정확성을 보장해야 합니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제6조 (수수료 및 환불)</h2>
              <div className="space-y-3 text-slate-700">
                <p>1. 서비스 이용에 따른 수수료는 금액 및 통신사에 따라 상이하며, 상담 시 안내됩니다.</p>
                <p>2. 입금 완료 후에는 환불이 불가능합니다.</p>
                <p>3. 회사의 귀책사유로 인한 서비스 미제공 시 수수료를 환불합니다.</p>
                <p>4. 이용자의 귀책사유로 인한 거래 취소 시 수수료는 환불되지 않습니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제7조 (개인정보 보호)</h2>
              <p className="text-slate-700 leading-relaxed">
                회사는 이용자의 개인정보를 보호하기 위하여 노력합니다. 개인정보의 수집, 이용, 보관, 폐기 등에 관한 사항은 
                개인정보처리방침에 따릅니다. 자세한 내용은 <Link href="/privacy" className="text-blue-600 hover:underline">개인정보처리방침</Link>을 참고해주세요.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제8조 (면책사항)</h2>
              <div className="space-y-3 text-slate-700">
                <p>1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                <p>2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
                <p>3. 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않습니다.</p>
                <p>4. 통신사 정책 변경으로 인한 서비스 이용 제한에 대하여 회사는 책임을 지지 않습니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">제9조 (분쟁의 해결)</h2>
              <div className="space-y-3 text-slate-700">
                <p>1. 회사와 이용자 간에 발생한 분쟁에 관한 소송은 제소 당시 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다.</p>
                <p>2. 회사와 이용자 간에 발생한 분쟁은 대한민국 법을 적용합니다.</p>
              </div>
            </section>

            <section className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">문의처</h2>
              <div className="space-y-3 text-slate-700">
                <p><strong>고객센터:</strong> 010-2591-2329</p>
                <p><strong>카카오톡:</strong> <a href="https://open.kakao.com/o/sR4Kfk5h" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">오픈채팅 상담</a></p>
                <p><strong>운영시간:</strong> 연중무휴 24시간</p>
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









