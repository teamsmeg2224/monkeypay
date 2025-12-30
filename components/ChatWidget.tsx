"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ChatWidget() {
    useEffect(() => {
        // Configure chat widget
        (window as any).chatWidgetConfig = {
            launcher: {
                hidden: true, // We will use our own floating button to trigger it
            }
        };
    }, []);

    return (
        <>
            <Script
                id="chat-widget-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w, d, s, o, f, js, fjs) {
              w[o] = w[o] || function() { (w[o].q = w[o].q || []).push(arguments) };
              js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
              js.id = o; js.src = f; js.async = 1;
              js.setAttribute('data-site-id', '3a6912b3-1322-4d90-b3bb-c41c568566bb');
              fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'ChatWidget', 'https://chat-widget-alpha-three.vercel.app//embed.js'));
          `,
                }}
            />
        </>
    );
}
