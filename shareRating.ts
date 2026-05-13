import { UserRating } from '../types/beer';

// Generuje obrazek PNG z oceną i udostępnia przez Web Share API
export async function shareRating(rating: UserRating, beerName: string): Promise<void> {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Tło gradientowe
  const bg = ctx.createLinearGradient(0, 0, 1080, 1080);
  bg.addColorStop(0, '#0d0b05');
  bg.addColorStop(1, '#1c1508');
  ctx.fillStyle = bg;
  ctx.roundRect(0, 0, 1080, 1080, 60);
  ctx.fill();

  // Amber glow
  const glow = ctx.createRadialGradient(540, 400, 50, 540, 400, 500);
  glow.addColorStop(0, 'rgba(245,158,11,0.15)');
  glow.addColorStop(1, 'rgba(245,158,11,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1080, 1080);

  // Logo
  ctx.font = 'bold 52px Arial';
  ctx.fillStyle = '#f59e0b';
  ctx.textAlign = 'center';
  ctx.fillText('🍺 BeerRater', 540, 120);

  // Linia dekoracyjna
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.moveTo(100, 148);
  ctx.lineTo(980, 148);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Nazwa piwa
  ctx.font = 'bold 84px Arial Black';
  ctx.fillStyle = '#fef3c7';
  ctx.textAlign = 'center';

  // Zawijanie długiej nazwy
  const maxWidth = 880;
  const words = beerName.split(' ');
  let line = '';
  const lines: string[] = [];
  for (const word of words) {
    const test = line + (line ? ' ' : '') + word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  lines.push(line);

  const startY = lines.length > 1 ? 260 : 300;
  lines.slice(0, 2).forEach((l, i) => {
    ctx.fillText(l, 540, startY + i * 90);
  });

  // Gwiazdki (duże)
  const stars = '★'.repeat(Math.round(rating.overallScore)) + '☆'.repeat(5 - Math.round(rating.overallScore));
  ctx.font = 'bold 120px Arial';
  ctx.fillStyle = '#f59e0b';
  ctx.fillText(stars, 540, 520);

  // Wynik liczbowy
  ctx.font = 'bold 72px Arial';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText(`${rating.overallScore.toFixed(1)} / 5`, 540, 610);

  // Kategorie (małe)
  const cats = [
    { label: '👁 Wygląd', val: rating.appearance },
    { label: '👃 Aromat', val: rating.aroma },
    { label: '👅 Smak', val: rating.taste },
    { label: '💧 Pełnia', val: rating.mouthfeel },
  ];

  ctx.font = '36px Arial';
  ctx.fillStyle = '#fef3c7';
  const colW = 880 / cats.length;
  cats.forEach((c, i) => {
    const x = 100 + colW * i + colW / 2;
    ctx.fillStyle = '#9ca3af';
    ctx.fillText(c.label, x, 710);
    ctx.fillStyle = '#fbbf24';
    ctx.fillText('★'.repeat(c.val) + '☆'.repeat(5 - c.val), x, 756);
  });

  // Notatka
  if (rating.notes && rating.notes.length > 0) {
    ctx.font = 'italic 34px Arial';
    ctx.fillStyle = '#9ca3af';
    ctx.textAlign = 'center';
    const note = rating.notes.length > 60 ? rating.notes.slice(0, 57) + '…' : rating.notes;
    ctx.fillText(`"${note}"`, 540, 860);
  }

  // Data i branding
  const date = new Date(rating.date).toLocaleDateString('pl-PL');
  ctx.font = '28px Arial';
  ctx.fillStyle = '#4b5563';
  ctx.fillText(`Ocenione ${date} · Beagle Apps Studio`, 540, 980);

  // Dolna linia
  const line2 = ctx.createLinearGradient(0, 0, 1080, 0);
  line2.addColorStop(0, '#f59e0b');
  line2.addColorStop(1, '#ea580c');
  ctx.strokeStyle = line2;
  ctx.lineWidth = 8;
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.moveTo(0, 1060);
  ctx.lineTo(1080, 1060);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Udostępnij
  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const file = new File([blob], `beerrater-${beerName.replace(/\s+/g, '-')}.png`, { type: 'image/png' });

    if (navigator.share && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `Oceniłem: ${beerName}`,
        text: `Dałem ${rating.overallScore}/5 gwiazdek pivu "${beerName}" w BeerRater!`,
        files: [file],
      });
    } else {
      // Fallback — pobierz obrazek
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `beerrater-${beerName.replace(/\s+/g, '-')}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }
  }, 'image/png');
}
