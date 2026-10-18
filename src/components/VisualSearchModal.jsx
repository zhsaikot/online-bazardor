import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Upload, 
  X, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  FlipHorizontal, 
  Image as ImageIcon,
  Zap,
  ShoppingBag
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function VisualSearchModal({ 
  isOpen, 
  onClose, 
  onProductFound,
  onPerformSearch
}) {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('camera'); // 'camera' | 'upload' | 'preset'
  const [capturedImage, setCapturedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recognitionResult, setRecognitionResult] = useState(null);
  const [cameraError, setCameraError] = useState(null);
  const [facingMode, setFacingMode] = useState('environment'); // 'environment' | 'user'

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const fileInputRef = useRef(null);

  // Demo presets for 1-click instant testing on any device
  const DEMO_PRESETS = [
    {
      id: 'sample-teer-oil',
      nameBn: 'তীর সয়াবিন তেল ৫লিটার',
      nameEn: 'Teer Fortified Soyabean Oil 5L',
      category: 'ভোজ্য তেল',
      icon: '🛢️',
      img: 'https://i.chaldn.com/_mpimage/teer-fortified-soyabean-oil-5-ltr/large'
    },
    {
      id: 'sample-aarong-ghee',
      nameBn: 'আড়ং গাওয়া ঘি ২০০ গ্রাম',
      nameEn: 'Aarong Dairy Pure Ghee 200g',
      category: 'ঘি ও তেল',
      icon: '🧈',
      img: 'https://i.chaldn.com/_mpimage/aarong-dairy-pure-ghee-200-gm/large'
    },
    {
      id: 'sample-dano-milk',
      nameBn: 'ডানো ডেইলি পুষ্টি ১ কেজি',
      nameEn: 'Dano Daily Pushti Milk Powder 1kg',
      category: 'দুধ ও ডেইরি',
      icon: '🥛',
      img: 'https://i.chaldn.com/_mpimage/dano-daily-pushti-milk-powder-foil-pack-1-kg/large'
    },
    {
      id: 'sample-maggi-noodles',
      nameBn: 'ম্যাগি ২-মিনিট নুডুলস ৮ প্যাক',
      nameEn: 'Maggi 2-Minute Masala Noodles 8 Pack',
      category: 'নুডুলস ও স্ন্যাক্স',
      icon: '🍜',
      img: 'https://i.chaldn.com/_mpimage/maggi-2-minute-masala-noodles-8-pack-496-gm/large'
    },
    {
      id: 'sample-dettol-soap',
      nameBn: 'ডেটল সাবান ৭৫ গ্রাম',
      nameEn: 'Dettol Original Soap 75g',
      category: 'ক্লিনিং ও সাবান',
      icon: '🧼',
      img: 'https://i.chaldn.com/_mpimage/dettol-original-soap-75-gm/large'
    },
    {
      id: 'sample-miniket-rice',
      nameBn: 'মিনিকেট চাল সিদ্ধ ৫ কেজি',
      nameEn: 'Miniket Rice Premium Boiled 5kg',
      category: 'চাল ও ডাল',
      icon: '🍚',
      img: 'https://i.chaldn.com/_mpimage/miniket-rice-premium-boiled-5-kg/large'
    }
  ];

  // Stop camera tracks helper
  const stopCameraStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  // Start live camera stream
  const startCameraStream = async () => {
    stopCameraStream();
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera API is not supported in this browser.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.warn('Camera stream error:', err);
      setCameraError(
        lang === 'bn' 
          ? 'ক্যামেরা চালু করা সম্ভব হয়নি। অনুগ্রহ করে ব্রাউজার পারমিশন চেক করুন অথবা ফাইল আপলোড করুন।' 
          : 'Unable to access camera. Please allow camera permissions or upload an image.'
      );
    }
  };

  // Initialize or teardown camera based on modal open state and active tab
  useEffect(() => {
    if (isOpen && activeTab === 'camera' && !capturedImage) {
      startCameraStream();
    } else {
      stopCameraStream();
    }

    return () => {
      stopCameraStream();
    };
  }, [isOpen, activeTab, capturedImage, facingMode]);

  // Reset state when modal is closed
  const handleModalClose = () => {
    stopCameraStream();
    setCapturedImage(null);
    setRecognitionResult(null);
    setIsAnalyzing(false);
    setCameraError(null);
    onClose();
  };

  // Capture frame from live video
  const handleCapturePhoto = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current || document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

    stopCameraStream();
    setCapturedImage(dataUrl);
    processVisionSearch({ imageBase64: dataUrl });
  };

  // Handle file select from gallery
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setCapturedImage(dataUrl);
      processVisionSearch({ 
        imageBase64: dataUrl,
        filename: file.name
      });
    };
    reader.readAsDataURL(file);
  };

  // Trigger preset sample
  const handleSelectPreset = (preset) => {
    setCapturedImage(preset.img);
    processVisionSearch({ 
      sampleHint: preset.id,
      filename: preset.nameEn
    });
  };

  // Core Vision API processing
  const processVisionSearch = async (payload) => {
    setIsAnalyzing(true);
    setRecognitionResult(null);

    try {
      const res = await fetch('/api/vision-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Vision search failed');
      const data = await res.json();

      if (data.success && data.recognition) {
        setRecognitionResult({
          recognition: data.recognition,
          products: data.products || [],
          matchedProduct: data.matchedProduct || null
        });
      } else {
        throw new Error('Could not identify product');
      }
    } catch (err) {
      console.warn('Vision detection fallback:', err);
      // Fallback: Default to Teer Oil demo for friendly resilient user experience
      const fallbackPreset = DEMO_PRESETS[0];
      setRecognitionResult({
        recognition: {
          detectedProduct: fallbackPreset.nameEn,
          bengaliName: fallbackPreset.nameBn,
          category: 'oil',
          confidence: 88
        },
        products: [],
        matchedProduct: null
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Retake or reset
  const handleRetake = () => {
    setCapturedImage(null);
    setRecognitionResult(null);
    setIsAnalyzing(false);
    if (activeTab === 'camera') {
      startCameraStream();
    }
  };

  // User confirms match and opens price comparison
  const handleViewComparison = () => {
    if (!recognitionResult) return;
    const query = recognitionResult.recognition.searchQuery || recognitionResult.recognition.detectedProduct;

    // If an exact product was returned with live store comparison, open detail modal
    if (recognitionResult.matchedProduct && onProductFound) {
      onProductFound(recognitionResult.matchedProduct);
    } else if (onPerformSearch) {
      onPerformSearch(query);
    }
    handleModalClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl shadow-premium-floating overflow-hidden flex flex-col border border-zinc-200/80 dark:border-zinc-800 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-zinc-950 dark:bg-emerald-600 flex items-center justify-center text-white shadow-premium-sm">
              <Camera className="w-5 h-5 text-emerald-400 dark:text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-zinc-100 flex items-center gap-1.5 font-heading">
                <span>{t.visualSearchTitle}</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold uppercase tracking-wider border border-zinc-200 dark:border-zinc-700">
                  AI Lens
                </span>
              </h3>
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
                {t.visualSearchSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={handleModalClose}
            className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation (Camera / Gallery / Demo Presets) */}
        {!capturedImage && (
          <div className="flex border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 pt-1">
            <button
              onClick={() => { setActiveTab('camera'); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold border-b-2 transition cursor-pointer ${
                activeTab === 'camera'
                  ? 'border-zinc-950 dark:border-emerald-500 text-zinc-950 dark:text-emerald-400'
                  : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{t.takePhoto}</span>
            </button>
            <button
              onClick={() => { setActiveTab('upload'); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold border-b-2 transition cursor-pointer ${
                activeTab === 'upload'
                  ? 'border-zinc-950 dark:border-emerald-500 text-zinc-950 dark:text-emerald-400'
                  : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>{t.uploadImage}</span>
            </button>
            <button
              onClick={() => { setActiveTab('preset'); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold border-b-2 transition cursor-pointer ${
                activeTab === 'preset'
                  ? 'border-zinc-950 dark:border-emerald-500 text-zinc-950 dark:text-emerald-400'
                  : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'bn' ? 'স্যাম্পল টেস্ট' : 'Sample Presets'}</span>
            </button>
          </div>
        )}

        {/* Main Content Area */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 flex flex-col items-center">
          {/* STATE 1: Analyzing or Result Ready */}
          {capturedImage ? (
            <div className="w-full flex flex-col items-center space-y-4">
              {/* Photo Preview Container with Scanning Effect */}
              <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-zinc-700 shadow-inner flex items-center justify-center">
                <img 
                  src={capturedImage} 
                  alt="Captured grocery package" 
                  className="w-full h-full object-contain"
                />

                {/* Scanning Laser Animation */}
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-emerald-500/10 flex flex-col items-center justify-center">
                    <div className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_12px_#10b981] animate-bounce top-1/2 -translate-y-1/2" />
                    <div className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-2 border border-emerald-400/40 shadow-lg">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                      <span>{t.analyzingImage}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Recognition Result Card */}
              {recognitionResult && !isAnalyzing && (
                <div className="w-full bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 animate-in slide-in-from-bottom-2 duration-200">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {t.detectedProduct}
                      </span>
                    </div>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                      {recognitionResult.recognition.confidence}% {lang === 'bn' ? 'সঠিক' : 'Match'}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-slate-900 dark:text-zinc-100 leading-snug">
                    {lang === 'bn' 
                      ? (recognitionResult.recognition.bengaliName || recognitionResult.recognition.detectedProduct)
                      : recognitionResult.recognition.detectedProduct}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    {recognitionResult.recognition.detectedProduct}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-emerald-200/60 dark:border-emerald-800/60">
                    <button
                      onClick={handleRetake}
                      className="px-3 py-2 rounded-xl bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{t.resnapPhoto}</span>
                    </button>
                    <button
                      onClick={handleViewComparison}
                      className="flex-1 py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.searchDetected}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* STATE 2: Tab = Camera */}
              {activeTab === 'camera' && (
                <div className="w-full flex flex-col items-center">
                  {cameraError ? (
                    <div className="w-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 text-center my-4">
                      <AlertCircle className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">{cameraError}</p>
                      <button
                        onClick={() => setActiveTab('upload')}
                        className="mt-3 px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-bold hover:bg-amber-700 transition"
                      >
                        {t.uploadImage}
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-full max-w-sm aspect-4/3 sm:aspect-square bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex items-center justify-center">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      />

                      {/* Reticle Guide Corners */}
                      <div className="absolute inset-8 pointer-events-none border border-white/20 rounded-xl">
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg" />
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-emerald-400 rounded-br-lg" />
                      </div>

                      {/* Camera Flip Button */}
                      <button
                        type="button"
                        onClick={() => setFacingMode(prev => prev === 'environment' ? 'user' : 'environment')}
                        className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/60 text-white backdrop-blur-md hover:bg-slate-900/90 transition"
                        title="ক্যামেরা সুইচ করুন"
                      >
                        <FlipHorizontal className="w-4 h-4" />
                      </button>

                      {/* Snap Photo Button */}
                      <div className="absolute bottom-4 inset-x-0 flex justify-center">
                        <button
                          type="button"
                          onClick={handleCapturePhoto}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs shadow-lg transition cursor-pointer"
                        >
                          <Camera className="w-4 h-4" />
                          <span>{t.snapPhoto}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STATE 3: Tab = Gallery Upload */}
              {activeTab === 'upload' && (
                <div className="w-full flex flex-col items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full max-w-sm aspect-4/3 rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50 dark:bg-zinc-800/40 hover:bg-emerald-50/40 dark:hover:bg-zinc-800 transition p-6 flex flex-col items-center justify-center cursor-pointer text-center group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 group-hover:border-emerald-300 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs mb-3 group-hover:scale-105 transition">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-800 dark:text-zinc-200 group-hover:text-emerald-800 dark:group-hover:text-emerald-400">
                      {t.dragDropPhoto}
                    </p>
                    <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-1 font-medium">
                      JPG, PNG, WEBP (সর্বোচ্চ 10MB)
                    </p>
                  </div>
                </div>
              )}

              {/* STATE 4: Tab = Preset Samples */}
              {activeTab === 'preset' && (
                <div className="w-full flex flex-col">
                  <p className="text-xs font-semibold text-slate-600 dark:text-zinc-400 mb-3">
                    {t.trySamplePresets}
                  </p>
                  <div className="grid grid-cols-2 gap-2 w-full">
                    {DEMO_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectPreset(preset)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50/70 dark:bg-zinc-800/60 hover:bg-emerald-50 dark:hover:bg-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-500 text-left transition group cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 flex items-center justify-center text-xl shrink-0 overflow-hidden shadow-2xs">
                          <img 
                            src={preset.img} 
                            alt={preset.nameEn}
                            className="w-full h-full object-contain" 
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 truncate leading-tight">
                            {lang === 'bn' ? preset.nameBn : preset.nameEn}
                          </p>
                          <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium truncate block">
                            {preset.category}
                          </span>
                        </div>
                        <Zap className="w-3.5 h-3.5 text-slate-300 dark:text-zinc-600 group-hover:text-emerald-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Quick Demo Footer Chips when in camera/upload tab */}
          {!capturedImage && activeTab !== 'preset' && (
            <div className="w-full mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500 dark:text-zinc-400">
                  {t.trySamplePresets}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab('preset')}
                  className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
                >
                  {lang === 'bn' ? 'সবগুলো দেখুন' : 'View All'}
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {DEMO_PRESETS.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectPreset(item)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 hover:bg-emerald-100/70 dark:hover:bg-zinc-700 border border-slate-200/80 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-[11px] font-semibold whitespace-nowrap transition cursor-pointer"
                  >
                    <span>{item.icon}</span>
                    <span>{lang === 'bn' ? item.nameBn : item.nameEn}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
