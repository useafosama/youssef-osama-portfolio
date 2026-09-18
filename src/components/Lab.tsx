'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FlaskConical,
  Eye,
  Camera,
  Activity,
  Users,
  Clock,
  TrendingUp,
  Zap,
  ArrowUpLeft,
  Terminal,
  ShieldAlert,
  Info,
  Layers,
  X,
  Radio,
} from 'lucide-react';
import { labExperiments } from '@/data/lab';

export function Lab() {
  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(null);

  return (
    <section id="lab" className="py-28 md:py-40 relative bg-[var(--bg-surface)] border-y border-[var(--border-subtle)] overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-3">
              <FlaskConical className="w-4 h-4 text-[#38BDF8]" />
              <span>المختبر • CREATIVE TECHNOLOGY LAB</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)]">
              المختبر
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[var(--text-secondary)] text-sm md:text-base max-w-sm">
            أفكار وتجارب تقنية ما زالت قيد البناء، تجمع بين الذكاء الاصطناعي وهندسة النظم وتجارب التفاعل.
          </p>
        </div>

        {/* Experiment Showcase */}
        {labExperiments.map((experiment) => (
          <div
            key={experiment.id}
            className="glass-card rounded-3xl p-6 md:p-10 border border-[var(--border-subtle)] relative overflow-hidden group hover:border-[#38BDF8]/40 transition-all duration-500"
          >
            {/* Top Status & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>{experiment.statusLabel}</span>
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  SYSTEM STATUS — EXPERIMENTAL
                </span>
              </div>

              {/* Demo Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[var(--text-muted)]">
                <Info className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Demo / Prototype Data</span>
              </div>
            </div>

            {/* Experiment Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                    {experiment.arabicTitle}
                  </h3>
                  <div className="text-xs font-mono text-[#38BDF8] mb-4">
                    {experiment.subtitle}
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {experiment.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {experiment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA & Note */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <div className="text-xs text-[var(--text-muted)] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>التجربة ما زالت قيد البناء والاختبار المعملي.</span>
                  </div>

                  <button
                    onClick={() => setSelectedExperiment(experiment.id)}
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[#38BDF8]/15 text-[var(--text-primary)] hover:text-[#38BDF8] border border-[var(--border-subtle)] hover:border-[#38BDF8]/40 font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-[0.98]"
                  >
                    <span>متابعة التطوير</span>
                    <ArrowUpLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Visual Dashboard Preview (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#080E18] border border-[#38BDF8]/20 p-5 md:p-6 shadow-2xl relative overflow-hidden">
                  {/* Dashboard Top Status */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Radio className="w-4 h-4 text-[#38BDF8] animate-pulse" />
                      <span>CAM-01 • MAIN ENTRANCE STREAM</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      LIVE INFERENCE • 48 FPS
                    </span>
                  </div>

                  {/* Simulated Camera Feed with Object Detection Bounding Boxes */}
                  <div className="relative aspect-video rounded-xl bg-neutral-950 border border-white/10 mb-5 overflow-hidden flex items-center justify-center">
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Camera Feed Mock Graphic */}
                    <div className="text-center z-10 p-4">
                      <Eye className="w-8 h-8 text-[#38BDF8]/70 mx-auto mb-2" />
                      <div className="text-xs font-mono text-neutral-300">
                        خوارزمية تتبع ورصد الحركة (YOLOv8 + ByteTrack)
                      </div>
                      <div className="text-[10px] text-neutral-500 font-mono mt-1">
                        CONFIDENCE: 96.4% • DETECTED: 4 PERSONS
                      </div>
                    </div>

                    {/* Simulated Bounding Box 1 */}
                    <div className="absolute top-1/4 right-1/4 w-24 h-36 border-2 border-emerald-400/80 rounded-md bg-emerald-400/10 flex flex-col justify-between p-1 text-[9px] font-mono text-emerald-300">
                      <span>ID: #1042 (98%)</span>
                      <span className="text-[8px] bg-black/60 px-1 rounded">Zone: A</span>
                    </div>

                    {/* Simulated Bounding Box 2 */}
                    <div className="absolute bottom-1/4 left-1/3 w-20 h-32 border-2 border-[#38BDF8]/80 rounded-md bg-[#38BDF8]/10 flex flex-col justify-between p-1 text-[9px] font-mono text-[#38BDF8]">
                      <span>ID: #1043 (94%)</span>
                      <span className="text-[8px] bg-black/60 px-1 rounded">Zone: B</span>
                    </div>

                    {/* Heatmap indicator */}
                    <div className="absolute bottom-2 right-3 text-[10px] font-mono text-neutral-400 bg-black/80 px-2 py-1 rounded">
                      ZONE OCCUPANCY: OPTIMAL
                    </div>
                  </div>

                  {/* 4 Metric Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                    {experiment.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <div className="text-[10px] text-neutral-400 mb-1 leading-tight font-normal">
                          {metric.label}
                        </div>
                        <div className="text-sm sm:text-base font-bold text-white font-mono">
                          {metric.value}
                        </div>
                        <div className="text-[9px] text-[#38BDF8] mt-0.5 font-mono">
                          {metric.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hourly Foot-traffic Activity Micro-Chart */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono mb-2">
                      <span>مخطط الحركة اليومية (10 AM — 11 PM)</span>
                      <span className="text-[#38BDF8]">الذروة: 7:30 PM</span>
                    </div>
                    <div className="h-9 flex items-end gap-1.5 pt-1">
                      {[25, 40, 35, 55, 70, 90, 100, 85, 60, 45, 30].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                          <div
                            style={{ height: `${val}%` }}
                            className={`w-full rounded-t-sm transition-all duration-300 ${
                              val >= 90
                                ? 'bg-[#38BDF8]'
                                : val >= 60
                                ? 'bg-[#38BDF8]/60'
                                : 'bg-white/20'
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lab Details Modal */}
      <AnimatePresence>
        {selectedExperiment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              className="max-w-lg w-full glass-island rounded-3xl p-6 md:p-8 border border-[var(--border-subtle)] shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedExperiment(null)}
                aria-label="إغلاق النافذة"
                className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mb-6">
                <FlaskConical className="w-6 h-6" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-2">
                نظام تحليل حركة الزوار • قيد التطوير
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                هذه التجربة ضمن المشاريع البحثية التي أعمل عليها لدمج نماذج الرؤية الحاسوبية (Computer Vision) في تطبيقات الويب الحية لتحليل البيانات المكانية للمتاجر والفعاليات.
              </p>

              <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] mb-6 space-y-2 font-mono">
                <div className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#38BDF8]" />
                  <span>المرحلة الحالية:</span>
                </div>
                <div>• تدريب نماذج الكشف عن الأشخاص وتصفية الانعكاسات.</div>
                <div>• بناء لوحة تحكم فورية باستخدام WebSockets و React.</div>
              </div>

              <button
                onClick={() => setSelectedExperiment(null)}
                className="w-full py-3 rounded-xl bg-[#38BDF8] hover:bg-[#0284c7] text-neutral-950 font-bold text-sm shadow-lg shadow-[#38BDF8]/20 transition-colors"
              >
                فهمت، استمرار التصفح
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
