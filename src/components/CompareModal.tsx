import { X, Droplets, FlaskConical, Thermometer, Star } from 'lucide-react';
import { Beer } from '../types/beer';
import { useBeerStore } from '../store/beerStore';

interface CompareModalProps {
  beers: [Beer, Beer];
  onClose: () => void;
}

function getBrewYear(firstBrewed: string): string {
  const match = firstBrewed.match(/\d{4}/);
  return match ? match[0] : firstBrewed;
}

function StatRow({
  label,
  a,
  b,
  unit = '',
  higherIsBetter = true,
}: {
  label: string;
  a: number | null;
  b: number | null;
  unit?: string;
  higherIsBetter?: boolean;
}) {
  const hasA = a !== null;
  const hasB = b !== null;
  const aWins = hasA && hasB && (higherIsBetter ? a > b : a < b);
  const bWins = hasA && hasB && (higherIsBetter ? b > a : b < a);

  return (
    <tr className="border-b border-slate-100 dark:border-slate-700 last:border-0">
      <td className={`py-2.5 pr-2 text-right text-sm font-semibold ${aWins ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
        {hasA ? `${a}${unit}` : '—'}
        {aWins && <span className="ml-1 text-xs">✓</span>}
      </td>
      <td className="py-2.5 px-3 text-center text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide whitespace-nowrap">
        {label}
      </td>
      <td className={`py-2.5 pl-2 text-left text-sm font-semibold ${bWins ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
        {bWins && <span className="mr-1 text-xs">✓</span>}
        {hasB ? `${b}${unit}` : '—'}
      </td>
    </tr>
  );
}

export function CompareModal({ beers, onClose }: CompareModalProps) {
  const { getRatingsByBeerId } = useBeerStore();
  const [beerA, beerB] = beers;

  const ratingsA = getRatingsByBeerId(beerA.id);
  const ratingsB = getRatingsByBeerId(beerB.id);
  const avgA = ratingsA.length > 0 ? ratingsA.reduce((s, r) => s + r.overallScore, 0) / ratingsA.length : null;
  const avgB = ratingsB.length > 0 ? ratingsB.reduce((s, r) => s + r.overallScore, 0) / ratingsB.length : null;

  const abvColorA = beerA.abv < 4 ? 'text-green-600' : beerA.abv < 7 ? 'text-amber-600' : 'text-red-600';
  const abvColorB = beerB.abv < 4 ? 'text-green-600' : beerB.abv < 7 ? 'text-amber-600' : 'text-red-600';

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full sm:max-w-2xl max-h-[95vh] sm:rounded-3xl rounded-t-3xl flex flex-col overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
          <h2 className="font-black text-lg text-slate-800 dark:text-slate-100">Porównanie piw</h2>
          <button
            onClick={onClose}
            className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full p-1.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-6">

          {/* Beer headers */}
          <div className="grid grid-cols-2 gap-4">
            {[beerA, beerB].map((beer, i) => (
              <div key={beer.id} className="bg-gradient-to-b from-amber-50 dark:from-amber-900/20 to-white dark:to-slate-800 border border-amber-100 dark:border-slate-700 rounded-2xl p-4 text-center">
                <div className="h-24 flex items-center justify-center mb-3">
                  {beer.image_url ? (
                    <img src={beer.image_url} alt={beer.name} className="h-full object-contain drop-shadow-md" />
                  ) : (
                    <span className="text-5xl">🍺</span>
                  )}
                </div>
                <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100 leading-tight">{beer.name}</h3>
                <p className="text-xs text-amber-600 dark:text-amber-400 italic mt-0.5 line-clamp-1">{beer.tagline}</p>
                {(i === 0 ? avgA : avgB) !== null && (
                  <div className="mt-2 flex items-center justify-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {(i === 0 ? avgA : avgB)!.toFixed(1)} / 5
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats table */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-100 dark:border-slate-700">
                  <td className="py-2.5 pr-2 text-right">
                    <span className={`text-sm font-bold ${abvColorA}`}>{beerA.abv}%</span>
                  </td>
                  <td className="py-2.5 px-3 text-center text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">
                    <span className="flex items-center justify-center gap-1"><Droplets className="w-3 h-3" />ABV</span>
                  </td>
                  <td className="py-2.5 pl-2 text-left">
                    <span className={`text-sm font-bold ${abvColorB}`}>{beerB.abv}%</span>
                  </td>
                </tr>
                <StatRow label="IBU goryczka" a={beerA.ibu} b={beerB.ibu} unit=" IBU" higherIsBetter={false} />
                <StatRow label="Rok warki" a={Number(getBrewYear(beerA.first_brewed))} b={Number(getBrewYear(beerB.first_brewed))} higherIsBetter={false} />
                <StatRow label="pH" a={beerA.ph} b={beerB.ph} unit="" higherIsBetter={false} />
                <StatRow label="EBC kolor" a={beerA.ebc} b={beerB.ebc} unit="" higherIsBetter={false} />
                <StatRow label="Obj. fermentacji °C" a={beerA.method?.fermentation?.temp?.value ?? null} b={beerB.method?.fermentation?.temp?.value ?? null} unit="°C" />
                {(avgA !== null || avgB !== null) && (
                  <StatRow label="Moja ocena ★" a={avgA} b={avgB} unit="/5" />
                )}
              </tbody>
            </table>
          </div>

          {/* Ingredients comparison */}
          <div className="grid grid-cols-2 gap-3">
            {[beerA, beerB].map(beer => (
              <div key={beer.id} className="space-y-3">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
                  <p className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1 mb-2">
                    <FlaskConical className="w-3 h-3" /> Słody
                  </p>
                  <ul className="space-y-0.5">
                    {beer.ingredients.malt.slice(0, 4).map(m => (
                      <li key={m.name} className="text-xs text-slate-600 dark:text-slate-400 truncate">• {m.name}</li>
                    ))}
                    {beer.ingredients.malt.length > 4 && (
                      <li className="text-xs text-slate-400">+{beer.ingredients.malt.length - 4} więcej</li>
                    )}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3">
                  <p className="text-xs font-bold text-green-800 dark:text-green-300 flex items-center gap-1 mb-2">
                    <Thermometer className="w-3 h-3" /> Chmiele
                  </p>
                  <ul className="space-y-0.5">
                    {[...new Set(beer.ingredients.hops.map(h => h.name))].slice(0, 4).map(name => (
                      <li key={name} className="text-xs text-slate-600 dark:text-slate-400 truncate">• {name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Food pairing */}
          <div className="grid grid-cols-2 gap-3">
            {[beerA, beerB].map(beer => (
              <div key={beer.id} className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-3">
                <p className="text-xs font-bold text-orange-800 dark:text-orange-300 mb-2">🍽 Do jedzenia</p>
                {beer.food_pairing.length > 0 ? (
                  <ul className="space-y-0.5">
                    {beer.food_pairing.slice(0, 3).map(f => (
                      <li key={f} className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">• {f}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-400">Brak danych</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
