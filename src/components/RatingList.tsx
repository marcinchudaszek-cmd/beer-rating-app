import { useBeerStore } from '../store/beerStore';
import { StarRating } from './StarRating';
import { Trash2, Camera, Calendar, Beer } from 'lucide-react';
import { UserRating } from '../types/beer';
import toast from 'react-hot-toast';

interface RatingListProps {
  beerId?: number;
  showBeerName?: boolean;
}

export function RatingList({ beerId, showBeerName = false }: RatingListProps) {
  const { ratings, deleteRating, getRatingsByBeerId } = useBeerStore();

  const list: UserRating[] = beerId !== undefined
    ? getRatingsByBeerId(beerId)
    : [...ratings].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleDelete = (id: string) => {
    deleteRating(id);
    toast.success('Ocena usunięta');
  };

  if (list.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3 text-slate-400 dark:text-slate-600">
        <Beer className="w-12 h-12 opacity-30" />
        <p className="text-sm font-medium">Brak ocen</p>
        <p className="text-xs">Przejdź do zakładki "Oceń" i dodaj pierwszą ocenę!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {list.map((rating) => (
        <div key={rating.id} className="bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
          {rating.photoUrl && (
            <div className="relative h-36">
              <img src={rating.photoUrl} alt="Zdjęcie piwa" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-2 left-3 flex items-center gap-1 text-white text-xs">
                <Camera className="w-3 h-3" />
                <span>Zdjęcie</span>
              </div>
            </div>
          )}

          <div className="p-4 space-y-3">
            {showBeerName && (
              <h4 className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2">
                <Beer className="w-4 h-4" />
                {rating.beerName}
              </h4>
            )}

            <div className="flex items-start justify-between">
              <div>
                <StarRating value={rating.overallScore} readOnly size="md" />
                <div className="flex items-center gap-3 mt-1 text-xs text-slate-400 dark:text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(rating.drunkAt || rating.date).toLocaleDateString('pl-PL')}
                  </span>
                  <span className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full font-medium">
                    {rating.servingType}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleDelete(rating.id)}
                className="text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 p-1.5 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {[
                { label: '👁 Wygląd', value: rating.appearance },
                { label: '👃 Aromat', value: rating.aroma },
                { label: '👅 Smak', value: rating.taste },
                { label: '💧 Pełnia', value: rating.mouthfeel },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">{label}</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-xs ${i < value ? 'text-amber-400' : 'text-slate-200 dark:text-slate-600'}`}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {rating.notes && (
              <div className="bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-xl px-3 py-2">
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">"{rating.notes}"</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
