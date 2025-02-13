import styled from "styled-components";
import { Types } from "./Types";
import { StyledBox } from "../styles/components/Box";
import { TitleWithButton } from "../styles/components/Title";
import { colors } from "../styles/colors";
import { BiSolidRightArrow } from "react-icons/bi";
import { StyledButton } from "../styles/components/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../redux/slices/pokemonSlice";
import { toast } from "react-toastify";

/**
 * * 포켓몬의 디테일 정보를 표시하는 컴포넌트
 * @param {Object} pokemon - 포켓몬 정보 {img_url, korean_name, types, id, description}
 */
export const PokemonDetail = ({ pokemon }) => {
  const { img_url, korean_name, types, id, description } = pokemon;
  const myPokemons = useSelector((state) => state.pokemonReducer.pokemons);
  const dispatch = useDispatch();

  const isMypokemon = myPokemons.some((pokemon) => pokemon.id === id);

  // * 포켓몬 소유 여부에 따라 다른 액션을 전달하는 핸들러 함수
  const detailButtonOnClick = () => {
    if (isMypokemon) {
      dispatch(removePokemon(id));
      toast.success("삭제되었습니다.");
    } else {
      if (myPokemons.length >= 6) {
        toast.warn("더 이상 선택할 수 없습니다.");
        return;
      }
      if (myPokemons.some((myPokemon) => pokemon.id === myPokemon.id)) {
        toast.warn("이미 선택된 포켓몬입니다.");
        return;
      }
      dispatch(addPokemon(pokemon));
      toast.success("추가되었습니다.");
    }
  };
  return (
    <StyledDetail>
      <TitleWithButton title="포켓몬 상세정보" />

      <Info>
        <div className="info-title">이름</div>
        <div className="pokemon-name">{korean_name}</div>
      </Info>

      <Info>
        <div className="info-title">타입</div>
        <Types className="pokemon-type" types={types} />
      </Info>

      <PokemonImageBox>
        <img src={img_url} />
        <div className="pokemon-desc">
          <BiSolidRightArrow className="triangle-icon" /> {description}
        </div>
      </PokemonImageBox>

      <DetailButton onClick={detailButtonOnClick}>
        {isMypokemon ? "삭제" : "추가"}
      </DetailButton>
    </StyledDetail>
  );
};

const StyledDetail = styled(StyledBox)`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  > * {
    border-top: 1px solid ${colors.white.dark};
    border-left: 1px solid ${colors.white.dark};
    border-bottom: 1px solid ${colors.white.medium};
    border-right: 1px solid ${colors.white.medium};
    padding: 5px;
  }

  .info-title {
    font-size: small;
  }

  .pokemon-name {
    color: black;
    font-size: small;
    font-weight: bolder;
    flex-grow: 1;
  }

  .pokemon-type {
    font-size: small;
    flex-grow: 1;
  }
`;

const PokemonImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  border-top: 2px solid ${colors.white.dark};
  border-left: 2px solid ${colors.white.dark};
  border-bottom: 2px solid ${colors.white.medium};
  border-right: 2px solid ${colors.white.medium};
  box-sizing: border-box;
  padding: 30px 0 30px 0;
  gap: 10px;

  .pokemon-desc {
    font-size: small;
    background-color: lightyellow;
    padding: 15px;
    border: thick double black;
    border-radius: 10px;
    margin: 0 15px 0 15px;
  }

  .triangle-icon {
    width: 10px;
    padding-bottom: 0;
    vertical-align: text-top;
  }
`;

const DetailButton = styled(StyledButton)`
  padding: 5px 20px 5px 20px;
  margin: 5px 5px 5px auto;
`;
