"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const SCRIPT_ID = "chat-widget-script";

    if (document.getElementById(SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://chat-widget-alpha-three.vercel.app/embed.js";
    // TODO: Verify the correct site ID. "s3xy" is assumed from the project name/corpus.
    script.setAttribute("data-site-id", "s3xy"); 
    script.async = true;

    // Optional: Add event listener to dispatch 'chatWidgetReady' when script loads if the script doesn't do it.
    // However, FloatingButton.tsx relies on observing window.ChatWidget or 'chatWidgetReady' event.
    // The embed.js likely handles initialization.
    
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary, though typically widgets persist.
    };
  }, []);

  return null;
}
