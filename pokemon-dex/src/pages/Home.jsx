import pokeballImage from "../assets/pokeball.png";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { useNavigation } from "../hooks/useNavigation";

/**
 * * 홈 페이지
 */
export const Home = () => {
  const { goDex } = useNavigation();
  return (
    <StyledHomePage>
      <GotoDexButton onClick={goDex}>
        <img src={pokeballImage} alt="포켓몬 로고" />
        <div className="goto-dex-text">go to dex</div>
      </GotoDexButton>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

  img {
    width: 50px;
  }

  .goto-dex-text {
    font-size: medium;
    color: white;
  }
`;
