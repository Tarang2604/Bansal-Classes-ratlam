"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Globe2, ChevronDown } from "lucide-react";
import { heroText, staggerContainer, fadeIn } from "@/lib/animations";

const floatingWords = ["English", "French", "Spanish", "German", "Italian", "Portuguese"];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg"
      aria-label="Hero section"
    >
      {/* Animated Particles */}
      {floatingWords.map((word, i) => (
        <motion.div
          key={word}
          className="absolute text-white/10 font-bold text-2xl pointer-events-none select-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {word}
        </motion.div>
      ))}

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: "10%", left: "-10%" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          style={{ bottom: "10%", right: "-5%" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-sky-300/15 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          style={{ top: "40%", right: "20%" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={heroText} className="inline-flex items-center gap-2 mb-6">
              <span className="badge bg-white/15 text-white border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-amber-400" />
                ISO 9001:2015 Certified · MSME Registered
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroText}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-4"
            >
              We Believe in{" "}
              <span className="relative inline-block">
                <span className="text-amber-400">Quality</span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-amber-400/60 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{" "}
              Teaching
            </motion.h1>

            <motion.p
              variants={heroText}
              className="text-lg sm:text-xl text-blue-100 mb-3 font-medium"
            >
              English & Foreign Languages School in Ratlam
            </motion.p>

            <motion.p
              variants={heroText}
              className="text-base text-blue-200/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Expert-led classes in English, French, Spanish, German, Italian & Portuguese.
              CEFR standardized · Small batches · Online & Offline
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroText}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll("#contact")}
                className="glow-btn flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-2xl shadow-xl transition-colors text-base"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll("#contact")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/25 backdrop-blur-sm transition-all text-base"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                Free Counseling
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={heroText}
              className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {[
                { value: "6+", label: "Languages" },
                { value: "1000+", label: "Students Trained" },
                { value: "CEFR", label: "Standardized" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs text-blue-200 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <motion.div
                className="float-animation relative glass-card rounded-3xl p-8 shadow-2xl shadow-black/30"
              >
                {/* Illustration SVG */}
                <svg
                  viewBox="0 0 400 340"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  aria-label="Language education illustration"
                >
                  {/* Background circle */}
                  <circle cx="200" cy="170" r="140" fill="rgba(37,99,235,0.15)" />
                  <circle cx="200" cy="170" r="105" fill="rgba(37,99,235,0.1)" />

                  {/* Book */}
                  <rect x="120" y="120" width="160" height="110" rx="8" fill="rgba(255,255,255,0.9)" />
                  <rect x="120" y="120" width="80" height="110" rx="8" fill="rgba(37,99,235,0.85)" />
                  <rect x="195" y="120" width="4" height="110" fill="rgba(37,99,235,0.3)" />
                  {/* Lines on right page */}
                  <rect x="213" y="140" width="52" height="4" rx="2" fill="rgba(99,102,241,0.5)" />
                  <rect x="213" y="152" width="40" height="4" rx="2" fill="rgba(99,102,241,0.4)" />
                  <rect x="213" y="164" width="48" height="4" rx="2" fill="rgba(99,102,241,0.4)" />
                  <rect x="213" y="176" width="35" height="4" rx="2" fill="rgba(99,102,241,0.3)" />
                  {/* Text on left page */}
                  <text x="155" y="158" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">A</text>
                  <text x="155" y="178" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Learn</text>
                  <text x="155" y="191" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Speak</text>
                  <text x="155" y="204" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Grow</text>

                  {/* Globe */}
                  <circle cx="310" cy="90" r="35" fill="rgba(99,102,241,0.9)" />
                  <ellipse cx="310" cy="90" rx="15" ry="35" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <line x1="275" y1="90" x2="345" y2="90" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <line x1="282" y1="75" x2="338" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <line x1="282" y1="105" x2="338" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <circle cx="310" cy="90" r="35" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />

                  {/* Flag pills */}
                  {[
                    { x: 70, y: 80, text: "🇬🇧 EN", color: "rgba(37,99,235,0.9)" },
                    { x: 68, y: 220, text: "🇫🇷 FR", color: "rgba(99,102,241,0.9)" },
                    { x: 290, y: 185, text: "🇩🇪 DE", color: "rgba(16,185,129,0.9)" },
                    { x: 140, y: 60, text: "🇪🇸 ES", color: "rgba(245,158,11,0.9)" },
                  ].map((flag) => (
                    <g key={flag.text}>
                      <rect x={flag.x} y={flag.y} width="76" height="26" rx="13" fill={flag.color} />
                      <text x={flag.x + 38} y={flag.y + 17} textAnchor="middle" fill="white" fontSize="11" fontWeight="600">{flag.text}</text>
                    </g>
                  ))}

                  {/* Star accent */}
                  <circle cx="90" cy="140" r="6" fill="rgba(245,158,11,0.8)" />
                  <circle cx="340" cy="200" r="5" fill="rgba(245,158,11,0.6)" />
                  <circle cx="180" cy="280" r="4" fill="rgba(255,255,255,0.4)" />
                </svg>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg"
                >
                  ✨ TESOL & TEFL Certified
                </motion.div>
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-blue-100 dark:border-blue-800"
                >
                  📍 Pushpak Market, Ratlam
                </motion.div>
              </motion.div>

              {/* Language icons orbiting */}
              {["🇮🇹", "🇵🇹"].map((emoji, i) => (
                <motion.div
                  key={emoji}
                  className="absolute w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg shadow-lg"
                  style={{ top: `${20 + i * 60}%`, right: i % 2 === 0 ? "-8%" : "auto", left: i % 2 !== 0 ? "-8%" : "auto" }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "linear" }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
