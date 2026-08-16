import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Calculator, 
  Bot, 
  Wrench, 
  Stethoscope, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenCalculator: () => void;
  onOpenAiAgent: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenCalculator,
  onOpenAiAgent
}) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <section className="relative overflow-hidden py-10 sm:py-16 lg:py-24 w-full max-w-full">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-emerald-500/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Bambu Lab Fleet Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-semibold tracking-wide max-w-full truncate">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{t.pill}</span>
            </div>

            {/* Headline - Responsive Mobile Sizing text-3xl sm:text-5xl lg:text-6xl */}
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight sm:leading-[1.1]">
              {t.title1} <br />
              <span className="text-gradient-emerald">{t.title2}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-[11px] sm:text-xs font-medium text-gray-200">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.badgeReverse}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-[11px] sm:text-xs font-medium text-gray-200">
                <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.badgeTpu}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-[11px] sm:text-xs font-medium text-gray-200">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.badgeFleet}</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button 
                onClick={onOpenCalculator}
                className="btn-primary text-sm py-3.5 px-6 justify-center min-h-[48px] rounded-xl font-bold w-full sm:w-auto"
              >
                <Calculator className="w-5 h-5" />
                <span>{t.ctaCalculator}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={onOpenAiAgent}
                className="btn-secondary text-sm py-3.5 px-6 justify-center border-emerald-500/30 hover:border-emerald-400 min-h-[48px] rounded-xl font-semibold w-full sm:w-auto"
              >
                <Bot className="w-5 h-5 text-emerald-400" />
                <span>{t.ctaAiAgent}</span>
              </button>
            </div>

            {/* Founder Tag */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 text-xs text-gray-400">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 shrink-0">
                AM
              </div>
              <div className="truncate">
                <span className="font-semibold text-gray-200 block truncate">{t.founderTag}</span>
                <span className="text-[11px] text-gray-400 block truncate">E-mail: <a href="mailto:3dapex.de@gmail.com" className="text-emerald-400 hover:underline font-semibold">3dapex.de@gmail.com</a></span>
              </div>
            </div>

          </div>

          {/* Right Column: TPU Orthotic Card */}
          <div className="lg:col-span-5 relative w-full">
            <div className="glass-panel p-5 sm:p-6 space-y-4 sm:space-y-5 border-emerald-500/30 relative z-10 w-full">
              
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  {t.cardBadge}
                </span>
                <span className="text-[11px] text-gray-400 font-mono">Precision ±0.1mm</span>
              </div>

              {/* TPU Insole Showcase */}
              <div className="space-y-4">
                <div className="h-44 sm:h-56 rounded-xl bg-black/60 overflow-hidden relative border border-slate-800 group">
                  <img 
                    src="images/tpu_insole.png" 
                    alt="TPU 95A Orthotic Insole" 
                    className="w-full h-44 sm:h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.triedJpg) {
                        target.dataset.triedJpg = 'true';
                        target.src = 'images/tpu_insole.jpg';
                      } else if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = 'images/med_petg.png';
                      }
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500 text-slate-950 shadow-md">
                    TPU 95A Medical
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3.5 sm:p-4">
                    <div>
                      <h4 className="font-heading font-bold text-white text-xs sm:text-sm">{t.cardInsoleTitle}</h4>
                      <p className="text-[10px] sm:text-[11px] text-emerald-300">{t.cardInsoleSub}</p>
                    </div>
                  </div>
                </div>

                {/* Parameters Breakdown */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-gray-400 block flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      {t.heelZoneTitle}
                    </span>
                    <span className="font-mono font-bold text-white text-[11px] sm:text-xs block">{t.heelZoneDesc}</span>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-gray-400 block flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      {t.midfootZoneTitle}
                    </span>
                    <span className="font-mono font-bold text-white text-[11px] sm:text-xs block">{t.midfootZoneDesc}</span>
                  </div>
                </div>

              </div>

              {/* Fleet status notification */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/50 to-slate-900 border border-emerald-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="text-xs font-semibold text-emerald-300 truncate">{t.readyTime}</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 shrink-0">Bambu Lab</span>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-emerald-400 block">Bambu Lab</span>
            <span className="text-[11px] sm:text-xs text-gray-400 font-medium">{t.statMachines}</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-cyan-400 block">±0.1 mm</span>
            <span className="text-[11px] sm:text-xs text-gray-400 font-medium">{t.statPrecision}</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-purple-400 block">48 - 72h</span>
            <span className="text-[11px] sm:text-xs text-gray-400 font-medium">{t.statTurnaround}</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-amber-400 block">TPU & Carbon</span>
            <span className="text-[11px] sm:text-xs text-gray-400 font-medium">{t.statMaterials}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
