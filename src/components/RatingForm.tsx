import { useState, useRef } from 'react';
import { Beer, UserRating } from '../types/beer';
import { useBeerStore } from '../store/beerStore';
import { StarRating } from './StarRating';
import { Camera, X, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface RatingFormProps {
  beer: Beer;
  onSaved: () => void;
  existingRating?: UserRating;
}

const SERVING_TYPES = ['Szklanka', 'Butelka', 'Puszka', 'Kufel', 'Snifter', 'Kieliszek tulipan', 'Inne'];

export function RatingForm({ beer, onSaved, existingRating }: RatingFormProps) {
  const { addRating, updateRating } = useBeerStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [overallScore, setOverallScore] = useState(existingRating?.overallScore ?? 3);
  const [appearance, setAppearance] = useState(existingRating?.appearance ?? 3);
  const [aroma, setAroma] = useState(existingRating?.aroma ?? 3);
  const [taste, setTaste] = useState(existingRating?.taste ?? 3);
  const [mouthfeel, setMouthfeel] = useState(existingRating?.mouthfeel ?? 3);
  const [notes, setNotes] = useState(existingRating?.notes ?? '');
  const [photoUrl, setPhotoUrl] = useState<string | null>(existingRating?.photoUrl ?? null);
  const [drunkAt, setDrunkAt] = useState(existingRating?.drunkAt ?? new Date().toISOString().split('T')[0]);
  const [servingType, setServingType] = useState(existingRating?.servingType ?? 'Szklanka');

  const handlePhotoCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (existingRating) {
      updateRating(existingRating.id, {
        overallScore, appearance, aroma, taste, mouthfeel, notes, photoUrl, drunkAt, servingType,
      });
      toast.success('Ocena zaktualizowana! 🍺');
    } else {
      const newRating: UserRating = {
        id: crypto.randomUUID(),
        beerId: beer.id,
        beerName: beer.name,
        beerImageUrl: beer.image_url,
        date: new Date().toISOString(),
        overallScore,
        appearance,
        aroma,
        taste,
        mouthfeel,
        notes,
        photoUrl,
        drunkAt,
        servingType,
      };
      addRating(newRating);
      toast.success('Ocena zapisana! 🍺');
    }
    onSaved();
  };

  const inputClass = "w-full border border-amber-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 dark:focus:border-amber-500 placeholder-slate-400 dark:placeholder-slate-500 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Overall */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4">
        <StarRating value={overallScore} onChange={setOverallScore} size="lg" label="Ocena ogólna" />
      </div>

      {/* Sub-ratings */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: '👁 Wygląd', value: appearance, set: setAppearance },
          { label: '👃 Aromat', value: aroma, set: setAroma },
          { label: '👅 Smak', value: taste, set: setTaste },
          { label: '💧 Pełnia', value: mouthfeel, set: setMouthfeel },
        ].map(({ label, value, set }) => (
          <div key={label} className="bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 rounded-xl p-3">
            <StarRating value={value} onChange={set} size="sm" label={label} />
          </div>
        ))}
      </div>

      {/* Date + serving */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1.5">📅 Kiedy piłeś?</label>
          <input type="date" value={drunkAt} onChange={e => setDrunkAt(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1.5">🍺 Rodzaj naczynia</label>
          <select value={servingType} onChange={e => setServingType(e.target.value)} className={inputClass}>
            {SERVING_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1.5">📝 Notatki (opcjonalnie)</label>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Smak, zapach, wrażenia..."
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Photo */}
      <div>
        <label className="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1.5">📷 Zdjęcie (opcjonalnie)</label>
        {photoUrl ? (
          <div className="relative rounded-xl overflow-hidden">
            <img src={photoUrl} alt="Zdjęcie piwa" className="w-full h-32 object-cover" />
            <button
              type="button"
              onClick={() => setPhotoUrl(null)}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-amber-200 dark:border-slate-600 rounded-xl p-4 text-slate-400 dark:text-slate-500 hover:border-amber-400 dark:hover:border-amber-600 hover:text-amber-500 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <Camera className="w-4 h-4" />
            Dodaj zdjęcie
          </button>
        )}
        <input ref={fileInputRef} type="file" accept="image/*" capture="environment" onChange={handlePhotoCapture} className="hidden" />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors shadow-md shadow-amber-200 dark:shadow-amber-900/30 flex items-center justify-center gap-2"
      >
        <CheckCircle className="w-5 h-5" />
        {existingRating ? 'Zaktualizuj ocenę' : 'Zapisz ocenę'}
      </button>
    </form>
  );
}
