import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Lang, TRANSLATIONS, T } from '../data/translations';

interface I18nStore {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const useI18nStore = create<I18nStore>()(
  persist(
    (set) => ({
      lang: 'pl',
      setLang: (lang) => set({ lang }),
    }),
    { name: 'beerrater_lang' }
  )
);

export function useI18n(): { t: T; lang: Lang; setLang: (l: Lang) => void } {
  const { lang, setLang } = useI18nStore();
  return { t: TRANSLATIONS[lang] as T, lang, setLang };
}
