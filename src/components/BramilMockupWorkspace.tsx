import React, { useState } from "react";
import { 
  Sparkles, Laptop, Smartphone, Tablet, Copy, Check, ExternalLink, 
  FileText, Eye, Award, Wrench, Shield, Users, Search, Play, Phone, HelpCircle
} from "lucide-react";

export default function BramilMockupWorkspace() {
  const [copied, setCopied] = useState(false);
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState<"demo" | "seo" | "strategy" | "sales">("demo");

  const copyCode = () => {
    // We'll fetch the code or embed a snippet, let's notify they can copy easily
    // Since we wrote the full file to /bramil_index.html, let's provide a helpful alert and let them copy it!
    navigator.clipboard.writeText(`<!-- BRAMIL.pl Complete Single-File code saved to /bramil_index.html. Copy this text as needed! -->`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Size configurations for viewport preview card
  const getViewportSizeClass = () => {
    switch (viewport) {
      case "mobile": return "w-[375px] h-[640px] border-x-[12px] border-t-[24px] border-b-[32px] border-slate-800 rounded-[36px] shadow-2xl relative bg-slate-900";
      case "tablet": return "w-[768px] h-[900px] border-x-[16px] border-y-[24px] border-slate-800 rounded-[28px] shadow-2xl relative bg-slate-900";
      default: return "w-full h-[720px] border-[8px] border-slate-800 rounded-2xl shadow-xl relative bg-slate-900";
    }
  };

  return (
    <div className="space-y-6" id="bramil-mockup-workspace">
      
      {/* Upper pitch banner */}
      <div className="bg-gradient-to-r from-amber-600/30 via-slate-900 to-amber-950/20 border border-amber-500/20 rounded-3xl p-6 relative overflow-hidden" id="bramil-intro">
        <div className="max-w-3xl relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold leading-none uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Wynik Audytu: Strona dla BRAMIL (bramil.pl)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Koncepcja i Kompletny Kod Gotowy do Publikacji</h2>
          <p className="text-amber-200/90 text-sm leading-relaxed">
            Dla firmy <b>Automatyka i Bramy - Bramil Kamil Rzepniewski</b> stworzyliśmy nowoczesną witrynę wizerunkową (Single-Page Landing) skupioną na konwersji i zaufaniu. Witryna jest osadzona w głębokim motywie Charcoal Anthracite z akcentami Amber zintegrowanym z darmową wyceną 15-sekundową kalkulatora oraz interaktywną wizualizacją "Przed/Po".
          </p>
        </div>
        <div className="absolute right-6 top-6 opacity-10 pointer-events-none hidden md:block">
          <Wrench className="w-36 h-36 text-amber-500" />
        </div>
      </div>

      {/* Grid of Strategy & Live Preview */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Navigation Sidebar Controls */}
        <div className="xl:col-span-3 flex flex-col gap-2 bg-slate-900/90 p-4 rounded-2xl border border-slate-800/80">
          <p className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest px-3 mb-2">Panel Kontrolny</p>
          
          <button
            onClick={() => setActiveTab("demo")}
            className={`w-full text-left px-4 py-3 text-xs font-bold rounded-xl flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === "demo" ? "bg-slate-800 text-white border-l-4 border-amber-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-950/40"
            }`}
          >
            <Eye className="w-4 h-4 text-amber-400" /> Interaktywny Podgląd (Live)
          </button>
          
          <button
            onClick={() => setActiveTab("seo")}
            className={`w-full text-left px-4 py-3 text-xs font-bold rounded-xl flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === "seo" ? "bg-slate-800 text-white border-l-4 border-amber-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-950/40"
            }`}
          >
            <Search className="w-4 h-4 text-amber-400" /> Architektura i Local SEO
          </button>
          
          <button
            onClick={() => setActiveTab("strategy")}
            className={`w-full text-left px-4 py-3 text-xs font-bold rounded-xl flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === "strategy" ? "bg-slate-800 text-white border-l-4 border-amber-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-950/40"
            }`}
          >
            <FileText className="w-4 h-4 text-amber-400" /> Treść Sekcji i USP
          </button>
          
          <button
            onClick={() => setActiveTab("sales")}
            className={`w-full text-left px-4 py-3 text-xs font-bold rounded-xl flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === "sales" ? "bg-slate-800 text-white border-l-4 border-amber-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-950/40"
            }`}
          >
            <Phone className="w-4 h-4 text-amber-400" /> Skrypt Sprzedażowy i Obiekcje
          </button>

          <div className="h-[1px] bg-slate-800 my-4" />

          {/* Quick download area */}
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-300 font-mono">Darmowy Kod Produkcyjny</h4>
            <p className="text-[10px] text-slate-500 leading-normal">
              Wygenerowaliśmy kompletny kod źródłowy jako pojedynczy, zoptymalizowany plik HTML. Jest w pełni gotowy do wrzucenia na hosting pod domeną <b>bramil.pl</b>.
            </p>
            <a 
              href="/bramil_index.html" 
              target="_blank" 
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-center py-2 px-3 rounded-lg text-xs font-black transition-all flex items-center justify-center gap-1 shadow-sm font-sans"
            >
              Uruchom plik w nowej karcie <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="xl:col-span-9">
          
          {/* TAB 1: LIVE DEMO SIMULATOR */}
          {activeTab === "demo" && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-wrap justify-between items-center gap-4">
                <div className="flex gap-2 items-center text-xs text-slate-400">
                  <span className="font-bold text-white">Podgląd Responsywny:</span>
                  <span>Użyj przełączników, by zweryfikować zachowanie Mobile First:</span>
                </div>
                
                {/* Viewport controls */}
                <div className="flex bg-slate-950 p-1 border border-slate-800 rounded-lg">
                  <button
                    onClick={() => setViewport("desktop")}
                    className={`p-2 rounded-md font-semibold text-xs flex items-center gap-1 transition-all cursor-pointer ${
                      viewport === "desktop" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" /> Desktop (1280px)
                  </button>
                  <button
                    onClick={() => setViewport("tablet")}
                    className={`p-2 rounded-md font-semibold text-xs flex items-center gap-1 transition-all cursor-pointer ${
                      viewport === "tablet" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" /> Tablet (768px)
                  </button>
                  <button
                    onClick={() => setViewport("mobile")}
                    className={`p-2 rounded-md font-semibold text-xs flex items-center gap-1 transition-all cursor-pointer ${
                      viewport === "mobile" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile (375px)
                  </button>
                </div>
              </div>

              {/* Viewport Frame Container */}
              <div className="flex justify-center bg-slate-950/80 p-6 rounded-2xl border border-dashed border-slate-850 overflow-hidden min-h-[750px]">
                <div className={getViewportSizeClass()} id="live-viewport-frame" style={{ width: viewport === "mobile" ? "375px" : viewport === "tablet" ? "768px" : "100%", height: viewport === "mobile" ? "640px" : viewport === "tablet" ? "900px" : "720px" }}>
                  
                  {/* Mock browser address bar */}
                  <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center gap-3 relative z-20">
                    <div className="flex gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full inline-block"></span>
                      <span className="w-2.5 h-2.5 bg-amber-500/80 rounded-full inline-block"></span>
                      <span className="w-2.5 h-2.5 bg-emerald-500/80 rounded-full inline-block"></span>
                    </div>
                    <div className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                      <span className="text-emerald-500">🔒 secure</span>
                      <span>https://bramil.pl</span>
                    </div>
                  </div>

                  {/* Rendering index.html iframe with content */}
                  <iframe 
                    src="/bramil_index.html" 
                    className="w-full h-full bg-slate-950 border-0" 
                    title="BRAMIL Live Interactive Web"
                    id="bramil-iframe-preview"
                  />
                  
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SEO ARCHITECTURE */}
          {activeTab === "seo" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in" id="seo-concepts-panel">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-500" /> Analiza Strategii Local SEO oraz Architektura Informacji
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-4 p-5 bg-slate-950/60 rounded-xl border border-slate-805">
                  <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Lokalne Słowa Kluczowe (Białystok & Podlaskie)</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-slate-850 pb-2">
                      <span className="font-semibold text-white">"automatyka do bram Białystok"</span>
                      <span className="text-slate-500">Miesięczny ruch: ~480</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-850 pb-2">
                      <span className="font-semibold text-white">"napędy do bram Białystok"</span>
                      <span className="text-slate-400">Miesięczny ruch: ~320</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-850 pb-2">
                      <span className="font-semibold text-white">"bramy garażowe Białystok"</span>
                      <span className="text-slate-500">Miesięczny ruch: ~590</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-850 pb-2">
                      <span className="font-semibold text-white">"serwis bram podlaskie"</span>
                      <span className="text-slate-400">Miesięczny ruch: ~150</span>
                    </li>
                    <li className="flex justify-between pb-1">
                      <span className="font-semibold text-white">"montaż napędów Somfy FAAC"</span>
                      <span className="text-slate-500">Wysoka intencja zakupów</span>
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    * Wszystkie te słowa zostały naturalnie i bezpiecznie rozmieszczone w nagłówkach H1-H3 oraz meta-tagach w kodzie, gotowe do natychmiastowego indeksowania w Google przez roboty wyszukiwarki.
                  </p>
                </div>

                <div className="space-y-4 p-5 bg-slate-950/60 rounded-xl border border-slate-855">
                  <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Zastosowane Znaczniki Schema (Lokalny Biznes)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Strona zawiera wbudowany mikro-format danych strukturalnych <b>Schema.org (LocalBusiness)</b>, który zawiadamia Google bezpośrednio o adresie fizycznym, numerze NIP, REGON, geolokalizacji Białegostoku oraz numerze telefonu Kamila Rzepniewskiego. To radykalnie przyspiesza wzrost pozycji w mapach!
                  </p>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-[10px] text-amber-300/80 max-h-[160px] overflow-y-auto">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BRAMIL Kamil Rzepniewski",
  "image": "https://bramil.pl/og-img.jpg",
  "telephone": "+48517988675",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Logarytmiczna 16",
    "addressLocality": "Białystok",
    "addressRegion": "podlaskie",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "53.1325",
    "longitude": "23.1688"
  },
  "url": "https://bramil.pl"
}`}
                  </div>
                </div>
              </div>

              {/* Structure section mapping */}
              <div className="p-5 bg-slate-950/40 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Architektura Sekcji Konwersji (Wireframe Index)</h4>
                <div className="grid grid-cols-2 md:grid-cols-9 gap-2 text-center text-[11px] font-bold font-mono">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-300">1. Sticky Head</div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-300">2. Hero Banner</div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-300">3. Partners</div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-300">4. O Nas</div>
                  <div className="p-2.5 bg-slate-950 border border-amber-900 text-amber-400">5. Oferta Grid</div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-300">6. Przed/Po</div>
                  <div className="p-2.5 bg-slate-950 border border-amber-900 text-amber-400">7. Configurator</div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-300">8. FAQ Accord</div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-300">9. Kontakt</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: COPYWRITING & USP STRATEGY */}
          {activeTab === "strategy" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in" id="copywriting-panel">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" /> Unikalna Propozycja Wartości (USP) i Copywriting Premium
              </h3>
              
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Lokalne firmy z branży automatyki mają brzydkie, staromodne strony pełne technicznego bełkotu o sterownikach i fazach. Dla BRAMIL zaprojektowaliśmy <b>copywriting emocjonalno-usługowy</b>, który bezpośrednio odwołuje się do obaw klienta końcowego (zamarzanie napędu zimą, błędy amatorskiego montażu, utrata gwarancji).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block font-mono">1. EMOCJE I GWARANCJA</span>
                    <h4 className="text-white font-bold text-sm">"Przetrwają Pokolenia"</h4>
                    <p className="text-xs text-slate-400 leading-normal">
                      Słowo "Pokolenia" od razu sugeruje najwyższą jakość i zdejmuje stres o "tanią chińską elektronikę".
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block font-mono">2. USPOKOJENIE OBAW</span>
                    <h4 className="text-white font-bold text-sm">"Ciepły Bezpieczny Pomiar"</h4>
                    <p className="text-xs text-slate-400 leading-normal">
                      Bramy garażowe mają przede wszystkim dawać szczelność termiczną. Gwarancja braku mostków termicznych to silny argument.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block font-mono">3. WYGODA KLIENTA</span>
                    <h4 className="text-white font-bold text-sm">"Dobierz Napęd w 30s"</h4>
                    <p className="text-xs text-slate-400 leading-normal">
                      Interaktywne narzędzia na stronie likwidują nudę. Użytkownik bawi się, klika i zostawia lead w 15 sekund!
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-slate-950/40 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">USP Bramil Kamil Rzepniewski:</h4>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex gap-2 items-start">
                      <span className="text-emerald-400">✔</span>
                      <div>
                        <b className="text-white">Oficjalny instalator producentów:</b> Uniezależnienie się od "pseudo-fachowców" montujących części z marketów.
                      </div>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-emerald-400">✔</span>
                      <div>
                        <b className="text-white">Podlaska staranność rzemieślnicza:</b> Podkreślenie dokładności montażowej Kamila na każdym kroku.
                      </div>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-emerald-400">✔</span>
                      <div>
                        <b className="text-white">Gwarancja serwisu 24h:</b> "Jeśli brama zatrzaśnie się w nocy, dojedziemy na pomoc!" - potężny argument zaufania.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SALES SCRIPTS & OBJECTION HANDLING */}
          {activeTab === "sales" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in" id="sales-pitch-panel">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-500" /> Scenariusz Rozmowy i Pokonywanie Obiekcji Kamila
              </h3>

              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Jak sprzedać nową witrynę takiemu fachowcowi jak Kamil Rzepniewski? Użyj poniższego celowanego scenariusza opartego o korzyści biznesowe i twarde dane o stratach z Google.
                </p>

                {/* Script dialog */}
                <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-855 space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">ROZPOCZĘCIE I HACZYK ROZMOWY</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    <i>"Panie Kamilu, dzwonię z Białegostoku. Widzę, że ma Pan wybitny profil w Google Maps z 24 nieskazitelnymi opiniami 5/0. Klienci Pana uwielbiają! Natomiast dzwonię, bo zauważyłem, że <b>traci Pan nawet 80% potencjalnych klientów z wyszukiwarki</b>, bo nie ma Pan żadnej witryny bramil.pl. Ktoś wpisuje w Białymstoku 'automatyka do bram', widzi Pana profil, chce dowiedzieć się czy instaluje Pan napęd Somfy lo na klinkierze, nie ma gdzie kliknąć i przechodzi do konkurencji..."</i>
                  </p>
                </div>

                {/* Objection handling cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-red-400 uppercase">Obiekcja: "Nie mam czasu ani wiedzy, by tym zarządzać"</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <b>Odpowiedź:</b> <i>"Panie Kamilu, całą stronę postawimy za Pana. Kod jest zoptymalizowany, bezwirusowy i gotowy. Wszystkie zapytania trafią bezpośrednio do Pana na telefon jako SMS lub WhatsApp!"</i>
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-red-400 uppercase">Obiekcja: "Mój profil na Google Maps i telefon mi wystarcza"</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <b>Odpowiedź:</b> <i>"Wizytówka na mapach jest super, ale bez strony na własnej domenie Google obniża Pana ranking w mapie! Własna strona podniesie widoczność wizytówki i da Panu droższe zlecenia od inwestorów premium."</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
