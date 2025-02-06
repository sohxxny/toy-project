import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";

export const Dex = () => {
  const dexStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const [myPokemons, setMyPokemons] = useState([]);

  const addPokemon = (newPokemon) => {
    setMyPokemons([...myPokemons, newPokemon]);
  };

  const removePokemon = (id) => {
    setMyPokemons((pokemons) =>
      pokemons.filter((pokemon) => pokemon.id !== id)
    );
    console.log(myPokemons);
  };

  return (
    <div style={dexStyle}>
      <Dashboard myPokemons={myPokemons} removePokemon={removePokemon} />
      <PokemonList addPokemon={addPokemon} />
    </div>
  );
};
