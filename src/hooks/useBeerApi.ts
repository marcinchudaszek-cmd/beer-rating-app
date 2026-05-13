import beersData from '../data/beers.json';
import { EXTRA_BEERS } from '../data/extra_beers';
import { WORLD_BEERS, EXTRA_POLISH_BEERS } from '../data/world_beers';
import { Beer } from '../types/beer';

const PUNK_BEERS = beersData as Beer[];
const ALL_BEERS = [...PUNK_BEERS, ...EXTRA_BEERS, ...WORLD_BEERS, ...EXTRA_POLISH_BEERS];

// Kraj na podstawie ID
export function getBeerCountry(beer: Beer): 'pl' | 'de' | 'uk' | 'be' | 'us' | 'cz' | 'world' {
  if (beer.id >= 8000) return 'world';
  if (beer.id >= 7000) return 'cz';
  if (beer.id >= 6000) return 'us';
  if (beer.id >= 5000) return 'be';
  if (beer.id >= 4000) return 'de';
  if (beer.id >= 3000) return 'pl';
  if (beer.id >= 2000) return 'de';
  if (beer.id >= 1000) return 'pl';
  return 'uk';
}

export type CountryCode = 'all' | 'pl' | 'de' | 'uk' | 'be' | 'us' | 'cz' | 'world';

export function useBeerApi() {
  function searchBeers(query: string, countryFilter: CountryCode = 'all'): Beer[] {
    const pool = countryFilter === 'all'
      ? ALL_BEERS
      : ALL_BEERS.filter(b => getBeerCountry(b) === countryFilter);
    const q = query.toLowerCase().trim();
    if (!q) return pool;
    return pool.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.tagline.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
    );
  }

  function getRandomBeer(): Beer {
    return ALL_BEERS[Math.floor(Math.random() * ALL_BEERS.length)];
  }

  function getBeerById(id: number): Beer | undefined {
    return ALL_BEERS.find(b => b.id === id);
  }

  function getAllBeers(): Beer[] {
    return ALL_BEERS;
  }

  return { searchBeers, getRandomBeer, getBeerById, getAllBeers, totalBeers: ALL_BEERS.length };
}
