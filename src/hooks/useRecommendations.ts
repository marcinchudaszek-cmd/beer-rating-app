import { useMemo } from 'react';
import { useBeerStore } from '../store/beerStore';
import { useBeerApi } from './useBeerApi';
import { Beer } from '../types/beer';
import { BEER_STYLES, BeerStyleDef } from '../types/filters';

export interface Recommendation {
  beer: Beer;
  score: number;
  reasons: string[];
}

function detectStyle(beer: Beer): BeerStyleDef | null {
  const text = `${beer.name} ${beer.tagline} ${beer.description}`;
  return BEER_STYLES.find(s => s.pattern.test(text)) ?? null;
}

export function useRecommendations(limit = 5): Recommendation[] {
  const { ratings } = useBeerStore();
  const { getAllBeers } = useBeerApi();

  return useMemo(() => {
    // Potrzebujemy minimum 2 ocenionych piw żeby rekomendacje miały sens
    if (ratings.length < 2) return [];

    // Piwa z oceną ≥ 4 to nasze "lubiane"
    const likedRatings = ratings.filter(r => r.overallScore >= 4);
    if (likedRatings.length === 0) return [];

    const allBeers = getAllBeers();
    const ratedIds = new Set(ratings.map(r => r.beerId));

    // Profil polubionych piw
    const likedBeerIds = new Set(likedRatings.map(r => r.beerId));
    const likedBeers = allBeers.filter(b => likedBeerIds.has(b.id));

    const avgAbv = likedBeers.reduce((s, b) => s + b.abv, 0) / likedBeers.length;
    const ibuBeers = likedBeers.filter(b => b.ibu != null);
    const avgIbu = ibuBeers.length > 0
      ? ibuBeers.reduce((s, b) => s + (b.ibu ?? 0), 0) / ibuBeers.length
      : null;

    // Ulubione style i chmiele
    const likedStyles = new Set(
      likedBeers.map(detectStyle).filter(Boolean).map(s => s!.id)
    );
    const likedHops = new Set(
      likedBeers.flatMap(b => b.ingredients.hops.map(h => h.name))
    );
    const likedMalts = new Set(
      likedBeers.flatMap(b => b.ingredients.malt.map(m => m.name))
    );

    // Czy user preferuje mocne piwa
    const prefersStrong = likedBeers.filter(b => b.abv >= 7).length > likedBeers.length / 2;
    const prefersLight = likedBeers.filter(b => b.abv < 5).length > likedBeers.length / 2;

    // Punktujemy nieocenione piwa
    const scored = allBeers
      .filter(b => !ratedIds.has(b.id))
      .map(beer => {
        let score = 0;
        const reasons: string[] = [];

        // 1. Styl (+3 pkt) — najważniejszy sygnał
        const style = detectStyle(beer);
        if (style && likedStyles.has(style.id)) {
          score += 3;
          reasons.push(`${style.emoji} Lubisz ${style.label}`);
        }

        // 2. Podobny ABV (+0–2 pkt)
        const abvDiff = Math.abs(beer.abv - avgAbv);
        if (abvDiff <= 0.8) score += 2;
        else if (abvDiff <= 1.8) score += 1;

        // 3. Podobne IBU (+0–1 pkt)
        if (avgIbu !== null && beer.ibu != null) {
          const ibuDiff = Math.abs(beer.ibu - avgIbu);
          if (ibuDiff <= 15) score += 1;
        }

        // 4. Te same chmiele (+1–3 pkt)
        const sharedHops = beer.ingredients.hops.filter(h => likedHops.has(h.name));
        if (sharedHops.length >= 1) {
          const hopScore = Math.min(sharedHops.length, 3);
          score += hopScore;
          const names = [...new Set(sharedHops.map(h => h.name))].slice(0, 2);
          reasons.push(`🌿 Chmiel ${names.join(', ')}`);
        }

        // 5. Te same słody (+1 pkt)
        const sharedMalts = beer.ingredients.malt.filter(m => likedMalts.has(m.name));
        if (sharedMalts.length >= 2) {
          score += 1;
        }

        // 6. Preferencja mocy
        if (prefersStrong && beer.abv >= 7) {
          score += 1;
          if (!reasons.some(r => r.includes('mocn'))) reasons.push('💪 Mocne jak lubisz');
        }
        if (prefersLight && beer.abv < 5) {
          score += 1;
          if (!reasons.some(r => r.includes('lekk'))) reasons.push('🍃 Lekkie jak lubisz');
        }

        // Domyślny powód gdy punkty są ale brak szczegółów
        if (reasons.length === 0 && score > 0) {
          reasons.push('📊 Podobne do twoich ulubionych');
        }

        return { beer, score, reasons };
      })
      .filter(r => r.score >= 3)      // tylko sensowne trafienia
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return scored;
  }, [ratings, limit]);
}
