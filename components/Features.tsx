"use client";

import { motion } from "framer-motion";
import { Users, Wifi, Clock, MessageCircle, Monitor, Lightbulb, DollarSign, Star } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from "@/lib/animations";

const features = [
  { icon: <Users className="w-6 h-6" />, title: "Small Batch Sizes", desc: "Personalized attention for every student — not lost in a crowd.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50 dark:bg-blue-500/10" },
  { icon: <Wifi className="w-6 h-6" />, title: "Online + Offline Classes", desc: "Flexible learning — study from home or at our Ratlam centre.", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
  { icon: <Clock className="w-6 h-6" />, title: "Flexible Timings", desc: "Classes available 8:00 AM – 9:30 PM, seven days a week.", color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
  { icon: <MessageCircle className="w-6 h-6" />, title: "Free Counseling Sessions", desc: "Book a free session to understand your goals before enrolling.", color: "from-amber-500 to-orange-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
  { icon: <Monitor className="w-6 h-6" />, title: "State-of-the-Art Classrooms", desc: "Modern, air-conditioned classrooms with all necessary learning tools.", color: "from-rose-500 to-pink-500", bg: "bg-rose-50 dark:bg-rose-500/10" },
  { icon: <Lightbulb className="w-6 h-6" />, title: "Practical Language Focus", desc: "Real-life conversations, not just textbooks — speak from day one.", color: "from-purple-500 to-violet-600", bg: "bg-purple-50 dark:bg-purple-500/10" },
];

const values = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Value for Money",
    desc: "Thoughtfully designed courses to deliver maximum learning outcomes at competitive prices. Flexible payment options and occasional discounts make quality education accessible.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Supportive & Personalised Learning",
    desc: "Both offline and online classes with small batch sizes. Expert instructors tailor lessons to each student's pace and goals — online or offline.",
    color: "from-indigo-600 to-purple-600",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Expert Instruction",
    desc: "TESOL (USA) and TEFL (Hong Kong) certified trainer with certifications in 6 languages. Innovative teaching style, proven results, trusted by hundreds.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function Features() {
  return (
    <>
      {/* Value Proposition */}
      <section id="values" className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden" aria-label="Value proposition">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <motion.div animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
            <span className="badge bg-white/15 text-white border border-white/20 mb-4 inline-flex">💎 Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Our <span className="text-amber-400">Promise</span> to You</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Three core pillars that make Bansal Classes Ratlam your best choice for language learning</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-3 gap-6">
            {values.map((val) => (
              <motion.div key={val.title} variants={staggerItem} whileHover={{ y: -8, scale: 1.02 }} className="glass-card rounded-3xl p-8 text-center group cursor-default hover:bg-white/15 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center text-white shadow-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>{val.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50 dark:bg-slate-800/30" aria-label="Features section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
            <span className="badge bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 mb-4 inline-flex">⚡ What We Offer</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Everything You <span className="text-gradient">Need to Succeed</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">From flexible schedules to expert coaching — we&apos;ve built the perfect environment for language mastery.</p>
            <div className="section-divider max-w-24 mx-auto mt-6" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <motion.div key={feat.title} variants={staggerItem} whileHover={{ y: -6, scale: 1.02 }} className={`${feat.bg} rounded-2xl p-6 border border-transparent hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 group cursor-default`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>{feat.icon}</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{feat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Location highlight */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mt-12 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="badge bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 mb-3 inline-flex">📍 Prime Location</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Prime Location in Ratlam – Easy to Reach</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">Located in the heart of Ratlam city at Pushpak Market, Dalumodi Bazaar — easily accessible by public and private transport from across Ratlam and nearby areas.</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">📌 Pushpak Market, Dalumodi Bazaar, opposite Bhagat Radios, Rajendra Nagar, Laxman Pura, Ratlam, MP 457001</p>
              </div>
              <div className="rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                <a href="https://www.google.com/maps/dir//Pushpak+Market,+Dalumodi+bazaar,+opposite+Bhagat+Radios,+Dhanmandi,+Laxman+Pura,+Ratlam,+Madhya+Pradesh+457001" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                  <span className="font-semibold text-sm">Get Directions →</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Opens Google Maps</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
