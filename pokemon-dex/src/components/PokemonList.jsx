import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {
  const mockData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={listStyle}>
      {mockData.map((_, index) => (
        <PokemonCard key={index} />
      ))}
    </div>
  );
};
