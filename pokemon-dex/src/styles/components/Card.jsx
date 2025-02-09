import styled from "styled-components";
import { colors } from "../colors";

// * 포켓몬 도감 리스트에 사용하는 카드 스타일 컴포넌트
export const StyledCard = styled.div`
  background-color: ${colors.white.light};
  border-top: 2px solid ${colors.gray.dark};
  border-left: 2px solid ${colors.gray.dark};
  border-bottom: 2px solid ${colors.white.medium};
  border-right: 2px solid ${colors.white.medium};

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.9);
  }
`;
