"use client";

import { motion } from "framer-motion";
import { Globe, BookOpen, Award, GraduationCap, Languages, BookMarked } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from "@/lib/animations";

const courses = [
  {
    icon: <Globe className="w-7 h-7" />,
    flag: "🇬🇧",
    name: "English",
    tagline: "Spoken · IELTS · TOEFL",
    description:
      "Master spoken English, business communication, accent training, and prepare for IELTS/TOEFL exams with our CEFR-aligned curriculum.",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-500/20",
    level: "A1 → C2",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    flag: "🇫🇷",
    name: "French",
    tagline: "DELF · DALF Preparation",
    description:
      "Learn French from beginner to advanced. Our certified trainers guide you through grammar, conversation, and official certifications.",
    color: "from-indigo-500 to-indigo-700",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-indigo-200 dark:border-indigo-500/20",
    level: "A1 → C2",
  },
  {
    icon: <Languages className="w-7 h-7" />,
    flag: "🇪🇸",
    name: "Spanish",
    tagline: "DELE Exam · Conversation",
    description:
      "From basic phrases to fluent conversation — explore Spanish culture and language with structured, practical learning.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    border: "border-amber-200 dark:border-amber-500/20",
    level: "A1 → C2",
  },
  {
    icon: <BookMarked className="w-7 h-7" />,
    flag: "🇩🇪",
    name: "German",
    tagline: "Goethe Institut Aligned",
    description:
      "Unlock career and study opportunities in Germany and Austria with our comprehensive German language program.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "border-emerald-200 dark:border-emerald-500/20",
    level: "A1 → C2",
  },
  {
    icon: <Award className="w-7 h-7" />,
    flag: "🇵🇹",
    name: "Portuguese",
    tagline: "Brazilian · European",
    description:
      "Learn the world's 6th most spoken language. Perfect for business, travel, and global career opportunities in Brazil and Portugal.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50 dark:bg-rose-500/10",
    border: "border-rose-200 dark:border-rose-500/20",
    level: "A1 → B2",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    flag: "🇮🇹",
    name: "Italian",
    tagline: "Art · Fashion · Business",
    description:
      "Discover the beauty of Italian language and culture. Ideal for art lovers, travelers, and professionals in the Italian market.",
    color: "from-purple-500 to-violet-700",
    bg: "bg-purple-50 dark:bg-purple-500/10",
    border: "border-purple-200 dark:border-purple-500/20",
    level: "A1 → B2",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden"
      aria-label="Courses section"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 dark:bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

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
            🌍 Languages We Teach
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            All foreign language courses are CEFR standardised from A1 (Beginner) to C2 (Mastery)
            — the global framework used by European universities and top employers.
          </p>
          <div className="section-divider max-w-24 mx-auto mt-6" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.name}
              variants={staggerItem}
              className={`group hover-lift card-shine relative rounded-2xl border ${course.border} ${course.bg} p-6 cursor-pointer transition-all duration-300`}
              whileHover={{ y: -8 }}
            >
              {/* Flag + Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <span className="text-3xl">{course.flag}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {course.name}
              </h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wider">
                {course.tagline}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {course.description}
              </p>

              {/* Level badge + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-600">
                  {course.level}
                </span>
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm font-semibold bg-gradient-to-r ${course.color} bg-clip-text text-transparent flex items-center gap-1 group-hover:gap-2 transition-all`}
                >
                  Enroll →
                </motion.button>
              </div>

              {/* Hover gradient border glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${course.color} -z-10 blur-xl`} style={{ transform: "scale(0.95)" }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            All courses available <strong>Online & Offline</strong> · Small batch sizes for personalized attention
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="glow-btn px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg"
          >
            Get Free Counseling Session →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
