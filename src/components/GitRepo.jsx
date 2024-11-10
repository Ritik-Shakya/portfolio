import styled from "styled-components";

const Div = styled.div`
  color: #c66868;
  padding: 6px;
  padding-left: 22px;
`;

const A = styled.a`
  color: cyan;
  &:hover {
    color: darkcyan;
  }
`;

function GitRepo() {
  return (
    <Div>
      <h4>
        {" "}
        My GitHub username:{" "}
        <A href="https://github.com/Ritik-Shakya">Ritik-Shakya</A>
      </h4>
      <p>I have all my repositories here ☝️</p>
      <h4>Contact me at : 9027535973</h4>
    </Div>
  );
}

export default GitRepo;
