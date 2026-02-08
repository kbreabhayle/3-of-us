"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Check, Heart, ArrowUp } from "lucide-react";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [btnText, setBtnText] = useState("You are Loved! ❤️");

  const triggerConfetti = () => {
    setShowConfetti(true);
    setBtnText("Stay Blessed! ✨");
  };

  return (
    <main className="bg-black text-white relative">
      {/* 1. Introduction */}
      <section id="intro" className="min-h-screen px-[7%] flex flex-col justify-center text-center">
        <Reveal>
          <span className="inline-block text-white font-extrabold uppercase tracking-[0.3em] text-[0.8rem] mb-6">
            The Vision
          </span>
          <h1 className="text-[clamp(3rem,10vw,7rem)] leading-[0.9] mb-8 font-extrabold">
            Three Hearts, <br /> One Vision
          </h1>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            This isn't just a website. It's the story of where we were, where we are, and where we're going.
            Brotherhood bound by ambition.
          </p>
        </Reveal>
        <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.2em] text-muted animate-pulse">
          Scroll to begin the journey
        </div>
      </section>

      {/* 2. Past Struggles */}
      <section id="struggles" className="min-h-screen px-[7%] py-24 flex flex-col justify-center relative">
        <span className="absolute top-[50px] right-[7%] text-[5vw] font-extrabold uppercase text-white/5 pointer-events-none whitespace-nowrap hidden md:block">
          Shadows of Yesterday
        </span>
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,4rem)] mb-4 font-bold">Past Struggles</h2>
          <p className="max-w-[600px] text-muted text-lg mb-16">
            We didn't start with much. Every failure was a lesson, every hardship a brick in our foundation.
            We remember the grind that made us.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/images/20250620_123458.webp", alt: "Memory 1" },
            { src: "/images/20250620_125558.webp", alt: "Memory 2" },
            { src: "/images/IMG_20231122_202715_782.webp", alt: "Memory 3" },
            { src: "/images/Snapchat-1005829759.webp", alt: "Memory 4" },
            { src: "/images/IMG_3068.JPG.webp", alt: "Memory 5" },
          ].map((img, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative h-[350px] rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03] hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Mindset */}
      <section id="mindset" className="min-h-screen px-[7%] py-24 flex flex-col justify-center items-center">
        <Reveal>
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-20 rounded-[40px] border border-white/20 max-w-[900px]">
            <span className="inline-block text-white font-extrabold uppercase tracking-[0.3em] text-[0.8rem] mb-6">
              The Shift
            </span>
            <h2 className="text-4xl md:text-6xl mb-8 font-bold">Mindset & Discipline</h2>
            <p className="text-muted text-lg mb-12">
              Growth starts with the decision to be better. We stopped making excuses and started making progress.
              Consistency is our only currency.
            </p>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {[
                { id: "01", label: "Consistency" },
                { id: "02", label: "Patience" },
                { id: "03", label: "Belief" },
              ].map((v) => (
                <div key={v.id} className="flex flex-col">
                  <span className="text-[0.8rem] font-extrabold text-white">{v.id}</span>
                  <span className="text-xl font-bold">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. The Grind */}
      <section id="grind" className="min-h-screen px-[7%] py-24 flex flex-col justify-center">
        <span className="absolute top-[50px] right-[7%] text-[5vw] font-extrabold uppercase text-white/5 pointer-events-none whitespace-nowrap hidden md:block">
          The Forge of Success
        </span>
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,4rem)] mb-4 font-bold">Building the Future</h2>
          <p className="max-w-[600px] text-muted text-lg mb-16">
            Working through the nights, solving one problem at a time. This is where the magic happens—in the silence of the grind.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { src: "/images/IMG_20240823_095738_384@1594859428.webp", label: "Focus" },
            { src: "/images/IMG_20240823_100005_180@1594859464.webp", label: "Action" },
            { src: "/images/IMG_20240823_100011_261@1594860138.webp", label: "Growth" },
            { src: "/images/IMG_20240823_100017_349@1594860141.webp", label: "Vision" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-extrabold uppercase tracking-[0.3em]">{item.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Future Vision */}
      <section id="future" className="min-h-screen px-[7%] py-24 flex flex-col justify-center items-center text-center">
        <Reveal>
          <span className="inline-block text-white font-extrabold uppercase tracking-[0.3em] text-[0.8rem] mb-6">
            The Destination
          </span>
          <h2 className="text-[clamp(3rem,7vw,5rem)] mb-8 font-bold">The Golden Horizon</h2>
          <p className="max-w-3xl mx-auto text-muted text-lg mb-16">
            Freedom, abundance, and peace. This is the life we are claiming. The roadmap to our dreams is clear.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 w-full max-w-4xl">
            {[
              { src: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=400", label: "Dodge" },
              { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400", label: "BMW M4" },
              { src: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=400", label: "Ferrari" },
              { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400", label: "Freedom" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <Image src={item.src} alt={item.label} fill className="object-cover" />
                </div>
                <span className="text-[0.8rem] font-extrabold uppercase tracking-widest text-muted">{item.label}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
            className="bg-white text-black px-16 py-6 rounded-full text-xl font-extrabold shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] transition-all"
          >
            {btnText}
          </motion.button>
        </Reveal>
      </section>

      {/* Confetti Overlay */}
      {showConfetti && <div className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Basic CSS-only confetti or component could go here. For now, simple state trigger */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-500">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-white text-6xl font-black italic"
          >
            WE MADE IT.
          </motion.div>
        </div>
      </div>}
    </main>
  );
}
