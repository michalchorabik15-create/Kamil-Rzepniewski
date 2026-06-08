import React, { useState } from "react";
import { Sparkles, Copy, AlertCircle, CheckCircle2, RefreshCw, Layers, ShieldCheck, Zap } from "lucide-react";
import { Lead } from "../data/leads";

interface AiPitchGeneratorProps {
  leads: Lead[];
}

interface GeneratedPitch {
  audit: string;
  heroArgument: string;
  sms: string;
  messenger: string;
  email: string; // Could be formatted text or subject + body
  callScript: string;
  proposal: {
    structure: string;
    usp: string;
    seo: string;
  };
}

export default function AiPitchGenerator({ leads }: AiPitchGeneratorProps) {
  const [selectedLeadId, setSelectedLeadId] = useState<string>(leads[0]?.id || "");
  const [angle, setAngle] = useState<string>("insecure_http");
  const [customNotes, setCustomNotes] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<GeneratedPitch | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const selectedLead = leads.find((l) => l.id === selectedLeadId);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const angleLabels: Record<string, string> = {
      insecure_http: "Zagrożenie bezpieczeństwa i czerwona kłódka HTTP (brak SSL)",
      none_facebook: "Brak wizerunku i utrata ruchu przez zależność od profilu Facebook",
      none: "Brak jakiejkolwiek strony internetowej i utrata wiarygodności",
      slow_wix: "Dramatycznie wolny silnik Wix na smartfonach ograniczający konwersję",
      local_seo: "Zdominowanie konkurencji na lokalne frazy budowlane v Google",
      booking_cro: "Portfolio realizacji, gwarancje techniczne i formularz darmowej wyceny (CRO)",
    };

    try {
      const response = await fetch("/api/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadName: selectedLead.name,
          category: selectedLead.categories.join(", "),
          rating: selectedLead.rating,
          reviewsCount: selectedLead.reviewsCount,
          website: selectedLead.website,
          angle: angleLabels[angle],
          customNotes: customNotes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || "Nieznany błąd serwera");
      }

      setResult(data);
    } catch (err: any) {
      console.error(err);
      
      // Fallback: Mocked generation if API key is not configured
      setError(
        "Wykryto brak klucza GEMINI_API_KEY lub błąd sieciowy. Wdrożyliśmy inteligentny tryb demo, abyś mógł przetestować generator na bazie zasobów autorskich!"
      );

      // Simulate AI Generation delay
      setTimeout(() => {
        const mockPitchesForAngle = generateFallbackPitch(selectedLead, angle, customNotes);
        setResult(mockPitchesForAngle);
        setLoading(false);
      }, 1500);
      return;
    }

    setLoading(false);
  };

  // Internal offline simulated engine for fallback
  const generateFallbackPitch = (lead: Lead, angle: string, notes: string): GeneratedPitch => {
    let mockAudit = `Podczas weryfikacji pozycji "${lead.name}" zidentyfikowano braki widoczności i optymalizacji. Strona wczytuje się w sposób niespójny z nowoczesnymi telefonami, co utrudnia inwestorom i klientom szybkie zapoznanie się z galerią realizacji oraz pozyskanie bezpłatnej wyceny.`;
    let mockHero = `Tracisz duże budżety i zlecenia na rzecz konkurentów, którzy posiadają nowoczesne, szybkie strony ze zdjęciami maszyn, pracowników oraz certyfikatów rzetelności.`;
    
    if (angle === "insecure_http") {
      mockAudit = `Wchodząc na witrynę ${lead.website || "firmy"}, potencjalny inwestor dostrzega czerwony komunikat o braku kłódki SSL (HTTP). W branży budowlanej i dużych kontraktach to błąd niszczący wiarygodność na starcie.`;
      mockHero = `Komunikat o braku zabezpieczeń odstrasza deweloperów oraz prywatnych inwestorów planujących budowę domu za setki tysięcy złotych.`;
    } else if (angle === "none_facebook") {
      mockAudit = `Brak własnej witryny i kierowanie klientów wyłącznie na Facebooka drastycznie obniża pozycję firmy. Inwestorzy poszukujący ekipy budowlanej chcą zobaczyć katalog i konkretną, ułożoną ofertę, a nie chaos osi czasu.`;
      mockHero = `Uzależnienie od algorytmów Facebooka i brak własnej wizytówki z unikalnym adresem w Białymstoku skutkuje wyciekiem ponad 30% najbardziej zyskownych zapytań lokalnych.`;
    } else if (angle === "none") {
      mockAudit = `Firma posiada świetne opinie na mapach Google, lecz zupełny brak strony www uniemożliwia zaprezentowanie pełnego spektrum usług i profesjonalnego sprzętu potencjalnemu klientowi.`;
      mockHero = `Brak bazy ofertowej w sieci zmusza Cię do walki wyłącznie niską ceną lub poleceniami, zamiast pozycjonowania jako rzetelny ekspert premium w województwie podlaskim.`;
    }

    return {
      audit: mockAudit,
      heroArgument: mockHero,
      sms: `Dzień dobry! Państwa firma ${lead.name} ma świetne opinie w Białymstoku (${lead.reviewsCount} ocen). Czy rozważali Państwo budowę nowoczesnej strony www z galerią realizacji do generowania zapytań o darmową wycenę/obmiar?`,
      messenger: `Dzień dobry! Gratuluję doskonałych opinii o firmie ${lead.name}. Zwróciłem uwagę, że brakuje Państwu nowoczesnej strony www prezentującej zdjęcia gotowych realizacji na telefonach komórkowych inwestorów. Przygotowałem darmowy model-szkic nowej witryny zwiększającej zapytania ofertowe. Czy mogę go zaprezentować?`,
      email: `Temat: Nowoczesna strona internetowa z galerią prac oraz lokalne SEO dla ${lead.name}\n\nSzanowni Państwo,\n\nZ dużym uznaniem obserwuję oceny klientów firmy ${lead.name}. Państwa marka buduje silną renomę w Białymstoku. Jako ekspert od marketingu i pozycjonowania firm budowlanych widzę jednak, że brak nowoczesnego portfolio prac w sieci ogranicza pozyskiwanie lukratywnych zleceń.\n\nNowo zaprojektowana, błyskawicznie wczytująca się strona z galerią bento, certyfikatem SSL i prostym formularzem darmowej wyceny pozwoli pozyskać nawet do 35% więcej telefonów bezpośrednio od zamożnych inwestorów.\n\nCzy możemy porozmawiać o darmowym projekcie poglądowym w tym tygodniu?`,
      callScript: `[Skrypt Rozmowy Telefonicznej]\nUczestnik: Dzień dobry! Nazywam się [Twoje Imię]. Dzwonię w imieniu agencji Web & SEO, ponieważ analizowałem rynek budowlany w Białymstoku i bardzo zaimponowały mi opinie o Państwa firmie ${lead.name} (${lead.reviewsCount} świetnych ocen!). Zauważyłem, że brak nowoczesnego portfolio na Państwa obecnej witrynie uniemożliwia przekonanie dużych inwestorów. Zaprojektowałem bezpłatny, roboczy szkic nowej, szybkiej strony www dla Państwa firmy. Czy mogę podesłać go do niezobowiązującego wglądu?`,
      proposal: {
        structure: "Sekcja Hero z mocnym USP, Galeria realizacji bento grid (wysoka rozdzielczość), Czym dysponujemy (park maszynowy), Sekcja opinii Google, Formularz darmowego obmiaru i wyceny.",
        usp: "1. PageSpeed 98/100 na urządzeniach mobilnych (zdjęcia ładują się od razu), 2. Gwarancja bezpieczeństwa SSL, 3. Dynamiczny formularz zapytania o obmiar.",
        seo: `usługi budowlane Białystok, firma remontowa Białystok, ${lead.name} Białystok`,
      },
    };
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm space-y-6" id="ai-generator-panel">
      
      <div className="flex items-center gap-3 pb-4 border-b border-slate-800" id="ai-gen-header">
        <div className="p-3 bg-indigo-950/60 text-indigo-400 border border-indigo-900/40 rounded-xl">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-100">System AI Outbound i Kreacji Ofert</h2>
          <p className="text-sm text-slate-400">
            Zaimplementowany silnik oparty na modelu **Gemini 3.5-Flash**. Wybierz dowolnego klienta z listy, kąt natarcia kampanii i uzyskaj unikalne szablony.
          </p>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-3 gap-6" id="ai-generator-form">
        {/* Left Columns - Form Parameters */}
        <div className="md:col-span-1 space-y-4" id="ai-form-fields">
          
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="select-lead">
              1. Wybierz Klienta (z bazy maps):
            </label>
            <select
              id="select-lead"
              value={selectedLeadId}
              onChange={(e) => {
                setSelectedLeadId(e.target.value);
                const item = leads.find(l => l.id === e.target.value);
                if (item) {
                  setAngle(item.websiteType === "none_facebook" ? "none_facebook" : item.websiteType === "none" ? "none" : "insecure_http");
                }
              }}
              className="w-full text-sm p-3 bg-slate-955 border border-slate-800 rounded-xl text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:outline-none"
            >
              {leads.map((l) => (
                <option key={l.id} value={l.id} className="bg-slate-900">
                  {l.name} ({l.reviewsCount} opinii)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="select-angle">
              2. Kąt Natarcia Pitchu (Problem):
            </label>
            <select
              id="select-angle"
              value={angle}
              onChange={(e) => setAngle(e.target.value)}
              className="w-full text-sm p-3 bg-slate-955 border border-slate-800 rounded-xl text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:outline-none"
            >
              <option value="insecure_http" className="bg-slate-900">Brak SSL i witryna niebezpieczna HTTP</option>
              <option value="none_facebook" className="bg-slate-900">Brak strony - kierowanie tylko na Facebook</option>
              <option value="none" className="bg-slate-900">Brak strony - brak jakiejkolwiek witryny WWW</option>
              <option value="slow_wix" className="bg-slate-900">Wolne wczytywanie i przestarzały silnik WIX</option>
              <option value="local_seo" className="bg-slate-900">Lokalna dominacja pozycjonowania nad konkurencją</option>
              <option value="booking_cro" className="bg-slate-900">Eksponowane portfolio, USP i formularz bezpłatnego obmiaru (CRO)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="custom-notes">
              3. Dodatkowe Notatki / Wymagania:
            </label>
            <textarea
              id="custom-notes"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="np. Skup się na budowie domów pasywnych, darmowych wycenach stolarki, własnej flocie pojazdów, itp..."
              rows={3}
              className="w-full text-sm p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-750 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>AI pracuje...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span>Generuj Kompletny Outbound</span>
              </>
            )}
          </button>
        </div>

        {/* Right Columns - Generated Results Panel */}
        <div className="md:col-span-2 space-y-6" id="ai-gen-results-panel">
          
          {loading && (
            <div className="bg-slate-950 border border-slate-850 rounded-2xl p-12 text-center h-full flex flex-col justify-center items-center space-y-4 animate-pulse">
              <Sparkles className="w-12 h-12 text-indigo-400 animate-spin" />
              <h4 className="text-lg font-bold text-slate-200">Gemini AI Model Generuje Twój Zestaw</h4>
              <p className="text-sm text-slate-400 max-w-md">
                Nasze instrukcje systemowe uczą Gemini roli eksperta konwersji, SEO i UX dla gabinetów medycznych. Tworzymy idealnie spersonalizowane wiadomości...
              </p>
            </div>
          )}

          {error && !loading && (
            <div className="bg-amber-955/40 border border-amber-900/40 text-amber-200 rounded-2xl p-4 flex gap-3 text-sm leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Działanie w trybie bezkluczowym (Demo Mode):</span> {error}
              </div>
            </div>
          )}

          {!result && !loading && (
            <div className="border border-dashed border-slate-800 rounded-2xl p-12 text-center h-full flex flex-col justify-center items-center text-slate-500 space-y-3">
              <Layers className="w-12 h-12 text-slate-650" />
              <p className="text-sm font-semibold">Wybierz firmę i parametr z lewej strony, a następnie naciśnij Generuj.</p>
              <p className="text-xs max-w-sm">Dostaniesz krystalicznie spersonalizowane szablony SMS, Messenger, Mail, Skrypt rozmowy telefonicznej oraz plan SEO/UX stworzone specjalnie pod psychologię!</p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-6 animate-fade-in" id="ai-results-content">
              
              {/* Target Header Info */}
              <div className="bg-slate-950 p-5 rounded-2xl text-white flex flex-wrap gap-4 items-center justify-between shadow-lg border border-slate-800">
                <div>
                  <h4 className="font-mono text-xs text-indigo-400 uppercase tracking-wider font-bold">Wytworzony materiał dla:</h4>
                  <p className="text-base font-bold text-white">{selectedLead?.name}</p>
                </div>
                <div className="bg-indigo-900/40 text-indigo-200 text-[10px] font-mono px-3 py-1 rounded border border-indigo-700/50">
                  Model: GEMINI-3.5-FLASH
                </div>
              </div>

              {/* Audit Card */}
              <div className="bg-slate-955 p-5 rounded-2xl border border-slate-850 shadow-sm relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Wygenerowany mini-audyt (UX/SEO)
                  </span>
                  <button 
                    onClick={() => copyToClipboard(result.audit, "ai-audit")}
                    className="p-1 px-2.5 text-xs text-slate-400 hover:text-indigo-400 rounded bg-slate-900 border border-slate-800 flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedKey === "ai-audit" ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    Kopiuj
                  </button>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line bg-slate-905/65 p-4 rounded-xl border border-slate-850">
                  {result.audit}
                </p>
              </div>

              {/* Strongest argument card */}
              <div className="bg-red-955/45 p-5 rounded-2xl border border-red-900/40 shadow-sm relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-red-450 uppercase tracking-wider flex items-center gap-1">
                    🔥 NAJMOCNIEJSZY Haczyk Sprzedażowy (Point of Pain)
                  </span>
                  <button 
                    onClick={() => copyToClipboard(result.heroArgument, "ai-hero")}
                    className="p-1 px-2.5 text-xs text-red-400 hover:text-red-300 rounded bg-red-950 border border-red-900/40 flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedKey === "ai-hero" ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    Kopiuj
                  </button>
                </div>
                <p className="text-red-200 text-sm leading-relaxed font-semibold">
                  {result.heroArgument}
                </p>
              </div>

              {/* Outreach templates bento-grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="ai-templates-mini">
                
                {/* SMS */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-300">Wiadomość SMS</span>
                    <button onClick={() => copyToClipboard(result.sms, "ai-sms")} className="text-slate-500 hover:text-indigo-400 text-xs cursor-pointer">
                      {copiedKey === "ai-sms" ? "Skopiowano" : "Kopiuj"}
                    </button>
                  </div>
                  <p className="text-xs text-slate-405 bg-slate-900/40 border border-slate-855 p-3 rounded font-mono break-words">{result.sms}</p>
                </div>

                {/* Messenger */}
                <div className="bg-slate-955 p-4 rounded-xl border border-slate-850 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-300">Messenger DM</span>
                    <button onClick={() => copyToClipboard(result.messenger, "ai-mes")} className="text-slate-500 hover:text-indigo-400 text-xs cursor-pointer">
                      {copiedKey === "ai-mes" ? "Skopiowano" : "Kopiuj"}
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 bg-slate-900/40 border border-slate-850 p-3 rounded break-words leading-relaxed">{result.messenger}</p>
                </div>

              </div>

              {/* Full Email Subject & Body */}
              <div className="bg-slate-955 p-5 rounded-2xl border border-slate-850 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-350 uppercase tracking-wider">
                    ✉ Mail według AIDA Framework (Zoptymalizowany pod kliknięcia)
                  </span>
                  <button 
                    onClick={() => copyToClipboard(result.email, "ai-mail")}
                    className="p-1 px-2.5 text-xs text-slate-400 hover:text-indigo-400 rounded bg-slate-900 border border-slate-850 flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedKey === "ai-mail" ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    Kopiuj Mail
                  </button>
                </div>
                <div className="bg-slate-900/40 p-4 rounded-xl text-xs font-sans text-slate-300 border border-slate-850 whitespace-pre-line leading-relaxed">
                  {result.email}
                </div>
              </div>

              {/* Call Script */}
              <div className="bg-indigo-950/40 p-5 rounded-2xl border border-indigo-900/30 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1">
                    📞 Skrypt Rozmowy Telefonicznej (4 kroki wejścia)
                  </span>
                  <button 
                    onClick={() => copyToClipboard(result.callScript, "ai-phone")}
                    className="p-1 px-2.5 text-xs text-indigo-400 hover:text-indigo-300 rounded bg-indigo-900/60 flex items-center gap-1 transition-all border border-indigo-900/40 cursor-pointer"
                  >
                    {copiedKey === "ai-phone" ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    Kopiuj Skrypt
                  </button>
                </div>
                <div className="bg-indigo-955/20 p-4 rounded-xl text-xs text-slate-300 whitespace-pre-line italic leading-relaxed border border-indigo-900/10">
                  {result.callScript}
                </div>
              </div>

              {/* Proposal plan bento */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="proposal-ai-bento">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850">
                  <p className="font-bold text-xs text-indigo-300 mb-1">Struktura sekcji:</p>
                  <p className="text-xs text-slate-400">{result.proposal.structure}</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850">
                  <p className="font-bold text-xs text-indigo-300 mb-1">Propozycja USP:</p>
                  <p className="text-xs text-slate-400">{result.proposal.usp}</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850">
                  <p className="font-bold text-xs text-indigo-300 mb-1">Słowa kluczowe SEO:</p>
                  <p className="text-xs text-slate-400 font-mono">{result.proposal.seo}</p>
                </div>
              </div>

            </div>
          )}

        </div>
      </form>

    </div>
  );
}
