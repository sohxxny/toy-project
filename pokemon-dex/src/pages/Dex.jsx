import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";

const dexStyle = {
  display: "flex",
  flexDirection: "column",
};

/**
 * * 포켓몬 도감 페이지
 */
export const Dex = () => {
  const [myPokemons, setMyPokemons] = useState([]);

  /**
   * * 포켓몬 추가 이벤트 핸들러
   * 이미 6개가 선택되었거나 중복 선택을 하는 경우 alert
   */
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

  // * 포켓몬 삭제 이벤트 핸들러
  const removePokemon = (id) => {
    setMyPokemons((pokemons) =>
      pokemons.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <div style={dexStyle}>
      <Dashboard myPokemons={myPokemons} removePokemon={removePokemon} />
      <PokemonList addPokemon={addPokemon} />
    </div>
  );
};
