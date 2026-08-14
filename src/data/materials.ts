import { Material } from '../types';

export const MATERIALS: Material[] = [
  {
    id: 'tpu',
    name: 'TPU Flex 95A Medical',
    category: 'medical',
    density: 1.21,
    pricePerKg: 34.99,
    badge: {
      DE: 'Medizinisch / Einlagen',
      EN: 'Medical / Insoles',
      TR: 'Medikal / Tabanlık',
      PL: 'Medyczny / Wkładki',
      UK: 'Медичний / Устілки'
    },
    description: {
      DE: 'Flexibles Polyurethan. Speziell für orthopädische Einlagen mit variabler Dichte, Dämpfungselemente und Prothesenbauteile.',
      EN: 'Flexible polyurethane. Dedicated for orthotic insoles with variable zone density, damping elements, and prosthetic components.',
      TR: 'Esnek poliüretan. Değişken yoğunluklu ortopedik tabanlıklar, sönümleme elemanları ve protez bileşenleri için özel.',
      PL: 'Elastyczny poliuretan. Dedykowany do wkładek ortopedycznych o zmiennej gęstości strefowej, elementów tłumiących i komponentów protez.',
      UK: 'Гнучкий поліуретан. Спеціально для ортопедичних устілок зі змінною щільністю, амортизуючих елементів та протезів.'
    },
    recommendedFor: {
      DE: 'Orthopädische TPU-Einlagen, Stoßdämpfer, weiche medizinische Hüllen',
      EN: 'Orthopedic TPU insoles, shock absorbers, soft medical covers',
      TR: 'Ortopedik TPU tabanlıklar, amortisörler, yumuşak tıbbi kılıflar',
      PL: 'Wkładki ortopedyczne TPU, amortyzatory, miękkie osłony medyczne',
      UK: 'Ортопедичні устілки TPU, амортизатори, м\'які медичні чохли'
    }
  },
  {
    id: 'petg_med',
    name: 'PETG Med-Grade',
    category: 'medical',
    density: 1.27,
    pricePerKg: 39.99,
    badge: {
      DE: 'Biokompatibel',
      EN: 'Biocompatible',
      TR: 'Biyouyumlu',
      PL: 'Biokompatybilny',
      UK: 'Біосумісний'
    },
    description: {
      DE: 'Medizinisches PETG, beständig gegen Sterilisation und Chemikalien. Biokompatibel zertifiziert. Geeignet für medizinische Gehäuse.',
      EN: 'Medical grade PETG resistant to sterilization and chemicals. Biocompatibility certified. Suitable for medical device enclosures.',
      TR: 'Sterilizasyon ve kimyasallara dayanıklı tıbbi PETG. Biyouumluluk sertikalı. Tıbbi cihaz muhafazaları için uygun.',
      PL: 'Medyczna odmiana PETG odporna na sterylizację i chemikalia. Posiada certyfikat zgodności biologicznej. Odpowiedni dla obudów medycznych.',
      UK: 'Медичний PETG, стійкий до стерилізації та хімікатів. Сертифікований на біосумісність. Підходить для медичних корпусів.'
    },
    recommendedFor: {
      DE: 'Medizinische Gerätegehäuse, sterile Halterungen, orthopädische Komponenten',
      EN: 'Medical device housings, sterile holders, orthopedic components',
      TR: 'Tıbbi cihaz muhafazaları, steril tutucular, ortopedik bileşenler',
      PL: 'Obudowy urządzeń medycznych, uchwyty sterylne, komponenty ortopedyczne',
      UK: 'Корпуси медичних приладів, стерильні тримачі, ортопедичні деталі'
    }
  },
  {
    id: 'petg',
    name: 'PETG Technical',
    category: 'engineering',
    density: 1.27,
    pricePerKg: 26.99,
    badge: {
      DE: 'Reverse Engineering',
      EN: 'Reverse Engineering',
      TR: 'Tersine Mühendislik',
      PL: 'Inżynieria Wsteczna',
      UK: 'Реверс-Інжиніринг'
    },
    description: {
      DE: 'Hervorragendes Festigkeits-Flexibilitäts-Verhältnis. Ideal für die Nachfertigung ausgelaufener Ersatzteile.',
      EN: 'Outstanding strength to flexibility ratio. Ideal material for duplicating discontinued spare parts.',
      TR: 'Mükemmel dayanıklılık ve esneklik oranı. Üretimi durdurulmuş yedek parçaların kopyalanması için ideal.',
      PL: 'Znakomity stosunek wytrzymałości do elastyczności. Idealny materiał do odtwarzania i dorabiania niedostępnych już części.',
      UK: 'Чудове співвідношення міцності та гнучкості. Ідеальний матеріал для відтворення знятих з виробництва деталей.'
    },
    recommendedFor: {
      DE: 'Autoteile, Gehäuse, industrielle Halterungen, Ersatzteile',
      EN: 'Automotive components, machine housings, industrial mounts, replacements',
      TR: 'Otomotiv parçaları, makine muhafazaları, endüstriyel aparatlar',
      PL: 'Części samochodowe, obudowy maszyn, uchwyty przemysłowe, zamienniki',
      UK: 'Автозапчастини, корпуси машин, промислові кріплення, замінники'
    }
  },
  {
    id: 'nylon',
    name: 'PA12 Nylon / PAHT-CF',
    category: 'engineering',
    density: 1.01,
    pricePerKg: 59.99,
    badge: {
      DE: 'Ultra-Festigkeit',
      EN: 'Ultra-Strength',
      TR: 'Ultra-Dayanıklılık',
      PL: 'Ultra-Wytrzymałość',
      UK: 'Ультра-Міцність'
    },
    description: {
      DE: 'Kohlefaserverstärktes Polyamid (PAHT-CF). Extreme Belastbarkeit, Hitzebeständigkeit bis 150°C und Chemikalienresistenz.',
      EN: 'Carbon fiber reinforced polyamide (PAHT-CF). Extreme resistance to loads, high temperatures up to 150°C and chemicals.',
      TR: 'Karbon fiber takviyeli poliamid (PAHT-CF). Yüksek yüklere, 150°C sıcaklığa ve kimyasallara karşı ekstrem direnç.',
      PL: 'Poliamid wzmacniany włóknem węglowym (PAHT-CF). Ekstremalna odporność na obciążenia, temperaturę do 150°C i chemikalia.',
      UK: 'Поліамід, армований вуглеволокном (PAHT-CF). Екстремальна стійкість до навантажень, температури до 150°C та хімікатів.'
    },
    recommendedFor: {
      DE: 'Zahnräder, Getriebe, professionelles Reverse Engineering, Motorkomponenten',
      EN: 'Gears, transmissions, professional reverse engineering, engine parts',
      TR: 'Dişliler, şanzımanlar, profesyonel tersine mühendislik, motor parçaları',
      PL: 'Koła zębate, przekładnie, profesjonalna inżynieria wsteczna, elementy silników',
      UK: 'Шестерні, передачі, професійний реверс-інжиніринг, деталі двигунів'
    }
  },
  {
    id: 'pla',
    name: 'PLA Precision',
    category: 'standard',
    density: 1.24,
    pricePerKg: 24.99,
    badge: {
      DE: 'Schneller Prototyp',
      EN: 'Rapid Prototype',
      TR: 'Hızlı Prototip',
      PL: 'Szybki Prototyp',
      UK: 'Швидкий Прототип'
    },
    description: {
      DE: 'Biologisch abbaubares Polymer mit hervorragender Maßgenauigkeit. Ideal für schnelle Prototypen.',
      EN: 'Biodegradable polymer with excellent dimensional accuracy. Great for rapid verification prototypes.',
      TR: 'Mükemmel boyut hassasiyetine sahip biyobozunur polimer. Hızlı doğrulama prototipleri için harika.',
      PL: 'Biologicznie degradowalny polimer o doskonałej dokładności wymiarowej. Świetny do szybkich modeli weryfikacyjnych.',
      UK: 'Біорозкладний полімер з відмінною точністю розмірів. Чудово підходить для швидких прототипів.'
    },
    recommendedFor: {
      DE: 'Konzeptmodelle, Muster vor der Serienfertigung',
      EN: 'Concept models, master models before series production',
      TR: 'Kavramsal modeller, seri üretim öncesi master modeller',
      PL: 'Makiety konceptualne, modele wzorcowe przed produkcją seryjną',
      UK: 'Концептуальні макети, еталонні моделі перед серійним виробництвом'
    }
  }
];

export const LAYER_HEIGHTS = [
  { value: '0.12mm', label: '0.12mm (Ultra Precision)', multiplier: 1.45 },
  { value: '0.20mm', label: '0.20mm (Standard - Optimal)', multiplier: 1.0 },
  { value: '0.28mm', label: '0.28mm (Draft - Fast Batch)', multiplier: 0.8 }
];
