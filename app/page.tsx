"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  // Nitro-Smooth Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let rafId: number;
    let lastTime = 0;
    const speed = 300; // Nitro Speed: 300 Pixels per second

    const scroll = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      if (scrollContainer) {
        // Triple-buffered reset logic
        const itemWidth = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= itemWidth * 2) {
          scrollContainer.scrollLeft -= itemWidth;
        } else {
          scrollContainer.scrollLeft += speed * deltaTime;
        }
      }
      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  // Car items array (Triple-buffered for absolute seamlessness)
  const baseItems = [
    { src: "/images/doge-challerger.jpg", label: "Dodge" },
    { src: "/images/bmw_m4.jpeg", label: "BMW M4" },
    { src: "/images/bugati-chiron-og.jpg", label: "Bugatti" },
    { src: "/images/supra-mk4.png", label: "Supra" },
  ];
  const carItems = [...baseItems, ...baseItems, ...baseItems];

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

      {/* 2. Past Struggles - Premium Vertical Bento Grid */}
      <section id="struggles" className="min-h-screen py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24 md:text-center">
            <span className="text-muted font-bold uppercase tracking-[0.2em] text-xs block mb-4">Chapter I</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Past Struggles</h2>
            <p className="text-muted text-xl font-light max-w-2xl md:mx-auto">
              We started from nothing. These moments formed the foundation of who we are today.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { src: "/images/20250620_123458.webp", alt: "Roots" },
              { src: "/images/20250620_123327.webp", alt: "History" },
              { src: "/images/IMG_20231122_202715_782.webp", alt: "Beginning" },
              { src: "/images/20240506_171158 (1) (1).webp", alt: "Legacy" },
              { src: "/images/Picsart_25-11-12_21-03-07-047.webp", alt: "Hustle" },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover="hover"
                  whileTap="hover"
                  initial="initial"
                  className="relative overflow-hidden rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 aspect-[3/4]"
                >
                  <motion.div
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <motion.div
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
                  />

                  <motion.div
                    variants={{
                      initial: { scale: 1, filter: "grayscale(100%)" },
                      hover: { scale: 1.05, filter: "grayscale(0%)" }
                    }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </motion.div>

                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />

                  <motion.div
                    variants={{
                      initial: { opacity: 1 }, // Visible on mobile by default
                      hover: { opacity: 1 }
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:opacity-0 md:group-hover:opacity-100"
                  >
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/80">{img.alt}</span>
                  </motion.div>
                </motion.div>
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

      {/* 4. The Grind - High-Style Dynamic Grid */}
      <section id="grind" className="min-h-screen py-32 px-6 relative z-10">
        <Reveal className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-muted font-bold uppercase tracking-[0.2em] text-xs block mb-4">Chapter III</span>
            <h2 className="text-5xl md:text-7xl font-bold">The Forge</h2>
          </div>
          <p className="text-muted text-lg max-w-md text-balance">
            Endless nights, relentless focus. This is where we build the future.
          </p>
        </Reveal>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { src: "/images/IMG_20240823_095738_384@1594859428.webp", label: "Focus" },
            { src: "/images/IMG_20240823_100017_349@1594860141.webp", label: "Action" },
            { src: "/images/IMG_20240823_095743_735@1594859431.webp", label: "Grind" },
            { src: "/images/IMG_20240823_095857_635@1594859432.webp", label: "Steel" },
            { src: "/images/IMG_20240823_095921_751@1594859434.webp", label: "Spirit" },
            { src: "/images/Picsart_25-10-13_08-13-46-090.webp", label: "Impact" },
            { src: "/images/IMG_20251122_104515_581.webp", label: "Success" },
            { src: "/images/IMG_20251122_122918_714.webp", label: "Growth" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover="hover"
                whileTap="hover"
                initial="initial"
                className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10"
              >
                <motion.div
                  variants={{
                    initial: { scale: 1, filter: "grayscale(100%)" },
                    hover: { scale: 1.1, filter: "grayscale(0%)" }
                  }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image src={item.src} alt={item.label} fill className="object-cover" />
                </motion.div>

                <motion.div
                  variants={{
                    initial: { opacity: 1, y: 0 }, // Always visible label on mobile
                    hover: { opacity: 1, y: 0 }
                  }}
                  className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 md:opacity-0"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">{item.label}</span>
                </motion.div>

                <motion.div
                  variants={{
                    initial: { opacity: 0, backdropFilter: "blur(0px)" },
                    hover: { opacity: 1, backdropFilter: "blur(2px)" }
                  }}
                  className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center"
                >
                  <p className="text-white text-3xl font-black uppercase tracking-tighter">
                    {item.label}
                  </p>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
      {/* 4.5 Unique Destinies - Individual Dream Paths */}
      <section id="destinies" className="py-32 px-6 relative z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24 md:text-center">
            <span className="text-muted font-bold uppercase tracking-[0.2em] text-xs block mb-4">Chapter IV</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white text-center">Unique Destinies</h2>
            <p className="text-muted text-xl font-light max-w-2xl mx-auto text-center">
              One vision holds us together, but three distinct paths drive our fire.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Kalab",
                role: "Trader & Web Developer",
                dream: "Mastering the markets & the digital realm.",
                car: "Bugatti",
                destination: "USA",
                src: "/images/kalab.jpg",
                delay: 0.1
              },
              {
                name: "Eyob",
                role: "Singer",
                dream: "Capturing souls through melody.",
                car: "Supra MK4",
                destination: "Ethiopia",
                src: "/images/eyob.webp",
                delay: 0.2
              },
              {
                name: "Kbreab",
                role: "Trader",
                dream: "Precision in execution.",
                car: "Porsche GT3 911",
                destination: "Global Mastery",
                src: "/images/kbreab.jpg",
                delay: 0.3
              }
            ].map((path, i) => (
              <Reveal key={i} delay={path.delay}>
                <motion.div
                  whileHover="hover"
                  whileTap="hover"
                  initial="initial"
                  className="group relative h-[650px] rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl"
                >
                  <motion.div
                    variants={{
                      initial: { scale: 1.1, filter: "grayscale(100%) brightness(0.5)" },
                      hover: { scale: 1, filter: "grayscale(0%) brightness(0.8)" }
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={path.src}
                      alt={path.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <motion.div
                      variants={{
                        initial: { y: 20, opacity: 0.8 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-white/40 text-xs font-black uppercase tracking-[0.4em] mb-4 block" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        {path.role}
                      </span>
                      <h3 className="text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
                        {path.name}
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <p className="text-white/80 font-light text-sm italic">{path.dream}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <p className="text-white/80 font-medium text-sm">Car: <span className="text-white font-bold">{path.car}</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <p className="text-white/80 font-medium text-sm">Target: <span className="text-white font-bold">{path.destination}</span></p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{
                        initial: { scaleX: 0 },
                        hover: { scaleX: 1 }
                      }}
                      className="h-px bg-white/20 mt-8 origin-left"
                    />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Future Vision - The Golden Horizon (Scrobl Uble Circular Gallery) */}
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

          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] group/scroll">
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="absolute left-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 transition-all hover:bg-white/10 hover:scale-110 active:scale-95 hidden md:flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => {
                if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="absolute right-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 transition-all hover:bg-white/10 hover:scale-110 active:scale-95 hidden md:flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex gap-12 md:gap-24 px-12 md:px-48 overflow-x-auto no-scrollbar pb-12"
            >
              {carItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover="hover"
                  whileTap="hover"
                  initial="initial"
                  className="flex flex-col items-center gap-8 cursor-pointer flex-shrink-0"
                >
                  <motion.div
                    variants={{
                      initial: { borderColor: "rgba(255,255,255,0.2)" },
                      hover: { borderColor: "rgba(255,255,255,1)" }
                    }}
                    transition={{ duration: 0.7 }}
                    className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border p-2 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  >
                    <motion.div
                      variants={{
                        initial: { filter: "grayscale(100%)" },
                        hover: { filter: "grayscale(0%)" }
                      }}
                      transition={{ duration: 1 }}
                      className="relative w-full h-full rounded-full overflow-hidden"
                    >
                      <motion.div
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.1 }
                        }}
                        transition={{ duration: 1 }}
                        className="relative w-full h-full"
                      >
                        <Image src={item.src} alt={item.label} fill className="object-cover" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.span
                    variants={{
                      initial: { letterSpacing: "0.5em", color: "rgba(148,163,184,1)" }, // text-muted
                      hover: { letterSpacing: "0.8em", color: "rgba(255,255,255,1)" }
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] md:text-xs font-bold uppercase"
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/40 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/40 to-transparent pointer-events-none z-20" />
          </div>

          <AnimatePresence>
            {btnVisible && (
              <motion.button
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerConfetti}
                className="group relative px-12 py-5 rounded-full bg-white text-black font-bold text-lg tracking-wide overflow-hidden mt-12"
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
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
