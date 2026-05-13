// Opisy składników piwa — chmiele, słody, drożdże

export interface IngredientInfo {
  name: string;
  emoji: string;
  origin?: string;
  character: string;
  aroma: string;
  best_for: string;
  abv_range?: string;
  ibu_range?: string;
  notes?: string;
}

export const HOPS_INFO: Record<string, IngredientInfo> = {
  'Cascade': { name: 'Cascade', emoji: '🌿', origin: 'USA (Oregon)', character: 'Cytrusowy, kwiatowy, ziołowy', aroma: 'Grejpfrut, kwiat pomarańczy, żywica', best_for: 'American Pale Ale, APA, IPA', notes: 'Jeden z najpopularniejszych chmieli na świecie. Symbol amerykańskiej rewolucji kraftowej.' },
  'Centennial': { name: 'Centennial', emoji: '🌿', origin: 'USA', character: 'Kwiatowy, cytrusowy, sosnowy', aroma: 'Cytryna, grejpfrut, kwiaty limonki', best_for: 'IPA, DIPA, American Ales', notes: 'Zwany "Super Cascade" — intensywniejszy od oryginału, ulubieniec browarów kraftowych.' },
  'Simcoe': { name: 'Simcoe', emoji: '🌿', origin: 'USA (Washington)', character: 'Sosnowy, ziemisty, tropikalny', aroma: 'Marakuja, morela, sosna, cynaderek', best_for: 'IPA, DIPA, West Coast IPA', notes: 'Wyjątkowo wysoka zawartość alfa-kwasów. Nadaje intensywną żywiczną goryczką i owocowy aromat.' },
  'Citra': { name: 'Citra', emoji: '🌿', origin: 'USA', character: 'Intensywnie cytrusowy, tropikalny', aroma: 'Limonka, grejpfrut, marakuja, liczi', best_for: 'Hazy IPA, NEIPA, pale ale', notes: 'Jeden z najbardziej pożądanych chmieli na świecie. Nadaje soczyste, owocowe nuty.' },
  'Galaxy': { name: 'Galaxy', emoji: '🌿', origin: 'Australia', character: 'Tropikalny, owocowy, cytrusowy', aroma: 'Brzoskwinia, marakuja, agrest, grejpfrut', best_for: 'Hazy IPA, NEIPA, Australian Pale Ale', notes: 'Australijski hit — wyjątkowo wysoka zawartość olejków eterycznych.' },
  'Saaz': { name: 'Saaz', emoji: '🌿', origin: 'Czechy (Żatec)', character: 'Ziołowy, ziemisty, kwiatowy', aroma: 'Zioła, siano, delikatne kwiaty, herbata', best_for: 'Pilsner, Lager, Czech lager', notes: 'Szlachetny chmiel z 700-letnią tradycją. Podstawa czeskich i niemieckich lagerów.' },
  'Hallertau': { name: 'Hallertau', emoji: '🌿', origin: 'Niemcy (Bawaria)', character: 'Kwiatowy, ziołowy, delikatny', aroma: 'Kwiaty, zioła, delikatna cytrusowość', best_for: 'Lager, Weizen, Pilsner, Märzen', notes: 'Klasyczny bawarski chmiel. Podstawa tradycyjnego piwowarstwa niemieckiego.' },
  'Hallertau Tradition': { name: 'Hallertau Tradition', emoji: '🌿', origin: 'Niemcy', character: 'Ziołowy, kwiatowy, lekko cytrusowy', aroma: 'Zioła, kwiaty, delikatny cytrus', best_for: 'Lager, Weizen, Pilsner', notes: 'Nowoczesna odmiana Hallertau — stabilniejsza i łatwiejsza w uprawie.' },
  'Hallertau Mittelfrüh': { name: 'Hallertau Mittelfrüh', emoji: '🌿', origin: 'Niemcy', character: 'Delikatny, kwiatowy, szlachetny', aroma: 'Kwiaty polne, zioła, delikatna ziemistość', best_for: 'Oktoberfest, Märzen, Helles', notes: 'Jeden z najbardziej cenionych szlachetnych chmieli. Bardzo trudny w uprawie.' },
  'Columbus': { name: 'Columbus', emoji: '🌿', origin: 'USA', character: 'Żywiczny, ziemisty, mocno gorzki', aroma: 'Żywica, sosna, ziemia, lekki cytrus', best_for: 'IPA, DIPA, American Stout', notes: 'Znany też jako CTZ. Wysoka zawartość alfa-kwasów — głównie do goryczki.' },
  'Chinook': { name: 'Chinook', emoji: '🌿', origin: 'USA (Washington)', character: 'Sosnowy, żywiczny, ziołowy', aroma: 'Sosna, grejpfrut, zioła, dym', best_for: 'IPA, Smoked Beer, Porter', notes: 'Charakterystyczny sosnowy aromat wyróżnia go wśród chmielu American.' },
  'Amarillo': { name: 'Amarillo', emoji: '🌿', origin: 'USA (Yakima)', character: 'Intensywnie cytrusowy, tropikalny', aroma: 'Pomarańcza, grejpfrut, morela, brzoskwinia', best_for: 'Pale Ale, IPA, session ale', notes: 'Klon chmielowy znany wyłącznie z Yakima Valley. Intensywnie owocowy.' },
  'Nelson Sauvin': { name: 'Nelson Sauvin', emoji: '🌿', origin: 'Nowa Zelandia', character: 'Winny, tropikalny, owocowy', aroma: 'Białe wino, agrest, liczi, morela', best_for: 'Pale Ale, IPA, wine-like beers', notes: 'Jedyny chmiel który smakuje jak białe wino. Ekskluzywny rarytas z Nowej Zelandii.' },
  'Motueka': { name: 'Motueka', emoji: '🌿', origin: 'Nowa Zelandia', character: 'Cytrusowy, tropikalny, limonkowy', aroma: 'Limonka, cytryna, tropikalne owoce', best_for: 'Lager, Pilsner, Pale Ale', notes: 'Nowozelandzki odpowiednik Saaz — dużo świeższy i owocowy.' },
  'Lubelski': { name: 'Lubelski', emoji: '🌿', origin: 'Polska (Lublin)', character: 'Ziołowy, kwiatowy, delikatny', aroma: 'Zioła, kwiaty, delikatna cytrusowość', best_for: 'Polskie lagery, Pilsner', notes: 'Polska odmiana szlachetna, spokrewniona z Saaz. Skarb polskiego piwowarstwa.' },
  'Northern Brewer': { name: 'Northern Brewer', emoji: '🌿', origin: 'Niemcy/USA', character: 'Żywiczny, sosnowy, ziołowy', aroma: 'Sosna, mięta, zioła, lekka cytrusowość', best_for: 'Lager, Pilsner, Pale Ale', notes: 'Wszechstronny chmiel, popularny zarówno w Europie jak i USA.' },
  'Styrian Goldings': { name: 'Styrian Goldings', emoji: '🌿', origin: 'Słowenia', character: 'Kwiatowy, ziołowy, delikatny', aroma: 'Kwiaty, zioła, delikatna ziemistość', best_for: 'Ale, Porter, Stout, Saison', notes: 'Europejski klasyk. Pomimo nazwy nie jest spokrewniony z East Kent Goldings.' },
  'Bramling Cross': { name: 'Bramling Cross', emoji: '🌿', origin: 'Wielka Brytania', character: 'Owocowy, jagodowy, cytrusowy', aroma: 'Czarna porzeczka, cytryna, jeżyna', best_for: 'British Ale, Porter, Stout', notes: 'Rzadki brytyjski chmiel z wyjątkowym aromatem czarnej porzeczki.' },
};

export const MALTS_INFO: Record<string, IngredientInfo> = {
  'Pale Malt': { name: 'Pale Malt', emoji: '🌾', origin: 'Uniwersalny', character: 'Słodowy, chlebowy, delikatny', aroma: 'Świeży chleb, biszkopt, delikatne nuty miodowe', best_for: 'Baza dla większości stylów', notes: 'Fundament piwowarstwa — podstawowy słód używany w prawie każdym piwie.' },
  'Pilsner Malt': { name: 'Pilsner Malt', emoji: '🌾', origin: 'Europa Środkowa', character: 'Delikatny, chlebowy, czysty', aroma: 'Świeże ciasto, delikatna słodycz, zboże', best_for: 'Pilsner, Lager, Helles', notes: 'Najjaśniejszy i najdelikatniejszy słód bazowy. Essencja stylu pilsner.' },
  'Munich Malt': { name: 'Munich Malt', emoji: '🌾', origin: 'Niemcy (Monachium)', character: 'Bogaty, słodowy, chlebowy', aroma: 'Ciemny chleb, krakersy, lekki karmel', best_for: 'Märzen, Oktoberfest, Dunkel, Bock', notes: 'Intensywniej palony od Pale Malt. Daje złocisty kolor i pełny słodowy charakter.' },
  'Munich Dark Malt': { name: 'Munich Dark Malt', emoji: '🌾', origin: 'Niemcy', character: 'Bogaty, karmelowy, ciemny', aroma: 'Karmel, ciemny chleb, prażone zboże', best_for: 'Dunkel, Bock, Dark Lager', notes: 'Ciemniejsza wersja Munich Malt — głębszy kolor i intensywniejszy smak.' },
  'Crystal Malt': { name: 'Crystal Malt', emoji: '🌾', origin: 'Uniwersalny', character: 'Słodki, karmelowy, owocowy', aroma: 'Karmel, toffi, suszone owoce, rodzynki', best_for: 'Amber Ale, Red Ale, Porter, Stout', notes: 'Słód karmelizowany na sucho. Dodaje słodyczy, koloru i pełni bez dodatkowej fermentacji.' },
  'Caramel Malt': { name: 'Caramel Malt', emoji: '🌾', origin: 'Uniwersalny', character: 'Słodki, karmelowy', aroma: 'Karmel, toffi, lekka słodycz', best_for: 'Ale, Porter, lekkie ciemne piwa', notes: 'Podobny do Crystal Malt — dodaje słodyczy i brązowawego koloru.' },
  'Roasted Malt': { name: 'Roasted Malt', emoji: '🌾', origin: 'Uniwersalny', character: 'Palony, gorzki, kawowy', aroma: 'Espresso, gorzka czekolada, spalenizna', best_for: 'Stout, Porter, Schwarzbier', notes: 'Palony do bardzo ciemnego koloru. Nadaje czarną barwę i intensywny palony smak.' },
  'Chocolate Malt': { name: 'Chocolate Malt', emoji: '🌾', origin: 'Wielka Brytania', character: 'Czekoladowy, kawowy, łagodniejszy od Roasted', aroma: 'Czekolada mleczna, kawa, orzechy', best_for: 'Porter, Stout, Brown Ale', notes: 'Łagodniejszy od Roasted Malt. Nadaje kolor i smak czekolady bez intensywnej goryczy.' },
  'Wheat Malt': { name: 'Wheat Malt', emoji: '🌾', origin: 'Niemcy/Belgia', character: 'Pszeniczny, chlebowy, lekko kwaśny', aroma: 'Świeże ciasto, mąka pszenna, lekka cytrusowość', best_for: 'Weizen, Witbier, Berliner Weisse', notes: 'Pszenica daje charakterystyczną mętność, kremową pianę i lekko chlebowy smak.' },
  'Roasted Wheat Malt': { name: 'Roasted Wheat Malt', emoji: '🌾', origin: 'Niemcy', character: 'Palony pszeniczny, kawowy', aroma: 'Palona pszenica, kawa, czekolada', best_for: 'Dunkelweizen, Dark Wheat Beer', notes: 'Palona pszenica — nadaje ciemny kolor piwu pszenicznemu bez nadmiernej goryczy.' },
};

export const YEAST_INFO: Record<string, IngredientInfo> = {
  'Wyeast 1056 - American Ale': { name: 'American Ale', emoji: '🦠', character: 'Czysty, neutralny, lekko owocowy', aroma: 'Neutralny z lekką estrową nutą', best_for: 'APA, IPA, American Ale', notes: 'Jeden z najpopularniejszych szczepów drożdży. Czyste fermentowanie podkreśla smak chmielu.' },
  'Wyeast 1272 - American Ale II': { name: 'American Ale II', emoji: '🦠', character: 'Owocowy, lekko orzechowy', aroma: 'Estry owocowe, lekka nutka lnu', best_for: 'American Ale, IPA, Pale Ale', notes: 'Nieco bardziej złożony od 1056. Dodaje delikatnych nut owocowych.' },
  'Wyeast 3068 - Weihenstephan Weizen': { name: 'Weihenstephan Weizen', emoji: '🦠', character: 'Bananowy, goździkowy, typowy weizen', aroma: 'Banan, goździk, wanilia, bąbelki', best_for: 'Weizen, Hefeweizen, Dunkelweizen', notes: 'Legendarny szczep z browaru Weihenstephan. Tworzy charakterystyczny aromat banana i goździka w piwach pszenicznych.' },
  'Lager': { name: 'Drożdże lagerowe', emoji: '🦠', character: 'Czysty, neutralny, suchy', aroma: 'Praktycznie brak estrów — czysty smak', best_for: 'Lager, Pilsner, Märzen, Bock', notes: 'Fermentują w niskiej temperaturze (7-13°C). Tworzą czyste, krystaliczne piwa bez estrów.' },
  'Weizen': { name: 'Drożdże pszeniczne', emoji: '🦠', character: 'Owocowy, fenolowy, estrowy', aroma: 'Banan, goździk, wanilia', best_for: 'Weizen, Witbier, Wheat Beer', notes: 'Drożdże odpowiedzialne za charakterystyczny smak piw pszenicznych.' },
  'Weizen WB-06': { name: 'WB-06 Weizen', emoji: '🦠', character: 'Bananowy z nutą fenoliczną', aroma: 'Banan, lekki goździk, estery owocowe', best_for: 'Hefeweizen, Dunkelweizen', notes: 'Suche drożdże piwowarskie do piw pszenicznych. Wygodna alternatywa dla płynnych szczepów.' },
  'US-05': { name: 'US-05 American Ale', emoji: '🦠', character: 'Czysty, neutralny, wszechstronny', aroma: 'Minimalny — podkreśla chmiel i słód', best_for: 'APA, IPA, American Ale, każdy styl', notes: 'Najbardziej wszechstronny suchy szczep drożdży. Ulubieniec domowych piwowarów.' },
  'Wyeast 3724 - Belgian Saison': { name: 'Belgian Saison', emoji: '🦠', character: 'Ziołowy, pieprzowy, owocowy', aroma: 'Pieprz, goździk, cytrus, siano', best_for: 'Saison, Farmhouse Ale, Bière de Garde', notes: 'Typowe drożdże belgijskie do saisonów. Fermenting w wysokiej temperaturze daje pełny, złożony charakter.' },
  'Wyeast 3942 - Belgian Wheat': { name: 'Belgian Wheat', emoji: '🦠', character: 'Owocowy, fenolowy, lekko kwaśny', aroma: 'Skórka pomarańczowa, kolendra, banan', best_for: 'Witbier, Belgian Wheat', notes: 'Drożdże do belgijskich piw pszenicznych. Podkreślają aromaty przypraw dodawanych do witbier.' },
  'Weihenstephan 3068': { name: 'Weihenstephan 3068', emoji: '🦠', character: 'Intensywnie bananowy, goździkowy', aroma: 'Banan, goździk, wanilia, owocowe estry', best_for: 'Hefeweizen, Weissbier, Dunkelweizen', notes: 'Ten sam kultowy szczep co w browarze Weihenstephan — gwarancja autentycznego bawarskiego aromatu.' },
  'Wyeast 2206 - Bavarian Lager': { name: 'Bavarian Lager', emoji: '🦠', character: 'Czysty, delikatnie słodowy', aroma: 'Czysty, lekko słodowy, brak estrów', best_for: 'Märzen, Helles, Pilsner, Dunkel', notes: 'Klasyczny bawarski szczep lagerowy. Produkuje czyste, dobrze zbalansowane lagery.' },
  'Lager Oktoberfest': { name: 'Oktoberfest Lager', emoji: '🦠', character: 'Czysty, pełny, lekko słodowy', aroma: 'Czysty z nutą słodowości', best_for: 'Märzen, Festbier, Oktoberfest', notes: 'Tradycyjny szczep fermentowany przy 9-12°C. Tworzy pełne, złociste piwa festiwalowe.' },
  'Lager Schneider': { name: 'Schneider Weizen', emoji: '🦠', character: 'Bananowy, goździkowy, lekko kwaśny', aroma: 'Intensywny banan, goździk, estry', best_for: 'Schneider Weisse, Aventinus', notes: 'Szczep browaru Schneider używany nieprzerwanie od 1872 roku. Niepowtarzalny charakter.' },
};

// Funkcja wyszukiwania informacji o składniku
export function findHopInfo(name: string): IngredientInfo | null {
  const exact = HOPS_INFO[name];
  if (exact) return exact;
  const key = Object.keys(HOPS_INFO).find(k => name.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(name.toLowerCase()));
  return key ? HOPS_INFO[key] : null;
}

export function findMaltInfo(name: string): IngredientInfo | null {
  const exact = MALTS_INFO[name];
  if (exact) return exact;
  const key = Object.keys(MALTS_INFO).find(k => name.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(name.toLowerCase()));
  return key ? MALTS_INFO[key] : null;
}

export function findYeastInfo(name: string): IngredientInfo | null {
  const exact = YEAST_INFO[name];
  if (exact) return exact;
  const key = Object.keys(YEAST_INFO).find(k => name.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(name.toLowerCase()));
  return key ? YEAST_INFO[key] : null;
}
