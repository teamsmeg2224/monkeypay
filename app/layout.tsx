import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

// URL 검증 함수
function validateUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    // 허용된 프로토콜만 허용
    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return "https://monkeypay-plum.vercel.app";
    }
    return url;
  } catch {
    return "https://monkeypay-plum.vercel.app";
  }
}

const siteUrl = validateUrl(process.env.NEXT_PUBLIC_SITE_URL || "https://monkeypay-plum.vercel.app");
const siteName = "몽키페이";
const siteTitle = "몽키페이 - 소액결제·정보이용료·상품권 현금화 업계 1위";
const siteDescription =
  "급할 땐 고민말고 몽키페이. 소액결제, 정보이용료, 상품권 최고가 매입. 5분 총알 입금, 24시간 안전 상담.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  keywords: [
    "소액결제 현금화",
    "정보이용료 현금화",
    "상품권 현금화",
    "소액결제 한도",
    "휴대폰 소액결제",
    "급전",
    "비상금",
    "24시간 소액결제",
    "SKT 소액결제",
    "KT 소액결제",
    "LG U+ 소액결제",
    "소액결제 즉시 입금",
    "소액결제 수수료",
    "소액결제 현금화 방법",
    "모바일 상품권 현금화",
    "몽키페이"
  ],
  authors: [{ name: "몽키페이" }],
  creator: "몽키페이",
  publisher: "몽키페이",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 1200,
        height: 630,
        alt: "몽키페이 - 소액결제 현금화",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/banner.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  verification: {
    // Google Search Console, Naver Webmaster 등에서 제공하는 verification 코드를 여기에 추가
    // google: "your-google-verification-code",
    // other: {
    //   "naver-site-verification": "your-naver-verification-code",
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD 데이터 생성 및 검증
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: String(siteName).replace(/[<>]/g, ""), // XSS 방지
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/favicon.png`,
      width: 512,
      height: 512
    },
    image: `${siteUrl}/banner.png`,
    description: siteDescription,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+82-10-2591-2329",
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: ["ko"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          opens: "00:00",
          closes: "23:59"
        }
      },
    ],
    sameAs: [
      "https://open.kakao.com/o/sR4Kfk5h",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1500",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
          referrerPolicy="no-referrer"
        />
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") // 추가 XSS 방지
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <ChatWidget />
      </body>
    </html >
  );
}
