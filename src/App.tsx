import "./App.css";
import styled from "styled-components";
import Board from "./features/Board/Board";

const AppContainer = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <Board />
    </AppContainer>
  );
}

export default App;
