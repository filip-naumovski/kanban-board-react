import "./App.css";
import styled from "styled-components";
import Board from "./features/Board/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const AppContainer = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </AppContainer>
  );
}

export default App;
