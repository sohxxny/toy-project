import styled from "styled-components";
import { colors } from "../colors";

// * Box의 타이틀을 정의하는 스타일 컴포넌트
export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${colors.navy.medium};
  color: white;
  font-size: 13px;
`;

// * 버튼이 있는 타이틀 스타일 컴포넌트
const CloseButton = styled.button`
  background-color: ${colors.gray.medium};
  height: 100%;
  aspect-ratio: 10/9;
  padding: 4px;

  display: flex;
  align-items: center;

  font-family: "DungGeunMo", sans-serif;
  border-top: 2px solid ${colors.gray.light};
  border-left: 2px solid ${colors.gray.light};
  border-bottom: 2px solid ${colors.gray.dark};
  border-right: 2px solid ${colors.gray.dark};
  margin-left: auto;
  color: black;

  &:active {
    filter: brightness(0.95);
    border-top: 2px solid ${colors.gray.dark};
    border-left: 2px solid ${colors.gray.dark};
    border-bottom: 2px solid ${colors.gray.light};
    border-right: 2px solid ${colors.gray.light};
  }
`;

/**
 * * 닫기 버튼이 있는 타이틀
 * @param {string} title - 타이틀 문자열
 * @param {Function} goToBack - 뒤로가기 함수 () => void
 */
export const TitleWithButton = ({ title, goToBack }) => {
  return (
    <StyledTitle>
      {title}
      <CloseButton onClick={goToBack}>X</CloseButton>
    </StyledTitle>
  );
};
