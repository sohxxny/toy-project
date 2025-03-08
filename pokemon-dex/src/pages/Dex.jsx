import { Dashboard } from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";
import styled from "styled-components";
import { colors } from "../styles/colors";

/**
 * * 포켓몬 도감 페이지
 */
export const Dex = () => {
  return (
    <StyledDexPage>
      <Dashboard />
      <PokemonList />
    </StyledDexPage>
  );
};

const StyledDexPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
`;
