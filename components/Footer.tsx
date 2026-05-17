"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Trainer", href: "#trainer" },
  ],
  Services: [
    { label: "Spoken English", href: "#courses" },
    { label: "Foreign Languages", href: "#courses" },
    { label: "IELTS / TOEFL", href: "#courses" },
    { label: "Free Counseling", href: "#contact" },
  ],
  Connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Instagram", href: "https://www.instagram.com/englishcoachabhi" },
    { label: "Facebook", href: "https://www.facebook.com/bansalclassesratlam/" },
    { label: "YouTube", href: "https://youtube.com/@englishcoachabhi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-bansal-9820b8220" },
  ],
};

const languages = ["🇬🇧 English", "🇫🇷 French", "🇪🇸 Spanish", "🇩🇪 German", "🇵🇹 Portuguese", "🇮🇹 Italian"];

const handleNav = (href: string) => {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.open(href, "_blank", "noopener noreferrer");
  }
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden" aria-label="Footer">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="absolute top-0 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 border-b border-slate-800"
        >
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Start Learning?</h3>
              <p className="text-blue-100 text-sm">Join hundreds of students who&apos;ve transformed their communication skills at Bansal Classes Ratlam.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => handleNav("#contact")} className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl shadow-lg transition-colors text-sm">Enroll Now →</motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => handleNav("#contact")} className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/20 text-sm transition-colors">Free Counseling</motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Bansal Classes Ratlam</p>
                <p className="text-xs text-blue-400">English &amp; Foreign Languages</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              &ldquo;We Believe in Quality Teaching&rdquo; — ISO 9001:2015 certified, MSME registered, CEFR standardized courses for students at all levels.
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span key={lang} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-lg border border-slate-700">{lang}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-slate-400 hover:text-blue-400 text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact summary */}
        <div className="py-6 border-t border-slate-800 grid sm:grid-cols-3 gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">📍 <span>Pushpak Market, Dalumodi Bazaar, Ratlam MP 457001</span></div>
          <div className="flex items-center gap-2">📞 <a href="tel:+917987309253" className="hover:text-blue-400 transition-colors">+91 79873 09253</a></div>
          <div className="flex items-center gap-2">✉️ <a href="mailto:bansalclassesrtm@gmail.com" className="hover:text-blue-400 transition-colors">bansalclassesrtm@gmail.com</a></div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Bansal Classes Ratlam. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-red-500 inline" /> for language learners in Ratlam, India</p>
          <div className="flex gap-4">
            <button onClick={() => handleNav("#home")} className="hover:text-blue-400 transition-colors">Privacy Policy</button>
            <button onClick={() => handleNav("#home")} className="hover:text-blue-400 transition-colors">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
