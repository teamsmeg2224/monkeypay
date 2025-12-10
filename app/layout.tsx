import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// URL 검증 함수
function validateUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    // 허용된 프로토콜만 허용
    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return "https://example.com";
    }
    return url;
  } catch {
    return "https://example.com";
  }
}

const siteUrl = validateUrl(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com");
const siteName = "시드티켓";
const siteTitle = "시드티켓 - 소액결제·정보이용료·상품권 현금화 업계 1위";
const siteDescription =
  "급할 땐 고민말고 시드티켓. 소액결제, 정보이용료, 상품권 최고가 매입. 5분 총알 입금, 24시간 안전 상담.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
    logo: `${siteUrl}/favicon.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+82-10-2591-2329",
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: ["ko"],
      },
    ],
    sameAs: [
      "https://open.kakao.com/o/sR4Kfk5h",
    ],
  };

  return (
    <html lang="ko">
      <head>
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
      </body>
    </html >
  );
}
