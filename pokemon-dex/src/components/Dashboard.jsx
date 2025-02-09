import { styled } from "styled-components";
import pokeballImage from "../assets/pokeball.png";
import { PokemonCard } from "./PokemonCard";
import { StyledBox } from "../styles/components/Box";
import { StyledTitle } from "../styles/components/Title";
import { colors } from "../styles/colors";

const MAX_POKEMON_NUM = 6;

const StyledDashboard = styled(StyledBox)`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPokeballs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${MAX_POKEMON_NUM}, minmax(120px, 180px));
  grid-gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 25px;
  box-sizing: border-box;
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(${MAX_POKEMON_NUM / 2}, minmax(120px, 180px));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(120px, 180px));
  }

  @media (max-width: 380px) {
    grid-template-columns: repeat(1, minmax(120px, 180px));
  }
`;

const StyledPokeball = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray.light};
  border-top: 2px solid ${colors.white.medium};
  border-left: 2px solid ${colors.white.medium};
  border-bottom: 2px solid ${colors.white.dark};
  border-right: 2px solid ${colors.white.dark};
`;

const PokeballImage = styled.img`
  width: 50px;
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
      <StyledTitle>나만의 포켓몬</StyledTitle>
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
