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
    if (myPokemons.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    if (myPokemons.some((pokemon) => pokemon.id === newPokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
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
