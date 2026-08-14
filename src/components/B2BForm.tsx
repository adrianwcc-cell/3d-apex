import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Mail, Phone, Building2, Send, CheckCircle2, Instagram } from 'lucide-react';

interface B2BFormProps {
  language: Language;
}

export const B2BForm: React.FC<B2BFormProps> = ({ language }) => {
  const t = TRANSLATIONS[language].b2b;

  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('reverse_engineering');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const emailSubject = encodeURIComponent(`B2B Inquiry (${serviceType}) - ${company}`);
    const emailBody = encodeURIComponent(`Company/Name: ${company}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceType}\nDescription:\n${description}`);

    setTimeout(() => {
      window.location.href = `mailto:3dapex.de@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    }, 400);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-950/40 relative w-full max-w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 sm:p-10 lg:p-12 space-y-6 sm:space-y-8 border-emerald-500/20">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              {t.badge}
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
              {t.title}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Name / Company Input with text-base for iOS zoom prevention */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">{t.company} *</label>
                <div className="relative flex items-center">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input 
                    type="text" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.placeholderName}
                    required
                    className="bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all w-full min-h-[44px]"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">{t.email} *</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.placeholderEmail}
                    required
                    className="bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all w-full min-h-[44px]"
                  />
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Phone Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">{t.phone}</label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.placeholderPhone}
                    className="bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all w-full min-h-[44px]"
                  />
                </div>
              </div>

              {/* Service Type Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">{t.serviceType}</label>
                <select 
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="bg-slate-950/80 border border-slate-700 text-slate-100 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all w-full cursor-pointer min-h-[44px]"
                >
                  <option value="reverse_engineering">{t.optionReverse}</option>
                  <option value="medical_insoles">{t.optionMedical}</option>
                  <option value="serial_production">{t.optionSerial}</option>
                  <option value="scan_cad">{t.optionScanCad}</option>
                  <option value="other">{t.optionOther}</option>
                </select>
              </div>

            </div>

            {/* Description Textarea */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">{t.description} *</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t.placeholderDesc}
                rows={4}
                required
                className="bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all w-full"
              />
            </div>

            {/* Large full-width touch button min-h-[48px] */}
            <button 
              type="submit" 
              className="w-full btn-primary justify-center py-4 text-base font-semibold min-h-[48px] rounded-xl"
            >
              <Send className="w-5 h-5" />
              <span>{t.submit}</span>
            </button>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{t.success}</span>
              </div>
            )}

          </form>

          {/* Social Contact Footer Strip */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">E-mail: <strong className="text-white">3dapex.de@gmail.com</strong></span>
            </div>

            <a 
              href="https://www.instagram.com/3d_apex.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-pink-400 hover:underline font-semibold"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram: @3d_apex.de</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
