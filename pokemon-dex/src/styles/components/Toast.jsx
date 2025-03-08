import { Slide } from "react-toastify";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { colors } from "../colors";

// * 토스트 스타일 컴포넌트
const StyledToastContainer = styled(ToastContainer).attrs({
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: true,
  pauseOnFocusLoss: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  transition: Slide,
})`
  .Toastify__toast {
    background-color: ${colors.gray.light};
    color: black;
    font-family: "DungGeunMo", sans-serif;
    font-size: small;
    border-radius: 0px;
    border-top: 2px solid ${colors.white.medium};
    border-left: 2px solid ${colors.white.medium};
    border-bottom: 2px solid ${colors.gray.dark};
    border-right: 2px solid ${colors.gray.dark};
  }
  .Toastify__close-button {
    background-color: ${colors.gray.light};
    color: ${colors.gray.dark};
    border-top: 2px solid ${colors.white.light};
    border-left: 2px solid ${colors.white.light};
    border-bottom: 2px solid ${colors.white.dark};
    border-right: 2px solid ${colors.white.dark};
    opacity: 1;

    display: flex;
    align-items: center;
    width: 17px;
    aspect-ratio: 1 / 1;

    &:active {
      filter: brightness(0.8);
      border-top: 2px solid ${colors.gray.dark};
      border-left: 2px solid ${colors.gray.dark};
      border-bottom: 2px solid ${colors.gray.light};
      border-right: 2px solid ${colors.gray.light};
    }
  }
`;

/**
 * * 스타일이 적용된 토스트
 */
export const StyledToast = () => {
  return <StyledToastContainer />;
};
