"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Database } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-center px-4 pt-6">
      <nav
        className="relative flex w-full max-w-5xl items-center justify-between gap-x-8 rounded-full bg-black/60 py-2 pl-6 pr-2 shadow-2xl backdrop-blur-xl md:gap-12 md:w-auto"
        style={{
          boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 cursor-pointer group/logo">
          <div className="relative flex items-center justify-center">
            <div className="w-6 h-6 bg-emerald-500 rounded-lg rotate-12 flex items-center justify-center transition-transform group-hover/logo:rotate-[25deg] duration-500">
              <Database className="w-3.5 h-3.5 text-black -rotate-12 transition-transform group-hover/logo:-rotate-[25deg] duration-500" strokeWidth={2.5} />
            </div>
            <div className="absolute -inset-1 bg-emerald-500/20 blur-md rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-manrope">
            Suna<span className="text-emerald-500">base</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden items-center gap-6 md:flex">
          {["Product", "Docs", "Customers", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-xs font-medium text-gray-400 transition-colors hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/signin"
            className="hidden text-xs font-medium text-gray-300 transition-colors hover:text-white md:block"
          >
            Sign in
          </Link>
          <button
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            {/* Spinning Border Beam */}
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Static Border */}
            <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0" />
            
            {/* Content */}
            <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 px-6 py-2.5 text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-emerald-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Start for free</span>
              <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};
