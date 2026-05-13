export interface BeerAmount {
  value: number;
  unit: string;
}

export interface BeerMalt {
  name: string;
  amount: BeerAmount;
}

export interface BeerHop {
  name: string;
  amount: BeerAmount;
  add: string;
  attribute: string;
}

export interface BeerIngredients {
  malt: BeerMalt[];
  hops: BeerHop[];
  yeast: string;
}

export interface MashTemp {
  temp: { value: number; unit: string };
  duration: number;
}

export interface BeerMethod {
  mash_temp: MashTemp[];
  fermentation: { temp: { value: number; unit: string } };
  twist: string | null;
}

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string | null;
  abv: number;
  ibu: number | null;
  target_fg: number | null;
  target_og: number | null;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuation_level: number | null;
  volume: BeerAmount;
  boil_volume: BeerAmount;
  method: BeerMethod;
  ingredients: BeerIngredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface UserRating {
  id: string;
  beerId: number;
  beerName: string;
  beerImageUrl: string | null;
  date: string;
  overallScore: number;
  appearance: number;
  aroma: number;
  taste: number;
  mouthfeel: number;
  notes: string;
  photoUrl: string | null;
  drunkAt: string;
  servingType: string;
}
