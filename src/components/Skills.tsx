'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Palette, Code2, Sparkles, Layers, Terminal, Wand2 } from 'lucide-react';

export function Skills() {
  const categoryIcons = [
    <Palette key="1" className="w-5 h-5 text-[var(--accent)]" />,
    <Code2 key="2" className="w-5 h-5 text-emerald-400" />,
    <Sparkles key="3" className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section id="skills" className="py-28 md:py-40 relative bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>المهارات والتقنيات • SKILLS & STACK</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)]">
              الأدوات التي أصنع بها
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[var(--text-secondary)] text-sm md:text-base max-w-sm">
            مزيج متكامل من أدوات التصميم والهندسة البرمجية والحلول الإبداعية لإنتاج تجارب رقمية شاملة.
          </p>
        </div>

        {/* 3 Editorial Columns with Interactive Magnetic/Hover Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover:border-[var(--accent)]/40 transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center">
                    {categoryIcons[index]}
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1">
                  {category.arabicTitle}
                </h3>
                <div className="text-xs font-mono text-[var(--text-muted)] mb-4">
                  {category.title}
                </div>

                <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                  {category.description}
                </p>
              </div>

              {/* Interactive Skills Pill Cloud */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10 transition-all duration-200 cursor-default"
                  >
                    <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[10px] text-[var(--text-muted)] group-hover/pill:text-[var(--accent)] transition-colors">
                        • {skill.tag.split(' ')[0]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Running Ticker */}
        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)]/60 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
            <span>تحديث وتطوير مستمر للأدوات والمهارات وفق متطلبات عام 2026</span>
          </div>
          <span className="hidden sm:inline">UI / UX • FULLSTACK • MOTION • AI</span>
        </div>
      </div>
    </section>
  );
}
