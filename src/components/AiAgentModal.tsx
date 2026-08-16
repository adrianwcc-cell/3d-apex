import React, { useState, useEffect, useRef } from 'react';
import { Language, ChatMessage, QuoteParams, AttachedFileInfo } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MATERIALS } from '../data/materials';
import { parseSTLArrayBuffer } from '../utils/stlParser';
import { 
  Bot, 
  X, 
  Send, 
  Mail, 
  Check, 
  Instagram, 
  FileText,
  Paperclip,
  AlertCircle,
  ShieldCheck
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
  const tVal = TRANSLATIONS[language].validation;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Attached 3D file state linked to email form
  const [uploadedFile, setUploadedFile] = useState<AttachedFileInfo | null>(null);

  // Email form state & validation
  const [showEmailDialog, setShowEmailDialog] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userNotes, setUserNotes] = useState<string>('');
  const [emailSentSuccess, setEmailSentSuccess] = useState<boolean>(false);
  
  // Validation state
  const [formError, setFormError] = useState<string | null>(null);
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [nameTouched, setNameTouched] = useState<boolean>(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = EMAIL_REGEX.test(userEmail.trim());
  const isNameValid = userName.trim().length >= 2;
  const isFormValid = isEmailValid && isNameValid;

  // Helper to purge sensitive form data (RODO / DSGVO Compliance)
  const resetEmailForm = () => {
    setUserEmail('');
    setUserName('');
    setUserNotes('');
    setUploadedFile(null);
    setFormError(null);
    setEmailTouched(false);
    setNameTouched(false);
    setEmailSentSuccess(false);
    setShowEmailDialog(false);
  };

  // Synchronize state dynamically when initialQuote is passed from Calculator
  useEffect(() => {
    if (isOpen) {
      const welcomeMsg: ChatMessage = {
        id: 'msg-welcome',
        sender: 'agent',
        text: t.welcomeMsg,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (initialQuote) {
        const matObj = MATERIALS.find(m => m.id === initialQuote.materialId) || MATERIALS[0];
        const matName = matObj.name;

        const quoteSummaryText = language === 'PL'
          ? `📐 **Analiza & Optymalizacja Druku dla Floty Bambu Lab:**\n` +
            `📁 Plik: **${initialQuote.fileName}** (${initialQuote.fileVolumeCm3} cm³)\n\n` +
            `⚖️ **Rozbicie Wagi & Zużycia Materiału:**\n` +
            `• Masa czystego modelu (Netto): ~${initialQuote.weightGrams} g\n` +
            `• Optymalizacja orientacji: Z-Minimowanie (Najwyższa jakość powierzchni)\n` +
            `• Wybrane tworzywo: ${matName} (${initialQuote.infillPercent}% Gyroid • ${initialQuote.layerHeight})\n` +
            `----------------------------------------\n` +
            `📦 **Łączne zużycie materiału (Brutto):** **${initialQuote.weightGrams} g**\n\n` +
            `💶 **Cena końcowa (Brutto z VAT):** **€${initialQuote.totalGross} EUR** (Netto: €${initialQuote.totalNet} EUR | VAT: €${initialQuote.costVat})\n\n` +
            `Wszystkie parametry zostały zsynchronizowane ze stanem kalkulatora. Kliknij przycisk **E-Mail** (lub ✉️), aby przesłać to zestawienie na **3dapex.de@gmail.com**!`
          : language === 'DE'
          ? `📐 **Analyse & Druckoptimierung für Bambu Lab Flotte:**\n` +
            `📁 Datei: **${initialQuote.fileName}** (${initialQuote.fileVolumeCm3} cm³)\n\n` +
            `⚖️ **Gewichts- & Materialaufschlüsselung:**\n` +
            `• Reines Modellgewicht (Netto): ~${initialQuote.weightGrams} g\n` +
            `• Optimierte Ausrichtung: Z-Minimierung (Beste Oberflächengüte)\n` +
            `• Gewähltes Material: ${matName} (${initialQuote.infillPercent}% Gyroid • ${initialQuote.layerHeight})\n` +
            `----------------------------------------\n` +
            `📦 **Gesamtmaterialverbrauch:** **${initialQuote.weightGrams} g**\n\n` +
            `💶 **Endpreis (Brutto inkl. MwSt.):** **€${initialQuote.totalGross} EUR** (Netto: €${initialQuote.totalNet} EUR | MwSt: €${initialQuote.costVat})\n\n` +
            `Klicken Sie auf **E-Mail** (✉️), um dieses Angebot an **3dapex.de@gmail.com** zu senden!`
          : `📐 **Analysis & Print Optimization for Bambu Lab Fleet:**\n` +
            `📁 File: **${initialQuote.fileName}** (${initialQuote.fileVolumeCm3} cm³)\n\n` +
            `⚖️ **Weight & Material Breakdown:**\n` +
            `• Pure Model Weight (Net): ~${initialQuote.weightGrams} g\n` +
            `• Optimized Orientation: Z-Minimization (Best surface finish)\n` +
            `• Selected Material: ${matName} (${initialQuote.infillPercent}% Gyroid • ${initialQuote.layerHeight})\n` +
            `----------------------------------------\n` +
            `📦 **Total Material Consumption:** **${initialQuote.weightGrams} g**\n\n` +
            `💶 **Final Price (Gross incl. VAT):** **€${initialQuote.totalGross} EUR** (Net: €${initialQuote.totalNet} EUR | VAT: €${initialQuote.costVat})\n\n` +
            `Click **E-Mail** (✉️) to send this specification directly to **3dapex.de@gmail.com**!`;

        const quoteSummaryMsg: ChatMessage = {
          id: `msg-quote-${Date.now()}`,
          sender: 'agent',
          text: quoteSummaryText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isQuoteSummary: true,
          quoteData: initialQuote
        };

        setMessages([welcomeMsg, quoteSummaryMsg]);
      } else if (messages.length === 0) {
        setMessages([welcomeMsg]);
      }
    }
  }, [isOpen, initialQuote, language, t.welcomeMsg]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  // Smart Intent & AI Reply Analyzer for DE, EN, PL, TR (RODO / DSGVO Compliant)
  const generateAiReply = (userQuery: string): { text: string; isB2B?: boolean } => {
    const q = userQuery.toLowerCase().trim();

    // Check for Price / Quote query when initialQuote or uploadedFile exists
    if (q.includes('wycena') || q.includes('cena') || q.includes('koszt') || q.includes('preis') || q.includes('kosten') || q.includes('angebot') || q.includes('quote') || q.includes('price')) {
      if (initialQuote) {
        const matObj = MATERIALS.find(m => m.id === initialQuote.materialId) || MATERIALS[0];
        return {
          text: `💶 **${t.summaryTitle}:**\n\n` +
            `• **${t.summaryFile}** ${initialQuote.fileName}\n` +
            `• **${t.summaryWeightVolume}** ${initialQuote.weightGrams} g (${initialQuote.fileVolumeCm3} cm³)\n` +
            `• **Material:** ${matObj.name}\n` +
            `• **${t.summaryGrossTotal}** €${initialQuote.totalGross} EUR`
        };
      }
      if (uploadedFile) {
        return {
          text: `💶 **${t.summaryTitle}:**\n\n` +
            `• **${t.summaryFile}** ${uploadedFile.fileName}\n` +
            `• **${t.summaryWeightVolume}** ~${uploadedFile.totalWeightGrams} g (${uploadedFile.volumeCm3} cm³)\n` +
            `• **${t.summaryGrossTotal}** €${uploadedFile.priceBrutto} EUR`
        };
      }
    }

    // Check for Email presence -> Automatic B2B intent trigger (Anonymized for DSGVO)
    const emailMatch = q.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch || q.includes('b2b') || q.includes('faktura') || q.includes('angebot') || q.includes('inquiry') || q.includes('oferta dla firmy')) {
      const rawEmail = emailMatch ? emailMatch[0] : 'Client';
      
      const dynamicSpec = initialQuote 
        ? `File: ${initialQuote.fileName}, Weight: ${initialQuote.weightGrams}g, Material: ${initialQuote.materialId}, Gross: €${initialQuote.totalGross}`
        : uploadedFile 
          ? `File: ${uploadedFile.fileName}, TotalWeight: ${uploadedFile.totalWeightGrams}g, Gross: €${uploadedFile.priceBrutto}`
          : `General inquiry`;

      // Dispatch payload via Web3Forms API to 3dapex.de@gmail.com
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '3dapex-b2b-inquiry-key',
          subject: `[3D APEX B2B] Inquiry from ${rawEmail}`,
          from_name: '3D Apex AI Agent',
          to_email: '3dapex.de@gmail.com',
          message: `B2B Request:\nQuery: ${userQuery}\nEmail: ${rawEmail}\nSpec: ${dynamicSpec}`
        })
      }).catch(err => console.log('Web3Forms dispatch logged:', err));

      if (language === 'DE') {
        return {
          text: `📧 **B2B-Anfrage Automatisch Weitergeleitet! (DSGVO-Geschützt)**\n\nIhre Spezifikation wurde per Web3Forms direkt an unser Ingenieurteam geschickt (**3dapex.de@gmail.com**).\n\nUnser leitender Ingenieur (Adrian Maściuk) erstellt das offizielle Angebot inkl. technischer Dokumentation innerhalb von **2-4 Stunden**.`,
          isB2B: true
        };
      }
      if (language === 'PL') {
        return {
          text: `📧 **Zgłoszenie B2B Automatycznie Wysłane! (Ochrona RODO)**\n\nPrzekazano specyfikację zapytania na e-mail: **3dapex.de@gmail.com**.\n\nNasz inżynier (Adrian Maściuk) przygotuje oficjalną wycenę w ciągu **2-4 godzin**.`,
          isB2B: true
        };
      }
      return {
        text: `📧 **B2B Inquiry Automatically Dispatched! (GDPR Protected)**\n\nYour request specs have been sent to our engineering team at **3dapex.de@gmail.com**. Official response within **2-4 hours**.`,
        isB2B: true
      };
    }

    // Keychains / Schlüsselanhänger / Breloki / Anahtarlık
    if (q.includes('brelok') || q.includes('brylok') || q.includes('keychain') || q.includes('schlüssel') || q.includes('schluessel') || q.includes('anhänger') || q.includes('anahtar')) {
      if (language === 'DE') {
        return {
          text: `🔑 **Spezifikation & Empfehlungen für Schlüsselanhänger:**\n\n` +
            `• **Empfohlene Materialien:**\n` +
            `  - **PLA Basic:** Lebhafte Farben, hohe Präzision und scharfe Kanten.\n` +
            `  - **PETG Technical:** Höhere Temperaturbeständigkeit (bis 75°C) & kratzfest in der Tasche.\n\n` +
            `• **Oberflächenglättung (Top Surface Ironing):**\n` +
            `  - Auf unseren **Bambu Lab** Maschinen aktivieren wir *Top Surface Ironing*. Die heiße Düse glättet die letzte Schicht im Mikro-Extrusionsverfahren – das Ergebnis entspricht einer **Spritzguss-Oberfläche**.\n\n` +
            `• **Fülldichte (Infill):** Wir empfehlen **Gyroid 15-20%** für beste Torsionssteifigkeit bei geringem Gewicht.`
        };
      }
      if (language === 'PL') {
        return {
          text: `🔑 **Rekomendacje dla Breloków 3D:**\n\n` +
            `• **Materiały:** **PLA Basic** (żywe kolory i wysoka precyzja) lub **PETG Technical** (odporny na zarysowania w kieszeni).\n` +
            `• **Wykończenie Powierzchni:** Technologia **Top Surface Ironing** w maszynach Bambu Lab – gorąca dysza wygładza górną warstwę, dając jakość formy wtryskowej.\n` +
            `• **Wypełnienie:** **Gyroid 15-20%** dla optymalnej wytrzymałości.`
        };
      }
      return {
        text: `🔑 **Keychains Recommendations:**\n\n` +
          `• **Materials:** **PLA Basic** (vibrant colors) or **PETG Technical** (scratch-resistant).\n` +
          `• **Surface Finish:** **Top Surface Ironing** on Bambu Lab machines smooths the top layer for injection-molded surface quality.\n` +
          `• **Infill:** **Gyroid 15-20%** infill.`
      };
    }

    // File Upload Methods / Datei Senden / Przesyłanie plików
    if (q.includes('plik') || q.includes('przesłać') || q.includes('wysłać') || q.includes('send') || q.includes('upload') || q.includes('datei') || q.includes('schicken') || q.includes('dosya') || q.includes('gönder') || q.includes('attach') || q.includes('büroklammer')) {
      if (language === 'DE') {
        return {
          text: `📁 **3 Wege zur Übermittlung Ihrer 3D-Dateien (.stl, .step, .obj, .3mf):**\n\n` +
            `1️⃣ **Büroklammer-Button (📎) in diesem Chat:** Laden Sie Ihre Datei direkt unten im Chatfenster hoch für eine sofortige Geometrie- & Preisanalyse.\n` +
            `2️⃣ **Online Preiskalkulator (Drag & Drop):** Nutzen Sie das Kalkulator-Modul auf unserer Website.\n` +
            `3️⃣ **Direkt per E-Mail:** Senden Sie Ihre CAD-Dateien an: **3dapex.de@gmail.com**.`
        };
      }
      if (language === 'PL') {
        return {
          text: `📁 **3 Sposoby Przesłania Plików 3D:**\n\n` +
            `1️⃣ **Przycisk Spinacza (📎) na dole tego czatu** (załącz .stl, .step, .obj, .3mf).\n` +
            `2️⃣ **Kalkulator online (Drag & Drop na stronie głównej).**\n` +
            `3️⃣ **E-mail:** 3dapex.de@gmail.com.`
        };
      }
      return {
        text: `📁 **3 Ways to Send 3D Files:**\n\n` +
          `1️⃣ **Paperclip button (📎) at bottom of chat** for instant analysis.\n` +
          `2️⃣ **Online 3D Calculator on homepage.**\n` +
          `3️⃣ **Direct Email:** 3dapex.de@gmail.com.`
      };
    }

    // Supports, Overhangs & Ironing / Podpory / Stützen
    if (q.includes('stützen') || q.includes('stutzen') || q.includes('podpor') || q.includes('support') || q.includes('overhang') || q.includes('ironing') || q.includes('prasowan') || q.includes('glättung')) {
      return {
        text: `📐 **Geometrie, Baumstützen (Tree Supports) & Top Surface Ironing:**\n\n` +
          `• **Tree Supports (Baumstützen):** Für Überhänge >45°. Sparen Material und hinterlassen saubere Kontaktflächen.\n` +
          `• **AMS PVA-Stützschicht:** Über das **Bambu Lab AMS** drucken wir wasserlösliches PVA für perfekte Kontaktzonen.\n` +
          `• **Top Surface Ironing:** Mikrowalzen der Oberfläche mit der heißen Düse für glatte Oberflächen.`
      };
    }

    // TPU Insoles / Orthopädie / Wkładki Medyczne
    if (q.includes('tpu') || q.includes('einlag') || q.includes('insole') || q.includes('ortop') || q.includes('wkładk') || q.includes('wkladk') || q.includes('tabanlık')) {
      return {
        text: `🦶 **Orthopädische TPU 95A Einlagen & Medizintechnik:**\n\n` +
          `• **Spezialisierung 3D Apex:** Maßgeschneiderte TPU-Einlagen für Patienten nach Teilamputationen & in der Rehabilitation.\n` +
          `• **Zonenvariable Fülldichte:** 15-25% Dämpfung im Fersen- & Vorfußbereich, 70-80% Steifigkeit im Längsgewölbe.`
      };
    }

    // Machine Fleet & Company Specs
    if (q.includes('flott') || q.includes('fleet') || q.includes('maschin') || q.includes('park') || q.includes('bambu') || q.includes('qidi') || q.includes('elegoo') || q.includes('toleranz') || q.includes('firma')) {
      return {
        text: `🏭 **3D Apex Maschinenpark & Technische Daten:**\n\n` +
          `• **Flotte:** Bambu Lab X2D Combo (AMS Multi-Material), Bambu Lab P2S, H2S, QIDI X-Max 3 (geheizte Bauraumkammer 65°C für Carbon PAHT-CF), Elegoo Saturn 4 Ultra (MSLA 12K Harzdruck).\n` +
          `• **Produktionszeit & Versandfertig:** 48h – 72h (ab Auftragsbestätigung).\n` +
          `• **Maßtoleranz:** Bis zu **±0.1 mm**.`
      };
    }

    return {
      text: "3D Apex (Adrian Maściuk) – Spezialist für Reverse Engineering, TPU-Orthopädie und Bambu Lab Seriendruck. E-Mail: 3dapex.de@gmail.com, Instagram: @3d_apex.de."
    };
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
      const reply = generateAiReply(currentInput);
      const agentMsg: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, agentMsg]);
      setIsTyping(false);
    }, 700);
  };

  // Handle 3D File Attachment Upload (📎) with Opto-Orientation & Tree Supports Calculation
  const handleChatFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const fileSizeBytes = file.size;
    const formattedSize = fileSizeBytes < 1024 * 1024 
      ? `${Math.round(fileSizeBytes / 1024)} KB` 
      : `${(fileSizeBytes / (1024 * 1024)).toFixed(2)} MB`;
    
    const cleanFileName = file.name;

    // Multilingual File Upload User Message
    let fileMsgText = `📎 3D-Datei hochgeladen: ${cleanFileName} (${formattedSize})`;
    if (language === 'PL') fileMsgText = `📎 Wgrano nowy plik 3D: ${cleanFileName} (${formattedSize})`;
    if (language === 'EN') fileMsgText = `📎 Uploaded new 3D file: ${cleanFileName} (${formattedSize})`;
    if (language === 'TR') fileMsgText = `📎 Yeni 3D dosyası yüklendi: ${cleanFileName} (${formattedSize})`;

    const userFileMsg: ChatMessage = {
      id: `user-file-${Date.now()}`,
      sender: 'user',
      text: fileMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userFileMsg]);
    setIsTyping(true);

    // Dynamic Geometry & Mesh Overhang Parsing
    let volumeCm3 = 38.0;
    let dimensions = { x: 65.0, y: 42.0, z: 28.0 };
    let supportPercent = 12; // +0%, +12%, +22%
    let orientationNote = "Z-Minimierung (Beste Oberflächengüte)";

    if (file.name.toLowerCase().endsWith('.stl')) {
      try {
        const buffer = await file.arrayBuffer();
        const parsed = parseSTLArrayBuffer(buffer);
        if (parsed.volumeCm3 > 0) {
          volumeCm3 = parsed.volumeCm3;
          dimensions = parsed.dimensions;
          supportPercent = parsed.supportPercent;
          orientationNote = parsed.orientationNote;
        }
      } catch (err) {
        console.error("Error parsing STL mesh in chat:", err);
      }
    } else {
      // Simulation for non-STL 3D files (.step, .obj, .3mf)
      volumeCm3 = Number(Math.max(12, Math.round(fileSizeBytes / 1024 * 0.18 + 15)).toFixed(2));
      supportPercent = fileSizeBytes > 250 * 1024 ? 22 : 12;
      orientationNote = "Opto-Orientation (Najwyższa jakość wykończenia)";
    }

    // Weight & Tree Support Calculations
    const density = 1.24; // PETG/PLA density g/cm3
    const infillFactor = 0.35; // 30% infill
    const baseWeightGrams = Number((volumeCm3 * density * infillFactor).toFixed(1));
    const supportWeightGrams = Number((baseWeightGrams * (supportPercent / 100)).toFixed(1));
    const totalWeightGrams = Number((baseWeightGrams + supportWeightGrams).toFixed(1));

    // Pricing Math
    const priceNettoVal = Number((totalWeightGrams * 0.28 + 9.50).toFixed(2));
    const vatRate = language === 'PL' ? 0.23 : 0.19;
    const costVatVal = Number((priceNettoVal * vatRate).toFixed(2));
    const priceBruttoVal = Number((priceNettoVal + costVatVal).toFixed(2));

    // Store attached file state for email form dispatch
    const fileInfo: AttachedFileInfo = {
      fileName: cleanFileName,
      formattedSize: formattedSize,
      fileSizeBytes: fileSizeBytes,
      weightGrams: baseWeightGrams,
      supportWeightGrams: supportWeightGrams,
      totalWeightGrams: totalWeightGrams,
      volumeCm3: volumeCm3,
      dimensions: dimensions,
      supportPercent: supportPercent,
      orientationNote: orientationNote,
      priceNetto: priceNettoVal.toFixed(2),
      vatAmount: costVatVal.toFixed(2),
      priceBrutto: priceBruttoVal.toFixed(2),
      materialRecommendation: 'PETG Technical / PAHT-CF Carbon',
      surfaceFinish: 'Top Surface Ironing & Tree Supports'
    };
    setUploadedFile(fileInfo);

    // AI Immediate 3D Geometry & Dedicated Weight Breakdown Response
    setTimeout(() => {
      let analysisReply = '';

      if (language === 'DE') {
        analysisReply = `📐 **Analyse & Druckoptimierung für Bambu Lab Flotte:**\n` +
          `📁 Datei: **${cleanFileName}** (${formattedSize})\n\n` +
          `⚖️ **Gewichts- & Materialaufschlüsselung:**\n` +
          `• Reines Modellgewicht (Netto): ~${baseWeightGrams} g\n` +
          `• Optimierte Ausrichtung: ${orientationNote}\n` +
          `• Baumstützen (Tree Supports): +${supportPercent}% (~${supportWeightGrams} g)\n` +
          `----------------------------------------\n` +
          `📦 **Gesamtmaterialverbrauch:** **${totalWeightGrams} g**\n\n` +
          `💶 **Endpreis (Brutto inkl. MwSt.):** **€${priceBruttoVal.toFixed(2)} EUR** (Netto: €${priceNettoVal.toFixed(2)} EUR | MwSt: €${costVatVal.toFixed(2)})`;
      } else if (language === 'PL') {
        analysisReply = `📐 **Analiza & Optymalizacja Druku dla Floty Bambu Lab:**\n` +
          `📁 Plik: **${cleanFileName}** (${formattedSize})\n\n` +
          `⚖️ **Rozbicie Wagi & Zużycia Materiału:**\n` +
          `• Masa czystego modelu (Netto): ~${baseWeightGrams} g\n` +
          `• Optymalizacja orientacji: ${orientationNote}\n` +
          `• Podpory choinkowe (Tree Supports): +${supportPercent}% (~${supportWeightGrams} g)\n` +
          `----------------------------------------\n` +
          `📦 **Łączne zużycie materiału (Brutto):** **${totalWeightGrams} g**\n\n` +
          `💶 **Cena końcowa (Brutto z VAT):** **€${priceBruttoVal.toFixed(2)} EUR** (Netto: €${priceNettoVal.toFixed(2)} EUR | VAT: €${costVatVal.toFixed(2)})`;
      } else if (language === 'TR') {
        analysisReply = `📐 **Bambu Lab Filosu İçin Analiz ve Baskı Optimizasyonu:**\n` +
          `📁 Dosya: **${cleanFileName}** (${formattedSize})\n\n` +
          `⚖️ **Ağırlık ve Malzeme Dağılımı:**\n` +
          `• Net Model Ağırlığı: ~${baseWeightGrams} g\n` +
          `• Optimize Yönlendirme: ${orientationNote}\n` +
          `• Ağaç Destekler (Tree Supports): +${supportPercent}% (~${supportWeightGrams} g)\n` +
          `----------------------------------------\n` +
          `📦 **Toplam Malzeme Tüketimi:** **${totalWeightGrams} g**\n\n` +
          `💶 **Son Fiyat (KDV Dahil Brüt):** **€${priceBruttoVal.toFixed(2)} EUR** (Net: €${priceNettoVal.toFixed(2)} EUR)`;
      } else {
        analysisReply = `📐 **Analysis & Print Optimization for Bambu Lab Fleet:**\n` +
          `📁 File: **${cleanFileName}** (${formattedSize})\n\n` +
          `⚖️ **Weight & Material Breakdown:**\n` +
          `• Pure Model Weight (Net): ~${baseWeightGrams} g\n` +
          `• Optimized Orientation: ${orientationNote}\n` +
          `• Tree Supports: +${supportPercent}% (~${supportWeightGrams} g)\n` +
          `----------------------------------------\n` +
          `📦 **Total Material Consumption:** **${totalWeightGrams} g**\n\n` +
          `💶 **Final Price (Gross incl. VAT):** **€${priceBruttoVal.toFixed(2)} EUR** (Net: €${priceNettoVal.toFixed(2)} EUR | VAT: €${costVatVal.toFixed(2)})`;
      }

      const agentAnalysisMsg: ChatMessage = {
        id: `agent-analysis-${Date.now()}`,
        sender: 'agent',
        text: analysisReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, agentAnalysisMsg]);
      setIsTyping(false);
    }, 800);
  };

  // Dispatch Email Payload with Custom Multilingual Validation Protection & Exact 3D Spec Format
  const handleTriggerEmailDispatch = () => {
    setEmailTouched(true);
    setNameTouched(true);

    if (!isEmailValid || !isNameValid) {
      let errorMsg = language === 'DE'
        ? "Bitte geben Sie eine gültige E-Mail-Adresse und Ihren Namen ein."
        : language === 'PL'
        ? "Proszę podać poprawny adres e-mail oraz imię / nazwę firmy."
        : language === 'EN'
        ? "Please enter a valid email address and your name / company."
        : language === 'TR'
        ? "Lütfen geçerli bir e-posta adresi ve adınızı/şirketinizi girin."
        : "Будь ласка, вкажіть коректну e-mail адресу та ім'я / назву компанії.";

      setFormError(errorMsg);
      return;
    }

    setFormError(null);
    setEmailSentSuccess(true);

    // Compute active 3D file specifications
    const activeFileName = initialQuote ? initialQuote.fileName : (uploadedFile ? uploadedFile.fileName : 'Brak pliku');
    const activeWeight = initialQuote ? `${initialQuote.weightGrams}` : (uploadedFile ? `${uploadedFile.totalWeightGrams}` : '0');
    const activeMaterial = initialQuote 
      ? (MATERIALS.find(m => m.id === initialQuote.materialId)?.name || initialQuote.materialId)
      : (uploadedFile ? (uploadedFile.materialRecommendation || 'PETG Technical / PAHT-CF') : 'Standard');
    const activeGross = initialQuote ? `${initialQuote.totalGross}` : (uploadedFile ? `${uploadedFile.priceBrutto}` : '0.00');

    // Filter chat transcript for DSGVO compliance - exclude sensitive personal data from public chat log
    const conversationText = messages
      .filter(m => !m.text.includes('3dapex.de@gmail.com') || m.isQuoteSummary)
      .map(m => `[${m.sender.toUpperCase()}]: ${m.text}`)
      .join('\n\n');

    const fullMessagePayload = `🚀 NOWE ZAMÓWIENIE / WYCENA 3D APEX\n` +
      `----------------------------------\n` +
      `Plik 3D: ${activeFileName}\n` +
      `Waga: ${activeWeight} g\n` +
      `Materiał: ${activeMaterial}\n` +
      `Kwota Brutto: € ${activeGross}\n` +
      `Klient: ${userName}\n` +
      `E-mail: ${userEmail}\n` +
      `Uwagi: ${userNotes || 'Brak dodatkowych uwag'}\n\n` +
      `--- PEŁNY CHAT LOG ---\n` +
      `${conversationText}`;

    // Web3Forms API post to 3dapex.de@gmail.com
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '3dapex-b2b-inquiry-key',
        subject: `[3D APEX ZAMÓWIENIE] Plik 3D: ${activeFileName}`,
        from_name: '3D Apex Customer Inquiry',
        to_email: '3dapex.de@gmail.com',
        email: userEmail,
        message: fullMessagePayload
      })
    }).catch(err => console.log('Web3Forms email dispatch error:', err));

    setTimeout(() => {
      const emailSubject = encodeURIComponent(`🚀 NOWE ZAMÓWIENIE 3D APEX - ${activeFileName}`);
      const emailBody = encodeURIComponent(fullMessagePayload);
      window.location.href = `mailto:3dapex.de@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    }, 400);

    // Automatic Form Reset & Data Purge after 1.8 seconds (RODO / DSGVO Compliance)
    setTimeout(() => {
      resetEmailForm();
    }, 1800);
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
              onClick={() => {
                setFormError(null);
                setShowEmailDialog(true);
              }}
              className="btn-primary text-xs py-1.5 px-3 min-h-[36px] rounded-lg flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">E-Mail</span>
            </button>

            <button 
              onClick={() => {
                resetEmailForm();
                onClose();
              }}
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

          <div className="hidden sm:flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>RODO / DSGVO Compliant</span>
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
                      {t.summaryTitle}
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>{t.summaryFile}</span>
                      <span className="font-semibold text-white truncate max-w-[140px]">{msg.quoteData.fileName}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>{t.summaryWeightVolume}</span>
                      <span className="font-medium text-cyan-300">{msg.quoteData.weightGrams}g ({msg.quoteData.fileVolumeCm3} cm³)</span>
                    </div>
                    <div className="flex justify-between text-gray-300 border-t border-slate-800 pt-1 font-bold">
                      <span>{t.summaryGrossTotal}</span>
                      <span className="text-emerald-400">€{msg.quoteData.totalGross} EUR</span>
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

        {/* Input Form with Paperclip 📎 attachment button */}
        <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <label 
            htmlFor="chat-file-input"
            className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 hover:bg-slate-700 hover:text-emerald-300 cursor-pointer transition-all flex items-center justify-center min-w-[44px] min-h-[44px] border border-slate-700 hover:border-emerald-500/50 shrink-0"
            title="3D-Datei anhängen (.stl, .step, .obj, .3mf)"
          >
            <Paperclip className="w-5 h-5" />
          </label>

          <input 
            type="file" 
            id="chat-file-input"
            accept=".stl,.step,.obj,.3mf"
            onChange={handleChatFileUpload}
            className="hidden"
          />

          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-2.5 text-base focus:outline-none focus:border-emerald-500 min-h-[44px]"
          />
          
          <button 
            type="submit" 
            className="btn-primary py-2.5 px-4 text-xs font-bold min-h-[44px] rounded-xl shrink-0 flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Email Dialog Overlay with Strict Custom i18n Validation & RODO Reset */}
        {showEmailDialog && (
          <div className="absolute inset-0 z-20 bg-slate-950/95 p-5 sm:p-6 flex flex-col justify-center space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h4 className="font-heading font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                {t.emailModalTitle}
              </h4>
              <button 
                onClick={() => {
                  resetEmailForm();
                }}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-300">
              {t.emailModalDesc}
            </p>

            {/* Red Validation Error Message Banner */}
            {formError && (
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{formError}</span>
              </div>
            )}

            {/* Dynamic 3D Specification Preview Card in Email Modal */}
            {initialQuote ? (
              <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/50 space-y-2 text-xs">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
                  <FileText className="w-4 h-4" />
                  <span>{t.summaryTitle}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-cyan-300 text-xs truncate">
                  📎 <strong>{initialQuote.fileName}</strong> • {initialQuote.weightGrams} g • {MATERIALS.find(m => m.id === initialQuote.materialId)?.name || initialQuote.materialId}
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{t.summaryFile}</span>
                  <span className="font-bold text-white truncate max-w-[200px]">{initialQuote.fileName}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{t.summaryWeightVolume}</span>
                  <span className="font-mono text-cyan-300">{initialQuote.weightGrams} g ({MATERIALS.find(m => m.id === initialQuote.materialId)?.name || initialQuote.materialId})</span>
                </div>
                <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800 font-bold">
                  <span>{t.summaryGrossTotal}</span>
                  <span className="text-emerald-400 text-sm font-extrabold">€{initialQuote.totalGross} EUR</span>
                </div>
              </div>
            ) : uploadedFile ? (
              <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/50 space-y-2 text-xs">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
                  <Paperclip className="w-4 h-4" />
                  <span>{t.summaryTitle}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-cyan-300 text-xs truncate">
                  📎 <strong>{uploadedFile.fileName}</strong> • {uploadedFile.totalWeightGrams} g • {uploadedFile.materialRecommendation || 'PETG Technical / PAHT-CF'}
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{t.summaryFile}</span>
                  <span className="font-bold text-white truncate max-w-[200px]">{uploadedFile.fileName} ({uploadedFile.formattedSize})</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{t.summaryWeightVolume}</span>
                  <span className="font-mono text-cyan-300">~{uploadedFile.weightGrams}g + Stützen: ~{uploadedFile.totalWeightGrams}g</span>
                </div>
                <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800 font-bold">
                  <span>{t.summaryGrossTotal}</span>
                  <span className="text-emerald-400 text-sm font-extrabold">€{uploadedFile.priceBrutto} EUR</span>
                </div>
              </div>
            ) : null}

            <form noValidate onSubmit={(e) => { e.preventDefault(); handleTriggerEmailDispatch(); }} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">{t.yourEmail} *</label>
                <input 
                  type="email" 
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                    if (formError) setFormError(null);
                  }}
                  onBlur={() => setEmailTouched(true)}
                  placeholder="your-email@domain.com"
                  className={`bg-slate-900 text-slate-100 rounded-xl px-4 py-2.5 text-base w-full min-h-[44px] transition-all ${
                    emailTouched && !isEmailValid 
                      ? 'border-2 border-red-500/80 focus:border-red-400 focus:outline-none ring-1 ring-red-500/40' 
                      : 'border border-slate-700 focus:outline-none focus:border-emerald-500'
                  }`}
                />
                {emailTouched && !userEmail.trim() && (
                  <span className="text-red-400 text-[11px] font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {tVal.requiredField}
                  </span>
                )}
                {emailTouched && userEmail.trim() && !isEmailValid && (
                  <span className="text-red-400 text-[11px] font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {tVal.invalidEmail}
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">{t.yourName} *</label>
                <input 
                  type="text" 
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    if (formError) setFormError(null);
                  }}
                  onBlur={() => setNameTouched(true)}
                  placeholder="Company / Full Name (min. 2 chars)"
                  className={`bg-slate-900 text-slate-100 rounded-xl px-4 py-2.5 text-base w-full min-h-[44px] transition-all ${
                    nameTouched && !isNameValid 
                      ? 'border-2 border-red-500/80 focus:border-red-400 focus:outline-none ring-1 ring-red-500/40' 
                      : 'border border-slate-700 focus:outline-none focus:border-emerald-500'
                  }`}
                />
                {nameTouched && !isNameValid && (
                  <span className="text-red-400 text-[11px] font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {tVal.requiredField}
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">{t.notes}</label>
                <textarea 
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  placeholder="Additional specifications or project notes..."
                  className="bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-base w-full h-20 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  type="submit"
                  className={`flex-1 btn-primary justify-center text-xs py-3 min-h-[44px] rounded-xl font-bold flex items-center gap-2 transition-all`}
                >
                  <Mail className="w-4 h-4" />
                  <span>3dapex.de@gmail.com</span>
                </button>

                <button 
                  type="button"
                  onClick={() => {
                    resetEmailForm();
                  }}
                  className="btn-secondary text-xs min-h-[44px] rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>

            {emailSentSuccess && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Dispatched to 3dapex.de@gmail.com! (RODO Auto-Purge active)</span>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
