'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpLeft,
  ExternalLink,
  CheckCircle2,
  Flame,
  Moon,
  BookOpen,
  Volume2,
  Users,
  Activity,
  CreditCard,
  Building2,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export function FeaturedProjects() {
  return (
    <section id="works" className="py-28 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>مشاريع مختارة • FEATURED WORKS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)]">
              مشاريع صنعتها
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[var(--text-secondary)] text-sm md:text-base max-w-sm">
            دراسات حالة لمنتجات وأنظمة رقمية حية تم تصميمها وبرمجتها لتقديم قيمة حقيقية وسلاسة استثنائية.
          </p>
        </div>

        {/* Featured Projects Editorial List */}
        <div className="space-y-28 md:space-y-40">
          {/* PROJECT 01: QGYM — نظام إدارة الجيم */}
          <article className="group relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Project Info (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-wider">
                      PROJECT 01
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                    <span className="text-xs text-[var(--text-muted)] font-mono">2026</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                    <span className="px-2 py-0.5 rounded text-[11px] bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                      Design + Development
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-3 flex items-baseline gap-3 group-hover:translate-x-[-4px] transition-transform duration-300">
                    <span>QGYM</span>
                    <span className="text-xl md:text-2xl text-[var(--text-secondary)] font-normal font-sans">
                      — نظام إدارة الجيم
                    </span>
                  </h3>

                  <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    نظام متكامل لإدارة الجيم والفروع والعملاء والاشتراكات والحضور والمدفوعات والتقارير من مكان واحد، مصمم لتقديم تجربة تحكم شاملة وسريعة لأصحاب الأندية والمدربين.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Web Application', 'Dashboard', 'Product Design', 'Full-Stack Development'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link Button */}
                <div className="pt-2">
                  <a
                    href="https://qgym-system.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[var(--accent)]/20 group/btn"
                  >
                    <span>استكشف المشروع</span>
                    <ArrowUpLeft className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>

              {/* Project Preview Mockup (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <a
                  href="https://qgym-system.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/preview relative rounded-2xl overflow-hidden glass-card p-4 md:p-6 transition-all duration-500 hover:border-[var(--accent)]/50 hover:shadow-[0_20px_60px_var(--accent-glow)]"
                >
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/60 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/60 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/60 inline-block" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                      <span>qgym-system.vercel.app/login</span>
                      <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                    </div>
                    <span className="text-[10px] text-[var(--accent)] font-medium">2026 LIVE</span>
                  </div>

                  {/* Browser Simulated Dashboard Canvas */}
                  <div className="bg-[#0B101B] rounded-xl p-5 md:p-6 border border-white/10 transition-transform duration-700 ease-out group-hover/preview:scale-[1.015]">
                    {/* Dashboard Header Bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)]">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">QGYM Control Suite</div>
                          <div className="text-neutral-400 text-xs">إدارة الصالات والاشتراكات المتقدمة</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/30 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>الفروع متصلة (4/4)</span>
                        </span>
                      </div>
                    </div>

                    {/* Stats Metric Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                      <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                        <div className="text-[10px] text-neutral-400 mb-1 flex items-center gap-1">
                          <Users className="w-3 h-3 text-[var(--accent)]" />
                          <span>المشتركين النشطين</span>
                        </div>
                        <div className="text-white font-bold text-sm sm:text-base font-mono">1,480+</div>
                        <div className="text-[9px] text-emerald-400 mt-0.5 font-mono">+12.4% هذا الشهر</div>
                      </div>

                      <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                        <div className="text-[10px] text-neutral-400 mb-1 flex items-center gap-1">
                          <Activity className="w-3 h-3 text-emerald-400" />
                          <span>الحضور اليومي</span>
                        </div>
                        <div className="text-white font-bold text-sm sm:text-base font-mono">89.2%</div>
                        <div className="text-[9px] text-neutral-400 mt-0.5 font-mono">342 تسجيل دخول</div>
                      </div>

                      <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                        <div className="text-[10px] text-neutral-400 mb-1 flex items-center gap-1">
                          <CreditCard className="w-3 h-3 text-purple-400" />
                          <span>التحصيل المالي</span>
                        </div>
                        <div className="text-white font-bold text-sm sm:text-base font-mono">98.5%</div>
                        <div className="text-[9px] text-emerald-400 mt-0.5 font-mono">تجديد فوري</div>
                      </div>

                      <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                        <div className="text-[10px] text-neutral-400 mb-1 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-amber-400" />
                          <span>كفاءة النظام</span>
                        </div>
                        <div className="text-white font-bold text-sm sm:text-base font-mono">99.9%</div>
                        <div className="text-[9px] text-neutral-400 mt-0.5 font-mono">مزامنة سحابية</div>
                      </div>
                    </div>

                    {/* Quick Live Rows */}
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-neutral-200 font-medium">تسجيل دخول سريع (QR Pass)</span>
                          <span className="text-neutral-500 text-[11px] font-mono">#MEM-8942</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">ناجح</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                          <span className="text-neutral-200 font-medium">تجديد اشتراك سنوي VIP</span>
                          <span className="text-neutral-500 text-[11px] font-mono">فرع التجمع</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-mono">مدفوع</span>
                      </div>
                    </div>

                    {/* Bottom CTA overlay on hover */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                      <span>لوحة تحكم شاملة للمدربين والإدارة</span>
                      <span className="text-[var(--accent)] font-medium flex items-center gap-1 group-hover/preview:underline">
                        استكشف المشروع ↗
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </article>

          {/* PROJECT 02: Wazeb — واظب */}
          <article className="group relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Project Preview Mockup (7 cols) */}
              <div className="lg:col-span-7 order-1">
                <a
                  href="https://wazeb.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/preview relative rounded-2xl overflow-hidden glass-card p-4 md:p-6 transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
                >
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/60 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/60 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/60 inline-block" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                      <span>wazeb.pages.dev</span>
                      <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium">LIVE</span>
                  </div>

                  {/* Browser Simulated Canvas */}
                  <div className="bg-[#0D1117] rounded-xl p-5 md:p-7 border border-white/5 transition-transform duration-700 ease-out group-hover/preview:scale-[1.015]">
                    {/* Wazeb Mock Header */}
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                          <Flame className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">واظب • Wazeb</div>
                          <div className="text-neutral-400 text-xs">استمرارية تصنع الفرق</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/30">
                          🔥 14 يوم متواصل
                        </span>
                      </div>
                    </div>

                    {/* Wazeb Mock Habit Cards */}
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-between hover:bg-white/[0.06] transition-colors">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <div>
                            <div className="text-neutral-200 text-xs md:text-sm font-semibold">قراءة 20 دقيقة يومياً</div>
                            <div className="text-neutral-400 text-[11px]">عادة معرفية • 8:00 صباحاً</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                            <span
                              key={d}
                              className={`w-4 h-5 rounded-sm flex items-center justify-center text-[9px] ${
                                d <= 5 ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 text-neutral-500'
                              }`}
                            >
                              ✓
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-between hover:bg-white/[0.06] transition-colors">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <div>
                            <div className="text-neutral-200 text-xs md:text-sm font-semibold">تمرين رياضي خفيف</div>
                            <div className="text-neutral-400 text-[11px]">صحة ولياقة • 6:30 مساءً</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                            <span
                              key={d}
                              className={`w-4 h-5 rounded-sm flex items-center justify-center text-[9px] ${
                                d <= 6 ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 text-neutral-500'
                              }`}
                            >
                              ✓
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full border border-neutral-600 inline-block" />
                          <div>
                            <div className="text-neutral-200 text-xs md:text-sm font-semibold">كتابة يومية والتدوين</div>
                            <div className="text-neutral-400 text-[11px]">تطوير شخصي • 10:00 مساءً</div>
                          </div>
                        </div>
                        <span className="text-[11px] text-amber-400 font-mono">قيد الانتظار</span>
                      </div>
                    </div>

                    {/* Bottom CTA overlay on hover */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                      <span>تصميم موجه لزيادة الالتزام والإنتاجية</span>
                      <span className="text-emerald-400 font-medium flex items-center gap-1 group-hover/preview:underline">
                        استكشف المشروع ↗
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Project Info (5 cols) */}
              <div className="lg:col-span-5 order-2 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-[#10B981] font-semibold tracking-wider">
                      PROJECT 02
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                    <span className="text-xs text-[var(--text-muted)] font-mono">2025</span>
                  </div>

                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-3 flex items-baseline gap-3 group-hover:translate-x-[-4px] transition-transform duration-300">
                    <span>واظب</span>
                    <span className="text-xl md:text-2xl text-[var(--text-secondary)] font-normal font-sans">
                      — Wazeb
                    </span>
                  </h3>

                  <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    تجربة رقمية لبناء العادات والاستمرارية، مصممة لتجعل متابعة العادات أكثر وضوحًا وتحفيزًا، مع واجهة تركز على الإنجاز اليومي والتحفيز المستمر.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['UI/UX', 'Web App', 'Product Design', 'Next.js', 'Habit Tracking'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link Button */}
                <div className="pt-2">
                  <a
                    href="https://wazeb.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 group/btn"
                  >
                    <span>زيارة المشروع</span>
                    <ArrowUpLeft className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* PROJECT 03: Sakinah — سكينة */}
          <article className="group relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Project Info (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider">
                      PROJECT 03
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                    <span className="text-xs text-[var(--text-muted)] font-mono">2025</span>
                  </div>

                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-3 flex items-baseline gap-3 group-hover:translate-x-[-4px] transition-transform duration-300">
                    <span>سكينة</span>
                    <span className="text-xl md:text-2xl text-[var(--text-secondary)] font-normal font-sans">
                      — Sakinah
                    </span>
                  </h3>

                  <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    تجربة رقمية هادئة للأذكار والمحتوى الإسلامي، مع تركيز تام على البساطة والوضوح وسهولة الاستخدام بدون إعلانات أو مشتتات بصرية.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['UI/UX', 'Web App', 'Islamic Experience', 'Minimalism', 'Typography'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link Button */}
                <div className="pt-2">
                  <a
                    href="https://sakinah-3ps.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-amber-600/20 group/btn"
                  >
                    <span>زيارة المشروع</span>
                    <ArrowUpLeft className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>

              {/* Project Preview Mockup (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <a
                  href="https://sakinah-3ps.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/preview relative rounded-2xl overflow-hidden glass-card p-4 md:p-6 transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_20px_60px_rgba(217,119,6,0.15)]"
                >
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/60 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/60 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/60 inline-block" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                      <span>sakinah-3ps.pages.dev</span>
                      <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                    </div>
                    <span className="text-[10px] text-amber-400 font-medium">LIVE</span>
                  </div>

                  {/* Sakinah Mockup Content */}
                  <div className="bg-[#12110E] rounded-xl p-5 md:p-8 border border-amber-500/10 text-center transition-transform duration-700 ease-out group-hover/preview:scale-[1.015]">
                    {/* Calm Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 mb-4 border border-amber-500/20">
                      <Moon className="w-6 h-6" />
                    </div>

                    <div className="text-amber-200/90 font-heading text-xl md:text-2xl font-bold mb-2">
                      سَكِينَة — أذكار وراحة للقلب
                    </div>
                    <div className="text-amber-100/60 text-xs md:text-sm max-w-md mx-auto mb-6">
                      "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
                    </div>

                    {/* Adhkar Interactive Card Demo */}
                    <div className="bg-white/[0.03] border border-amber-500/20 rounded-xl p-5 text-right mb-4">
                      <div className="flex items-center justify-between text-xs text-amber-300/70 mb-3">
                        <span>أذكار الصباح والمساء</span>
                        <span className="font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">33 / 33</span>
                      </div>
                      <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-normal">
                        سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ
                      </p>
                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/5 text-xs text-neutral-400">
                        <div className="flex items-center gap-2 text-amber-400/80">
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>صوت هادئ متوفر</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>فضل الذكر</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-neutral-400">
                      <span>واجهة مصممة بصفاء وبساطة روحية</span>
                      <span className="text-amber-400 font-medium flex items-center gap-1 group-hover/preview:underline">
                        استكشف المشروع ↗
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
