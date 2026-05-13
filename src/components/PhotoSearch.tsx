import { useState } from 'react';
import { Camera as CameraIcon, X, Loader, Images, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Beer } from '../types/beer';
import { useBeerApi } from '../hooks/useBeerApi';

interface PhotoSearchProps {
  onResult: (beer: Beer) => void;
}

type Phase =
  | { type: 'idle' }
  | { type: 'processing'; label: string }
  | { type: 'found'; beer: Beer }
  | { type: 'ai_info'; name: string; brewery: string; description: string }
  | { type: 'error'; message: string };

export function PhotoSearch({ onResult }: PhotoSearchProps) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>({ type: 'idle' });
  const { getAllBeers } = useBeerApi();

  const close = () => {
    setOpen(false);
    setPreview(null);
    setPhase({ type: 'idle' });
  };

  const reset = () => {
    setPreview(null);
    setPhase({ type: 'idle' });
  };

  const callGrok = async (messages: object[], model = 'grok-2-vision-1212'): Promise<string> => {
    const apiKey = import.meta.env.VITE_GROK_API_KEY as string | undefined;
    if (!apiKey) throw new Error('Brak klucza API (VITE_GROK_API_KEY w pliku .env)');

    const resp = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, max_tokens: 600, messages }),
    });

    if (!resp.ok) {
      let detail = `Błąd API ${resp.status}`;
      try {
        const err = await resp.json() as { error?: { message?: string; type?: string } };
        if (err.error?.message) detail = err.error.message;
      } catch { /* ignoruj */ }
      throw new Error(detail);
    }

    const data = await resp.json() as { choices: { message: { content: string } }[] };
    return data.choices?.[0]?.message?.content?.trim() ?? '';
  };

  const analyze = async (base64: string, mimeType: string) => {
    try {
      // Krok 1: rozpoznaj etykietę
      setPhase({ type: 'processing', label: 'Grok analizuje etykietę…' });

      const identified = await callGrok([{
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64}` } },
          {
            type: 'text',
            text: 'To jest zdjęcie piwa lub etykiety piwnej. Podaj TYLKO nazwę piwa i nazwę browaru w formacie: "NAZWA | BROWAR". Jeśli nie możesz rozpoznać — napisz tylko "NIEZNANE". Nie dodawaj nic więcej.',
          },
        ],
      }]);

      if (!identified || identified.toUpperCase() === 'NIEZNANE') {
        setPhase({ type: 'error', message: 'Nie rozpoznano piwa. Spróbuj wyraźniejsze zdjęcie etykiety.' });
        return;
      }

      const [namePart = '', breweryPart = ''] = identified.split('|').map(s => s.trim());

      // Krok 2: szukaj w lokalnej bazie
      setPhase({ type: 'processing', label: `Szukam „${namePart}" w bazie…` });
      const all = getAllBeers();
      const found = all.find(b =>
        b.name.toLowerCase() === namePart.toLowerCase() ||
        namePart.toLowerCase().includes(b.name.toLowerCase()) ||
        b.name.toLowerCase().includes(namePart.toLowerCase())
      );

      if (found) {
        setPhase({ type: 'found', beer: found });
        setTimeout(() => { close(); onResult(found); }, 1200);
        return;
      }

      // Krok 3: nie ma w bazie — pobierz opis z AI
      setPhase({ type: 'processing', label: `Pobieram opis „${namePart}" z AI…` });

      const infoText = await callGrok([{
        role: 'user',
        content: `Opisz krótko piwo "${namePart}" od browaru "${breweryPart || 'nieznany browar'}". Podaj: styl piwa, smak, aromat, moc. Max 3 zdania. Odpowiedz po polsku.`,
      }], 'grok-3-latest');

      setPhase({
        type: 'ai_info',
        name: namePart,
        brewery: breweryPart,
        description: infoText,
      });

    } catch (e) {
      setPhase({
        type: 'error',
        message: e instanceof Error ? e.message : 'Błąd połączenia. Sprawdź internet.',
      });
    }
  };

  const openCamera = async (source: CameraSource) => {
    setPhase({ type: 'processing', label: source === CameraSource.Camera ? 'Otwieranie aparatu…' : 'Otwieranie galerii…' });
    try {
      const image = await Camera.getPhoto({
        quality: 85,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source,
      });

      if (image.base64String) {
        // Normalizuj format — Grok akceptuje tylko image/jpeg, image/png, image/webp
        const fmt = (image.format ?? 'jpeg').toLowerCase().replace('jpg', 'jpeg');
        const mime = ['jpeg', 'png', 'webp'].includes(fmt) ? `image/${fmt}` : 'image/jpeg';
        setPreview(`data:${mime};base64,${image.base64String}`);
        await analyze(image.base64String, mime);
      } else {
        setPhase({ type: 'error', message: 'Nie otrzymano zdjęcia. Spróbuj ponownie.' });
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message.toLowerCase() : '';
      if (msg.includes('cancel') || msg.includes('dismiss') || msg.includes('user')) {
        setPhase({ type: 'idle' });
      } else {
        setPhase({ type: 'error', message: 'Nie można otworzyć aparatu. Sprawdź uprawnienia.' });
      }
    }
  };

  const isLoading = phase.type === 'processing';

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border-2 border-dashed border-amber-300 dark:border-amber-700 hover:border-amber-500 text-amber-600 dark:text-amber-400 font-semibold py-3 rounded-2xl transition-colors mb-4"
      >
        <CameraIcon className="w-5 h-5" />
        Szukaj piwa po zdjęciu etykiety
      </button>

      {/* Modal pełnoekranowy na mobile */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: '#0f172a' }}>

          {/* Pasek górny */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <CameraIcon className="w-6 h-6 text-amber-400" />
              <span className="text-white font-bold text-lg">Szukaj po zdjęciu</span>
            </div>
            {!isLoading && (
              <button onClick={close} className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Treść */}
          <div className="flex-1 flex flex-col justify-between px-5 py-6 overflow-y-auto">

            {/* Podgląd zdjęcia */}
            {preview ? (
              <div className="rounded-2xl overflow-hidden mb-6" style={{ backgroundColor: '#1e293b' }}>
                <img src={preview} alt="Podgląd" className="w-full max-h-64 object-contain" />
              </div>
            ) : (
              <div
                className="rounded-2xl mb-6 flex flex-col items-center justify-center gap-3 py-12"
                style={{ backgroundColor: '#1e293b', border: '2px dashed #f59e0b' }}
              >
                <CameraIcon className="w-16 h-16 text-amber-400 opacity-60" />
                <p className="text-slate-400 text-base text-center">Wybierz źródło zdjęcia poniżej</p>
              </div>
            )}

            {/* Status / wynik */}
            <div className="mb-6 space-y-4">

              {phase.type === 'processing' && (
                <div className="flex items-center gap-4 rounded-2xl px-5 py-4" style={{ backgroundColor: '#1e293b' }}>
                  <Loader className="w-7 h-7 text-amber-400 animate-spin flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-base">{phase.label}</p>
                    <p className="text-slate-400 text-sm mt-0.5">Proszę czekać…</p>
                  </div>
                </div>
              )}

              {phase.type === 'found' && (
                <div className="flex items-center gap-4 rounded-2xl px-5 py-4" style={{ backgroundColor: '#14532d' }}>
                  <CheckCircle className="w-7 h-7 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-green-300 font-bold text-base">Znaleziono!</p>
                    <p className="text-green-200 text-sm mt-0.5">{phase.beer.name}</p>
                  </div>
                </div>
              )}

              {phase.type === 'error' && (
                <div className="flex items-start gap-4 rounded-2xl px-5 py-4" style={{ backgroundColor: '#450a0a' }}>
                  <AlertCircle className="w-7 h-7 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-200 text-base leading-relaxed">{phase.message}</p>
                </div>
              )}

              {phase.type === 'ai_info' && (
                <div className="rounded-2xl px-5 py-4 space-y-3" style={{ backgroundColor: '#1e293b' }}>
                  <div>
                    <p className="text-amber-400 font-bold text-lg">{phase.name}</p>
                    {phase.brewery && (
                      <p className="text-slate-400 text-sm mt-0.5">🏭 {phase.brewery}</p>
                    )}
                  </div>
                  <p className="text-slate-200 text-base leading-relaxed">{phase.description}</p>
                  <p className="text-slate-500 text-sm">Piwa nie ma w lokalnej bazie.</p>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent((phase.name + ' ' + phase.brewery + ' piwo').trim())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-amber-400 text-sm font-semibold"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Szukaj więcej w Google
                  </a>
                </div>
              )}
            </div>

            {/* Przyciski akcji */}
            <div className="space-y-3">
              {!isLoading && phase.type === 'idle' && (
                <>
                  <button
                    onClick={() => openCamera(CameraSource.Camera)}
                    className="w-full flex items-center justify-center gap-3 text-white font-bold text-lg py-5 rounded-2xl transition-colors active:scale-95"
                    style={{ backgroundColor: '#f59e0b' }}
                  >
                    <CameraIcon className="w-7 h-7" />
                    Zrób zdjęcie aparatem
                  </button>
                  <button
                    onClick={() => openCamera(CameraSource.Photos)}
                    className="w-full flex items-center justify-center gap-3 font-bold text-lg py-5 rounded-2xl transition-colors border-2 border-slate-600 text-slate-300 active:scale-95"
                    style={{ backgroundColor: '#1e293b' }}
                  >
                    <Images className="w-7 h-7" />
                    Wybierz z galerii
                  </button>
                </>
              )}

              {!isLoading && (phase.type === 'error' || phase.type === 'ai_info') && (
                <button
                  onClick={reset}
                  className="w-full flex items-center justify-center gap-3 font-bold text-lg py-5 rounded-2xl border-2 border-amber-500 text-amber-400 transition-colors active:scale-95"
                  style={{ backgroundColor: '#1e293b' }}
                >
                  <CameraIcon className="w-6 h-6" />
                  Spróbuj ponownie
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
