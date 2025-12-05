"use client";

import { Clock, Headphones, TrendingUp, Lock, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4"></div>

      <div className="container-main">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6"
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
            <span className="text-blue-600">현금화 서비스</span>를 경험하세요
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
            className="md:col-span-2 bg-white rounded-[2rem] border border-slate-100 p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
              <div className="flex-1">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Clock size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">평균 5분 이내 즉시 입금</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  AI 자동 매입 시스템이 365일 실시간으로 처리하여<br />
                  신청 즉시 고객님의 계좌로 안전하게 입금해드립니다.
                </p>
              </div>
              <div className="w-full md:w-auto bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 p-5 shadow-lg flex flex-col gap-3 min-w-[200px]">
                <div className="flex items-center justify-between">
                   <span className="text-sm text-slate-500 font-medium">현재 대기</span>
                   <div className="flex items-center gap-1.5">
                     <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                     <span className="text-sm font-bold text-slate-900">원활</span>
                   </div>
                </div>
                <div className="h-px bg-slate-100 w-full"></div>
                <div className="flex items-center justify-between">
                   <span className="text-sm text-slate-500 font-medium">평균 소요</span>
                   <span className="text-xl font-bold text-orange-600">3분</span>
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
            className="md:col-span-1 bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-white flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -ml-10 -mb-10 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md group-hover:rotate-6 transition-transform duration-300 border border-white/10">
                <Lock size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">철저한 보안</h3>
              <p className="text-slate-300 leading-relaxed">
                개인정보는 암호화되어 처리되며, 거래 종료 즉시 영구 파기됩니다.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-slate-400">
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
            className="md:col-span-1 bg-white rounded-[2rem] border border-slate-100 p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">업계 최고가</h3>
              <p className="text-slate-600 leading-relaxed">
                불필요한 수수료 거품을 완전히 뺐습니다. 고객님께 최대 현금을 약속합니다.
              </p>
            </div>
          </motion.div>

          {/* Card 4: 24/7 Support (Large, Blue) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 bg-blue-600 rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <Headphones size={24} />
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">365일 연중무휴</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">24시간 언제든 깨어있습니다</h3>
                <p className="text-blue-100 text-lg">
                  새벽 3시에도, 주말/공휴일에도 전문 상담원이<br />
                  항시 대기중입니다. 편하게 문의주세요.
                </p>
              </div>
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl px-6 py-5 min-w-[240px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-100">상담원 연결</span>
                  <Zap size={16} className="text-yellow-300 fill-yellow-300" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">즉시 가능</span>
                </div>
                <div className="mt-3 h-1.5 bg-black/20 rounded-full overflow-hidden">
                   <div className="h-full bg-green-400 w-[95%] rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
