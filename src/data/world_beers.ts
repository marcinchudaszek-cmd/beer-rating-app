import { Beer } from '../types/beer';

// ID scheme: 3000+ Polska kraft, 4000+ Niemcy, 5000+ Belgia, 6000+ USA kraft,
//            7000+ Czechy, 8000+ reszta świata

export const WORLD_BEERS: Beer[] = [

  // ===== POLSKA KRAFTOWA =====
  {
    id: 3001, name: 'AleBrowar Rowing Jack', tagline: 'Podróżuj z chmielami.',
    first_brewed: '2012', description: 'Legendarny American Pale Ale od AleBrowar — pierwszego polskiego browaru kraftowego. Chmiele Citra i Centennial dają wybuch tropikalnych owoców i cytrusów. Lekkie ciało, suchy finisz, ikoniczne piwo polskiej rewolucji kraftowej.',
    image_url: null, abv: 5.0, ibu: 35, target_fg: 1010, target_og: 1050, ebc: 12, srm: 6, ph: 4.3, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.2, unit: 'kilograms' } }], hops: [{ name: 'Citra', amount: { value: 28, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Centennial', amount: { value: 20, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'US-05' },
    food_pairing: ['Kurczak z grilla', 'Sałatka grecka', 'Krewetki'], brewers_tips: 'Zimne chmielenie kluczem do orzeźwiającego aromatu.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3002, name: 'Browar Pinta Maestro', tagline: 'Rzemiosło w każdym łyku.',
    first_brewed: '2013', description: 'Imperial IPA od pionierów polskiego kraftu — Browaru Pinta. Potężna dawka chmielu Simcoe i Galaxy tworzy intensywny aromat marakui, brzoskwini i żywicy. Mocne, złożone, niezapomniane.',
    image_url: null, abv: 8.5, ibu: 70, target_fg: 1014, target_og: 1080, ebc: 15, srm: 7, ph: 4.2, attenuation_level: 82,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 7.5, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.5, unit: 'kilograms' } }], hops: [{ name: 'Simcoe', amount: { value: 60, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Galaxy', amount: { value: 50, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Stek', 'Dojrzałe sery', 'Ciemna czekolada'], brewers_tips: 'Dry hop przez 5 dni dla maksymalnego aromatu.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3003, name: 'Pracownia Piwa Rummager', tagline: 'Szczecińska precyzja.',
    first_brewed: '2015', description: 'Session IPA ze Szczecina, warzone z dbałością o każdy detal. Chmiele Nelson Sauvin i Motueka tworzą unikalny aromat białego wina i tropikalnych owoców. Lekkie, orzeźwiające, idealne na każdą porę dnia.',
    image_url: null, abv: 4.5, ibu: 40, target_fg: 1008, target_og: 1046, ebc: 8, srm: 4, ph: 4.3, attenuation_level: 83,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 18, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.8, unit: 'kilograms' } }], hops: [{ name: 'Nelson Sauvin', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Motueka', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Sushi', 'Owoce morza', 'Lekkie sałatki'], brewers_tips: 'Pij świeże — aromat szybko ucieka.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3004, name: 'Browar Amber Żywe', tagline: 'Żywe piwo z Gdańska.',
    first_brewed: '2009', description: 'Niefiltrowane, niepasteryzowane piwo z Browaru Amber — trójmiejski klasyk kraftowy. Pełne, słodowe ciało z delikatnymi drożdżowymi nutami. Świeże jak z beczki, naturalna mętność i kremowa piana.',
    image_url: null, abv: 5.2, ibu: 18, target_fg: 1012, target_og: 1052, ebc: 10, srm: 5, ph: 4.4, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 12, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.3, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 0.4, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Śledź', 'Ryba po grecku', 'Kasza gryczana'], brewers_tips: 'Wstrząśnij lekko przed nalaniem.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3005, name: 'Browar Fortuna Komes Porter', tagline: 'Bałtycki porter z Miłosławia.',
    first_brewed: '2008', description: 'Baltic Porter z Browaru Fortuna w Miłosławiu — jeden z najlepszych polskich portów bałtyckich. Intensywny smak kawy, czekolady i suszonych owoców. Gęsty, rozgrzewający, znakomity do dojrzewania.',
    image_url: null, abv: 9.0, ibu: 35, target_fg: 1022, target_og: 1092, ebc: 120, srm: 60, ph: 4.5, attenuation_level: 76,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 67, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 6.0, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 1.2, unit: 'kilograms' } }, { name: 'Chocolate Malt', amount: { value: 0.8, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.6, unit: 'kilograms' } }], hops: [{ name: 'Northern Brewer', amount: { value: 35, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Gulasz wołowy', 'Dojrzały gouda', 'Brownie czekoladowe'], brewers_tips: 'Podawaj w 12-14°C. Dojrzewa jak wino.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3006, name: 'Doctor Brew Citra Ninja', tagline: 'Chmielowy ninja uderza.',
    first_brewed: '2016', description: 'Hazy IPA w stylu New England od Doctor Brew. Citra i Amarillo w ogromnych ilościach tworzą soczyste, mętne piwo o smaku soku owocowego. Minimalna goryczka, maksymalny aromat.',
    image_url: null, abv: 6.5, ibu: 25, target_fg: 1012, target_og: 1062, ebc: 10, srm: 5, ph: 4.2, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.2, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 1.0, unit: 'kilograms' } }], hops: [{ name: 'Citra', amount: { value: 80, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }, { name: 'Amarillo', amount: { value: 60, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Kurczak tajski', 'Mango lassi', 'Ciasto cytrynowe'], brewers_tips: 'Pij do 4 tygodni od warzenia.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3007, name: 'Browar Stu Mostów WRCLW', tagline: 'Wrocław w butelce.',
    first_brewed: '2014', description: 'Flagowe piwo wrocławskiego Browaru Stu Mostów. American IPA z chmielami Mosaic i Citra — aromat mango, brzoskwini i cytrusów. Zbalansowane ciało ze słodową słodyczą. Duma Wrocławia.',
    image_url: null, abv: 6.0, ibu: 50, target_fg: 1011, target_og: 1058, ebc: 14, srm: 7, ph: 4.3, attenuation_level: 81,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.8, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.4, unit: 'kilograms' } }], hops: [{ name: 'Citra', amount: { value: 40, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Cascade', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'US-05' },
    food_pairing: ['Żurek wrocławski', 'Gołąbki', 'Ser ementaler'], brewers_tips: 'Mosaic dry hop na zimno przez 4 dni.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3008, name: 'Inne Beczki Salamander', tagline: 'Ogień w każdym łyku.',
    first_brewed: '2017', description: 'Double IPA z krakowskich Innych Beczek. Salamander pali jak prawdziwy smok — potężna dawka chmielu Simcoe, Columbus i Galaxy. Mocne alkoholowe ciepło z aromatem żywicy, sosny i tropiku.',
    image_url: null, abv: 8.0, ibu: 80, target_fg: 1014, target_og: 1076, ebc: 16, srm: 8, ph: 4.2, attenuation_level: 82,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 6.5, unit: 'kilograms' } }], hops: [{ name: 'Simcoe', amount: { value: 55, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Columbus', amount: { value: 40, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Galaxy', amount: { value: 45, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Burgery', 'Ostre skrzydełka', 'Steki'], brewers_tips: 'Pij chłodne 8°C — goryczka jest intensywna.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3009, name: 'Kingpin Browar Stary Port', tagline: 'Gdański Baltic Porter.',
    first_brewed: '2013', description: 'Baltic Porter z gdańskiego Browaru Stary Port. Nawiązanie do tradycji portów bałtyckich eksportowanych z Gdańska do Anglii w XVIII wieku. Bogaty smak czekolady, kawy i śliwki, gładkie kremowe ciało.',
    image_url: null, abv: 8.5, ibu: 30, target_fg: 1020, target_og: 1086, ebc: 100, srm: 50, ph: 4.5, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 67, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.5, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 1.0, unit: 'kilograms' } }, { name: 'Chocolate Malt', amount: { value: 0.8, unit: 'kilograms' } }], hops: [{ name: 'Northern Brewer', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Żeberka wieprzowe', 'Tarta czekoladowa', 'Oscypek'], brewers_tips: 'Tradycja gdańskich portów od 300 lat.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3010, name: 'Browar Artezan Galaxy', tagline: 'Australijska gwiazda w Polsce.',
    first_brewed: '2015', description: 'Single-hop IPA z warszawskiego Artezanu — cały aromat pochodzi wyłącznie od chmielu Galaxy z Australii. Intensywna brzoskwinia, marakuja i agrest. Czyste, skupione, fascynujące.',
    image_url: null, abv: 5.8, ibu: 45, target_fg: 1011, target_og: 1056, ebc: 12, srm: 6, ph: 4.3, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.6, unit: 'kilograms' } }], hops: [{ name: 'Galaxy', amount: { value: 70, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Pad Thai', 'Kurczak kokosowy', 'Mango sorbet'], brewers_tips: 'Single-hop — docenisz każdy niuans Galaxy.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3011, name: 'Zakładowy Grodziskie', tagline: 'Odrodzenie polskiego stylu.',
    first_brewed: '2016', description: 'Grodziskie — jedyny oryginalny polski styl piwny, prawie wymarły. Warzone z wędzonej pszenicy, lekkie (2-3% ABV), wyjątkowo orzeźwiające. Dymny aromat, owocowe nuty, niemal bez goryczki. Prawdziwy skarb polskiego piwowarstwa.',
    image_url: null, abv: 3.0, ibu: 10, target_fg: 1006, target_og: 1030, ebc: 4, srm: 2, ph: 4.2, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 62, unit: 'celsius' }, duration: 40 }], fermentation: { temp: { value: 18, unit: 'celsius' } }, twist: 'Smoked wheat malt' },
    ingredients: { malt: [{ name: 'Roasted Wheat Malt', amount: { value: 2.5, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 8, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Wyeast 3942 - Belgian Wheat' },
    food_pairing: ['Wędzone ryby', 'Twaróg ze szczypiorkiem', 'Chleb razowy'], brewers_tips: 'Jedyny oryginalny polski styl piwny — szanuj tradycję.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3012, name: 'Nepomucen Bursztyn', tagline: 'Wielkopolski amber z charakterem.',
    first_brewed: '2013', description: 'Amber Ale z wielkopolskiego Browaru Nepomucen. Bursztynowy kolor, karmelowa słodycz przełamana cytrusową goryczką. Zbalansowane i wszechstronne — pasuje do każdej okazji.',
    image_url: null, abv: 5.5, ibu: 30, target_fg: 1012, target_og: 1054, ebc: 25, srm: 12, ph: 4.4, attenuation_level: 78,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.0, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.7, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 0.5, unit: 'kilograms' } }], hops: [{ name: 'Centennial', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Cascade', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Pieczeń wieprzowa', 'Zurek', 'Ser żółty'], brewers_tips: 'Klasyczny amber ale — niezawodny wybór.', contributed_by: 'Beagle Apps Studio'
  },

  // ===== NIEMCY KRAFT =====
  {
    id: 4001, name: 'Crew Republic Roundup', tagline: 'Monachijski kraft wbrew tradycji.',
    first_brewed: '2011', description: 'Double IPA z Monachium od Crew Republic — przewrót w bawarskim piwowarstwie. Mosaic, Citra i Simcoe tworzą intensywny owocowy aromat daleki od reinheitsgebot. Odważne, prowokacyjne, wybitne.',
    image_url: null, abv: 8.0, ibu: 65, target_fg: 1014, target_og: 1076, ebc: 16, srm: 8, ph: 4.2, attenuation_level: 82,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 6.5, unit: 'kilograms' } }], hops: [{ name: 'Citra', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }, { name: 'Simcoe', amount: { value: 45, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Burger bawaryczny', 'Schweinshaxe', 'Pikantne curry'], brewers_tips: 'Kraft na przekór tradycji — Munich może być nowoczesne.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 4002, name: 'Schneider Weisse Tap X Meine Hopfenweisse', tagline: 'Pszeniczne IPA z Niemiec.',
    first_brewed: '2007', description: 'Rewolucyjne połączenie Hefeweizen z intensywnym chmieleniem American. Współpraca Schneider Weisse z Brooklyn Brewery. Aromat banana i goździka spotyka się z cytrusowym chmielowaniem. Styl który zmienił piwowarstwo.',
    image_url: null, abv: 8.2, ibu: 45, target_fg: 1016, target_og: 1080, ebc: 20, srm: 10, ph: 4.2, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 4.0, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 2.5, unit: 'kilograms' } }], hops: [{ name: 'Hallertau Tradition', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Cascade', amount: { value: 30, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'Weizen Schneider' },
    food_pairing: ['Raki z masłem', 'Smażony halibut', 'Krem mango'], brewers_tips: 'Kolaboracja która zmieniła historię piwowarstwa pszenicznego.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 4003, name: 'Maisel & Friends Kellerbier', tagline: 'Surowe, żywe, niefiltrowane.',
    first_brewed: '2010', description: 'Kellerbier z Bayreuth — niefiltrowany lager prosto z piwnicy. Mętne, żywe, drożdżowe. Pełne ciało z nutami chleba i ziół. Tradycja frankońska w najlepszym wydaniu.',
    image_url: null, abv: 5.4, ibu: 22, target_fg: 1011, target_og: 1052, ebc: 12, srm: 6, ph: 4.4, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.2, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 0.4, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Bratwurst z musztardą', 'Chleb razowy z serem', 'Precel'], brewers_tips: 'Kellerbier pij w temperaturze piwnicy — ok 10°C.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 4004, name: 'Bamberg Schlenkerla Rauchbier', tagline: 'Dym tysiąca buków.',
    first_brewed: '1678', description: 'Ikoniczny Rauchbier z Bambergu — warzone z bukowego wędzonego słodu od 1678 roku. Intensywny aromat dymu z drewna bukowego, szynki i torfu. Nabyta miłość — pierwsze kilka łyków szokuje, potem uzależnia.',
    image_url: null, abv: 5.1, ibu: 20, target_fg: 1012, target_og: 1051, ebc: 30, srm: 15, ph: 4.4, attenuation_level: 76,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: 'Beechwood smoked malt' },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 2.0, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 2.5, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 20, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Wędzona szynka', 'Kiełbasa grillowana', 'Ser wędzony'], brewers_tips: 'Daj sobie czas — ta miłość wymaga cierpliwości.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 4005, name: 'Freigeist Ottekolong', tagline: 'Kolońska herezja w stylu gose.',
    first_brewed: '2013', description: 'Kölsch-Gose hybrid od ekstremalnego browaru Freigeist. Połączenie kolońskiej lekkości z solą i kolendrą stylu gose. Orzeźwiające, lekko kwaśne, z subtelną cytrusowością. Piwo graniczne między tradycją a rewolucją.',
    image_url: null, abv: 4.8, ibu: 12, target_fg: 1008, target_og: 1046, ebc: 5, srm: 3, ph: 3.8, attenuation_level: 83,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 18, unit: 'celsius' } }, twist: 'Salt and coriander' },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.2, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 1.5, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 12, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Wyeast 1056 - American Ale' },
    food_pairing: ['Owoce morza', 'Sałatka caprese', 'Grillowane warzywa'], brewers_tips: 'Sól w piwie? Tak — i właśnie to go ożywia.', contributed_by: 'Beagle Apps Studio'
  },

  // ===== BELGIA =====
  {
    id: 5001, name: 'Chimay Bleue', tagline: 'Trapistyczna głębia.',
    first_brewed: '1948', description: 'Legendarny ciemny tripel z opactwa trapistów w Chimay w Belgii. Warzone przez mnichów od 1948 roku. Złożony aromat suszonych owoców, karmelu, przypraw i drożdży. Dojrzewa jak wino — z wiekiem staje się coraz lepszy.',
    image_url: null, abv: 9.0, ibu: 35, target_fg: 1014, target_og: 1088, ebc: 60, srm: 30, ph: 4.4, attenuation_level: 84,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 67, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 24, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 6.5, unit: 'kilograms' } }, { name: 'Caramel Malt', amount: { value: 0.8, unit: 'kilograms' } }], hops: [{ name: 'Styrian Goldings', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Wyeast 1214 - Belgian Abbey' },
    food_pairing: ['Dziczyzna', 'Dojrzałe sery trapistyczne', 'Czekolada 70%'], brewers_tips: 'Warzone przez mnichów — szanuj ich pracę.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 5002, name: 'Duvel', tagline: 'Diabelska słodycz.',
    first_brewed: '1923', description: 'Ikoniczne belgijskie złote strong ale — nazwa "Duvel" to flamandzki "diabeł". Krystalicznie złote, z ogromną pianą, decepcyjnie lekkie w smaku. 8,5% ABV ukrytego pod kwiatowym, owocowym aromatem. Ostrzegamy — łatwo się nabić.',
    image_url: null, abv: 8.5, ibu: 32, target_fg: 1008, target_og: 1082, ebc: 8, srm: 4, ph: 4.2, attenuation_level: 90,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 22, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 6.0, unit: 'kilograms' } }], hops: [{ name: 'Styrian Goldings', amount: { value: 28, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Saaz', amount: { value: 15, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Wyeast 1388 - Belgian Strong Ale' },
    food_pairing: ['Małże z frytkami', 'Brie', 'Owoce morza'], brewers_tips: 'Nalewaj w dwóch etapach do tulipana — piana jest esencją Duvela.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 5003, name: 'Orval', tagline: 'Unikalne piwo trapistyczne.',
    first_brewed: '1931', description: 'Orval jest wyjątkowe wśród piw trapistycznych — zawiera drożdże Brettanomyces, które fermentują podczas leżakowania w butelce. Świeże jest cytrusowe i gorzkie, dojrzałe staje się funky, skórzane, ziemiste. Jedno piwo, nieskończone odmiany.',
    image_url: null, abv: 6.2, ibu: 38, target_fg: 1006, target_og: 1058, ebc: 15, srm: 7, ph: 4.0, attenuation_level: 90,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 18, unit: 'celsius' } }, twist: 'Brettanomyces' },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.8, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.3, unit: 'kilograms' } }], hops: [{ name: 'Styrian Goldings', amount: { value: 32, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Hallertau', amount: { value: 18, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Belgian Trappist + Brettanomyces' },
    food_pairing: ['Ser Orval', 'Endywia z serem', 'Wątróbka drobiowa'], brewers_tips: 'Miej cierpliwość — każdy rok leżakowania daje inne piwo.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 5004, name: 'Westmalle Tripel', tagline: 'Oryginalny tripel trapistyczny.',
    first_brewed: '1934', description: 'Westmalle stworzyło styl "Tripel" — to tu narodziła się ta kategoria w 1934 roku. Złociste, musujące, z aromatem owoców, chmieli i drożdży. Suche, wytrawne, z gorącym alkoholem ukrytym pod elegancją. Klasyk.',
    image_url: null, abv: 9.5, ibu: 38, target_fg: 1010, target_og: 1093, ebc: 10, srm: 5, ph: 4.1, attenuation_level: 89,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 24, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 7.0, unit: 'kilograms' } }], hops: [{ name: 'Styrian Goldings', amount: { value: 32, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Hallertau', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Belgian Trappist Westmalle' },
    food_pairing: ['Krab', 'Łosoś', 'Krem serowy'], brewers_tips: 'Styl Tripel pochodzi stąd — szanuj ojcowiznę.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 5005, name: 'Rochefort 10', tagline: 'Trapistyczna legenda.',
    first_brewed: '1960', description: 'Jeden z najwyżej ocenianych piw świata. Dark quad z opactwa Saint-Remy w Rochefort. 11,3% ABV ukryte pod smakiem fig, daktyli, czekolady i porto. Aksamitne, gęste, złożone do granic możliwości.',
    image_url: null, abv: 11.3, ibu: 27, target_fg: 1022, target_og: 1109, ebc: 80, srm: 40, ph: 4.5, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 68, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 25, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 8.0, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 1.5, unit: 'kilograms' } }, { name: 'Caramel Malt', amount: { value: 0.5, unit: 'kilograms' } }], hops: [{ name: 'Styrian Goldings', amount: { value: 24, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Belgian Trappist Rochefort' },
    food_pairing: ['Foie gras', 'Wołowina duszona', 'Tarta śliwkowa'], brewers_tips: 'Pij z kieliszka do porto. Temperatura 14-16°C.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 5006, name: 'Delirium Tremens', tagline: 'Słonie w głowie.',
    first_brewed: '1989', description: 'Belgian Golden Strong Ale w butelce ozdobionej różowymi słoniami. 8,5% ABV z aromatem bananów, groźek i korzeni. Jedna z najbardziej nagradzanych marek piwnych świata. Pij ostrożnie — to nie woda.',
    image_url: null, abv: 8.5, ibu: 26, target_fg: 1010, target_og: 1083, ebc: 8, srm: 4, ph: 4.3, attenuation_level: 88,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 22, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 6.2, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 20, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Styrian Goldings', amount: { value: 18, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Belgian Golden Strong' },
    food_pairing: ['Carbonnade', 'Brie z orzechami', 'Crepe Suzette'], brewers_tips: 'Te różowe słonie to nie halucynacja — to symbol marki.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 5007, name: 'Cantillon Gueuze', tagline: 'Dzika fermentacja Brukseli.',
    first_brewed: '1900', description: 'Spontanicznie fermentowane lambic z brukselskiej rodzinnej manufaktury Cantillon. Blend różnych roczników, leżakujących w dębowych beczkach. Intensywnie kwaśne, musujące jak szampan, z aromatem skóry, siana i cytrusów. Najbardziej kontrowersyjne piwo świata.',
    image_url: null, abv: 5.0, ibu: 10, target_fg: 1004, target_og: 1050, ebc: 8, srm: 4, ph: 3.2, attenuation_level: 92,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 15, unit: 'celsius' } }, twist: 'Wild fermentation' },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.5, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 1.5, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 8, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Wild Lambic Culture' },
    food_pairing: ['Ostrygi', 'Ceviche', 'Kozi ser'], brewers_tips: 'Fermentacja spontaniczna — browar otwarty tylko zimą.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 5008, name: 'Saison Dupont', tagline: 'Królowa saisonów.',
    first_brewed: '1844', description: 'Wzorcowy saison z walońskiej farmy Dupont. Ziołowy, pieprzowy, owocowy — złożony jak ogród botaniczny. Suchy finisz, musująca gazacja, słomkowy kolor. Piwo farmerów warzące od 1844 roku. Zmieniło oblicze piwowarstwa rzemieślniczego na całym świecie.',
    image_url: null, abv: 6.5, ibu: 30, target_fg: 1010, target_og: 1063, ebc: 15, srm: 7, ph: 4.2, attenuation_level: 84,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 28, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 5.0, unit: 'kilograms' } }], hops: [{ name: 'Styrian Goldings', amount: { value: 28, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Hallertau', amount: { value: 15, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Wyeast 3724 - Belgian Saison' },
    food_pairing: ['Mule w białym winie', 'Kozi ser', 'Sałatka niçoise'], brewers_tips: 'Fermentuj w wysokiej temperaturze — fenole to serce saizonu.', contributed_by: 'Beagle Apps Studio'
  },

  // ===== USA KRAFT =====
  {
    id: 6001, name: 'Sierra Nevada Pale Ale', tagline: 'Piwo które zapoczątkowało rewolucję.',
    first_brewed: '1980', description: 'Sierra Nevada Pale Ale z 1980 roku zapoczątkowało erę American Craft Beer. Chmiel Cascade w roli głównej — aromat grejpfruta, kwiatu pomarańczy i żywicy. Zbalansowana goryczka, złocisty kolor, kremowa piana. 40 lat później wciąż wzorcowe.',
    image_url: null, abv: 5.6, ibu: 38, target_fg: 1012, target_og: 1053, ebc: 14, srm: 7, ph: 4.4, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.4, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.4, unit: 'kilograms' } }], hops: [{ name: 'Cascade', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Cascade', amount: { value: 25, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Burger serowy', 'Pizza pepperoni', 'Nachos'], brewers_tips: 'To piwo zmieniło Amerykę — i świat.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 6002, name: 'Dogfish Head 60 Minute IPA', tagline: 'Chmielony przez całą godzinę.',
    first_brewed: '2003', description: 'Innowacyjne IPA od Dogfish Head — chmiel dodawany co minutę przez 60 minut gotowania. Wynik: nieskończenie złożona goryczka z warstwami cytrusów, sosny, tropiku i ziół. Perfekcyjna balansja słodowości i IBU 60.',
    image_url: null, abv: 6.0, ibu: 60, target_fg: 1012, target_og: 1058, ebc: 14, srm: 7, ph: 4.3, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Continuous hopping' },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.8, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.4, unit: 'kilograms' } }], hops: [{ name: 'Amarillo', amount: { value: 35, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Centennial', amount: { value: 30, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Spicy wings', 'Pulled pork', 'Cheddar ostry'], brewers_tips: '60 minutowe gotowanie — 60 IBU. Matematycznie doskonałe.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 6003, name: 'Allagash White', tagline: 'Amerykański witbier.',
    first_brewed: '1995', description: 'Wzorcowy American Witbier inspirowany belgijską tradycją. Skórka pomarańczowa, kolendra i owies tworzą orzeźwiające, cytrusowe piwo z delikatną kwaskowatością. Mętne, słomkowe, z kremową pianą. Letnie piwo par excellence.',
    image_url: null, abv: 5.1, ibu: 13, target_fg: 1010, target_og: 1049, ebc: 6, srm: 3, ph: 4.2, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Orange peel, coriander' },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 2.8, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 1.8, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 12, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Wyeast 3942 - Belgian Wheat' },
    food_pairing: ['Sałatka owocowa', 'Kalmary smażone', 'Brie'], brewers_tips: 'Skórka pomarańczowa i kolendra — serce witbiera.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 6004, name: 'Russian River Pliny the Elder', tagline: 'Legendarny DIPA z Sonoma.',
    first_brewed: '2000', description: 'Jedno z najbardziej kultowych piw świata. Double IPA od Russian River Brewing — wzorzec gatunku. Citra, Simcoe, CTZ i Centennial tworzą eksplozję cytrusów, sosny i tropiku. Suchy, gorzki finisz. Ludzie ustawiają się po niego w kolejkach.',
    image_url: null, abv: 8.0, ibu: 100, target_fg: 1013, target_og: 1077, ebc: 14, srm: 7, ph: 4.2, attenuation_level: 83,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 6.5, unit: 'kilograms' } }], hops: [{ name: 'Simcoe', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }, { name: 'Citra', amount: { value: 45, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Columbus', amount: { value: 40, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'US-05' },
    food_pairing: ['Stek z grilla', 'Ostre curry', 'Aged cheddar'], brewers_tips: 'Pij świeże — max 6 tygodni od warzenia.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 6005, name: 'Bell\'s Two Hearted Ale', tagline: 'Michigan w puszce.',
    first_brewed: '1997', description: 'Wielokrotnie nagradzany American IPA od Bell\'s Brewery z Michigan. Wyłącznie chmiel Centennial — kwiatowy, cytrusowy, intensywny. Miedziany kolor, czyste ciało, długi gorzki finisz. Legenda Midwest craft beer.',
    image_url: null, abv: 7.0, ibu: 55, target_fg: 1014, target_og: 1067, ebc: 18, srm: 9, ph: 4.3, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.5, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.5, unit: 'kilograms' } }], hops: [{ name: 'Centennial', amount: { value: 60, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Centennial', amount: { value: 30, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['BBQ chicken', 'Fish tacos', 'Nachos'], brewers_tips: 'Tylko Centennial — jednorodność jako sztuka.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 6006, name: 'The Alchemist Heady Topper', tagline: 'Vermont DIPA numer jeden.',
    first_brewed: '2004', description: 'Najwyżej oceniane piwo na świecie przez lata (RateBeer). Double IPA w puszce z Vermont — pierwsze słynne "Hazy". Tropikalne owoce, kwiaty, cytrusy bez agresywnej goryczki. Wzorzec NEIPA i symbol craftowej rewolucji.',
    image_url: null, abv: 8.0, ibu: 75, target_fg: 1014, target_og: 1077, ebc: 12, srm: 6, ph: 4.2, attenuation_level: 82,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.8, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 0.8, unit: 'kilograms' } }], hops: [{ name: 'Citra', amount: { value: 70, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }, { name: 'Galaxy', amount: { value: 60, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }, { name: 'Simcoe', amount: { value: 50, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Kurczak teriyaki', 'Mango sticky rice', 'Taco z krewetkami'], brewers_tips: 'Pij z puszki na świeżo — tak radzi sam browar.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 6007, name: 'Founders Breakfast Stout', tagline: 'Śniadanie mistrzów.',
    first_brewed: '2004', description: 'Imperial Stout z Michigan warzony z kawą, płatkami owsianymi i czekoladą. Aromat intensywnego espresso, gorzkiej czekolady i wanilii. Aksamitne ciało, kremowa piana. Pij na śniadanie — jeśli masz odwagę.',
    image_url: null, abv: 8.3, ibu: 60, target_fg: 1022, target_og: 1082, ebc: 160, srm: 80, ph: 4.5, attenuation_level: 73,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 67, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Coffee, chocolate' },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.0, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 1.2, unit: 'kilograms' } }, { name: 'Chocolate Malt', amount: { value: 0.8, unit: 'kilograms' } }], hops: [{ name: 'Columbus', amount: { value: 40, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Centennial', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Naleśniki z syropem klonowym', 'Brownie', 'Tiramisu'], brewers_tips: 'Kawa + czekolada = idealne śniadanie dla dorosłych.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 6008, name: 'Stone IPA', tagline: 'Arrogant Bastard\'s brother.',
    first_brewed: '1997', description: 'Stone IPA z San Diego — jeden z ikon West Coast IPA. Intensywna goryczka Pine i grejpfrut, suche ciało, brak kompromisów. "Fizyczny" styl chmielowania który zdefiniował zachodnioamerykański craft beer.',
    image_url: null, abv: 6.9, ibu: 77, target_fg: 1012, target_og: 1065, ebc: 12, srm: 6, ph: 4.3, attenuation_level: 82,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.4, unit: 'kilograms' } }], hops: [{ name: 'Chinook', amount: { value: 35, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Centennial', amount: { value: 30, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Simcoe', amount: { value: 25, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Tacos meksykańskie', 'Grillowany tuńczyk', 'Jalapeño poppers'], brewers_tips: 'West Coast IPA nie przebacza kompromisów — ani Stone.', contributed_by: 'Beagle Apps Studio'
  },

  // ===== CZECHY =====
  {
    id: 7001, name: 'Pilsner Urquell', tagline: 'Pierwsze na świecie jasne piwo.',
    first_brewed: '1842', description: 'To tutaj w 1842 roku Josef Groll uwarzyło pierwsze na świecie jasne piwo, tworząc styl pilsner. Złociste jak słońce, krystalicznie czyste, z kremową pianą. Gorzki chmiel Saaz z żateckiego regionu i miękkl woda z Pilzna. Oryginał nie do pobicia.',
    image_url: null, abv: 4.4, ibu: 40, target_fg: 1008, target_og: 1046, ebc: 6, srm: 3, ph: 4.4, attenuation_level: 82,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 8, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.8, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 40, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Saaz', amount: { value: 15, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Lager' },
    food_pairing: ['Svíčková', 'Smažený sýr', 'Knedlíky'], brewers_tips: 'Nalewaj przez 3 minuty dla idealnej piany.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 7002, name: 'Kozel Černý', tagline: 'Czeski ciemny lager.',
    first_brewed: '1874', description: 'Kozel Černý to ciemny czechosłowacki lager z regionu Velké Popovice. Głęboka mahoniowa barwa, aromat karmelu i czekolady z delikatną słodyczą. Gładkie, aksamitne ciało i miękki finisz. Ulubieniec czeskich piwoszy.',
    image_url: null, abv: 3.8, ibu: 22, target_fg: 1010, target_og: 1038, ebc: 60, srm: 30, ph: 4.4, attenuation_level: 74,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 2.5, unit: 'kilograms' } }, { name: 'Munich Dark Malt', amount: { value: 0.8, unit: 'kilograms' } }, { name: 'Caramel Malt', amount: { value: 0.3, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 18, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Svíčková', 'Vepřo knedlo zelo', 'Česneková polévka'], brewers_tips: 'Ciemne i lekkie — najlepszy kompromis.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 7003, name: 'Bernard Světlý Ležák', tagline: 'Niepasteryzowany czeski klasyk.',
    first_brewed: '1597', description: 'Bernard z Humpolca — niepasteryzowane, niefiltrowane czeskie piwo o tradycji sięgającej 1597 roku. Jasny lager z autentycznym drożdżowym charakterem, żywą pianą i naturalną świeżością. Jeden z najlepszych czeskich browarów regionalnych.',
    image_url: null, abv: 5.0, ibu: 28, target_fg: 1011, target_og: 1049, ebc: 8, srm: 4, ph: 4.4, attenuation_level: 78,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.0, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Saaz', amount: { value: 10, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Lager' },
    food_pairing: ['Roštěnka', 'Bramborový salát', 'Utopenci'], brewers_tips: 'Niepasteryzowane — pij świeże.', contributed_by: 'Beagle Apps Studio'
  },

  // ===== RESZTA ŚWIATA =====
  {
    id: 8001, name: 'Guinness Draught', tagline: 'Czarne złoto Dublina.',
    first_brewed: '1759', description: 'Ikoniczne irlandzkie stout od Arthura Guinnessa, który podpisał 9000-letni kontrakt na dzierżawę browaru przy St. James\'s Gate w 1759. Kremowa kaskada azotu, aksamitna piana, smak palonej kawy i czekolady. Tylko 4,2% ABV — najlżejszy ciemny klasyk świata.',
    image_url: null, abv: 4.2, ibu: 45, target_fg: 1012, target_og: 1042, ebc: 120, srm: 60, ph: 4.3, attenuation_level: 71,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Nitrogen' },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 2.8, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 0.6, unit: 'kilograms' } }], hops: [{ name: 'Challenger', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Wyeast 1056 - American Ale' },
    food_pairing: ['Irish stew', 'Fish and chips', 'Oysters'], brewers_tips: '119 sekund nalewa — legendarny rytuał.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8002, name: 'Sapporo Premium Beer', tagline: 'Gwiazda z Hokkaido.',
    first_brewed: '1876', description: 'Najstarszy japoński browar, założony w 1876 roku na Hokkaido. Sapporo Premium to crisp lager z wyraźną czystością i subtelną słodowością. Lekki, orzeźwiający, doskonały do sushi i ramen. Japońska perfekcja w piwowarstwie.',
    image_url: null, abv: 5.0, ibu: 18, target_fg: 1009, target_og: 1048, ebc: 5, srm: 3, ph: 4.4, attenuation_level: 81,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.8, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 18, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Sushi', 'Ramen', 'Tempura'], brewers_tips: 'Serwuj w 4°C — japońska precyzja wymaga temperatury.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8003, name: 'Asahi Super Dry', tagline: 'Suche jak japoński miecz.',
    first_brewed: '1987', description: 'Asahi Super Dry zapoczątkowało w 1987 roku styl "karakuchi" (super dry). Ekstremalnie czyste, bez resztkowej słodowości, z błyskawicznym suchym finiszem. Rewolucja w japońskim piwowarstwie — sprzedany na cały świat.',
    image_url: null, abv: 5.2, ibu: 15, target_fg: 1003, target_og: 1048, ebc: 4, srm: 2, ph: 4.5, attenuation_level: 94,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.6, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 14, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Sashimi', 'Yakitori', 'Karaage'], brewers_tips: '"Karakuchi" — dry jak żadne inne.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8004, name: 'Corona Extra', tagline: 'Słońce w butelce.',
    first_brewed: '1925', description: 'Meksykański lager który stał się symbolem plaży i wakacji. Crisp, lekki, z nutą kukurydzy i zbóż. Pij z limonką wciśniętą do szyjki — kontrowersja wśród purystów, rytuał dla milionów. Najlepiej sprzedający się meksykański import.',
    image_url: null, abv: 4.5, ibu: 19, target_fg: 1007, target_og: 1044, ebc: 4, srm: 2, ph: 4.5, attenuation_level: 84,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.2, unit: 'kilograms' } }], hops: [{ name: 'Cascade', amount: { value: 14, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Tacos de mariscos', 'Guacamole', 'Ceviche'], brewers_tips: 'Klin limonki — tradycja, nie konieczność.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8005, name: 'Modelo Especial', tagline: 'Meksykańskie złoto.',
    first_brewed: '1925', description: 'Modelo Especial — pełniejszy i bardziej złożony od Corony. Złocisty kolor, delikatna słodowość kukurydzy, lekka chmielowa goryczka. Najchętniej sprzedawane piwo w USA od 2023 roku. Meksykańska duma w butelce.',
    image_url: null, abv: 4.4, ibu: 18, target_fg: 1009, target_og: 1044, ebc: 6, srm: 3, ph: 4.4, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.3, unit: 'kilograms' } }], hops: [{ name: 'Cascade', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Enchiladas', 'Fajitas', 'Chile con carne'], brewers_tips: 'Nummer 1 w USA — zasłużenie.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8006, name: 'Heineken Lager', tagline: 'Zielona butelka, zielone serce.',
    first_brewed: '1873', description: 'Holenderski lager z Amsterdamu, warzone od 1873 roku. Charakterystyczna słodkawość z lekką chmielową goryczką. Ikonyczna zielona butelka rozpoznawalna na całym świecie. Najszerzej dystrybuowane piwo premium na globalnym rynku.',
    image_url: null, abv: 5.0, ibu: 19, target_fg: 1009, target_og: 1048, ebc: 7, srm: 3, ph: 4.3, attenuation_level: 81,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.0, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 20, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Frytki z majonezem', 'Kanapka z serem', 'Pizza Margherita'], brewers_tips: 'Własny drożdż "A-yeast" od 150 lat.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8007, name: 'Coopers Sparkling Ale', tagline: 'Australijska legenda.',
    first_brewed: '1862', description: 'Australijskie piwo z najstarszego rodzinnego browaru w kraju — Coopers z Adelajdy od 1862 roku. Naturalnie mętne, butelkowe wtórna fermentacja. Owocowe, drożdżowe, orzeźwiające z owocową słodyczą Coopers. Jedyne.',
    image_url: null, abv: 5.8, ibu: 27, target_fg: 1008, target_og: 1057, ebc: 8, srm: 4, ph: 4.3, attenuation_level: 86,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Bottle conditioned' },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.7, unit: 'kilograms' } }], hops: [{ name: 'Galaxy', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Pride of Ringwood', amount: { value: 15, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Wyeast 1056 - American Ale' },
    food_pairing: ['Kangaroo steak', 'Barramundi z frytkami', 'Pavlova'], brewers_tips: 'Obróć butelkę 3 razy przed otwarciem — wymieszaj osad.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8008, name: 'Estrella Damm', tagline: 'Barcelona w szklance.',
    first_brewed: '1876', description: 'Ikona Barcelony i Katalonii od 1876 roku. Jasny lager warzone z kukurydzą ryżem, lekki, orzeźwiający, z delikatną chmielową goryczką. Na każdej katalońskiej tarasie, w każdym tapas barze. Smak Morza Śródziemnego.',
    image_url: null, abv: 5.4, ibu: 16, target_fg: 1009, target_og: 1052, ebc: 6, srm: 3, ph: 4.4, attenuation_level: 83,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.0, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 16, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Patatas bravas', 'Jamón ibérico', 'Paella'], brewers_tips: 'Z plam słońca i zapachem morza.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8009, name: 'Moretti L\'Azzurro', tagline: 'Włoski błękit.',
    first_brewed: '1859', description: 'Birra Moretti z Udine — włoski lager premium od 1859 roku. Delikatna słodowość, lekka chmielowa goryczka, złocisty kolor. Idealny do włoskiej kuchni — pasta, pizza, antipasti. Ikona aperitivo.',
    image_url: null, abv: 5.1, ibu: 15, target_fg: 1009, target_og: 1049, ebc: 6, srm: 3, ph: 4.4, attenuation_level: 82,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.0, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Pasta alla carbonara', 'Pizza napoletana', 'Bruschetta'], brewers_tips: 'Aperitivo o 18:00 — włoska tradycja.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8010, name: 'Leffe Blonde', tagline: 'Belgijska blondynka z opactwa.',
    first_brewed: '1240', description: 'Leffe Blonde ma historię sięgającą 1240 roku i opactwa Leffe w Namur. Złociste, pełne, z aromatem banana i wanilii. Delikatna słodycz przełamana lekką goryczką. Dostępne w całej Europie — najbardziej znane piwo opackie na świecie.',
    image_url: null, abv: 6.6, ibu: 20, target_fg: 1012, target_og: 1064, ebc: 14, srm: 7, ph: 4.3, attenuation_level: 81,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 22, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 5.2, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.4, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 18, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Styrian Goldings', amount: { value: 12, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Belgian Abbey' },
    food_pairing: ['Moules marinières', 'Gaufres liégeoises', 'Boeuf bourguignon'], brewers_tips: 'Opactwo z 1240 roku — historia w każdym łyku.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8011, name: 'Kingfisher Premium Lager', tagline: 'Piwo subkontynentu.',
    first_brewed: '1857', description: 'Kingfisher — najpopularniejsze piwo Indii od 1857 roku. Lekki lager z delikatną słodowością i krótką goryczką. Orzeźwiający w indyjskim upale, idealny do pikantnych curry. Eksportowany do 60 krajów świata.',
    image_url: null, abv: 4.8, ibu: 14, target_fg: 1008, target_og: 1046, ebc: 5, srm: 3, ph: 4.4, attenuation_level: 83,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.6, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 13, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Chicken tikka masala', 'Biryani', 'Samosa'], brewers_tips: 'W indyjskim upale każde piwo jest doskonałe.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8012, name: 'Peroni Nastro Azzurro', tagline: 'Włoska elegancja.',
    first_brewed: '1963', description: 'Peroni Nastro Azzurro z 1963 roku — symbol włoskiej elegancji i stylu. Bardzo wytrawny, crisp lager z nutą kukurydzy. Lekki, orzeźwiający, z minimalistycznym finiszem. Piwo Armani wśród lagerów — drogi smak w prostej formie.',
    image_url: null, abv: 5.1, ibu: 14, target_fg: 1007, target_og: 1049, ebc: 5, srm: 3, ph: 4.5, attenuation_level: 86,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.8, unit: 'kilograms' } }], hops: [{ name: 'Hallertau Tradition', amount: { value: 14, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Carpaccio wołowe', 'Risotto', 'Prosciutto di Parma'], brewers_tips: 'La Dolce Vita w każdym łyku.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8013, name: 'Tiger Beer', tagline: 'Duch Azji Południowo-Wschodniej.',
    first_brewed: '1932', description: 'Tiger Beer z Singapuru — ikoniczny lager Azji Południowo-Wschodniej od 1932 roku. Crisp, lekki, z subtelną zbożową słodkowatością. Najlepszy w towarzystwie Hawker Food — satay, laksa, char kway teow. Wielokrotnie nagradzany za jakość.',
    image_url: null, abv: 5.0, ibu: 16, target_fg: 1008, target_og: 1048, ebc: 5, srm: 3, ph: 4.4, attenuation_level: 83,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.8, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Satay', 'Laksa', 'Nasi goreng'], brewers_tips: 'Singapurski hawker centre + Tiger = idealne połączenie.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8014, name: 'Cerveza Patagonia Amber Lager', tagline: 'Dzikość Patagonii.',
    first_brewed: '2015', description: 'Amber lager z Argentyny inspirowany dziką Patagonią. Karmelowe słody tworzą bogate bursztynowe ciało z aromatem toffi i orzechów. Balansowana goryczka, długi finisz. Argentyński craft premium eksportowany na świat.',
    image_url: null, abv: 5.3, ibu: 22, target_fg: 1012, target_og: 1052, ebc: 22, srm: 11, ph: 4.4, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 3.8, unit: 'kilograms' } }, { name: 'Caramel Malt', amount: { value: 0.8, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 0.4, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Asado argentyńskie', 'Empanadas', 'Dulce de leche'], brewers_tips: 'Warstwowa Patagonia na dnie szklanki.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 8015, name: 'Erdinger Weissbier', tagline: 'Bawarska pszenica premium.',
    first_brewed: '1886', description: 'Erdinger Weissbier z Erdingu — największy browar piw pszenicznych na świecie. Klasyczny Hefeweizen o pięknym mętnym złocistym kolorze. Banan, goździk, wanilia — trójca bawarskiego weizena. Gęsta kremowa piana i lekka kwaskowatość.',
    image_url: null, abv: 5.3, ibu: 12, target_fg: 1012, target_og: 1052, ebc: 10, srm: 5, ph: 4.2, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 3.0, unit: 'kilograms' } }, { name: 'Pilsner Malt', amount: { value: 1.5, unit: 'kilograms' } }], hops: [{ name: 'Hallertau', amount: { value: 12, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Weizen WB-06' },
    food_pairing: ['Weißwurst', 'Bretzel', 'Obatzda'], brewers_tips: 'Nalewaj po spirali — piana jest wszystkim.', contributed_by: 'Beagle Apps Studio'
  },
];

// ===== DODATKOWE POLSKIE PIWA =====
export const EXTRA_POLISH_BEERS: Beer[] = [
  // Tradycyjne
  {
    id: 3101, name: 'Łomża Pełne', tagline: 'Podlaskie piwo z tradycją.',
    first_brewed: '1968', description: 'Łomża Pełne — jasne pełne z Podlasia, warzone od 1968 roku. Złociste, klarowne, z delikatną słodowością i łagodną chmielową goryczką. Jedno z ulubionych regionalnych piw północno-wschodniej Polski.',
    image_url: null, abv: 5.7, ibu: 16, target_fg: 1012, target_og: 1054, ebc: 8, srm: 4, ph: 4.4, attenuation_level: 78,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.5, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 20, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Pieróg z mięsem', 'Bigos', 'Kartacze'], brewers_tips: 'Podlaskie piwo dla Podlasian.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3102, name: 'Żubr', tagline: 'Piwo z Puszczy Białowieskiej.',
    first_brewed: '1768', description: 'Żubr — jasny lager z Białegostoku, patron Puszczy Białowieskiej. Delikatny smak z lekką zbożową słodyczą i subtelną goryczką. Nazwa i tradycja związana z najstarszym lasem Europy.',
    image_url: null, abv: 6.0, ibu: 14, target_fg: 1011, target_og: 1057, ebc: 7, srm: 3, ph: 4.4, attenuation_level: 81,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.7, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 18, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Kiełbasa białostocka', 'Bliny', 'Chłodnik'], brewers_tips: 'Puszcza Białowieska w każdej butelce.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3103, name: 'Dębowe Mocne', tagline: 'Silne jak dąb.',
    first_brewed: '2000', description: 'Dębowe Mocne — polskie piwo mocne o sile 7,2% ABV. Złociste, pełne, z wyraźnym słodowym charakterem i alkoholowym ciepłem. Popularne w całej Polsce jako mocniejsza alternatywa dla standardowych lagerów.',
    image_url: null, abv: 7.2, ibu: 18, target_fg: 1014, target_og: 1068, ebc: 10, srm: 5, ph: 4.5, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 67, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 5.8, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Golonka', 'Żeberka', 'Bigos zimowy'], brewers_tips: 'Silne jak polska dąbrowa.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3104, name: 'Tatra Jasne Pełne', tagline: 'Tatrzańska świeżość.',
    first_brewed: '1880', description: 'Tatra Jasne Pełne z Żywca — piwo nawiązujące do tatrzańskiej tradycji. Jasny lager o złocistej barwie, lekkim aromacie chmielu i delikatnej słodowości. Orzeźwiające jak górski potok.',
    image_url: null, abv: 5.6, ibu: 16, target_fg: 1011, target_og: 1053, ebc: 7, srm: 3, ph: 4.4, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.4, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 19, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Oscypek grillowany', 'Żurek zakopiański', 'Kiełbasa podhalańska'], brewers_tips: 'Tatry w szkle — świeżość gór.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3105, name: 'Strzelec Jasne', tagline: 'Piwo z Lwówka Śląskiego.',
    first_brewed: '1209', description: 'Browar Lwówek to jeden z najstarszych aktywnych browarów w Polsce, działający od 1209 roku. Strzelec Jasne to klasyczny jasny lager z charakterystyczną chmielową goryczką i czystym smakiem. Historia w każdej butelce.',
    image_url: null, abv: 5.5, ibu: 22, target_fg: 1011, target_og: 1052, ebc: 8, srm: 4, ph: 4.4, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pilsner Malt', amount: { value: 4.3, unit: 'kilograms' } }], hops: [{ name: 'Saaz', amount: { value: 24, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Lager' },
    food_pairing: ['Kiszka ziemniaczana', 'Śląska rolada', 'Maczanka krakowska'], brewers_tips: 'Tradycja piwowarska od 1209 roku.', contributed_by: 'Beagle Apps Studio'
  },
  // Kraft
  {
    id: 3106, name: 'Browar Czeladź Czarna Perła', tagline: 'Śląski imperial stout.',
    first_brewed: '2016', description: 'Imperial Stout z Czeladzi na Śląsku. Czarny jak noc, gęsty jak smoła. Intensywny smak kawy, gorzkiej czekolady i suszonych śliwek. Alkoholowe ciepło i aksamitne ciało. Śląska odpowiedź na najcięższe style świata.',
    image_url: null, abv: 10.5, ibu: 55, target_fg: 1026, target_og: 1105, ebc: 200, srm: 100, ph: 4.6, attenuation_level: 75,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 68, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 7.0, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 1.5, unit: 'kilograms' } }, { name: 'Chocolate Malt', amount: { value: 1.0, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.8, unit: 'kilograms' } }], hops: [{ name: 'Columbus', amount: { value: 45, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'US-05' },
    food_pairing: ['Tarta czekoladowa', 'Ser gorgonzola', 'Suszone śliwki w czekoladzie'], brewers_tips: 'Pij w małych łykach — zasługuje na uwagę.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3107, name: 'Szałpiw American Wheat', tagline: 'Krakowskie pszeniczne.',
    first_brewed: '2014', description: 'American Wheat Ale z krakowskiego Szałpiwa. Lekkie, orzeźwiające piwo pszeniczne z chmielami American. Cytrusowa świeżość, delikatna drożdżowość i lekkie ciało. Idealne na krakowskie lato.',
    image_url: null, abv: 4.8, ibu: 20, target_fg: 1009, target_og: 1047, ebc: 8, srm: 4, ph: 4.2, attenuation_level: 81,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 2.5, unit: 'kilograms' } }, { name: 'Pale Malt', amount: { value: 1.5, unit: 'kilograms' } }], hops: [{ name: 'Cascade', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'Wyeast 1056 - American Ale' },
    food_pairing: ['Obwarzanek krakowski', 'Zapiekanka', 'Lody waniliowe'], brewers_tips: 'Kraków latem = Szałpiw American Wheat.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3108, name: 'Widawa Pacific Pale Ale', tagline: 'Wrocławskie tropiki.',
    first_brewed: '2013', description: 'Pacific Pale Ale z wrocławskiej Widawy. Chmiele nowozelandzkie i australijskie — Nelson Sauvin, Galaxy i Motueka — tworzą intensywny aromat białego wina, agrestu i tropikalnych owoców. Jasne, suche, orzeźwiające.',
    image_url: null, abv: 5.2, ibu: 38, target_fg: 1010, target_og: 1050, ebc: 8, srm: 4, ph: 4.3, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.0, unit: 'kilograms' } }], hops: [{ name: 'Nelson Sauvin', amount: { value: 22, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Galaxy', amount: { value: 20, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Sushi', 'Ceviche', 'Lekkie sałatki'], brewers_tips: 'Pacyfik na Odrze — działa!', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3109, name: 'Browar Tenczynek Grodzisz', tagline: 'Odrodzony polski skarb.',
    first_brewed: '2012', description: 'Grodziskie z Tenczynka — odrodzone autentyczne piwo w tradycyjnym stylu. Warzone z pszenicy wędzonej drewnem dębowym, lekkości i orzeźwienia. Subtelny dymny aromat z pszeniczną świeżością. Polski unikat.',
    image_url: null, abv: 3.1, ibu: 12, target_fg: 1007, target_og: 1031, ebc: 4, srm: 2, ph: 4.2, attenuation_level: 77,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 62, unit: 'celsius' }, duration: 40 }], fermentation: { temp: { value: 18, unit: 'celsius' } }, twist: 'Oak smoked wheat' },
    ingredients: { malt: [{ name: 'Roasted Wheat Malt', amount: { value: 2.6, unit: 'kilograms' } }], hops: [{ name: 'Lubelski', amount: { value: 10, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'Wyeast 3942 - Belgian Wheat' },
    food_pairing: ['Wędzone ryby', 'Żurek', 'Twaróg wiejski'], brewers_tips: 'Styl który omal nie zniknął z historii.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3110, name: 'Browar Olimp Herkules', tagline: 'Herkulesowa siła z Radomia.',
    first_brewed: '2015', description: 'Barleywine z radomskiego Browaru Olimp. Mocarne 12% ABV w bursztynowej barwie. Smak miodu, karmelu, suszonych owoców i dębiny. Nawiązanie do greckiego herosa — wymaga siły, żeby go docenić.',
    image_url: null, abv: 12.0, ibu: 45, target_fg: 1024, target_og: 1116, ebc: 35, srm: 17, ph: 4.6, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 68, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 9.0, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 1.2, unit: 'kilograms' } }, { name: 'Munich Malt', amount: { value: 0.8, unit: 'kilograms' } }], hops: [{ name: 'Centennial', amount: { value: 40, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Cascade', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Dojrzały parmezan', 'Ciemna czekolada 85%', 'Orzechy włoskie'], brewers_tips: 'Jak prawdziwy heros — pij powoli.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3111, name: 'Trzech Kumpli Złoty Środek', tagline: 'Złota równowaga.',
    first_brewed: '2016', description: 'American Pale Ale od trójmiejskich Trzech Kumpli. Złoty kolor, zrównoważona goryczka i aromat cytrusów oraz świeżej trawy. Cascade i Centennial w duecie tworzą harmonijne, przystępne piwo — złoty środek między lekkością a intensywnością.',
    image_url: null, abv: 5.0, ibu: 32, target_fg: 1010, target_og: 1048, ebc: 10, srm: 5, ph: 4.3, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.0, unit: 'kilograms' } }, { name: 'Crystal Malt', amount: { value: 0.3, unit: 'kilograms' } }], hops: [{ name: 'Cascade', amount: { value: 22, unit: 'grams' }, add: 'start', attribute: 'bitter' }, { name: 'Centennial', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Kebab', 'Grillowany kurczak', 'Frytki'], brewers_tips: 'Złoty środek — zawsze trafia w punkt.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3112, name: 'Browar Gloger Czarny Borsuk', tagline: 'Podlaski porter.',
    first_brewed: '2014', description: 'Robust Porter z białostockiego Browaru Gloger. Czarny jak podlaska noc, z aromatem palonej kawy, czekolady i ciemnych owoców. Kremowe ciało i długi gorzki finisz. Podlaskie piwowarstwo na europejskim poziomie.',
    image_url: null, abv: 6.8, ibu: 35, target_fg: 1016, target_og: 1066, ebc: 140, srm: 70, ph: 4.5, attenuation_level: 76,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.5, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 0.9, unit: 'kilograms' } }, { name: 'Chocolate Malt', amount: { value: 0.6, unit: 'kilograms' } }], hops: [{ name: 'Northern Brewer', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'US-05' },
    food_pairing: ['Maczanka krakowska', 'Tarta z owocami leśnymi', 'Ser wędzony'], brewers_tips: 'Borsuk nie odpuszcza — i piwo też.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3113, name: 'Birbant Tropical Haze', tagline: 'Poznańska mgła tropikalna.',
    first_brewed: '2017', description: 'Hazy IPA z poznańskiego Birbanta. Mętne jak mgła o świcie, owocowe jak tropikalny ogród. Citra, Mosaic i Galaxy w triple dry hop tworzą eksplozję mango, marakui i liczi. Minimalna goryczka, maksymalny aromat.',
    image_url: null, abv: 6.2, ibu: 20, target_fg: 1012, target_og: 1060, ebc: 8, srm: 4, ph: 4.2, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.8, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 1.2, unit: 'kilograms' } }], hops: [{ name: 'Citra', amount: { value: 60, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }, { name: 'Galaxy', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Pad Thai', 'Kurczak mango', 'Lody kokosowe'], brewers_tips: 'Triple dry hop — Poznań tropikalnie.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3114, name: 'Browar Stu Mostów WRCLW Pszeniczne', tagline: 'Wrocławskie pszeniczne nowej ery.',
    first_brewed: '2015', description: 'American Wheat IPA ze Stu Mostów — krzyżówka pszenicznego i IPA. Mętne, kremowe ciało pszenicy z intensywnym aromatem cytrusowego chmielu. Cascade i Amarillo nadają świeżości grejpfruta i pomarańczy.',
    image_url: null, abv: 5.5, ibu: 35, target_fg: 1011, target_og: 1054, ebc: 10, srm: 5, ph: 4.2, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Wheat Malt', amount: { value: 2.8, unit: 'kilograms' } }, { name: 'Pale Malt', amount: { value: 2.0, unit: 'kilograms' } }], hops: [{ name: 'Cascade', amount: { value: 28, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Amarillo', amount: { value: 22, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Naleśniki z łososiem', 'Tarta warzywna', 'Kozi ser'], brewers_tips: 'Pszenica + IPA = Wrocław w formie.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3115, name: 'Piwne Podziemie Czarny Kot', tagline: 'Ciemny jak krakowska noc.',
    first_brewed: '2015', description: 'Black IPA z krakowskiego Piwnego Podziemia. Ciemny kolor pochodzi od palonego słodu, ale zdominowany przez intensywne chmielowanie American. Cytrusy i żywica walczą z kawą i czekoladą — i to właśnie jest piękne.',
    image_url: null, abv: 6.5, ibu: 55, target_fg: 1013, target_og: 1063, ebc: 80, srm: 40, ph: 4.3, attenuation_level: 79,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.8, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Chocolate Malt', amount: { value: 0.3, unit: 'kilograms' } }], hops: [{ name: 'Simcoe', amount: { value: 35, unit: 'grams' }, add: 'end', attribute: 'aroma' }, { name: 'Chinook', amount: { value: 28, unit: 'grams' }, add: 'start', attribute: 'bitter' }], yeast: 'US-05' },
    food_pairing: ['Burger z cheddar', 'Kiełbasa z grilla', 'Ciemny chleb z pastą'], brewers_tips: 'Czarny jak noc, chmielony jak dzień.', contributed_by: 'Beagle Apps Studio'
  },
  {
    id: 3116, name: 'Ursa Minor Mosaic', tagline: 'Małopolska konstelacja smaków.',
    first_brewed: '2016', description: 'Single-hop Pale Ale od małopolskiego Ursa Minor z jedynym chmielowym bohaterem — Mosaic. Eksplozja mango, jagód i kwiatów lawendy. Złociste, klarowne, z długim aromatycznym finiszem. Konstelacja smaków w jednej szklance.',
    image_url: null, abv: 5.3, ibu: 36, target_fg: 1010, target_og: 1051, ebc: 10, srm: 5, ph: 4.3, attenuation_level: 80,
    volume: { value: 20, unit: 'litres' }, boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 60 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
    ingredients: { malt: [{ name: 'Pale Malt', amount: { value: 4.2, unit: 'kilograms' } }], hops: [{ name: 'Citra', amount: { value: 55, unit: 'grams' }, add: 'dry hop', attribute: 'aroma' }], yeast: 'US-05' },
    food_pairing: ['Tatar z łososia', 'Caprese', 'Sernik jagodowy'], brewers_tips: 'Mosaic solo — gwiazda pierwszej wielkości.', contributed_by: 'Beagle Apps Studio'
  },
];
