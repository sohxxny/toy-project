import { PokemonCard } from "./PokemonCard";
import { MOCK_DATA } from "../data/mockData";
import styled from "styled-components";
import { StyledBox } from "../styles/components/Box";
import { StyledTitle } from "../styles/components/Title";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

/**
 * * 포켓몬 전체 리스트를 카드로 보여주는 컴포넌트
 */
export const PokemonList = () => {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.pokemonReducer.pokemons);

  /**
   * * 이미 6개가 선택되었거나 중복 선택을 하는 경우 alert하는 함수
   * TODO - 포켓몬 추가 함수 분리하기
   * @param {Object} pokemon - 포켓몬 정보 {img_url, korean_name, types, id, description}
   */
  const handleSelectionValidation = (pokemon) => {
    if (myPokemons.length >= 6) {
      toast.warn("더 이상 선택할 수 없습니다.");
      return;
    }
    if (myPokemons.some((myPokemon) => pokemon.id === myPokemon.id)) {
      toast.warn("이미 선택된 포켓몬입니다.");
      return;
    }
    dispatch(addPokemon(pokemon));
  };

  return (
    <StyledCardsGlobal>
      <StyledTitle>포켓몬 도감</StyledTitle>
      <div className="card-list">
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            data={pokemon}
            buttonType="추가"
            onClick={() => handleSelectionValidation(pokemon)}
          />
        ))}
      </div>
    </StyledCardsGlobal>
  );
};

const StyledCardsGlobal = styled(StyledBox)`
  margin: 0 30px 30px 30px;

  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    max-width: 1400px;
    margin: 0px auto 0px auto;
    align-items: center;
    justify-content: center;
    padding: 30px 25px 30px 25px;
  }
`;
