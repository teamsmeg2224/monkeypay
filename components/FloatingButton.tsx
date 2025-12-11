"use client";

import { useEffect, useRef } from "react";

export default function FloatingButton() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const constrainIframeSize = () => {
      if (!iframeRef.current || !containerRef.current) return;
      
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Get container position
      const containerRect = containerRef.current.getBoundingClientRect();
      // Calculate available space: from container left edge to viewport right edge, minus padding
      const availableWidth = viewportWidth - containerRect.left - 24; // 24px padding from right
      const availableHeight = viewportHeight - containerRect.top - 24; // 24px padding from top
      
      // Ensure minimum size but respect viewport boundaries
      const maxWidth = Math.max(90, Math.min(availableWidth, viewportWidth - 48)); // Min 90px, max viewport - 48px padding
      const maxHeight = Math.max(90, Math.min(availableHeight, viewportHeight - 48)); // Min 90px, max viewport - 48px padding
      
      // Get current iframe size
      const currentWidth = parseInt(iframeRef.current.style.width || '90');
      const currentHeight = parseInt(iframeRef.current.style.height || '90');
      
      // Apply constraints
      const constrainedWidth = Math.min(currentWidth, maxWidth);
      const constrainedHeight = Math.min(currentHeight, maxHeight);
      
      iframeRef.current.style.width = `${constrainedWidth}px`;
      iframeRef.current.style.height = `${constrainedHeight}px`;
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "resize" && iframeRef.current && containerRef.current) {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get container position
        const containerRect = containerRef.current.getBoundingClientRect();
        // Calculate available space: from container left edge to viewport right edge, minus padding
        const availableWidth = viewportWidth - containerRect.left - 24; // 24px padding from right
        const availableHeight = viewportHeight - containerRect.top - 24; // 24px padding from top
        
        // Ensure minimum size but respect viewport boundaries
        const maxWidth = Math.max(90, Math.min(availableWidth, viewportWidth - 48)); // Min 90px, max viewport - 48px padding
        const maxHeight = Math.max(90, Math.min(availableHeight, viewportHeight - 48)); // Min 90px, max viewport - 48px padding
        
        // Constrain width and height to viewport boundaries
        if (event.data.width) {
          const requestedWidth = typeof event.data.width === 'string' 
            ? parseInt(event.data.width.replace('px', '')) 
            : event.data.width;
          const constrainedWidth = Math.min(requestedWidth, maxWidth);
          iframeRef.current.style.width = `${constrainedWidth}px`;
        }
        if (event.data.height) {
          const requestedHeight = typeof event.data.height === 'string'
            ? parseInt(event.data.height.replace('px', ''))
            : event.data.height;
          const constrainedHeight = Math.min(requestedHeight, maxHeight);
          iframeRef.current.style.height = `${constrainedHeight}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("resize", constrainIframeSize);
    
    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", constrainIframeSize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-0 right-6 z-[9999] flex items-end max-w-[calc(100vw-3rem)]"
    >
      {/* Chat Widget */}
      <div 
        className="relative max-w-full" 
        style={{ 
          maxWidth: 'calc(100vw - 3rem)',
          pointerEvents: 'none' // Allow clicks to pass through to iframe
        }}
      >
        <iframe
          ref={iframeRef}
          src="https://chat-widget-alpha-three.vercel.app/?brand=seed"
          style={{
            border: "none",
            width: "90px", // Initial width
            height: "90px", // Initial height
            transition: "all 0.3s ease",
            maxWidth: "calc(100vw - 3rem)", // Prevent overflow
            maxHeight: "calc(100vh - 3rem)", // Prevent overflow
            pointerEvents: 'auto', // Enable clicks on iframe
          }}
          id="chat-widget-seed"
          title="Chat Widget"
          allow="microphone; camera"
        />
      </div>
    </div>
  );
}
