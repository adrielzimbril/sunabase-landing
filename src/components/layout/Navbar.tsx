"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Database, Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Product", href: "/product" },
    { name: "Docs", href: "/docs" },
    { name: "Customers", href: "/customers" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-center px-4 pt-6">
      <nav
        className="relative flex w-full max-w-5xl items-center justify-between gap-x-4 rounded-full bg-black/60 py-2 pl-6 pr-2 shadow-2xl backdrop-blur-xl md:gap-x-8 md:w-auto"
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

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-gray-400 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <Link
            href="/signin"
            className="hidden text-xs font-medium text-gray-300 transition-colors hover:text-white md:block"
          >
            Sign in
          </Link>
          
          <button
            className="group relative hidden md:inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0" />
            <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 px-4 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors duration-300 group-hover:text-emerald-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Start free</span>
              <ArrowRight className="relative z-10 h-3 w-3 md:h-3.5 md:w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute left-0 right-0 top-full mt-4 flex flex-col gap-2 rounded-3xl border border-white/10 bg-black/80 p-4 backdrop-blur-2xl md:hidden"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                  <ArrowRight className="h-4 w-4 opacity-30" />
                </Link>
              ))}
              <div className="my-2 h-px bg-white/5" />
              <Link
                href="/signin"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                Sign in
                <ArrowRight className="h-4 w-4 opacity-30" />
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-black"
              >
                Start for free
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

