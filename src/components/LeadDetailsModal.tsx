import React, { useState } from "react";
import { X, Copy, Shield, Globe, Award, Sparkles, MessageSquare, Mail, Phone, FileText, CheckCircle, Flame } from "lucide-react";
import { Lead } from "../data/leads";

interface LeadDetailsModalProps {
  lead: Lead;
  onClose: () => void;
  onModifyLead?: (updatedLead: Lead) => void;
}

export default function LeadDetailsModal({ lead, onClose, onModifyLead }: LeadDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<"audit" | "outreach" | "proposal">("audit");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const getWebsiteTypeLabel = (type: string) => {
    switch (type) {
      case "none_facebook": return { text: "Profil Facebook zamiast strony", color: "bg-blue-950/40 text-blue-400 border-blue-900/30" };
      case "none": return { text: "Zupełny brak własnej strony WWW", color: "bg-emerald-955/40 text-emerald-450 border-emerald-900/30" };
      case "http_insecure": return { text: "Witryna niebezpieczna HTTP", color: "bg-red-955/40 text-red-400 border-red-900/30" };
      case "wix": return { text: "Witryna na wolnym silniku WIX", color: "bg-amber-955/40 text-amber-450 border-amber-900/35" };
      case "custom": return { text: "Niestandardowa strona WWW", color: "bg-slate-950/50 text-slate-300 border-slate-800" };
      default: return { text: "Brak strony WWW", color: "bg-slate-950/50 text-slate-400 border-slate-800" };
    }
  };

  const typeConfig = getWebsiteTypeLabel(lead.websiteType);

  // Return background intensity based on opportunity score
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-red-400 bg-red-955/30 border-red-900/40";
    if (score >= 80) return "text-orange-400 bg-orange-955/30 border-orange-900/40";
    return "text-indigo-400 bg-indigo-955/30 border-indigo-900/40";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fade-in" id="lead-details-modal">
      <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex flex-col max-h-[90vh] overflow-hidden" id="modal-container">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-805 flex justify-between items-start bg-slate-950/40" id="modal-header">
          <div>
            <div className="flex flex-wrap gap-2 items-center mb-2">
              <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${typeConfig.color}`}>
                {typeConfig.text}
              </span>
              {lead.rating && (
                <span className="bg-amber-950/45 text-amber-400 border border-amber-900/35 px-2.5 py-0.5 text-xs font-semibold rounded-full flex items-center gap-1">
                  ★ {lead.rating} ({lead.reviewsCount} opinii)
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-slate-100 leading-tight mb-1" id="lead-modal-title">{lead.name}</h2>
            <p className="text-sm text-slate-400 font-mono flex items-center gap-1">
              📍 {lead.street}, {lead.city} • 📞 {lead.phone || "Brak telefonu"}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-slate-400 hover:text-slate-200 bg-slate-950 rounded-full border border-slate-800 shadow-sm transition-colors cursor-pointer"
            aria-label="Zamknij"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scores Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-800 bg-slate-950/20" id="scores-grid">
          <div className="p-4 border-r border-slate-805 flex items-center gap-3">
            <div className={`p-3 rounded-xl border font-bold text-xl ${getScoreColor(lead.salesOpportunityScore)}`}>
              {lead.salesOpportunityScore}%
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Szansa Sprzedaży</p>
              <p className="text-sm font-semibold text-slate-300">Sales Opportunity Score</p>
            </div>
          </div>
          <div className="p-4 border-r border-slate-805 flex items-center gap-3">
            <div className="p-3 rounded-xl border font-bold text-xl text-amber-400 bg-amber-955/30 border-amber-900/35">
              {lead.websiteQualityScore}/100
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jakość Strony WWW</p>
              <p className="text-sm font-semibold text-slate-300">Website Quality Score</p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <div className="p-3 rounded-xl border font-bold text-xl text-emerald-400 bg-emerald-955/30 border-emerald-900/35">
              {lead.businessPotentialScore}/100
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Potencjał Biznesowy</p>
              <p className="text-sm font-semibold text-slate-300">Business Potential Score</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigator */}
        <div className="flex border-b border-slate-800 bg-slate-900 px-6 py-2 gap-4" id="modal-tabs">
          <button
            onClick={() => setActiveTab("audit")}
            className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "audit"
                ? "border-indigo-550 text-indigo-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
            id="tab-audit-btn"
          >
            <Shield className="w-4 h-4" /> Audyt UX & SEO
          </button>
          <button
            onClick={() => setActiveTab("outreach")}
            className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "outreach"
                ? "border-indigo-550 text-indigo-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
            id="tab-outreach-btn"
          >
            <Sparkles className="w-4 h-4" /> Spersonalizowany Outbound
          </button>
          <button
            onClick={() => setActiveTab("proposal")}
            className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "proposal"
                ? "border-indigo-550 text-indigo-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
            id="tab-proposal-btn"
          >
            <FileText className="w-4 h-4" /> Szkic Nowej Strony
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-slate-950/30" id="modal-tab-content">
          
          {/* TAB 1: AUDIT */}
          {activeTab === "audit" && (
            <div className="space-y-6 animate-fade-in" id="content-audit">
              
              {/* Strongest sales argument */}
              {lead.audit?.strongestArgument && (
                <div className="bg-red-955/30 border-l-4 border-red-500 p-4 rounded-r-xl" id="strongest-arg-box">
                  <div className="flex items-center gap-2 text-red-300 font-bold mb-1">
                    <Flame className="w-5 h-5 text-red-500 shrink-0" />
                    <span>NAJMOCNIEJSZY ARGUMENT SPRZEDAŻOWY (BÓL KLIENTA):</span>
                  </div>
                  <p className="text-red-200 text-sm leading-relaxed font-semibold">
                    {lead.audit.strongestArgument}
                  </p>
                </div>
              )}

              {/* Technical Audit Summary */}
              <div>
                <h3 className="text-base font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-indigo-400" /> Podsumowanie Audytu Technicznego
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-sm">
                  {lead.audit?.auditSummary || "Ten lead zakwalifikowany jest jako pilny kontakt. Strona www wykazuje poważne wady techniczne (przestarzały layout, brak SSL lub brak własnej domeny i oparcie biznesu o portale społecznościowe), co marnuje potencjał napływu klientów szukających rzetelnego wykonawcy w Białymstoku."}
                </p>
              </div>

              {/* Sub-scores metrics indicators */}
              {lead.audit && (
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3" id="subscores-radar">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Wygląd</p>
                    <p className="text-lg font-bold text-slate-200">{lead.audit.visualScore}/100</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">UX/UI</p>
                    <p className="text-lg font-bold text-slate-200">{lead.audit.uxScore}/100</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Mobilność</p>
                    <p className="text-lg font-bold text-slate-200">{lead.audit.mobileScore}/100</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">SEO Lokalne</p>
                    <p className="text-lg font-bold text-slate-200">{lead.audit.seoScore}/100</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Konwersja</p>
                    <p className="text-lg font-bold text-slate-200">{lead.audit.croScore}/100</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Zaufanie</p>
                    <p className="text-lg font-bold text-slate-200">{lead.audit.trustScore}/100</p>
                  </div>
                </div>
              )}

              {/* Biggest Problems list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="problems-recommendations-grid">
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
                  <h4 className="text-sm font-bold text-red-405 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    ❌ Największe Problemy Strony
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {lead.audit?.biggestProblems.map((prob, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-red-400 font-bold">•</span>
                        <span>{prob}</span>
                      </li>
                    )) || (
                      <>
                        <li className="flex gap-2 items-start"><span className="text-red-400 font-bold">•</span> Brak HTTPS (bezpiecznego kłódkowania SSL) co zniechęca pacjentów do kontaktu.</li>
                        <li className="flex gap-2 items-start"><span className="text-red-400 font-bold">•</span> Powolny i staromodny system szablonowy uniemożliwiający przeglądanie oferty na komórce.</li>
                        <li className="flex gap-2 items-start"><span className="text-red-400 font-bold">•</span> Uzależnienie od zewnętrznych portali (ZnanyLekarz / Facebook) zamiast własnego kanału.</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
                  <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    💡 3 Rekomendacje Ulepszeń
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {lead.audit?.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="bg-emerald-950 text-emerald-400 border border-emerald-900/40 p-0.5 rounded-full text-xs font-bold leading-none shrink-0 w-5 h-5 flex items-center justify-center">{idx + 1}</span>
                        <span>{rec}</span>
                      </li>
                    )) || (
                      <>
                        <li className="flex gap-2 items-start"><span className="bg-emerald-950 text-emerald-400 border border-emerald-900/40 p-0.5 rounded-full text-xs font-bold leading-none shrink-0 w-5 h-5 flex items-center justify-center">1</span> Wdrożenie szybkiego wczytywania (PageSpeed &gt; 90) za pomocą technologii React.</li>
                        <li className="flex gap-2 items-start"><span className="bg-emerald-950 text-emerald-400 border border-emerald-900/40 p-0.5 rounded-full text-xs font-bold leading-none shrink-0 w-5 h-5 flex items-center justify-center">2</span> Zaprojektowanie bezpiecznego formularza chroniącego prywatność pacjentów.</li>
                        <li className="flex gap-2 items-start"><span className="bg-emerald-950 text-emerald-400 border border-emerald-900/40 p-0.5 rounded-full text-xs font-bold leading-none shrink-0 w-5 h-5 flex items-center justify-center">3</span> Uruchomienie lokalnego pozycjonowania (Local SEO) w celu uniezależnienia od prowizji portali pośredniczących.</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-4 pt-2 justify-end" id="audit-quick-links">
                <a 
                  href={lead.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-slate-100 bg-slate-900 border border-slate-800 rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" /> Zobacz w Google Maps
                </a>
                {lead.website && !lead.website.includes("facebook") && !lead.website.includes("znanylekarz") && (
                  <a 
                    href={lead.website} 
                    target="_blank" 
                    rel="no-referrer" 
                    className="px-4 py-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 bg-indigo-950/40 border border-indigo-900/40 rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-1.5"
                  >
                    🔍 Sprawdź obecną stronę WWW
                  </a>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: SPERSALIZOWANY OUTBOUND */}
          {activeTab === "outreach" && (
            <div className="space-y-6 animate-fade-in" id="content-outreach">
              
              {!lead.pitches ? (
                <div className="bg-amber-955/30 border border-amber-900/35 p-6 rounded-xl text-center" id="no-pitches-warning">
                  <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <p className="text-amber-200 font-bold mb-1">Brak gotowych szablonów dla tej pozycji</p>
                  <p className="text-amber-400 text-sm max-w-lg mx-auto">
                    Ta firma znajduje się w TOP 30, ale poza pierwszymi TOP 10. Możesz skorzystać z zakładki **Generator Kampanii AI** u góry pulpitu, aby natychmiast wygenerować dla niej kompletny, dopasowany zestaw skryptów z pomocą sztucznej inteligencji Gemini!
                  </p>
                </div>
              ) : (
                <div className="space-y-6" id="pitches-list">
                  
                  {/* SMS */}
                  <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm relative group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-sky-400" /> WIADOMOŚĆ SMS (Zwięzły haczyk)
                      </span>
                      <button 
                        onClick={() => copyToClipboard(lead.pitches!.sms, "sms")}
                        className="p-1 px-2.5 text-xs text-slate-400 hover:text-indigo-400 bg-slate-950 border border-slate-800 rounded flex items-center gap-1 transition-all cursor-pointer"
                      >
                        {copiedKey === "sms" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedKey === "sms" ? "Skopiowano!" : "Kopiuj"}
                      </button>
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-xl text-sm font-mono text-slate-350 border border-slate-850 max-h-[140px] overflow-y-auto">
                      {lead.pitches.sms}
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 font-mono text-right">Liczba znaków: {lead.pitches.sms.length} / Idealna do wysyłki bezpośredniej</p>
                  </div>

                  {/* MESSENGER */}
                  <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm relative group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-blue-400" /> WIADOMOŚĆ MESSENGER / DM SOCIAL MEDIA
                      </span>
                      <button 
                        onClick={() => copyToClipboard(lead.pitches!.messenger, "messenger")}
                        className="p-1 px-2.5 text-xs text-slate-400 hover:text-indigo-400 bg-slate-950 border border-slate-800 rounded flex items-center gap-1 transition-all cursor-pointer"
                      >
                        {copiedKey === "messenger" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedKey === "messenger" ? "Skopiowano!" : "Kopiuj"}
                      </button>
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-xl text-sm text-slate-300 border border-slate-850 whitespace-pre-line leading-relaxed">
                      {lead.pitches.messenger}
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm relative group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <Mail className="w-4 h-4 text-indigo-400" /> WIADOMOŚĆ EMAIL (Metodologia AIDA)
                      </span>
                      <button 
                        onClick={() => copyToClipboard(`Temat: ${lead.pitches!.emailSubject}\n\n${lead.pitches!.emailBody}`, "email")}
                        className="p-1 px-2.5 text-xs text-slate-400 hover:text-indigo-400 bg-slate-950 border border-slate-800 rounded flex items-center gap-1 transition-all cursor-pointer"
                      >
                        {copiedKey === "email" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedKey === "email" ? "Skopiowano!" : "Kopiuj Temat i Treść"}
                      </button>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl text-sm text-slate-300 border border-slate-850">
                      <p className="font-bold pb-2 border-b border-slate-800 mb-2 font-mono text-indigo-300">
                        <span className="text-slate-500">Temat:</span> {lead.pitches.emailSubject}
                      </p>
                      <div className="whitespace-pre-line leading-relaxed font-sans">{lead.pitches.emailBody}</div>
                    </div>
                  </div>

                  {/* TELEPHONE SCRIPT */}
                  <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm relative group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-emerald-450" /> SKRYPT SPRAWDZONEJ ROZMOWY TELEFONICZNEJ
                      </span>
                      <button 
                        onClick={() => copyToClipboard(lead.pitches!.callScript, "phone")}
                        className="p-1 px-2.5 text-xs text-slate-400 hover:text-indigo-400 bg-slate-950 border border-slate-800 rounded flex items-center gap-1 transition-all cursor-pointer"
                      >
                        {copiedKey === "phone" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedKey === "phone" ? "Skopiowano!" : "Kopiuj"}
                      </button>
                    </div>
                    <div className="bg-indigo-950/20 p-4 rounded-xl text-sm text-slate-300 border border-indigo-900/30 whitespace-pre-line leading-relaxed italic">
                      {lead.pitches.callScript}
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* TAB 3: PROPOSAL */}
          {activeTab === "proposal" && (
            <div className="space-y-6 animate-fade-in" id="content-proposal">
              
              {!lead.proposal ? (
                <div className="bg-amber-955/35 border border-amber-900/35 p-6 rounded-xl text-center" id="no-proposal-warning">
                  <FileText className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <p className="text-amber-200 font-bold mb-1">Brak gotowej architektury strony dla tej pozycji</p>
                  <p className="text-amber-400 text-sm max-w-lg mx-auto">
                    Skorzystaj z **Generatora Kampanii AI** zintegrowanego z modelem Gemini, aby w kilka sekund wygenerować spersonalizowaną strukturę sekcji, lokalne słowa kluczowe SEO oraz propozycję unikalnej obietnicy (USP) dla tej firmy!
                  </p>
                </div>
              ) : (
                <div className="space-y-6" id="proposal-wrapper">

                  <div className="bg-gradient-to-r from-indigo-950/40 to-slate-900 p-5 rounded-2xl border border-indigo-900/30 flex flex-wrap gap-4 items-center">
                    <div className="bg-indigo-600 text-white p-3 rounded-full">
                      <Sparkles className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-100 mb-0.5">Koncepcja Nowej Strony dla {lead.name}</h4>
                      <p className="text-sm text-slate-400">Strona zorientowana na budowę zaufania i maksymalny współczynnik zapisów (CRO).</p>
                    </div>
                  </div>

                  {/* Sections list & structure */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="structure-grid">
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
                      <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-1.5">
                        🧱 Struktura Strony Głównej
                      </h4>
                      <div className="space-y-2">
                        {lead.proposal.structure.map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-center p-2.5 bg-slate-950 rounded-lg border border-slate-850 text-sm font-semibold text-slate-300">
                            <span className="bg-slate-900 text-slate-400 border border-slate-800 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 font-bold">
                              {idx + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sections & Features */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                          🎯 Sugerowane Sekcje & Przewagi
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {lead.proposal.sections.map((sec, idx) => (
                            <span key={idx} className="bg-indigo-950/50 text-indigo-400 text-xs px-2.5 py-1 rounded-full font-medium border border-indigo-900/30">
                              {sec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-805">
                        <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-1.5">
                          📣 Proponowane Główne CTA (Wezwania do działania)
                        </h4>
                        <div className="space-y-2">
                          {lead.proposal.cta.map((ctaText, idx) => (
                            <div key={idx} className="flex gap-2 items-center text-sm text-slate-300 font-medium bg-slate-950 p-2 rounded border border-slate-850">
                              <span className="text-indigo-400">➔</span>
                              <span>{ctaText}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* USP & Local SEO Keys checklist */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="usp-seo-grid">
                    
                    {/* Unique Selling Prop USP */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
                      <h4 className="text-sm font-bold text-indigo-405 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        💎 3 Filary Propozycji USP (Wyróżniki Marki):
                      </h4>
                      <div className="space-y-3 text-sm text-slate-300">
                        {lead.proposal.usp.map((uspStr, idx) => (
                          <div key={idx} className="flex gap-2 items-start bg-indigo-955/15 p-3 rounded-lg border border-indigo-900/20">
                            <span className="text-indigo-400 font-bold text-base shrink-0">✓</span>
                            <span className="font-semibold text-indigo-200">{uspStr}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SEO focus terms */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
                      <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        📈 Sugerowane Frazy pod Lokalne SEO:
                      </h4>
                      <div className="space-y-2">
                        {lead.proposal.seo.map((tag, idx) => (
                          <div key={idx} className="flex gap-3 items-center p-2.5 bg-emerald-955/15 rounded-lg border border-emerald-900/20 text-sm font-mono text-emerald-300">
                            <span className="bg-emerald-500/80 text-white rounded w-5 h-5 flex items-center justify-center text-xs shrink-0 font-bold font-sans">#</span>
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-slate-450 text-xs mt-3 leading-relaxed">
                        Dokładnie takie sformułowania wpisują w Google zainteresowani inwestorzy i firmy budujące domy w Białymstoku. Wdrożenie tych fraz w strukturę nagłówków H1-H3 na nowej witrynie znacznie przyspieszy ranking organiczny na 1. stronę Google.
                      </p>
                    </div>

                  </div>

                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/50 border-t border-slate-850 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-slate-400" id="modal-footer">
          <span>Target Market: Białystok, PL • Kategoria: {lead.categories.join(", ")}</span>
          <span>Status CRM: Wersja poglądowa • Opcja zapisu i edycji aktywna</span>
        </div>

      </div>
    </div>
  );
}
