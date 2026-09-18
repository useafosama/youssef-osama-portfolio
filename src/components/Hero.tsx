'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDownLeft, Sparkles, Send, Play } from 'lucide-react';

interface HeroProps {
  onStartTour?: () => void;
}

export function Hero({ onStartTour }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-12 overflow-hidden">
      {/* Background Subtle Luxury Glows */}
      <div className="absolute top-1/4 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-32 w-72 sm:w-80 h-72 sm:h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 my-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Intro Subtitle Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3 sm:mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-medium bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>مرحبًا، أنا</span>
            </span>
          </motion.div>

          {/* Big Name Typography - Responsive Fluid Scaling */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-fluid-hero font-black tracking-tight text-[var(--text-primary)] mb-4 sm:mb-6 select-none"
          >
            يوسف أسامة
          </motion.h1>

          {/* Roles Line */}
          <motion.div
            variants={itemVariants}
            className="text-fluid-subheading font-semibold text-[var(--text-secondary)] mb-6 sm:mb-8 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 font-heading"
          >
            <span className="text-[var(--text-primary)]">مصمم</span>
            <span className="text-[var(--border-hover)]">•</span>
            <span className="text-[var(--text-primary)]">مطوّر</span>
            <span className="text-[var(--border-hover)]">•</span>
            <span className="text-[var(--accent)]">صانع تجارب رقمية</span>
          </motion.div>

          {/* Short Statement */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal"
          >
            أحوّل الأفكار إلى منتجات وتجارب رقمية تجمع بين التصميم، التقنية، وتجربة المستخدم بدقة متناهية وأسلوب معاصر.
          </motion.p>

          {/* Action Buttons & Guided Tour Trigger */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 pt-1"
          >
            <a
              href="#works"
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/20"
            >
              <span>استكشف أعمالي</span>
              <ArrowDownLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-primary)] font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4 text-[var(--accent)]" />
              <span>تواصل معي</span>
            </a>

            {/* 60-Second Guided Tour Pill Trigger */}
            {onStartTour && (
              <button
                onClick={onStartTour}
                aria-label="بدء جولة سريعة في 60 ثانية"
                className="group/tour inline-flex items-center justify-between sm:justify-start gap-3 px-4 py-2.5 rounded-xl bg-[var(--accent)]/10 hover:bg-[var(--accent)]/18 border border-[var(--accent)]/25 text-[var(--text-primary)] text-xs font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="w-6 h-6 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[var(--accent)] font-bold">مش عارف تبدأ منين؟</div>
                  <div className="text-xs text-[var(--text-secondary)] group-hover/tour:text-[var(--text-primary)] transition-colors">
                    خليني أعرّفك على شغلي في 60 ثانية ⚡
                  </div>
                </div>
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Meta Badges */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[var(--border-subtle)] relative z-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-[var(--text-secondary)]">
          {/* Location */}
          <div className="flex items-center gap-2">
            <span>من مصر 🇪🇬</span>
          </div>

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>متاح لمشاريع مختارة</span>
          </div>

          {/* Year */}
          <div className="font-mono text-[var(--text-muted)] font-medium text-xs">
            2026 EDITION
          </div>
        </div>
      </motion.div>
    </section>
  );
}
