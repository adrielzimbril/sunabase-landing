"use client";

import React from "react";
import { motion } from "motion/react";
import { ShinyButton } from "@/components/shared/ShinyButton";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const InteractiveWord = ({ word }: { word: string }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      className="group flex flex-wrap justify-center gap-x-[0.05em] cursor-pointer select-none"
    >
      {word.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-block h-[1.1em] overflow-hidden"
        >
          <motion.span
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.025,
            }}
            className="block bg-linear-to-b from-white via-white to-white/50 bg-clip-text text-transparent"
          >
            {char}
          </motion.span>
          <motion.span
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.025,
            }}
            className="absolute left-0 top-0 block text-emerald-400"
          >
            {char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-32 md:pt-20">
      {/* Background Effects - Made transparent to let global background shine through */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-[-10%] h-[80%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Grid Curtain Structure */}
      <div className="absolute inset-0 -z-10 grid h-full w-full grid-cols-1 pointer-events-none md:grid-cols-7">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.1,
            }}
            className={cn(
              "relative h-full border-white/5",
              i < 3
                ? "hidden border-r md:block"
                : i === 3
                  ? "border-r md:border-none"
                  : "hidden border-l md:block",
            )}
          >
            <div
              className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]"
              style={{ height: `${75 - Math.abs(3 - i) * 10}%` }}
            />
            {i === 3 && (
              <div className="absolute left-0 right-0 top-[20%] h-[30%] bg-linear-to-b from-white/5 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center mt-24 mb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mb-10 inline-flex cursor-pointer items-center gap-x-2 rounded-full bg-linear-to-br from-white/10 to-white/0 px-3 py-1.5 backdrop-blur-sm transition-transform hover:scale-105 group"
          style={{ boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:animate-pulse" />
          <span className="font-sans text-xs font-medium tracking-wide text-emerald-100/80 transition-colors group-hover:text-white">
            New release: Sunabase Cloud v1.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8 flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 font-manrope text-6xl font-medium tracking-tighter leading-[1.1] md:text-8xl"
        >
          <span className="bg-linear-to-b from-white via-white to-white/50 bg-clip-text text-transparent opacity-60">
            The
          </span>
          <InteractiveWord word="Atomic" />
          <InteractiveWord word="Infrastructure" />
          <span className="bg-linear-to-b from-white via-white to-white/50 bg-clip-text text-transparent opacity-60 text-4xl md:text-5xl self-center mx-2">
            for
          </span>
          <InteractiveWord word="Modern" />
          <InteractiveWord word="Teams" />
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mb-12 max-w-3xl font-manrope text-xl font-medium leading-relaxed tracking-normal text-gray-400 md:text-2xl"
        >
          Deploy managed Postgres, Zero-Trust Identity, and Edge-Native
          Workflows in seconds. Sunabase is the high-fidelity backend built for
          precision and performance.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col items-center justify-center gap-6 md:flex-row mb-12"
        >
          <ShinyButton>Start Building</ShinyButton>
        </motion.div>

        {/* Logos Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-32 flex flex-col items-center gap-y-4 mb-20"
        >
          <p className="font-sans text-xs font-medium tracking-widest text-gray-500 uppercase">
            Trusted by modern developers and data-driven teams
          </p>
          <Link
            href="#"
            className="group flex items-center gap-1 border-b border-transparent pb-0.5 font-sans text-sm text-gray-400 transition-all hover:border-white hover:text-white"
          >
            Read our mission
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
