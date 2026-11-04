import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F5F2EC]/90 dark:bg-[#0F0E0D]/90 backdrop-blur-md py-3 border-b border-[#D4D1CC]/50 dark:border-[#2E2D2A]' 
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="font-hero-sans font-extrabold text-xl sm:text-2xl tracking-tight text-[#111111] dark:text-[#F5F2EC] hover:opacity-80 transition-opacity"
        >
          GAURAV.
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wide transition-all relative py-1 ${
                  isActive
                    ? 'text-[#111111] dark:text-[#F5F2EC] font-semibold'
                    : 'text-[#555555] dark:text-[#A09D96] hover:text-[#111111] dark:hover:text-[#F5F2EC] font-normal'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#111111] dark:bg-[#F5F2EC] transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Toggle Switch & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-[#111111] dark:text-[#F5F2EC] focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F2EC] dark:bg-[#0F0E0D] border-b border-[#D4D1CC] dark:border-[#2E2D2A] px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#111111] dark:text-[#F5F2EC] py-1 border-b border-dashed border-[#D4D1CC]/50 dark:border-[#2E2D2A]"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
