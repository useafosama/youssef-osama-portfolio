'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Palette, Code, CheckCircle, ArrowDown } from 'lucide-react';

export function Philosophy() {
  const steps = [
    { label: 'الفكرة', icon: Lightbulb, desc: 'الشرارة والهدف الأولي' },
    { label: 'الفهم', icon: Compass, desc: 'دراسة المشكلة وسلوك المستخدم' },
    { label: 'التصميم', icon: Palette, desc: 'هندسة التجربة والجمالية البصرية' },
    { label: 'التطوير', icon: Code, desc: 'كود نظيف وأداء فائق التجاوب' },
    { label: 'منتج حقيقي', icon: CheckCircle, desc: 'قيمة ملموسة تُحدث فرقًا' },
  ];

  return (
    <section id="philosophy" className="py-28 md:py-40 relative overflow-hidden bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      {/* Background Subtle Accent Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Intro Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[var(--accent)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>فلسفة العمل • PHILOSOPHY</span>
        </div>

        {/* Big Typography Statements */}
        <p className="text-fluid-subheading text-[var(--text-secondary)] font-medium mb-3 sm:mb-4">
          أنا لا أصمم شاشات فقط.
        </p>

        <h2 className="font-heading text-fluid-hero font-black text-[var(--text-primary)] tracking-tight leading-[1.18] mb-12 sm:mb-16 md:mb-24 select-none">
          أنا أبني تجارب.
        </h2>

        {/* Pipeline Progression Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop & Tablet Horizontal Pipeline */}
          <div className="hidden md:grid md:grid-cols-5 gap-3.5 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.label} className="relative group flex flex-col items-center">
                  <div
                    className={`w-full p-5 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
                      isLast
                        ? 'bg-[var(--accent)]/10 border-[var(--accent)]/40 text-[var(--accent)]'
                        : 'bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--text-primary)] group-hover:border-[var(--border-hover)]'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110 ${
                        isLast
                          ? 'bg-[var(--accent)] text-white'
                          : 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-heading text-lg font-bold mb-1">
                      {step.label}
                    </span>
                    <span className="text-[11px] text-[var(--text-secondary)] leading-tight font-normal">
                      {step.desc}
                    </span>
                  </div>

                  {!isLast && (
                    <div className="absolute top-1/2 -left-2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block text-[var(--text-muted)] font-mono text-sm pointer-events-none">
                      ←
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Pipeline */}
          <div className="md:hidden flex flex-col items-center space-y-3.5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <React.Fragment key={step.label}>
                  <div
                    className={`w-full max-w-sm p-4 rounded-xl border flex items-center gap-4 ${
                      isLast
                        ? 'bg-[var(--accent)]/10 border-[var(--accent)]/40 text-[var(--accent)]'
                        : 'bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--text-primary)]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        isLast
                          ? 'bg-[var(--accent)] text-white'
                          : 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="font-heading font-bold text-base">{step.label}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{step.desc}</div>
                    </div>
                  </div>

                  {!isLast && (
                    <ArrowDown className="w-4 h-4 text-[var(--text-muted)]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
