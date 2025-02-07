import styled from "styled-components";
import pokeballImage from "../assets/pokeball.png";
import { PokemonCard } from "./PokemonCard";

const MAX_POKEMON_NUM = 6;

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPokeballs = styled.div`
  display: flex;
`;

const StyledPokeball = styled.div`
  width: 100px;
  height: 100px;
  border: 1px soild black;
`;

const PokeballImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/**
 * * 사용자가 선택한 포켓몬을 표시하는 컴포넌트
 * @param {array} myPokemons - 사용자가 선택한 포켓몬 객체 리스트 [
 *    {img_url, korean_name, types, id, description}
 * ]
 * @param {Function} removePokemon - 포켓몬 삭제 핸들러 함수 (id) => void
 */
export const Dashboard = ({ myPokemons, removePokemon }) => {
  const availableCount = MAX_POKEMON_NUM - myPokemons.length;

  return (
    <StyledDashboard>
      <div>나만의 포켓몬</div>
      <StyledPokeballs>
        {/* 선택된 포켓몬 개수만큼 그리기 */}
        {myPokemons.map((myPokemon) => (
          <PokemonCard
            key={myPokemon.id}
            data={myPokemon}
            buttonType="삭제"
            onClick={removePokemon}
          />
        ))}

        {/* 남은 공간은 포켓볼 그리기*/}
        {Array.from({ length: availableCount }).map((_, index) => (
          <StyledPokeball key={index}>
            <PokeballImage src={pokeballImage} alt="포켓볼" />
          </StyledPokeball>
        ))}
      </StyledPokeballs>
    </StyledDashboard>
  );
};
