"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  GitBranch, 
  Package, 
  Layout, 
  Layers, 
  Database, 
  Cloud, 
  Activity,
  Zap
} from "lucide-react";

const logos = [
  { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
  { name: "Docker", icon: <Package className="h-6 w-6" /> },
  { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
  { name: "Kubernetes", icon: <Layers className="h-5 w-5" /> },
  { name: "Edge", icon: <Zap className="h-5 w-5" /> },
  { name: "Cloudflare", icon: <Cloud className="h-5 w-5" /> },
  { name: "Datadog", icon: <Activity className="h-5 w-5" /> },
  { name: "Vercel", icon: <Zap className="h-5 w-5" /> },
];

export const Logos = () => {
  return (
    <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pb-12 md:pb-20">
      <div className="group relative flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-40 grayscale transition-all duration-700 hover:grayscale-0">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center justify-center gap-8 md:gap-16 py-4"
        >
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 text-white">
              {logo.icon}
              <span className="font-sans text-base md:text-lg font-medium">{logo.name}</span>
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-2 text-white">
              {logo.icon}
              <span className="font-sans text-base md:text-lg font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
