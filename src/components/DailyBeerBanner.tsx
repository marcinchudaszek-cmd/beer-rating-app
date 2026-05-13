import { Beer } from '../types/beer';
import { X, Sparkles, Bell, BellOff } from 'lucide-react';
import { useState } from 'react';
import { requestNotificationPermission } from '../hooks/useDailyBeer';

interface DailyBeerBannerProps {
  beer: Beer;
  onOpen: (beer: Beer) => void;
  onDismiss: () => void;
}

export function DailyBeerBanner({ beer, onOpen, onDismiss }: DailyBeerBannerProps) {
  const [notifAsked, setNotifAsked] = useState(
    // Jeśli przeglądarka już ma decyzję, nie pytaj ponownie
    'Notification' in window && Notification.permission !== 'default'
  );
  const [notifGranted, setNotifGranted] = useState(
    'Notification' in window && Notification.permission === 'granted'
  );

  const handleAskNotif = async () => {
    const granted = await requestNotificationPermission();
    setNotifGranted(granted);
    setNotifAsked(true);
  };

  return (
    <div className="mb-5 rounded-2xl overflow-hidden shadow-lg border border-amber-200 dark:border-amber-700/50 bg-gradient-to-r from-amber-400 to-orange-500">
      {/* Nagłówek */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold uppercase tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          Piwo dnia
        </div>
        <button
          onClick={onDismiss}
          className="text-white/70 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Treść */}
      <div
        className="flex items-center gap-4 px-4 py-3 cursor-pointer group"
        onClick={() => onOpen(beer)}
      >
        {/* Obrazek */}
        <div className="w-16 h-16 flex-shrink-0 bg-white/20 rounded-xl flex items-center justify-center p-2">
          {beer.image_url ? (
            <img
              src={beer.image_url}
              alt={beer.name}
              className="w-full h-full object-contain drop-shadow"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          ) : (
            <span className="text-4xl">🍺</span>
          )}
        </div>

        {/* Opis */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-black text-base leading-tight truncate group-hover:underline">
            {beer.name}
          </h3>
          <p className="text-amber-100 text-xs italic truncate">{beer.tagline}</p>
          <div className="flex gap-2 mt-1.5">
            <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {beer.abv}% ABV
            </span>
            {beer.ibu && (
              <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {beer.ibu} IBU
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pasek zgody na powiadomienia — tylko jeśli jeszcze nie pytaliśmy */}
      {!notifAsked && (
        <div className="border-t border-white/20 px-4 py-2.5 flex items-center justify-between gap-3">
          <p className="text-white/80 text-xs">Chcesz codzienne powiadomienie o piwie?</p>
          <div className="flex gap-2">
            <button
              onClick={handleAskNotif}
              className="flex items-center gap-1 bg-white text-amber-600 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <Bell className="w-3.5 h-3.5" />
              Tak!
            </button>
            <button
              onClick={() => setNotifAsked(true)}
              className="flex items-center gap-1 bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/30 transition-colors"
            >
              <BellOff className="w-3.5 h-3.5" />
              Nie
            </button>
          </div>
        </div>
      )}

      {/* Potwierdzenie gdy udzielono zgody */}
      {notifAsked && notifGranted && (
        <div className="border-t border-white/20 px-4 py-2 text-center text-xs text-white/70">
          🔔 Będziesz dostawać powiadomienie codziennie o 9:00
        </div>
      )}
    </div>
  );
}
