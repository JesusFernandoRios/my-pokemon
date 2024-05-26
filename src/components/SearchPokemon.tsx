import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

function SearchPokemon({ name }) {
  const context = useContext(PokemonContext);
  const { fetchPokemon, pokemonData, error } = context;

  const [pokemonName, setPokemonName] = useState<string>("");

  const handleChange = (e: any) => {
    setPokemon(e.target.value);
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
      <p>{pokemonName}</p>
      <p>{pokemonData}</p>
    </div>
  );
}

export default SearchPokemon;
