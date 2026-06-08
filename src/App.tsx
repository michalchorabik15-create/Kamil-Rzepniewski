import React, { useState, useMemo } from "react";
import { 
  Building2, Users, FileSpreadsheet, Percent, Search, 
  MapPin, Phone, HelpCircle, CheckCircle, Flame, Filter, 
  ChevronRight, Sparkles, Send, Mail, Briefcase, TrendingUp, BookOpen, Clock
} from "lucide-react";
import { leadsData, Lead } from "./data/leads";
import LeadDetailsModal from "./components/LeadDetailsModal";
import KanbanBoard from "./components/KanbanBoard";
import AiPitchGenerator from "./components/AiPitchGenerator";
import SalesProcessWorkspace from "./components/SalesProcessWorkspace";
import BramilMockupWorkspace from "./components/BramilMockupWorkspace";

export default function App() {
  const [activeTab, setActiveTab] = useState<"leads" | "kanban" | "ai" | "guide" | "bramil-mockup">("leads");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [minReviews, setMinReviews] = useState<number>(0);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Kanban Stage State managed in local storage or initial state
  const [leadStages, setLeadStages] = useState<Record<string, string>>(() => {
    const initialStages: Record<string, string> = {};
    leadsData.forEach((lead) => {
      // Pre-position some top leads in progress to make the dashboard look highly realistic & interactive!
      if (lead.id === "swiat-zywic") initialStages[lead.id] = "phone_talk";
      else if (lead.id === "presto-house") initialStages[lead.id] = "sms_sent";
      else if (lead.id === "bramil") initialStages[lead.id] = "email_sent";
      else if (lead.id === "baginski") initialStages[lead.id] = "proposal_sent";
      else if (lead.id === "kwartet") initialStages[lead.id] = "won";
      else initialStages[lead.id] = "to_contact";
    });
    return initialStages;
  });

  const handleMoveLead = (leadId: string, targetStage: string) => {
    setLeadStages((prev) => ({
      ...prev,
      [leadId]: targetStage,
    }));
  };

  // Extract all categories for filtering
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    leadsData.forEach((lead) => {
      lead.categories.forEach((c) => cats.add(c));
    });
    return Array.from(cats);
  }, []);

  // Filter logic
  const filteredLeads = useMemo(() => {
    return leadsData.filter((lead) => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lead.phone && lead.phone.includes(searchQuery));

      const matchesCategory = 
        selectedCategory === "all" || lead.categories.includes(selectedCategory);

      const matchesType = 
        selectedType === "all" || lead.websiteType === selectedType;

      const matchesReviews = lead.reviewsCount >= minReviews;

      return matchesSearch && matchesCategory && matchesType && matchesReviews;
    });
  }, [searchQuery, selectedCategory, selectedType, minReviews]);

  // Statistics calculation
  const stats = useMemo(() => {
    const totalLeads = leadsData.length;
    const withWeb = leadsData.filter(l => l.website && !l.website.includes("facebook") && !l.website.includes("znanylekarz")).length;
    const noCustomWeb = totalLeads - withWeb;
    const avgReviews = Math.round(leadsData.reduce((acc, l) => acc + (l.reviewsCount || 0), 0) / totalLeads);
    const topLeadsCount = leadsData.filter(l => l.salesOpportunityScore >= 85).length;
    
    // Status metrics based on Kanban board
    const contactedCount = Object.values(leadStages).filter(s => s !== "to_contact").length;
    const wonCount = Object.values(leadStages).filter(s => s === "won").length;
    
    return {
      totalLeads,
      withWeb,
      noCustomWeb,
      avgReviews,
      topLeadsCount,
      contactedCount,
      wonCount
    };
  }, [leadStages]);

  const getWebsiteTypeBadge = (type: string) => {
    switch (type) {
      case "none_facebook": return { text: "Facebook jako WWW", bg: "bg-blue-950/40 text-blue-400 border-blue-900/40" };
      case "none_znanylekarz": return { text: "ZnanyLekarz", bg: "bg-emerald-950/40 text-emerald-400 border-emerald-900/40" };
      case "http_insecure": return { text: "Słaba strona: HTTP", bg: "bg-red-950/40 text-red-400 border-red-900/30" };
      case "wix": return { text: "Wolny WIX", bg: "bg-amber-950/40 text-amber-400 border-amber-900/30" };
      case "custom": return { text: "Dobra strona", bg: "bg-slate-800 text-slate-300 border-slate-750" };
      default: return { text: "Brak strony", bg: "bg-slate-900/80 text-slate-400 border-slate-800" };
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col" id="app-root">
      
      {/* Top Professional Header */}
      <header className="bg-slate-900/90 backdrop-blur border-b border-slate-800/80 sticky top-0 z-40 px-6 py-4 flex flex-wrap justify-between items-center gap-4" id="main-header">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white tracking-tight leading-none mb-1">LeadFlow.pl</h1>
            <p className="text-xs text-slate-400 font-medium">Baza leadów i automatyzacja sprzedaży Web/SEO dla branży budowlano-remontowej</p>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <nav className="flex bg-slate-950 p-1 rounded-xl border border-slate-800" id="main-navigation">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "leads"
                ? "bg-slate-800 text-white shadow-sm shadow-indigo-500/10"
                : "text-slate-400 hover:text-slate-200"
            }`}
            id="nav-lead-btn"
          >
            <FileSpreadsheet className="w-4 h-4" /> Baza Leadów (TOP 30)
          </button>
          <button
            onClick={() => setActiveTab("kanban")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "kanban"
                ? "bg-slate-800 text-white shadow-sm shadow-indigo-500/10"
                : "text-slate-400 hover:text-slate-200"
            }`}
            id="nav-kanban-btn"
          >
            <TrendingUp className="w-4 h-4" /> Lejek CRM Kanban
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "ai"
                ? "bg-slate-800 text-white shadow-sm shadow-indigo-500/10"
                : "text-slate-400 hover:text-slate-200"
            }`}
            id="nav-ai-btn"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> Kreator Pitchów AI
          </button>
          <button
            onClick={() => setActiveTab("guide")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "guide"
                ? "bg-slate-800 text-white shadow-sm shadow-indigo-500/10"
                : "text-slate-400 hover:text-slate-200"
            }`}
            id="nav-guide-btn"
          >
            <BookOpen className="w-4 h-4" /> Poradnik Sprzedawcy
          </button>
          <button
            onClick={() => setActiveTab("bramil-mockup")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "bramil-mockup"
                ? "bg-amber-950/40 text-amber-450 border border-amber-900/40 shadow-sm shadow-amber-500/15"
                : "text-slate-400 hover:text-slate-200"
            }`}
            id="nav-bramil-btn"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" /> Live Pitch: BRAMIL (100%)
          </button>
        </nav>
      </header>

      {/* Main Layout Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6" id="dashboard-main-content">
        
        {/* Tab 1: Leads Directory Grid & Dashboard */}
        {activeTab === "leads" && (
          <div className="space-y-6 animate-fade-in" id="leads-directory-tab">
            
            {/* Bento Statistics Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="bento-statistics">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg flex items-center gap-4 hover:border-indigo-500/40 transition-colors">
                <div className="p-3 bg-indigo-950/60 text-indigo-400 border border-indigo-900/40 rounded-xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-550">Przeanalizowano</p>
                  <p className="text-2xl font-black text-slate-100">{stats.totalLeads}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg flex items-center gap-4 hover:border-indigo-500/40 transition-colors">
                <div className="p-3 bg-red-950/60 text-red-500 border border-red-900/40 rounded-xl">
                  <Flame className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-550">Pilne szanse (Opportunity &gt;85)</p>
                  <p className="text-2xl font-black text-red-400">{stats.topLeadsCount}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg flex items-center gap-4 hover:border-indigo-500/40 transition-colors">
                <div className="p-3 bg-emerald-950/60 text-emerald-400 border border-emerald-900/40 rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-550">Średni przepływ (Opinie)</p>
                  <p className="text-2xl font-black text-emerald-400">{stats.avgReviews}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg flex items-center gap-4 hover:border-indigo-500/40 transition-colors">
                <div className="p-3 bg-indigo-950/30 text-indigo-300 border border-indigo-900/30 rounded-xl">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-550">Skontaktowani w Lejku</p>
                  <p className="text-2xl font-black text-indigo-400">{stats.contactedCount}</p>
                </div>
              </div>
            </div>

            {/* Explanatory Banner */}
            <div className="bg-gradient-to-tr from-slate-900 to-indigo-950 border border-slate-800 text-white rounded-3xl p-6 relative overflow-hidden shadow-lg flex flex-wrap justify-between items-center gap-6" id="intro-banner">
              <div className="space-y-2 max-w-2xl relative z-10">
                <span className="bg-indigo-900/60 border border-indigo-500/20 text-indigo-200 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Inteligentna kwalifikacja i priorytetyzacja leadów z Białegostoku
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">System Wyboru Najsilniejszych Szans Sprzedaży</h3>
                <p className="text-indigo-200/90 text-sm leading-relaxed">
                  Tradycyjna sprzedaż marnuje czas na firmy bez budżetu. Nasz algorytm automatycznie priorytetyzuje wykonawców i dostawców budowlanych, którzy <b>posiadają minimum 10 opinii</b> (co świadczy o aktywnej, udanej działalności!), ale ich strona internetowa opiera się na wolnych silnikach WIX, nie posiada szyfrowania SSL (HTTPS), lub w ogóle nie istnieje, kierując ruch wyłącznie na Facebooka.
                </p>
              </div>
              <div className="bg-indigo-950/60 p-4 rounded-2xl border border-indigo-900/60 backdrop-blur-sm self-stretch flex flex-col justify-between max-w-xs shrink-0 relative z-10" id="funnel-efficiency">
                <p className="text-xs font-mono text-indigo-300">Wskaźnik Lejka (Won / Leads):</p>
                <p className="text-3xl font-black text-white">{Math.round((stats.wonCount / stats.totalLeads) * 100)}%</p>
                <p className="text-[10px] text-indigo-200 mt-1 leading-snug">Aktualnie {stats.wonCount} zamkniętych sukcesów na nową witrynę!</p>
              </div>
              {/* Absctract visual background accent */}
              <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-indigo-800/15 to-transparent skew-x-12 opacity-50 select-none pointer-events-none" />
            </div>

            {/* Filter controls panel */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 shadow-sm space-y-4" id="filter-controls-box">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80">
                <Filter className="w-5 h-5 text-indigo-400" />
                <h4 className="text-sm font-bold text-slate-200">Ustaw Filtry Pokazu i Weryfikacji</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="filters-grid">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="search-input">Szukaj nazwy, adresu lub tel:</label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="fraza, ulica lub telefon..."
                      className="w-full text-xs p-2.5 pl-9 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="filter-issue">Status i wady strony:</label>
                  <select
                    id="filter-issue"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  >
                    <option value="all" className="bg-slate-900">Wszystkie stany strony (30)</option>
                    <option value="none_facebook" className="bg-slate-900">Brak strony - kieruje tylko na FB</option>
                    <option value="none" className="bg-slate-900">Zupełny brak własnej strony WWW</option>
                    <option value="http_insecure" className="bg-slate-900">Zagrożenie: Witryny HTTP</option>
                    <option value="wix" className="bg-slate-900">Powolny generator WIX</option>
                    <option value="custom" className="bg-slate-900">Niestandardowe zaawansowane</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" htmlFor="filter-special">Branża / Specjalizacja:</label>
                  <select
                    id="filter-special"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  >
                    <option value="all" className="bg-slate-900">Wszystkie branże</option>
                    {allCategories.map((cat, idx) => (
                      <option key={idx} value={cat} className="bg-slate-900">{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Poziom opinii (&gt;= {minReviews}):</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={minReviews}
                      onChange={(e) => setMinReviews(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                    <span className="text-xs font-mono font-bold bg-slate-950 px-2 py-1 rounded border border-slate-800 text-slate-300 leading-none">{minReviews}</span>
                  </div>
                </div>
              </div>

              {/* Reset filter button */}
              {(searchQuery || selectedCategory !== "all" || selectedType !== "all" || minReviews > 0) && (
                <div className="flex justify-end pt-1">
                  <button 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedType("all");
                      setMinReviews(0);
                    }}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 hover:underline cursor-pointer"
                  >
                    Wyczyść filtry i wyszukiwanie
                  </button>
                </div>
              )}
            </div>

            {/* Leads Table Grid View */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl overflow-hidden" id="leads-table-container">
              <div className="p-5 border-b border-slate-800/80 flex justify-between items-center" id="table-head">
                <div>
                  <h4 className="font-extrabold text-slate-200 text-sm">Lista Leadów Białystok (Zrekonstruowana z Maps)</h4>
                  <p className="text-xs text-slate-500">Dopasowana do sprzedaży nowej strony, local SEO, CRO i optymalizacji GBP.</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  Pokonano barierę: {filteredLeads.length} z {stats.totalLeads} firm wczytanych
                </span>
              </div>

              <div className="overflow-x-auto" id="table-scroll-wrapper">
                <table className="w-full text-left border-collapse" id="leads-data-table">
                  <thead>
                    <tr className="bg-slate-950/80 border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      <th className="p-4 pl-6">Nazwa Firmy / Wykonawcy</th>
                      <th className="p-4">Opinie (Rating)</th>
                      <th className="p-4">Analiza stanu strony</th>
                      <th className="p-4 text-center">Website Score</th>
                      <th className="p-4 text-center">Opportunity Score</th>
                      <th className="p-4 text-right pr-6">Akcje</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50 text-sm font-medium" id="leads-table-body">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-12 text-center text-slate-500 bg-slate-900/40">
                          Brak firm spełniających podane kryteria filtrów. Spróbuj poluzować kryteria lub zmienić szukaną frazę.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => {
                        const typeBadge = getWebsiteTypeBadge(lead.websiteType);
                        
                        // Rating stars helper
                        const isTopTen = ["swiat-zywic", "presto-house", "bramil", "baginski", "kwartet", "abc-elewacje", "puroof", "progress", "szeliga", "kresso"].includes(lead.id);

                        return (
                          <tr 
                            key={lead.id} 
                            className="hover:bg-slate-800/40 transition-colors group cursor-pointer border-b border-slate-800/20"
                            onClick={() => setSelectedLead(lead)}
                          >
                            <td className="p-4 pl-6">
                              <div className="flex gap-2.5 items-start">
                                {isTopTen && (
                                  <span className="bg-red-950/80 text-red-400 border border-red-900/40 text-[10px] font-bold px-1.5 py-0.5 rounded leading-none mt-1 shadow-sm shrink-0 uppercase" title="TOP 10 Priority">
                                    TOP 10
                                  </span>
                                )}
                                <div>
                                  <p className="font-bold text-slate-100 leading-snug group-hover:text-indigo-400 transition-colors">{lead.name}</p>
                                  <p className="text-xs text-slate-500 font-mono mt-0.5 flex items-center gap-1">
                                    📍 {lead.street} • 🏷️ {lead.categories[0]}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 whitespace-nowrap">
                              <div className="flex items-center gap-1.5">
                                <span className="text-amber-500 font-bold">★ {lead.rating || "Brak"}</span>
                                <span className="text-xs text-slate-500 font-mono">({lead.reviewsCount} opinii)</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className={`px-2 py-0.5 text-xs font-bold rounded-full border ${typeBadge.bg}`}>
                                {typeBadge.text}
                              </span>
                            </td>
                            <td className="p-4 text-center whitespace-nowrap font-mono text-xs font-bold text-slate-300">
                              {lead.websiteQualityScore}/100
                            </td>
                            <td className="p-4 text-center whitespace-nowrap font-mono">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                                lead.salesOpportunityScore >= 90 
                                  ? "bg-red-950/50 text-red-400 border-red-900/40" 
                                  : lead.salesOpportunityScore >= 80 
                                  ? "bg-amber-950/50 text-amber-400 border-amber-900/40"
                                  : "bg-indigo-950/50 text-indigo-400 border-indigo-900/40"
                              }`}>
                                {lead.salesOpportunityScore}%
                              </span>
                            </td>
                            <td className="p-4 text-right pr-6 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                              <div className="flex gap-2 justify-end">
                                <button
                                  onClick={() => setSelectedLead(lead)}
                                  className="px-3 py-1.5 text-xs font-bold text-indigo-400 hover:text-white hover:bg-slate-800 border border-slate-800 rounded-lg transition-all cursor-pointer"
                                >
                                  Audyt & Szablony
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Kanban Pipeline */}
        {activeTab === "kanban" && (
          <div className="space-y-4 animate-fade-in" id="kanban-view-tab">
            <KanbanBoard 
              leads={leadsData} 
              leadStages={leadStages} 
              onMoveLead={handleMoveLead}
              onSelectLead={setSelectedLead}
            />
          </div>
        )}

        {/* Tab 3: AI Campaign Builder */}
        {activeTab === "ai" && (
          <div className="space-y-4 animate-fade-in" id="ai-builder-tab">
            <AiPitchGenerator leads={leadsData} />
          </div>
        )}
        {activeTab === "guide" && (
          <SalesProcessWorkspace 
            onSelectLeadFromGuide={(lead) => {
              setSelectedLead(lead);
            }} 
          />
        )}
        {activeTab === "bramil-mockup" && (
          <BramilMockupWorkspace />
        )}

      </main>

      {/* Footer copyright */}
      <footer className="bg-slate-900/40 border-t border-slate-800/80 mt-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-slate-500" id="main-footer">
        <span>© 2026 LeadFlow.pl • Wszystkie prawa zastrzeżone</span>
        <span>Ekspercki system analizy leadów z Google Maps</span>
      </footer>

      {/* Detailed Modal Overlay */}
      {selectedLead && (
        <LeadDetailsModal 
          lead={selectedLead} 
          onClose={() => setSelectedLead(null)} 
        />
      )}

    </div>
  );
}
