import React, { useState, useMemo } from 'react';
import { Language, QuoteParams } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MATERIALS, LAYER_HEIGHTS } from '../data/materials';
import { parseSTLArrayBuffer, STLParseResult } from '../utils/stlParser';
import { 
  Upload, 
  FileCheck, 
  Calculator as CalcIcon, 
  Box, 
  Layers, 
  PieChart, 
  Bot, 
  Mail, 
  Check, 
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';

interface CalculatorProps {
  language: Language;
  onSendQuoteToAi: (quote: QuoteParams) => void;
  onSendQuoteEmail: (quote: QuoteParams) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  language,
  onSendQuoteToAi,
  onSendQuoteEmail
}) => {
  const t = TRANSLATIONS[language].calculator;

  // Form States
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('Model_3D.stl');
  const [parsing, setParsing] = useState<boolean>(false);
  const [parseError, setParseError] = useState<string | null>(null);

  // Geometry data
  const [volumeCm3, setVolumeCm3] = useState<number>(45.0);
  const [dimensions, setDimensions] = useState<{ x: number; y: number; z: number }>({ x: 65, y: 40, z: 25 });
  const [surfaceAreaCm2, setSurfaceAreaCm2] = useState<number | undefined>(85.0);

  // Print Parameters
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('tpu');
  const [infillPercent, setInfillPercent] = useState<number>(30);
  const [layerHeight, setLayerHeight] = useState<string>('0.20mm');
  const [quantity, setQuantity] = useState<number>(1);

  const [emailSentStatus, setEmailSentStatus] = useState<boolean>(false);

  // Handle File Drop / Selection
  const handleFileChange = async (selectedFile: File) => {
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setParseError(null);
    setEmailSentStatus(false);

    if (selectedFile.name.toLowerCase().endsWith('.stl')) {
      setParsing(true);
      try {
        const buffer = await selectedFile.arrayBuffer();
        const result: STLParseResult = parseSTLArrayBuffer(buffer);

        if (result.volumeCm3 > 0) {
          setVolumeCm3(result.volumeCm3);
          setDimensions(result.dimensions);
          setSurfaceAreaCm2(result.surfaceAreaCm2);
        } else {
          setParseError('Error parsing STL geometry.');
        }
      } catch (err) {
        console.error('STL Parse error:', err);
        setParseError('Error parsing file.');
      } finally {
        setParsing(false);
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Selected Material
  const currentMaterial = useMemo(() => {
    return MATERIALS.find(m => m.id === selectedMaterialId) || MATERIALS[0];
  }, [selectedMaterialId]);

  const currentLayerMultiplier = useMemo(() => {
    return LAYER_HEIGHTS.find(l => l.value === layerHeight)?.multiplier || 1.0;
  }, [layerHeight]);

  // Cost Formula
  const quoteParams: QuoteParams = useMemo(() => {
    const infillFactor = 0.25 + (infillPercent / 100.0) * 0.75;
    const singleWeightGrams = volumeCm3 * currentMaterial.density * infillFactor;
    const totalWeightGrams = singleWeightGrams * quantity;

    const costMaterial = (totalWeightGrams / 1000.0) * currentMaterial.pricePerKg;
    const baseMachineRatePerCm3 = 0.07;
    const costMachine = volumeCm3 * quantity * baseMachineRatePerCm3 * currentLayerMultiplier;
    const costSetup = quantity > 10 ? 4.00 : 8.00;
    const costHandling = 5.00 + (quantity * 0.50);

    // VAT calculation according to country
    const vatRate = language === 'DE' ? 0.19 : language === 'PL' ? 0.23 : 0.20;

    const totalNet = costMaterial + costMachine + costSetup + costHandling;
    const costVat = totalNet * vatRate;
    const totalGross = totalNet + costVat;

    return {
      fileName,
      fileVolumeCm3: volumeCm3,
      fileSurfaceAreaCm2: surfaceAreaCm2,
      dimensions,
      materialId: currentMaterial.id,
      infillPercent,
      layerHeight,
      quantity,
      weightGrams: Number(totalWeightGrams.toFixed(1)),
      costMaterial: Number(costMaterial.toFixed(2)),
      costMachine: Number(costMachine.toFixed(2)),
      costSetup: Number(costSetup.toFixed(2)),
      costHandling: Number(costHandling.toFixed(2)),
      costVat: Number(costVat.toFixed(2)),
      totalNet: Number(totalNet.toFixed(2)),
      totalGross: Number(totalGross.toFixed(2))
    };
  }, [fileName, volumeCm3, surfaceAreaCm2, dimensions, currentMaterial, infillPercent, layerHeight, quantity, currentLayerMultiplier, language]);

  const handleSendEmail = () => {
    setEmailSentStatus(true);
    onSendQuoteEmail(quoteParams);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 relative w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <CalcIcon className="w-3.5 h-3.5" />
            {t.title}
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
            {t.title}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Responsive Grid: 1 Column on Mobile, 12 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Dropzone & Parameters */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: File Dropzone & Volume */}
            <div className="glass-panel p-5 sm:p-6 space-y-4">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                {t.step1Title}
              </label>

              <div 
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-emerald-500/30 hover:border-emerald-400 rounded-2xl p-5 sm:p-6 text-center transition-all bg-emerald-500/5 cursor-pointer relative group min-h-[140px] flex items-center justify-center"
              >
                <input 
                  type="file" 
                  accept=".stl,.obj,.step" 
                  onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full text-base"
                />

                <div className="space-y-3 pointer-events-none w-full">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    {parsing ? (
                      <span className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Upload className="w-6 h-6" />
                    )}
                  </div>
                  
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block truncate px-2">
                      {file ? file.name : t.dragDefault}
                    </span>
                    <span className="text-[11px] text-gray-400 block mt-1">
                      {t.dragSub}
                    </span>
                  </div>

                  {file && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/40">
                      <FileCheck className="w-4 h-4" />
                      {t.analyzedBadge}
                    </div>
                  )}
                </div>
              </div>

              {parseError && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{parseError}</span>
                </div>
              )}

              {/* Touch-Friendly Volume Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-gray-300 flex items-center gap-1.5">
                    <Box className="w-4 h-4 text-emerald-400" />
                    {t.volumeLabel}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30 text-xs">
                    {volumeCm3} cm³
                  </span>
                </div>

                <input 
                  type="range" 
                  min="2" 
                  max="500" 
                  step="1"
                  value={volumeCm3}
                  onChange={(e) => setVolumeCm3(parseFloat(e.target.value))}
                  className="w-full h-3 cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>2 cm³</span>
                  <span>150 cm³ (TPU)</span>
                  <span>500 cm³</span>
                </div>
              </div>

              {/* Dimensions Bounding Box */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-[10px] text-gray-400 block">{t.widthX}</span>
                  <span className="font-mono font-bold text-gray-200">{dimensions.x} mm</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">{t.lengthY}</span>
                  <span className="font-mono font-bold text-gray-200">{dimensions.y} mm</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">{t.heightZ}</span>
                  <span className="font-mono font-bold text-gray-200">{dimensions.z} mm</span>
                </div>
              </div>

            </div>

            {/* Step 2: Material & Print Settings */}
            <div className="glass-panel p-5 sm:p-6 space-y-6">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                {t.step2Title}
              </label>

              {/* Material Selector Cards (1 column on mobile grid-cols-1 sm:grid-cols-2) */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-gray-300 block">{t.materialLabel}</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MATERIALS.map((mat) => {
                    const isSelected = mat.id === selectedMaterialId;
                    const localizedBadge = mat.badge[language];
                    return (
                      <div 
                        key={mat.id}
                        onClick={() => setSelectedMaterialId(mat.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all space-y-2 min-h-[84px] active:scale-[0.99] ${
                          isSelected 
                            ? 'bg-emerald-500/15 border-emerald-400 shadow-md shadow-emerald-500/10' 
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between items-center gap-2">
                          <span className="font-bold text-xs text-white flex items-center gap-1.5">
                            {mat.name}
                          </span>
                          {localizedBadge && (
                            <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded shrink-0 ${
                              mat.category === 'medical' 
                                ? 'bg-emerald-500 text-slate-950' 
                                : 'bg-cyan-500 text-slate-950'
                            }`}>
                              {localizedBadge}
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                          {mat.description[language]}
                        </p>

                        <div className="flex justify-between items-center text-[10px] pt-1.5 text-gray-400 border-t border-slate-800">
                          <span>{t.densityLabel} {mat.density} g/cm³</span>
                          <span className="font-bold text-emerald-400">€{mat.pricePerKg}/kg</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Infill & Layer Height Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Touch-Friendly Infill Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-gray-300 flex items-center gap-1">
                      <PieChart className="w-4 h-4 text-cyan-400" />
                      {t.infillLabel}
                    </span>
                    <span className="font-mono font-bold text-cyan-400">{infillPercent}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    step="5"
                    value={infillPercent}
                    onChange={(e) => setInfillPercent(parseInt(e.target.value))}
                    className="w-full h-3 cursor-pointer"
                  />
                  <span className="text-[10px] text-gray-400 block">
                    {infillPercent < 25 ? 'Light Infill' : infillPercent < 60 ? 'Optimal (TPU / Housings)' : '100% Solid'}
                  </span>
                </div>

                {/* Layer Height Select with text-base for iOS zoom prevention */}
                <div className="space-y-2">
                  <span className="font-semibold text-xs text-gray-300 flex items-center gap-1">
                    <Layers className="w-4 h-4 text-purple-400" />
                    {t.layerLabel}
                  </span>
                  <select 
                    value={layerHeight}
                    onChange={(e) => setLayerHeight(e.target.value)}
                    className="bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-4 py-3 text-base w-full focus:outline-none focus:border-emerald-500 min-h-[44px]"
                  >
                    {LAYER_HEIGHTS.map((lh) => (
                      <option key={lh.value} value={lh.value}>
                        {lh.label}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Quantity Counter with Touch Buttons min-h-[44px] */}
              <div className="pt-2 flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div>
                  <span className="text-xs font-bold text-white block">{t.quantityLabel}</span>
                  <span className="text-[11px] text-gray-400 block">Bambu Lab Farm Batch</span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 flex items-center justify-center text-lg active:scale-95 transition-transform"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-lg text-emerald-400 w-8 text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 flex items-center justify-center text-lg active:scale-95 transition-transform"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column / Step 3: Cost Breakdown & Action Button (Mobile Full Width) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-5 sm:p-6 glass-panel-active space-y-6 lg:sticky lg:top-24">
              
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t.summaryTitle}
                </span>
                <span className="text-[11px] text-gray-400 font-mono">Bambu Lab Farm</span>
              </div>

              {/* Model Specifications */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>3D File:</span>
                  <span className="font-semibold text-white truncate max-w-[160px]">{quoteParams.fileName}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Material:</span>
                  <span className="font-bold text-emerald-400">{currentMaterial.name}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Parameters:</span>
                  <span className="font-medium text-gray-200">{infillPercent}% infill • {layerHeight}</span>
                </div>
                <div className="flex justify-between text-gray-300 border-t border-slate-800 pt-1.5">
                  <span>{t.weightLabel}</span>
                  <span className="font-mono font-bold text-cyan-300">{quoteParams.weightGrams} g</span>
                </div>
              </div>

              {/* Detailed Cost Line Items */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>{t.costMaterial}</span>
                  <span className="font-mono text-gray-200">€{quoteParams.costMaterial}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>{t.costMachine}</span>
                  <span className="font-mono text-gray-200">€{quoteParams.costMachine}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>{t.costSetup}</span>
                  <span className="font-mono text-gray-200">€{quoteParams.costSetup}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>{t.costHandling}</span>
                  <span className="font-mono text-gray-200">€{quoteParams.costHandling}</span>
                </div>

                <div className="flex justify-between text-gray-300 font-semibold pt-2 border-t border-slate-800">
                  <span>{t.costTotalNet}</span>
                  <span className="font-mono text-white">€{quoteParams.totalNet}</span>
                </div>

                <div className="flex justify-between text-gray-400 text-[11px]">
                  <span>{t.costVat}</span>
                  <span className="font-mono">€{quoteParams.costVat}</span>
                </div>
              </div>

              {/* Gross Total Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 text-center space-y-1">
                <span className="text-xs text-gray-300 block uppercase font-bold tracking-wider">{t.totalGross}</span>
                <span className="font-heading font-black text-3xl text-emerald-400 block font-mono">
                  €{quoteParams.totalGross}
                </span>
                <span className="text-[10px] text-gray-400 block">
                  {quantity} Pcs ({t.costVat})
                </span>
              </div>

              {/* Full-width touch action buttons (w-full py-4 text-base min-h-[48px]) */}
              <div className="space-y-3 pt-2">
                <button 
                  onClick={handleSendEmail}
                  className="w-full btn-primary justify-center py-4 text-base font-semibold min-h-[48px] rounded-xl"
                >
                  <Mail className="w-5 h-5" />
                  <span>{t.btnSendEmail}</span>
                </button>

                <button 
                  onClick={() => onSendQuoteToAi(quoteParams)}
                  className="w-full btn-secondary justify-center py-3.5 border-emerald-500/30 text-emerald-300 text-sm font-semibold hover:bg-emerald-500/10 min-h-[48px] rounded-xl"
                >
                  <Bot className="w-5 h-5 text-emerald-400" />
                  <span>{t.btnConsultAi}</span>
                </button>
              </div>

              {emailSentStatus && (
                <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>3dapex.de@gmail.com</span>
                </div>
              )}

              <div className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{t.orderNote}</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
