import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Wrench, 
  Stethoscope, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ServicesShowcaseProps {
  language: Language;
  onOpenCalculator: () => void;
  onOpenAiAgent: () => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  language,
  onOpenCalculator,
  onOpenAiAgent
}) => {
  const t = TRANSLATIONS[language].services;

  return (
    <section id="services" className="py-16 sm:py-20 relative w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            3D Apex Specializations
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
            {t.title}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Column Grid Layout on Desktop / 1 Column on Mobile (grid-cols-1 md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Reverse Engineering */}
          <div className="glass-panel p-6 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all group">
            <div className="space-y-4">
              
              {/* Image Container with fixed height h-48 w-full object-cover rounded-xl */}
              <div className="h-48 w-full rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950">
                <img 
                  src="/images/part_petg.png"
                  alt="Reverse Engineering" 
                  className="h-48 w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 backdrop-blur-md">
                  {t.reverseEngineering.badge}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white leading-tight">
                  {t.reverseEngineering.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.reverseEngineering.desc}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs text-gray-400 pt-2 border-t border-slate-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{t.reverseEngineering.bullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{t.reverseEngineering.bullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{t.reverseEngineering.bullet3}</span>
                </li>
              </ul>

            </div>

            <button 
              onClick={onOpenAiAgent}
              className="w-full btn-secondary justify-center text-xs py-3.5 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 min-h-[48px] rounded-xl font-semibold"
            >
              <span>{t.btnCadScan}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: TPU Medical Insoles */}
          <div className="glass-panel p-6 flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition-all group glass-panel-active">
            <div className="space-y-4">
              
              {/* Image Container with fixed height h-48 w-full object-cover rounded-xl */}
              <div className="h-48 w-full rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950">
                <img 
                  src="/images/tpu_insole.png" 
                  alt="TPU Medical Insoles" 
                  className="h-48 w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-slate-950 shadow-md">
                  {t.medical.badge}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white leading-tight">
                  {t.medical.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.medical.desc}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs text-gray-400 pt-2 border-t border-slate-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.medical.bullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.medical.bullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.medical.bullet3}</span>
                </li>
              </ul>

            </div>

            <button 
              onClick={onOpenCalculator}
              className="w-full btn-primary justify-center text-xs py-3.5 min-h-[48px] rounded-xl font-bold"
            >
              <span>{t.btnTpuQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Bambu Lab Fleet */}
          <div className="glass-panel p-6 flex flex-col justify-between space-y-6 hover:border-purple-500/40 transition-all group">
            <div className="space-y-4">
              
              {/* Image Container with fixed height h-48 w-full object-cover rounded-xl */}
              <div className="h-48 w-full rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950">
                <img 
                  src="/images/proto_pla.png"
                  alt="Bambu Lab Fleet" 
                  className="h-48 w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-500/20 border border-purple-400/40 text-purple-300 backdrop-blur-md">
                  {t.fleet.badge}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white leading-tight">
                  {t.fleet.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.fleet.desc}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs text-gray-400 pt-2 border-t border-slate-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{t.fleet.bullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{t.fleet.bullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{t.fleet.bullet3}</span>
                </li>
              </ul>

            </div>

            <button 
              onClick={onOpenCalculator}
              className="w-full btn-secondary justify-center text-xs py-3.5 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 min-h-[48px] rounded-xl font-semibold"
            >
              <span>{t.btnCalcQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
