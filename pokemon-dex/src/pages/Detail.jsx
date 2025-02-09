import { useNavigate, useSearchParams } from "react-router-dom";
import { MOCK_DATA } from "../data/mockData";
import { PokemonDetail } from "../components/PokemonDetail";
import styled from "styled-components";
import { colors } from "../styles/colors";

const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.background};
`;

/**
 * * 포켓몬의 상세 정보를 보여주는 페이지
 */
export const Detail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pokemonId = searchParams.get("id");

  // * id를 통해 해당 포켓몬 데이터를 반환하는 함수
  const searchPokemon = (id) => {
    return MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
  };

  // * 뒤로가기 함수
  const goToBack = () => {
    navigate(-1);
  };

  const pokemon = searchPokemon(pokemonId);

  return (
    <StyledDetailPage>
      <PokemonDetail goToBack={goToBack} pokemon={pokemon} />
    </StyledDetailPage>
  );
};
