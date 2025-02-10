import "./App.css";
import { Router } from "./shared/Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { StyledToast } from "./styles/components/Toast";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledToast />
      <Router />
    </>
  );
}

export default App;
