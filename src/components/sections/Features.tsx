"use client";

import React from "react";
import { motion } from "motion/react";
import { Activity, Server, Box, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CodeEditor = () => {
  return (
    <div className="relative h-full overflow-hidden border-l border-white/5 bg-zinc-950/30 font-geist">
      {/* Abstract Code Editor Background */}
      <div className="pointer-events-none absolute inset-0 select-none p-8 text-xs leading-relaxed text-gray-500 opacity-40 md:text-sm">
        <div className="mb-6 flex gap-1.5 opacity-50">
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
        </div>
        <div className="font-mono space-y-1">
          <p><span className="text-purple-400">import</span> {"{ "} <span className="text-emerald-400">Sunabase</span> {" }"} <span className="text-purple-400">from</span> <span className="text-emerald-400">"@sunabase/sdk"</span>;</p>
          <p className="h-4"></p>
          <p><span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-emerald-400">Sunabase</span>({"{"}</p>
          <p className="pl-4">apiKey: <span className="text-emerald-400">"sb_live_4k82..."</span>,</p>
          <p className="pl-4">region: <span className="text-emerald-400">"eu-central"</span>,</p>
          <p className="pl-4">cache: <span className="text-emerald-400">true</span></p>
          <p>{"}"});</p>
          <p className="h-4"></p>
          <p><span className="text-purple-400">async function</span> <span className="text-blue-400">getProfile</span>() {"{"}</p>
          <p className="pl-4"><span className="text-blue-400">const</span> {"{ data, error }"} = <span className="text-purple-400">await</span> client</p>
          <p className="pl-8">.<span className="text-blue-400">from</span>(<span className="text-emerald-400">"users"</span>)</p>
          <p className="pl-8">.<span className="text-blue-400">select</span>(<span className="text-emerald-400">"name, avatar"</span>)</p>
          <p className="pl-8">.<span className="text-blue-400">single</span>();</p>
          <p>{"}"}</p>
        </div>
      </div>

      {/* Floating Status Card */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 p-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] p-5">
            <div>
              <h4 className="font-sans text-sm font-normal tracking-wide text-white">API Status</h4>
              <div className="mt-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <p className="overflow-hidden whitespace-nowrap font-sans text-xs font-normal tracking-wide text-emerald-500">
                  Systems Operational
                </p>
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/20">
              <Activity className="h-4 w-4" />
            </div>
          </div>

          {/* Content Rows */}
          <div className="divide-y divide-white/5 font-sans text-sm">
            {[
              { icon: <Server className="h-3.5 w-3.5" />, name: "REST Gateway", loc: "us-east-1", lat: "14ms", delay: 0.2 },
              { icon: <Box className="h-3.5 w-3.5" />, name: "GraphQL", loc: "global-edge", lat: "28ms", delay: 0.4 },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: row.delay }}
                className="flex cursor-default items-center justify-between p-3.5 transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    {row.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-normal text-gray-200">{row.name}</span>
                    <span className="mt-0.5 text-xs font-normal text-gray-500">{row.loc}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">{row.lat}</span>
                  <div className="flex gap-0.5">
                    <div className="h-3 w-1 rounded-full bg-emerald-500" />
                    <div className="h-3 w-1 rounded-full bg-emerald-500/50" />
                    <div className="h-3 w-1 rounded-full bg-emerald-500/20" />
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex cursor-default items-center justify-between bg-white/[0.02] p-3.5 transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Activity className="h-3.5 w-3.5 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="font-normal text-gray-200">Realtime Engine</span>
                  <span className="mt-0.5 flex items-center gap-1 text-xs font-normal text-gray-500">
                    Listening for changes
                    <span className="ml-1 flex gap-0.5">
                      <span className="h-0.5 w-0.5 animate-bounce rounded-full bg-emerald-400" />
                      <span className="h-0.5 w-0.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:0.1s]" />
                      <span className="h-0.5 w-0.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:0.2s]" />
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="relative z-20 mx-auto mt-24 mb-24 w-full max-w-7xl px-2 pt-10 pb-32">
      <div
        className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-lg"
        style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        {/* Background Glow Effect */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-40" />

        <div className="grid lg:grid-cols-2">
          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center p-8 md:p-16">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
              <Box className="h-6 w-6 text-white opacity-50" />
            </div>

            <h2 className="mt-6 mb-6 font-manrope text-3xl font-semibold tracking-tight text-white leading-[1.1] md:text-4xl">
              Open Source Database Infrastructure
            </h2>

            <div className="space-y-6 font-sans text-lg leading-relaxed text-gray-400">
              <p>
                Power your applications with Sunabase's open source database clusters. Scalable, secure, and ready for global traffic.
              </p>
              <p>
                Our SDKs provide type-safe access to your data with a simple, SQL-like interface. Eliminate infrastructure overhead and focus on shipping features with 99.99% uptime guaranteed.
              </p>
              <p>
                Instant Edge functions — run logic close to your users, handle authentication, and store assets with sub-millisecond latency.
              </p>
            </div>
          </div>

          {/* Visual Content */}
          <CodeEditor />
        </div>
      </div>
    </section>
  );
};
