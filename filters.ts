export type BeerStyleId = 'ipa' | 'lager' | 'stout' | 'porter' | 'pale-ale' | 'wheat' | 'saison' | 'sour' | 'barleywine' | 'amber' | 'brown-ale';

export interface BeerStyleDef {
  id: BeerStyleId;
  label: string;
  emoji: string;
  pattern: RegExp;
}

export const BEER_STYLES: BeerStyleDef[] = [
  { id: 'ipa',        label: 'IPA',         emoji: '🌿', pattern: /\bipa\b|india pale ale/i },
  { id: 'lager',      label: 'Lager',       emoji: '🍶', pattern: /\blager\b|\bpilsner\b|\bpils\b/i },
  { id: 'stout',      label: 'Stout',       emoji: '🖤', pattern: /\bstout\b/i },
  { id: 'porter',     label: 'Porter',      emoji: '🌑', pattern: /\bporter\b/i },
  { id: 'pale-ale',   label: 'Pale Ale',    emoji: '☀️', pattern: /\bpale ale\b/i },
  { id: 'wheat',      label: 'Pszeniczne',  emoji: '🌾', pattern: /\bwheat\b|\bweizen\b|\bwitbier\b/i },
  { id: 'saison',     label: 'Saison',      emoji: '🌻', pattern: /\bsaison\b|\bfarmhouse\b/i },
  { id: 'sour',       label: 'Kwaśne',      emoji: '🍋', pattern: /\bsour\b|\blambic\b|\bgose\b|\bkriek\b/i },
  { id: 'barleywine', label: 'Barleywine',  emoji: '🍷', pattern: /\bbarleywine\b|\bbarley wine\b/i },
  { id: 'amber',      label: 'Amber/Red',   emoji: '🍂', pattern: /\bamber\b|\bred ale\b/i },
  { id: 'brown-ale',  label: 'Brown Ale',   emoji: '🍫', pattern: /\bbrown ale\b/i },
];

export interface Filters {
  abvMin: number;
  abvMax: number;
  ibuPreset: 'all' | 'low' | 'medium' | 'bitter' | 'very-bitter';
  onlyRated: boolean;
  onlyFavorites: boolean;
  styleId: BeerStyleId | 'all';
  sortBy: 'default' | 'name' | 'abv-asc' | 'abv-desc' | 'ibu-asc' | 'ibu-desc' | 'year-asc' | 'year-desc';
  countryFilter: CountryFilter;
}

export const DEFAULT_FILTERS: Filters = {
  abvMin: 0,
  abvMax: 20,
  ibuPreset: 'all',
  onlyRated: false,
  onlyFavorites: false,
  styleId: 'all',
  sortBy: 'default',
  countryFilter: 'all',
};

export function isDefaultFilters(f: Filters): boolean {
  return (
    f.abvMin === DEFAULT_FILTERS.abvMin &&
    f.abvMax === DEFAULT_FILTERS.abvMax &&
    f.ibuPreset === 'all' &&
    !f.onlyRated &&
    !f.onlyFavorites &&
    f.styleId === 'all' &&
    f.sortBy === 'default' && f.countryFilter === 'all'
  );
}

export type CountryFilter = 'all' | 'pl' | 'de' | 'uk';
