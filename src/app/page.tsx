'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Lab } from '@/components/Lab';
import { Philosophy } from '@/components/Philosophy';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { MoreProjects } from '@/components/MoreProjects';
import { Process } from '@/components/Process';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { GuidedTour } from '@/components/GuidedTour';

export default function Home() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Smart Context-Aware Cursor for Desktop */}
      <CustomCursor />

      {/* Floating Glass Navbar with 3-Mode Theme Switcher */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Hero onStartTour={() => setTourOpen(true)} />
        <FeaturedProjects />
        <Lab />
        <Philosophy />
        <About />
        <Experience />
        <Skills />
        <MoreProjects />
        <Process />
        <ContactCTA />
        <Footer />
      </div>

      {/* 60-Second Guided Tour Overlay */}
      <GuidedTour isOpen={tourOpen} onClose={() => setTourOpen(false)} />
    </main>
  );
}
