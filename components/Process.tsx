"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "간편 상담 신청",
    desc: "카카오톡이나 전화로\n원하는 금액을 말씀해주세요.",
    icon: MessageCircle,
    gradient: "from-purple-500 to-pink-500",
    glow: "neon-glow-pink"
  },
  {
    num: "02",
    title: "초고속 한도 조회",
    desc: "본인 인증 후 최대\n이용 한도를 즉시 확인합니다.",
    icon: Search,
    gradient: "from-pink-500 to-cyan-500",
    glow: "neon-glow-cyan"
  },
  {
    num: "03",
    title: "즉시 입금 완료",
    desc: "확인 즉시 고객님의\n계좌로 송금해드립니다.",
    icon: Wallet,
    gradient: "from-cyan-500 to-purple-500",
    glow: "neon-glow"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 -z-10"></div>
      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2 block">How it works</span>
            <h2 className="section-title">복잡한 서류 없이<br/>단 3단계로 끝납니다.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50 -z-10 border-t border-dashed border-purple-500/30"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`glass rounded-2xl p-8 card-hover h-full text-center relative z-10 border border-white/5 ${step.glow}`}>
                <div className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative`}>
                   <step.icon className="w-10 h-10 text-white" />
                   <div className="absolute -right-2 -top-2 w-10 h-10 glass-strong rounded-full flex items-center justify-center border border-purple-500/30 font-black text-white text-lg shadow-lg">
                     {index + 1}
                   </div>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line text-lg">
                  {step.desc}
                </p>
                
                {index < 2 && (
                  <div className="md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 text-purple-400 glass-strong rounded-full p-1 border border-purple-500/30">
                    <ArrowRight className="rotate-90" size={20} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
