export interface CharacterLocation {
  name: string,
  url: string
}

export type Status = 'Dead' | 'Alive' | 'unknown';

type Gender = 'unknown' | 'Female' | 'Male' | 'Genderless';

export interface Character {
  created: string,
  episode: string[],
  gender: Gender,
  id: number,
  image: string,
  location: CharacterLocation,
  name: string,
  origin: CharacterLocation,
  species: string,
  status: Status,
  type: string,
  url: string
}

export interface CharactersPageInfo {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
}

export interface CharactersSchema {
  info: CharactersPageInfo,
  results: Character[]
};

export interface CharactersStore {
  characters: {
    characters: CharactersSchema,
    loading: boolean
  }
};
