import { PokemonCard } from "./PokemonCard";
import { MOCK_DATA } from "../data/mockData";

export const PokemonList = () => {
  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={listStyle}>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} data={pokemon} />
      ))}
    </div>
  );
};
