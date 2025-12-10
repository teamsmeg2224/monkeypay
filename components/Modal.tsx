"use client";

import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the modal should be hidden
        const hideUntil = localStorage.getItem("hideModalUntil");
        if (!hideUntil || new Date().getTime() > parseInt(hideUntil)) {
            setIsOpen(true);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDontShowToday = () => {
        // Calculate 24 hours from now
        const tomorrow = new Date();
        tomorrow.setHours(tomorrow.getHours() + 24);
        localStorage.setItem("hideModalUntil", tomorrow.getTime().toString());
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-[101]"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/5] sm:aspect-square w-full">
                            <Image
                                src="/banner.png"
                                alt="Event Banner"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Footer / Controls */}
                        <div className="bg-slate-900 p-4 flex items-center justify-between gap-3">
                            <button
                                onClick={handleDontShowToday}
                                className="text-slate-300 text-sm hover:text-white flex items-center gap-2 transition-colors"
                            >
                                <Check size={16} />
                                오늘 하루 보지 않기
                            </button>

                            <button
                                onClick={handleClose}
                                className="text-white text-sm font-bold bg-slate-700 px-4 py-2 rounded-xl hover:bg-slate-600 transition-colors"
                                aria-label="닫기"
                            >
                                닫기
                            </button>
                        </div>

                        {/* Absolute Close Button (Top-Right) */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur transition-all"
                        >
                            <X size={20} />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
