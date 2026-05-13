import { useMemo } from 'react';
import { useBeerStore } from '../store/beerStore';

export interface Achievement {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  unlocked: boolean;
  progress?: number;   // 0-100
  progressText?: string;
}

export function useAchievements(): Achievement[] {
  const { ratings, favorites } = useBeerStore();

  return useMemo(() => {
    const ratedCount = new Set(ratings.map(r => r.beerId)).size;
    const totalRatings = ratings.length;
    const favCount = favorites.length;
    const avgScore = ratings.length > 0
      ? ratings.reduce((s, r) => s + r.overallScore, 0) / ratings.length
      : 0;
    const perfectScores = ratings.filter(r => r.overallScore === 5).length;
    const lowScores = ratings.filter(r => r.overallScore <= 2).length;
    const withPhotos = ratings.filter(r => r.photoUrl).length;
    const withNotes = ratings.filter(r => r.notes && r.notes.length > 10).length;

    // Sprawdź style przez opisy (uproszczone)
    const ipaRatings = ratings.filter(r => {
      const beer = r as { beerName?: string };
      return beer.beerName?.toLowerCase().includes('ipa') ||
        r.notes?.toLowerCase().includes('ipa');
    }).length;

    const list: Achievement[] = [
      {
        id: 'first_rating', emoji: '🍺', title: 'Pierwsze kroki',
        desc: 'Oceń swoje pierwsze piwo',
        unlocked: ratedCount >= 1,
        progress: Math.min(ratedCount / 1 * 100, 100),
        progressText: `${ratedCount}/1`,
      },
      {
        id: 'ten_beers', emoji: '🔟', title: 'Dziesiątka!',
        desc: 'Oceń 10 różnych piw',
        unlocked: ratedCount >= 10,
        progress: Math.min(ratedCount / 10 * 100, 100),
        progressText: `${ratedCount}/10`,
      },
      {
        id: 'fifty_beers', emoji: '🏆', title: 'Piwny ekspert',
        desc: 'Oceń 50 różnych piw',
        unlocked: ratedCount >= 50,
        progress: Math.min(ratedCount / 50 * 100, 100),
        progressText: `${ratedCount}/50`,
      },
      {
        id: 'hundred_beers', emoji: '💯', title: 'Centurion',
        desc: 'Oceń 100 różnych piw',
        unlocked: ratedCount >= 100,
        progress: Math.min(ratedCount / 100 * 100, 100),
        progressText: `${ratedCount}/100`,
      },
      {
        id: 'five_star', emoji: '⭐', title: 'Perfekcjonista',
        desc: 'Daj ocenę 5★ co najmniej 3 piwom',
        unlocked: perfectScores >= 3,
        progress: Math.min(perfectScores / 3 * 100, 100),
        progressText: `${perfectScores}/3`,
      },
      {
        id: 'high_standards', emoji: '😤', title: 'Wysoka poprzeczka',
        desc: 'Daj ocenę 1★ lub 2★ co najmniej 5 piwom — masz gust!',
        unlocked: lowScores >= 5,
        progress: Math.min(lowScores / 5 * 100, 100),
        progressText: `${lowScores}/5`,
      },
      {
        id: 'avg_4', emoji: '📈', title: 'Złoty kubek',
        desc: 'Utrzymaj średnią ocenę powyżej 4.0 przy minimum 10 ocenach',
        unlocked: ratedCount >= 10 && avgScore >= 4.0,
        progress: ratedCount >= 10 ? Math.min(avgScore / 4 * 100, 100) : Math.min(ratedCount / 10 * 100, 100),
        progressText: ratedCount < 10 ? `${ratedCount}/10 ocen` : `śr. ${avgScore.toFixed(1)}`,
      },
      {
        id: 'photographer', emoji: '📸', title: 'Fotograf piwny',
        desc: 'Dodaj zdjęcie do 5 ocen',
        unlocked: withPhotos >= 5,
        progress: Math.min(withPhotos / 5 * 100, 100),
        progressText: `${withPhotos}/5`,
      },
      {
        id: 'critic', emoji: '✍️', title: 'Krytykiem być',
        desc: 'Napisz notatki do 10 ocen',
        unlocked: withNotes >= 10,
        progress: Math.min(withNotes / 10 * 100, 100),
        progressText: `${withNotes}/10`,
      },
      {
        id: 'favorites_10', emoji: '❤️', title: 'Kolekcjoner',
        desc: 'Dodaj 10 piw do ulubionych',
        unlocked: favCount >= 10,
        progress: Math.min(favCount / 10 * 100, 100),
        progressText: `${favCount}/10`,
      },
      {
        id: 'many_ratings', emoji: '📝', title: 'Maratończyk',
        desc: 'Zostaw 25 ocen (możesz oceniać to samo piwo wielokrotnie)',
        unlocked: totalRatings >= 25,
        progress: Math.min(totalRatings / 25 * 100, 100),
        progressText: `${totalRatings}/25`,
      },
      {
        id: 'ipa_fan', emoji: '🌿', title: 'Hophead',
        desc: 'Oceń 5 piw ze słowem IPA w nazwie lub notatkach',
        unlocked: ipaRatings >= 5,
        progress: Math.min(ipaRatings / 5 * 100, 100),
        progressText: `${ipaRatings}/5`,
      },
    ];

    // Sortuj: odblokowane na górze
    return [...list].sort((a, b) => Number(b.unlocked) - Number(a.unlocked));
  }, [ratings, favorites]);
}
