'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-[#0c0603]">
      {/* ============================================================== */}
      {/* SECTION BACKGROUND: CALMER WARM ESPRESSO-TO-CREAM AMBIENCE     */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 pointer-events-none -z-30"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 65% 40%, #1e1007 0%, #100804 50%, #080402 100%)',
        }}
      />

      {/* Gentle Warm Cream / Amber Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.10, 0.18, 0.10],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[20%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none -z-20"
        style={{
          background: 'radial-gradient(circle, rgba(245, 234, 221, 0.08) 0%, rgba(198, 151, 73, 0.10) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Reservations & Inquiries
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-amber-100 tracking-tight mt-3"
          >
            Connect with Espresso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-amber-200/80"
          >
            Questions? Reservations? Just want to talk coffee? We're here for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-brown-900/80 p-8 sm:p-12 lg:p-14 rounded-3xl shadow-2xl border border-amber-950/60 backdrop-blur-md">
          
          {/* Contact Information & Lifestyle Photo Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-amber-100">Our Shop</h3>
              <p className="text-base sm:text-lg text-amber-200/75 leading-relaxed">
                Drop by for a brew! Found in the heart of Kochi's IT hub, we bring premium craftsmanship to your cup.
              </p>
              
              <div className="space-y-5 text-amber-100/90 pt-1">
                <div className="flex items-start gap-4">
                  <span className="text-amber-300 text-2xl mt-0.5">📍</span>
                  <p className="text-sm sm:text-base">Coffee Lane, SmartCity Road, Kochi, TN 682030</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-amber-300 text-2xl mt-0.5">📞</span>
                  <p className="text-sm sm:text-base">+91 98765 43210</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-amber-300 text-2xl mt-0.5">✉️</span>
                  <p className="text-sm sm:text-base">hello@premium-espresso.com</p>
                </div>
              </div>

              {/* Lifestyle Image Card integration (coffee-morning.jpg) */}
              <div className="pt-2">
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-lg aspect-[4/3] group">
                  <img
                    src="/images/coffee-morning.jpg"
                    alt="Morning coffee moment and cafe atmosphere"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-brown-950/30 to-transparent p-3 flex items-end">
                    <span className="text-[11px] font-mono text-amber-300 font-semibold tracking-wider">
                      ✦ Daily Morning Cupping Sessions (8:00 AM)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-amber-950/50">
              <h4 className="text-amber-100 font-medium mb-2">Opening Hours</h4>
              <p className="text-amber-200/70 text-sm">Mon - Sat: 8:00 AM - 10:00 PM</p>
              <p className="text-amber-200/70 text-sm mt-0.5">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact & Reservation Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-brown-950/60 rounded-2xl border border-amber-500/20 min-h-[420px]"
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h4 className="text-2xl font-bold text-amber-100">Message & Reservation Received</h4>
                <p className="mt-3 text-amber-200/80 max-w-md">
                  Thank you, <span className="font-semibold text-amber-300">{formData.name || 'Friend'}</span>. Our barista team will review your request and confirm shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full border border-amber-500/30 text-amber-300 text-sm hover:bg-amber-500/10 transition"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-amber-100/80 font-medium mb-2 text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-brown-950 border border-amber-950/70 text-amber-100 placeholder-amber-500/60 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                      placeholder="Ansaf..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-amber-100/80 font-medium mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-brown-950 border border-amber-950/70 text-amber-100 placeholder-amber-500/60 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                      placeholder="ansaf@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Guests Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-amber-100/80 font-medium mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-brown-950 border border-amber-950/70 text-amber-100 placeholder-amber-500/60 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-amber-100/80 font-medium mb-2 text-sm">
                      Table Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-brown-950 border border-amber-950/70 text-amber-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                    >
                      <option value="1">1 Person (Quiet Brew)</option>
                      <option value="2">2 Persons (Table for Two)</option>
                      <option value="4">3 - 4 Persons (Group Tasting)</option>
                      <option value="6">5+ Persons (Private Cupping Session)</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-amber-100/80 font-medium mb-2 text-sm">
                      Reservation Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-brown-950 border border-amber-950/70 text-amber-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-amber-100/80 font-medium mb-2 text-sm">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-brown-950 border border-amber-950/70 text-amber-100 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-amber-100/80 font-medium mb-2 text-sm">
                    Your Message / Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-xl bg-brown-950 border border-amber-950/70 text-amber-100 placeholder-amber-500/60 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition resize-none"
                    placeholder="Tell us about special dietary needs, seat preferences, or coffee inquiries..."
                  />
                </div>

                {/* Submit CTA */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-brown-950 font-bold text-lg hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-xl shadow-amber-950/40 cursor-pointer"
                >
                  Send Message & Reserve
                </motion.button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
