"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Globe2, BookOpen, Users, TrendingUp, Wifi } from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

const certifications = [
  { icon: "🏆", label: "ISO 9001:2015", sub: "Quality Certified" },
  { icon: "🏛️", label: "MSME", sub: "Govt. Registered" },
  { icon: "🌐", label: "CEFR", sub: "International Standard" },
  { icon: "🇬🇧", label: "UASL (UK)", sub: "Assessed" },
  { icon: "🛒", label: "GeM Portal", sub: "Gov. Recognised" },
];

const focusPoints = [
  "Practical Communication Skills",
  "Confidence & Personality Development",
  "Fluency & Neutral / American Accent Training",
  "Interview Readiness & Public Speaking",
  "IELTS, TOEFL & OET Exam Preparation",
  "Foreign Language Proficiency (A1 to C2)",
  "Real-Life Language Application",
];

const differentiators = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "International Quality Standards",
    desc: "ISO 9001:2015 certified with CEFR-aligned curricula matching global language benchmarks.",
    color: "text-blue-600 bg-blue-100 dark:bg-blue-500/20",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert & Experienced Faculty",
    desc: "Qualified trainers dedicated to bringing out the best in every individual student.",
    color: "text-indigo-600 bg-indigo-100 dark:bg-indigo-500/20",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Student-Focused, Result-Driven",
    desc: "Every lesson is designed around practical outcomes — fluency, confidence, and career readiness.",
    color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/20",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Continuous Improvement",
    desc: "Structured learning modules with measurable milestones so you always track your progress.",
    color: "text-amber-600 bg-amber-100 dark:bg-amber-500/20",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Online & Offline Classes",
    desc: "Flexible learning modes — study at our Ratlam centre or from the comfort of your home.",
    color: "text-rose-600 bg-rose-100 dark:bg-rose-500/20",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Globally Recognised Framework",
    desc: "UASL (UK) assessed and GeM Portal registered — a trusted, government-recognised institute.",
    color: "text-purple-600 bg-purple-100 dark:bg-purple-500/20",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-800/30 relative overflow-hidden"
      aria-label="About us section"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-200 dark:bg-indigo-600 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <span className="badge bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 mb-4 inline-flex">
            🎓 About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Welcome to{" "}
            <span className="text-gradient">Bansal Classes Ratlam</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Ratlam&rsquo;s Premier Language Institute — Your trusted destination for Spoken English,
            Foreign Languages, Personality Development &amp; International Exam Preparation
          </p>
          <div className="section-divider max-w-24 mx-auto mt-6" />
        </motion.div>

        {/* Two column: text + visual */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Left: Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Learn. Communicate. Grow.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Bansal Classes Ratlam is one of Madhya Pradesh&rsquo;s most trusted English and Foreign
              Language institutes, located at Pushpak Market, Dalumodi Bazar, Ratlam. Since our
              founding, we have helped thousands of students, professionals, and job seekers build
              real communication skills that open real doors — academically, professionally, and
              personally.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              We are proud to be an <strong className="text-blue-600">ISO 9001:2015 Certified</strong> and{" "}
              <strong className="text-blue-600">MSME Registered</strong> institution. Our language
              programs follow the{" "}
              <strong className="text-blue-600">CEFR (Common European Framework of Reference for Languages)</strong> —
              the globally accepted standard for assessing language proficiency.
            </p>

            {/* Focus points */}
            <div className="space-y-2.5">
              {focusPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Certification cards */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4"
          >
            {/* Mission quote */}
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-bold mb-2">Our Mission</h4>
              <p className="text-blue-100 text-sm leading-relaxed italic">
                &ldquo;To provide practical, confidence-building and internationally aligned education that
                helps students grow academically, professionally and personally.&rdquo;
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                Certified. Recognised. Trusted.
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-default"
                  >
                    <div className="text-2xl mb-1">{cert.icon}</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-white">{cert.label}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{cert.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Courses tagline */}
            <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-4">
              <p className="text-amber-800 dark:text-amber-400 text-sm font-medium">
                🎓 Courses designed for <span className="font-bold">school students · college students · working professionals · job seekers · homemakers · beginners &amp; advanced learners</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* What Makes Us Different */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            What Makes Us <span className="text-gradient">Different</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            We go far beyond classroom teaching — practical, structured, centred entirely on your growth.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
