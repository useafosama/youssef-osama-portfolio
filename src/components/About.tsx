'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { yosuefStats } from '@/data/stats';
import { profileData } from '@/data/profile';
import { socialLinks } from '@/data/socials';
import { Layers, Video, Code, ArrowUpLeft, Sparkles } from 'lucide-react';

function CounterNumber({
  targetValue,
  suffix = '',
  isText = false,
}: {
  targetValue: number | string;
  suffix?: string;
  isText?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(isText ? targetValue : 0);

  useEffect(() => {
    if (isText || !isInView) return;

    const num = typeof targetValue === 'number' ? targetValue : parseInt(targetValue as string, 10);
    if (isNaN(num)) return;

    let start = 0;
    const duration = 1400; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = num / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setDisplayValue(num);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue, isText]);

  return (
    <span ref={ref} className="font-heading font-black tracking-tight leading-none">
      {displayValue}
      {suffix}
    </span>
  );
}

export function About() {
  const pillarIcons = [
    <Layers key="1" className="w-4 h-4 text-[var(--accent)]" />,
    <Video key="2" className="w-4 h-4 text-purple-400" />,
    <Code key="3" className="w-4 h-4 text-emerald-400" />,
  ];

  return (
    <section id="about" className="py-28 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>عن يوسف • ABOUT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-8 tracking-tight">
              مين يوسف؟
            </h2>

            {/* Structured Punchy Bio */}
            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl text-[var(--text-primary)] font-semibold font-heading leading-snug">
                مصمم جرافيك، محرر فيديو، ومطور مهتم ببناء التجارب والمنتجات الرقمية.
              </p>

              <p>
                أمتلك أكثر من 3 سنوات من الخبرة في تصميم الهويات البصرية (Visual Identity & Branding)، وإنتاج المحتوى التعليمي والإبداعي، وتحرير الفيديو الاحترافي، والتعامل المتقدم مع أدوات الذكاء الاصطناعي.
              </p>

              <p>
                أجمع بين دقة التصميم الإبداعي وكفاءة البناء البرمجي لتطوير منتجات وتطبيقات ويب سريعة، بديهية، وتخدم أهداف الأعمال بفاعلية.
              </p>
            </div>

            {/* Core Pillars from CV Data */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {profileData.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between"
                >
                  <div className="w-8 h-8 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center mb-3">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[var(--text-primary)] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Presence Quick Block: أين تجدني؟ */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>أين تجدني؟ • SOCIAL PRESENCE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                  >
                    <span>{social.name}</span>
                    <ArrowUpLeft className="w-3 h-3 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Typography-Driven Stats Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-r border-[var(--border-subtle)] lg:pr-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              يوسف بالأرقام • BY THE NUMBERS
            </div>

            {yosuefStats.map((stat, i) => (
              <div key={stat.id} className="group flex flex-col space-y-2">
                <div className="text-6xl sm:text-7xl md:text-8xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  <CounterNumber
                    targetValue={stat.value}
                    suffix={stat.suffix}
                    isText={stat.isText}
                  />
                </div>

                <div className="font-heading text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  {stat.label}
                </div>

                <div className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-sm">
                  {stat.sublabel}
                </div>

                {i < yosuefStats.length - 1 && (
                  <div className="w-full pt-6 border-b border-[var(--border-subtle)]/70" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
