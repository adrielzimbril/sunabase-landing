"use client";

import React from "react";
import { motion } from "motion/react";
import { Activity, Globe, Zap, Cpu } from "lucide-react";

const stats = [
  {
    label: "Global Availability",
    value: "99.999%",
    icon: Zap,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    label: "Edge Nodes",
    value: "148+",
    icon: Globe,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    label: "Atomic SQL Instances",
    value: "128,400+",
    icon: Activity,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    label: "Atomic Ops / mo",
    value: "4.8B+",
    icon: Cpu,
    color: "text-emerald-300",
    bg: "bg-emerald-300/10",
    border: "border-emerald-300/20",
  },
];

export const NetworkStats = () => {
  return (
    <section className="relative z-20 mx-auto mb-32 w-full max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-colors hover:border-white/20"
          >
            {/* Background Glow */}
            <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 ${stat.bg}`} />
            
            <div className="relative z-10">
              <div className={`mb-4 inline-flex rounded-xl p-2.5 border ${stat.border} ${stat.bg} ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-400">
                  {stat.label}
                </span>
                <span className="font-manrope text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {stat.value}
                </span>
              </div>
            </div>

            {/* Bottom Progress Bar Decoration */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/5">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                className={`h-full ${stat.color.replace('text', 'bg')} opacity-30`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
