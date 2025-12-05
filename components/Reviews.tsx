"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "김** 고객님",
    type: "직장인",
    date: "2025.11.28",
    content: "처음이라 걱정했는데 상담사분이 너무 친절하게 설명해주셔서 안심하고 진행했어요. 입금도 진짜 3분만에 들어오네요! 급할 때 최고입니다.",
    rating: 5
  },
  {
    name: "이** 고객님",
    type: "자영업",
    date: "2025.11.28",
    content: "가게 운영하다 급전이 필요해서 알아봤는데 여기가 수수료 제일 싸네요. 새벽인데도 바로 답장해주셔서 놀랐습니다. 감사합니다.",
    rating: 5
  },
  {
    name: "박** 고객님",
    type: "프리랜서",
    date: "2025.11.27",
    content: "다른 곳은 이것저것 요구하는게 많던데 여기는 절차가 정말 깔끔해요. 미납 있었는데도 잘 해결해주셔서 다행입니다. 추천합니다.",
    rating: 5
  },
  {
    name: "최** 고객님",
    type: "주부",
    date: "2025.11.27",
    content: "소액결제 현금화 처음 해보는데 생각보다 너무 쉽네요. 상담도 친절하고 입금도 빠르고... 다음 달에도 또 이용할 것 같아요.",
    rating: 5
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container-main">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-xs font-semibold mb-4">
             <Star size={12} className="fill-yellow-500 text-yellow-500" />
             <span>고객 만족도 99%</span>
          </div>
          <h2 className="section-title">고객님들의 <span className="text-blue-600">생생한 후기</span></h2>
          <p className="section-desc mx-auto">실제 이용하신 고객님들이 남겨주신 100% 리얼 후기입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-slate-200 w-10 h-10 transform group-hover:scale-110 group-hover:text-blue-100 transition-all duration-300" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-md text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">{review.name}</span>
                    <span className="text-[11px] px-2 py-0.5 bg-white border border-slate-200 text-slate-500 rounded-full font-medium">{review.type}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={`${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`} />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-4 font-medium">
                "{review.content}"
              </p>
              
              <div className="flex justify-between items-center border-t border-slate-200/50 pt-4 mt-4">
                 <span className="text-xs text-slate-400 font-medium">{review.date} 작성됨</span>
                 <span className="text-xs text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">인증된 후기</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
