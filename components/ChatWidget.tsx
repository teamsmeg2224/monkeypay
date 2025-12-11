"use client";

import { useEffect, useRef } from "react";

export default function ChatWidget() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === "resize" && iframeRef.current) {
                if (event.data.width) {
                    iframeRef.current.style.width = event.data.width;
                }
                if (event.data.height) {
                    iframeRef.current.style.height = event.data.height;
                }
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <iframe
            ref={iframeRef}
            src="https://chat-widget-alpha-three.vercel.app/?brand=seed"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                border: "none",
                width: "90px", // Initial width
                height: "90px", // Initial height
                zIndex: 999999,
                transition: "all 0.3s ease",
            }}
            id="chat-widget-seed"
            title="Chat Widget"
        />
    );
}
