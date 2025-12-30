"use client";

import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

// Count Up Component
function Counter({ value }: { value: number }) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
}

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const cycle = async () => {
      await new Promise(r => setTimeout(r, 2000));
      setStep(1);
      await new Promise(r => setTimeout(r, 2500));
      setStep(2);
      await new Promise(r => setTimeout(r, 4000));
      setStep(0);
    };

    cycle();
    const interval = setInterval(cycle, 8500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0a0a0f] overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern -z-20"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 animate-neon-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4 animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container-main flex flex-col items-center text-center z-10 relative">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-strong px-6 py-3 rounded-full mb-8 inline-flex items-center gap-2 neon-glow"
        >
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm font-bold text-purple-300">업계 1위 신뢰 서비스</span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-8 text-balance"
        >
          소액결제 · 상품권<br />
          <span className="text-gradient animate-neon-pulse">가장 안전한 현금화</span>
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed text-balance"
        >
          복잡한 절차 없이 상담부터 입금까지 단 5분.<br className="hidden md:block" />
          업계 1위 <span className="text-purple-400 font-bold">몽키페이</span>에서 <span className="text-pink-400 font-bold">수수료 최저가</span>로 진행하세요.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-20"
        >
          <a
            href="https://open.kakao.com/o/sR4Kfk5h"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-strong px-8 py-4 rounded-xl font-bold text-lg text-white transition-all flex items-center justify-center gap-3 w-full sm:w-auto min-w-[240px] neon-glow-purple hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 text-purple-400" />
            <span>채팅 상담하기</span>
            <ArrowRight className="w-5 h-5 opacity-50 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:010-2591-2329"
            className="group glass-strong px-8 py-4 rounded-xl font-bold text-lg text-white transition-all flex items-center justify-center gap-3 w-full sm:w-auto min-w-[240px] neon-glow-cyan hover:scale-105"
          >
            <Phone className="w-6 h-6 text-cyan-400" />
            <span>010-2591-2329</span>
          </a>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-16 w-full max-w-2xl"
        >
          {[
            { label: "평균 입금", value: "5분", color: "purple" },
            { label: "고객 만족도", value: "99%", color: "pink" },
            { label: "연중무휴", value: "24/7", color: "cyan" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-6 text-center border border-white/5 hover:border-purple-500/30 transition-all">
              <div className={`text-3xl font-black mb-2 ${
                stat.color === 'purple' ? 'text-purple-400' :
                stat.color === 'pink' ? 'text-pink-400' : 'text-cyan-400'
              }`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Phone Mockup UI (Live Animation) */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.6, duration: 1, type: "spring", bounce: 0.2 }}
          className="w-full max-w-[400px] mx-auto perspective-1000 relative z-10"
        >
          {/* Glow behind phone */}
          <div className="absolute -inset-8 bg-gradient-to-b from-purple-500/30 to-pink-500/30 blur-3xl rounded-[3rem] -z-10 animate-neon-pulse"></div>
          
          <div className="bg-[#1a1a24] rounded-3xl border-2 border-purple-500/30 shadow-2xl overflow-hidden relative mx-auto ring-2 ring-purple-500/20 h-[500px] flex flex-col neon-glow">
            
            {/* Status Bar */}
            <div className="h-12 bg-[#252532] border-b border-white/5 flex justify-between items-center px-6 shrink-0 z-20">
               <div className="text-xs font-bold text-white">9:41</div>
               <div className="flex gap-1.5">
                 <div className="w-4 h-2.5 bg-purple-400 rounded-[1px]"></div>
                 <div className="w-0.5 h-2.5 bg-gray-600"></div>
               </div>
            </div>

            {/* App Content */}
            <div className="flex-1 bg-[#0a0a0f] p-6 relative overflow-hidden flex flex-col">
              
              {/* App Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-sm text-gray-400 font-medium mb-1">나의 자산</div>
                  <div className="text-2xl font-black text-white">1,245,000원</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                   <span className="text-lg">👤</span>
                </div>
              </div>

              {/* Transaction List */}
              <div className="flex-1 space-y-4">
                <div className="text-sm font-bold text-gray-500 mb-2">최근 활동</div>
                
                <AnimatePresence mode="popLayout">
                   {step >= 2 && (
                    <motion.div
                      layout
                      key="new-transaction"
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="glass rounded-xl p-4 flex items-center justify-between relative z-10 border border-purple-500/20 neon-glow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-white">몽키페이</div>
                          <div className="text-xs text-gray-400">방금 전</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-purple-400">+ 465,000</div>
                        <div className="text-[10px] text-gray-500">입금완료</div>
                      </div>
                    </motion.div>
                   )}
                   
                   <motion.div
                     layout
                     key="old-transaction"
                     className="glass rounded-xl p-4 flex items-center justify-between opacity-60 border border-white/5"
                   >
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center">
                          <span className="text-lg">☕️</span>
                        </div>
                        <div>
                          <div className="font-bold text-white">스타벅스</div>
                          <div className="text-xs text-gray-400">1시간 전</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">- 8,200</div>
                        <div className="text-[10px] text-gray-500">결제완료</div>
                      </div>
                   </motion.div>
                </AnimatePresence>
              </div>

              {/* Notification Toast */}
              <AnimatePresence>
                {step === 1 && (
                  <motion.div 
                    key="notification"
                    initial={{ y: -100, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -20, opacity: 0, scale: 0.95 }}
                    className="absolute top-4 left-4 right-4 glass-strong rounded-xl p-4 shadow-2xl flex items-center gap-3 z-50 border border-purple-500/30 neon-glow"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shrink-0 animate-pulse shadow-lg">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-300 font-medium mb-0.5">입금 알림</div>
                      <div className="text-sm font-bold text-white">465,000원이 입금되었습니다.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Bar Indicator */}
            <div className="h-1.5 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-2 absolute bottom-2 left-1/2 -translate-x-1/2 opacity-40"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
