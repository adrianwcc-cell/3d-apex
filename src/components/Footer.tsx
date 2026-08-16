import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Instagram, Mail, ShieldAlert, ArrowUp, Info } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A10] border-t border-slate-800 pt-12 sm:pt-16 pb-16 text-xs text-slate-300 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column with Company Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 select-none">
              <div className="relative flex items-center justify-center h-11 w-11 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)] p-1.5 overflow-hidden shrink-0">
                <img 
                  src="/logo.png" 
                  alt="3D Apex Logo" 
                  className="h-full w-full object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-baseline font-black tracking-tight text-xl">
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">3D</span>
                  <span className="ml-1 text-[#34D399] tracking-wider drop-shadow-[0_0_12px_rgba(52,211,153,0.45)]">APEX</span>
                </div>
                <span className="text-[11px] text-slate-300 font-medium">Adrian Maściuk Manufacturing</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-md font-normal">
              {t.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/3d_apex.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-pink-500/20 text-xs font-semibold transition-all min-h-[40px]"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: @3d_apex.de</span>
              </a>

              <a 
                href="mailto:3dapex.de@gmail.com" 
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-semibold transition-all min-h-[40px]"
              >
                <Mail className="w-4 h-4" />
                <span>3dapex.de@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">{t.navTitle}</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">{t.navReverse}</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">{t.navMedical}</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">{t.navCalc}</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">{t.navFaq}</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">{t.navContact}</a></li>
            </ul>
          </div>

          {/* DSGVO & Privacy Legal Box */}
          <div className="md:col-span-4 space-y-3 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
            <div className="flex items-center gap-2 font-bold text-emerald-400 text-xs">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{t.rodoTitle}</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
              {t.rodoText}
            </p>
          </div>

        </div>

        {/* Long Information Notice Banner Strip */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-[11px] leading-relaxed flex items-start sm:items-center gap-3">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
          <span className="text-slate-300 font-medium">{t.demoNotice}</span>
        </div>

        {/* Bottom Rights Bar & Scroll-To-Top Navigation Link */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-300">
          <span className="text-center sm:text-left leading-relaxed font-medium">{t.rights}</span>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors shrink-0 py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40"
          >
            <span>{t.scrollTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
