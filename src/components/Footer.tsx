'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Roles */}
          <div className="text-center md:text-right">
            <div className="font-heading text-lg font-bold text-[var(--text-primary)] mb-1">
              يوسف أسامة
            </div>
            <div className="text-xs text-[var(--text-secondary)]">
              مصمم • مطوّر • صانع تجارب رقمية
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[var(--text-muted)] font-mono text-center">
            © 2026 يوسف أسامة. جميع الحقوق محفوظة.
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="الرجوع لأعلى الصفحة"
            className="w-10 h-10 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
