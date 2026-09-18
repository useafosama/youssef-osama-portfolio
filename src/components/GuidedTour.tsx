'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, ArrowRight, X, Check, Compass, Send } from 'lucide-react';

export interface TourStep {
  id: string;
  targetId: string;
  title: string;
  category: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    id: 'step-1',
    targetId: 'about',
    category: '01 • الرؤية والخبرة',
    title: 'نبذة سريعة عن يوسف أسامة',
    description: 'مصمم ومطور منتجات رقمية يجمع بين دقة الـ UI/UX وكفاءة الهندسة البرمجية مع أكثر من 3 سنوات من الخبرة.',
  },
  {
    id: 'step-2',
    targetId: 'works',
    category: '02 • المشروع الأكبر',
    title: 'QGYM — نظام إدارة الجيم 2026',
    description: 'منظومة سحابية متطورة لإدارة الفروع والاشتراكات والحضور السريع والتقارير المالية بدقة متناهية.',
  },
  {
    id: 'step-3',
    targetId: 'works',
    category: '03 • بناء العادات',
    title: 'Wazeb — واظب',
    description: 'تطبيق ويب تحفيزي يساعد المستخدمين على الالتزام اليومي وبناء عادات مستدامة.',
  },
  {
    id: 'step-4',
    targetId: 'works',
    category: '04 • تجربة روحية هادئة',
    title: 'Sakinah — سكينة',
    description: 'مساحة رقمية مريحة بصريًا للأذكار والمحتوى الإسلامي بتجريد وهدوء تام.',
  },
  {
    id: 'step-5',
    targetId: 'lab',
    category: '05 • مختبر التجارب',
    title: 'المختبر • Computer Vision Analytics',
    description: 'أبحاث وتجارب ذكاء اصطناعي لتحليل حركة الزوار وسلوك الجمهور من الكاميرات.',
  },
  {
    id: 'step-6',
    targetId: 'skills',
    category: '06 • الترسانة التقنية',
    title: 'الأدوات التي أصنع بها',
    description: 'منظومة شاملة تشمل Figma و Next.js و React و Tailwind CSS و أدوات الذكاء الاصطناعي.',
  },
  {
    id: 'step-7',
    targetId: 'contact',
    category: '07 • الخطوة القادمة',
    title: 'جاهز لبناء مشروعك القادم؟',
    description: 'سواء كانت فكرة ناشئة أو منتجًا يحتاج لإعادة تصميم وتطوير متقن، يسعدني التعاون معك.',
  },
];

interface GuidedTourProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GuidedTour({ isOpen, onClose }: GuidedTourProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const step = tourSteps[currentStepIndex];

  useEffect(() => {
    if (!isOpen) {
      setCurrentStepIndex(0);
      setIsCompleted(false);
      return;
    }

    // Scroll to the current target section
    const targetEl = document.getElementById(step.targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isOpen, currentStepIndex, step?.targetId]);

  // Keyboard navigation (Esc to exit, Arrow keys to navigate)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handleNext();
      } else if (e.key === 'ArrowRight') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStepIndex]);

  const handleNext = () => {
    if (currentStepIndex < tourSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 pointer-events-none">
      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key={`step-${currentStepIndex}`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto max-w-lg w-full glass-island rounded-2xl p-5 shadow-2xl border border-[var(--border-hover)]"
          >
            {/* Top Bar: Progress & Close */}
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[var(--border-subtle)] text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[var(--accent)] font-bold">
                  0{currentStepIndex + 1} / 0{tourSteps.length}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                <span className="text-[var(--text-muted)] font-mono text-[11px]">
                  {step.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
                aria-label="تخطي الجولة"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Step Body */}
            <div className="mb-4">
              <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-1">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={onClose}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium transition-colors"
              >
                تخطي الجولة
              </button>

              <div className="flex items-center gap-2">
                {currentStepIndex > 0 && (
                  <button
                    onClick={handlePrev}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
                  >
                    السابق
                  </button>
                )}

                <button
                  onClick={handleNext}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/20 hover:opacity-95 transition-opacity flex items-center gap-1.5"
                >
                  <span>
                    {currentStepIndex === tourSteps.length - 1 ? 'إنهاء الجولة' : 'التالي'}
                  </span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Completion Modal */
          <motion.div
            key="tour-completed"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            className="pointer-events-auto max-w-md w-full glass-island rounded-3xl p-6 shadow-2xl border border-[var(--accent)]/40 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)] mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-1">
              اكتملت الجولة السريعة ✨
            </div>
            <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
              دلوقتي عرفت شوية عني.
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
              عندك فكرة؟ خلينا نحولها لحاجة حقيقية وتجربة استثنائية.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-[var(--accent)] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[var(--accent)]/20 flex items-center justify-center gap-2"
              >
                <span>تواصل معي</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                إغلاق
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
