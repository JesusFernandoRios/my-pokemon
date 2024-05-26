import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  PokemonContextType,
  PokemonData,
  PokemonProviderProps,
} from "../types";

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [randomPokemon, setRandomPokemon] = useState<PokemonData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const randomId = Math.floor(Math.random() * 898) + 1;
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        setRandomPokemon(response.data);
      } catch (err) {
        setError("Failed to fetch random pokemon");
      }
    };
    fetchRandomPokemon();
  }, []);

  const fetchPokemon = async (name: string) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      setPokemonData(response.data);
    } catch (err) {
      setError("Could not find pokemon");
      setPokemonData(null);
    }
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonData, randomPokemon, fetchPokemon, error }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
