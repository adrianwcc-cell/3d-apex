import { Language } from '../types';

export interface TranslationStructure {
  nav: {
    services: string;
    calculator: string;
    b2b: string;
    faq: string;
    contact: string;
  };
  hero: {
    pill: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaCalculator: string;
    ctaAiAgent: string;
    founderTag: string;
    statMachines: string;
    statPrecision: string;
    statTurnaround: string;
    statMaterials: string;
    badgeReverse: string;
    badgeTpu: string;
    badgeFleet: string;
    cardBadge: string;
    cardInsoleTitle: string;
    cardInsoleSub: string;
    heelZoneTitle: string;
    heelZoneDesc: string;
    midfootZoneTitle: string;
    midfootZoneDesc: string;
    readyTime: string;
  };
  services: {
    title: string;
    subtitle: string;
    btnCadScan: string;
    btnTpuQuote: string;
    btnCalcQuote: string;
    reverseEngineering: {
      badge: string;
      title: string;
      desc: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    medical: {
      badge: string;
      title: string;
      desc: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    fleet: {
      badge: string;
      title: string;
      desc: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
  };
  calculator: {
    title: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    analyzedBadge: string;
    dragActive: string;
    dragDefault: string;
    dragSub: string;
    fileSelected: string;
    volumeLabel: string;
    materialLabel: string;
    infillLabel: string;
    layerLabel: string;
    quantityLabel: string;
    widthX: string;
    lengthY: string;
    heightZ: string;
    densityLabel: string;
    vatRateLabel: string;
    summaryTitle: string;
    weightLabel: string;
    costMaterial: string;
    costMachine: string;
    costSetup: string;
    costHandling: string;
    costVat: string;
    costTotalNet: string;
    totalGross: string;
    btnConsultAi: string;
    btnSendEmail: string;
    orderNote: string;
  };
  aiAgent: {
    title: string;
    badge: string;
    status: string;
    welcomeMsg: string;
    placeholder: string;
    send: string;
    emailModalTitle: string;
    emailModalDesc: string;
    yourEmail: string;
    yourName: string;
    notes: string;
    confirmSend: string;
    successMsg: string;
    summaryTitle: string;
    summaryFile: string;
    summaryWeightVolume: string;
    summaryGrossTotal: string;
  };
  b2b: {
    badge: string;
    title: string;
    subtitle: string;
    company: string;
    email: string;
    phone: string;
    serviceType: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderPhone: string;
    placeholderDesc: string;
    optionReverse: string;
    optionMedical: string;
    optionSerial: string;
    optionScanCad: string;
    optionOther: string;
    description: string;
    submit: string;
    success: string;
  };
  faq: {
    badge: string;
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  validation: {
    requiredField: string;
    invalidEmail: string;
  };
  footer: {
    navTitle: string;
    navReverse: string;
    navMedical: string;
    navCalc: string;
    navFaq: string;
    navContact: string;
    scrollTop: string;
    tagline: string;
    rodoTitle: string;
    rodoText: string;
    demoNotice: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationStructure> = {
  DE: {
    nav: {
      services: "Spezialisierungen",
      calculator: "Preiskalkulator",
      b2b: "B2B & Industrie",
      faq: "FAQ",
      contact: "Kontakt"
    },
    hero: {
      pill: "MASCHINENFLOTTE: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "Präzision Geschmiedet im",
      title2: "3D-Raum",
      subtitle: "Reverse Engineering, Nachfertigung ausgelaufener Ersatzteile und orthopädische TPU-Einlagen. Automatischer Online-Preiskalkulator.",
      ctaCalculator: "Online 3D-Kalkulation",
      ctaAiAgent: "KI-Agenten Fragen",
      founderTag: "Adrian Maściuk • Gründer von 3D Apex",
      statMachines: "Bambu Lab Flotte",
      statPrecision: "Toleranz ±0.1 mm",
      statTurnaround: "Versandfertig in 48–72h",
      statMaterials: "TPU & Carbon PAHT-CF",
      badgeReverse: "Reverse Engineering",
      badgeTpu: "TPU 95A Einlagen",
      badgeFleet: "Bambu Lab Farm",
      cardBadge: "Medizinischer 3D-Druck",
      cardInsoleTitle: "Orthopädische TPU 95A Einlage",
      cardInsoleSub: "Zonenvariable Fülldichte (15% - 80%)",
      heelZoneTitle: "Fersenzone",
      heelZoneDesc: "Fest (70-80% Infill)",
      midfootZoneTitle: "Mittelfußzone",
      midfootZoneDesc: "Dämpfung (20-30%)",
      readyTime: "Versandfertig in 48–72h"
    },
    services: {
      title: "Kernkompetenzen von 3D Apex",
      subtitle: "Vom 3D-Scan und der Geometrierekonstruktion defekter Bauteile bis hin zur medizinischen TPU-Orthopädie.",
      btnCadScan: "CAD-Projekt / 3D-Scan",
      btnTpuQuote: "TPU-Einlagen Angebot",
      btnCalcQuote: "3D-Preiskalkulator",
      reverseEngineering: {
        badge: "Reverse Engineering",
        title: "Nachfertigung Ausgelaufener Ersatzteile",
        desc: "Haben Sie ein defektes Zahnrad, Maschinenelement oder Autoteil, das nicht mehr im Handel erhältlich ist? Wir führen vollständiges Reverse Engineering durch und drucken verstärkte Ersatzteile aus PAHT-CF, Nylon oder PETG.",
        bullet1: "Präzise Rekonstruktion aus 3D-Scan oder beschädigtem Muster",
        bullet2: "DFM-Konstruktionsoptimierung zur Behebung ursprünglicher Schwachstellen",
        bullet3: "Einzelstück- und Kleinserienfertigung von Ersatzteilen"
      },
      medical: {
        badge: "Orthopädie & Medizin",
        title: "Orthopädische TPU-Einlagen & Medizindruck",
        desc: "Wir drucken maßgeschneiderte Schuheinlagen aus flexiblem TPU 95A mit zonenvariabler Fülldichte (15% - 80%). Optimal zur Unterstützung der Rehabilitation und nach Amputationen.",
        bullet1: "Zonenvariable Härte – feste Fersenstütze & weiche Dämpfung",
        bullet2: "Verwendung von biokompatiblem PETG Med-Grade mit Zertifikat",
        bullet3: "Ergonomische Komponenten für Orthopädietechnik"
      },
      fleet: {
        badge: "Bambu Lab Flotte",
        title: "Industrieller Seriendruck mit Bambu Lab",
        desc: "Unsere Flotte aus Bambu Lab X2D Combo, P2S und H2S garantiert höchste Serienwiederholgenauigkeit und verarbeitet Carbon-Filamente (PAHT-CF).",
        bullet1: "Maßgenauigkeit durch automatische Lidar-Kalibrierung",
        bullet2: "Bestellungen ab 1 Stück bis zu Serienaufträgen",
        bullet3: "Versandfertig innerhalb von 48 bis 72 Stunden"
      }
    },
    calculator: {
      title: "Automatischer Online-Preiskalkulator",
      subtitle: "Laden Sie Ihre STL/STEP Datei hoch, um sofort exakte Produktionskosten zu berechnen.",
      step1Title: "1. 3D-DATEI & ABMESSUNGEN",
      step2Title: "2. MATERIAL & DRUCKPARAMETER",
      analyzedBadge: "Im Browser analysiert",
      dragActive: "STL-Datei hier ablegen...",
      dragDefault: "3D-Datei per Drag & Drop ablegen (STL, STEP, OBJ)",
      dragSub: "Das System berechnet automatisch Volumen (cm³), Oberfläche und Maße",
      fileSelected: "Geladene Datei:",
      volumeLabel: "Modellvolumen (cm³):",
      materialLabel: "Material Wählen:",
      infillLabel: "Fülldichte (%):",
      layerLabel: "Schichthöhe (Auflösung):",
      quantityLabel: "Stückzahl:",
      widthX: "Breite X",
      lengthY: "Länge Y",
      heightZ: "Höhe Z",
      densityLabel: "Dichte:",
      vatRateLabel: "19% MwSt.",
      summaryTitle: "Kostenaufschlüsselung",
      weightLabel: "Berechnetes Gewicht:",
      costMaterial: "Materialkosten:",
      costMachine: "Maschinenlaufzeit:",
      costSetup: "Dateivorbereitung & Slicing:",
      costHandling: "Bearbeitung & Verpackung:",
      costVat: "19% MwSt.:",
      costTotalNet: "Nettowert:",
      totalGross: "GESAMT BRUTTO:",
      btnConsultAi: "Angebot an KI-Agenten Senden",
      btnSendEmail: "Angebot per E-Mail senden (3dapex.de@gmail.com)",
      orderNote: "Auftragsbestätigung & Produktion innerhalb von 48-72 Std."
    },
    aiAgent: {
      title: "3D Apex KI-Agent • Technischer Assistent",
      badge: "KI 24/7",
      status: "Online • Beratung 3D-Druck & Angebote",
      welcomeMsg: "Hallo! Ich bin der KI-Assistent von 3D Apex. Ich helfe bei der Materialauswahl (TPU, PETG Med, PAHT-CF), dem Reverse Engineering oder TPU-Einlagen.",
      placeholder: "Frage stellen zu TPU, Ersatzteilen oder Angeboten...",
      send: "Senden",
      emailModalTitle: "Zusammenfassung per E-Mail senden",
      emailModalDesc: "Geben Sie Ihre E-Mail-Adresse ein. Die Zusammenfassung wird an 3dapex.de@gmail.com gesendet.",
      yourEmail: "Ihre E-Mail-Adresse:",
      yourName: "Name / Firmenname:",
      notes: "Zusätzliche Anforderungen:",
      confirmSend: "An 3dapex.de@gmail.com Senden",
      successMsg: "Zusammenfassung erfolgreich an 3dapex.de@gmail.com gesendet!",
      summaryTitle: "3D-Kalkulationsübersicht",
      summaryFile: "Datei:",
      summaryWeightVolume: "Gewicht & Volumen:",
      summaryGrossTotal: "Gesamtbetrag (Brutto):"
    },
    b2b: {
      badge: "B2B & SPEZIALDIENSTLEISTUNGEN",
      title: "B2B-Kontakt & Spezialdienstleistungen",
      subtitle: "Haben Sie ein defektes Bauteil oder ein B2B-Projekt? Antwort in 2-4 Stunden.",
      company: "Firmenname / Name",
      email: "Kontakt E-Mail-Adresse",
      phone: "Telefonnummer (optional)",
      serviceType: "Art der Dienstleistung",
      placeholderName: "Firma / Ansprechpartner",
      placeholderEmail: "partner@unternehmen.de",
      placeholderPhone: "+49 123 456789",
      placeholderDesc: "Projektdetails, CAD-Anforderungen, Materialwünsche...",
      optionReverse: "Reverse Engineering (Ersatzteile)",
      optionMedical: "Orthopädische TPU-Einlagen / Medizindruck",
      optionSerial: "Industrieller 3D-Druck",
      optionScanCad: "3D-Scan & CAD-Modellierung",
      optionOther: "Sonstige Anfrage / Beratung",
      description: "Projektbeschreibung / Technische Anforderungen",
      submit: "B2B-Anfrage an 3dapex.de@gmail.com Senden",
      success: "Vielen Dank! Anfrage an 3dapex.de@gmail.com gesendet."
    },
    faq: {
      badge: "Fragen & Antworten",
      title: "Häufig Gestellte Fragen (FAQ)",
      q1: "Wie funktioniert Reverse Engineering für ausgelaufene Ersatzteile?",
      a1: "Senden Sie uns ein defektes Muster. Wir erstellen das 3D-CAD-Modell, optimieren die Geometrie und drucken das Bauteil aus PETG, Nylon oder PAHT-CF Carbon.",
      q2: "Wie funktionieren maßgeschneiderte TPU-Einlagen?",
      a2: "Wir drucken Einlagen aus flexiblem TPU 95A mit zonenvariabler Wabenfüllung: feste Fersenstütze und weiche Dämpfung im Vorfußbereich.",
      q3: "Sind meine hochgeladenen 3D-Dateien sicher?",
      a3: "Ja! Alle Dateianalysen erfolgen zu 100% lokal in Ihrem Browser. Es werden keine Modelle an externe Server gesendet.",
      q4: "Wie lang ist die Lieferzeit?",
      a4: "Die Produktion ist innerhalb von 48 bis 72 Stunden ab Auftragsbestätigung versandfertig.",
      q5: "Stellen Sie MwSt.-Rechnungen aus?",
      a5: "Ja, wir stellen reguläre 19% MwSt.-Rechnungen sowie Steuerfreie EU-Rechnungen (Reverse Charge) aus."
    },
    validation: {
      requiredField: "Bitte füllen Sie dieses Feld aus.",
      invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein."
    },
    footer: {
      navTitle: "Navigation",
      navReverse: "Reverse Engineering",
      navMedical: "TPU Einlagen",
      navCalc: "Preiskalkulator",
      navFaq: "FAQ",
      navContact: "B2B Kontakt",
      scrollTop: "Nach oben ↑",
      tagline: "Präzise Geometrierekonstruktion, moderne TPU-Orthopädie und industrieller 3D-Druck auf Bambu Lab Flotte.",
      rodoTitle: "DSGVO- & Datenschutz-Hinweis:",
      rodoText: "Verantwortlicher ist Adrian Maściuk (3D Apex). 3D-Dateien werden ausschließlich lokal im Browser verarbeitet.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Alle Rechte vorbehalten. | Offizielle Eröffnung in Kürze – Technologie- und Systemdemonstration (Pre-Launch Version).",
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Alle Rechte vorbehalten."
    }
  },
  EN: {
    nav: {
      services: "Specializations",
      calculator: "Price Calculator",
      b2b: "B2B & Industry",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      pill: "MACHINE FLEET: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "Precision Forged in",
      title2: "3D Space",
      subtitle: "Reverse Engineering, obsolete spare parts reconstruction, and orthotic TPU insoles. Automatic online 3D price calculator.",
      ctaCalculator: "Instant 3D Calculation",
      ctaAiAgent: "Ask AI Agent",
      founderTag: "Adrian Maściuk • Founder of 3D Apex",
      statMachines: "Bambu Lab Fleet",
      statPrecision: "Tolerance ±0.1 mm",
      statTurnaround: "Ready to ship in 48–72h",
      statMaterials: "TPU & Carbon PAHT-CF",
      badgeReverse: "Reverse Engineering",
      badgeTpu: "TPU 95A Insoles",
      badgeFleet: "Bambu Lab Farm",
      cardBadge: "Specialized Medical Printing",
      cardInsoleTitle: "TPU 95A Orthotic Insole",
      cardInsoleSub: "Zone-variable infill density (15% - 80%)",
      heelZoneTitle: "Heel Zone",
      heelZoneDesc: "Firm (70-80% Infill)",
      midfootZoneTitle: "Midfoot Zone",
      midfootZoneDesc: "Cushioning (20-30%)",
      readyTime: "Ready to ship in 48–72h"
    },
    services: {
      title: "Core Specializations of 3D Apex",
      subtitle: "From 3D scanning and broken part geometry reconstruction, to custom TPU orthoptics and rapid production series.",
      btnCadScan: "CAD Project / 3D Scan",
      btnTpuQuote: "TPU Insoles Quote",
      btnCalcQuote: "3D Price Calculator",
      reverseEngineering: {
        badge: "Reverse Engineering",
        title: "Reconstructing Obsolete & Out-of-Stock Parts",
        desc: "Got a broken motorized gear, industrial machine part, or appliance component no longer available for purchase? We perform complete reverse engineering and print reinforced replacements in PAHT-CF, Nylon, or PETG.",
        bullet1: "Exact dimensional matching from 3D scan or physical sample",
        bullet2: "DFM Structural reinforcement to eliminate original design flaws",
        bullet3: "Single-piece and low-volume replacement manufacturing"
      },
      medical: {
        badge: "Orthopedics & Medical",
        title: "Custom TPU Orthotic Insoles & Medical Components",
        desc: "We print custom-fitted shoe insoles using flexible TPU 95A with zone-variable infill density (15% - 80%). Ideal for post-amputation rehabilitation and gait correction.",
        bullet1: "Zone density selection – firm heel support & soft metatarsal cushioning",
        bullet2: "Biocompatible PETG Med-Grade with certified cleanliness",
        bullet3: "Ergonomic components for rehabilitation and orthotics"
      },
      fleet: {
        badge: "Bambu Lab Fleet",
        title: "High Efficiency Industrial Printing on Bambu Lab Farm",
        desc: "We utilize top-performing machines: Bambu Lab X2D Combo, P2S, and large-format H2S supporting high-temperature PAHT-CF carbon filaments.",
        bullet1: "Dimensional repeatability and automatic Lidar calibration",
        bullet2: "Orders starting from 1 piece to hundreds",
        bullet3: "Ready to ship within 48 to 72 hours"
      }
    },
    calculator: {
      title: "Automated Online 3D Price Calculator",
      subtitle: "Upload your STL/STEP file or adjust volume to instantly calculate exact manufacturing costs.",
      step1Title: "1. 3D FILE & DIMENSIONS",
      step2Title: "2. MATERIAL & PRINT PARAMETERS",
      analyzedBadge: "Analyzed in browser",
      dragActive: "Drop STL file here...",
      dragDefault: "Drag & Drop 3D File (STL, STEP, OBJ)",
      dragSub: "System automatically reads volume (cm³), surface area, and dimensions",
      fileSelected: "Loaded file:",
      volumeLabel: "Volume (cm³):",
      materialLabel: "Select Material:",
      infillLabel: "Infill Density (%):",
      layerLabel: "Layer Height (Resolution):",
      quantityLabel: "Quantity:",
      widthX: "Width X",
      lengthY: "Length Y",
      heightZ: "Height Z",
      densityLabel: "Density:",
      vatRateLabel: "20% VAT",
      summaryTitle: "Detailed Cost Breakdown",
      weightLabel: "Calculated Weight:",
      costMaterial: "Material Cost:",
      costMachine: "Bambu Lab Machine Time:",
      costSetup: "File Preparation & Slicing:",
      costHandling: "Post-processing & Packaging:",
      costVat: "20% VAT:",
      costTotalNet: "Net Order Value:",
      totalGross: "TOTAL GROSS:",
      btnConsultAi: "Ask AI Agent",
      btnSendEmail: "Send Quote to Email (3dapex.de@gmail.com)",
      orderNote: "Order confirmation & production within 48-72 hrs."
    },
    aiAgent: {
      title: "3D Apex AI Agent • Technical Assistant",
      badge: "AI 24/7",
      status: "Online • 3D Printing & Quote Advisory",
      welcomeMsg: "Hello! I am 3D Apex AI assistant. I can help you select materials (TPU, PETG Med, PAHT-CF), advise on reverse engineering or custom TPU orthotics.",
      placeholder: "Ask about TPU materials, replacement parts, or quotes...",
      send: "Send",
      emailModalTitle: "Send Summary to Email",
      emailModalDesc: "Enter your email. The breakdown will be sent directly to 3dapex.de@gmail.com.",
      yourEmail: "Your Email Address:",
      yourName: "Name / Company Name:",
      notes: "Additional Specifications:",
      confirmSend: "Send to 3dapex.de@gmail.com",
      successMsg: "Summary successfully sent to 3dapex.de@gmail.com!",
      summaryTitle: "3D Calculator Summary",
      summaryFile: "File:",
      summaryWeightVolume: "Weight & Volume:",
      summaryGrossTotal: "Gross Total:"
    },
    b2b: {
      badge: "B2B & SPECIALIZED SERVICES",
      title: "B2B Contact & Engineering Requests",
      subtitle: "Need an out-of-stock replacement part or B2B production quote? Reply within 2-4 hours.",
      company: "Company Name / Full Name",
      email: "Contact Email Address",
      phone: "Phone Number (optional)",
      serviceType: "Service Category",
      placeholderName: "Company / Contact Person",
      placeholderEmail: "partner@company.com",
      placeholderPhone: "+49 123 456789",
      placeholderDesc: "Project description, CAD requirements, preferred material...",
      optionReverse: "Reverse Engineering (Spare Parts)",
      optionMedical: "Custom TPU Insoles / Medical Printing",
      optionSerial: "Industrial 3D Printing Production",
      optionScanCad: "3D Scanning & CAD Modeling",
      optionOther: "General Inquiry / Consultation",
      description: "Project Description / Technical Requirements",
      submit: "Send B2B Request to 3dapex.de@gmail.com",
      success: "Thank you! Request sent to 3dapex.de@gmail.com."
    },
    faq: {
      badge: "Frequently Asked Questions",
      title: "Frequently Asked Questions (FAQ)",
      q1: "How does reverse engineering work for obsolete spare parts?",
      a1: "Send us a broken or worn sample. We generate a precise 3D CAD model, reinforce weak stress points, and print a replacement in PETG, Nylon, or PAHT-CF Carbon.",
      q2: "How do custom TPU orthotic insoles work?",
      a2: "We print insoles from flexible TPU 95A featuring zone-variable gyroid density: firm heel cup support combined with soft metatarsal shock absorption.",
      q3: "Are my uploaded 3D CAD files secure?",
      a3: "Yes! All 3D file geometric analysis is processed 100% locally in your browser. No files are stored or transmitted to external servers.",
      q4: "What is the production and lead time?",
      a4: "Orders are ready to ship within 48 to 72 hours after order confirmation and production.",
      q5: "Do you issue official VAT tax invoices?",
      a5: "Yes, we issue standard EU 19%/20% VAT invoices as well as Tax-Free EU Reverse Charge invoices for business customers."
    },
    validation: {
      requiredField: "Please fill in this field.",
      invalidEmail: "Please enter a valid email address."
    },
    footer: {
      navTitle: "Navigation",
      navReverse: "Reverse Engineering",
      navMedical: "TPU Insoles",
      navCalc: "Price Calculator",
      navFaq: "FAQ",
      navContact: "B2B Contact",
      scrollTop: "Back to top ↑",
      tagline: "Precise geometry reconstruction, modern TPU orthopedics, and industrial 3D printing on Bambu Lab fleet.",
      rodoTitle: "GDPR & Data Privacy Notice:",
      rodoText: "Data Controller is Adrian Maściuk (3D Apex). 3D files are processed strictly locally in your browser.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. All rights reserved. | Official opening coming soon – technology demonstration (Pre-Launch Version).",
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. All rights reserved."
    }
  },
  TR: {
    nav: {
      services: "Uzmanlıklar",
      calculator: "Fiyat Hesaplayıcı",
      b2b: "B2B ve Sanayi",
      faq: "SSS",
      contact: "İletişim"
    },
    hero: {
      pill: "MAKİNE PARKI: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "Hassasiyet İle İşlenmiş",
      title2: "3D Uzay",
      subtitle: "Tersine mühendislik, üretilmeyen yedek parçaların üretimi ve ortopedik TPU tabanlıklar.",
      ctaCalculator: "Online 3D Hesaplama",
      ctaAiAgent: "AI Ajanına Sor",
      founderTag: "Adrian Maściuk • 3D Apex Kurucusu",
      statMachines: "Bambu Lab Filosu",
      statPrecision: "Tolerans ±0.1 mm",
      statTurnaround: "48–72 saatte kargoya hazır",
      statMaterials: "TPU ve Carbon PAHT-CF",
      badgeReverse: "Tersine Mühendislik",
      badgeTpu: "TPU 95A Tabanlık",
      badgeFleet: "Bambu Lab Çiftliği",
      cardBadge: "Medikal 3D Baskı",
      cardInsoleTitle: "Ortopedik TPU 95A Tabanlık",
      cardInsoleSub: "Bölgesel değişken dolgu yoğunluğu (%15 - %80)",
      heelZoneTitle: "Topuk Bölgesi",
      heelZoneDesc: "Sert (%70-80 Dolgu)",
      midfootZoneTitle: "Orta Ayak Bölgesi",
      midfootZoneDesc: "Yastıklama (%20-30)",
      readyTime: "48–72 saatte kargoya hazır"
    },
    services: {
      title: "3D Apex Temel Uzmanlıkları",
      subtitle: "3D taramadan bozuk parça geometrisi rekonstrüksiyonuna, medikal TPU tabanlıklara kadar.",
      btnCadScan: "CAD Projesi / 3D Tarama",
      btnTpuQuote: "TPU Tabanlık Teklifi",
      btnCalcQuote: "3D Fiyat Hesaplayıcı",
      reverseEngineering: {
        badge: "Tersine Mühendislik",
        title: "Üretilmeyen Parçaların Yeniden Üretimi",
        desc: "Satın alınamayan kırık bir dişli veya makine parçanız mı var? Tam tersine mühendislik uygulayarak PAHT-CF veya PETG'den güçlendirilmiş yedek parçalar basıyoruz.",
        bullet1: "3D taramadan hassas rekonstrüksiyon",
        bullet2: "Orijinal zayıflıkları gidermek için DFM optimizasyonu",
        bullet3: "Yedek parçaların tekli ve küçük seri üretimi"
      },
      medical: {
        badge: "Ortopedi ve Medikal",
        title: "Ortopedik TPU Tabanlıklar ve Medikal Baskı",
        desc: "Esnek TPU 95A malzemesinden bölgesel değişken dolgulu tabanlıklar basıyoruz.",
        bullet1: "Bölgesel sertlik seçimi – sert topuk ve yumuşak yastıklama",
        bullet2: "Sertifikalı biyouyumlu PETG Med-Grade kullanımı",
        bullet3: "Rehabilitasyon için ergonomik bileşenler"
      },
      fleet: {
        badge: "Bambu Lab Filosu",
        title: "Bambu Lab İle Seri Üretim",
        desc: "Bambu Lab X2D Combo, P2S ve H2S filomuz yüksek seri tekrarlanabilirlik sunar.",
        bullet1: "Otomatik Lidar kalibrasyonu ile boyut doğruluğu",
        bullet2: "1 adetten seri üretime kadar siparişler",
        bullet3: "48-72 saat içinde kargoya hazır"
      }
    },
    calculator: {
      title: "Otomatik Online 3D Fiyat Hesaplayıcı",
      subtitle: "Üretim maliyetini anında hesaplamak için STL/STEP dosyanızı yükleyin.",
      step1Title: "1. 3D DOSYA VE BOYUTLAR",
      step2Title: "2. MALZEME VE BASKI PARAMETRELERİ",
      analyzedBadge: "Tarayıcıda analiz edildi",
      dragActive: "STL dosyasını buraya bırakın...",
      dragDefault: "3D Dosyayı Sürükleyin ve Bırakın (STL, STEP, OBJ)",
      dragSub: "Sistem hacim (cm³), yüzey alanı ve boyutları otomatik hesaplar",
      fileSelected: "Yüklenen dosya:",
      volumeLabel: "Model Hacmi (cm³):",
      materialLabel: "Malzeme Seçin:",
      infillLabel: "Dolgu Yoğunluğu (%):",
      layerLabel: "Katman Yüksekliği (Çözünürlük):",
      quantityLabel: "Adet:",
      widthX: "Genişlik X",
      lengthY: "Uzunluk Y",
      heightZ: "Yükseklik Z",
      densityLabel: "Yoğunluk:",
      vatRateLabel: "%20 KDV",
      summaryTitle: "Detaylı Maliyet Dağılımı",
      weightLabel: "Hesaplanan Ağırlık:",
      costMaterial: "Malzeme Maliyeti:",
      costMachine: "Makine Süresi:",
      costSetup: "Dosya Hazırlama ve Dilimleme:",
      costHandling: "İşleme ve Paketleme:",
      costVat: "%20 KDV:",
      costTotalNet: "Net Tutar:",
      totalGross: "TOPLAM BRÜT:",
      btnConsultAi: "AI Ajanına Teklif Gönder",
      btnSendEmail: "E-posta İle Gönder (3dapex.de@gmail.com)",
      orderNote: "Sipariş onayı ve üretim 48-72 saat içinde."
    },
    aiAgent: {
      title: "3D Apex AI Ajanı • Teknik Asistan",
      badge: "AI 24/7",
      status: "Çevrimiçi • 3D Baskı ve Danışmanlık",
      welcomeMsg: "Merhaba! 3D Apex AI asistanıyım. Malzeme seçimi (TPU, PETG Med, PAHT-CF) veya tersine mühendislik konularında yardımcı olabilirim.",
      placeholder: "TPU, yedek parçalar veya teklifler hakkında soru sorun...",
      send: "Gönder",
      emailModalTitle: "Özeti E-posta İle Gönder",
      emailModalDesc: "E-postanızı girin. Özet doğrudan 3dapex.de@gmail.com adresine gönderilecektir.",
      yourEmail: "E-posta Adresiniz:",
      yourName: "Ad / Şirket Adı:",
      notes: "Ek Gereksinimler:",
      confirmSend: "3dapex.de@gmail.com Adresine Gönder",
      successMsg: "Özet başarıyla 3dapex.de@gmail.com adresine gönderildi!",
      summaryTitle: "3D Hesaplama Özet",
      summaryFile: "Dosya:",
      summaryWeightVolume: "Ağırlık ve Hacim:",
      summaryGrossTotal: "Toplam Tutar (Brüt):"
    },
    b2b: {
      badge: "B2B VE ÖZEL HİZMETLER",
      title: "B2B İletişim ve Özel Hizmetler",
      subtitle: "Bozuk bir parçanız veya B2B projeniz mi var? 2-4 saat içinde yanıt veriyoruz.",
      company: "Şirket Adı / Adı",
      email: "İletişim E-postası",
      phone: "Telefon Numarası (isteğe bağlı)",
      serviceType: "Hizmet Türü",
      placeholderName: "Şirket / İletişim Kişisi",
      placeholderEmail: "partner@sirket.com",
      placeholderPhone: "+49 123 456789",
      placeholderDesc: "Proje detayları, CAD gereksinimleri, malzeme istekleri...",
      optionReverse: "Tersine Mühendislik (Yedek Parça)",
      optionMedical: "Ortopedik TPU Tabanlıklar / Medikal Baskı",
      optionSerial: "Endüstriyel 3D Baskı",
      optionScanCad: "3D Tarama ve CAD Modelleme",
      optionOther: "Diğer İstek / Danışmanlık",
      description: "Proje Açıklaması / Teknik Gereksinimler",
      submit: "B2B Talebini 3dapex.de@gmail.com Adresine Gönder",
      success: "Teşekkürler! Talep 3dapex.de@gmail.com adresine gönderildi."
    },
    faq: {
      badge: "Sıkça Sorulan Sorular",
      title: "Sıkça Sorulan Sorular (SSS)",
      q1: "Üretilmeyen parçalar için tersine mühendislik nasıl çalışır?",
      a1: "Bize bozuk bir numune gönderin. 3D CAD modelini oluşturup PETG, Naylon veya PAHT-CF'den güçlendirilmiş yedek parça basıyoruz.",
      q2: "Kişiye özel TPU tabanlıklar nasıl çalışır?",
      a2: "Esnek TPU 95A'dan bölgesel yoğunluklu tabanlıklar basıyoruz: sert topuk desteği ve yumuşak ön ayak yastıklaması.",
      q3: "Yüklediğim 3D dosyalar güvende mi?",
      a3: "Evet! Tüm dosya analizleri tarayıcınızda %100 yerel olarak yapılır.",
      q4: "Kargoya veriliş süresi nedir?",
      a4: "Sipariş onayından itibaren 48 ila 72 saat içinde kargoya hazırdır.",
      q5: "Fatura kesiyor musunuz?",
      a5: "Evet, resmi KDV faturaları kesiyoruz."
    },
    validation: {
      requiredField: "Lütfen bu alanı doldurun.",
      invalidEmail: "Lütfen geçerli bir e-posta adresi girin."
    },
    footer: {
      navTitle: "Navigasyon",
      navReverse: "Tersine Mühendislik",
      navMedical: "TPU Tabanlıklar",
      navCalc: "Fiyat Hesaplayıcı",
      navFaq: "SSS",
      navContact: "B2B İletişim",
      scrollTop: "Yukarı çık ↑",
      tagline: "Hassas geometri rekonstrüksiyonu, modern TPU ortopedisi ve Bambu Lab filosunda endüstriyel 3D baskı.",
      rodoTitle: "KVKK ve Gizlilik Bildirimi:",
      rodoText: "Veri Sorumlusu Adrian Maściuk (3D Apex). 3D dosyalar yalnızca tarayıcınızda yerel olarak işlenir.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Tüm hakları saklıdır. | Resmi açılış yakında (Pre-Launch Wersiyonu).",
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Tüm hakları saklıdır."
    }
  },
  PL: {
    nav: {
      services: "Specjalizacje",
      calculator: "Kalkulator Wycen",
      b2b: "B2B & Przemysł",
      faq: "FAQ",
      contact: "Kontakt"
    },
    hero: {
      pill: "FLOTA MASZYN: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "Precyzja Wykuta w",
      title2: "Przestrzeni 3D",
      subtitle: "Inżynieria wsteczna, odtwarzanie wycofanych części zamiennych i wkładki ortopedyczne TPU. Automatyczny kalkulator wycen 3D online.",
      ctaCalculator: "Wycena 3D Online",
      ctaAiAgent: "Zapytaj Agenta AI",
      founderTag: "Adrian Maściuk • Założyciel 3D Apex",
      statMachines: "Flota Bambu Lab",
      statPrecision: "Tolerancja ±0.1 mm",
      statTurnaround: "Wysyłka w 48–72h",
      statMaterials: "TPU & Carbon PAHT-CF",
      badgeReverse: "Inżynieria Wsteczna",
      badgeTpu: "Wkładki TPU 95A",
      badgeFleet: "Flota Bambu Lab",
      cardBadge: "Specjalistyczny Druk Medyczny",
      cardInsoleTitle: "Wkładka Ortopedyczna TPU 95A",
      cardInsoleSub: "Strefowo zmienna gęstość wypełnienia (15% - 80%)",
      heelZoneTitle: "Strefa Pięty",
      heelZoneDesc: "Twarda (70-80% infill)",
      midfootZoneTitle: "Strefa Śródstopia",
      midfootZoneDesc: "Amortyzacja (20-30%)",
      readyTime: "Wysyłka w 48–72h"
    },
    services: {
      title: "Kluczowe Specjalizacje 3D Apex",
      subtitle: "Od skanu 3D i odtworzenia geometrii uszkodzonej części, po ortopedie TPU i druk seryjny.",
      btnCadScan: "Projekt CAD / Skanowanie 3D",
      btnTpuQuote: "Wycena Wkładek TPU",
      btnCalcQuote: "Kalkulator Wycen 3D",
      reverseEngineering: {
        badge: "Inżynieria Wsteczna",
        title: "Odtwarzanie i Dorabianie Niedostępnych Części",
        desc: "Posiadasz uszkodzony element zmotoryzowany, część maszyny przemysłowej lub urządzenie AGD, którego nie da się już kupić? Przeprowadzamy cyfrowy proces inżynierii wstecznej i drukujemy wzmocniony zamiennik z PAHT-CF, Nylonu lub PETG.",
        bullet1: "Dokładne odwzorowanie geometrii ze skanu 3D lub uszkodzonego wzorca",
        bullet2: "Wzmocnienie konstrukcji (DFM) – eliminowanie wad fabrycznych",
        bullet3: "Produkcja jednostkowa oraz mało seryjna zamienników"
      },
      medical: {
        badge: "Ortopedia & Medycyna",
        title: "Wkładki Ortopedyczne TPU i Elementy Medyczne",
        desc: "Drukujemy spersonalizowane wkładki do butów z elastycznego TPU 95A o strefowo zmiennej gęstości wypełnienia (15% - 80%). Wsparcie rehabilitacji pacjentów i osób po amputacjach.",
        bullet1: "Strefowy dobór twardości – mocne wsparcie pięty i amortyzacja śródstopia",
        bullet2: "Stosowanie biokompatybilnego PETG Med-Grade z atestem czystości",
        bullet3: "Ergonomiczne komponenty dla ortotyki i rehabilitacji"
      },
      fleet: {
        badge: "Flota Bambu Lab",
        title: "Szybki Druk Przemysłowy na Flocie Bambu Lab",
        desc: "Wykorzystujemy najszybsze i najdokładniejsze maszyny: Bambu Lab X2D Combo, P2S oraz H2S obsługującą filamenty wysokotemperaturowe PAHT-CF z włóknem węglowym.",
        bullet1: "Powtarzalność wymiarowa i automatyczna kalibracja Lidar",
        bullet2: "Zamówienia od 1 sztuki do setek egzemplarzy",
        bullet3: "Gotowość do wysyłki w 48-72 godziny"
      }
    },
    calculator: {
      title: "Automatyczny Kalkulator Wycen 3D Online",
      subtitle: "Wgraj plik STL/STEP lub dostosuj objętość, aby natychmiast wyliczyć dokładny koszt produkcji.",
      step1Title: "1. PLIK 3D I WYMIARY BRYŁY",
      step2Title: "2. MATERIAŁ I PARAMETRY DRUKU 3D",
      analyzedBadge: "Przeanalizowano w przeglądarce",
      dragActive: "Upuść plik STL tutaj...",
      dragDefault: "Przeciągnij i upuść plik 3D (STL, STEP, OBJ)",
      dragSub: "System automatycznie wyliczy objętość (cm³), pole powierzchni i wymiary",
      fileSelected: "Wczytany plik:",
      volumeLabel: "Objętość bryły (cm³):",
      materialLabel: "Wybierz Materiał:",
      infillLabel: "Gęstość wypełnienia (%):",
      layerLabel: "Wysokość warstwy (precyzja):",
      quantityLabel: "Liczba sztuk:",
      widthX: "Szerokość X",
      lengthY: "Długość Y",
      heightZ: "Wysokość Z",
      densityLabel: "Gęstość:",
      vatRateLabel: "23% VAT",
      summaryTitle: "Podsumowanie Kosztów",
      weightLabel: "Wyliczona waga całkowita:",
      costMaterial: "Koszt zużytego surowca:",
      costMachine: "Czas pracy floty Bambu Lab:",
      costSetup: "Przygotowanie pliku & slicing:",
      costHandling: "Postprocessing i pakowanie:",
      costVat: "23% VAT:",
      costTotalNet: "Wartość zamówienia netto:",
      totalGross: "RAZEM BRUTTO:",
      btnConsultAi: "Zapytaj Agenta AI",
      btnSendEmail: "Wyślij wycenę na e-mail (3dapex.de@gmail.com)",
      orderNote: "Potwierdzenie zamówienia i produkcja w 48-72 godz."
    },
    aiAgent: {
      title: "Agent AI 3D Apex • Asystent Techniczny",
      badge: "AI 24/7",
      status: "Online • Doradztwo Druk 3D & Wyceny",
      welcomeMsg: "Witaj! Jestem wirtualnym agentem AI firmy 3D Apex. Chętnie pomogę w doborze materiału (TPU, PETG Med, PAHT-CF), wycenie inżynierii wstecznej lub dopasowaniu wkładek ortopedycznych.",
      placeholder: "Zapytaj o materiał TPU, dorobienie części lub wycenę...",
      send: "Wyślij",
      emailModalTitle: "Wyślij zestawienie na E-mail",
      emailModalDesc: "Wprowadź swój e-mail. Zestawienie zostanie wysłane na adres 3dapex.de@gmail.com.",
      yourEmail: "Twój adres e-mail:",
      yourName: "Imię / Nazwa firmy:",
      notes: "Dodatkowe uwagi:",
      confirmSend: "Wyślij na 3dapex.de@gmail.com",
      successMsg: "Wysłano zestawienie na 3dapex.de@gmail.com!",
      summaryTitle: "3D Podsumowanie Kalkulatora",
      summaryFile: "Plik:",
      summaryWeightVolume: "Waga i Objętość:",
      summaryGrossTotal: "Kwota Brutto:"
    },
    b2b: {
      badge: "B2B & SPECJALISTYCZNE USŁUGI",
      title: "Kontakt B2B & Zlecenia Inżynieryjne",
      subtitle: "Potrzebujesz niedostępnej części lub wyceny seryjnej B2B? Odpowiedź w 2-4 godziny.",
      company: "Nazwa firmy / Imię i Nazwisko",
      email: "E-mail kontaktowy",
      phone: "Numer telefonu (opcjonalnie)",
      serviceType: "Kategoria usługi",
      placeholderName: "Firma / Osoba kontaktowa",
      placeholderEmail: "partner@firma.pl",
      placeholderPhone: "+48 123 456 789",
      placeholderDesc: "Opis projektu, wymagania CAD, preferowany materiał...",
      optionReverse: "Inżynieria Wsteczna (Części zamienne)",
      optionMedical: "Wkładki TPU / Druk Medyczny",
      optionSerial: "Przemysłowy Druk 3D (Serie)",
      optionScanCad: "Skanowanie 3D & Modelowanie CAD",
      optionOther: "Inne zapytanie / Konsultacja",
      description: "Opis projektu / Wymagania techniczne",
      submit: "Wyślij zapytanie B2B na 3dapex.de@gmail.com",
      success: "Dziękujemy! Zapytanie wysłano na 3dapex.de@gmail.com."
    },
    faq: {
      badge: "Często Zadawane Pytania",
      title: "Często Zadawane Pytania (FAQ)",
      q1: "Jak działa inżynieria wsteczna dla wycofanych części zamiennych?",
      a1: "Prześlij nam uszkodzony wzorzec. Tworzymy dokładny model 3D CAD, wzmacniamy słabe punkty i drukujemy zamiennik z PETG, Nylonu lub PAHT-CF Carbon.",
      q2: "Jak działają spersonalizowane wkładki ortopedyczne TPU?",
      a2: "Drukujemy wkładki z elastycznego TPU 95A o strefowo zmiennej gęstości: twarde wsparcie pięty i miękka amortyzacja śródstopia.",
      q3: "Czy moje wczytane pliki 3D są bezpieczne?",
      a3: "Tak! Cała analiza geometryczna pliku 3D odbywa się w 100% lokalnie w Twojej przeglądarce. Żadne pliki nie trafiają na zewnętrzne serwery.",
      q4: "Jaki jest czas realizacji i wysyłki?",
      a4: "Wysyłka następuje w ciągu 48 do 72 godzin od potwierdzenia zamówienia i zakończenia produkcji.",
      q5: "Czy wystawiacie faktury VAT?",
      a5: "Tak, wystawiamy pełne faktury VAT (19%/23%) oraz faktury z odwrotnym obciążeniem VAT (Reverse Charge) dla firm z UE."
    },
    validation: {
      requiredField: "Proszę wypełnić to pole.",
      invalidEmail: "Proszę podać poprawny adres e-mail."
    },
    footer: {
      navTitle: "Nawigacja",
      navReverse: "Inżynieria Wsteczna",
      navMedical: "Wkładki TPU",
      navCalc: "Kalkulator Wycen",
      navFaq: "FAQ",
      navContact: "Kontakt B2B",
      scrollTop: "Do góry ↑",
      tagline: "Precyzyjna rekonstrukcja geometrii, nowoczesna ortopedia TPU i przemysłowy druk 3D na flocie Bambu Lab.",
      rodoTitle: "Klauzula RODO i Ochrona Danych:",
      rodoText: "Administratorem danych jest Adrian Maściuk (3D Apex). Pliki 3D są przetwarzane wyłącznie lokalnie w przeglądarce.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Wszelkie prawa zastrzeżone. | Oficjalne otwarcie wkrótce – wersja demonstracyjna (Pre-Launch Version).",
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Wszelkie prawa zastrzeżone."
    }
  },
  UK: {
    nav: {
      services: "Спеціалізації",
      calculator: "Калькулятор 3D",
      b2b: "B2B та Промисловість",
      faq: "FAQ",
      contact: "Контакти"
    },
    hero: {
      pill: "ПАРК МАШИН: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "Точність Створена в",
      title2: "Просторі 3D",
      subtitle: "Реверс-інжиніринг, виготовлення знятих з виробництва запчастин та ортопедичні устілки TPU.",
      ctaCalculator: "Онлайн Розрахунок 3D",
      ctaAiAgent: "Запитати AI Агента",
      founderTag: "Adrian Maściuk • Засновник 3D Apex",
      statMachines: "Флота Bambu Lab",
      statPrecision: "Точність ±0.1 мм",
      statTurnaround: "Готовність до відправки 48–72г",
      statMaterials: "TPU & Carbon PAHT-CF",
      badgeReverse: "Реверс-Інжиніринг",
      badgeTpu: "Устілки TPU 95A",
      badgeFleet: "Ферма Bambu Lab",
      cardBadge: "Медичний 3D Друк",
      cardInsoleTitle: "Ортопедична Устілка TPU 95A",
      cardInsoleSub: "Змінна щільність за зонами (15% - 80%)",
      heelZoneTitle: "Зона П'яти",
      heelZoneDesc: "Жорстка (70-80% Infill)",
      midfootZoneTitle: "Зона Плесна",
      midfootZoneDesc: "Амортизація (20-30%)",
      readyTime: "Готовність до відправки 48–72г"
    },
    services: {
      title: "Ключові Спеціалізації 3D Apex",
      subtitle: "Від 3D сканування та відновлення геометрії до TPU ортопедії та серійного друку.",
      btnCadScan: "Проект CAD / 3D Сканування",
      btnTpuQuote: "Розрахунок Устілок TPU",
      btnCalcQuote: "Калькулятор Оцінки 3D",
      reverseEngineering: {
        badge: "Реверс-Інжиніринг",
        title: "Виготовлення Знятих з Виробництва Деталей",
        desc: "Маєте зламану деталь, яку більше не можна купити? Ми проводимо реверс-інжиніринг і друкуємо міцний замінник з PAHT-CF, Nylon або PETG.",
        bullet1: "Точне відтворення з 3D скану або зразка",
        bullet2: "Оптимізація DFM для усунення дефектів",
        bullet3: "Одиничне та малосерійне виготовлення"
      },
      medical: {
        badge: "Ортопедія та Медицина",
        title: "Ортопедичні Устілки TPU та Медичні Компоненти",
        desc: "Друкуємо устілки з гнучкого TPU 95A зі змінною щільністю.",
        bullet1: "Зональна жорсткість – підтримка п'яти та амортизація",
        bullet2: "Біосумісний PETG Med-Grade з атестатом",
        bullet3: "Ергономічні компоненти для реабілітації"
      },
      fleet: {
        badge: "Флота Bambu Lab",
        title: "Промисловий Серійний Друк з Bambu Lab",
        desc: "Флота Bambu Lab X2D Combo, P2S та H2S забезпечує високу точність.",
        bullet1: "Автоматичне калібрування Lidar",
        bullet2: "Замовлення від 1 шт до серій",
        bullet3: "Готовність до відправки протягом 48-72 годин"
      }
    },
    calculator: {
      title: "Автоматичний Калькулятор Оцінки 3D",
      subtitle: "Завантажте файл STL/STEP для миттєвого розрахунку вартості.",
      step1Title: "1. ФАЙЛ 3D ТА РОЗМІРИ",
      step2Title: "2. МАТЕРІАЛ ТА ПАРАМЕТРИ ДРУКУ",
      analyzedBadge: "Проаналізовано в браузері",
      dragActive: "Перетягніть файл STL сюди...",
      dragDefault: "Перетягніть файл 3D (STL, STEP, OBJ)",
      dragSub: "Система автоматично вираховує об'єм (см³), площу та розміри",
      fileSelected: "Завантажений файл:",
      volumeLabel: "Об'єм моделі (см³):",
      materialLabel: "Оберіть Матеріал:",
      infillLabel: "Щільність заповнення (%):",
      layerLabel: "Висота шару (точність):",
      quantityLabel: "Кількість:",
      widthX: "Ширина X",
      lengthY: "Довжина Y",
      heightZ: "Висота Z",
      densityLabel: "Щільність:",
      vatRateLabel: "20% ПДВ",
      summaryTitle: "Розрахунок Вартocтi",
      weightLabel: "Розрахована вага:",
      costMaterial: "Вартість матеріалу:",
      costMachine: "Час роботи машин:",
      costSetup: "Підготовка файлу & slicing:",
      costHandling: "Обробка та упаковка:",
      costVat: "20% ПДВ:",
      costTotalNet: "Сума нетто:",
      totalGross: "РАЗОМ БРУТТО:",
      btnConsultAi: "Запитати AI Агента",
      btnSendEmail: "Надіслати на E-mail (3dapex.de@gmail.com)",
      orderNote: "Підтвердження замовлення та виробництво за 48-72 год."
    },
    aiAgent: {
      title: "AI Агент 3D Apex • Технічний Асистент",
      badge: "AI 24/7",
      status: "Онлайн • Консультації 3D Друку",
      welcomeMsg: "Вітаю! Я AI асистент 3D Apex. Допоможу з вибором матеріалу (TPU, PETG Med, PAHT-CF) або розрахунком реверс-інжинірингу.",
      placeholder: "Запитати про TPU, деталі або розрахунок...",
      send: "Надіслати",
      emailModalTitle: "Надіслати підсумок на E-mail",
      emailModalDesc: "Введіть свій e-mail. Підсумок буде надіслано на 3dapex.de@gmail.com.",
      yourEmail: "Ваш E-mail:",
      yourName: "Ім'я / Компанія:",
      notes: "Додаткові вимоги:",
      confirmSend: "Надіслати на 3dapex.de@gmail.com",
      successMsg: "Підсумок успішно надіслано на 3dapex.de@gmail.com!",
      summaryTitle: "3D Підсумок Калькулятора",
      summaryFile: "Файл:",
      summaryWeightVolume: "Вага та Об'єм:",
      summaryGrossTotal: "Загальна сума (Brutto):"
    },
    b2b: {
      badge: "B2B ТА СПЕЦІАЛЬНІ ПОСЛУГИ",
      title: "Контакти B2B та Спеціальні Замовлення",
      subtitle: "Маєте деталь або B2B проект? Відповідь за 2-4 години.",
      company: "Назва компанії / Ім'я",
      email: "Контактний E-mail",
      phone: "Телефон (опціонально)",
      serviceType: "Категорія послуги",
      placeholderName: "Компанія / Контактна особа",
      placeholderEmail: "partner@company.ua",
      placeholderPhone: "+380 12 345 6789",
      placeholderDesc: "Деталі проекту, вимоги CAD...",
      optionReverse: "Реверс-Інжиніринг (Запчастини)",
      optionMedical: "Устілки TPU / Медичний Друк",
      optionSerial: "Промисловий 3D Друк",
      optionScanCad: "3D Сканування & CAD",
      optionOther: "Інше запитання / Консультація",
      description: "Опис проекту / Технічні вимоги",
      submit: "Надіслати B2B на 3dapex.de@gmail.com",
      success: "Дякуємо! Запит надіслано на 3dapex.de@gmail.com."
    },
    faq: {
      badge: "Часті Запитання",
      title: "Часті Запитання (FAQ)",
      q1: "Як працює реверс-інжиніринг для знятих з виробництва деталей?",
      a1: "Надішліть нам зразок. Ми створимо точну модель 3D CAD і надрукуємо замінник з PETG, Nylon або PAHT-CF Carbon.",
      q2: "Як працюють ортопедичні устілки TPU?",
      a2: "Ми друкуємо устілки з гнучкого TPU 95A зі змінною щільністю.",
      q3: "Чи мої файли 3D в безпеці?",
      a3: "Так! Увесь аналіз проходить на 100% локально у вашому браузері.",
      q4: "Який термін виконання та відправки?",
      a4: "Готовність до відправки протягом 48-72 годин після підтвердження замовлення та виробництва.",
      q5: "Чи виставляєте ви рахунки ПДВ?",
      a5: "Так, ми виставляємо рахунки ПДВ."
    },
    validation: {
      requiredField: "Будь ласка, заповніть це поле.",
      invalidEmail: "Будь ласка, вкажіть коректну e-mail адресу."
    },
    footer: {
      navTitle: "Навігація",
      navReverse: "Реверс-Інжиніринг",
      navMedical: "Устілки TPU",
      navCalc: "Калькулятор 3D",
      navFaq: "FAQ",
      navContact: "Контакти B2B",
      scrollTop: "Нагору ↑",
      tagline: "Точне відновлення геометрії, сучасна ортопедія TPU та промисловий 3D друк на флоті Bambu Lab.",
      rodoTitle: "Захист Даних та Privacy Notice:",
      rodoText: "Адміністратором є Adrian Maściuk (3D Apex). Файли 3D обробляються виключно локально у браузері.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Усі права захищені. | Офіційне відкриття незабаром (Pre-Launch Version).",
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Усі права захищені."
    }
  }
};
