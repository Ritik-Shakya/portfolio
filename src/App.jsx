import styled from "styled-components";
import AppLayout from "./components/AppLayout";

const Div = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  background-color: black;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <Div>
        <AppLayout />
      </Div>
    </>
  );
}

export default App;
