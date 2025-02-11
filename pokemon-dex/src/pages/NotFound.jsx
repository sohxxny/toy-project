import styled from "styled-components";
import { colors } from "../styles/colors";
import { StyledBox } from "../styles/components/Box";
import { StyledTitle } from "../styles/components/Title";
import { StyledButton } from "../styles/components/Button";
import { useNavigation } from "../hooks/useNavigation";

const StyledNotFound = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MessageBox = styled(StyledBox)`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundMessage = styled.div`
  margin: 20px;
  font-size: small;
`;

const GoHomeButton = styled(StyledButton)`
  padding: 5px 20px 5px 20px;
  margin: 0 10px 5px auto;
  font-size: small;
`;

export const NotFound = () => {
  const { goHome } = useNavigation();
  return (
    <StyledNotFound>
      <MessageBox>
        <StyledTitle>404 Not Found</StyledTitle>
        <NotFoundMessage>⚠️ 알 수 없는 페이지입니다.</NotFoundMessage>
        <GoHomeButton onClick={goHome}>홈으로 이동</GoHomeButton>
      </MessageBox>
    </StyledNotFound>
  );
};
