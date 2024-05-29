import { ReactNode } from "react";

export interface PokemonData {
  name: string;
  sprites?: {
    front_default: string;
  };
  id: number;
}

export interface PokemonContextType {
  pokemonData: PokemonData | null;
  randomPokemon: PokemonData | null;
  fetchPokemon: (name: string) => void;
  error: string | null;
}

export interface PokemonProviderProps {
  children: ReactNode;
}
