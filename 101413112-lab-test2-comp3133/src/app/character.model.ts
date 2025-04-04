export interface Wand {
  wood: string;
  core: string;
  length: string;
}

export interface Character {
  name: string;
  species: string;
  house: string;
  wizard: boolean;
  ancestry: string;
  wand: Wand;
  actor: string;
  image: string;
}
