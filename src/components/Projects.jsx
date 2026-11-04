import React, { useState } from 'react';
import { resumeData } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Layers, Sparkles, X } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'AI & Generative AI', 'Data Analytics & BI', 'Full Stack & Web'];

  const filteredProjects = activeFilter === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === activeFilter);

  return (
    <section 
      id="projects" 
      className="py-24 sm:py-32 bg-[#F5F2EC] dark:bg-[#0F0E0D] border-t border-[#D4D1CC]/60 dark:border-[#2E2D2A] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-semibold text-[#777777] dark:text-[#9E9B95]">
              <span>02</span>
              <span className="w-8 h-[1px] bg-[#B8B8B8] dark:bg-[#444444]" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-hero-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-[#F5F2EC]">
              Featured Projects.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
                    active
                      ? 'bg-[#111111] text-[#F5F2EC] border-[#111111] dark:bg-[#F5F2EC] dark:text-[#111111] dark:border-[#F5F2EC] font-medium shadow-sm'
                      : 'bg-transparent text-[#666666] dark:text-[#A09D96] border-[#D4D1CC] dark:border-[#2E2D2A] hover:border-[#111111] dark:hover:border-[#F5F2EC]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm p-7 flex flex-col justify-between hover:border-[#111111] dark:hover:border-[#F5F2EC] transition-all duration-500 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Category Badge & Index */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#D4D1CC] dark:border-[#333333] bg-[#E8E6E3] dark:bg-[#1E1E1E] text-[#444444] dark:text-[#CCCCCC]">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#888888] dark:text-[#666666]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-hero-sans text-xl sm:text-2xl font-bold text-[#111111] dark:text-[#F5F2EC] group-hover:text-black dark:group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-[#777777] dark:text-[#9E9B95] mt-1">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#444444] dark:text-[#B0ACA5] font-light mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metric Badge */}
                <div className="mt-5 p-3 rounded-xl bg-[#E8E6E3]/70 dark:bg-[#1E1E1E]/70 border border-[#D4D1CC]/60 dark:border-[#2E2D2A] flex items-center gap-2">
                  <Sparkles size={14} className="text-[#111111] dark:text-[#F5F2EC] shrink-0" />
                  <span className="text-xs font-medium text-[#222222] dark:text-[#E0E0E0]">
                    {project.metrics}
                  </span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-[#DFDCD5] dark:bg-[#252422] text-[#333333] dark:text-[#D4D1CC] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Deep-Dive Button */}
              <div className="pt-8 mt-6 border-t border-[#D4D1CC]/60 dark:border-[#2E2D2A] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#111111] dark:text-[#F5F2EC] hover:opacity-75 transition-opacity"
                >
                  <span>Technical Breakdown</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#F5F2EC] dark:bg-[#181716] border border-[#D4D1CC] dark:border-[#333333] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#D4D1CC] dark:border-[#2E2D2A]">
              <div>
                <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#D4D1CC] dark:border-[#333333] bg-[#E8E6E3] dark:bg-[#1E1E1E] text-[#444444] dark:text-[#CCCCCC]">
                  {selectedProject.category}
                </span>
                <h3 className="font-hero-sans text-2xl font-bold text-[#111111] dark:text-[#F5F2EC] mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#777777] dark:text-[#9E9B95]">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-full hover:bg-[#E8E6E3] dark:hover:bg-[#2A2A2A] text-[#111111] dark:text-[#F5F2EC] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#777777] dark:text-[#9E9B95] mb-2">
                  Overview
                </h4>
                <p className="text-sm text-[#333333] dark:text-[#CCCCCC] leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#777777] dark:text-[#9E9B95] mb-3 flex items-center gap-2">
                  <Layers size={14} />
                  <span>Key Architecture & Implementation Highlights</span>
                </h4>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#333333] dark:text-[#CCCCCC] leading-relaxed font-light">
                      <CheckCircle2 size={16} className="text-[#111111] dark:text-[#F5F2EC] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#777777] dark:text-[#9E9B95] mb-3">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-[#E8E6E3] dark:bg-[#252422] text-[#111111] dark:text-[#F5F2EC] font-mono border border-[#D4D1CC] dark:border-[#333333]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#D4D1CC] dark:border-[#2E2D2A] flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-[#111111] text-[#F5F2EC] dark:bg-[#F5F2EC] dark:text-[#111111] text-xs font-medium hover:opacity-90 transition-opacity"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
