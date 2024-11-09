import styled from "styled-components";

const Headerrr = styled.header`
  height: fit-content;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 15px;
  background-color: royalblue;
  margin-bottom: 10px;
`;

function Header() {
  return (
    <Headerrr>
      <h1>Header</h1>
    </Headerrr>
  );
}

export default Header;
