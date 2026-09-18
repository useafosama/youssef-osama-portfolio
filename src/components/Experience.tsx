'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/data/experience';
import { profileData } from '@/data/profile';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, Sparkles, Building2, Calendar } from 'lucide-react';

export function Experience() {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll
    ? experiences
    : experiences.filter((e) => e.featured);

  return (
    <section id="experience" className="py-28 md:py-40 relative bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Tag & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>المسار المهني • JOURNEY</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)]">
              رحلتي
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[var(--text-secondary)] text-sm md:text-base max-w-sm">
            محطات وتجارب عملية في التصميم، صناعة المحتوى، وبناء الهويات والمنتجات الرقمية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Experience Timeline (8 cols) */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {displayedExperiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-2xl p-6 relative group hover:border-[var(--accent)]/40 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] flex items-center gap-2 mt-0.5">
                          <Building2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                          <span>{exp.company}</span>
                          {exp.type && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                              <span className="text-xs text-[var(--text-muted)]">{exp.type}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] self-start whitespace-nowrap">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal pt-2 border-t border-[var(--border-subtle)]/60">
                        {exp.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Toggle All Experiences Button */}
            {experiences.length > 4 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 text-xs sm:text-sm font-semibold text-[var(--text-primary)] transition-all active:scale-[0.98]"
                >
                  <span>{showAll ? 'عرض المحطات الرئيسية فقط' : `عرض باقي المحطات (${experiences.length - 4}+)`}</span>
                  {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>

          {/* Education & Personal Brand Pillar (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32">
            {/* Education Box */}
            <div className="glass-card rounded-2xl p-6 md:p-7 relative overflow-hidden border border-[var(--border-subtle)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-1 font-semibold">
                التعليم • EDUCATION
              </div>

              <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-2">
                {profileData.education.university}
              </h3>

              <div className="text-xs text-[var(--text-secondary)] space-y-1 font-normal leading-relaxed">
                <div>• {profileData.education.faculty}</div>
                <div>• {profileData.education.department}</div>
                <div>• {profileData.education.division}</div>
              </div>
            </div>

            {/* Motto Badge Card */}
            <div className="p-6 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>شعار العمل</span>
              </div>
              <div className="font-heading text-base font-bold text-[var(--text-primary)]">
                {profileData.motto}
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                التكامل بين التصميم المتقن والهندسة البرمجية وصناعة المحتوى المرئي.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
