import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "시드티켓 - 소액결제·정보이용료·상품권 현금화 업계 1위",
  description: "급할 땐 고민말고 시드티켓. 소액결제, 정보이용료, 상품권 최고가 매입. 5분 총알 입금, 24시간 안전 상담.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html >
  );
}
