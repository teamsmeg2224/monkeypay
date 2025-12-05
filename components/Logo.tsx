import React from "react";

export default function Logo({ className = "", textClassName = "" }: { className?: string, textClassName?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Symbol: Ticket shape with a leaf/seed inside */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Ticket/Card Base */}
          <rect x="10" y="20" width="80" height="60" rx="16" fill="#2563EB" />
          
          {/* Leaf/Seed Accent */}
          <path
            d="M50 70C50 70 35 60 35 45C35 35 42 28 50 28C58 28 65 35 65 45C65 60 50 70 50 70Z"
            fill="white"
          />
          <path 
            d="M50 70V45" 
            stroke="#2563EB" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
      
      {/* Text Logo */}
      <span className={`text-2xl font-extrabold tracking-tight ${textClassName}`}>
        시드티켓
      </span>
    </div>
  );
}



