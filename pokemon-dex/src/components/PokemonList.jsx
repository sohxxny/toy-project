import { PokemonCard } from "./PokemonCard";
import { MOCK_DATA } from "../data/mockData";

const listStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  alignItems: "center",
  justifyContent: "center",
};

/**
 * * 포켓몬 전체 리스트를 카드로 보여주는 컴포넌트
 * @param {Function} addPokemon - 포켓몬 추가 핸들러 함수 (id) => void
 */
export const PokemonList = ({ addPokemon }) => {
  return (
    <div style={listStyle}>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          data={pokemon}
          buttonType="추가"
          onClick={addPokemon}
        />
      ))}
    </div>
  );
};
