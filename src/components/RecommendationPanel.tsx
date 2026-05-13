import { useState } from 'react';
import { Sparkles, ChevronRight, X, Info } from 'lucide-react';
import { useRecommendations } from '../hooks/useRecommendations';
import { useBeerStore } from '../store/beerStore';
import { Beer } from '../types/beer';

interface RecommendationPanelProps {
  onSelectBeer: (beer: Beer) => void;
}

export function RecommendationPanel({ onSelectBeer }: RecommendationPanelProps) {
  const recs = useRecommendations(5);
  const { ratings } = useBeerStore();
  const [dismissed, setDismissed] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Nie pokazuj jeśli za mało ocen lub ukryto panel
  if (dismissed) return null;
  if (ratings.length < 2) return null;
  if (recs.length === 0) return null;

  return (
    <div className="mb-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-4 shadow-lg border border-slate-700">
      {/* Nagłówek */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 rounded-lg p-1.5">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-white text-sm">Dla Ciebie</h2>
            <p className="text-slate-400 text-xs">Na podstawie Twoich {ratings.filter(r => r.overallScore >= 4).length} polubionych piw</p>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-500 hover:text-slate-300 transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Lista rekomendacji */}
      <div className="space-y-2">
        {recs.map(({ beer, reasons }) => (
          <div
            key={beer.id}
            className="relative flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl px-3 py-2.5 cursor-pointer transition-colors group"
            onClick={() => onSelectBeer(beer)}
            onMouseEnter={() => setHoveredId(beer.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Miniaturka */}
            <div className="w-10 h-10 flex-shrink-0 bg-amber-900/30 rounded-lg flex items-center justify-center overflow-hidden">
              {beer.image_url ? (
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  className="w-full h-full object-contain p-1"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              ) : (
                <span className="text-xl">🍺</span>
              )}
            </div>

            {/* Tekst */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate">{beer.name}</p>
              <p className="text-slate-400 text-xs truncate">{beer.tagline}</p>
            </div>

            {/* ABV badge */}
            <span className="text-xs font-bold text-amber-400 bg-amber-900/40 px-2 py-0.5 rounded-full flex-shrink-0">
              {beer.abv}%
            </span>

            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors flex-shrink-0" />

            {/* Tooltip z powodami — pojawia się po najechaniu */}
            {hoveredId === beer.id && reasons.length > 0 && (
              <div className="absolute left-0 bottom-full mb-2 z-10 bg-slate-700 rounded-xl p-3 shadow-xl border border-slate-600 min-w-[200px]">
                <div className="flex items-center gap-1.5 mb-2">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400">Dlaczego?</span>
                </div>
                <ul className="space-y-1">
                  {reasons.map((r, i) => (
                    <li key={i} className="text-xs text-slate-300">{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-600 mt-3 text-center">
        Oceń więcej piw → lepsze rekomendacje
      </p>
    </div>
  );
}
