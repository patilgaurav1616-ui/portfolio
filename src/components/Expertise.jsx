import React from 'react';
import { resumeData } from '../data/portfolioData';
import { Brain, Code2, BarChart3, Globe, Database, Cpu } from 'lucide-react';

export default function Expertise() {
  const categories = [
    {
      title: "AI & Generative AI",
      icon: <Brain size={20} className="text-[#111111] dark:text-[#F5F2EC]" />,
      skills: resumeData.skills.aiGenAI,
      desc: "Designing context-aware LLM agents, vector embeddings, and RAG retrieval pipelines."
    },
    {
      title: "Programming Languages",
      icon: <Code2 size={20} className="text-[#111111] dark:text-[#F5F2EC]" />,
      skills: resumeData.skills.programming,
      desc: "Writing performant, maintainable object-oriented code and optimized SQL queries."
    },
    {
      title: "Data Analytics & BI",
      icon: <BarChart3 size={20} className="text-[#111111] dark:text-[#F5F2EC]" />,
      skills: resumeData.skills.dataAnalytics,
      desc: "Extracting customer insights, building Power BI KPI dashboards, and data transformations."
    },
    {
      title: "Full Stack Development",
      icon: <Globe size={20} className="text-[#111111] dark:text-[#F5F2EC]" />,
      skills: resumeData.skills.fullstack,
      desc: "Architecting secure MERN platforms, FastAPI microservices, and reactive user interfaces."
    },
    {
      title: "Databases & Dev Tools",
      icon: <Database size={20} className="text-[#111111] dark:text-[#F5F2EC]" />,
      skills: resumeData.skills.databasesTools,
      desc: "Managing relational & NoSQL data stores, Git version control, and protected API gateways."
    },
    {
      title: "Core CS Foundations",
      icon: <Cpu size={20} className="text-[#111111] dark:text-[#F5F2EC]" />,
      skills: resumeData.skills.coreCS,
      desc: "Deep grounding in Data Structures, Algorithms, DBMS internals, and Computer Networks."
    }
  ];

  return (
    <section 
      id="expertise" 
      className="py-24 sm:py-32 bg-[#F5F2EC] dark:bg-[#0F0E0D] border-t border-[#D4D1CC]/60 dark:border-[#2E2D2A] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-semibold text-[#777777] dark:text-[#9E9B95]">
              <span>03</span>
              <span className="w-8 h-[1px] bg-[#B8B8B8] dark:bg-[#444444]" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="font-hero-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-[#F5F2EC]">
              Core Expertise.
            </h2>
          </div>
          <p className="text-sm text-[#777777] dark:text-[#9E9B95] max-w-md font-light">
            A disciplined engineering toolkit structured around machine intelligence, robust backend systems, and data precision.
          </p>
        </div>

        {/* 6-Card Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[#111111] dark:hover:border-[#F5F2EC] transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#E8E6E3] dark:bg-[#252422] border border-[#D4D1CC] dark:border-[#333333]">
                    {cat.icon}
                  </div>
                  <span className="text-xs font-mono text-[#888888] dark:text-[#666666]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-hero-sans text-lg font-bold text-[#111111] dark:text-[#F5F2EC]">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#777777] dark:text-[#9E9B95] font-light mt-1.5 leading-relaxed">
                  {cat.desc}
                </p>

                {/* Skills List */}
                <div className="mt-6 space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-center justify-between py-1.5 border-b border-dashed border-[#D4D1CC]/70 dark:border-[#2E2D2A] text-xs"
                    >
                      <span className="font-medium text-[#222222] dark:text-[#E0E0E0]">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#777777] dark:text-[#9E9B95]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Problem-Solving Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/80 dark:bg-[#181716]/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-hero-sans text-base font-bold text-[#111111] dark:text-[#F5F2EC]">
              Engineering Mindset & Soft Skills
            </h4>
            <p className="text-xs text-[#777777] dark:text-[#9E9B95] mt-1 font-light">
              Core interpersonal principles cultivated through collaborative hackathons and community teaching.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.softSkills.map((soft) => (
              <span
                key={soft}
                className="px-3.5 py-1.5 rounded-full border border-[#D4D1CC] dark:border-[#333333] bg-[#E8E6E3] dark:bg-[#252422] text-xs font-medium text-[#111111] dark:text-[#F5F2EC]"
              >
                {soft}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
