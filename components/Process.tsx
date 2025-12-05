"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "간편 상담 신청",
    desc: "카카오톡이나 전화로\n원하는 금액을 말씀해주세요.",
    icon: MessageCircle,
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    num: "02",
    title: "초고속 한도 조회",
    desc: "본인 인증 후 최대\n이용 한도를 즉시 확인합니다.",
    icon: Search,
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    num: "03",
    title: "즉시 입금 완료",
    desc: "확인 즉시 고객님의\n계좌로 송금해드립니다.",
    icon: Wallet,
    color: "text-orange-600",
    bg: "bg-orange-100"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">How it works</span>
            <h2 className="section-title">복잡한 서류 없이<br/>단 3단계로 끝납니다.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10 border-t border-dashed border-slate-300"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full text-center relative z-10">
                <div className={`w-24 h-24 ${step.bg} rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300 relative`}>
                   <step.icon className={`w-10 h-10 ${step.color}`} />
                   <div className="absolute -right-2 -top-2 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-sm font-bold text-slate-900 text-lg">
                     {index + 1}
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed whitespace-pre-line text-lg">
                  {step.desc}
                </p>
                
                {index < 2 && (
                  <div className="md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 text-slate-300 bg-white rounded-full p-1 border border-slate-100">
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
