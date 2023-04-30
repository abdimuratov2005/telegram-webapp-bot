import { useEffect } from "react";
import styled from "styled-components";

const GlobalApp = styled.body `
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
`;
const telegram = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    telegram.ready();
  }, [])
  const onClose = () => {
    telegram.close();
  }
  return(
    <>
      <GlobalApp>
        <button onClick={onClose}>
          Close
        </button>
      </GlobalApp>
    </>
  )
}

export default App;