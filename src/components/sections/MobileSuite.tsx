"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Search,
  Database,
  Activity,
  Zap,
  Terminal,
  Shield,
  Globe,
  Plus,
  Code,
  Settings,
  Users,
  ChevronRight,
  Server,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Sub-components for the Mobile Interface ---

const PulseIndicator = ({ color = "emerald" }: { color?: string }) => (
  <div className="relative flex h-2 w-2">
    <div className={cn(
      "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
      color === "emerald" ? "bg-emerald-400" : "bg-blue-400"
    )} />
    <div className={cn(
      "relative inline-flex h-2 w-2 rounded-full",
      color === "emerald" ? "bg-emerald-500" : "bg-blue-500"
    )} />
  </div>
);

const MiniChart = () => {
  return (
    <div className="flex items-end gap-[2px] h-10 w-24">
      {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 1.5, delay: i * 0.05, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="flex-1 bg-emerald-500/40 rounded-t-[2px]"
        />
      ))}
    </div>
  );
};

const PhoneDashboard = () => {
  return (
    <div className="flex flex-col h-full bg-[#030303] text-white font-sans overflow-hidden select-none">
      {/* Top Header */}
      <div className="px-6 pt-14 pb-4 flex items-center justify-between border-b border-white/[0.04] bg-[#030303]/80 backdrop-blur-3xl sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 flex items-center justify-center shadow-inner">
            <Database className="w-5 h-5 text-[#3ECF8E]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold text-[#3ECF8E] uppercase tracking-[0.2em]">Project</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-pulse" />
            </div>
            <h4 className="text-[14px] font-bold tracking-tight text-zinc-100">sunabase-core</h4>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.03] text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
            <Search className="w-4 h-4" />
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-[#3ECF8E]/30 shadow-lg cursor-pointer">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sunabase" alt="avatar" className="w-full h-full object-cover bg-zinc-900" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-5 py-5 space-y-4">
        {/* Real-time Monitor Card */}
        <div className="p-5 rounded-[2rem] bg-zinc-900/50 border border-white/[0.06] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3ECF8E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#3ECF8E]/10 blur-3xl rounded-full" />
          
          <div className="flex items-center justify-between mb-5 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#3ECF8E]/10 flex items-center justify-center">
                <Activity className="w-4 h-4 text-[#3ECF8E]" />
              </div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active Connections</span>
            </div>
            <div className="px-2 py-1 rounded-full bg-[#3ECF8E]/10 border border-[#3ECF8E]/20">
              <span className="text-[9px] font-bold text-[#3ECF8E]">LIVE</span>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 relative z-10">
            <div>
              <h3 className="text-5xl font-medium tracking-tighter text-white mb-1 font-mono">1,402</h3>
              <div className="flex items-center gap-1.5 text-[#3ECF8E]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="text-xs font-bold">+5.2% / min</span>
              </div>
            </div>
            <div className="flex-1 flex justify-end pb-1">
              <MiniChart />
            </div>
          </div>
        </div>

        {/* Database Explorer */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Tables</h4>
            <div className="w-7 h-7 rounded-xl bg-zinc-900/80 flex items-center justify-center border border-white/5 cursor-pointer hover:bg-zinc-800 transition-colors">
              <Plus className="w-4 h-4 text-zinc-400" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2.5">
            {[
              { name: "users", type: "public", rows: "1.2M", size: "450 MB", icon: <Users className="w-4 h-4" /> },
              { name: "posts", type: "public", rows: "450k", size: "2.1 GB", icon: <Globe className="w-4 h-4" /> },
              { name: "audit_logs", type: "system", rows: "8.4M", size: "12 GB", icon: <Shield className="w-4 h-4" /> }
            ].map((db, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 bg-zinc-900/40 border border-white/[0.04] rounded-[1.25rem] hover:bg-zinc-900/60 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform group-hover:border-[#3ECF8E]/30 shadow-inner">
                    <div className="text-zinc-400 group-hover:text-[#3ECF8E] transition-colors">
                      {db.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-200 tracking-tight">{db.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-zinc-500 font-medium tracking-tight bg-white/5 px-1.5 rounded">{db.type}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-zinc-100">{db.rows}</p>
                  <p className="text-[9px] font-medium text-zinc-500 uppercase tracking-wider">{db.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Center */}
        <div className="pt-0.5">
           <div className="p-2 rounded-[1.5rem] bg-zinc-900/40 border border-white/[0.03] grid grid-cols-4 gap-2">
              {[
                { icon: <Terminal className="w-4 h-4" />, label: "SQL" },
                { icon: <Code className="w-4 h-4" />, label: "Edge" },
                { icon: <Shield className="w-4 h-4" />, label: "Auth" },
                { icon: <Settings className="w-4 h-4" />, label: "Settings" }
              ].map((action, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 py-3 rounded-2xl hover:bg-white/[0.05] transition-colors cursor-pointer group">
                  <div className="text-zinc-400 group-hover:text-[#3ECF8E] transition-colors">
                    {action.icon}
                  </div>
                  <span className="text-[9px] font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">{action.label}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-8 pt-4 pb-8 border-t border-white/[0.05] flex justify-between items-center bg-[#030303]/90 backdrop-blur-3xl sticky bottom-0 z-20">
        <div className="flex flex-col items-center gap-1 cursor-pointer">
           <Database className="w-6 h-6 text-[#3ECF8E]" />
           <span className="text-[9px] font-bold text-[#3ECF8E]">Data</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
           <Zap className="w-6 h-6 text-white" />
           <span className="text-[9px] font-bold text-white">Functions</span>
        </div>
        
        {/* Floating Action Button */}
        <div className="relative -mt-8">
          <div className="absolute -inset-4 bg-[#3ECF8E]/20 blur-xl rounded-full" />
          <div className="w-14 h-14 rounded-2xl bg-[#3ECF8E] flex items-center justify-center shadow-lg shadow-[#3ECF8E]/40 relative z-10 border-4 border-[#030303] hover:scale-95 transition-transform cursor-pointer">
             <Plus className="w-6 h-6 text-black" strokeWidth={3} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
           <Server className="w-6 h-6 text-white" />
           <span className="text-[9px] font-bold text-white">Storage</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
           <Activity className="w-6 h-6 text-white" />
           <span className="text-[9px] font-bold text-white">Logs</span>
        </div>
      </div>
    </div>
  );
};

// --- Hardware Mockup Components ---

const STATUSES = [
  { label: "Syncing", color: "bg-[#3ECF8E]", shadow: "shadow-[0_0_12px_rgba(62,207,142,0.8)]" },
  { label: "Deploy", color: "bg-blue-400", shadow: "shadow-[0_0_12px_rgba(96,165,250,0.8)]" },
  { label: "Rec", color: "bg-red-500", shadow: "shadow-[0_0_12px_rgba(239,68,68,0.8)]" },
  { label: "Indexing", color: "bg-yellow-400", shadow: "shadow-[0_0_12px_rgba(250,204,21,0.8)]" }
];

const DynamicIsland = () => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUSES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const currentStatus = STATUSES[statusIndex];

  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[100] flex justify-center pointer-events-none">
       <motion.div 
          layout
          initial={{ width: 110, height: 32 }}
          whileHover={{ 
            width: 180, 
            height: 48,
            borderRadius: "24px",
            transition: { type: "spring", stiffness: 400, damping: 25 }
          }}
          className="bg-black rounded-full flex items-center justify-between px-3 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,1)] pointer-events-auto cursor-pointer group/island overflow-hidden min-w-[120px] gap-4"
       >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentStatus.label}
              initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 pl-1 shrink-0"
            >
               <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", currentStatus.color, currentStatus.shadow)} />
               <span className="text-[10px] font-bold text-zinc-300 group-hover/island:text-white tracking-widest uppercase font-mono transition-colors whitespace-nowrap">
                 {currentStatus.label}
               </span>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-1.5 pr-1 shrink-0">
             <div className={cn("w-1.5 h-1.5 rounded-full transition-colors opacity-50 group-hover/island:opacity-100", currentStatus.color)} />
             <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover/island:bg-zinc-600 transition-colors" />
          </div>
       </motion.div>
    </div>
  );
};

const IPhone17ProMax = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative group perspective-[2500px]">
      {/* Intense Background Glow */}
      <div className="absolute -inset-32 bg-[#3ECF8E]/10 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Side Buttons - Left (Action + Volume) */}
      <div className="absolute -left-[2.5px] top-[130px] w-[3px] h-[35px] rounded-l-md bg-gradient-to-b from-zinc-500 via-zinc-800 to-zinc-600 z-0 shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />
      <div className="absolute -left-[2.5px] top-[190px] w-[3px] h-[65px] rounded-l-md bg-gradient-to-b from-zinc-500 via-zinc-800 to-zinc-600 z-0 shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />
      <div className="absolute -left-[2.5px] top-[270px] w-[3px] h-[65px] rounded-l-md bg-gradient-to-b from-zinc-500 via-zinc-800 to-zinc-600 z-0 shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />

      {/* Side Button - Right (Power) */}
      <div className="absolute -right-[2.5px] top-[200px] w-[3px] h-[100px] rounded-r-md bg-gradient-to-b from-zinc-500 via-zinc-800 to-zinc-600 z-0 shadow-[2px_0_4px_rgba(0,0,0,0.5)]" />

      {/* Titanium Frame Layer */}
      <div className="relative p-[2px] bg-gradient-to-br from-zinc-400 via-zinc-800 to-zinc-500 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-700 transform-style-3d">
        {/* Polished Edge Detail */}
        <div className="p-[3px] bg-zinc-950 rounded-[3.4rem] shadow-inner overflow-hidden relative">
          {/* Main Bezel */}
          <div className="p-[8px] bg-black rounded-[3.3rem] relative overflow-hidden">
            
            {/* Screen Content Container */}
            <div className="bg-[#030303] w-[340px] h-[720px] rounded-[2.8rem] relative overflow-hidden ring-1 ring-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]">
              
              <DynamicIsland />

              {/* Status Bar */}
              <div className="absolute top-0 left-0 w-full px-8 pt-4 pb-2 flex justify-between items-center z-[90] text-[12px] font-semibold text-white">
                <span className="tracking-tight ml-2">9:41</span>
                <div className="flex items-center gap-2 mr-1">
                   <div className="flex gap-0.5 items-end h-[10px]">
                      <div className="w-[2px] h-[4px] bg-white rounded-full" />
                      <div className="w-[2px] h-[6px] bg-white rounded-full" />
                      <div className="w-[2px] h-[8px] bg-white rounded-full" />
                      <div className="w-[2px] h-[10px] bg-white/40 rounded-full" />
                   </div>
                   <span className="text-[10px] font-bold ml-1">5G</span>
                   <div className="w-6 h-3.5 rounded-[4px] border-[1.5px] border-white/40 p-[1px] relative">
                     <div className="w-[85%] h-full bg-white rounded-[1.5px]" />
                   </div>
                </div>
              </div>

              {/* Interface Content */}
              <div className="h-full w-full overflow-hidden">
                {children}
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/20 rounded-full z-50 backdrop-blur-xl" />
              
              {/* Realistic Screen Glare */}
              <div className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay">
                 <div className="absolute -top-[100%] -right-[50%] w-[200%] h-[200%] bg-gradient-to-b from-white/[0.08] via-transparent to-transparent -translate-y-1/2 translate-x-1/4 rotate-45" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] opacity-20" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export const MobileSuite = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="mobile" className="relative z-20 py-32 overflow-hidden bg-transparent">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(62,207,142,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 shadow-inner"
              >
                <div className="w-2 h-2 rounded-full bg-[#3ECF8E] animate-pulse" />
                <span className="text-[11px] font-bold text-[#3ECF8E] uppercase tracking-widest">Mobile Native</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-white"
              >
                Your Database, <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ECF8E] to-emerald-200">In Your Pocket.</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-medium"
              >
                Monitor performance, view active connections, and manage your Sunabase clusters directly from your phone. Zero compromises on power.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { icon: <Database className="w-5 h-5" />, title: "SQL Console", desc: "Write queries with an optimized terminal." },
                 { icon: <Activity className="w-5 h-5" />, title: "Live Metrics", desc: "Monitor latency and bandwidth in real-time." },
                //  { icon: <Shield className="w-5 h-5" />, title: "RLS Policies", desc: "Manage Row Level Security on the go." },
                //  { icon: <Zap className="w-5 h-5" />, title: "Edge Functions", desc: "Deploy functions globally with a tap." },
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="p-6 rounded-[1.5rem] bg-zinc-900/30 border border-white/[0.05] hover:border-[#3ECF8E]/30 transition-all duration-500 group hover:bg-zinc-900/50"
                 >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-[#3ECF8E]/10 transition-all duration-500">
                      <div className="text-zinc-400 group-hover:text-[#3ECF8E] transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2 tracking-tight text-white">{item.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 relative z-20 scale-75 sm:scale-90 md:scale-100 origin-center">
            <IPhone17ProMax>
               <PhoneDashboard />
            </IPhone17ProMax>
          </div>

          {/* Right Column: Description & Nav */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-center relative z-10 order-3 w-full max-w-sm mx-auto lg:mx-0">
      
            {/* Card 1: Project Stats */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-3xl p-5 shadow-2xl backdrop-blur-xl border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3ECF8E] to-emerald-600 p-0.5 shadow-lg shadow-[#3ECF8E]/20">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <Database className="w-5 h-5 text-[#3ECF8E]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-tight font-manrope">Atlas Network</h3>
                  <p className="text-xs font-medium text-zinc-400 font-sans">Production · US-East</p>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-[#3ECF8E] shadow-[0_0_8px_rgba(62,207,142,0.6)] animate-pulse" />
                </div>
              </div>

              <div className="flex justify-between gap-2 mb-5">
                {[
                  { label: "Uptime", val: "99.99%" },
                  { label: "Latency", val: "14ms" },
                  { label: "Reqs", val: "2.4M" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col flex-1 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl p-3 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-sans">{stat.label}</span>
                    <span className="text-sm font-semibold text-white font-geist">{stat.val}</span>
                  </div>
                ))}
              </div>

              <button className="hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2 text-xs font-medium text-white bg-gradient-to-br from-white/10 to-white/0 w-full rounded-full py-2.5 border border-white/10 group">
                View Analytics
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Card 2: Features */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-3xl p-5 shadow-xl backdrop-blur-xl border border-white/10"
            >
              <p className="text-sm text-zinc-400 leading-relaxed mb-4 font-sans">
                Enterprise-grade infrastructure with automated scaling and zero-knowledge security proofs built-in.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { icon: <Shield className="w-2.5 h-2.5" />, label: "zk-SNARKs" },
                  { icon: <Zap className="w-2.5 h-2.5" />, label: "Auto-scale" },
                  { icon: <Terminal className="w-2.5 h-2.5" />, label: "CLI Access" },
                ].map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-[10px] font-medium text-zinc-300 bg-white/5 rounded-full px-2.5 py-1 border border-white/5">
                    {tag.icon}
                    {tag.label}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-between rounded-xl bg-zinc-950/50 border border-white/5 px-3 py-2 hover:border-white/20 transition-colors group">
                  <span className="text-xs text-zinc-300 font-medium font-sans">Documentation</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                </button>
                <button className="flex-1 flex items-center justify-between rounded-xl bg-zinc-950/50 border border-white/5 px-3 py-2 hover:border-white/20 transition-colors group">
                  <span className="text-xs text-zinc-300 font-medium font-sans">API Status</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                </button>
              </div>
            </motion.div>

            {/* Card 3: Live Logs */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="transition-transform duration-500 hover:scale-[1.01] text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-3xl p-4 shadow-xl backdrop-blur-xl border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-sans">Live Logs</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-ping" />
                   </div>
                   <button className="text-[10px] font-medium text-zinc-400 hover:text-white transition-colors font-sans underline decoration-zinc-700 underline-offset-2">View all</button>
              </div>
              <div className="space-y-2">
                {[
                  { icon: <Database className="w-3.5 h-3.5 text-[#3ECF8E]" />, title: "Contract Deployed", meta: "0x82...92a1 · 2m ago", bg: "bg-[#3ECF8E]/10", border: "border-[#3ECF8E]/20" },
                  { icon: <Activity className="w-3.5 h-3.5 text-purple-400" />, title: "New Block Synced", meta: "#18293492 · 120ms", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                ].map((log, i) => (
                  <div key={i} className="group rounded-xl bg-zinc-950/50 border border-white/5 p-2.5 flex items-center gap-3 hover:bg-white/[0.02] hover:border-white/10 transition-colors cursor-default">
                      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border", log.bg, log.border)}>
                          {log.icon}
                      </div>
                      <div className="flex flex-col min-w-0">
                          <span className="text-xs font-medium text-zinc-200 truncate font-geist">{log.title}</span>
                          <span className="text-[10px] text-zinc-500 font-mono">{log.meta}</span>
                      </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};


