"use client";

import React from "react";
import { motion } from "motion/react";
import { ShinyButton } from "@/components/shared/ShinyButton";
import { CheckCircle2 } from "lucide-react";

export const PricingCTA = () => {
  return (
    <section className="relative z-20 py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-6xl mb-8">
            Build your next big thing with <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Sunabase.</span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-400 mb-12">
            The high-fidelity backend platform for high-velocity teams. Architect secure, scalable applications with Atomic SQL, Zero-Trust Identity, and Global Edge Workflows.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[
              "Fast-Track Expert Support",
              "Private VPC Infrastructure",
              "Custom SQL Runtime",
              "99.99% Uptime SLA"
            ].map((feature, i) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <ShinyButton>
              Start Building Now
            </ShinyButton>
            <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mt-4">
              Instant setup — No credit card required
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 -z-10 opacity-20" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} 
      />
    </section>
  );
};
