"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Shield, Database, Cpu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    tagline: "Hobby projects.",
    description: "Perfect for passion projects and simple applications.",
    icon: <Database className="w-5 h-5" />,
    features: [
      "500MB Database space",
      "2GB Bandwidth",
      "50MB File storage",
      "Community Support",
      "1-day log retention"
    ],
    color: "emerald"
  },
  {
    id: "pro",
    name: "Pro",
    price: 25,
    tagline: "Scale to infinity.",
    description: "Production-ready infrastructure with no limits on your scale.",
    icon: <Zap className="w-5 h-5" />,
    popular: true,
    features: [
      "8GB Database space",
      "50GB Bandwidth",
      "100GB File storage",
      "Email support",
      "7-day log retention",
      "Custom Edge Functions"
    ],
    color: "emerald"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    tagline: "Mission critical.",
    description: "Dedicated infrastructure and zero-trust compliance for enterprise scale.",
    icon: <Shield className="w-5 h-5" />,
    features: [
      "Dedicated PostgreSQL instance",
      "Unlimited Bandwidth",
      "SSO & SAML",
      "Dedicated Support Manager",
      "99.9% Uptime SLA",
      "Custom VPC Peering"
    ],
    color: "zinc"
  }
];

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <section className="relative z-20 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20"
          >
            <Zap className="w-3 h-3 text-emerald-500 fill-emerald-500" />
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Transparent Pricing</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight leading-[0.95]"
          >
            PRICING THAT <br />
            <span className="text-white/80">SCALES WITH</span> <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-200">YOUR VISION.</span>
          </motion.h2>

          {/* Toggle */}
          <div className="pt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-md">
              {["MONTHLY", "ANNUALLY"].map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle.toLowerCase() as any)}
                  className={cn(
                    "rounded-full px-8 py-2.5 text-[10px] font-bold tracking-widest transition-all duration-300",
                    billingCycle === cycle.toLowerCase()
                      ? "bg-zinc-800 text-white shadow-lg"
                      : "text-gray-500 hover:text-gray-300"
                  )}
                >
                  {cycle}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500",
                plan.popular 
                  ? "bg-gradient-to-b from-[#1c2c24] to-black border-[#3ECF8E]/30 shadow-[0_30px_60px_-15px_rgba(62,207,142,0.15)] scale-[1.02] z-10" 
                  : "bg-zinc-950/40 border-white/[0.05] hover:border-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/20">
                   <span className="text-[10px] font-medium text-black uppercase tracking-widest">Most Popular</span>
                </div>
              )}

              <div className="mb-8">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-colors",
                  plan.popular ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-white/5 border-white/10 text-zinc-500"
                )}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">{plan.tagline}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1.5">
                <span className="text-6xl font-medium tracking-tighter text-white font-manrope">
                  {typeof plan.price === "number" 
                    ? `$${billingCycle === "annually" ? Math.floor(plan.price * 0.8) : plan.price}`
                    : plan.price}
                </span>
                {typeof plan.price === "number" && (
                  <span className="text-white/80 font-bold text-sm">/mo</span>
                )}
              </div>

              <p className="text-sm text-zinc-400 font-medium leading-relaxed mb-10">
                {plan.description}
              </p>

              <div className="flex-1 space-y-4 mb-12">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-500" strokeWidth={3} />
                    </div>
                    <span className="text-xs font-bold text-zinc-300 tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "group relative w-full overflow-hidden rounded-2xl py-5 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                plan.popular 
                  ? "bg-[#3ECF8E] text-black shadow-[0_20px_40px_-10px_rgba(62,207,142,0.3)] hover:bg-[#34b47a]" 
                  : "bg-zinc-900 text-zinc-100 border border-white/5"
              )}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Choose {plan.name} <ArrowRight className="w-4 h-4" />
                </span>
                {plan.popular && (
                  <div className="absolute inset-0 bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
