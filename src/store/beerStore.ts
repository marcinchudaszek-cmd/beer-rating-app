import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserRating } from '../types/beer';

interface BeerStore {
  ratings: UserRating[];
  favorites: number[];
  addRating: (rating: UserRating) => void;
  updateRating: (id: string, rating: Partial<UserRating>) => void;
  deleteRating: (id: string) => void;
  getRatingsByBeerId: (beerId: number) => UserRating[];
  importRatings: (ratings: UserRating[], mode: 'replace' | 'merge') => void;
  toggleFavorite: (beerId: number) => void;
}

export const useBeerStore = create<BeerStore>()(
  persist(
    (set, get) => ({
      ratings: [],
      favorites: [],
      addRating: (rating) =>
        set((state) => ({ ratings: [...state.ratings, rating] })),
      updateRating: (id, updatedRating) =>
        set((state) => ({
          ratings: state.ratings.map((r) =>
            r.id === id ? { ...r, ...updatedRating } : r
          ),
        })),
      deleteRating: (id) =>
        set((state) => ({
          ratings: state.ratings.filter((r) => r.id !== id),
        })),
      getRatingsByBeerId: (beerId) =>
        get().ratings.filter((r) => r.beerId === beerId),
      importRatings: (incoming, mode) => {
        if (mode === 'replace') {
          set({ ratings: incoming });
        } else {
          const existing = get().ratings;
          const existingIds = new Set(existing.map(r => r.id));
          const merged = [...existing, ...incoming.filter(r => !existingIds.has(r.id))];
          set({ ratings: merged });
        }
      },
      toggleFavorite: (beerId) =>
        set((state) => ({
          favorites: state.favorites.includes(beerId)
            ? state.favorites.filter(id => id !== beerId)
            : [...state.favorites, beerId],
        })),
    }),
    { name: 'beer-ratings-storage' }
  )
);

export function exportRatingsAsJson(ratings: UserRating[]): void {
  const data = JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), ratings }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `beerrater-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
