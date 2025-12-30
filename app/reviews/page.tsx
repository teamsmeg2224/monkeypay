import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "고객 후기 | 몽키페이",
  description: "몽키페이을 이용하신 고객님들의 생생한 후기. 실제 이용 경험과 만족도를 확인하세요. 99% 고객 만족도, 빠른 입금, 친절한 상담.",
  openGraph: {
    title: "고객 후기 | 몽키페이",
    description: "몽키페이을 이용하신 고객님들의 생생한 후기를 확인하세요.",
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com";
  
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "몽키페이",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reviews.map((review, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
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
        },
        "itemReviewed": {
          "@type": "Service",
          "name": "소액결제 현금화 서비스"
        }
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
      <Script
        id="reviews-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16">
        <div className="container-main max-w-5xl">
          <div className="mb-12">
            <Link href="/" className="font-black uppercase tracking-wider text-sm mb-4 inline-block hover:underline">
              ← 홈으로 돌아가기
            </Link>
            <h1 className="section-title mb-4">
              고객 후기
            </h1>
            <p className="text-xl text-gray-700">
              몽키페이을 이용하신 고객님들의 생생한 후기입니다. 실제 이용 경험을 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="card-brutal p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black text-white border-4 border-black flex items-center justify-center font-black text-xl shadow-brutal">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-black text-lg">{review.name}</div>
                      <div className="badge-brutal text-xs">{review.type}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "text-black text-xl" : "text-gray-300 text-xl"}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed mb-4 text-lg">"{review.content}"</p>
                <div className="print-line border-black/20"></div>
                <div className="text-sm text-gray-600 mt-3 font-black uppercase">{review.date}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
