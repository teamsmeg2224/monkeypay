"use client";

import Script from "next/script";

export default function ChatWidget() {
    return (
        <>
            <Script
                src="https://chat-widget-alpha-three.vercel.app/embed.js"
                strategy="afterInteractive"
                data-site-id="3a6912b3-1322-4d90-b3bb-c41c568566bb"
                onLoad={() => {
                    console.log("Chat widget script loaded");
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.chatWidgetConfig = {
              launcher: {
                hidden: true
              }
            };
          `
                }}
            />
        </>
    );
}
