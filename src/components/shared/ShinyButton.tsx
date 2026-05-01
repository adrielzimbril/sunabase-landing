"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ShinyButton = ({ children, className, onClick }: ShinyButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-full px-12 py-5 text-sm font-medium tracking-widest uppercase text-white transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] focus:outline-none",
        className
      )}
    >
      {/* Full Border Beam */}
      <div className="absolute inset-0 -z-20 overflow-hidden rounded-full p-[1px]">
        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#10b981_360deg)]" />
        <div className="absolute inset-[1px] rounded-full bg-black" />
      </div>

      {/* Inner Background & Effects */}
      <div className="absolute inset-[2px] -z-10 overflow-hidden rounded-full bg-zinc-950">
        {/* Light Monotone Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent" />

        {/* Animated Dots Pattern */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Emerald Glow on Hover */}
        <div className="absolute bottom-0 left-1/2 h-1/2 w-2/3 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-2xl transition-colors duration-500 group-hover:bg-emerald-500/30" />
      </div>

      {/* Content */}
      <span className="relative z-10 font-sans text-white/90 transition-colors group-hover:text-white">
        {children}
      </span>
      <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
};
