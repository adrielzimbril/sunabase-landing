import Link from "next/link";
import { ArrowLeft, Database, Shield, Zap } from "lucide-react";
import PixelBlast from "@/components/PixelBlast";
import LightRays from "@/components/LightRays";
import DarkVeil from "../DarkVeil";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden">
      {/* Left Pane - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col relative z-10 bg-black">
        {/* Top Navigation */}
        <div className="p-8 absolute top-0 left-0 w-full flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 group">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
               <div className="w-4 h-4 bg-black rounded-sm" />
             </div>
             <span className="font-semibold text-lg tracking-tight">Sunabase</span>
          </Link>

          <Link href="/" className="hidden sm:inline-flex items-center text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Node
          </Link>
        </div>

        {/* Center Form */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24 max-w-xl mx-auto w-full pt-24 pb-12">
          {children}
        </div>
      </div>

      {/* Right Pane - Visuals (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#050505] border-l border-white/5 items-center justify-center">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="w-full h-full absolute inset-0 z-0 pointer-events-none opacity-[0.6]">
          <DarkVeil
            hueShift={60}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.9]">
          <LightRays
            raysOrigin="top-right"
            raysColor="#ffffff"
            raysSpeed={1.2}
            lightSpread={0.6}
            rayLength={3}
            pulsating={true}
            fadeDistance={1}
            saturation={1}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0.05}
            distortion={0}
          />
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.8]">
          <PixelBlast
            variant="square"
            pixelSize={2}
            color="#3ECF8E"
            patternScale={1.5}
            patternDensity={0.4}
            enableRipples={true}
            rippleSpeed={0.5}
            rippleThickness={0.15}
            rippleIntensityScale={0.7}
            speed={0.03}
            transparent
            edgeFade={0.5}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-lg p-10 backdrop-blur-md bg-black/40 border border-white/5 rounded-3xl text-left shadow-2xl overflow-hidden">
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
           
           <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                 <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Postgres Protocol
              </h3>
           </div>
           
           <h2 className="text-3xl font-semibold mb-6 text-white tracking-tight">
             Deploy globally.<br />Scale infinitely.
           </h2>
           
           <p className="text-gray-400 leading-relaxed mb-8">
             Connect to the world's most powerful open-source database infrastructure. Fully managed, fiercely scalable, and instantly ready.
           </p>

           <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-gray-300">RLS Secured</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Zap className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-gray-300">Edge Compute</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
