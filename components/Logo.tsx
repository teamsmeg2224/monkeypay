import React from "react";

export default function Logo({ className = "", textClassName = "" }: { className?: string, textClassName?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brutalist Logo */}
      <div className="relative w-10 h-10 flex items-center justify-center border-4 border-black bg-black">
        <div className="w-full h-full bg-white relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-black font-black text-xl">M</span>
          </div>
        </div>
      </div>
      
      {/* Text Logo */}
      <span className={`text-2xl font-black tracking-tight ${textClassName}`}>
        몽키페이
      </span>
    </div>
  );
}
