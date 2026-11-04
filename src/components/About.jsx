import React from 'react';
import { resumeData } from '../data/portfolioData';
import { Award, BookOpen, Heart, Terminal, Sparkles, MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-[#F5F2EC] dark:bg-[#0F0E0D] border-t border-[#D4D1CC]/60 dark:border-[#2E2D2A] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-semibold text-[#777777] dark:text-[#9E9B95]">
              <span>01</span>
              <span className="w-8 h-[1px] bg-[#B8B8B8] dark:bg-[#444444]" />
              <span>Background & Philosophy</span>
            </div>
            <h2 className="font-hero-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-[#F5F2EC]">
              About Me.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555555] dark:text-[#A09D96] max-w-lg font-normal leading-relaxed">
            Computer Engineering undergraduate at MPSTME, NMIMS University, dedicated to developing intelligent AI systems, data pipelines, and responsive full-stack applications.
          </p>
        </div>

        {/* Two-Column Editorial Spread with User's Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Campus Photograph & Stat Badges */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Decorative Architectural Border */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] pointer-events-none transition-transform duration-500 group-hover:scale-[1.01]" />
              
              {/* Image Frame */}
              <div className="relative rounded-xl overflow-hidden bg-[#E8E6E3] dark:bg-[#181716] shadow-xl border border-[#D4D1CC] dark:border-[#2E2D2A]">
                <img 
                  src="/assets/gaurav_campus.jpg" 
                  alt="Gaurav Patil at NMIMS University Campus" 
                  className="w-full h-auto object-cover contrast-105 transition-all duration-700 ease-in-out"
                />
                
                {/* Overlay Caption Banner */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 text-white">
                  <p className="font-hero-sans text-base font-bold tracking-wide">
                    Gaurav Patil
                  </p>
                  <p className="text-xs text-white/80 font-light mt-0.5 flex items-center gap-1.5">
                    <MapPin size={12} />
                    <span>MPSTME, NMIMS University &bull; Shirpur & Mumbai</span>
                  </p>
                </div>
              </div>

              {/* Decorative Corner Glyph */}
              <span className="absolute -bottom-2 -right-2 text-2xl text-[#888888] select-none">
                ✦
              </span>
            </div>

            {/* Quick Metrics Grid Below Photo */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {resumeData.about.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/80 dark:bg-[#181716]/80 backdrop-blur-sm"
                >
                  <p className="text-xl font-bold font-hero-sans text-[#111111] dark:text-[#F5F2EC]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#666666] dark:text-[#A09D96] mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Narrative, Social Impact & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-[#222222] dark:text-[#D4D1CC] leading-relaxed">
              <div className="p-6 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777777] dark:text-[#9E9B95] mb-2">
                  <Sparkles size={14} className="text-[#111111] dark:text-[#F5F2EC]" />
                  <span>Engineering Focus</span>
                </div>
                <h3 className="font-hero-sans text-xl sm:text-2xl font-bold text-[#111111] dark:text-[#F5F2EC] leading-snug">
                  {resumeData.about.lead}
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-[#444444] dark:text-[#B0ACA5] leading-relaxed font-normal">
                {resumeData.about.bio}
              </p>

              {/* Community Highlight Card */}
              <div className="p-6 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/80 dark:bg-[#181716]/80 backdrop-blur-sm relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#111111] text-[#F5F2EC] dark:bg-[#F5F2EC] dark:text-[#111111] shrink-0">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-hero-sans font-bold text-base text-[#111111] dark:text-[#F5F2EC] tracking-wide">
                      Community Service & Creative Mentorship
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] dark:text-[#9E9B95] mt-1.5 leading-relaxed font-normal">
                      {resumeData.about.community}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-[#D4D1CC]/70 dark:border-[#2E2D2A]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#111111] dark:text-[#F5F2EC] tracking-wide uppercase">
                  <Terminal size={14} className="text-[#777777]" />
                  <span>AI & Automation</span>
                </div>
                <p className="text-xs text-[#666666] dark:text-[#9E9B95] font-normal leading-relaxed">
                  Building context-aware RAG pipelines and intelligent assistants with LangChain & Gemini.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#111111] dark:text-[#F5F2EC] tracking-wide uppercase">
                  <BookOpen size={14} className="text-[#777777]" />
                  <span>Data Precision</span>
                </div>
                <p className="text-xs text-[#666666] dark:text-[#9E9B95] font-normal leading-relaxed">
                  Transforming chaotic transaction data into actionable Power BI & customer segmentation models.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#111111] dark:text-[#F5F2EC] tracking-wide uppercase">
                  <Award size={14} className="text-[#777777]" />
                  <span>Clean Architecture</span>
                </div>
                <p className="text-xs text-[#666666] dark:text-[#9E9B95] font-normal leading-relaxed">
                  Adhering to strict OOP principles, REST standards, and validated database execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
