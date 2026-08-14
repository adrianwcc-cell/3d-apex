import React, { useState, useEffect, useRef } from 'react';
import { Language, ChatMessage, QuoteParams } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MATERIALS } from '../data/materials';
import { 
  Bot, 
  X, 
  Send, 
  Mail, 
  Check, 
  Instagram, 
  FileText
} from 'lucide-react';

interface AiAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialQuote?: QuoteParams | null;
}

export const AiAgentModal: React.FC<AiAgentModalProps> = ({
  isOpen,
  onClose,
  language,
  initialQuote
}) => {
  const t = TRANSLATIONS[language].aiAgent;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const [showEmailDialog, setShowEmailDialog] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userNotes, setUserNotes] = useState<string>('');
  const [emailSentSuccess, setEmailSentSuccess] = useState<boolean>(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: ChatMessage = {
        id: 'msg-1',
        sender: 'agent',
        text: t.welcomeMsg,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (initialQuote) {
        const matName = MATERIALS.find(m => m.id === initialQuote.materialId)?.name || initialQuote.materialId;
        const quoteSummaryMsg: ChatMessage = {
          id: 'msg-quote-1',
          sender: 'agent',
          text: `Spezifikation "${initialQuote.fileName}": Gewicht: ${initialQuote.weightGrams}g (${matName}, ${initialQuote.infillPercent}% infill). Brutto: €${initialQuote.totalGross}. Zusammenfassung an 3dapex.de@gmail.com senden?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isQuoteSummary: true,
          quoteData: initialQuote
        };
        setMessages([welcomeMsg, quoteSummaryMsg]);
      } else {
        setMessages([welcomeMsg]);
      }
    }
  }, [isOpen, initialQuote, language, messages.length, t.welcomeMsg]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const generateAiReply = (userQuery: string): string => {
    const query = userQuery.toLowerCase();

    if (query.includes('tpu') || query.includes('einlag') || query.includes('insole') || query.includes('ortop')) {
      return "Orthopädische TPU-Einlagen drucken wir aus TPU 95A mit zonenvariabler Fülldichte (z.B. 70% Fersenzone, 20% Dämpfung).";
    }

    if (query.includes('ersatz') || query.includes('reverse') || query.includes('teil') || query.includes('nachfer')) {
      return "Beim Reverse Engineering konstruieren wir CAD-Modelle defekter Ersatzteile neu und drucken sie in PAHT-CF Carbon, Nylon oder PETG.";
    }

    if (query.includes('preis') || query.includes('kosten') || query.includes('angebot')) {
      return "Verwenden Sie unseren Preiskalkulator online oder senden Sie eine Anfrage an 3dapex.de@gmail.com.";
    }

    return "3D Apex (Adrian Maściuk) – Spezialist für Reverse Engineering, TPU-Orthopädie und Bambu Lab Seriendruck. E-Mail: 3dapex.de@gmail.com, Instagram: @3d_apex.de.";
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateAiReply(currentInput);
      const agentMsg: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, agentMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleTriggerEmailDispatch = () => {
    setEmailSentSuccess(true);
    setTimeout(() => {
      const emailSubject = encodeURIComponent(`3D Apex Inquiry - ${userName || 'Client'}`);
      const conversationText = messages.map(m => `[${m.sender.toUpperCase()}]: ${m.text}`).join('\n\n');
      const quoteDetails = initialQuote 
        ? `\n--- QUOTE DETAILS ---\nFile: ${initialQuote.fileName}\nVolume: ${initialQuote.fileVolumeCm3} cm3\nWeight: ${initialQuote.weightGrams} g\nMaterial: ${initialQuote.materialId}\nInfill: ${initialQuote.infillPercent}%\nLayer: ${initialQuote.layerHeight}\nQty: ${initialQuote.quantity}\nTotal Gross: €${initialQuote.totalGross}\n`
        : '';
      
      const emailBody = encodeURIComponent(`Name/Company: ${userName}\nEmail: ${userEmail}\nNotes: ${userNotes}\n${quoteDetails}\n--- CHAT LOG ---\n${conversationText}`);
      
      window.location.href = `mailto:3dapex.de@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      
      <div className="w-full max-w-2xl h-[90vh] sm:h-[600px] bg-[#0E1525] border border-emerald-500/40 rounded-2xl flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="p-3.5 sm:p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-heading font-bold text-white text-xs sm:text-sm">Agent AI 3D Apex</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-[10px] sm:text-[11px] text-gray-400">Online • Adrian Maściuk System</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowEmailDialog(true)}
              className="btn-primary text-xs py-1.5 px-3 min-h-[36px] rounded-lg"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">E-Mail</span>
            </button>

            <button 
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-gray-300 hover:text-white min-h-[36px] min-w-[36px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
            <a 
              href="https://www.instagram.com/3d_apex.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-400 hover:underline"
            >
              <Instagram className="w-3.5 h-3.5 shrink-0" />
              <span>@3d_apex.de</span>
            </a>
            
            <a 
              href="mailto:3dapex.de@gmail.com"
              className="flex items-center gap-1 text-cyan-400 hover:underline"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">3dapex.de@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Chat Messages Container */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3.5 bg-[#0A0F1A]">
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'agent' && (
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] rounded-2xl p-3 sm:p-3.5 space-y-2 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                  : 'bg-slate-800 border border-slate-700 text-gray-100 rounded-tl-none'
              }`}>
                <p className="whitespace-pre-line">{msg.text}</p>

                {msg.quoteData && (
                  <div className="mt-2 p-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-1 text-[11px]">
                    <div className="font-bold text-emerald-400 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      3D Wycena:
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Plik:</span>
                      <span className="font-semibold text-white truncate max-w-[120px]">{msg.quoteData.fileName}</span>
                    </div>
                    <div className="flex justify-between text-gray-300 font-bold border-t border-slate-800 pt-1">
                      <span>Brutto:</span>
                      <span className="text-emerald-400">€{msg.quoteData.totalGross}</span>
                    </div>
                  </div>
                )}

                <span className="text-[9px] text-gray-400 block text-right">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-emerald-400 p-2">
              <Bot className="w-4 h-4 animate-bounce" />
              <span>Agent AI processing...</span>
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>

        {/* Input Form with text-base for iOS zoom prevention */}
        <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-2.5 text-base focus:outline-none focus:border-emerald-500 min-h-[44px]"
          />
          
          <button 
            type="submit" 
            className="btn-primary py-2.5 px-4 text-xs font-bold min-h-[44px] rounded-xl shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Email Dialog Overlay */}
        {showEmailDialog && (
          <div className="absolute inset-0 z-20 bg-slate-950/95 p-5 sm:p-6 flex flex-col justify-center space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h4 className="font-heading font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                {t.emailModalTitle}
              </h4>
              <button 
                onClick={() => setShowEmailDialog(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-300">
              {t.emailModalDesc}
            </p>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">E-mail *</label>
                <input 
                  type="email" 
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="your-email@domain.com"
                  className="bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-base w-full min-h-[44px]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Name / Company</label>
                <input 
                  type="text" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Company / Full Name"
                  className="bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-base w-full min-h-[44px]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Notes</label>
                <textarea 
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  placeholder="Details..."
                  className="bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-base w-full h-20"
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button 
                onClick={handleTriggerEmailDispatch}
                className="flex-1 btn-primary justify-center text-xs py-3 min-h-[44px] rounded-xl font-bold"
              >
                <Mail className="w-4 h-4" />
                <span>3dapex.de@gmail.com</span>
              </button>

              <button 
                onClick={() => setShowEmailDialog(false)}
                className="btn-secondary text-xs min-h-[44px] rounded-xl"
              >
                Cancel
              </button>
            </div>

            {emailSentSuccess && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Dispatched to 3dapex.de@gmail.com!</span>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
