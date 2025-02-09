import { PokemonCard } from "./PokemonCard";
import { MOCK_DATA } from "../data/mockData";
import styled from "styled-components";
import { StyledBox } from "../styles/components/Box";
import { StyledTitle } from "../styles/components/Title";
import { useContext } from "react";
import { DexContext } from "../context/DexContext";

const StyledCardsGlobal = styled(StyledBox)`
  margin: 0 30px 30px 30px;
`;

const StyledCardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  justify-content: center;
  padding: 30px 25px 30px 25px;
`;

/**
 * * 포켓몬 전체 리스트를 카드로 보여주는 컴포넌트
 */
export const PokemonList = () => {
  const data = useContext(DexContext);
  const addPokemon = data.addPokemon;

  return (
    <StyledCardsGlobal>
      <StyledTitle>포켓몬 도감</StyledTitle>
      <StyledCardsList>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            data={pokemon}
            buttonType="추가"
            onClick={addPokemon}
          />
        ))}
      </StyledCardsList>
    </StyledCardsGlobal>
  );
};
