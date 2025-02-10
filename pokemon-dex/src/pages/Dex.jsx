import { Dashboard } from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";
import styled from "styled-components";
import { colors } from "../styles/colors";

const StyledDexPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
`;

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
