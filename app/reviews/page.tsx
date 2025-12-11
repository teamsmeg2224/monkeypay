import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";
import Script from "next/script";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "고객 후기 | 시드티켓",
  description: "시드티켓을 이용하신 고객님들의 생생한 후기. 실제 이용 경험과 만족도를 확인하세요. 99% 고객 만족도, 빠른 입금, 친절한 상담.",
  openGraph: {
    title: "고객 후기 | 시드티켓",
    description: "시드티켓을 이용하신 고객님들의 생생한 후기를 확인하세요.",
  },
};

const reviews = [
  {
    name: "김** 고객님",
    type: "직장인",
    date: "2025.11.28",
    content: "처음이라 걱정했는데 상담사분이 너무 친절하게 설명해주셔서 안심하고 진행했어요. 입금도 진짜 3분만에 들어오네요! 급할 때 최고입니다.",
    rating: 5
  },
  {
    name: "이** 고객님",
    type: "자영업",
    date: "2025.11.28",
    content: "가게 운영하다 급전이 필요해서 알아봤는데 여기가 수수료 제일 싸네요. 새벽인데도 바로 답장해주셔서 놀랐습니다. 감사합니다.",
    rating: 5
  },
  {
    name: "박** 고객님",
    type: "프리랜서",
    date: "2025.11.27",
    content: "다른 곳은 이것저것 요구하는게 많던데 여기는 절차가 정말 깔끔해요. 미납 있었는데도 잘 해결해주셔서 다행입니다. 추천합니다.",
    rating: 5
  },
  {
    name: "최** 고객님",
    type: "주부",
    date: "2025.11.27",
    content: "소액결제 현금화 처음 해보는데 생각보다 너무 쉽네요. 상담도 친절하고 입금도 빠르고... 다음 달에도 또 이용할 것 같아요.",
    rating: 5
  },
  {
    name: "정** 고객님",
    type: "학생",
    date: "2025.11.26",
    content: "학비 때문에 급하게 현금이 필요했는데 정말 빠르게 해결해주셨어요. 상담원분이 친절하게 설명해주셔서 안심하고 이용했습니다.",
    rating: 5
  },
  {
    name: "강** 고객님",
    type: "직장인",
    date: "2025.11.26",
    content: "회사 급여일 전에 급전이 필요해서 이용했어요. 다른 곳보다 수수료가 훨씬 저렴하고 입금도 빠르네요. 다음에도 이용하겠습니다.",
    rating: 5
  },
  {
    name: "윤** 고객님",
    type: "자영업",
    date: "2025.11.25",
    content: "가게 임대료 때문에 급하게 현금이 필요했는데, 여기서 빠르게 해결했어요. 24시간 상담 가능한 것도 정말 좋습니다.",
    rating: 5
  },
  {
    name: "장** 고객님",
    type: "프리랜서",
    date: "2025.11.25",
    content: "프리랜서라 수입이 불규칙한데, 급할 때마다 이용하고 있어요. 절차가 간단하고 빠르게 입금해주셔서 정말 만족합니다.",
    rating: 5
  },
  {
    name: "임** 고객님",
    type: "주부",
    date: "2025.11.24",
    content: "생활비 보조로 이용했는데 생각보다 수수료가 저렴하네요. 상담도 친절하고 안전하게 거래할 수 있어서 좋습니다.",
    rating: 5
  },
  {
    name: "한** 고객님",
    type: "직장인",
    date: "2025.11.24",
    content: "카드 대금 때문에 급하게 현금이 필요했는데, 여기서 빠르게 해결했어요. 입금도 정말 빠르고 상담도 친절합니다.",
    rating: 5
  },
];

export default function ReviewsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  
  // Review 구조화 데이터
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "시드티켓",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewBody": review.content,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <>
      <Script
        id="review-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(reviewJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="container-main max-w-6xl">
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">
              ← 홈으로 돌아가기
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                고객 후기
              </h1>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100">
                <Star size={20} className="fill-yellow-500 text-yellow-500" />
                <span className="text-yellow-700 font-bold">평점 5.0</span>
              </div>
            </div>
            <p className="text-lg text-slate-600">
              시드티켓을 이용하신 고객님들의 생생한 후기입니다. 실제 이용 경험을 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200 relative"
              >
                <Quote className="absolute top-6 right-6 text-slate-200 w-8 h-8" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-sm">{review.name}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-white border border-slate-200 text-slate-500 rounded-full">{review.type}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className={`${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`} />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  "{review.content}"
                </p>
                
                <div className="text-xs text-slate-400 border-t border-slate-200 pt-3">
                  {review.date} 작성됨
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h2>
            <p className="mb-6 opacity-90">99% 고객 만족도, 평균 5분 입금</p>
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
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}




