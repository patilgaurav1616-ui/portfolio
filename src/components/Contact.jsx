import React, { useState } from 'react';
import { resumeData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send, ArrowUp } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 bg-[#F5F2EC] dark:bg-[#0F0E0D] border-t border-[#D4D1CC]/60 dark:border-[#2E2D2A] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-semibold text-[#777777] dark:text-[#9E9B95]">
              <span>05</span>
              <span className="w-8 h-[1px] bg-[#B8B8B8] dark:bg-[#444444]" />
              <span>Get In Touch</span>
            </div>
            <h2 className="font-hero-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-[#F5F2EC]">
              Let's Connect.
            </h2>
          </div>
          <p className="text-sm text-[#777777] dark:text-[#9E9B95] max-w-md font-light">
            Open for internships, collaborative AI/full-stack initiatives, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Location Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm flex items-center justify-between group hover:border-[#111111] dark:hover:border-[#F5F2EC] transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#111111] text-[#F5F2EC] dark:bg-[#F5F2EC] dark:text-[#111111]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#9E9B95] font-medium uppercase tracking-wider">
                    Official Email
                  </p>
                  <a 
                    href={`mailto:${resumeData.personal.email}`}
                    className="text-sm font-semibold text-[#111111] dark:text-[#F5F2EC] hover:underline"
                  >
                    {resumeData.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(resumeData.personal.email, 'email')}
                className="p-2 rounded-lg hover:bg-[#E8E6E3] dark:hover:bg-[#2A2A2A] text-[#555555] dark:text-[#CCCCCC] transition-colors"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm flex items-center justify-between group hover:border-[#111111] dark:hover:border-[#F5F2EC] transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#111111] text-[#F5F2EC] dark:bg-[#F5F2EC] dark:text-[#111111]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#777777] dark:text-[#9E9B95] font-medium uppercase tracking-wider">
                    Phone Number
                  </p>
                  <a 
                    href={`tel:${resumeData.personal.phone}`}
                    className="text-sm font-semibold text-[#111111] dark:text-[#F5F2EC] hover:underline font-mono"
                  >
                    {resumeData.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(resumeData.personal.phone, 'phone')}
                className="p-2 rounded-lg hover:bg-[#E8E6E3] dark:hover:bg-[#2A2A2A] text-[#555555] dark:text-[#CCCCCC] transition-colors"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check size={16} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#111111] text-[#F5F2EC] dark:bg-[#F5F2EC] dark:text-[#111111]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-[#777777] dark:text-[#9E9B95] font-medium uppercase tracking-wider">
                  Based In
                </p>
                <p className="text-sm font-semibold text-[#111111] dark:text-[#F5F2EC]">
                  {resumeData.personal.location}
                </p>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="pt-4">
              <p className="text-xs text-[#777777] dark:text-[#9E9B95] uppercase tracking-wider mb-3 font-semibold">
                Developer Profiles
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 text-xs font-medium text-[#111111] dark:text-[#F5F2EC] hover:border-[#111111] dark:hover:border-[#F5F2EC] transition-all"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 text-xs font-medium text-[#111111] dark:text-[#F5F2EC] hover:border-[#111111] dark:hover:border-[#F5F2EC] transition-all"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-[#D4D1CC] dark:border-[#2E2D2A] bg-[#ECEAE4]/60 dark:bg-[#181716]/60 backdrop-blur-sm">
              <h3 className="font-hero-sans text-xl font-bold text-[#111111] dark:text-[#F5F2EC] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#777777] dark:text-[#9E9B95] font-light mb-8">
                Fill out the details below and I will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-center space-y-2 animate-fade-in">
                  <Check size={28} className="mx-auto text-emerald-600 dark:text-emerald-400" />
                  <p className="font-semibold text-sm">Message Dispatched!</p>
                  <p className="text-xs opacity-90">Thank you for reaching out. I will respond to your email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#444444] dark:text-[#A09D96] mb-1.5 uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D4D1CC] dark:border-[#333333] bg-[#F5F2EC] dark:bg-[#1C1B19] text-sm text-[#111111] dark:text-[#F5F2EC] placeholder-[#9E9B95] focus:outline-none focus:border-[#111111] dark:focus:border-[#F5F2EC] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#444444] dark:text-[#A09D96] mb-1.5 uppercase tracking-wide">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D4D1CC] dark:border-[#333333] bg-[#F5F2EC] dark:bg-[#1C1B19] text-sm text-[#111111] dark:text-[#F5F2EC] placeholder-[#9E9B95] focus:outline-none focus:border-[#111111] dark:focus:border-[#F5F2EC] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#444444] dark:text-[#A09D96] mb-1.5 uppercase tracking-wide">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Collaboration / Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4D1CC] dark:border-[#333333] bg-[#F5F2EC] dark:bg-[#1C1B19] text-sm text-[#111111] dark:text-[#F5F2EC] placeholder-[#9E9B95] focus:outline-none focus:border-[#111111] dark:focus:border-[#F5F2EC] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#444444] dark:text-[#A09D96] mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or idea..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4D1CC] dark:border-[#333333] bg-[#F5F2EC] dark:bg-[#1C1B19] text-sm text-[#111111] dark:text-[#F5F2EC] placeholder-[#9E9B95] focus:outline-none focus:border-[#111111] dark:focus:border-[#F5F2EC] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#111111] text-[#F5F2EC] dark:bg-[#F5F2EC] dark:text-[#111111] hover:bg-black dark:hover:bg-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-20 mt-20 border-t border-[#D4D1CC]/60 dark:border-[#2E2D2A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-hero-sans font-extrabold text-lg tracking-tight text-[#111111] dark:text-[#F5F2EC]">
              GAURAV PATIL.
            </span>
            <p className="text-xs text-[#777777] dark:text-[#9E9B95] mt-1 font-light">
              AI Developer &bull; Full Stack Developer &bull; Data Analytics Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs text-[#888888] dark:text-[#666666] font-light">
              Designed & Recreated with Precision &copy; {new Date().getFullYear()}
            </p>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-[#D4D1CC] dark:border-[#2E2D2A] hover:bg-[#E8E6E3] dark:hover:bg-[#1E1E1E] text-[#111111] dark:text-[#F5F2EC] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
