import styled from "styled-components";
import { Types } from "./Types";
import { StyledBox } from "../styles/components/Box";
import { TitleWithButton } from "../styles/components/Title";
import { colors } from "../styles/colors";
import { BiSolidRightArrow } from "react-icons/bi";

const StyledDetail = styled(StyledBox)`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Info = styled.span`
  font-size: small;
  border-top: 1px solid ${colors.white.dark};
  border-left: 1px solid ${colors.white.dark};
  border-bottom: 1px solid ${colors.white.medium};
  border-right: 1px solid ${colors.white.medium};
  padding: 5px;
`;

const PokemonName = styled(Info)`
  color: black;
  font-size: small;
  font-weight: bolder;
  flex-grow: 1;
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
`;

const PokemonDesc = styled.div`
  font-size: small;
  background-color: lightyellow;
  padding: 15px;
  border: thick double black;
  border-radius: 10px;
  margin: 0 15px 0 15px;
`;

const TriangleIcon = styled(BiSolidRightArrow)`
  width: 10px;
  padding-bottom: 0;
  vertical-align: text-top;
`;

const PokemonType = styled(Types)`
  font-size: small;
  border-top: 1px solid ${colors.white.dark};
  border-left: 1px solid ${colors.white.dark};
  border-bottom: 1px solid ${colors.white.medium};
  border-right: 1px solid ${colors.white.medium};
  padding: 5px;
  flex-grow: 1;
`;

/**
 * * 포켓몬의 디테일 정보를 표시하는 컴포넌트
 * @param {Object} pokemon - 포켓몬 정보 {img_url, korean_name, types, id, description}
 * TODO - 스타일 리팩토링하기
 */
export const PokemonDetail = ({ pokemon }) => {
  const { img_url, korean_name, types, description } = pokemon;

  return (
    <StyledDetail>
      <TitleWithButton title="포켓몬 상세정보" />
      <InfoWrapper>
        <Info>이름</Info>
        <PokemonName>{korean_name}</PokemonName>
      </InfoWrapper>
      <InfoWrapper>
        <Info>타입</Info>
        <PokemonType types={types} />
      </InfoWrapper>
      <PokemonImageBox>
        <img src={img_url} />
        <PokemonDesc>
          <TriangleIcon /> {description}
        </PokemonDesc>
      </PokemonImageBox>
    </StyledDetail>
  );
};
