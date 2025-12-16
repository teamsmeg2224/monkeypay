import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// URL 검증 함수
function validateUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    // 허용된 프로토콜만 허용
    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return "https://시드티켓.com";
    }
    return url;
  } catch {
    return "https://시드티켓.com";
  }
}

const siteUrl = validateUrl(process.env.NEXT_PUBLIC_SITE_URL || "https://시드티켓.com");
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
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 1200,
        height: 630,
        alt: "시드티켓 - 소액결제 현금화",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/banner.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
    image: `${siteUrl}/banner.png`,
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
      </body>
    </html >
  );
}
