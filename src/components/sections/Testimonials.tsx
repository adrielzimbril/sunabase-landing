"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ArrowLeft, ArrowRight, Globe, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Alexander Voss",
    role: "Lead Engineer @ Chronos",
    content: "The most robust SQL infrastructure we've integrated. Sunabase handles our heavy query loads without breaking a sweat. The SQL Editor experience is second to none.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander",
    source: "Twitter",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Zenith Labs",
    content: "Switching to Sunabase reduced our database latency by 60%. The real-time change data capture is exactly what we needed for our real-time dashboard.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    source: "Web",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Full-stack Developer",
    content: "I've tried every database provider out there. Sunabase's edge functions and integrated auth make it the obvious choice for building high-scale modern apps.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    source: "Twitter",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "CTO, Forge Labs",
    content: "Security is our top priority. Sunabase's row-level security and enterprise features give us the peace of mind we need for our clients' sensitive production data.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    source: "Web",
    rating: 5,
  }
];

export const Testimonials = () => {
  const [cards, setCards] = useState(testimonials);

  const shiftCard = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const lastCard = newCards.pop();
      if (lastCard) newCards.unshift(lastCard);
      return newCards;
    });
  };

  useEffect(() => {
    const timer = setInterval(shiftCard, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-20 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content Column */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <Star className="w-3 h-3 text-emerald-500 fill-emerald-500" />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Developer Love</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]"
            >
              Loved by <br />
              <span className="text-zinc-500">thousands of</span> <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-emerald-200">builders.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-400 max-w-lg leading-relaxed font-manrope font-medium mx-auto lg:mx-0"
            >
              Don't just take our word for it. Join the elite group of developers who have scaled their infrastructure with Sunabase.
            </motion.p>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
               <div className="text-center">
                 <p className="text-3xl font-semibold text-white tracking-tight">12k+</p>
                 <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest mt-1">Stars</p>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div className="text-center">
                 <p className="text-3xl font-semibold text-white tracking-tight">99.9%</p>
                 <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest mt-1">Satisfaction</p>
               </div>
            </div>
          </div>

          {/* 3D Stack Column */}
          <div className="lg:w-1/2 relative h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center w-full">
            <div className="relative w-full max-w-[420px] h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {cards.map((testimonial, index) => {
                  const isTop = index === cards.length - 1;
                  const isNext = index === cards.length - 2;
                  const isThird = index === cards.length - 3;
                  
                  // Only render top 3 for performance and clean look
                  if (index < cards.length - 3) return null;

                  return (
                    <motion.div
                      key={testimonial.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ 
                        opacity: isTop ? 1 : isNext ? 0.9 : 0.7,
                        scale: isTop ? 1 : isNext ? 0.94 : 0.88,
                        y: isTop ? 0 : isNext ? -30 : -60,
                        zIndex: index,
                      }}
                      exit={{ opacity: 0, x: 200, rotate: 20, scale: 0.8 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20 
                      }}
                      className={cn(
                        "absolute w-full p-8 rounded-[2.5rem] border border-white/8 shadow-2xl backdrop-blur-2xl",
                        isTop ? "bg-linear-to-br from-zinc-900 to-black" : "bg-zinc-900/40"
                      )}
                    >
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/5 shadow-lg">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-base font-medium text-zinc-100 tracking-tight">{testimonial.name}</h4>
                            <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                          {testimonial.source === "Twitter" ? <X className="w-4 h-4 text-emerald-400" /> : <Globe className="w-4 h-4 text-emerald-400" />}
                        </div>
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-4 -left-2 w-8 h-8 text-emerald-500/10" />
                        <p className="text-lg md:text-2xl font-medium text-white leading-relaxed tracking-tight relative z-10 font-manrope">
                          {testimonial.content}
                        </p>
                      </div>

                      <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                         <div className="flex gap-1">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                           ))}
                         </div>
                         <span className="text-[10px] font-medium text-white/80 uppercase tracking-widest">Verified User</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};
