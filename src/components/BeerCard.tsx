import { Beer } from '../types/beer';
import { Droplets, Gauge, Thermometer, Star, GitCompareArrows } from 'lucide-react';
import { useBeerStore } from '../store/beerStore';

interface BeerCardProps {
  beer: Beer;
  onClick: () => void;
  isInCompare?: boolean;
  onToggleCompare?: () => void;
  compareDisabled?: boolean;
}

export function BeerCard({ beer, onClick, isInCompare, onToggleCompare, compareDisabled }: BeerCardProps) {
  const { getRatingsByBeerId } = useBeerStore();
  const ratings = getRatingsByBeerId(beer.id);
  const avgScore =
    ratings.length > 0
      ? ratings.reduce((s, r) => s + r.overallScore, 0) / ratings.length
      : null;

  const abvColor =
    beer.abv < 4 ? 'text-green-600' : beer.abv < 7 ? 'text-amber-600' : 'text-red-600';

  return (
    <div
      className={`group cursor-pointer rounded-2xl bg-white dark:bg-slate-800 border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${
        isInCompare
          ? 'border-amber-400 dark:border-amber-500 ring-2 ring-amber-300 dark:ring-amber-600'
          : 'border-amber-100 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600'
      }`}
    >
      {/* Image */}
      <div
        onClick={onClick}
        className="relative bg-gradient-to-b from-amber-50 dark:from-slate-700 to-white dark:to-slate-800 h-44 flex items-center justify-center p-4"
      >
        {beer.image_url ? (
          <img
            src={beer.image_url}
            alt={beer.name}
            className="h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '';
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="text-7xl">🍺</div>
        )}
        {avgScore !== null && (
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
            <Star className="w-3 h-3 fill-white" />
            {avgScore.toFixed(1)}
          </div>
        )}
        {ratings.length > 0 && (
          <div className="absolute top-2 left-2 bg-white dark:bg-slate-700 border border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
            {ratings.length} ocen{ratings.length === 1 ? 'a' : ratings.length < 5 ? 'y' : ''}
          </div>
        )}
      </div>

      {/* Content */}
      <div onClick={onClick} className="p-4 flex flex-col gap-2 flex-1">
        <div>
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base leading-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
            {beer.name}
          </h3>
          <p className="text-xs text-amber-600 dark:text-amber-400 italic mt-0.5">{beer.tagline}</p>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 flex-1">{beer.description}</p>

        <div className="flex items-center gap-3 pt-1 border-t border-amber-50 dark:border-slate-700">
          <div className={`flex items-center gap-1 text-xs font-bold ${abvColor}`}>
            <Droplets className="w-3.5 h-3.5" />
            {beer.abv}% ABV
          </div>
          {beer.ibu && (
            <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Gauge className="w-3.5 h-3.5" />
              {beer.ibu} IBU
            </div>
          )}
          <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 ml-auto">
            <Thermometer className="w-3.5 h-3.5" />
            {beer.first_brewed}
          </div>
        </div>
      </div>

      {/* Compare button */}
      {onToggleCompare && (
        <button
          onClick={(e) => { e.stopPropagation(); onToggleCompare(); }}
          disabled={compareDisabled && !isInCompare}
          className={`flex items-center justify-center gap-1.5 py-2 text-xs font-semibold border-t transition-colors ${
            isInCompare
              ? 'bg-amber-500 text-white border-amber-400 hover:bg-amber-600'
              : compareDisabled
              ? 'bg-slate-50 dark:bg-slate-700 text-slate-300 dark:text-slate-600 border-slate-100 dark:border-slate-600 cursor-not-allowed'
              : 'bg-amber-50 dark:bg-slate-700 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-slate-600 hover:bg-amber-100 dark:hover:bg-slate-600'
          }`}
        >
          <GitCompareArrows className="w-3.5 h-3.5" />
          {isInCompare ? 'Usuń z porównania' : 'Porównaj'}
        </button>
      )}
    </div>
  );
}
