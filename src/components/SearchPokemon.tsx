import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";

function SearchPokemon() {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("SearchPokemon must be used within a PokemonProvider");
  }
  const { fetchPokemon, pokemonData, error } = context;

  const [pokemonName, setPokemonName] = useState<string>("");

  const handleChange = (e: unknown) => {
    setPokemonName(e.target.value);
    console.log(pokemonName);
  };

  const handleSearch = () => {
    setPokemonName("");
    fetchPokemon(pokemonName);
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Search for Pokemon</h2>
      <div>
        <input
          type="text"
          id="pokemon-search"
          value={pokemonName}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {pokemonData && (
        <div>
          <p>{pokemonName}</p>
          <p>{pokemonData?.name}</p>
          <img
            src={pokemonData?.sprites?.front_default}
            height={"150px"}
            width={"150px"}
          />
          <p>Pokemon number:{pokemonData?.id}</p>
        </div>
      )}
      <PokemonCard />
    </div>
  );
}

export default SearchPokemon;
