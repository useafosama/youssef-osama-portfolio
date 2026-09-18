'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { archiveProjects } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { Layers, ArrowUpLeft, Sparkles, Filter } from 'lucide-react';

export function MoreProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'الكل' },
    { id: 'web', label: 'مواقع' },
    { id: 'apps', label: 'تطبيقات' },
    { id: 'design', label: 'تصميم' },
    { id: 'branding', label: 'هوية' },
    { id: 'video', label: 'فيديو' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? archiveProjects
      : archiveProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-28 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>الأرشيف الإبداعي • ARCHIVE</span>
            </div>
            <h2 className="font-heading text-fluid-section font-extrabold text-[var(--text-primary)] leading-[1.2]">
              أعمال وتجارب أخرى
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[var(--text-secondary)] text-sm md:text-base max-w-sm">
            مجموعة مختارة من النماذج والأنظمة والتجارب البصرية التي قمت بتطويرها وتصميمها.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono pl-3 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>تصفية:</span>
          </div>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none ${
                activeCategory === tab.id
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-md'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-4">
                    <span className="font-mono text-[var(--accent)] font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
                    <span>{project.arabicTitle || project.title}</span>
                  </h3>
                  <div className="text-xs font-mono text-[var(--text-muted)] mb-3">
                    {project.title}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-subtle)]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
