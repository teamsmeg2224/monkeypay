import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://몽키페이.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "몽키페이 - 소액결제 현금화",
    short_name: "몽키페이",
    description: "소액결제, 정보이용료, 상품권 현금화 전문 서비스. 평균 5분 입금, 365일 24시간 연중무휴 상담.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}






