import React from "react";
import { Lead } from "../data/leads";
import { ArrowRight, ArrowLeft, Send, CheckCircle2, PhoneCall, Mail, MessageSquare } from "lucide-react";

interface KanbanBoardProps {
  leads: Lead[];
  leadStages: Record<string, string>;
  onMoveLead: (leadId: string, targetStage: string) => void;
  onSelectLead: (lead: Lead) => void;
}

const STAGES = [
  { id: "to_contact", title: "Do kontaktu", color: "bg-slate-900 text-slate-400 border-slate-850", icon: MessageSquare },
  { id: "sms_sent", title: "Wysłany SMS", color: "bg-sky-950/30 text-sky-400 border-sky-900/30", icon: MessageSquare },
  { id: "email_sent", title: "Wysłany Email", color: "bg-indigo-950/30 text-indigo-400 border-indigo-900/30", icon: Mail },
  { id: "phone_talk", title: "Rozmowa Tel.", color: "bg-amber-950/30 text-amber-500 border-amber-900/30", icon: PhoneCall },
  { id: "proposal_sent", title: "Wysłana Oferta", color: "bg-pink-950/30 text-pink-400 border-pink-900/30", icon: Send },
  { id: "won", title: "Wygrana / Sukces", color: "bg-emerald-950/30 text-emerald-400 border-emerald-900/30", icon: CheckCircle2 },
];

export default function KanbanBoard({ leads, leadStages, onMoveLead, onSelectLead }: KanbanBoardProps) {
  
  const getStageLeads = (stageId: string) => {
    return leads.filter((lead) => {
      const currentStage = leadStages[lead.id] || "to_contact";
      return currentStage === stageId;
    });
  };

  const moveNext = (leadId: string, currentStageId: string) => {
    const currentIndex = STAGES.findIndex((s) => s.id === currentStageId);
    if (currentIndex < STAGES.length - 1) {
      onMoveLead(leadId, STAGES[currentIndex + 1].id);
    }
  };

  const movePrev = (leadId: string, currentStageId: string) => {
    const currentIndex = STAGES.findIndex((s) => s.id === currentStageId);
    if (currentIndex > 0) {
      onMoveLead(leadId, STAGES[currentIndex - 1].id);
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4" id="kanban-board-panel">
      
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800" id="kanban-pills-info">
        <h3 className="text-sm font-bold text-slate-100 mb-1">Interactive Pipeline Manager</h3>
        <p className="text-xs text-slate-400">
          Użyj strzałek na kartach leadów, aby przenieść je do kolejnego etapu leja sprzedażowego. Kliknij kartę, aby otworzyć pełne audyty i gotowe szablony outbound.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-start overflow-x-auto pb-4" id="kanban-columns-container">
        {STAGES.map((stage) => {
          const stageLeads = getStageLeads(stage.id);
          const Icon = stage.icon;

          return (
            <div key={stage.id} className="bg-slate-900/40 rounded-xl p-3 border border-slate-800 flex flex-col min-h-[500px]" id={`kanban-col-${stage.id}`}>
              {/* Column Header */}
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-200 truncate">{stage.title}</span>
                </div>
                <span className="bg-slate-950 text-[10px] font-bold text-slate-400 px-1.5 py-0.5 rounded-full border border-slate-800 shadow-sm shrink-0">
                  {stageLeads.length}
                </span>
              </div>

              {/* Column Leads */}
              <div className="space-y-3 flex-1 overflow-y-auto max-h-[600px] pr-1" id={`lead-cards-col-wrap-${stage.id}`}>
                {stageLeads.length === 0 ? (
                  <div className="text-center py-8 text-slate-600 border border-dashed border-slate-850 rounded-lg text-xs" id={`col-empty-${stage.id}`}>
                    Brak leadów
                  </div>
                ) : (
                  stageLeads.map((lead) => {
                    const currentStageId = leadStages[lead.id] || "to_contact";
                    const isFirst = currentStageId === "to_contact";
                    const isLast = currentStageId === "won";

                    return (
                      <div 
                        key={lead.id} 
                        className="bg-slate-900 p-3 rounded-xl border border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all group"
                        id={`kanban-card-${lead.id}`}
                      >
                        {/* Name & Type */}
                        <div 
                          onClick={() => onSelectLead(lead)}
                          className="cursor-pointer"
                        >
                          <h4 className="text-xs font-bold text-slate-200 line-clamp-2 leading-snug group-hover:text-indigo-450 transition-colors">
                            {lead.name}
                          </h4>
                          
                          <div className="flex items-center justify-between mt-2.5">
                            <span className="text-[10px] bg-slate-950 border border-slate-850 font-mono text-slate-400 px-1.5 py-0.5 rounded">
                              ★ {lead.rating || "Brak"}
                            </span>
                            <span className="text-[10px] font-bold text-red-400 bg-red-950/40 border border-red-900/40 px-1.5 py-0.5 rounded">
                              {lead.salesOpportunityScore}% opportunity
                            </span>
                          </div>
                        </div>

                        {/* Actions control */}
                        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-850">
                          <button
                            disabled={isFirst}
                            onClick={() => movePrev(lead.id, currentStageId)}
                            className={`p-1 rounded text-slate-500 hover:text-slate-200 hover:bg-slate-800 ${isFirst ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
                            title="Przenieś wstecz"
                          >
                            <ArrowLeft className="w-3 h-3" />
                          </button>

                          <button 
                            onClick={() => onSelectLead(lead)}
                            className="text-[10px] text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                          >
                            Wyświetl szablony
                          </button>

                          <button
                            disabled={isLast}
                            onClick={() => moveNext(lead.id, currentStageId)}
                            className={`p-1 rounded text-slate-500 hover:text-slate-200 hover:bg-slate-800 ${isLast ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
                            title="Przenieś dalej"
                          >
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
