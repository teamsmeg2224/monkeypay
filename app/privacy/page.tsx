import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 시드티켓",
  description: "시드티켓 개인정보처리방침. 개인정보의 수집, 이용, 보관, 폐기 등에 관한 모든 내용을 확인하실 수 있습니다.",
  openGraph: {
    title: "개인정보처리방침 | 시드티켓",
    description: "시드티켓 개인정보처리방침을 확인하세요.",
  },
};

export default function PrivacyPage() {
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
              개인정보처리방침
            </h1>
            <p className="text-lg text-slate-600">
              시드티켓은 이용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
            </p>
            <p className="text-sm text-slate-500 mt-2">
              최종 수정일: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">개인정보의 처리 목적</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                시드티켓은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2">1. 서비스 제공</h3>
                  <p className="text-slate-700 text-sm">
                    소액결제 현금화 서비스 제공, 본인 인증, 거래 처리, 입금 처리 등 서비스 제공에 필요한 업무 수행
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2">2. 고객 상담 및 문의 처리</h3>
                  <p className="text-slate-700 text-sm">
                    고객 문의사항 응대, 불만 처리, 서비스 개선을 위한 의견 수렴
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2">3. 법령상 의무 이행</h3>
                  <p className="text-slate-700 text-sm">
                    관련 법령에 따른 의무 이행 및 법적 분쟁 대비
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">수집하는 개인정보의 항목</h2>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">필수 수집 항목</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• 성명, 생년월일</li>
                    <li>• 휴대폰 번호</li>
                    <li>• 통신사 정보 (SKT/KT/LG U+)</li>
                    <li>• 입금 계좌 정보 (은행명, 계좌번호, 예금주명)</li>
                    <li>• 거래 내역 정보</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">자동 수집 항목</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• IP 주소, 쿠키, 접속 로그</li>
                    <li>• 서비스 이용 기록</li>
                    <li>• 기기 정보</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">개인정보의 보유 및 이용 기간</h2>
              <div className="space-y-3 text-slate-700">
                <p>1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                <p>2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:</p>
                <div className="bg-slate-50 rounded-lg p-5 mt-4 border border-slate-200">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>거래 정보:</strong> 거래 완료 후 5년 (전자상거래 등에서의 소비자 보호에 관한 법률)</li>
                    <li>• <strong>계약 또는 청약철회 등에 관한 기록:</strong> 5년 (전자상거래 등에서의 소비자 보호에 관한 법률)</li>
                    <li>• <strong>대금결제 및 재화 등의 공급에 관한 기록:</strong> 5년 (전자상거래 등에서의 소비자 보호에 관한 법률)</li>
                    <li>• <strong>소비자의 불만 또는 분쟁처리에 관한 기록:</strong> 3년 (전자상거래 등에서의 소비자 보호에 관한 법률)</li>
                    <li>• <strong>접속 로그:</strong> 3개월 (통신비밀보호법)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">개인정보의 제3자 제공</h2>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <p className="text-slate-700 leading-relaxed">
                  <strong>시드티켓은 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.</strong> 
                  다만, 다음의 경우에는 예외로 합니다:
                </p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li>• 이용자가 사전에 동의한 경우</li>
                  <li>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>• 서비스 제공에 따른 요금정산을 위해 필요한 경우</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">개인정보처리의 위탁</h2>
              <p className="text-slate-700 leading-relaxed">
                회사는 서비스 향상을 위하여 개인정보 처리업무를 외부 전문업체에 위탁하여 운영할 수 있습니다. 
                개인정보 처리 위탁을 받는 자, 위탁하는 업무의 내용은 다음과 같습니다:
              </p>
              <div className="bg-slate-50 rounded-lg p-5 mt-4 border border-slate-200">
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>결제 처리:</strong> 결제 대행 업체 (결제 처리에 필요한 최소한의 정보만 제공)</li>
                  <li>• <strong>서버 관리:</strong> 클라우드 서비스 제공 업체 (서버 호스팅 및 관리)</li>
                </ul>
                <p className="text-sm text-slate-600 mt-4 italic">
                  위탁업체는 개인정보보호법에 따라 개인정보를 안전하게 처리하도록 관리·감독하고 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">정보주체의 권리·의무 및 행사방법</h2>
              <div className="space-y-3 text-slate-700">
                <p>정보주체는 다음과 같은 권리를 행사할 수 있습니다:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>개인정보 열람 요구</li>
                  <li>개인정보 정정·삭제 요구</li>
                  <li>개인정보 처리정지 요구</li>
                </ul>
                <p className="mt-4">
                  권리 행사는 회사에 대해 개인정보보호법 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 
                  회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">개인정보의 파기</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">파기 절차</h3>
                  <p className="text-slate-700 text-sm">
                    이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 
                    내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">파기 방법</h3>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• 전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                    <li>• 기록물, 인쇄물, 서면 등: 분쇄하거나 소각</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">개인정보 보호책임자</h2>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="text-slate-700 mb-4">
                  시드티켓은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
                  아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>개인정보 보호책임자</strong></p>
                  <p>연락처: 010-2591-2329</p>
                  <p>카카오톡: <a href="https://open.kakao.com/o/sR4Kfk5h" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">오픈채팅 상담</a></p>
                  <p>운영시간: 연중무휴 24시간</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">개인정보의 안전성 확보 조치</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">관리적 조치</h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 내부관리계획 수립·시행</li>
                    <li>• 정기적 직원 교육</li>
                    <li>• 개인정보 접근 권한 관리</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">기술적 조치</h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 개인정보 암호화</li>
                    <li>• 해킹 등에 대비한 기술적 대책</li>
                    <li>• 개인정보처리시스템 등의 접근 권한 관리</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">물리적 조치</h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 전산실, 자료보관실 등의 접근 통제</li>
                    <li>• 문서 보관 시 잠금 장치 설치</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">개인정보 관련 문의</h2>
              <p className="mb-6 opacity-90">
                개인정보 보호와 관련하여 궁금한 사항이 있으시면 언제든지 문의해주세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://open.kakao.com/o/sR4Kfk5h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FEE500] text-[#191919] font-bold px-8 py-4 rounded-xl hover:bg-[#FDD835] transition-colors text-center"
                >
                  카카오톡 상담하기
                </a>
                <a
                  href="tel:010-2591-2329"
                  className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors text-center"
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




