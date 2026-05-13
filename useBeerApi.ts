import beersData from '../data/beers.json';
import { EXTRA_BEERS } from '../data/extra_beers';
import { Beer } from '../types/beer';

const PUNK_BEERS = beersData as Beer[];
const ALL_BEERS = [...PUNK_BEERS, ...EXTRA_BEERS];

// ID < 1000 = BrewDog/UK, 1000-1999 = Polskie, 2000+ = Niemieckie
export function getBeerCountry(beer: Beer): 'pl' | 'de' | 'uk' {
  if (beer.id >= 2000) return 'de';
  if (beer.id >= 1000) return 'pl';
  return 'uk';
}

export function useBeerApi() {
  function searchBeers(query: string, countryFilter: 'all' | 'pl' | 'de' | 'uk' = 'all'): Beer[] {
    let pool = countryFilter === 'all' ? ALL_BEERS : ALL_BEERS.filter(b => getBeerCountry(b) === countryFilter);
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
