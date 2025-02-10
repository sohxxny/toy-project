import pokeballImage from "../assets/pokeball.png";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { useNavigation } from "../hooks/useNavigation";

const StyledHomePage = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LogoWrapper = styled.img`
  width: 50px;
`;

const GotoDexButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dotted black;
  padding: 10px;
  gap: 10px;

  &:active {
    background-color: ${colors.blue};
    opacity: 0.5;
  }
`;

const GotoDexText = styled.div`
  font-size: medium;
  color: white;
`;

/**
 * * 홈 페이지
 */
export const Home = () => {
  const { goDex } = useNavigation();
  return (
    <StyledHomePage>
      <GotoDexButton onClick={goDex}>
        <LogoWrapper src={pokeballImage} alt="포켓몬 로고" />
        <GotoDexText>go to dex</GotoDexText>
      </GotoDexButton>
    </StyledHomePage>
  );
};
