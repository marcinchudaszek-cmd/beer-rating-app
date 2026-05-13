import { useState } from 'react';
import { Beer } from '../types/beer';
import { X, Hop, Wheat, FlaskConical, Thermometer, Droplets, Gauge, Utensils, Lightbulb, Star, PlusCircle } from 'lucide-react';
import { RatingForm } from './RatingForm';
import { RatingList } from './RatingList';
import { useBeerStore } from '../store/beerStore';
import { findHopInfo, findMaltInfo, findYeastInfo } from '../data/ingredients_info';
import { BEER_TRANSLATIONS } from '../data/beer_translations';

interface BeerDetailModalProps {
  beer: Beer;
  onClose: () => void;
}

type Tab = 'info' | 'ingredients' | 'method' | 'rate' | 'reviews';

export function BeerDetailModal({ beer, onClose }: BeerDetailModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('info');
  const [selectedIngredient, setSelectedIngredient] = useState<{ name: string; info: import('../data/ingredients_info').IngredientInfo } | null>(null);
  const translation = BEER_TRANSLATIONS[beer.name] ?? null;
  const { getRatingsByBeerId } = useBeerStore();
  const ratings = getRatingsByBeerId(beer.id);
  const avgScore = ratings.length > 0
    ? ratings.reduce((s, r) => s + r.overallScore, 0) / ratings.length
    : null;

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'info', label: 'Info', icon: <Star className="w-4 h-4" /> },
    { id: 'ingredients', label: 'Składniki', icon: <Hop className="w-4 h-4" /> },
    { id: 'method', label: 'Metoda', icon: <FlaskConical className="w-4 h-4" /> },
    { id: 'rate', label: 'Oceń', icon: <PlusCircle className="w-4 h-4" /> },
    { id: 'reviews', label: `Oceny (${ratings.length})`, icon: <Star className="w-4 h-4" /> },
  ];

  const abvColor = beer.abv < 4 ? 'text-green-600' : beer.abv < 7 ? 'text-amber-600' : 'text-red-600';

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full sm:max-w-2xl max-h-[95vh] sm:rounded-3xl rounded-t-3xl flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex gap-4 items-start">
            <div className="bg-white/20 rounded-2xl p-3 flex-shrink-0">
              {beer.image_url ? (
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '';
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="text-4xl">🍺</div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold leading-tight">{beer.name}</h2>
              <p className="text-amber-100 text-sm italic">{beer.tagline}</p>
              <p className="text-amber-200 text-xs mt-1">Pierwsze warzenie: {beer.first_brewed}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className={`bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                  {beer.abv}% ABV
                </span>
                {beer.ibu && (
                  <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {beer.ibu} IBU
                  </span>
                )}
                {avgScore !== null && (
                  <span className="flex items-center gap-1 bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 fill-white" />
                    {avgScore.toFixed(1)}/5
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto bg-amber-50 dark:bg-slate-800 border-b border-amber-100 dark:border-slate-700 px-2 pt-2 gap-1 flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-t-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-slate-900 text-amber-700 dark:text-amber-400 shadow-sm border border-amber-100 dark:border-slate-700 border-b-white dark:border-b-slate-900 -mb-px'
                  : 'text-amber-600 dark:text-amber-500 hover:bg-white/50 dark:hover:bg-slate-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto flex-1 p-5">
          {activeTab === 'info' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wide mb-2">Opis</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{translation?.description ?? beer.description}</p>
                {translation && <p className="text-xs text-amber-500 mt-1">🇵🇱 Opis przetłumaczony</p>}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <StatCard icon={<Droplets className={`w-5 h-5 ${abvColor}`} />} label="Alkohol" value={`${beer.abv}%`} />
                {beer.ibu && <StatCard icon={<Gauge className="w-5 h-5 text-amber-600" />} label="IBU (gorzkość)" value={beer.ibu.toString()} />}
                {beer.ebc && <StatCard icon={<div className="w-5 h-5 rounded-full" style={{ background: `hsl(${Math.max(0, 35 - beer.ebc * 0.5)}, 80%, ${Math.max(20, 70 - beer.ebc * 1.2)}%)` }} />} label="Barwa (EBC)" value={beer.ebc.toString()} />}
                {beer.target_og && <StatCard icon={<FlaskConical className="w-5 h-5 text-blue-500" />} label="OG" value={beer.target_og.toString()} />}
                {beer.target_fg && <StatCard icon={<FlaskConical className="w-5 h-5 text-blue-400" />} label="FG" value={beer.target_fg.toString()} />}
                {beer.ph && <StatCard icon={<Thermometer className="w-5 h-5 text-purple-500" />} label="pH" value={beer.ph.toString()} />}
              </div>

              {beer.food_pairing?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    Parowanie z jedzeniem
                  </h3>
                  <ul className="space-y-1.5">
                    {beer.food_pairing.map((food, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                        {food}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {beer.brewers_tips && (
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Wskazówki browara
                  </h3>
                  <p className="text-sm text-amber-900 dark:text-amber-300 italic">{beer.brewers_tips}</p>
                </div>
              )}

              {beer.contributed_by && (
                <p className="text-xs text-slate-400 dark:text-slate-600 text-right">Opracowane przez: {beer.contributed_by}</p>
              )}
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-green-800 dark:text-green-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Hop className="w-4 h-4" />
                  Chmiel ({beer.ingredients.hops?.length ?? 0} rodzajów)
                </h3>
                <div className="space-y-2">
                  {beer.ingredients.hops?.map((hop, i) => {
                    const info = findHopInfo(hop.name);
                    const isSelected = selectedIngredient?.name === hop.name;
                    return (
                      <div key={i}>
                        <div
                          onClick={() => setSelectedIngredient(isSelected ? null : (info ? { name: hop.name, info } : null))}
                          className={`flex items-center justify-between bg-green-50 dark:bg-green-900/20 border rounded-xl px-4 py-2.5 ${info ? 'cursor-pointer hover:border-green-400' : ''} ${isSelected ? 'border-green-400 dark:border-green-500' : 'border-green-100 dark:border-green-800'}`}
                        >
                          <div>
                            <p className="font-semibold text-sm text-green-900 dark:text-green-300">{hop.name}</p>
                            <p className="text-xs text-green-600 dark:text-green-500">{hop.attribute} • dodany: {hop.add}{info ? ' · kliknij po info' : ''}</p>
                          </div>
                          <span className="text-sm font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded-full">
                            {hop.amount.value} {hop.amount.unit}
                          </span>
                        </div>
                        {isSelected && info && (
                          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl p-3 mt-1 text-xs space-y-1">
                            <p><span className="font-bold text-green-800 dark:text-green-300">🌍 Pochodzenie:</span> <span className="text-green-700 dark:text-green-400">{info.origin}</span></p>
                            <p><span className="font-bold text-green-800 dark:text-green-300">🌿 Charakter:</span> <span className="text-green-700 dark:text-green-400">{info.character}</span></p>
                            <p><span className="font-bold text-green-800 dark:text-green-300">👃 Aromat:</span> <span className="text-green-700 dark:text-green-400">{info.aroma}</span></p>
                            <p><span className="font-bold text-green-800 dark:text-green-300">🍺 Najlepszy do:</span> <span className="text-green-700 dark:text-green-400">{info.best_for}</span></p>
                            {info.notes && <p className="italic text-green-600 dark:text-green-500">💡 {info.notes}</p>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Wheat className="w-4 h-4" />
                  Słód ({beer.ingredients.malt?.length ?? 0} rodzajów)
                </h3>
                <div className="space-y-2">
                  {beer.ingredients.malt?.map((malt, i) => {
                    const info = findMaltInfo(malt.name);
                    const isSelected = selectedIngredient?.name === malt.name;
                    return (
                      <div key={i}>
                        <div
                          onClick={() => setSelectedIngredient(isSelected ? null : (info ? { name: malt.name, info } : null))}
                          className={`flex items-center justify-between bg-amber-50 dark:bg-amber-900/20 border rounded-xl px-4 py-2.5 ${info ? 'cursor-pointer hover:border-amber-400' : ''} ${isSelected ? 'border-amber-400' : 'border-amber-100 dark:border-amber-800'}`}
                        >
                          <p className="font-semibold text-sm text-amber-900 dark:text-amber-300">{malt.name}{info ? ' ·' : ''}<span className="text-xs font-normal text-amber-500 ml-1">{info ? 'kliknij po info' : ''}</span></p>
                          <span className="text-sm font-bold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded-full">
                            {malt.amount.value} {malt.amount.unit}
                          </span>
                        </div>
                        {isSelected && info && (
                          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-xl p-3 mt-1 text-xs space-y-1">
                            <p><span className="font-bold text-amber-800 dark:text-amber-300">🌾 Charakter:</span> <span className="text-amber-700 dark:text-amber-400">{info.character}</span></p>
                            <p><span className="font-bold text-amber-800 dark:text-amber-300">👃 Aromat:</span> <span className="text-amber-700 dark:text-amber-400">{info.aroma}</span></p>
                            <p><span className="font-bold text-amber-800 dark:text-amber-300">🍺 Najlepszy do:</span> <span className="text-amber-700 dark:text-amber-400">{info.best_for}</span></p>
                            {info.notes && <p className="italic text-amber-600 dark:text-amber-500">💡 {info.notes}</p>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-purple-800 dark:text-purple-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4" />
                  Drożdże
                </h3>
                {(() => {
                  const info = findYeastInfo(beer.ingredients.yeast);
                  const isSelected = selectedIngredient?.name === beer.ingredients.yeast;
                  return (
                    <div>
                      <div
                        onClick={() => setSelectedIngredient(isSelected ? null : (info ? { name: beer.ingredients.yeast, info } : null))}
                        className={`bg-purple-50 dark:bg-purple-900/20 border rounded-xl px-4 py-3 ${info ? 'cursor-pointer hover:border-purple-400' : ''} ${isSelected ? 'border-purple-400' : 'border-purple-100 dark:border-purple-800'}`}
                      >
                        <p className="font-semibold text-sm text-purple-900 dark:text-purple-300">{beer.ingredients.yeast}</p>
                        {info && <p className="text-xs text-purple-500 mt-0.5">kliknij po charakterystykę</p>}
                      </div>
                      {isSelected && info && (
                        <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-xl p-3 mt-1 text-xs space-y-1">
                          <p><span className="font-bold text-purple-800 dark:text-purple-300">🦠 Charakter:</span> <span className="text-purple-700 dark:text-purple-400">{info.character}</span></p>
                          <p><span className="font-bold text-purple-800 dark:text-purple-300">👃 Aromat:</span> <span className="text-purple-700 dark:text-purple-400">{info.aroma}</span></p>
                          <p><span className="font-bold text-purple-800 dark:text-purple-300">🍺 Najlepszy do:</span> <span className="text-purple-700 dark:text-purple-400">{info.best_for}</span></p>
                          {info.notes && <p className="italic text-purple-600 dark:text-purple-500">💡 {info.notes}</p>}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {activeTab === 'method' && (
            <div className="space-y-5">
              {beer.method.mash_temp?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Thermometer className="w-4 h-4" />
                    Zacieranie
                  </h3>
                  <div className="space-y-2">
                    {beer.method.mash_temp.map((m, i) => (
                      <div key={i} className="flex items-center gap-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 rounded-xl px-4 py-2.5">
                        <div className="flex items-center gap-1 text-orange-700 dark:text-orange-400 font-bold">
                          <Thermometer className="w-4 h-4" />
                          {m.temp.value}°{m.temp.unit === 'celsius' ? 'C' : 'F'}
                        </div>
                        {m.duration && <div className="text-sm text-orange-600 dark:text-orange-500">przez {m.duration} minut</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {beer.method.fermentation && (
                <div>
                  <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4" />
                    Fermentacja
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl px-4 py-3">
                    <p className="text-blue-800 dark:text-blue-300 font-semibold">
                      Temperatura: {beer.method.fermentation.temp.value}°{beer.method.fermentation.temp.unit === 'celsius' ? 'C' : 'F'}
                    </p>
                  </div>
                </div>
              )}

              {beer.method.twist && (
                <div>
                  <h3 className="text-sm font-semibold text-pink-800 dark:text-pink-400 uppercase tracking-wide mb-3">Dodatki / Twist</h3>
                  <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800 rounded-xl px-4 py-3">
                    <p className="text-pink-800 dark:text-pink-300 text-sm">{beer.method.twist}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Objętość warki</p>
                  <p className="font-bold text-slate-800 dark:text-slate-200">{beer.volume?.value} {beer.volume?.unit}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Objętość chmielenia</p>
                  <p className="font-bold text-slate-800 dark:text-slate-200">{beer.boil_volume?.value} {beer.boil_volume?.unit}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rate' && (
            <RatingForm beer={beer} onSaved={() => setActiveTab('reviews')} />
          )}

          {activeTab === 'reviews' && (
            <RatingList beerId={beer.id} />
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 flex flex-col items-center gap-1.5 text-center">
      {icon}
      <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{value}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}
