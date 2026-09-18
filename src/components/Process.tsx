'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/process';
import { Search, PenTool, Code, CheckCircle2 } from 'lucide-react';

export function Process() {
  const stepIcons = [
    <Search key="1" className="w-5 h-5 text-[var(--accent)]" />,
    <PenTool key="2" className="w-5 h-5 text-purple-400" />,
    <Code key="3" className="w-5 h-5 text-emerald-400" />,
    <CheckCircle2 key="4" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section className="py-28 md:py-40 relative bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>منهجية العمل • PROCESS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)]">
              من الفكرة إلى المنتج
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[var(--text-secondary)] text-sm md:text-base max-w-sm">
            خطوات واضحة ومدروسة تضمن تحويل الرؤية المجردة إلى منتج استثنائي ذي قيمة عملية.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover:border-[var(--accent)]/40 transition-all duration-300"
            >
              <div>
                {/* Step Top Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl md:text-4xl font-black text-[var(--text-primary)]/20 group-hover:text-[var(--accent)] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <div className="text-xs text-[var(--accent)] font-medium mb-4">
                  {step.tagline}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                    <span className="text-[var(--accent)] mt-1">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
