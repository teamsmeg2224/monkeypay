import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: process.env.NODE_ENV === "development"
              ? [
                  // 개발 환경: 완화된 CSP (위젯 테스트용)
                  "default-src 'self' http://localhost:* https://localhost:* https: data: blob:",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:* https://localhost:* https:",
                  "style-src 'self' 'unsafe-inline' http://localhost:* https://localhost:* https: data:",
                  "font-src 'self' http://localhost:* https://localhost:* https: data:",
                  "img-src 'self' http://localhost:* https://localhost:* https: data: blob:",
                  "connect-src 'self' http://localhost:* https://localhost:* ws://localhost:* wss://localhost:* https: http: ws: wss:",
                  "frame-src 'self' http://localhost:* https://localhost:* https://chat-widget-alpha-three.vercel.app https://*.vercel.app https:",
                  "frame-ancestors 'none'",
                  "base-uri 'self'",
                  "form-action 'self'",
                  "object-src 'none'",
                  "media-src 'self' http://localhost:* https://localhost:* https:",
                  "worker-src 'self' blob: http://localhost:* https://localhost:*",
                  "child-src 'self' blob: http://localhost:* https://localhost:* https:",
                ].join("; ")
              : [
                  // 프로덕션 환경: 보안 강화
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://va.vercel-scripts.com https://chat-widget-alpha-three.vercel.app https://*.vercel.app",
                  "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com https://chat-widget-alpha-three.vercel.app https://*.vercel.app",
                  "font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com https://chat-widget-alpha-three.vercel.app https://*.vercel.app data:",
                  "img-src 'self' data: https: blob: https://chat-widget-alpha-three.vercel.app https://*.vercel.app",
                  "connect-src 'self' https: https://chat-widget-alpha-three.vercel.app https://*.vercel.app",
                  "frame-src 'self' https://chat-widget-alpha-three.vercel.app https://*.vercel.app",
                  "frame-ancestors 'none'",
                  "base-uri 'self'",
                  "form-action 'self'",
                  "object-src 'none'",
                  "media-src 'self' https: https://chat-widget-alpha-three.vercel.app https://*.vercel.app",
                  "worker-src 'self' blob:",
                  "child-src 'self' blob: https://chat-widget-alpha-three.vercel.app https://*.vercel.app",
                  "upgrade-insecure-requests",
                ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
