import React from 'react';
import { resumeData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-24 sm:py-32 bg-[#F5F2EC] dark:bg-[#0F0E0D] border-t border-[#D4D1CC]/60 dark:border-[#2E2D2A] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-semibold text-[#777777] dark:text-[#9E9B95]">
              <span>04</span>
              <span className="w-8 h-[1px] bg-[#B8B8B8] dark:bg-[#444444]" />
              <span>Academics & Credentials</span>
            </div>
            <h2 className="font-hero-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-[#F5F2EC]">
              Education & Certifications.
            </h2>
          </div>
          <p className="text-sm text-[#777777] dark:text-[#9E9B95] max-w-md font-light">
            A continuous trajectory of structured engineering coursework, competitive hackathons, and technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Academic Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-hero-sans text-xl font-bold text-[#111111] dark:text-[#F5F2EC] flex items-center gap-2.5 mb-6">
              <GraduationCap size={22} />
              <span>Academic Milestones</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#D4D1CC] dark:before:bg-[#2E2D2A]">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#111111] dark:bg-[#F5F2EC] ring-4 ring-[#F5F2EC] dark:ring-[#0F0E0D]" />
                  
                  <div className="p-6 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm transition-all duration-300 group-hover:border-[#111111] dark:group-hover:border-[#F5F2EC]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#E8E6E3] dark:bg-[#252422] text-[#444444] dark:text-[#CCCCCC] border border-[#D4D1CC] dark:border-[#333333]">
                        {edu.period}
                      </span>
                      <span className="text-xs font-semibold text-[#111111] dark:text-[#F5F2EC]">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="font-hero-sans text-lg font-bold text-[#111111] dark:text-[#F5F2EC]">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#444444] dark:text-[#CCCCCC] mt-0.5">
                      {edu.institution}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-[#777777] dark:text-[#9E9B95] mt-2">
                      <MapPin size={12} />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-xs text-[#555555] dark:text-[#9E9B95] mt-3 font-light leading-relaxed">
                      {edu.highlights}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications & Hackathons */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-hero-sans text-xl font-bold text-[#111111] dark:text-[#F5F2EC] flex items-center gap-2.5 mb-6">
              <Award size={22} />
              <span>Verified Certifications & Hackathons</span>
            </h3>

            {/* Certifications List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {resumeData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm flex items-start gap-3 hover:border-[#111111] dark:hover:border-[#F5F2EC] transition-all"
                >
                  <CheckCircle size={16} className="text-[#111111] dark:text-[#F5F2EC] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-hero-sans text-xs font-bold text-[#111111] dark:text-[#F5F2EC] leading-tight">
                      {cert.title}
                    </h5>
                    <p className="text-[11px] text-[#777777] dark:text-[#9E9B95] mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Achievements Box */}
            <div className="mt-8 p-6 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/80 dark:bg-[#181716]/80 backdrop-blur-sm">
              <h4 className="font-hero-sans text-sm font-bold text-[#111111] dark:text-[#F5F2EC] uppercase tracking-wider mb-4">
                Hackathons & Extracurriculars
              </h4>
              <div className="space-y-4">
                {resumeData.achievements.map((ach, idx) => (
                  <div key={idx} className="pb-4 border-b border-dashed border-[#D4D1CC] dark:border-[#2E2D2A] last:border-none last:pb-0">
                    <div className="flex items-center justify-between">
                      <h5 className="font-hero-sans text-sm font-semibold text-[#111111] dark:text-[#F5F2EC]">
                        {ach.title}
                      </h5>
                      <span className="text-[11px] font-mono text-[#777777] dark:text-[#9E9B95]">
                        {ach.role}
                      </span>
                    </div>
                    <p className="text-xs text-[#777777] dark:text-[#9E9B95] mt-0.5">
                      {ach.organization}
                    </p>
                    <p className="text-xs text-[#444444] dark:text-[#B0ACA5] mt-2 font-light leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
