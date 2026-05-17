"use client";

import { motion } from "framer-motion";
import { Star, Quote, GraduationCap, Globe, Award, Mic2, BookOpen } from "lucide-react";
import { slideInLeft, slideInRight, fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const credentials = [
  { icon: <Award className="w-4 h-4" />, label: "TESOL Certified", sub: "USA", color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400" },
  { icon: <Globe className="w-4 h-4" />, label: "TEFL Certified", sub: "Hong Kong", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400" },
  { icon: <BookOpen className="w-4 h-4" />, label: "6 Languages", sub: "Certified", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400" },
  { icon: <GraduationCap className="w-4 h-4" />, label: "Language Coach", sub: "Expert", color: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400" },
  { icon: <Mic2 className="w-4 h-4" />, label: "Public Speaker", sub: "Trainer", color: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400" },
  { icon: <Star className="w-4 h-4" />, label: "IELTS/TOEFL", sub: "Specialist", color: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400" },
];

const languages = [
  { flag: "🇬🇧", name: "English" }, { flag: "🇫🇷", name: "French" },
  { flag: "🇪🇸", name: "Spanish" }, { flag: "🇩🇪", name: "German" },
  { flag: "🇵🇹", name: "Portuguese" }, { flag: "🇮🇹", name: "Italian" },
];

export default function Trainer() {
  return (
    <section id="trainer" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden" aria-label="Trainer section">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 dark:from-blue-900/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
          <span className="badge bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 mb-4 inline-flex">👨‍🏫 Meet Your Trainer</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">The <span className="text-gradient">Expert</span> Behind Your Success</h2>
          <div className="section-divider max-w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig} className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100 dark:border-blue-900">
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 aspect-[4/5] flex flex-col items-center justify-end relative overflow-hidden">
                  <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Abhishek Bansal — Founder & Trainer">
                    <defs>
                      <linearGradient id="bgG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3730a3" /><stop offset="100%" stopColor="#6d28d9" /></linearGradient>
                      <linearGradient id="shirtG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#5b21b6" /></linearGradient>
                    </defs>
                    <rect width="300" height="400" fill="url(#bgG)" />
                    <circle cx="50" cy="50" r="60" fill="rgba(255,255,255,0.05)" />
                    <circle cx="260" cy="330" r="80" fill="rgba(255,255,255,0.04)" />
                    <path d="M75 315 Q100 260 150 245 Q200 260 225 315 L245 400 H55 Z" fill="url(#shirtG)" />
                    <path d="M128 248 L150 272 L172 248" stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="none" />
                    <path d="M75 315 Q55 345 50 385 H78 Q82 360 95 328" fill="url(#shirtG)" />
                    <path d="M225 315 Q245 345 250 385 H222 Q218 360 205 328" fill="url(#shirtG)" />
                    <ellipse cx="58" cy="383" rx="13" ry="9" fill="#c8956c" />
                    <ellipse cx="242" cy="383" rx="13" ry="9" fill="#c8956c" />
                    <rect x="136" y="222" width="28" height="28" rx="8" fill="#c8956c" />
                    <ellipse cx="150" cy="188" rx="52" ry="58" fill="#c8956c" />
                    <path d="M98 175 Q102 112 150 108 Q198 112 202 175 Q190 138 150 133 Q110 138 98 175 Z" fill="#111" />
                    <path d="M98 175 Q91 158 95 146 Q103 138 109 154 Z" fill="#111" />
                    <path d="M202 175 Q209 158 205 146 Q197 138 191 154 Z" fill="#111" />
                    <path d="M118 168 Q130 161 142 167" stroke="#111" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <path d="M158 167 Q170 161 182 168" stroke="#111" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <ellipse cx="130" cy="182" rx="9" ry="9" fill="white" />
                    <ellipse cx="170" cy="182" rx="9" ry="9" fill="white" />
                    <circle cx="131" cy="183" r="5.5" fill="#2a1200" />
                    <circle cx="171" cy="183" r="5.5" fill="#2a1200" />
                    <circle cx="133" cy="181" r="1.5" fill="white" />
                    <circle cx="173" cy="181" r="1.5" fill="white" />
                    <path d="M148 186 Q150 202 152 186" stroke="#a0613a" strokeWidth="1.5" fill="none" />
                    <path d="M142 206 Q150 212 158 206" stroke="#8b4513" strokeWidth="1.5" fill="none" />
                    <path d="M133 218 Q150 232 167 218" stroke="#6b2d0a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <ellipse cx="97" cy="191" rx="7" ry="10" fill="#b07040" />
                    <ellipse cx="203" cy="191" rx="7" ry="10" fill="#b07040" />
                    <rect x="50" y="352" width="36" height="24" rx="3" fill="#2563eb" transform="rotate(-18 68 364)" />
                    <rect x="54" y="355" width="17" height="24" rx="2" fill="#1e40af" transform="rotate(-18 62 367)" />
                    <text x="232" y="62" fontSize="22" fill="rgba(245,158,11,0.95)">⭐</text>
                    <text x="18" y="285" fontSize="16" fill="rgba(245,158,11,0.7)">✨</text>
                    <text x="215" y="310" fontSize="14" fill="rgba(255,255,255,0.4)">🌍</text>
                  </svg>
                </div>
              </div>
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 bg-amber-500 text-white text-xs font-bold px-3 py-2 rounded-2xl shadow-lg">🌟 Top Rated Trainer</motion.div>
              <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.7 }} className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-2 rounded-2xl shadow-lg">📍 Ratlam, India</motion.div>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Abhishek Bansal</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-base mt-1">Founder &amp; Language Trainer</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Bansal Classes Ratlam — English &amp; Foreign Languages School</p>
            </div>
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-5 border border-blue-100 dark:border-blue-800">
              <Quote className="absolute top-4 left-4 w-6 h-6 text-blue-300 dark:text-blue-700" />
              <p className="text-slate-700 dark:text-slate-300 italic text-sm leading-relaxed pl-6">&ldquo;Languages open doors to global opportunities and cultural exploration.&rdquo;</p>
              <p className="text-right text-blue-600 dark:text-blue-400 text-xs font-semibold mt-2">— Abhishek Bansal</p>
            </div>
            <div className="space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              <p>Abhishek Bansal is a certified English language coach with <strong className="text-slate-900 dark:text-white">TESOL (USA)</strong> and <strong className="text-slate-900 dark:text-white">TEFL (Hong Kong)</strong> qualifications, plus professional certifications in French, Spanish, German, Portuguese, and Italian.</p>
              <p>Known for highly personalized coaching and an innovative teaching style, he ensures visible improvement in speaking, listening, reading, and writing — making him one of the most trusted language trainers in India.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Certifications &amp; Expertise</p>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-wrap gap-2">
                {credentials.map((cred) => (
                  <motion.div key={cred.label} variants={staggerItem} whileHover={{ scale: 1.05 }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${cred.color} cursor-default`}>
                    {cred.icon}{cred.label}<span className="opacity-60 text-xs">· {cred.sub}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Languages He Teaches</p>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="text-xl">{lang.flag}</span>{lang.name}
                  </div>
                ))}
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="glow-btn w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl text-base">
              ✨ Book a Free Counseling Session
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
