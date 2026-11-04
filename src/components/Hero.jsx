import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { resumeData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#F5F2EC] dark:bg-[#0F0E0D] pt-20 sm:pt-24 pb-6 transition-colors duration-300"
    >
      {/* Background Layer: High-Res Master Artwork with Gaurav's Actual Cutout Portrait, 3D Ring, Organic Arch & Lines */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 hidden lg:block transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
        }}
      >
        <img 
          src="/assets/hero_clean_2x.png" 
          alt="Gaurav Patil Portrait Artwork"
          className="w-full h-full object-contain object-bottom select-none"
        />
      </div>

      {/* Mobile/Tablet Viewport Display */}
      <div className="lg:hidden relative w-full px-6 flex justify-center my-4">
        <div className="relative max-w-sm w-full rounded-2xl overflow-hidden border border-[#D4D1CC] dark:border-[#2E2D2A] shadow-lg bg-[#E8E6E3] dark:bg-[#181716]">
          <img 
            src="/assets/hero_clean_2x.png" 
            alt="Gaurav Patil" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Main Content Viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col justify-between">
        {/* Upper Row: Left Hero Copy & Right Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 lg:pt-3">
          {/* Left Column (Crystal Clear Readable Typography & Proportions) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Availability Badge */}
            <div className="mb-4 sm:mb-5">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#D4D1CC] dark:border-[#3A3835] bg-[#E8E6E3]/90 dark:bg-[#1C1B19]/90 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#EEEEEE] animate-pulse" />
                <span className="text-xs font-semibold text-[#111111] dark:text-[#E0E0E0] tracking-wide">
                  {resumeData.personal.status}
                </span>
              </div>
            </div>

            {/* Oversized Name Typography in Solid, Highly Readable Fonts */}
            <div className="select-none">
              <h1 className="font-hero-serif text-[#111111] dark:text-[#F5F2EC] text-6xl sm:text-7xl md:text-8xl lg:text-[102px] xl:text-[116px] leading-[0.88] tracking-tight block font-bold transition-colors">
                {resumeData.personal.firstName}
              </h1>
              {/* PATIL. with exact master mockup left indentation */}
              <h1 className="font-hero-sans text-[#111111] dark:text-[#F5F2EC] text-6xl sm:text-7xl md:text-8xl lg:text-[102px] xl:text-[116px] leading-[0.88] tracking-tight block font-extrabold transition-colors pl-8 sm:pl-10 lg:pl-12 mt-1">
                {resumeData.personal.lastName}
              </h1>
            </div>

            {/* Subtitle / Role Line (Readable, Crisp, High Contrast) */}
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#222222] dark:text-[#E0E0E0] tracking-wide mt-4 sm:mt-5 transition-colors">
              {resumeData.personal.title}
            </p>

            {/* Two-Line Editorial Headline (High-Legibility Font) */}
            <div className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] leading-tight text-[#111111] dark:text-[#F5F2EC] tracking-tight transition-colors max-w-xl font-normal">
              <p>
                Turning <span className="font-editorial-serif italic font-bold">Ideas</span> Into
              </p>
              <p>
                Intelligent <span className="font-editorial-serif italic font-bold">Digital Experiences.</span>
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-7 sm:mt-9 pt-1">
              {/* Primary Black Pill Button */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#111111] text-[#F5F2EC] dark:bg-[#F5F2EC] dark:text-[#111111] hover:bg-black dark:hover:bg-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Outlined Pill Button */}
              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full border-2 border-[#111111] dark:border-[#D4D1CC] text-[#111111] dark:text-[#F5F2EC] hover:bg-[#111111]/5 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Download Resume</span>
                <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Minimal Text Link with Underline */}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-xs sm:text-sm font-bold text-[#111111] dark:text-[#F5F2EC] border-b-2 border-[#111111] dark:border-[#F5F2EC] pb-0.5 hover:opacity-75 transition-all ml-1"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column: Information & Education Metadata (High Legibility) */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:items-end lg:text-left pt-2 lg:pt-8 pl-0 lg:pl-16">
            {/* Top Right Block: Scalable Solutions Tagline */}
            <div className="max-w-xs">
              <p className="text-sm sm:text-base font-semibold text-[#111111] dark:text-[#F5F2EC] leading-snug transition-colors">
                {resumeData.personal.taglineRight1}
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#111111] dark:text-[#F5F2EC] leading-snug transition-colors">
                {resumeData.personal.taglineRight2}
              </p>
            </div>

            {/* Middle Right Block: Education Details */}
            <div className="max-w-xs mt-6 sm:mt-10">
              <p className="text-xs sm:text-sm font-semibold text-[#222222] dark:text-[#E0E0E0] leading-relaxed transition-colors">
                B.Tech Computer Engineering
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#444444] dark:text-[#CCCCCC] leading-relaxed transition-colors">
                MPSTME, NMIMS University
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#666666] dark:text-[#A09D96] leading-relaxed transition-colors">
                | 2023 – 2027
              </p>
            </div>

            {/* 4-Point Star Glyph */}
            <div className="mt-8 sm:mt-12 text-[#555555] dark:text-[#888888] select-none text-2xl">
              ✦
            </div>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator */}
        <div className="pt-6 sm:pt-8 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#555555] dark:text-[#A09D96]">
            {/* Minimal vertical line */}
            <span className="h-5 w-[1px] bg-[#B8B8B8] dark:bg-[#444444] inline-block" />
            
            {/* Minimal mouse outline with scrolling dot */}
            <div className="w-4 h-6 rounded-full border border-[#555555] dark:border-[#888888] flex items-start justify-center p-1">
              <span className="w-1 h-1.5 rounded-full bg-[#111111] dark:bg-[#EEEEEE] animate-scroll-wheel" />
            </div>

            <span className="text-xs tracking-wider font-medium text-[#555555] dark:text-[#A09D96]">
              Scroll to explore
            </span>
          </div>

          {/* Location / Current year pill badge */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#666666] dark:text-[#888888] font-normal">
            <span>Mumbai & Shirpur, IN</span>
            <span>•</span>
            <span>Portfolio &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
