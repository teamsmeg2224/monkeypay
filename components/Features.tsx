"use client";

import { Clock, Headphones, TrendingUp, Lock, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4"></div>

      <div className="container-main">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-semibold mb-6 neon-glow"
          >
            <ShieldCheck size={16} />
            <span>정식 등록 업체 안심 거래</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            가장 안전하고 투명한<br />
            <span className="text-gradient">현금화 서비스</span>를 경험하세요
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-desc"
          >
            소액결제, 정보이용료, 상품권까지.<br className="md:hidden" /> 
            복잡한 절차 없이 AI 시스템으로 즉시 입금받으실 수 있습니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Speed (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass rounded-2xl p-8 md:p-10 card-hover relative overflow-hidden group border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
              <div className="flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow-pink">
                  <Clock size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors">평균 5분 이내 즉시 입금</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  AI 자동 매입 시스템이 365일 실시간으로 처리하여<br />
                  신청 즉시 고객님의 계좌로 안전하게 입금해드립니다.
                </p>
              </div>
              <div className="w-full md:w-auto glass-strong rounded-xl p-5 flex flex-col gap-3 min-w-[200px] border border-purple-500/20">
                <div className="flex items-center justify-between">
                   <span className="text-sm text-gray-400 font-medium">현재 대기</span>
                   <div className="flex items-center gap-1.5">
                     <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                     <span className="text-sm font-bold text-white">원활</span>
                   </div>
                </div>
                <div className="h-px bg-white/10 w-full"></div>
                <div className="flex items-center justify-between">
                   <span className="text-sm text-gray-400 font-medium">평균 소요</span>
                   <span className="text-xl font-black text-orange-400">3분</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Security (Small, Dark) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 glass-strong rounded-2xl p-8 md:p-10 card-hover relative overflow-hidden group text-white flex flex-col justify-between min-h-[320px] border border-purple-500/30 neon-glow"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl -ml-10 -mb-10 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Lock size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-3">철저한 보안</h3>
              <p className="text-gray-300 leading-relaxed">
                개인정보는 암호화되어 처리되며, 거래 종료 즉시 영구 파기됩니다.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-gray-400">
               <ShieldCheck size={16} className="text-green-400" />
               <span>SSL 보안 연결 적용</span>
            </div>
          </motion.div>

          {/* Card 3: Best Rate (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-1 glass rounded-2xl p-8 md:p-10 card-hover group flex flex-col justify-between min-h-[320px] border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow">
                <TrendingUp size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-400 transition-colors">업계 최고가</h3>
              <p className="text-gray-400 leading-relaxed">
                불필요한 수수료 거품을 완전히 뺐습니다. 고객님께 최대 현금을 약속합니다.
              </p>
            </div>
          </motion.div>

          {/* Card 4: 24/7 Support (Large, Gradient) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 rounded-2xl p-8 md:p-10 card-hover relative overflow-hidden group text-white border border-purple-500/30"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Headphones size={24} className="text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 glass-strong rounded-full text-sm font-medium border border-white/20">365일 연중무휴</span>
                </div>
                <h3 className="text-2xl font-black mb-3">24시간 언제든 깨어있습니다</h3>
                <p className="text-purple-100 text-lg">
                  새벽 3시에도, 주말/공휴일에도 전문 상담원이<br />
                  항시 대기중입니다. 편하게 문의주세요.
                </p>
              </div>
              <div className="glass-strong border border-white/20 backdrop-blur-md rounded-xl px-6 py-5 min-w-[240px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-100">상담원 연결</span>
                  <Zap size={16} className="text-yellow-300 fill-yellow-300" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black">즉시 가능</span>
                </div>
                <div className="mt-3 h-1.5 bg-white/20 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-[95%] rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
