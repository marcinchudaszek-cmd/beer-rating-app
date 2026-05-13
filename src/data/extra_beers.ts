import { Beer } from '../types/beer';

// Polskie i niemieckie piwa — ID zaczynają się od 1000
export const EXTRA_BEERS: Beer[] = [
  // ===== POLSKIE =====
  {
    id: 1001, name: 'Żywiec', tagline: 'Polskie piwo z tradycją od 1856 roku.',
    first_brewed: '01/1856', description: 'Żywiec to jedno z najstarszych i najbardziej rozpoznawalnych polskich piw. Warzone w Żywcu na południu Polski, w pobliżu Beskidów. Jasny lager o delikatnej goryczce i słodowym smaku, z nutą chmielu.',
    image_url: null, abv: 5.6, ibu: 18, target_fg: 1010, target_og: 1052, ebc: 8, srm: 4, ph: 4.4, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.5, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Schabowy z ziemniakami', 'Biała kiełbasa', 'Oscypek'], brewers_tips: 'Podawaj w temperaturze 6-8°C.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1002, name: 'Tyskie Gronie', tagline: 'Piwo z Górnego Śląska od 1629.',
    first_brewed: '01/1629', description: 'Tyskie Gronie to jedno z najstarszych piw w Polsce, warzone nieprzerwanie od 1629 roku. Jasny lager o złocistym kolorze, z delikatną goryczką i pełnym słodowym smakiem.',
    image_url: null, abv: 5.2, ibu: 16, target_fg: 1010, target_og: 1050, ebc: 7, srm: 3, ph: 4.3, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.2, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Żurek', 'Golonka', 'Śledź w oleju'], brewers_tips: 'Klasyk — najlepszy do biesiady.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1003, name: 'Okocim Mocne', tagline: 'Mocny i wyrazisty smak z Brzeska.',
    first_brewed: '01/1845', description: 'Okocim Mocne to polskie piwo mocne warzone w Brzesku od 1845 roku. Intensywny smak słodowy z mocniejszym akcentem alkoholowym, złocisty kolor i kremowa piana.',
    image_url: null, abv: 7.0, ibu: 20, target_fg: 1014, target_og: 1064, ebc: 12, srm: 6, ph: 4.5, attenuation_level: 78,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 67, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.5, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 0.5, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 28, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Bigos', 'Pieczony schab', 'Kiełbasa grillowana'], brewers_tips: 'Idealne na zimowe wieczory.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1004, name: 'Lech Premium', tagline: 'Orzeźwiający smak z Poznania.',
    first_brewed: '01/1895', description: 'Lech Premium to jasny lager z Poznania o orzeźwiającym smaku i lekkim ciele. Popularne piwo na imprezy i grillowanie, z delikatną chmielową goryczką.',
    image_url: null, abv: 5.2, ibu: 14, target_fg: 1009, target_og: 1049, ebc: 6, srm: 3, ph: 4.3, attenuation_level: 82,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 55 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.0, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 20, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Pizza', 'Kebab', 'Frytki'], brewers_tips: 'Najlepsze mocno schłodzone.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1005, name: 'Perła Chmielowa', tagline: 'Lubelskie piwo z polskim chmielem.',
    first_brewed: '01/1846', description: 'Perła Chmielowa to piwo z Lublina warzone z polskim chmielem lubelskim. Charakterystyczna chmielowa goryczka i złocisty kolor czynią go jednym z ulubionych regionalnych piw wschodniej Polski.',
    image_url: null, abv: 5.5, ibu: 22, target_fg: 1011, target_og: 1051, ebc: 9, srm: 4, ph: 4.4, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.3, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Pieróg ruski', 'Cebularz lubelski', 'Karp smażony'], brewers_tips: 'Chmiel lubelski to prawdziwy skarb.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1006, name: 'Warka Strong', tagline: 'Mocne piwo z Warki.',
    first_brewed: '01/1478', description: 'Warka ma jedną z najdłuższych tradycji piwowarskich w Polsce — browar powstał w 1478 roku. Warka Strong to mocna wersja, z wyraźnym słodowym charakterem i złocistym kolorem.',
    image_url: null, abv: 7.0, ibu: 19, target_fg: 1014, target_og: 1064, ebc: 11, srm: 5, ph: 4.5, attenuation_level: 78,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.4, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 26, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Bigos myśliwski', 'Żeberka', 'Kapusta z grochem'], brewers_tips: 'Tradycja od 1478 roku.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1007, name: 'Książęce Czarne', tagline: 'Ciemne piwo lagerowe pełne charakteru.',
    first_brewed: '01/1893', description: 'Książęce Czarne to ciemny lager o głębokim rubinowym kolorze i słodowo-karmelowym smaku. Warzone z mieszanki słodów jasnych i palonych, z delikatnymi nutami czekolady i kawy.',
    image_url: null, abv: 6.1, ibu: 25, target_fg: 1013, target_og: 1056, ebc: 60, srm: 30, ph: 4.4, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.5, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 0.8, unit: 'kilograms' } }, { name: 'Caramel Malt', amount: { value: 0.5, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 28, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Dziczyzna', 'Ciemny chleb z serem', 'Czekolada gorzka'], brewers_tips: 'Podawaj w 8°C w kuflu.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1008, name: 'Harnaś', tagline: 'Górskie piwo dla twardzieli.',
    first_brewed: '01/2000', description: 'Harnaś to polskie piwo mocne nawiązujące do tradycji góralskich. Pełny słodowy smak i wyrazisty charakter czynią go ulubionym piwem fanów mocniejszych trunków.',
    image_url: null, abv: 7.0, ibu: 18, target_fg: 1015, target_og: 1065, ebc: 13, srm: 7, ph: 4.5, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 67, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.6, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Oscypek', 'Kiełbasa góralska', 'Bigos'], brewers_tips: 'Dla prawdziwych górali.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1009, name: 'Zwierzyniec Pszeniczne', tagline: 'Polskie pszeniczne z Zamojszczyzny.',
    first_brewed: '01/1994', description: 'Zwierzyniec Pszeniczne to piwo pszeniczne warzone w Zwierzyńcu na Zamojszczyźnie. Mętne, słomkowe, z typowymi dla weizena nutami banana i goździka.',
    image_url: null, abv: 5.0, ibu: 12, target_fg: 1010, target_og: 1050, ebc: 8, srm: 4, ph: 4.2, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 3.0, unit: 'kilograms' } }, { name: 'Pilsner Malt', amount: { value: 1.5, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Weizen' },
    food_pairing: ['Sałatka owocowa', 'Karp po żydowsku', 'Lekkie sery'], brewers_tips: 'Piwo niefiltrowane — wstrząśnij przed nalaniem.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 1010, name: 'Browar Pinta APA', tagline: 'Polska rewolucja kraftowa.',
    first_brewed: '06/2011', description: 'Browar Pinta to pionier polskiej sceny kraftowej. Ich APA zachwyca aromatem cytrusów i tropikalnych owoców, z balansem słodowym i orzeźwiającą goryczką. Jedno z pierwszych polskich piw rzemieślniczych.',
    image_url: null, abv: 5.5, ibu: 35, target_fg: 1011, target_og: 1054, ebc: 12, srm: 6, ph: 4.3, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.5, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.4, unit: 'kilograms' } }], hops: [{ name: 'Citra', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Cascade', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Kurczak z grilla', 'Krewetki', 'Sałata Cezar'], brewers_tips: 'Pierwsze polskie piwo kraftowe.', contributed_by: 'Beagle Apps Studio'
  },

  // ===== NIEMIECKIE =====
  {
    id: 2001, name: 'Paulaner Weissbier', tagline: 'Monachijskie pszeniczne od 1634.',
    first_brewed: '01/1634', description: 'Paulaner Weissbier to klasyczne bawarski piwo pszeniczne warzone w Monachium od 1634 roku. Mętne, złociste, z intensywnym aromatem banana i goździka. Jedno z najbardziej ikonicznych piw świata.',
    image_url: null, abv: 5.5, ibu: 14, target_fg: 1012, target_og: 1052, ebc: 10, srm: 5, ph: 4.2, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 3.2, unit: 'kilograms' } }, { name: 'Pilsner Malt', amount: { value: 1.5, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 16, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Weizen WB-06' },
    food_pairing: ['Weißwurst z musztardą', 'Bretzel', 'Schnitzel'], brewers_tips: 'Nalewaj po spirali do szklanki weizen.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2002, name: 'Hofbräu Original', tagline: 'Piwo z legendarnego browaru dworskiego.',
    first_brewed: '01/1589', description: 'Hofbräu Original to piwo z najsłynniejszego browaru Monachium — Hofbräuhaus, założonego w 1589 roku przez księcia Wilhelma V. Złocisty lager o pełnym słodowym smaku i harmonijnej goryczce.',
    image_url: null, abv: 5.1, ibu: 20, target_fg: 1011, target_og: 1050, ebc: 8, srm: 4, ph: 4.3, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.0, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Schweinshaxe', 'Sauerbraten', 'Leberkäse'], brewers_tips: 'Serwowane w Hofbräuhaus od 1589 roku.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2003, name: 'Weihenstephaner Hefe Weissbier', tagline: 'Najstarszy browar świata, od 1040.',
    first_brewed: '01/1040', description: 'Weihenstephaner pochodzi z najstarszego na świecie aktywnego browaru — opactwa w Weihenstephan, które warzy piwo od 1040 roku. Hefe Weissbier zachwyca kremową pianą, aromatem banana i delikatną kwaskowatością.',
    image_url: null, abv: 5.4, ibu: 14, target_fg: 1012, target_og: 1051, ebc: 8, srm: 4, ph: 4.2, attenuation_level: 76,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 40 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 3.0, unit: 'kilograms' } }, { name: 'Pilsner Malt', amount: { value: 1.6, unit: 'kilograms' } }], hops: [{ name: 'Hallertau Tradition', amount: { value: 14, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Weihenstephan 3068' },
    food_pairing: ['Brezeln', 'Weißwurst', 'Obatzda (ser bawarski)'], brewers_tips: 'Piwo warzone od 1040 roku — szanuj tradycję.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2004, name: 'Erdinger Dunkel', tagline: 'Ciemne pszeniczne z Erdingu.',
    first_brewed: '01/1886', description: 'Erdinger Dunkel to ciemne piwo pszeniczne z Erdingu w Bawarii. Głęboki mahoniowy kolor, aromat karamelu i czekolady z tłem bananowym. Pełne, aksamitne ciało i długi, gorzko-słodowy finisz.',
    image_url: null, abv: 5.6, ibu: 17, target_fg: 1013, target_og: 1054, ebc: 60, srm: 30, ph: 4.2, attenuation_level: 76,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 50 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 2.5, unit: 'kilograms' } }, { name: 'Munich Dark Malt', amount: { value: 1.0, unit: 'kilograms' } }, { name: 'Roasted Wheat Malt', amount: { value: 0.3, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 18, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Weizen WB-06' },
    food_pairing: ['Kaczka pieczona', 'Grzybowa zupa krem', 'Tiramisu'], brewers_tips: 'Idealne z ciemnymi mięsami i deserami.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2005, name: 'Augustiner Lagerbier Hell', tagline: 'Monachijskie rzemiosło od 1328.',
    first_brewed: '01/1328', description: 'Augustiner to najstarszy monachijski browar, działający od 1328 roku. Lagerbier Hell to jasny lager o wyjątkowej świeżości, delikatnym zapachu chmielu i słodowym smaku. Ulubieniec prawdziwych monachijczyków.',
    image_url: null, abv: 5.2, ibu: 18, target_fg: 1010, target_og: 1050, ebc: 7, srm: 3, ph: 4.4, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.1, unit: 'kilograms' } }], hops: [{ name: 'Hallertau Mittelfrüh', amount: { value: 20, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Obatzda', 'Radieschen (rzodkiewki)', 'Weißwurst'], brewers_tips: 'Monachijczycy twierdzą, że to jedyne prawdziwe piwo.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2006, name: 'Schneider Weisse Original', tagline: 'Pszeniczne z 150-letnią tradycją.',
    first_brewed: '01/1872', description: 'Schneider Weisse Original (TAP 7) to flagowe piwo browaru Schneider, warzonego nieprzerwanie od 1872 roku. Intensywny aromat banana i goździka, pełne ciało i charakterystyczna mętna barwa miodu.',
    image_url: null, abv: 5.4, ibu: 14, target_fg: 1013, target_og: 1053, ebc: 25, srm: 12, ph: 4.2, attenuation_level: 75,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 2.8, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 1.2, unit: 'kilograms' } }], hops: [{ name: 'Hallertau Tradition', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Weizen Schneider' },
    food_pairing: ['Obazda', 'Proszek chlebowy', 'Lekkie curry'], brewers_tips: 'Lej po spirali, zostaw drożdże na dnie butelki.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2007, name: 'Bitburger Premium Pils', tagline: 'Bitte ein Bit! — klasyczny Pilsner.',
    first_brewed: '01/1817', description: 'Bitburger to jeden z najpopularniejszych niemieckich pilsnerów, warzone od 1817 roku. Wyraźna, czysta goryczka chmielu, słomkowy kolor i trwała biała piana. Lekkie i orzeźwiające.',
    image_url: null, abv: 4.8, ibu: 28, target_fg: 1008, target_og: 1046, ebc: 5, srm: 3, ph: 4.4, attenuation_level: 83,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.7, unit: 'kilograms' } }], hops: [{ name: 'Hallertau Tradition', amount: { value: 32, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Saaz', amount: { value: 10, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Lager' },
    food_pairing: ['Sushi', 'Owoce morza', 'Caprese'], brewers_tips: 'Bitte ein Bit! — prosto z chłodnicy.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2008, name: 'Spaten Oktoberfest', tagline: 'Oryginalne piwo Oktoberfest z Monachium.',
    first_brewed: '01/1872', description: 'Spaten Oktoberfest to bursztynowe piwo märzen warzone na Oktoberfest w Monachium. Bogate, słodowe ciało z nutami chleba i toffi, łagodna goryczka. Tradycyjnie serwowane w litrowch kufach na festiwalu.',
    image_url: null, abv: 5.9, ibu: 22, target_fg: 1012, target_og: 1057, ebc: 20, srm: 10, ph: 4.4, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Munich Malt', amount: { value: 3.5, unit: 'kilograms' } }, { name: 'Pilsner Malt', amount: { value: 1.5, unit: 'kilograms' } }, { name: 'Caramel Malt', amount: { value: 0.3, unit: 'kilograms' } }], hops: [{ name: 'Hallertau Mittelfrüh', amount: { value: 24, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager Oktoberfest' },
    food_pairing: ['Schweinshaxe', 'Sauerkraut', 'Hendl (kurczak)'], brewers_tips: 'Serwuj w litrowym kuflu — tak jak na Oktoberfest.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2009, name: 'Köstritzer Schwarzbier', tagline: 'Klasyczne czarne piwo z Turyngii.',
    first_brewed: '01/1543', description: 'Köstritzer Schwarzbier to klasyczne czarne piwo z Turyngii, warzone od 1543 roku. Głęboki czarny kolor, aksamitna konsystencja i smak kawy, czekolady i palonego słodu — zaskakująco lekkie jak na ciemne piwo.',
    image_url: null, abv: 4.8, ibu: 28, target_fg: 1011, target_og: 1047, ebc: 140, srm: 70, ph: 4.4, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.0, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 0.7, unit: 'kilograms' } }, { name: 'Chocolate Malt', amount: { value: 0.3, unit: 'kilograms' } }], hops: [{ name: 'Hallertau Tradition', amount: { value: 28, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Rostbratwurst', 'Soczysty stek', 'Mus czekoladowy'], brewers_tips: 'Czarne, ale lekkie — zaskakuje każdego.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 2010, name: 'Jever Pilsener', tagline: 'Najbardziej gorzki pilsner Niemiec.',
    first_brewed: '01/1848', description: 'Jever Pilsener z Fryzji Wschodniej słynie z wyjątkowo wyrazistej, suchej goryczki — to jeden z najbardziej intensywnie chmielonych pilsnerów w Niemczech. Słomkowy kolor, trwała piana i długi gorzki finisz.',
    image_url: null, abv: 4.9, ibu: 44, target_fg: 1008, target_og: 1047, ebc: 5, srm: 3, ph: 4.4, attenuation_level: 83,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.8, unit: 'kilograms' } }], hops: [{ name: 'Northern Brewer', amount: { value: 40, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Hallertau', amount: { value: 15, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Lager' },
    food_pairing: ['Ryba z frytkami', 'Krabowe paluszki', 'Owoce morza'], brewers_tips: 'Dla miłośników intensywnej goryczki.', contributed_by: 'Beagle Apps Studio'
  },
];
