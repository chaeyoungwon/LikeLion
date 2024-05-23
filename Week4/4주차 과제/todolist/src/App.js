import List from "./components/List/List";
import SideBar from "./components/SideBar/SideBar";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <SideBar />
      <List />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: row;
`;

export default App;
