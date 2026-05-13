import { SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { Filters, DEFAULT_FILTERS, isDefaultFilters, BEER_STYLES } from '../types/filters';

interface FilterPanelProps {
  filters: Filters;
  onChange: (f: Filters) => void;
  onClose: () => void;
}

const IBU_PRESETS = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'low', label: 'Lekka <20' },
  { id: 'medium', label: 'Średnia 20–50' },
  { id: 'bitter', label: 'Gorzka 50–80' },
  { id: 'very-bitter', label: 'Bardzo gorzka 80+' },
] as const;

const SORT_OPTIONS = [
  { id: 'default', label: 'Domyślnie' },
  { id: 'name', label: 'Nazwa A–Z' },
  { id: 'abv-asc', label: 'ABV rosnąco' },
  { id: 'abv-desc', label: 'ABV malejąco' },
  { id: 'ibu-asc', label: 'IBU rosnąco' },
  { id: 'ibu-desc', label: 'IBU malejąco' },
  { id: 'year-asc', label: 'Rok najstarsze' },
  { id: 'year-desc', label: 'Rok najnowsze' },
] as const;

const COUNTRY_OPTIONS = [
  { id: 'all', label: '🌍 Wszystkie kraje' },
  { id: 'pl', label: '🇵🇱 Polskie' },
  { id: 'de', label: '🇩🇪 Niemieckie' },
  { id: 'be', label: '🇧🇪 Belgijskie' },
  { id: 'us', label: '🇺🇸 Amerykańskie' },
  { id: 'cz', label: '🇨🇿 Czeskie' },
  { id: 'uk', label: '🇬🇧 Brytyjskie (BrewDog)' },
  { id: 'world', label: '🌐 Reszta świata' },
] as const;

export function FilterPanel({ filters, onChange, onClose }: FilterPanelProps) {
  const clean = isDefaultFilters(filters);

  function set<K extends keyof Filters>(key: K, val: Filters[K]) {
    onChange({ ...filters, [key]: val });
  }

  return (
    <div className="bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 rounded-2xl p-4 shadow-lg space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-amber-500" />
          <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">Filtry</span>
        </div>
        <div className="flex items-center gap-2">
          {!clean && (
            <button
              onClick={() => onChange(DEFAULT_FILTERS)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Resetuj
            </button>
          )}
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Kraj */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide block">
          🌍 Kraj pochodzenia
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {COUNTRY_OPTIONS.map(c => (
            <button
              key={c.id}
              onClick={() => set('countryFilter', c.id)}
              className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                filters.countryFilter === c.id
                  ? 'bg-amber-500 text-white border-amber-500'
                  : 'bg-white dark:bg-slate-700 border-amber-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-amber-400'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Styl piwa */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide block">
          🍺 Styl piwa
        </span>
        <div className="flex gap-1.5 flex-wrap">
          <button
            onClick={() => set('styleId', 'all')}
            className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
              filters.styleId === 'all'
                ? 'bg-amber-500 text-white border-amber-500'
                : 'bg-white dark:bg-slate-700 border-amber-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-amber-400'
            }`}
          >
            Wszystkie
          </button>
          {BEER_STYLES.map(s => (
            <button
              key={s.id}
              onClick={() => set('styleId', s.id)}
              className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                filters.styleId === s.id
                  ? 'bg-amber-500 text-white border-amber-500'
                  : 'bg-white dark:bg-slate-700 border-amber-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-amber-400'
              }`}
            >
              {s.emoji} {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ABV */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
            💧 ABV (alkohol)
          </span>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
            {filters.abvMin}% – {filters.abvMax === 20 ? '20%+' : filters.abvMax + '%'}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-slate-400 mb-1 block">Min %</label>
            <input type="range" min={0} max={19} value={filters.abvMin}
              onChange={e => set('abvMin', Math.min(Number(e.target.value), filters.abvMax - 1))}
              className="w-full accent-amber-500" />
          </div>
          <div>
            <label className="text-xs text-slate-400 mb-1 block">Max %</label>
            <input type="range" min={1} max={20} value={filters.abvMax}
              onChange={e => set('abvMax', Math.max(Number(e.target.value), filters.abvMin + 1))}
              className="w-full accent-amber-500" />
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {[{ label: '<4%', min: 0, max: 4 }, { label: '4–5%', min: 4, max: 5 }, { label: '5–7%', min: 5, max: 7 }, { label: '7%+', min: 7, max: 20 }].map(p => (
            <button key={p.label}
              onClick={() => onChange({ ...filters, abvMin: p.min, abvMax: p.max })}
              className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                filters.abvMin === p.min && filters.abvMax === p.max
                  ? 'bg-amber-500 text-white border-amber-500'
                  : 'bg-white dark:bg-slate-700 border-amber-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-amber-400'
              }`}
            >{p.label}</button>
          ))}
        </div>
      </div>

      {/* IBU */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide block">
          🌿 Goryczka (IBU)
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {IBU_PRESETS.map(p => (
            <button key={p.id} onClick={() => set('ibuPreset', p.id)}
              className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                filters.ibuPreset === p.id
                  ? 'bg-amber-500 text-white border-amber-500'
                  : 'bg-white dark:bg-slate-700 border-amber-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-amber-400'
              }`}
            >{p.label}</button>
          ))}
        </div>
      </div>

      {/* Przełączniki */}
      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input type="checkbox" checked={filters.onlyRated} onChange={e => set('onlyRated', e.target.checked)} className="sr-only" />
            <div className={`w-10 h-5 rounded-full transition-colors ${filters.onlyRated ? 'bg-amber-500' : 'bg-slate-200 dark:bg-slate-600'}`}>
              <div className={`w-4 h-4 bg-white rounded-full shadow absolute top-0.5 transition-transform ${filters.onlyRated ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </div>
          </div>
          <span className="text-sm text-slate-700 dark:text-slate-300">Tylko moje ocenione piwa</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input type="checkbox" checked={filters.onlyFavorites} onChange={e => set('onlyFavorites', e.target.checked)} className="sr-only" />
            <div className={`w-10 h-5 rounded-full transition-colors ${filters.onlyFavorites ? 'bg-red-500' : 'bg-slate-200 dark:bg-slate-600'}`}>
              <div className={`w-4 h-4 bg-white rounded-full shadow absolute top-0.5 transition-transform ${filters.onlyFavorites ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </div>
          </div>
          <span className="text-sm text-slate-700 dark:text-slate-300">❤️ Tylko ulubione</span>
        </label>
      </div>

      {/* Sortowanie */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide block">
          Sortowanie
        </span>
        <select value={filters.sortBy} onChange={e => set('sortBy', e.target.value as Filters['sortBy'])}
          className="w-full text-sm border border-amber-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-400"
        >
          {SORT_OPTIONS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
        </select>
      </div>
    </div>
  );
}
