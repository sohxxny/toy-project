import styled from "styled-components";
import { pokemonTypes } from "../data/pokemonType";
import { typeImages } from "../assets/types/index.js";

const Styledtypes = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: black;
  font-size: small;
  font-weight: bold;
`;

const TypeImage = styled.img`
  width: 12px;
  border-radius: 2px;
`;

/**
 * * 포켓몬 타입 배열을 그리는 컴포넌트
 * 아래 작성한 Type 컴포넌트를 반복
 * @param {Array} types - 포켓몬의 타입 배열 (문자열)
 * @param {string} className - 타입에 스타일 컴포넌트를 추가하면서 받는 클래스 이름
 */
export const Types = ({ types, className }) => {
  return (
    <Styledtypes className={className}>
      {types.map((type, index) => (
        <Type key={index} type={type} />
      ))}
    </Styledtypes>
  );
};

/**
 * * 포켓몬의 타입을 그리는 컴포넌트
 * @param {string} type - 포켓몬의 타입
 */
export const Type = ({ type }) => {
  const typeName = pokemonTypes[type];
  return (
    <StyledType>
      <TypeImage src={typeImages[`./${typeName}.png`]} />
      {type}
    </StyledType>
  );
};
