'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Sparkles, Menu, X, ArrowUpLeft, Palette } from 'lucide-react';
import { useTheme, ThemeMode } from '@/context/ThemeContext';

export function Navbar() {
  const { theme, setTheme, nextTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الأعمال', href: '#works' },
    { label: 'المختبر', href: '#lab', badge: 'جديد' },
    { label: 'الفلسفة', href: '#philosophy' },
    { label: 'عني', href: '#about' },
    { label: 'رحلتي', href: '#experience' },
    { label: 'المهارات', href: '#skills' },
    { label: 'تواصل', href: '#contact' },
  ];

  const themesList: { id: ThemeMode; label: string; icon: string }[] = [
    { id: 'dark', label: 'ليلي', icon: '🌙' },
    { id: 'paper', label: 'ورقي', icon: '📄' },
    { id: 'blue', label: 'أزرق', icon: '💎' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out px-4 md:px-8 ${
          scrolled ? 'py-3 md:py-4' : 'py-6 md:py-8'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Floating Glass Container */}
          <div
            className={`w-full flex items-center justify-between transition-all duration-500 rounded-2xl px-5 py-3.5 ${
              scrolled
                ? 'glass-island shadow-[0_8px_32px_rgba(0,0,0,0.36)]'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] transition-transform duration-300 group-hover:scale-125" />
              <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                يوسف أسامة
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 relative py-1 focus:outline-none flex items-center gap-1.5"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded-md text-[10px] bg-[var(--accent)]/15 text-[var(--accent)] font-semibold">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Actions: 3-Mode Theme Switcher & Contact Button */}
            <div className="flex items-center gap-3">
              {/* Theme Switcher Toggle Pill */}
              <div className="relative">
                <button
                  onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                  aria-label="تغيير مظهر الموقع"
                  className="px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-hover)] border border-[var(--border-subtle)] transition-all duration-200 focus:outline-none"
                >
                  <span>
                    {theme === 'dark' ? '🌙 ليلي' : theme === 'paper' ? '📄 ورقي' : '💎 أزرق'}
                  </span>
                </button>

                {/* Theme Selector Popover */}
                <AnimatePresence>
                  {themeDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-36 glass-island rounded-xl p-1.5 shadow-xl border border-[var(--border-subtle)] z-50 flex flex-col gap-1"
                    >
                      {themesList.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => {
                            setTheme(t.id);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-1.5 rounded-lg text-xs font-medium text-right flex items-center justify-between transition-colors ${
                            theme === t.id
                              ? 'bg-[var(--accent)] text-white font-bold'
                              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                          }`}
                        >
                          <span>{t.label}</span>
                          <span>{t.icon}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Quick Contact CTA */}
              <a
                href="#contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity"
              >
                <span>تواصل معي</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="فتح القائمة"
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-island rounded-2xl p-6 shadow-2xl border border-[var(--border-subtle)]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[var(--text-primary)] py-2 border-b border-[var(--border-subtle)]/50 last:border-none flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.2 rounded-md text-[10px] bg-[var(--accent)]/15 text-[var(--accent)] font-semibold">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ArrowUpLeft className="w-4 h-4 text-[var(--text-secondary)]" />
                </a>
              ))}

              {/* Mobile Theme Switcher */}
              <div className="pt-2 border-t border-[var(--border-subtle)]/50">
                <div className="text-xs text-[var(--text-muted)] mb-2 font-mono">المظهر البصري:</div>
                <div className="grid grid-cols-3 gap-2">
                  {themesList.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                        theme === t.id
                          ? 'bg-[var(--accent)] text-white border-transparent'
                          : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                      }`}
                    >
                      <span>{t.icon}</span>
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 rounded-xl bg-[var(--accent)] text-white text-center font-bold text-sm shadow-lg shadow-[var(--accent)]/20"
              >
                تواصل معي مباشرة
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
