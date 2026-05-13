import { useState, useEffect } from 'react';
import { Beer } from '../types/beer';
import { useBeerApi } from './useBeerApi';

interface DailyBeerData {
  date: string;
  beerId: number;
  bannerDismissed: boolean;
}

const STORAGE_KEY = 'beerrater_daily_beer';

function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

function isCapacitorEnv(): boolean {
  return typeof (window as { Capacitor?: unknown }).Capacitor !== 'undefined';
}

export interface UseDailyBeerResult {
  dailyBeer: Beer | null;
  isNewToday: boolean;
  dismissToday: () => void;
}

export function useDailyBeer(): UseDailyBeerResult {
  const { getAllBeers, getBeerById } = useBeerApi();
  const [dailyBeer, setDailyBeer] = useState<Beer | null>(null);
  const [isNewToday, setIsNewToday] = useState(false);

  useEffect(() => {
    const today = getTodayString();
    let stored: DailyBeerData | null = null;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) stored = JSON.parse(raw) as DailyBeerData;
    } catch {
      stored = null;
    }

    if (stored && stored.date === today) {
      const beer = getBeerById(stored.beerId);
      if (beer) {
        setDailyBeer(beer);
        setIsNewToday(!stored.bannerDismissed);
      }
    } else {
      const all = getAllBeers();
      const picked = all[Math.floor(Math.random() * all.length)];
      const newData: DailyBeerData = { date: today, beerId: picked.id, bannerDismissed: false };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      setDailyBeer(picked);
      setIsNewToday(true);
      void scheduleDailyNotification(picked.name);
    }
  }, []);

  const dismissToday = () => {
    setIsNewToday(false);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const stored = JSON.parse(raw) as DailyBeerData;
        stored.bannerDismissed = true;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      }
    } catch { /* ignore */ }
  };

  return { dailyBeer, isNewToday, dismissToday };
}

// ---------------------------------------------------------------------------
// Powiadomienie — działa w PWA i na Android (Capacitor)
// Pakiet Capacitor jest opcjonalny – ładowany tylko gdy wykryta platforma Android
// ---------------------------------------------------------------------------

async function scheduleDailyNotification(beerName: string): Promise<void> {
  try {
    if (isCapacitorEnv()) {
      // Na Android instalujemy: npm install @capacitor/local-notifications
      // TypeScript nie zna tego pakietu dopóki nie jest zainstalowany,
      // więc używamy require-style dynamic import przez Function żeby
      // uniknąć błędu kompilacji na środowisku bez Capacitora.
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      const importFn = new Function('s', 'return import(s)') as (s: string) => Promise<unknown>;
      const mod = await importFn('@capacitor/local-notifications') as {
        LocalNotifications: {
          requestPermissions: () => Promise<{ display: string }>;
          cancel: (o: { notifications: { id: number }[] }) => Promise<void>;
          schedule: (o: { notifications: unknown[] }) => Promise<void>;
        };
      };
      const { LocalNotifications } = mod;

      const perm = await LocalNotifications.requestPermissions();
      if (perm.display !== 'granted') return;

      await LocalNotifications.cancel({ notifications: [{ id: 42 }] }).catch(() => {});

      const tomorrow9am = new Date();
      tomorrow9am.setDate(tomorrow9am.getDate() + 1);
      tomorrow9am.setHours(9, 0, 0, 0);

      await LocalNotifications.schedule({
        notifications: [{
          id: 42,
          title: '🍺 Piwo dnia na Ciebie czeka!',
          body: `Dziś odkryj: ${beerName}`,
          schedule: { at: tomorrow9am, allowWhileIdle: true },
          smallIcon: 'ic_stat_icon_config_sample',
          channelId: 'daily-beer',
        }],
      });

    } else if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('🍺 Piwo dnia!', {
        body: `Dziś odkryj: ${beerName}`,
        icon: '/icons/icon-192x192.png',
      });
    }
  } catch {
    // Brak uprawnień lub brak pakietu — ignoruj
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  try {
    if (isCapacitorEnv()) {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      const importFn = new Function('s', 'return import(s)') as (s: string) => Promise<unknown>;
      const mod = await importFn('@capacitor/local-notifications') as {
        LocalNotifications: { requestPermissions: () => Promise<{ display: string }> };
      };
      const res = await mod.LocalNotifications.requestPermissions();
      return res.display === 'granted';
    } else if ('Notification' in window) {
      const result = await Notification.requestPermission();
      return result === 'granted';
    }
  } catch { /* ignore */ }
  return false;
}
