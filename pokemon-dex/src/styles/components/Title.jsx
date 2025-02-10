import styled from "styled-components";
import { colors } from "../colors";
import { useNavigation } from "../../hooks/useNavigation";
import { StyledButton } from "./Button";

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
const CloseButton = styled(StyledButton)`
  height: 100%;
  aspect-ratio: 10/9;
  padding: 4px;
`;

/**
 * * 닫기 버튼이 있는 타이틀
 * @param {string} title - 타이틀 문자열
 */
export const TitleWithButton = ({ title }) => {
  const { goBack } = useNavigation();

  return (
    <StyledTitle>
      {title}
      <CloseButton onClick={goBack}>X</CloseButton>
    </StyledTitle>
  );
};
