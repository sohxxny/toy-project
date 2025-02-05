import { Dashboard } from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";

export const Dex = () => {
  const dexStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={dexStyle}>
      <Dashboard />
      <PokemonList />
    </div>
  );
};
