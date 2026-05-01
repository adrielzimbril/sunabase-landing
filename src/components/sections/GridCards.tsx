"use client";

import React from "react";
import { motion } from "motion/react";
import { Database, Code, GitPullRequest, Lock, ArrowRight, Shield, Table, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const DatabaseCard = () => {
  return (
    <div 
      className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] backdrop-blur-lg border border-white/10"
    >
      {/* Visual Header */}
      <div 
        className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center"
        style={{ 
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 90%, transparent)" 
        }}
      >
        <div className="overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.07] via-transparent to-transparent opacity-50 absolute inset-0">
          {/* Background Grid Pattern */}
          <div 
            className="[mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] opacity-30 absolute inset-0" 
            style={{ 
              backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)", 
              backgroundSize: "20px 20px" 
            }}
          />
          
          {/* Floating Widget: Tables List (Top Left) */}
          <motion.div 
            initial={{ y: 20, rotate: -6, opacity: 0 }}
            whileInView={{ y: 0, rotate: -6, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-10 left-10 w-32 bg-zinc-900/60 border border-white/10 rounded-xl p-3 backdrop-blur-sm shadow-xl transform transition-transform hover:scale-105 duration-500"
          >
            <div className="flex items-center gap-2 mb-3">
              <Table className="w-3 h-3 text-emerald-500/70" />
              <div className="h-1 w-12 bg-white/20 rounded-full" />
            </div>
            <div className="space-y-2">
              {["users", "profiles", "orders"].map((table, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                  <div className="h-1 bg-white/10 rounded-full" style={{ width: `${(i+1)*15}px` }} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Widget: Latency Status (Top Right) */}
          <motion.div 
            initial={{ y: -20, rotate: 12, opacity: 0 }}
            whileInView={{ y: 0, rotate: 12, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-8 right-12 w-24 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg backdrop-blur-sm flex items-center justify-center gap-2 shadow-lg transform transition-transform hover:scale-105 duration-500"
          >
            <Zap className="w-3 h-3 text-emerald-400" />
            <span className="font-mono text-[10px] text-emerald-200/70 font-medium tracking-wider">0.8ms</span>
          </motion.div>

          {/* Floating Widget: Query Stats (Bottom Right) */}
          <motion.div 
            initial={{ x: 20, rotate: 3, opacity: 0 }}
            whileInView={{ x: 0, rotate: 3, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 right-10 w-24 bg-zinc-900/60 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm shadow-xl transform transition-transform hover:scale-105 duration-500"
          >
            <div className="flex justify-between mb-2">
              <div className="h-1 w-8 bg-white/20 rounded-full" />
            </div>
            <div className="h-12 w-full flex items-end gap-1 px-0.5">
              {[40, 70, 45, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-[2px] border-t border-x border-emerald-500/30" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>
          
          {/* Decorative Element: SQL Icon (Bottom Left) */}
          <div className="absolute bottom-6 left-12 w-14 h-14 border border-dashed border-white/10 rounded-lg -rotate-3 opacity-30 flex items-center justify-center">
            <Code className="w-6 h-6 text-white/20" />
          </div>
        </div>
        
        {/* Database Visual Composition */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 transform group-hover:scale-105 transition-transform duration-500 ease-out"
        >
          <div className="w-28 h-32 relative flex flex-col items-center">
            {/* Cylinder representation of a DB */}
            <div className="w-20 h-6 bg-zinc-800 rounded-[100%] border border-white/20 absolute top-0 z-30 shadow-lg" />
            <div className="w-20 h-24 bg-gradient-to-b from-zinc-800 to-zinc-900 border-x border-white/10 relative mt-3 z-20 overflow-hidden">
               {/* Shine effect on cylinder */}
               <div className="absolute left-4 top-0 bottom-0 w-4 bg-white/5 blur-sm" />
               {/* Data lines */}
               <div className="absolute inset-0 flex flex-col justify-around py-4 opacity-20">
                 {[1,2,3].map(i => <div key={i} className="h-[1px] w-full bg-white/50" />)}
               </div>
            </div>
            <div className="w-20 h-6 bg-zinc-900 rounded-[100%] border-x border-b border-white/10 absolute bottom-1 z-10" />
            
            {/* Icon Overlay */}
             <div className="absolute -bottom-1 -right-3 w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg shadow-black/50">
               <Database className="w-5 h-5 text-emerald-500" />
            </div>
          </div>
        </motion.div>
        
        {/* Subtle Grid Pattern Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none mix-blend-overlay">
          <defs>
            <pattern id="grid-pattern-db" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-db)" />
        </svg>
      </div>
      
      {/* Card Content */}
      <div className="mt-auto pt-8 pr-10 pb-10 pl-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight font-manrope">Atomic SQL</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-sans">
          Distributed, high-performance PostgreSQL with native vector support. Scale to petabytes with automatic sharding and zero cold starts.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 text-emerald-400 hover:text-white transition-colors text-sm font-medium font-sans pb-1 border-b border-transparent hover:border-emerald-400/50 group/link">
            Documentation
            <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
          </a>
          <span className="text-zinc-700">|</span>
          <span className="text-xs text-zinc-500 font-mono">v16.2 Optimized</span>
        </div>
      </div>
    </div>
  );
};

const AuthCard = () => {
  return (
    <div 
      className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] backdrop-blur-lg border border-white/10"
    >
      {/* Visual Header */}
      <div 
        className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center"
        style={{ 
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 85%, transparent)" 
        }}
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
        
        {/* Orbital Visualization Container */}
        <div className="flex w-full h-full relative perspective-[1000px] items-center justify-center">
          
          {/* Outer Orbit Ring */}
          <div className="absolute w-[260px] h-[260px] border border-dashed border-white/5 rounded-full flex items-center justify-center opacity-60">
             {/* Status Pill on Orbit */}
             <div className="absolute -top-3 bg-zinc-900 border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-lg z-10">
                <Shield className="w-2.5 h-2.5 text-emerald-500" />
                <span className="text-[9px] font-mono text-zinc-400 tracking-tight">Zero-Trust Active</span>
             </div>
          </div>

          {/* Inner Orbit Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-40 h-40 border border-dashed border-white/10 rounded-full flex items-center justify-center"
          >
            {/* Small Dot on Inner Orbit */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full" />
          </motion.div>

          {/* Center Hub: Auth */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative z-20 w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center group/hub cursor-pointer transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]"
          >
            <div className="group-hover/hub:opacity-100 transition-opacity duration-500 bg-white/5 opacity-0 rounded-2xl absolute inset-0" />
            <Lock className="w-8 h-8 text-white/90 group-hover/hub:text-white transition-colors" strokeWidth={1.5} />
          </motion.div>

          {/* Satellite 1: User Identity */}
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              x: [0, 0],
              y: [0, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full pointer-events-none"
          >
            <div 
              className="absolute top-[25%] right-[28%] z-10 pointer-events-auto hover:scale-110 transition-transform duration-300 cursor-pointer group/sat"
            >
                <div className="w-10 h-10 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10 ring-1 ring-white/5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover/sat:opacity-100 transition-opacity px-2 py-0.5 bg-black border border-white/10 rounded text-[9px] text-white whitespace-nowrap pointer-events-none">Biometric Key</div>
            </div>
          </motion.div>

          {/* Satellite 2: OAuth Providers */}
          <motion.div 
            animate={{ 
              rotate: [360, 0],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full pointer-events-none"
          >
            <div className="absolute bottom-[28%] left-[30%] z-10 pointer-events-auto hover:scale-110 transition-transform duration-300 cursor-pointer">
                 <div className="w-9 h-9 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10 ring-1 ring-white/5">
                    <GitPullRequest className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                </div>
            </div>
          </motion.div>
          
          {/* Satellite 3: MFA/Dots */}
          <div className="absolute top-[20%] left-[45%] w-2 h-2 bg-zinc-700 rounded-full border border-white/10" />
          <div className="absolute bottom-[20%] right-[42%] w-1.5 h-1.5 bg-zinc-700 rounded-full border border-white/10" />

        </div>
      </div>
      
      {/* Card Content */}
      <div className="mt-auto pt-8 pr-10 pb-10 pl-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight font-manrope">Zero-Trust Identity</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-sans">
          Cryptographically secure authentication with hardware-level RLS. Integrated biometric passkeys and enterprise-grade RBAC protocols.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Passkeys", "MFA", "RBAC", "SSO"].map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AutomationCard = () => {
  return (
    <div 
      className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] backdrop-blur-lg border border-white/10"
    >
      {/* Visual Header */}
      <div 
        className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center"
        style={{ 
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 85%, transparent)" 
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,207,142,0.08),transparent_70%)]" />
        
        {/* Workflow Visualization */}
        <div className="relative w-full h-full flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-90">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 240">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(62,207,142,0)" />
                <stop offset="50%" stopColor="rgba(62,207,142,0.6)" />
                <stop offset="100%" stopColor="rgba(62,207,142,0)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Connection Lines */}
            <path d="M 100,120 L 160,120 M 240,120 L 300,120" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
            <motion.path 
              d="M 100,120 L 160,120" 
              stroke="url(#flowGradient)" 
              strokeWidth="2.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              filter="url(#glow)"
            />
            <motion.path 
              d="M 240,120 L 300,120" 
              stroke="url(#flowGradient)" 
              strokeWidth="2.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
              filter="url(#glow)"
            />

            {/* Floating Data Packets */}
            <motion.circle
              r="3"
              fill="#3ECF8E"
              filter="url(#glow)"
              initial={{ cx: 100, cy: 120, opacity: 0 }}
              animate={{ cx: 160, cy: 120, opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              r="3"
              fill="#3ECF8E"
              filter="url(#glow)"
              initial={{ cx: 240, cy: 120, opacity: 0 }}
              animate={{ cx: 300, cy: 120, opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            />
          </svg>

          <div className="flex gap-8 md:gap-16 relative z-10 items-center w-full max-w-lg justify-center">
            {/* Input Node (Database Webhook) */}
            <div className="relative group/db">
              <div className="w-14 h-14 rounded-2xl bg-[#0f1714] border border-[#3ECF8E]/20 flex items-center justify-center shadow-lg transition-transform group-hover/db:scale-105 duration-300">
                <Database className="w-6 h-6 text-[#3ECF8E]" />
              </div>
              <div className="absolute -top-3 -left-2 px-2 py-0.5 rounded bg-[#3ECF8E]/20 border border-[#3ECF8E]/30 backdrop-blur-md">
                <span className="text-[7px] font-medium text-[#3ECF8E] uppercase tracking-wider">ON INSERT</span>
              </div>
            </div>

            {/* Compute Node (Edge Function) */}
            <div className="relative group/compute">
              <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-[#1c2c24] to-black border border-[#3ECF8E]/40 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(62,207,142,0.3)] transition-transform group-hover/compute:scale-110 duration-500">
                <div className="absolute inset-0 bg-[#3ECF8E]/5 rounded-[1.5rem] animate-pulse" />
                <Code className="w-8 h-8 text-white/90 drop-shadow-[0_0_10px_rgba(62,207,142,0.8)]" strokeWidth={1.5} />
              </div>
              {/* Floating tags */}
              <div className="absolute -right-6 -top-2 px-2 py-1 rounded border border-[#3ECF8E]/20 bg-black/60 backdrop-blur-md shadow-lg">
                <span className="text-[8px] font-bold text-[#3ECF8E] tracking-widest uppercase">Edge</span>
              </div>
              <div className="absolute -left-6 -bottom-2 px-2 py-1 rounded border border-white/10 bg-black/60 backdrop-blur-md shadow-lg">
                <span className="text-[8px] font-bold text-zinc-300 tracking-widest uppercase">Deno</span>
              </div>
            </div>

            {/* Output Node (API/Third Party) */}
            <div className="relative group/api">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl opacity-80 transition-transform group-hover/api:scale-105 duration-300">
                <Globe className="w-6 h-6 text-zinc-400 group-hover/api:text-white transition-colors" />
              </div>
              <div className="absolute -bottom-3 -right-2 px-2 py-0.5 rounded bg-zinc-800 border border-white/10 backdrop-blur-md">
                <span className="text-[7px] font-medium text-zinc-400 uppercase tracking-wider">STRIPE API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="mt-auto pt-8 pr-10 pb-10 pl-10 bg-gradient-to-t from-black/40 to-transparent">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/20 shadow-[0_0_15px_rgba(62,207,142,0.1)]">
            <Zap className="w-5 h-5 fill-[#3ECF8E]/20" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight font-manrope">Realtime Edge Hooks</h3>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-medium">
          Trigger globally distributed Edge Functions directly from database mutations. Build event-driven architectures with zero infrastructure overhead.
        </p>
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
           <div className="flex gap-6">
             <div className="flex flex-col gap-1">
               <span className="text-[9px] font-medium text-white/80 uppercase tracking-widest">Global Latency</span>
               <div className="flex items-center gap-1.5">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
                 <span className="text-sm font-bold text-[#3ECF8E]">&lt; 10ms</span>
               </div>
             </div>
             <div className="flex flex-col gap-1">
               <span className="text-[9px] font-medium text-white/80 uppercase tracking-widest">Cold Start</span>
               <div className="flex items-center gap-1.5">
                 <span className="text-sm font-bold text-white">0ms</span>
               </div>
             </div>
           </div>
           <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#3ECF8E] group-hover:border-[#3ECF8E] transition-all duration-300">
             <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
           </button>
        </div>
      </div>
    </div>
  );
};
export const GridCards = () => {
  return (
    <section className="relative z-20 mx-auto mb-32 w-full max-w-7xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-4 h-full">
          <DatabaseCard />
        </div>
        <div className="lg:col-span-2 h-full">
          <AuthCard />
        </div>
        <div className="lg:col-span-6 h-full">
          <AutomationCard />
        </div>
      </div>
    </section>
  );
};

