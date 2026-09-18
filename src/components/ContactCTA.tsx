'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpLeft, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { contactInfo, socialLinks } from '@/data/socials';
import { profileData } from '@/data/profile';

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'linkedin':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case 'behance':
        return (
          <span className="font-bold font-mono text-sm tracking-tighter leading-none">
            Bē
          </span>
        );
      case 'youtube':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'tiktok':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.38-1.42 3.61-3.23.08-.71.06-1.43.06-2.14V.02h-.42z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-28 md:py-44 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[var(--accent)]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        {/* Intro Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[var(--accent)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>جاهز لبناء شيء استثنائي • GET IN TOUCH</span>
        </div>

        {/* Small Intro Title */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[var(--text-secondary)] font-medium mb-4">
          عندك فكرة؟
        </p>

        {/* Big Typography CTA */}
        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[var(--text-primary)] tracking-tight leading-[1.08] mb-12 max-w-4xl mx-auto select-none">
          خلينا نحولها لحاجة حقيقية.
        </h2>

        {/* Real Contact Badges (Email & Phone) with Micro-interactions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {/* Email Box with Mailto and One-Click Copy */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/50 text-[var(--text-primary)] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-[var(--text-muted)]">البريد الإلكتروني</div>
              <div className="text-xs sm:text-sm font-bold font-mono">{contactInfo.email}</div>
            </div>
            <button
              onClick={copyEmail}
              title="نسخ البريد"
              aria-label="نسخ البريد الإلكتروني"
              className="mr-2 p-1.5 rounded-lg bg-[var(--bg-surface-elevated)] hover:bg-[var(--accent)]/20 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {copied ? (
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> تم النسخ ✓
                </span>
              ) : (
                <span className="text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1">
                  <Copy className="w-3.5 h-3.5" /> انسخ البريد
                </span>
              )}
            </button>
          </a>

          {/* Phone Box with Direct Dial */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/50 text-[var(--text-primary)] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-[var(--text-muted)]">الهاتف / واتساب</div>
              <div className="text-xs sm:text-sm font-bold font-mono" dir="ltr">{contactInfo.phoneDisplay}</div>
            </div>
            <span className="mr-2 text-[11px] text-emerald-400 opacity-80 group-hover:opacity-100 flex items-center gap-1">
              اتصل بي ↗
            </span>
          </a>
        </div>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href={`mailto:${contactInfo.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl shadow-[var(--accent)]/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-5 h-5" />
            <span>ابدأ محادثة</span>
            <ArrowUpLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
          </a>

          <a
            href="https://www.linkedin.com/in/youssef-osama1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-primary)] font-medium text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>تواصل معي على LinkedIn</span>
            <ArrowUpLeft className="w-4 h-4 text-[#0A84FF]" />
          </a>
        </div>

        {/* Social Links Editorial Grid */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-[var(--border-subtle)]">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-6">
            شبكات التواصل والمنصات • CONNECT WITH ME
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 text-xs sm:text-sm font-medium"
              >
                <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                  {getSocialIcon(link.id)}
                </span>
                <span>{link.name}</span>
                <ArrowUpLeft className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Personal Brand Motto */}
          <div className="mt-12 text-xs font-mono text-[var(--text-muted)] tracking-wider">
            {profileData.motto}
          </div>
        </div>
      </div>
    </section>
  );
}
