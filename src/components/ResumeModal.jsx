import React from 'react';
import { resumeData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, Calendar, MapPin } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#F5F2EC] dark:bg-[#181716] border border-[#D4D1CC] dark:border-[#333333] shadow-2xl overflow-y-auto max-h-[92vh] print:p-0 print:border-none print:shadow-none print:max-h-full print:bg-white">
        {/* Sticky Actions Bar (Hidden when printing) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#ECEAE4]/90 dark:bg-[#1C1B19]/90 backdrop-blur-md border-b border-[#D4D1CC] dark:border-[#2E2D2A] print:hidden">
          <span className="font-hero-sans font-bold text-sm text-[#111111] dark:text-[#F5F2EC]">
            Curriculum Vitae — Gaurav Patil
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] text-[#F5F2EC] dark:bg-[#F5F2EC] dark:text-[#111111] text-xs font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              <Printer size={13} />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#D4D1CC] dark:hover:bg-[#2A2A2A] text-[#111111] dark:text-[#F5F2EC] transition-colors"
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-8 sm:p-12 space-y-8 font-sans text-[#111111] dark:text-[#F5F2EC] print:text-black print:p-8">
          {/* Header */}
          <div className="border-b border-[#D4D1CC] dark:border-[#2E2D2A] pb-6 print:border-neutral-300">
            <h1 className="font-hero-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
              GAURAV PATIL
            </h1>
            <p className="text-sm font-semibold text-[#555555] dark:text-[#A09D96] print:text-neutral-600 mt-1">
              B.Tech Computer Engineering &bull; 2027 Batch
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#555555] dark:text-[#A09D96] print:text-neutral-600 mt-3">
              <span className="flex items-center gap-1.5">
                <Mail size={13} />
                {resumeData.personal.email}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <Phone size={13} />
                {resumeData.personal.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                DOB: {resumeData.personal.dob}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                {resumeData.personal.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-hero-sans text-xs uppercase tracking-widest font-bold text-[#777777] dark:text-[#9E9B95] mb-3 print:text-neutral-500">
              Education
            </h2>
            <div className="space-y-4">
              {resumeData.education.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs">
                  <div>
                    <h3 className="font-bold text-sm text-[#111111] dark:text-[#F5F2EC] print:text-black">
                      {item.institution}
                    </h3>
                    <p className="text-[#444444] dark:text-[#CCCCCC] print:text-neutral-700 mt-0.5">
                      {item.degree}
                    </p>
                  </div>
                  <div className="text-left sm:text-right mt-1 sm:mt-0">
                    <span className="font-mono font-medium text-[#111111] dark:text-[#F5F2EC] print:text-black">
                      {item.score}
                    </span>
                    <p className="text-[#777777] dark:text-[#9E9B95] print:text-neutral-500 font-mono">
                      {item.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="font-hero-sans text-xs uppercase tracking-widest font-bold text-[#777777] dark:text-[#9E9B95] mb-3 print:text-neutral-500">
              Projects
            </h2>
            <div className="space-y-5">
              {resumeData.projects.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-sm text-[#111111] dark:text-[#F5F2EC] print:text-black">
                      {proj.title}
                    </h3>
                  </div>
                  <p className="font-mono text-[11px] text-[#777777] dark:text-[#9E9B95] print:text-neutral-500">
                    {proj.tags.join(' • ')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-[#444444] dark:text-[#CCCCCC] print:text-neutral-700 font-light">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="font-hero-sans text-xs uppercase tracking-widest font-bold text-[#777777] dark:text-[#9E9B95] mb-3 print:text-neutral-500">
              Core Skills
            </h2>
            <div className="space-y-2 text-xs text-[#333333] dark:text-[#CCCCCC] print:text-neutral-800 leading-relaxed">
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Programming Languages:</strong> Java, Python, SQL</p>
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Data Analytics & BI:</strong> Pandas, NumPy, Matplotlib, Power BI, Microsoft Excel, Data Cleaning, Customer Segmentation, KPI Reporting</p>
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">AI & Generative AI:</strong> LLMs, Retrieval-Augmented Generation (RAG), LangChain, Google Gemini API, Embeddings</p>
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Backend Development:</strong> FastAPI, Node.js, Express.js, REST APIs, JWT Authentication</p>
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Frontend Development:</strong> React.js, HTML5, CSS3, Tailwind CSS, Streamlit</p>
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Databases & Tools:</strong> SQLite, MongoDB, Git, GitHub</p>
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Core Concepts:</strong> DBMS, OOP, DSA, Computer Networks, Operating Systems</p>
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Soft Skills:</strong> Analytical Thinking, Problem Solving, Communication Skills, Team Collaboration, Critical Thinking</p>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="font-hero-sans text-xs uppercase tracking-widest font-bold text-[#777777] dark:text-[#9E9B95] mb-3 print:text-neutral-500">
              Certifications & Positions of Responsibility
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#444444] dark:text-[#CCCCCC] print:text-neutral-700">
              {resumeData.certifications.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#F5F2EC] shrink-0" />
                  <span>{c.title} — {c.issuer}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-xs text-[#444444] dark:text-[#CCCCCC] print:text-neutral-700">
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Smart India Hackathon (SIH):</strong> Participated at College Levels (MPSTME, NMIMS, Shirpur).</p>
              <p><strong className="font-semibold text-[#111111] dark:text-[#F5F2EC] print:text-black">Matimand Mulanche Balgruh, Shirpur:</strong> Supporting students through community service and educational activities; conducted creative learning sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
