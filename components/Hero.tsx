"use client";

import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, MessageCircle, CheckCircle2 } from "lucide-react";
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
      // 0: 초기 상태
      await new Promise(r => setTimeout(r, 2000));
      setStep(1); // 1: 알림 등장
      await new Promise(r => setTimeout(r, 2500));
      setStep(2); // 2: 입금 완료 (리스트 추가 + 잔액 증가)
      await new Promise(r => setTimeout(r, 4000));
      setStep(0); // 리셋
    };

    cycle();
    const interval = setInterval(cycle, 8500); // 전체 사이클 시간
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-pattern -z-20"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4 animate-pulse" style={{ animationDuration: '12s' }}></div>

      <div className="container-main flex flex-col items-center text-center z-10 relative">
        
        {/* Trust Badge */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-600">실시간 입금 시스템 가동 중</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase"
          >
            <span className="text-lg">👑</span> 고객 만족도 99% 달성
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 text-balance"
        >
          소액결제 · 상품권<br />
          <span className="text-gradient">가장 안전한 현금화</span>
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium leading-relaxed text-balance"
        >
          복잡한 절차 없이 상담부터 입금까지 단 5분.<br className="hidden md:block" />
          업계 1위 시드티켓에서 <span className="text-slate-900 font-bold">수수료 최저가</span>로 진행하세요.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-20"
        >
          <a
            href="https://open.kakao.com" // TODO: 실제 오픈채팅 링크로 변경 필요
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#FEE500] text-[#191919] font-bold text-lg px-8 py-4 rounded-2xl hover:bg-[#FDD835] transition-all flex items-center justify-center gap-3 shadow-lg shadow-yellow-400/20 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto min-w-[240px]"
          >
            <MessageCircle className="w-6 h-6" fill="currentColor" />
            <span>카카오톡 상담하기</span>
            <ArrowRight className="w-5 h-5 opacity-50 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:010-2591-2329"
            className="group bg-slate-900 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-slate-900/20 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto min-w-[240px]"
          >
            <Phone className="w-6 h-6" />
            <span>010-2591-2329</span>
          </a>
        </motion.div>

        {/* Phone Mockup UI (Live Animation) */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.2 }}
          className="w-full max-w-[400px] mx-auto perspective-1000 relative z-10"
        >
          {/* Glow behind phone */}
          <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-2xl rounded-[3rem] -z-10"></div>
          
          <div className="bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden relative mx-auto ring-1 ring-slate-900/5 h-[500px] flex flex-col">
            
            {/* Status Bar */}
            <div className="h-12 bg-white border-b border-slate-50 flex justify-between items-center px-6 shrink-0 z-20">
               <div className="text-xs font-bold text-slate-900">9:41</div>
               <div className="flex gap-1.5">
                 <div className="w-4 h-2.5 bg-slate-900 rounded-[1px]"></div>
                 <div className="w-0.5 h-2.5 bg-slate-300"></div>
               </div>
            </div>

            {/* App Content */}
            <div className="flex-1 bg-slate-50 p-6 relative overflow-hidden flex flex-col">
              
              {/* App Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1">나의 자산</div>
                  <div className="text-2xl font-bold text-slate-900">1,245,000원</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shadow-inner">
                   <span className="text-lg">👤</span>
                </div>
              </div>

              {/* Transaction List */}
              <div className="flex-1 space-y-4">
                <div className="text-sm font-bold text-slate-400 mb-2">최근 활동</div>
                
                <AnimatePresence mode="popLayout">
                   {step >= 2 && (
                    <motion.div
                      layout
                      key="new-transaction"
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between relative z-10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">시드티켓</div>
                          <div className="text-xs text-slate-500">방금 전</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">+ 465,000</div>
                        <div className="text-[10px] text-slate-400">입금완료</div>
                      </div>
                    </motion.div>
                   )}
                   
                   <motion.div
                     layout
                     key="old-transaction"
                     className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between opacity-60"
                   >
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                          <span className="text-lg">☕️</span>
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">스타벅스</div>
                          <div className="text-xs text-slate-500">1시간 전</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">- 8,200</div>
                        <div className="text-[10px] text-slate-400">결제완료</div>
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
                    className="absolute top-4 left-4 right-4 bg-slate-900/95 backdrop-blur text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0 animate-pulse">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-300 font-medium mb-0.5">입금 알림</div>
                      <div className="text-sm font-bold">465,000원이 입금되었습니다.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Bar Indicator */}
            <div className="h-1.5 w-32 bg-slate-900 rounded-full mx-auto mb-2 absolute bottom-2 left-1/2 -translate-x-1/2 opacity-20"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
