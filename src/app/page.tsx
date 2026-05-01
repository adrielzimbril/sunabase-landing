import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Features } from "@/components/sections/Features";
import { GridCards } from "@/components/sections/GridCards";
import { NetworkStats } from "@/components/sections/NetworkStats";
import { MobileSuite } from "@/components/sections/MobileSuite";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { PricingCTA } from "@/components/sections/PricingCTA";
import { Footer } from "@/components/layout/Footer";
import PixelBlast from "@/components/PixelBlast";
import LightRays from "@/components/LightRays";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Global PixelBlast Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#c3ffbf"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#10b981"
          patternScale={1.5}
          patternDensity={0.4}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.15}
          rippleIntensityScale={0.6}
          speed={0.02}
          transparent
          edgeFade={0.4}
        />
      </div>

      {/* Background Component (Custom Mesh/Glow) */}
      <div 
         className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen" 
         style={{ 
           backgroundImage: `
             radial-gradient(circle at 10% 10%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
             radial-gradient(circle at 90% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
             linear-gradient(to right, rgba(16, 185, 129, 0.03) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
           `,
           backgroundSize: "100% 100%, 100% 100%, 60px 60px, 60px 60px"
         }} 
      />

      {/* Progressive Blur Top */}
      <div className="gradient-blur">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl border-x border-white/5 bg-transparent min-h-screen">
        {/* Subtle Side Gutter Accents */}
        <div className="absolute inset-y-0 -left-px w-px bg-linear-to-b from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute inset-y-0 -right-px w-px bg-linear-to-b from-transparent via-emerald-500/20 to-transparent" />
        <Navbar />
        <Hero />
        <Logos />
        <Features />
        <GridCards />
        <NetworkStats />
        <MobileSuite />
        <Testimonials />
        <Pricing />
        <PricingCTA />
        
        <Footer />
      </div>
    </main>
  );
}
