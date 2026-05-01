"use client";

import Link from "next/link";
import { ArrowLeft, Database, Search, Terminal } from "lucide-react";
import PixelBlast from "@/components/PixelBlast";
import LightRays from "@/components/LightRays";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.6]">
        <LightRays
          raysOrigin="center"
          raysColor="#3ECF8E"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          pulsating={true}
          fadeDistance={1}
          saturation={1}
          followMouse
          mouseInfluence={0.2}
          noiseAmount={0.1}
          distortion={0}
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.6]">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#3ECF8E"
          patternScale={2}
          patternDensity={0.6}
          enableRipples={true}
          rippleSpeed={0.8}
          rippleThickness={0.2}
          rippleIntensityScale={0.8}
          speed={0.05}
          transparent
          edgeFade={0.6}
        />
      </div>

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <div className="inline-flex items-center justify-center px-3 py-1 mb-8 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-md">
            <Terminal className="w-3 h-3 mr-2" />
            ERR_NODE_NOT_FOUND
          </div>

          <motion.div
            animate={{ 
              textShadow: [
                "0 0 20px rgba(62, 207, 142, 0)",
                "0 0 40px rgba(62, 207, 142, 0.4)",
                "0 0 20px rgba(62, 207, 142, 0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <h1 className="text-[120px] sm:text-[180px] leading-none font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20">
              404
            </h1>
            <div className="absolute -inset-4 bg-emerald-500/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>

          <h2 className="text-2xl sm:text-4xl font-semibold mb-6 mt-4 text-emerald-50">
            Query Returned Null
          </h2>
          
          <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto font-medium leading-relaxed">
            The database cluster could not locate the requested node. The route has either been dropped, migrated, or never existed in the active schema.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/" 
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] w-full sm:w-auto"
            >
              {/* Spinning Border Beam */}
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(16,185,129,0.8)_360deg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Static Border */}
              <span className="absolute inset-0 rounded-full bg-emerald-500/20 transition-opacity duration-300 group-hover:opacity-0" />
              
              {/* Content */}
              <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 px-8 py-4 text-xs font-medium tracking-widest text-zinc-300 uppercase transition-colors duration-300 group-hover:text-emerald-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <ArrowLeft className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="relative z-10">Return to Primary Node</span>
              </span>
            </Link>

            <Link 
              href="/login" 
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] w-full sm:w-auto"
            >
              {/* Spinning Border Beam */}
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Static Border */}
              <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0" />
              
              {/* Content */}
              <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 px-8 py-4 text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <Database className="relative z-10 w-4 h-4 transition-transform duration-300" />
                <span className="relative z-10">Access Dashboard</span>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
