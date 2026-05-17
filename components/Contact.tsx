"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const contactInfo = [
  { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "Pushpak Market, Dalumodi Bazaar, opposite Bhagat Radios, Rajendra Nagar, Laxman Pura, Ratlam, MP 457001", href: "https://www.google.com/maps/dir//Pushpak+Market,+Dalumodi+bazaar,+opposite+Bhagat+Radios,+Dhanmandi,+Laxman+Pura,+Ratlam,+Madhya+Pradesh+457001", color: "bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 80436 91956 | +91 79873 09253", href: "tel:+917987309253", color: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "bansalclassesrtm@gmail.com", href: "mailto:bansalclassesrtm@gmail.com", color: "bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400" },
  { icon: <Clock className="w-5 h-5" />, label: "Working Hours", value: "8:00 AM – 9:30 PM (Daily)", href: null, color: "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400" },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [shakeField, setShakeField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) errs.phone = "Invalid phone number";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErr = Object.keys(errs)[0];
      setShakeField(firstErr);
      setTimeout(() => setShakeField(null), 600);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
      errors[field]
        ? "border-red-400 dark:border-red-500 bg-red-50 dark:bg-red-900/10"
        : "border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500"
    } ${shakeField === field ? "shake" : ""}`;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden" aria-label="Contact section">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 dark:bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-50 dark:bg-indigo-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <span className="badge bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 mb-4 inline-flex">📞 Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Start Your <span className="text-gradient">Language Journey</span> Today</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Reach out for a free counseling session or to enroll in any of our courses. We&apos;re here 8 AM – 9:30 PM, every day.</p>
          <div className="section-divider max-w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors group">
                  <div className={`w-10 h-10 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>{info.icon}</div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-slate-800 dark:text-slate-200 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-slate-800 dark:text-slate-200 text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d75.0377575!3d23.324481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963fe94ac473d3b%3A0x74ab3ec4d1f42637!2sPushpak%20Market%2C%20Dalumodi%20Bazar%2C%20Ratlam%2C%20Madhya%20Pradesh%20457001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bansal Classes Ratlam Location"
              />
            </div>

            {/* Social links */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4">🌐 Follow Us Online</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/englishcoachabhi", icon: "📸" },
                  { label: "Facebook", href: "https://www.facebook.com/bansalclassesratlam/", icon: "👥" },
                  { label: "YouTube", href: "https://youtube.com/@englishcoachabhi", icon: "🎬" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-bansal-9820b8220", icon: "💼" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-xl transition-all">
                    <span>{s.icon}</span>{s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent! 🎉</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Thank you for reaching out. Abhishek will get back to you shortly.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }} className="mt-6 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">Send another message</button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Send Us a Message</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">We&apos;ll respond within a few hours during business hours.</p>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                      <input id="contact-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} className={inputClass("name")} aria-describedby={errors.name ? "name-error" : undefined} />
                      {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                      <input id="contact-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} className={inputClass("email")} aria-describedby={errors.email ? "email-error" : undefined} />
                      {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone Number *</label>
                      <input id="contact-phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} className={inputClass("phone")} aria-describedby={errors.phone ? "phone-error" : undefined} />
                      {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message *</label>
                      <textarea id="contact-message" name="message" rows={4} placeholder="Tell us about your language learning goals..." value={form.message} onChange={handleChange} className={`${inputClass("message")} resize-none`} aria-describedby={errors.message ? "message-error" : undefined} />
                      {errors.message && <p id="message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                    </div>
                    <motion.button type="submit" disabled={submitting} whileHover={{ scale: submitting ? 1 : 1.02 }} whileTap={{ scale: submitting ? 1 : 0.98 }} className="glow-btn w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                      {submitting ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" />Send Message</>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
