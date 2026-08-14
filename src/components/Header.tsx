import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Instagram, 
  Mail, 
  Bot, 
  Calculator as CalcIcon, 
  Menu, 
  X, 
  Wrench, 
  Stethoscope,
  Globe,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenAiAgent: () => void;
  onOpenCalculator: () => void;
  quoteCount: number;
}

// Order strictly: 1. DE | 2. EN | 3. TR | 4. PL | 5. UK
const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'DE', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'EN', flag: '🇬🇧', label: 'English' },
  { code: 'TR', flag: '🇹🇷', label: 'Türkçe' },
  { code: 'PL', flag: '🇵🇱', label: 'Polski' },
  { code: 'UK', flag: '🇺🇦', label: 'Українська' },
];

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  onOpenAiAgent,
  onOpenCalculator,
  quoteCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F17]/95 border-b border-slate-800/80 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        
        {/* Brand Logo & Status */}
        <a href="#" className="flex items-center gap-3 select-none text-decoration-none shrink-0">
          {/* 1. Ramka z Logo (Kwadrat z poświatą) */}
          <div className="relative flex items-center justify-center h-11 w-11 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)] p-1.5 overflow-hidden">
            <img 
              src="/logo.png" 
              alt="3D Apex Logo" 
              className="h-full w-full object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
            />
          </div>

          {/* 2. Tekst Brandingu i Status */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <div className="flex items-baseline font-black tracking-tight text-xl sm:text-2xl">
                <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">3D</span>
                <span className="ml-1 text-[#34D399] tracking-wider drop-shadow-[0_0_12px_rgba(52,211,153,0.45)]">APEX</span>
              </div>
              
              {/* Badge Statusu "Active" */}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active
              </span>
            </div>

            {/* 3. Podtytuł (Subheadline) */}
            <span className="text-xs font-medium text-slate-400 tracking-wide mt-0.5 hidden sm:block">
              {t.subtitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Visible >= md) */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs font-semibold text-gray-300">
          <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            {t.reverseEngineering}
          </a>
          <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
            {t.medicalInsoles}
          </a>
          <a href="#calculator" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <CalcIcon className="w-3.5 h-3.5 text-emerald-400" />
            {t.calculator}
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">
            {t.faq}
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">
            {t.contact}
          </a>
        </nav>

        {/* Desktop Right Actions (Visible >= md) */}
        <div className="hidden md:flex items-center gap-2.5">
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/3d_apex.de" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-pink-500/20 text-xs font-semibold transition-all"
            title="Instagram @3d_apex.de"
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden lg:inline">@3d_apex.de</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:3dapex.de@gmail.com" 
            className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all"
            title="3dapex.de@gmail.com"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* AI Agent Button */}
          <button 
            onClick={onOpenAiAgent}
            className="btn-secondary text-xs py-2 px-3 hover:border-emerald-500/40 flex items-center gap-1.5 min-h-[40px]"
          >
            <Bot className="w-4 h-4 text-emerald-400" />
            <span className="hidden lg:inline">Agent AI</span>
          </button>

          {/* 5-Language Switcher (DE -> EN -> TR -> PL -> UK) */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-bold shadow-inner">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 mr-1 shrink-0" />
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-1.5 py-1 rounded-lg text-[11px] transition-all flex items-center gap-1 ${
                  language === lang.code 
                    ? 'bg-emerald-500 text-white shadow font-extrabold' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title={lang.label}
              >
                <span>{lang.flag}</span>
                <span>{lang.code}</span>
              </button>
            ))}
          </div>

          {/* Calculator CTA */}
          <button 
            onClick={onOpenCalculator}
            className="btn-primary text-xs py-2 px-3.5 min-h-[40px]"
          >
            <CalcIcon className="w-4 h-4" />
            <span>{t.calculator}</span>
            {quoteCount > 0 && (
              <span className="ml-1 bg-white text-emerald-950 font-black rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                {quoteCount}
              </span>
            )}
          </button>

        </div>

        {/* Mobile controls (< md) */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={onOpenAiAgent}
            className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open AI Agent"
          >
            <Bot className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Touch-optimized Mobile Drawer (< md) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D131F] border-b border-slate-800 px-4 py-6 space-y-6 animate-in slide-in-from-top duration-300">
          
          {/* Touch Language Switcher Tiles */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Sprache / Language:
            </span>
            <div className="grid grid-cols-5 gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`min-h-[44px] py-2 rounded-xl transition-all text-xs flex flex-col items-center justify-center gap-0.5 ${
                    language === lang.code 
                      ? 'bg-emerald-500 text-white font-extrabold shadow-md' 
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span className="text-[10px] font-mono">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1 pt-2 border-t border-slate-800/80">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-slate-200 hover:text-emerald-400 min-h-[44px] px-3 rounded-xl hover:bg-slate-900 text-sm font-semibold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-cyan-400" />
                {t.reverseEngineering}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>

            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-slate-200 hover:text-emerald-400 min-h-[44px] px-3 rounded-xl hover:bg-slate-900 text-sm font-semibold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-emerald-400" />
                {t.medicalInsoles}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>

            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-slate-200 hover:text-emerald-400 min-h-[44px] px-3 rounded-xl hover:bg-slate-900 text-sm font-semibold transition-colors"
            >
              <span className="flex items-center gap-2">
                <CalcIcon className="w-4 h-4 text-emerald-400" />
                {t.calculator}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>

            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-slate-200 hover:text-emerald-400 min-h-[44px] px-3 rounded-xl hover:bg-slate-900 text-sm font-semibold transition-colors"
            >
              <span>{t.faq}</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>

            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-slate-200 hover:text-emerald-400 min-h-[44px] px-3 rounded-xl hover:bg-slate-900 text-sm font-semibold transition-colors"
            >
              <span>{t.contact}</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 space-y-3">
            <button 
              onClick={() => {
                onOpenCalculator();
                setMobileMenuOpen(false);
              }}
              className="w-full btn-primary justify-center text-sm py-3.5 min-h-[48px] rounded-xl font-bold"
            >
              <CalcIcon className="w-5 h-5" />
              <span>{t.calculator}</span>
            </button>

            <a 
              href="https://www.instagram.com/3d_apex.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full btn-secondary justify-center text-pink-400 border-pink-500/30 text-xs py-3 min-h-[48px] rounded-xl font-semibold"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram: @3d_apex.de</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
};
