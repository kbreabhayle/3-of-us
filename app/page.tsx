"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Reveal = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setBtnVisible(false);
  };

  // Auto-hide the "WE MADE IT" overlay after 5 seconds
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <main className="relative min-h-screen text-foreground selection:bg-white/20">

      {/* 1. Introduction - Massive Scale & Impact */}
      <section id="intro" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <Reveal>
          <span className="inline-block text-muted font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-8 animate-in fade-in zoom-in duration-1000">
            The Vision
          </span>
          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter mb-8 text-white mix-blend-difference">
            THREE<br />HEARTS<br /><span className="text-gradient">ONE VISION</span>
          </h1>
          <p className="max-w-xl mx-auto text-muted text-lg md:text-xl font-light leading-relaxed">
            This isn't just a website. It's the story of where we were, where we are, and where we're going.
            <strong className="block mt-2 text-white font-medium">Brotherhood bound by ambition.</strong>
          </p>
        </Reveal>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. Past Struggles - Premium Asymmetric Grid */}
      <section id="struggles" className="min-h-screen py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24 md:text-center">
            <span className="text-muted font-bold uppercase tracking-[0.2em] text-xs block mb-4">Chapter I</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Past Struggles</h2>
            <p className="text-muted text-xl font-light max-w-2xl md:mx-auto">
              We didn't start with much. Every failure was a lesson, every hardship a brick in our foundation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {[
              { src: "/images/20250620_123458.webp", alt: "Memory 1", span: "md:col-span-4" },
              { src: "/images/20250620_125558.webp", alt: "Memory 2", span: "md:col-span-8" },
              { src: "/images/IMG_20231122_202715_782.webp", alt: "Memory 3", span: "md:col-span-6" },
              { src: "/images/Snapchat-1005829759.webp", alt: "Memory 4", span: "md:col-span-6" },
              { src: "/images/IMG_3068.JPG.webp", alt: "Memory 5", span: "md:col-span-12" }, // Full width for impact
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.1} className={cn("relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm", img.span)}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mindset - Glowing Frosted Glass */}
      <section id="mindset" className="min-h-screen flex items-center justify-center px-6 py-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

        <Reveal>
          <div className="group relative bg-black/40 backdrop-blur-2xl p-8 md:p-24 rounded-[3rem] border border-white/10 max-w-5xl mx-auto overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -inset-[2px] bg-gradient-to-br from-white/20 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-sm" />

            <span className="relative z-10 text-muted font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Chapter II</span>
            <h2 className="relative z-10 text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Mindset & <br /><span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Discipline</span>
            </h2>
            <p className="relative z-10 text-muted text-xl font-light mb-16 max-w-2xl text-balance">
              Growth starts with the decision to be better. We stopped making excuses and started making progress.
              <span className="text-white font-normal ml-2">Consistency is our only currency.</span>
            </p>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
              {[
                { id: "01", label: "Consistency" },
                { id: "02", label: "Patience" },
                { id: "03", label: "Belief" },
              ].map((v) => (
                <div key={v.id} className="flex flex-col gap-2">
                  <span className="text-xs font-black text-white/30">{v.id}</span>
                  <span className="text-2xl font-bold text-white tracking-tight">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. The Grind - High Contrast Grid */}
      <section id="grind" className="min-h-screen py-32 px-6 relative z-10">
        <Reveal className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-muted font-bold uppercase tracking-[0.2em] text-xs block mb-4">Chapter III</span>
            <h2 className="text-5xl md:text-7xl font-bold">The Forge</h2>
          </div>
          <p className="text-muted text-lg max-w-md text-balance">
            Working through the nights, solving one problem at a time. This is where the magic happens.
          </p>
        </Reveal>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { src: "/images/IMG_20240823_095738_384@1594859428.webp", label: "Focus" },
            { src: "/images/IMG_20240823_100005_180@1594859464.webp", label: "Action" },
            { src: "/images/IMG_20240823_100011_261@1594860138.webp", label: "Growth" },
            { src: "/images/IMG_20240823_100017_349@1594860141.webp", label: "Vision" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                  <span className="text-3xl font-black uppercase tracking-widest text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Future Vision - The Golden Horizon */}
      <section id="future" className="min-h-screen py-32 px-6 flex flex-col justify-center items-center text-center relative z-10 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <Reveal>
          <span className="text-muted font-bold uppercase tracking-[0.4em] text-xs mb-8 block">The Destination</span>
          <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            GOLDEN<br />HORIZON
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-xl mb-24 font-light">
            Freedom, abundance, and peace. This is the life we are claiming.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-6xl mb-32 text-center">
            {[
              { src: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=400", label: "Dodge" },
              { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400", label: "BMW M4" },
              { src: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=400", label: "Ferrari" },
              { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400", label: "Freedom" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-6 group cursor-pointer">
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/20 group-hover:border-white transition-colors duration-500 p-2">
                  <div className="relative w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image src={item.src} alt={item.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {btnVisible && (
              <motion.button
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerConfetti}
                className="group relative px-12 py-5 rounded-full bg-white text-black font-bold text-lg tracking-wide overflow-hidden"
              >
                <span className="relative z-10">You are Loved! ❤️</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            )}
          </AnimatePresence>
        </Reveal>
      </section>

      {/* Confetti Overlay */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="bg-black/80 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20 text-center shadow-[0_0_50px_rgba(255,255,255,0.1)]"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">WE MADE IT.</h3>
              <p className="text-muted text-lg">The journey is just beginning.</p>
              <button
                onClick={() => setShowConfetti(false)}
                className="mt-8 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors pointer-events-auto"
              >
                Close
              </button>
            </motion.div>
          </div>)}
      </AnimatePresence>
    </main>
  );
}
