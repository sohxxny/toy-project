import pokeballImage from "../assets/pokeball.png";
import { PokemonCard } from "./PokemonCard";

export const Dashboard = ({ myPokemons, removePokemon }) => {
  const dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const boxesStyle = {
    display: "flex",
  };

  const boxStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const MAX_POKEMON_NUM = 6;

  return (
    <div style={dashboardStyle}>
      <div>나만의 포켓몬</div>
      <div style={boxesStyle}>
        {/* 선택된 포켓몬 개수만큼 그리기 */}
        {myPokemons.map((myPokemon) => (
          <PokemonCard
            key={myPokemon.id}
            data={myPokemon}
            buttonType="삭제"
            addPokemon={() => removePokemon(myPokemon.id)}
          />
        ))}

        {/* 남은 공간은 포켓볼 그리기*/}
        {Array.from({ length: MAX_POKEMON_NUM - myPokemons.length }, {}).map(
          (_, index) => (
            <div style={boxStyle} key={index}>
              <img style={imageStyle} src={pokeballImage} alt="포켓볼" />
            </div>
          )
        )}
      </div>
    </div>
  );
};
