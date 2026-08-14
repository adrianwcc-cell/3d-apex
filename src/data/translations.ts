import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  nav: {
    brand: string;
    subtitle: string;
    reverseEngineering: string;
    medicalInsoles: string;
    calculator: string;
    faq: string;
    contact: string;
    email: string;
    instagram: string;
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
    title: string;
    q1: string; a1: string;
    q2: string; a2: string;
    q3: string; a3: string;
    q4: string; a4: string;
    q5: string; a5: string;
  };
  footer: {
    rights: string;
    demoNotice: string;
    tagline: string;
    rodoTitle: string;
    rodoText: string;
  };
}> = {
  DE: {
    nav: {
      brand: "3D APEX",
      subtitle: "Reverse Engineering & Medizintechnik",
      reverseEngineering: "Reverse Engineering",
      medicalInsoles: "TPU Einlagen",
      calculator: "Preiskalkulator",
      faq: "FAQ",
      contact: "B2B Kontakt",
      email: "3dapex.de@gmail.com",
      instagram: "@3d_apex.de"
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
      statTurnaround: "Lieferzeit 48-72h",
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
      readyTime: "Produktionsbereit in 48-72h"
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
        bullet3: "Produktionsbereit innerhalb von 48 bis 72 Stunden"
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
      orderNote: "Die Zusammenfassung wird an 3dapex.de@gmail.com gesendet"
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
      successMsg: "Zusammenfassung erfolgreich an 3dapex.de@gmail.com gesendet!"
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
      title: "Häufig Gestellte Fragen (FAQ)",
      q1: "Wie funktioniert Reverse Engineering für ausgelaufene Ersatzteile?",
      a1: "Senden Sie uns ein defektes Muster. Wir erstellen das 3D-CAD-Modell, optimieren die Geometrie und drucken das Bauteil aus PETG, Nylon oder PAHT-CF Carbon.",
      q2: "Wie funktionieren maßgeschneiderte TPU-Einlagen?",
      a2: "Wir drucken Einlagen aus flexiblem TPU 95A mit zonenvariabler Wabenfüllung: feste Fersenstütze und weiche Dämpfung im Vorfußbereich.",
      q3: "Sind meine hochgeladenen 3D-Dateien sicher?",
      a3: "Ja! Alle Dateianalysen erfolgen zu 100% lokal in Ihrem Browser. Es werden keine Modelle an externe Server gesendet.",
      q4: "Wie lang ist die Lieferzeit?",
      a4: "Die Standard-Lieferzeit beträgt 48 bis 72 Stunden ab Auftragsbestätigung.",
      q5: "Stellen Sie MwSt.-Rechnungen aus?",
      a5: "Ja, wir stellen reguläre 19% MwSt.-Rechnungen sowie Steuerfreie EU-Rechnungen (Reverse Charge) aus."
    },
    footer: {
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Alle Rechte vorbehalten. | Offizielle Eröffnung in Kürze – Technologie- und Systemdemonstration (Pre-Launch Version).",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Alle Rechte vorbehalten. | Offizielle Eröffnung in Kürze – Technologie- und Systemdemonstration (Pre-Launch Version).",
      tagline: "Präzise Geometrierekonstruktion, moderne TPU-Orthopädie und industrieller 3D-Druck auf Bambu Lab Flotte.",
      rodoTitle: "DSGVO- & Datenschutz-Hinweis:",
      rodoText: "Verantwortlicher ist Adrian Maściuk (3D Apex). 3D-Dateien werden ausschließlich lokal im Browser verarbeitet."
    }
  },
  EN: {
    nav: {
      brand: "3D APEX",
      subtitle: "Reverse Engineering & Medical Printing",
      reverseEngineering: "Reverse Engineering",
      medicalInsoles: "Medical TPU Insoles",
      calculator: "Price Calculator",
      faq: "FAQ",
      contact: "B2B Contact",
      email: "3dapex.de@gmail.com",
      instagram: "@3d_apex.de"
    },
    hero: {
      pill: "PRINTER FARM: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "Precision Forged in",
      title2: "3D Space",
      subtitle: "Specialized reverse engineering, custom obsolete part duplication, and personalized TPU orthotic insoles production. Instant online slicer calculator.",
      ctaCalculator: "Online 3D Quote",
      ctaAiAgent: "Ask AI Agent",
      founderTag: "Adrian Maściuk • Founder of 3D Apex",
      statMachines: "Bambu Lab Fleet",
      statPrecision: "Tolerance ±0.1 mm",
      statTurnaround: "48-72h Turnaround",
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
      readyTime: "Ready for production in 48-72h"
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
        bullet3: "Production readiness within 48 to 72 hours"
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
      orderNote: "Summary will be sent directly to 3dapex.de@gmail.com"
    },
    aiAgent: {
      title: "3D Apex AI Agent • Technical Assistant",
      badge: "AI 24/7",
      status: "Online • 3D Printing Advice & Quotes",
      welcomeMsg: "Hello! I am the virtual AI assistant for 3D Apex. I can help select materials (TPU, PETG Med, PAHT-CF), estimate reverse engineering costs, or configure medical insoles.",
      placeholder: "Ask about TPU insoles, part duplication or quotes...",
      send: "Send",
      emailModalTitle: "Send Summary to Email",
      emailModalDesc: "Enter your email address. Full conversation summary and quote details will be sent to 3dapex.de@gmail.com.",
      yourEmail: "Your Email Address:",
      yourName: "Name / Company Name:",
      notes: "Additional Notes:",
      confirmSend: "Send to 3dapex.de@gmail.com",
      successMsg: "Summary successfully dispatched to 3dapex.de@gmail.com!"
    },
    b2b: {
      badge: "B2B & SPECIALIZED SERVICES",
      title: "B2B Contact & Specialized Services",
      subtitle: "Have a broken part, insole project, or B2B request? We respond in 2-4 hours.",
      company: "Company Name / Full Name",
      email: "Contact Email Address",
      phone: "Phone Number (optional)",
      serviceType: "Service Type",
      placeholderName: "Company / Contact Person",
      placeholderEmail: "partner@company.com",
      placeholderPhone: "+44 123 456789",
      placeholderDesc: "Project details, CAD requirements, material preferences...",
      optionReverse: "Reverse Engineering (Part Duplication)",
      optionMedical: "Orthopedic TPU Insoles / Medical Printing",
      optionSerial: "Industrial 3D Printing",
      optionScanCad: "3D Scanning & CAD Modeling",
      optionOther: "Other Inquiry / Consultation",
      description: "Project Description / Technical Requirements",
      submit: "Send B2B Request to 3dapex.de@gmail.com",
      success: "Thank you! Request sent to 3dapex.de@gmail.com"
    },
    faq: {
      title: "Frequently Asked Questions (FAQ)",
      q1: "How does reverse engineering work for obsolete parts?",
      a1: "Send us a broken or unavailable part sample. We analyze geometry, create a 3D CAD model, eliminate original design flaws, and print a durable replacement in PETG, Nylon, or PAHT-CF Carbon.",
      q2: "How do custom TPU orthotic insoles work?",
      a2: "We print insoles using flexible TPU 95A with zone-variable honeycomb infill density (e.g. 70% heel support, 20% metatarsal cushioning). Ideal for rehabilitation and post-amputation care.",
      q3: "Are my uploaded 3D files secure?",
      a3: "Yes! All STL/STEP processing takes place 100% inside your browser's local memory. Files are never uploaded to external servers.",
      q4: "What is turnaround time?",
      a4: "Standard turnaround is 48 to 72 hours from quote approval.",
      q5: "Do you issue VAT invoices?",
      a5: "Yes, we issue standard VAT invoices in Europe and Reverse Charge VAT invoices for active EU-VAT registered businesses."
    },
    footer: {
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. All rights reserved. | Official Launch Coming Soon – Technology Demonstration Platform.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. All rights reserved. | Official Launch Coming Soon – Technology Demonstration Platform.",
      tagline: "Precision geometry recreation, modern TPU orthotics, and industrial 3D printing on Bambu Lab fleet.",
      rodoTitle: "GDPR & Privacy Notice:",
      rodoText: "Data controller is Adrian Maściuk (3D Apex). Uploaded 3D files are processed exclusively inside browser memory."
    }
  },
  TR: {
    nav: {
      brand: "3D APEX",
      subtitle: "Tersine Mühendislik ve Medikal Baskı",
      reverseEngineering: "Tersine Mühendislik",
      medicalInsoles: "Medikal TPU Tabanlık",
      calculator: "Fiyat Hesaplayıcı",
      faq: "SSS",
      contact: "B2B İletişim",
      email: "3dapex.de@gmail.com",
      instagram: "@3d_apex.de"
    },
    hero: {
      pill: "MAKİNE FİLOSU: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "3D Uzayda Dövülmüş",
      title2: "Hassasiyet",
      subtitle: "Tersine mühendislik, üretimi bitmiş yedek parçaların üretimi ve kişiselleştirilmiş ortopedik TPU tabanlıklar. Otomatik çevrimiçi hesaplayıcı.",
      ctaCalculator: "Çevrimiçi 3D Fiyat",
      ctaAiAgent: "Yapay Zeka Temsilcisi",
      founderTag: "Adrian Maściuk • 3D Apex Kurucusu",
      statMachines: "Bambu Lab Filosu",
      statPrecision: "Hassasiyet ±0.1 mm",
      statTurnaround: "Teslimat 48-72saat",
      statMaterials: "TPU ve Karbon PAHT-CF",
      badgeReverse: "Tersine Mühendislik",
      badgeTpu: "TPU 95A Tabanlık",
      badgeFleet: "Bambu Lab Çiftliği",
      cardBadge: "Özel Medikal Baskı",
      cardInsoleTitle: "TPU 95A Ortopedik Tabanlık",
      cardInsoleSub: "Bölgesel değişken dolgu yoğunluğu (%15 - %80)",
      heelZoneTitle: "Topuk Bölgesi",
      heelZoneDesc: "Sert (%70-80 Dolgu)",
      midfootZoneTitle: "Orta Ayak Bölgesi",
      midfootZoneDesc: "Yastıklama (%20-30)",
      readyTime: "48-72 saatte üretime hazır"
    },
    services: {
      title: "3D Apex Temel Uzmanlık Alanları",
      subtitle: "3D tarama ve hasarlı parça geometrisi rekonstrüksiyonundan, özel TPU ortopediye ve seri üretime.",
      btnCadScan: "CAD Projesi / 3D Tarama",
      btnTpuQuote: "TPU Tabanlık Fiyatı",
      btnCalcQuote: "3D Fiyat Hesaplayıcı",
      reverseEngineering: {
        badge: "Tersine Mühendislik",
        title: "Üretimi Durmuş Yedek Parçaların Üretimi",
        desc: "Kırık bir dişli, makine parçası veya piyasada bulunmayan bir bileşeniniz mi var? Tam tersine mühendislik uyguluyor ve PAHT-CF, Naylon veya PETG ile güçlendirilmiş yedek parça üretiyoruz.",
        bullet1: "3D taramadan veya fiziksel numuneden birebir boyut eşleme",
        bullet2: "DFM yapısal güçlendirme ile orijinal tasarım hatalarını giderme",
        bullet3: "Tekli ve küçük seri yedek parça üretimi"
      },
      medical: {
        badge: "Ortopedi ve Medikal",
        title: "Özel TPU Ortopedik Tabanlık ve Medikal Parçalar",
        desc: "Esnek TPU 95A kullanarak bölgesel değişken dolgu yoğunluğuna (%15 - %80) sahip ortopedik tabanlıklar basıyoruz. Amputasyon sonrası rehabilitasyon için ideal.",
        bullet1: "Bölgesel sertlik seçimi – topuk desteği ve yumuşak yastıklama",
        bullet2: "Sertifikalı biyouyumlu PETG Med-Grade kullanımı",
        bullet3: "Rehabilitasyon ve ortez için ergonomik bileşenler"
      },
      fleet: {
        badge: "Bambu Lab Filosu",
        title: "Bambu Lab Filosunda Yüksek Verimli Seri Baskı",
        desc: "Bambu Lab X2D Combo, P2S ve yüksek sıcaklıklı PAHT-CF karbon filamentlerini destekleyen büyük formatlı H2S makinelerini kullanıyoruz.",
        bullet1: "Boyutsal tekrarlanabilirlik ve otomatik Lidar kalibrasyonu",
        bullet2: "1 adetten yüzlerce adede kadar sipariş",
        bullet3: "48 ila 72 saat içinde üretime hazır"
      }
    },
    calculator: {
      title: "Otomatik Çevrimiçi 3D Fiyat Hesaplayıcı",
      subtitle: "STL/STEP dosyanızı yükleyin veya hacmi ayarlayarak üretim maliyetini anında hesaplayın.",
      step1Title: "1. 3D DOSYA VE BOYUTLAR",
      step2Title: "2. MALZEME VE BASKI PARAMETRELERİ",
      analyzedBadge: "Tarayıcıda analiz edildi",
      dragActive: "STL dosyasını buraya bırakın...",
      dragDefault: "3D Dosyayı Sürükleyip Bırakın (STL, STEP, OBJ)",
      dragSub: "Sistem hacmi (cm³), yüzey alanını ve boyutları otomatik okur",
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
      vatRateLabel: "20% KDV",
      summaryTitle: "Maliyet Detayı",
      weightLabel: "Hesaplanan Ağırlık:",
      costMaterial: "Malzeme Maliyeti:",
      costMachine: "Bambu Lab Çalışma Süresi:",
      costSetup: "Dosya Hazırlığı ve Slicing:",
      costHandling: "İşleme ve Paketleme:",
      costVat: "20% KDV:",
      costTotalNet: "Net Sipariş Değeri:",
      totalGross: "TOPLAM BRÜT:",
      btnConsultAi: "Yapay Zeka Temsilcisine Sor",
      btnSendEmail: "E-postaya Teklif Gönder (3dapex.de@gmail.com)",
      orderNote: "Özet doğrudan 3dapex.de@gmail.com adresine gönderilecektir"
    },
    aiAgent: {
      title: "3D Apex Yapay Zeka Temsilcisi • Teknik Asistan",
      badge: "YAPAY ZEKA 24/7",
      status: "Çevrimiçi • 3D Baskı Danışmanlığı",
      welcomeMsg: "Merhaba! ben 3D Apex'in sanal yapay zeka asistanıyım. Malzeme seçimi (TPU, PETG Med, PAHT-CF), tersine mühendislik veya medikal tabanlıklar konusunda yardımcı olabilirim.",
      placeholder: "TPU tabanlıklar veya parça kopyalama hakkında sorun...",
      send: "Gönder",
      emailModalTitle: "Özeti E-postaya Gönder",
      emailModalDesc: "E-posta adresinizi girin. Konuşma özeti 3dapex.de@gmail.com adresine iletilecektir.",
      yourEmail: "E-posta Adresiniz:",
      yourName: "Adınız / Firma Adı:",
      notes: "Ek Notlar:",
      confirmSend: "3dapex.de@gmail.com Adresine Gönder",
      successMsg: "Özet başarıyla 3dapex.de@gmail.com adresine gönderildi!"
    },
    b2b: {
      badge: "B2B VE ÖZEL HİZMETLER",
      title: "B2B İletişim ve Özel Hizmetler",
      subtitle: "Hasarlı bir parçanız veya B2B projeniz mi var? 2-4 saat içinde yanıt veriyoruz.",
      company: "Firma Adı / Ad Soyad",
      email: "İletişim E-posta Adresi",
      phone: "Telefon Numarası (isteğe bağlı)",
      serviceType: "Hizmet Türü",
      placeholderName: "Şirket / Yetkili Kişi",
      placeholderEmail: "ortak@sirket.com",
      placeholderPhone: "+90 532 123 4567",
      placeholderDesc: "Proje detayları, CAD gereksinimleri, malzeme tercihleri...",
      optionReverse: "Tersine Mühendislik (Parça Kopyalama)",
      optionMedical: "Ortopedik TPU Tabanlık / Medikal Baskı",
      optionSerial: "Endüstriyel 3D Baskı",
      optionScanCad: "3D Tarama ve CAD Modelleme",
      optionOther: "Diğer Sorgu / Danışmanlık",
      description: "Proje Açıklaması / Teknik Gereksinimler",
      submit: "B2B Talebini 3dapex.de@gmail.com Adresine Gönder",
      success: "Teşekkürler! Talep 3dapex.de@gmail.com adresine iletildi."
    },
    faq: {
      title: "Sıkça Sorulan Sorular (SSS)",
      q1: "Üretimi bitmiş parçalar için tersine mühendislik nasıl çalışır?",
      a1: "Bize kırık parçayı gönderin. Geometriyi analiz eder, 3D CAD modelini oluşturur, tasarım hatalarını düzeltir ve PETG, Naylon veya PAHT-CF Karbon ile dayanıklı yedek parça basarız.",
      q2: "Kişiselleştirilmiş TPU ortopedik tabanlıklar nasıl çalışır?",
      a2: "Esnek TPU 95A ile bölgesel değişken petek dolgu yoğunluğu kullanarak basıyoruz (örneğin topukta %70 destek, ön ayakta %20 esneklik). Rehabilitasyon için idealdir.",
      q3: "Yüklediğim 3D dosyalar güvende mi?",
      a3: "Evet! Tüm STL/STEP işlemleri tamamen tarayıcınızın yerel belleğinde gerçekleşir. Dosyalar dış sunuculara yüklenmez.",
      q4: "Teslimat süresi nedir?",
      a4: "Standart teslimat süresi teklif onayından itibaren 48 ila 72 saattir.",
      q5: "KDV faturası kesiyor musunuz?",
      a5: "Evet, Polonya'da standart %23 KDV faturası ve AB şirketleri için KDV Muafiyetli (Reverse Charge) fatura kesiyoruz."
    },
    footer: {
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Tüm hakları saklıdır. | Resmi açılış yakında – Teknoloji tanıtım sürümü.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Tüm hakları saklıdır. | Resmi açılış yakında – Teknoloji tanıtım sürümü.",
      tagline: "Hassas geometri rekonstrüksiyonu, modern TPU ortopedi ve Bambu Lab filosunda endüstriyel 3D baskı.",
      rodoTitle: "KVKK & Gizlilik Bildirimi:",
      rodoText: "Veri sorumlusu Adrian Maściuk'tur (3D Apex). Yüklenen 3D dosyalar yalnızca tarayıcı belleğinde işlenir."
    }
  },
  PL: {
    nav: {
      brand: "3D APEX",
      subtitle: "Inżynieria Wsteczna & Druk Medyczny",
      reverseEngineering: "Inżynieria Wsteczna",
      medicalInsoles: "Wkładki Medyczne TPU",
      calculator: "Kalkulator Wycen",
      faq: "FAQ",
      contact: "Kontakt B2B",
      email: "3dapex.de@gmail.com",
      instagram: "@3d_apex.de"
    },
    hero: {
      pill: "FLOTA MASZYN: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "Precyzja Wykuta w",
      title2: "Przestrzeni 3D",
      subtitle: "Inżynieria wsteczna, dorabianie niedostępnych części oraz produkcja spersonalizowanych wkładek ortopedycznych z TPU. Szybki automatyczny kalkulator online.",
      ctaCalculator: "Wycena 3D Online",
      ctaAiAgent: "Zapytaj Agenta AI",
      founderTag: "Adrian Maściuk • Założyciel 3D Apex",
      statMachines: "Flota Bambu Lab",
      statPrecision: "Tolerancja ±0.1 mm",
      statTurnaround: "Realizacja 48-72h",
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
      readyTime: "Gotowość produkcyjna w 48-72h"
    },
    services: {
      title: "Kluczowe Specjalizacje 3D Apex",
      subtitle: "Od skanu 3D i odtworzenia geometrii uszkodzonej części, po ortopedię TPU i druk seryjny.",
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
        bullet3: "Gotowość produkcyjna w 48-72 godziny"
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
      orderNote: "Powiadomienie trafi bezpośrednio na adres 3dapex.de@gmail.com"
    },
    aiAgent: {
      title: "Agent AI 3D Apex • Asystent Techniczny",
      badge: "AI 24/7",
      status: "Online • Doradztwo Druk 3D & Wyceny",
      welcomeMsg: "Witaj! Jestem wirtualnym agentem AI firmy 3D Apex. Chętnie pomogę w doborze materiału (TPU, PETG Med, PAHT-CF), wycenie inżynierii wstecznej lub dopasowaniu wkładek ortopedycznych.",
      placeholder: "Zapytaj o materiał TPU, dorobienie części lub wycenę...",
      send: "Wyślij",
      emailModalTitle: "Wyślij zestawienie na E-mail",
      emailModalDesc: "Wprowadź swój e-mail. Kompletne zestawienie rozmowy i specyfikacja trafią na 3dapex.de@gmail.com.",
      yourEmail: "Twój adres e-mail:",
      yourName: "Imię i Nazwisko / Nazwa Firmy:",
      notes: "Dodatkowe uwagi lub opis części:",
      confirmSend: "Wyślij na 3dapex.de@gmail.com",
      successMsg: "Pomyślnie wysłano podsumowanie na 3dapex.de@gmail.com!"
    },
    b2b: {
      badge: "B2B & USŁUGI SPECJALISTYCZNE",
      title: "Kontakt B2B & Usługi Specjalistyczne",
      subtitle: "Masz uszkodzoną część, projekt wkładek lub zapytanie B2B? Odpowiadamy w 2-4 godziny.",
      company: "Nazwa firmy / Imię i Nazwisko",
      email: "Adres e-mail kontaktowy",
      phone: "Numer telefonu (opcjonalnie)",
      serviceType: "Rodzaj usługi",
      placeholderName: "Nazwa Firmy / Imię i Nazwisko",
      placeholderEmail: "partner@firma.pl",
      placeholderPhone: "+48 123 456 789",
      placeholderDesc: "Szczegóły projektu, wymagania CAD, preferencje materiałowe...",
      optionReverse: "Inżynieria wsteczna (dorabianie części)",
      optionMedical: "Wkładki ortopedyczne TPU / Druk Medyczny",
      optionSerial: "Seryjny druk przemysłowy",
      optionScanCad: "Skanowanie 3D i Modelowanie CAD",
      optionOther: "Inne zapytanie / konsultacja",
      description: "Opis projektu / wymagania techniczne",
      submit: "Wyślij zapytanie B2B na 3dapex.de@gmail.com",
      success: "Dziękujemy! Zgłoszenie przesłano na 3dapex.de@gmail.com"
    },
    faq: {
      title: "Często Zadawane Pytania (FAQ)",
      q1: "Na czym polega inżynieria wsteczna niedostępnych części?",
      a1: "Przesyłasz nam pękniętą lub niedostępną część. Analizujemy geometrę, tworzymy cyfrowy model CAD 3D, eliminujemy słabe punkty fabryczne i drukujemy odporny zamiennik z PETG, Nylonu lub karbonu PAHT-CF.",
      q2: "Jak działają spersonalizowane wkładki ortopedyczne z TPU?",
      a2: "Drukujemy je z elastycznego TPU 95A ze strefowo zmienną gęstością wypełnienia (np. 70% pod piętą dla stabilizacji, 20% pod śródstopiem dla amortyzacji). Idealne do rehabilitacji i dla osób po amputacjach.",
      q3: "Czy moje pliki 3D wgrywane do kalkulatora są bezpieczne?",
      a3: "Tak. Analiza geometrii STL/STEP odbywa się w 100% lokalnie w pamięci Twojej przeglądarki. Pliki nie są wysyłane na serwery stron trzecich.",
      q4: "Jaki jest czas realizacji zamówień?",
      a4: "Standardowy czas wykonania wynosi od 48 do 72 godzin od zatwierdzenia wyceny.",
      q5: "Czy wystawiacie faktury VAT?",
      a5: "Tak, wystawiamy faktury VAT 23% w Polsce oraz faktury EU VAT Reverse Charge dla firm z Unii Europejskiej."
    },
    footer: {
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Wszelkie prawa zastrzeżone. | Oficjalne otwarcie wkrótce – Wersja demonstracyjna platformy.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Wszelkie prawa zastrzeżone. | Oficjalne otwarcie wkrótce – Wersja demonstracyjna platformy.",
      tagline: "Precyzyjne odtwarzanie geometrii, nowoczesna ortopedia TPU i przemysłowy druk 3D na flocie Bambu Lab.",
      rodoTitle: "Informacja RODO i Prywatności:",
      rodoText: "Administratorem danych jest Adrian Maściuk (3D Apex). Pliki 3D wgrywane do kalkulatora są przetwarzane wyłącznie lokalnie w pamięci Twojej przeglądarki."
    }
  },
  UK: {
    nav: {
      brand: "3D APEX",
      subtitle: "Реверс-Інжиніринг та Медичний Друк",
      reverseEngineering: "Реверс-Інжиніринг",
      medicalInsoles: "Медичні Устілки TPU",
      calculator: "Калькулятор Розрахунку",
      faq: "FAQ",
      contact: "B2B Контакти",
      email: "3dapex.de@gmail.com",
      instagram: "@3d_apex.de"
    },
    hero: {
      pill: "ПАРК МАШИН: BAMBU LAB X2D COMBO | P2S | H2S",
      title1: "Точність Створена в",
      title2: "3D Просторі",
      subtitle: "Реверс-інжиніринг, виготовлення знятих з виробництва деталей та індивідуальні ортопедичні устілки з TPU. Швидкий автоматичний калькулятор онлайн.",
      ctaCalculator: "Онлайн Розрахунок 3D",
      ctaAiAgent: "Запитати AI Агента",
      founderTag: "Adrian Maściuk • Засновник 3D Apex",
      statMachines: "Парк Bambu Lab",
      statPrecision: "Точність ±0.1 мм",
      statTurnaround: "Термін 48-72 год",
      statMaterials: "TPU та Carbon PAHT-CF",
      badgeReverse: "Реверс-Інжиніринг",
      badgeTpu: "Устілки TPU 95A",
      badgeFleet: "Парк Bambu Lab",
      cardBadge: "Спеціалізований Медичний Друк",
      cardInsoleTitle: "Ортопедична Устілка TPU 95A",
      cardInsoleSub: "Зоново змінна щільність заповнення (15% - 80%)",
      heelZoneTitle: "Зона П'яти",
      heelZoneDesc: "Тверда (70-80% infill)",
      midfootZoneTitle: "Зона Стопи",
      midfootZoneDesc: "Амортизація (20-30%)",
      readyTime: "Готовність до виробництва за 48-72г"
    },
    services: {
      title: "Ключові Спеціалізації 3D Apex",
      subtitle: "Від 3D сканування та відновлення геометрії пошкодженої деталі до TPU ортопедії та серійного друку.",
      btnCadScan: "CAD Проект / 3D Сканування",
      btnTpuQuote: "Розрахунок Устілок TPU",
      btnCalcQuote: "3D Калькулятор",
      reverseEngineering: {
        badge: "Реверс-Інжиніринг",
        title: "Відновлення та Друк Виведених з Продажу Деталей",
        desc: "Маєте зламану шестерню, деталь авто чи обладнання, яку більше неможливо купити? Ми проводимо повний реверс-інжиніринг і друкуємо міцний замінник з PAHT-CF, Нейлону або PETG.",
        bullet1: "Точне відтворення геометрії з 3D сканера або зразка",
        bullet2: "Зміцнення конструкції (DFM) – усунення заводських дефектів",
        bullet3: "Штучне та дрібносерійне виготовлення деталей"
      },
      medical: {
        badge: "Ортопедія та Медицина",
        title: "Ортопедичні Устілки TPU та Медичний Друк",
        desc: "Друкуємо індивідуальні устілки з гнучкого TPU 95A зі зоново змінною щільністю заповнення (15% - 80%). Підтримка реабілітації пацієнтів та осіб після ампутацій.",
        bullet1: "Зоновий підбір жорсткості – підтримка п'яти та амортизація стопи",
        bullet2: "Використання біосумісного PETG Med-Grade з сертифікатом",
        bullet3: "Ергономічні компоненти для ортопедії та реабілітації"
      },
      fleet: {
        badge: "Парк Bambu Lab",
        title: "Промисловий Серійний Друк на Bambu Lab",
        desc: "Використовуємо найшвидші та найточніші принтери: Bambu Lab X2D Combo, P2S та великоформатний H2S із підтримкою високотемпературного вуглеволокна PAHT-CF.",
        bullet1: "Точність розмірів та автоматичне калібрування Lidar",
        bullet2: "Замовлення від 1 штуки до сотень екземплярів",
        bullet3: "Готовність до виробництва за 48-72 години"
      }
    },
    calculator: {
      title: "Автоматичний Онлайн Калькулятор 3D",
      subtitle: "Завантажте файл STL/STEP або налаштуйте об'єм для миттєвого розрахунку вартості.",
      step1Title: "1. 3D ФАЙЛ ТА РОЗМІРИ",
      step2Title: "2. МАТЕРІАЛ ТА ПАРАМЕТРИ ДРУКУ 3D",
      analyzedBadge: "Проаналізовано у браузері",
      dragActive: "Перетягніть файл STL сюди...",
      dragDefault: "Перетягніть 3D файл (STL, STEP, OBJ)",
      dragSub: "Система автоматично вирахує об'єм (cm³), площу та розміри",
      fileSelected: "Завантажений файл:",
      volumeLabel: "Об'єм деталі (cm³):",
      materialLabel: "Оберіть Матеріал:",
      infillLabel: "Щільність заповнення (%):",
      layerLabel: "Висота шару (точність):",
      quantityLabel: "Кількість штук:",
      widthX: "Ширина X",
      lengthY: "Довжина Y",
      heightZ: "Висота Z",
      densityLabel: "Щільність:",
      vatRateLabel: "20% ПДВ",
      summaryTitle: "Детальний Розрахунок Вартocтi",
      weightLabel: "Розрахована вага:",
      costMaterial: "Вартість матеріалу:",
      costMachine: "Час роботи Bambu Lab:",
      costSetup: "Підготовка файлу та слайсинг:",
      costHandling: "Обробка та упаковка:",
      costVat: "20% ПДВ:",
      costTotalNet: "Вартість нетто:",
      totalGross: "РАЗОМ БРУТТО:",
      btnConsultAi: "Запитати AI Агента",
      btnSendEmail: "Надіслати розрахунок на e-mail (3dapex.de@gmail.com)",
      orderNote: "Підсумок буде надіслано на 3dapex.de@gmail.com"
    },
    aiAgent: {
      title: "AI Агент 3D Apex • Технічний Асистент",
      badge: "AI 24/7",
      status: "Online • Консультації 3D Друк & Розрахунок",
      welcomeMsg: "Вітаю! Я віртуальний AI агент 3D Apex. Допоможу підібрати матеріал (TPU, PETG Med, PAHT-CF), розрахувати вартість реверс-інжинірингу чи ортопедичних устілок.",
      placeholder: "Запитайте про устілки TPU, виготовлення деталей чи ціни...",
      send: "Надіслати",
      emailModalTitle: "Надіслати підсумок на E-mail",
      emailModalDesc: "Введіть ваш e-mail. Повний підсумок буде надіслано на 3dapex.de@gmail.com.",
      yourEmail: "Ваш E-mail:",
      yourName: "Ім'я / Назва Компанії:",
      notes: "Додаткові примітки:",
      confirmSend: "Надіслати на 3dapex.de@gmail.com",
      successMsg: "Підсумок успішно надіслано на 3dapex.de@gmail.com!"
    },
    b2b: {
      badge: "B2B ТА СПЕЦІАЛІЗОВАНІ ПОСЛУГИ",
      title: "B2B Контакти та Спеціалізовані Послуги",
      subtitle: "Маєте зламану деталь чи B2B проект? Відповідаємо за 2-4 години.",
      company: "Назва компанії / ПІБ",
      email: "Контактний E-mail",
      phone: "Номер телефону (опціонально)",
      serviceType: "Вид послуги",
      placeholderName: "Назва Компанії / ПІБ",
      placeholderEmail: "partner@company.ua",
      placeholderPhone: "+380 67 123 4567",
      placeholderDesc: "Деталі проекту, вимоги CAD, побажання щодо матеріалів...",
      optionReverse: "Реверс-інжиніринг (виготовлення деталей)",
      optionMedical: "Ортопедичні устілки TPU / Медичний друк",
      optionSerial: "Промисловий 3D друк",
      optionScanCad: "3D Сканування та CAD Моделювання",
      optionOther: "Інше запитання / Консультація",
      description: "Опис проекту / Технічні вимоги",
      submit: "Надіслати B2B запит на 3dapex.de@gmail.com",
      success: "Дякуємо! Запит надіслано на 3dapex.de@gmail.com"
    },
    faq: {
      title: "Часті Запитання (FAQ)",
      q1: "Як працює реверс-інжиніринг знятих з виробництва деталей?",
      a1: "Ви надсилаєте нам пошкоджений зразок. Ми аналізуємо геометрію, створюємо 3D CAD модель, усуваємо слабкі місця та друкуємо міцний замінник з PETG, Нейлону або PAHT-CF Carbon.",
      q2: "Як працюють індивідуальні ортопедичні устілки з TPU?",
      a2: "Ми друкуємо їх з гнучкого TPU 95A зі зоново змінною щільністю (наприклад, 70% під п'ятою для стабілізації, 20% під носком для амортизації). Ідеально для реабілітації.",
      q3: "Чи мої 3D файли у безпеці?",
      a3: "Так! Аналіз STL/STEP файлів відбувається на 100% локально у вашому браузері. Файли не надсилаються на сторонні сервери.",
      q4: "Який термін виконання замовлення?",
      a4: "Стандартний термін становить від 48 до 72 годин з моменту затвердження розрахунку.",
      q5: "Чи виставляєте ви рахунки-фактури з ПДВ?",
      a5: "Так, ми виставляємо офіційні рахунки-фактури ПДВ у Польщі та рахунки EU VAT Reverse Charge для компаній з ЄС."
    },
    footer: {
      rights: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Всі права захищені. | Офіційне відкриття незабаром – Демонстраційна версія.",
      demoNotice: "© 2026 3D Apex Manufacturing • Adrian Maściuk. Всі права захищені. | Офіційне відкриття незабаром – Демонстраційна версія.",
      tagline: "Точне відтворення геометрії, сучасна TPU ортопедія та промисловий 3D друк на принтерах Bambu Lab.",
      rodoTitle: "Інформація RODO та Конфіденційність:",
      rodoText: "Адміністратором даних є Adrian Maściuk (3D Apex). Завантажені 3D файли обробляються виключно в пам'яті браузера."
    }
  }
};
