"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 aspect-[4/5] flex flex-col items-center justify-end relative overflow-hidden">
                  <Image 
                    src="/trainer.jpg"
                    alt="Abhishek Bansal — Founder & Trainer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
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
