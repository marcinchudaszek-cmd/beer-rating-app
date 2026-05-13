import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import {
  Search, Shuffle, Beer, Star, Home, BookOpen, X,
  SlidersHorizontal, Moon, Sun, GitCompareArrows,
  Download, Upload, RefreshCw, Trophy,
} from 'lucide-react';
import { BeerCard } from './components/BeerCard';
import { BeerDetailModal } from './components/BeerDetailModal';
import { RatingList } from './components/RatingList';
import { FilterPanel } from './components/FilterPanel';
import { CompareModal } from './components/CompareModal';
import { RecommendationPanel } from './components/RecommendationPanel';
import { DailyBeerBanner } from './components/DailyBeerBanner';
import { AchievementsPanel } from './components/AchievementsPanel';
import { PhotoSearch } from './components/PhotoSearch';
import { useBeerApi } from './hooks/useBeerApi';
import { useBeerStore, exportRatingsAsJson } from './store/beerStore';
import { useTheme } from './hooks/useTheme';
import { useDailyBeer } from './hooks/useDailyBeer';
import { useI18n } from './hooks/useI18n';
import { Beer as BeerType } from './types/beer';
import { Filters, DEFAULT_FILTERS, isDefaultFilters, BEER_STYLES } from './types/filters';
import type { Lang } from './data/translations';

type Page = 'explore' | 'history' | 'achievements';
const PAGE_SIZE = 25;

const BEER_FACTS_PL = [
  'Piwo jest jednym z najstarszych napojów świata – pierwsze dowody jego warzenia pochodzą sprzed ponad 5000 lat ze starożytnej Mezopotamii.',
  'Chmiel jako składnik piwa upowszechnił się dopiero w średniowieczu – wcześniej stosowano mieszanki ziół zwane "gruit".',
  'Belgia ma ponad 1500 rodzajów piwa i jest uważana za piwną stolicę świata.',
  'Najsilniejsze piwa na świecie przekraczają 60% alkoholu – osiąga się to przez wielokrotne zamrażanie.',
  'W Niemczech obowiązuje "Reinheitsgebot" (prawo czystości piwa) z 1516 roku – jedno z najstarszych przepisów dotyczących żywności.',
  'Piwo zawiera chmiel, który ma właściwości uspokajające – dlatego poduszkę z chmielu stosuje się na bezsenność.',
  'Browar BrewDog wyprodukował piwo "The End of History" (55% ABV) zamknięte w wypchanej wiewiórce.',
  'Czechy są liderem w spożyciu piwa na osobę – ok. 180 litrów rocznie na mieszkańca.',
  'IPA (India Pale Ale) powstało, by przeżyć długi transport z Anglii do Indii – duże chmielenie działało jak konserwant.',
  'Piwowarstwo jest jedną z nielicznych dziedzin, gdzie kobiety historycznie dominowały – w średniowieczu piwo warzyły głównie kobiety zwane "alewives".',
  'Londyńska "Beer Flood" z 1814 roku – ulicami popłynęło 1,4 mln litrów piwa po pęknięciu zbiornika browaru.',
  'Guinness jest ciemne nie dlatego, że jest mocne – ma tylko ok. 4,2% ABV, mniej niż wiele lagerów.',
  'Słowo "toast" (wznosić toast) pochodzi od starożytnego zwyczaju wkładania kawałka opieczonego chleba do piwa.',
  'Najstarszy aktywny browar świata to Weihenstephan w Bawarii – działa od 1040 roku.',
  'Woda stanowi ok. 90-95% składu piwa. Jej mineralizacja ma ogromny wpływ na smak — twarda woda pasuje do stoutów, miękka do pilsnerów.',
  'Proces fermentacji piwa trwa zazwyczaj 1-3 tygodnie, ale niektóre mocne piwa dojrzewają nawet latami.',
  'Pierwsza reklama piwna w historii pochodzi ze starożytnego Egiptu — glinian kamienny z ok. 2000 r. p.n.e.',
  'Oktoberfest w Monachium odwiedzają rocznie ponad 6 milionów gości, którzy wypijają ok. 7 milionów litrów piwa.',
  'Chmiel (Humulus lupulus) jest rośliną dwupienną — do piwowarstwa używa się wyłącznie żeńskich szyszek.',
  'Słowo "piwo" pochodzi od praindoeuropejskiego rdzenia oznaczającego "pić" — ten sam co w angielskim "beverage".',
  'Polska ma ponad 1000 aktywnych browarów kraftowych — liczba ta wzrosła 10-krotnie w ciągu ostatniej dekady.',
  'Dry hopping (zimne chmielenie) to technika dodawania chmielu po fermentacji — intensyfikuje aromat bez goryczki.',
  'Piwo pszeniczne zawiera zwykle więcej białka niż inne style, co przekłada się na gęstą, kremową pianę.',
  'Drożdże piwne produkują nie tylko alkohol i CO2, ale też setki związków aromatycznych odpowiedzialnych za smak.',
  'Pierwsze piwa były niefiltrowane i mętne — klarowanie piwa to wynalazek stosunkowo nowy, z XIX wieku.',
  'American IPA zawdzięcza swój charakter "trzem C" — chmielom Cascade, Centennial i Columbus.',
  'Piwo bezalkoholowe produkuje się przez zatrzymanie fermentacji, usunięcie alkoholu destylacją lub filtrację membranową.',
  'Beczki dębowe po bourbonie, winie i whisky są coraz popularniejsze do dojrzewania kraftowych piw — barrel aging.',
];
const BEER_FACTS_EN = [
  'Beer is one of the oldest beverages in the world — evidence of brewing dates back over 5,000 years to ancient Mesopotamia.',
  'Hops became widespread in beer only in the Middle Ages — before that, brewers used herb mixtures called "gruit".',
  'Belgium has over 1,500 types of beer and is considered the beer capital of the world.',
  'The strongest beers in the world exceed 60% ABV — achieved through repeated freeze distillation.',
  'Germany\'s "Reinheitsgebot" (Beer Purity Law) from 1516 is one of the oldest food regulations in the world.',
  'Hops have calming properties — hop pillows are used for insomnia.',
  'BrewDog produced "The End of History" (55% ABV) sold inside a taxidermied squirrel.',
  'The Czech Republic leads in per capita beer consumption — about 180 litres per person per year.',
  'IPA was created to survive the long voyage from England to India — heavy hopping acted as a preservative.',
  'Brewing was historically dominated by women — in the Middle Ages, beer was brewed by women called "alewives".',
  'The 1814 London Beer Flood saw 1.4 million litres of beer flow through the streets after a brewery tank burst.',
  'Guinness is dark not because it\'s strong — it\'s only about 4.2% ABV, less than many lagers.',
  'The world\'s oldest active brewery is Weihenstephan in Bavaria — operating since 1040.',
  'The word "toast" comes from the ancient custom of putting a piece of toasted bread into beer to improve the flavour.',
];
const BEER_FACTS_DE = [
  'Bier ist eines der ältesten Getränke der Welt – die ersten Belege für das Brauen stammen aus dem alten Mesopotamien vor mehr als 5.000 Jahren.',
  'Hopfen verbreitete sich als Bierzutat erst im Mittelalter – zuvor verwendete man Kräutermischungen namens "Gruit".',
  'Belgien hat über 1.500 Biersorten und gilt als Bierhauptstadt der Welt.',
  'Das stärkste Bier der Welt überschreitet 60% ABV – erreicht durch wiederholtes Einfrieren.',
  'Deutschlands "Reinheitsgebot" von 1516 ist eine der ältesten Lebensmittelvorschriften der Welt.',
  'Hopfen hat beruhigende Eigenschaften – Hopfenkissen werden bei Schlaflosigkeit verwendet.',
  'BrewDog produzierte "The End of History" (55% ABV) in einem ausgestopften Eichhörnchen.',
  'Tschechien führt beim Pro-Kopf-Bierkonsum – etwa 180 Liter pro Person und Jahr.',
  'IPA wurde entwickelt, um den langen Transport von England nach Indien zu überstehen.',
  'Brauen war historisch gesehen eine von Frauen dominierte Tätigkeit.',
  'Das älteste aktive Brauhaus der Welt ist Weihenstephan in Bayern – in Betrieb seit 1040.',
  'Das Oktoberfest in München ist das größte Volksfest der Welt mit über 6 Millionen Besuchern jährlich.',
  'Das Wort "Prost" leitet sich vom lateinischen "prosit" ab – "es möge nützen".',
  'Deutschland hat über 1.300 Brauereien und mehr als 5.000 verschiedene Biersorten.',
];

function getBrewYear(firstBrewed: string): number {
  const match = firstBrewed.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
}

function applyFilters(beers: BeerType[], filters: Filters, ratedIds: Set<number>, favoriteIds: Set<number>): BeerType[] {
  let result = beers.filter(beer => {
    if (beer.abv < filters.abvMin || beer.abv > filters.abvMax) return false;
    if (filters.ibuPreset !== 'all') {
      const ibu = beer.ibu ?? 0;
      if (filters.ibuPreset === 'low' && ibu >= 20) return false;
      if (filters.ibuPreset === 'medium' && (ibu < 20 || ibu > 50)) return false;
      if (filters.ibuPreset === 'bitter' && (ibu < 50 || ibu > 80)) return false;
      if (filters.ibuPreset === 'very-bitter' && ibu <= 80) return false;
    }
    if (filters.onlyRated && !ratedIds.has(beer.id)) return false;
    if (filters.onlyFavorites && !favoriteIds.has(beer.id)) return false;
    if (filters.styleId !== 'all') {
      const style = BEER_STYLES.find(s => s.id === filters.styleId);
      if (style) {
        const text = `${beer.name} ${beer.tagline} ${beer.description}`;
        if (!style.pattern.test(text)) return false;
      }
    }
    return true;
  });

  if (filters.sortBy !== 'default') {
    result = [...result].sort((a, b) => {
      switch (filters.sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'abv-asc': return a.abv - b.abv;
        case 'abv-desc': return b.abv - a.abv;
        case 'ibu-asc': return (a.ibu ?? 0) - (b.ibu ?? 0);
        case 'ibu-desc': return (b.ibu ?? 0) - (a.ibu ?? 0);
        case 'year-asc': return getBrewYear(a.first_brewed) - getBrewYear(b.first_brewed);
        case 'year-desc': return getBrewYear(b.first_brewed) - getBrewYear(a.first_brewed);
        default: return 0;
      }
    });
  }
  return result;
}

const LANG_FLAGS: Record<Lang, string> = { pl: '🇵🇱', en: '🇬🇧', de: '🇩🇪' };

export default function App() {
  const [page, setPage] = useState<Page>('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [selectedBeer, setSelectedBeer] = useState<BeerType | null>(null);
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [compareList, setCompareList] = useState<BeerType[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [factIndex, setFactIndex] = useState(() => Math.floor(Math.random() * BEER_FACTS_PL.length));
  const [showLangMenu, setShowLangMenu] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const importInputRef = useRef<HTMLInputElement>(null);

  const { searchBeers, getRandomBeer, totalBeers } = useBeerApi();
  const { ratings, favorites, importRatings } = useBeerStore();
  const { dark, toggleDark } = useTheme();
  const { dailyBeer, isNewToday, dismissToday } = useDailyBeer();
  const { t, lang, setLang } = useI18n();

  const BEER_FACTS = lang === 'de' ? BEER_FACTS_DE : lang === 'en' ? BEER_FACTS_EN : BEER_FACTS_PL;

  const ratedIds = useMemo(() => new Set(ratings.map(r => r.beerId)), [ratings]);
  const favoriteIds = useMemo(() => new Set(favorites), [favorites]);

  const allMatchingBeers = useMemo(
    () => applyFilters(searchBeers(activeQuery, filters.countryFilter), filters, ratedIds, favoriteIds),
    [activeQuery, filters, ratedIds, favoriteIds]
  );
  const visibleBeers = useMemo(() => allMatchingBeers.slice(0, displayCount), [allMatchingBeers, displayCount]);
  const hasMore = displayCount < allMatchingBeers.length;

  const activeFilterCount = isDefaultFilters(filters) ? 0 : (
    (filters.abvMin !== 0 || filters.abvMax !== 20 ? 1 : 0) +
    (filters.ibuPreset !== 'all' ? 1 : 0) +
    (filters.onlyRated ? 1 : 0) +
    (filters.onlyFavorites ? 1 : 0) +
    (filters.styleId !== 'all' ? 1 : 0) +
    (filters.sortBy !== 'default' ? 1 : 0) +
    (filters.countryFilter !== 'all' ? 1 : 0)
  );

  const avgRating = ratings.length > 0
    ? (ratings.reduce((s, r) => s + r.overallScore, 0) / ratings.length).toFixed(1)
    : null;

  const loadMore = useCallback(() => { if (hasMore) setDisplayCount(c => c + PAGE_SIZE); }, [hasMore]);
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(e => { if (e[0].isIntersecting) loadMore(); }, { rootMargin: '300px' });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);
  useEffect(() => { setDisplayCount(PAGE_SIZE); }, [activeQuery, filters]);

  const handleSearch = (e: React.FormEvent) => { e.preventDefault(); setActiveQuery(searchQuery.trim()); };
  const handleClearSearch = () => { setSearchQuery(''); setActiveQuery(''); };
  const handleRandom = () => setSelectedBeer(getRandomBeer());
  const toggleCompare = (beer: BeerType) => {
    setCompareList(prev => {
      if (prev.find(b => b.id === beer.id)) return prev.filter(b => b.id !== beer.id);
      if (prev.length >= 2) return prev;
      return [...prev, beer];
    });
  };
  const handleExport = () => {
    if (ratings.length === 0) { toast.error(t.noRatingsToExport); return; }
    exportRatingsAsJson(ratings);
    toast.success(t.exportedN(ratings.length));
  };
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const json = JSON.parse(ev.target?.result as string);
        const incoming = Array.isArray(json) ? json : json.ratings;
        if (!Array.isArray(incoming)) throw new Error();
        importRatings(incoming, 'merge');
        toast.success(t.importedN(incoming.length));
      } catch { toast.error(t.badFile); }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const TABS: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: 'explore', label: t.explore, icon: <Home className="w-4 h-4" /> },
    { id: 'history', label: `${t.history}${ratings.length > 0 ? ` (${ratings.length})` : ''}`, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'achievements', label: t.achievements, icon: <Trophy className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Toaster position="top-center" toastOptions={{ style: { borderRadius: '12px', fontFamily: 'inherit' } }} />

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-amber-100 dark:border-slate-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍺</span>
            <div>
              <h1 className="font-black text-lg text-amber-700 dark:text-amber-400 leading-none">{t.appName}</h1>
              <p className="text-xs text-slate-400 dark:text-slate-600">
                {totalBeers} {t.tagline}
                {avgRating && (
                  <span className="ml-1.5 text-amber-500 inline-flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {t.avg} {avgRating}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(m => !m)}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors text-lg"
                title="Język / Language / Sprache"
              >
                {LANG_FLAGS[lang]}
              </button>
              {showLangMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden">
                  {(['pl', 'en', 'de'] as Lang[]).map(l => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setShowLangMenu(false); }}
                      className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium transition-colors ${lang === l ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                    >
                      <span>{LANG_FLAGS[l]}</span>
                      <span>{l === 'pl' ? 'Polski' : l === 'en' ? 'English' : 'Deutsch'}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={toggleDark} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors" title={dark ? t.lightMode : t.darkMode}>
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {page === 'explore' && (
              <button
                onClick={() => setShowFilters(f => !f)}
                className={`relative p-2 rounded-full transition-colors ${showFilters || activeFilterCount > 0 ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30' : 'text-slate-500 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700'}`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                {activeFilterCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{activeFilterCount}</span>
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-[57px] z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-amber-50 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 flex gap-1 py-1.5">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setPage(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${page === tab.id ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {page === 'explore' && (
          <>
            {isNewToday && dailyBeer && (
              <DailyBeerBanner beer={dailyBeer} onOpen={setSelectedBeer} onDismiss={dismissToday} />
            )}

            <form onSubmit={handleSearch} className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-2xl pl-11 pr-24 py-3.5 text-sm focus:outline-none focus:border-amber-400 dark:focus:border-amber-500 shadow-sm transition-colors"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {(searchQuery || activeQuery) && (
                  <button type="button" onClick={handleClearSearch} className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button type="button" onClick={handleRandom} className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors shadow">
                  <Shuffle className="w-3.5 h-3.5" />
                  {t.random}
                </button>
              </div>
            </form>

            <PhotoSearch onResult={setSelectedBeer} />

            {showFilters && (
              <div className="mb-4">
                <FilterPanel filters={filters} onChange={setFilters} onClose={() => setShowFilters(false)} />
              </div>
            )}

            <RecommendationPanel onSelectBeer={setSelectedBeer} />

            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {activeQuery
                  ? t.resultsQuery(activeQuery, allMatchingBeers.length)
                  : t.resultsOf(allMatchingBeers.length, totalBeers)}
                {activeFilterCount > 0 && ` ${t.filtered}`}
              </p>
              {activeQuery && (
                <button onClick={handleClearSearch} className="text-xs text-amber-500 hover:underline">{t.clearSearch}</button>
              )}
            </div>

            {allMatchingBeers.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400 dark:text-slate-600">
                <Beer className="w-16 h-16 opacity-20" />
                <p className="font-medium">{t.noResults}</p>
                {activeFilterCount > 0 && (
                  <button onClick={() => setFilters(DEFAULT_FILTERS)} className="text-amber-500 text-sm hover:underline">{t.resetFilters}</button>
                )}
              </div>
            )}

            {visibleBeers.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {visibleBeers.map(beer => (
                  <BeerCard
                    key={beer.id}
                    beer={beer}
                    onClick={() => setSelectedBeer(beer)}
                    isInCompare={!!compareList.find(b => b.id === beer.id)}
                    onToggleCompare={() => toggleCompare(beer)}
                    compareDisabled={compareList.length >= 2}
                  />
                ))}
              </div>
            )}

            <div ref={sentinelRef} className="py-8 flex flex-col items-center gap-2">
              {hasMore && <div className="w-6 h-6 border-2 border-amber-300 dark:border-amber-700 border-t-amber-500 rounded-full animate-spin" />}
              {!hasMore && allMatchingBeers.length > 0 && (
                <p className="text-xs text-slate-400 dark:text-slate-600">
                  🎉 {allMatchingBeers.length === totalBeers ? t.allLoaded(totalBeers) : t.shownOf(allMatchingBeers.length)}
                </p>
              )}
            </div>

            <div className="mt-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-5 text-white flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">🌾</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-lg">{t.funFact}</h3>
                  <button onClick={() => setFactIndex(i => (i + 1) % BEER_FACTS.length)} className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-amber-100 text-sm leading-relaxed">{BEER_FACTS[factIndex]}</p>
                <p className="text-amber-200/60 text-xs mt-2">{factIndex + 1} / {BEER_FACTS.length}</p>
              </div>
            </div>
          </>
        )}

        {page === 'history' && (
          <div className="space-y-4">
            {ratings.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-2">
                <StatPill emoji="🍺" label={t.ratedBeers} value={new Set(ratings.map(r => r.beerId)).size.toString()} />
                <StatPill emoji="⭐" label={t.avgRating} value={avgRating ? `${avgRating}/5` : '—'} />
                <StatPill emoji="📝" label={t.totalRatings} value={ratings.length.toString()} />
              </div>
            )}
            <div className="flex gap-2 flex-wrap">
              <button onClick={handleExport} className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700 rounded-xl transition-colors">
                <Download className="w-4 h-4" />{t.exportBackup}
              </button>
              <button onClick={() => importInputRef.current?.click()} className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700 rounded-xl transition-colors">
                <Upload className="w-4 h-4" />{t.importBackup}
              </button>
              <input ref={importInputRef} type="file" accept=".json" onChange={handleImportFile} className="hidden" />
            </div>
            <RatingList showBeerName />
          </div>
        )}

        {page === 'achievements' && <AchievementsPanel />}
      </main>

      {selectedBeer && <BeerDetailModal beer={selectedBeer} onClose={() => setSelectedBeer(null)} />}

      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-600 shadow-xl rounded-2xl px-4 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            {compareList.map(beer => (
              <div key={beer.id} className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <span>🍺</span>
                <span className="max-w-[90px] truncate">{beer.name}</span>
                <button onClick={() => toggleCompare(beer)} className="text-slate-400 hover:text-red-500 transition-colors"><X className="w-3.5 h-3.5" /></button>
              </div>
            ))}
            {compareList.length === 1 && <span className="text-xs text-slate-400 dark:text-slate-500 italic">{t.compareSecond}</span>}
          </div>
          {compareList.length === 2 && (
            <button onClick={() => setShowCompare(true)} className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors ml-1">
              <GitCompareArrows className="w-4 h-4" />{t.compareBtn}
            </button>
          )}
        </div>
      )}

      {showCompare && compareList.length === 2 && (
        <CompareModal beers={compareList as [BeerType, BeerType]} onClose={() => setShowCompare(false)} />
      )}
    </div>
  );
}

function StatPill({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 rounded-2xl p-4 text-center shadow-sm">
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="text-xl font-black text-amber-700 dark:text-amber-400">{value}</div>
      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}
