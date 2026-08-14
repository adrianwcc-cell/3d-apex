import React, { useState } from 'react';
import { Language, QuoteParams } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesShowcase } from './components/ServicesShowcase';
import { Calculator } from './components/Calculator';
import { FaqSection } from './components/FaqSection';
import { B2BForm } from './components/B2BForm';
import { Footer } from './components/Footer';
import { AiAgentModal } from './components/AiAgentModal';
import { Bot } from 'lucide-react';

export function App() {
  // German (DE) default language
  const [language, setLanguage] = useState<Language>('DE');
  const [aiModalOpen, setAiModalOpen] = useState<boolean>(false);
  const [activeQuote, setActiveQuote] = useState<QuoteParams | null>(null);
  const [savedQuotes, setSavedQuotes] = useState<QuoteParams[]>([]);

  // Handler when user passes quote to AI Agent
  const handleSendQuoteToAi = (quote: QuoteParams) => {
    setActiveQuote(quote);
    if (!savedQuotes.some(q => q.fileName === quote.fileName && q.totalGross === quote.totalGross)) {
      setSavedQuotes(prev => [...prev, quote]);
    }
    setAiModalOpen(true);
  };

  // Handler when user triggers direct email dispatch for quote
  const handleSendQuoteEmail = (quote: QuoteParams) => {
    setActiveQuote(quote);
    if (!savedQuotes.some(q => q.fileName === quote.fileName && q.totalGross === quote.totalGross)) {
      setSavedQuotes(prev => [...prev, quote]);
    }
    setAiModalOpen(true);
  };

  const scrollToCalculator = () => {
    const calcElement = document.getElementById('calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] text-slate-100 w-full max-w-full overflow-x-hidden">
      
      {/* Sticky Header */}
      <Header 
        language={language}
        setLanguage={setLanguage}
        onOpenAiAgent={() => setAiModalOpen(true)}
        onOpenCalculator={scrollToCalculator}
        quoteCount={savedQuotes.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        
        {/* Hero Section */}
        <Hero 
          language={language}
          onOpenCalculator={scrollToCalculator}
          onOpenAiAgent={() => setAiModalOpen(true)}
        />

        {/* Services Showcase */}
        <ServicesShowcase 
          language={language}
          onOpenCalculator={scrollToCalculator}
          onOpenAiAgent={() => setAiModalOpen(true)}
        />

        {/* 3D Pricing Calculator */}
        <Calculator 
          language={language}
          onSendQuoteToAi={handleSendQuoteToAi}
          onSendQuoteEmail={handleSendQuoteEmail}
        />

        {/* FAQ Accordion Section */}
        <FaqSection language={language} />

        {/* B2B Engineering & Medical Form */}
        <B2BForm language={language} />

      </main>

      {/* Floating AI Agent Trigger Widget */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
        <button 
          onClick={() => setAiModalOpen(true)}
          className="btn-primary py-3 px-4 sm:px-5 shadow-2xl shadow-emerald-500/50 flex items-center gap-3 animate-bounce min-h-[48px] rounded-full sm:rounded-xl"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-xs font-extrabold block">Agent AI 3D Apex</span>
            <span className="text-[10px] text-emerald-100 opacity-90 block">KI-Beratung & Angebot</span>
          </div>
        </button>
      </div>

      {/* Interactive AI Agent Modal */}
      <AiAgentModal 
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        language={language}
        initialQuote={activeQuote}
      />

      {/* Footer */}
      <Footer language={language} />

    </div>
  );
}

export default App;
