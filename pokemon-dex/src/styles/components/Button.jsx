import styled from "styled-components";
import { colors } from "../colors";

export const StyledButton = styled.button`
  background-color: ${colors.gray.medium};
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
    filter: brightness(0.9);
    border-top: 2px solid ${colors.gray.dark};
    border-left: 2px solid ${colors.gray.dark};
    border-bottom: 2px solid ${colors.gray.light};
    border-right: 2px solid ${colors.gray.light};
  }
`;
