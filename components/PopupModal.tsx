"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PopupModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check localStorage
        const hideUntil = localStorage.getItem("hide_popup_until");
        if (hideUntil) {
            const now = new Date();
            if (new Date(hideUntil) > now) {
                return; // Still within hidden period
            }
        }

        // Show popup after a short delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = (dontShowToday = false) => {
        if (dontShowToday) {
            const tomorrow = new Date();
            tomorrow.setHours(24, 0, 0, 0); // Set to next midnight
            localStorage.setItem("hide_popup_until", tomorrow.toISOString());
        }
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full relative animate-in zoom-in-95 duration-300">

                {/* Close Button */}
                <button
                    onClick={() => closePopup()}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 z-10 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="relative aspect-square w-full">
                    <Image
                        src="/popup.png" // Using the same popup image
                        alt="Event Popup"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-4 bg-white border-t border-slate-100 flex justify-between items-center gap-4">
                    <button
                        onClick={() => closePopup(true)}
                        className="text-sm text-slate-500 hover:text-slate-800 font-medium underline-offset-4 hover:underline"
                    >
                        오늘 하루 보지 않기
                    </button>
                    <button
                        onClick={() => closePopup()}
                        className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
