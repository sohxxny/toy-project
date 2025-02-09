import styled from "styled-components";
import { colors } from "../colors";

// * 내용을 담는 전체 회색 박스 스타일 컴포넌트
export const StyledBox = styled.div`
  background-color: ${colors.gray.medium};
  border: none;
  border-top: 2px solid ${colors.gray.light};
  border-left: 2px solid ${colors.gray.light};
  border-bottom: 2px solid ${colors.navy.dark};
  border-right: 2px solid ${colors.navy.dark};
  font-family: "DungGeunMo", sans-serif;
`;
