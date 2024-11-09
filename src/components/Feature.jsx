import { useState } from "react";
import styled, { keyframes } from "styled-components";

const gradientanimation = keyframes`
     0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Div = styled.div`
  background: linear-gradient(300deg, #00bfff, #ef9ca8, #d6c8c6);
  background-size: 180% 180%;
  padding: 8px;
  border: 1px solid #45acbc;
  border-radius: 5px;
  margin-bottom: 10px;
  animation: ${gradientanimation} 5s ease infinite;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #1e4c1a;
`;

const Diva = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Divb = styled.div``;

const Divc = styled.div`
  padding: 8px;
  font-size: 1.1rem;
`;

const Divd = styled.div`
  padding: 8px;
`;

const Image = styled.img`
  height: 300px;
  width: 500px;
  border-radius: 15px;
`;

const A = styled.a`
  color: cyan;
  &:hover {
    color: darkcyan;
  }
`;

const bright = keyframes`
  0%{
    color: black;
  }
  50%{
    color:white;
  }
  100%{
    color:black;
  }
`;

const Span = styled.span`
  animation: ${bright} 2s infinite;
`;

const rotate = keyframes`
  0%{
    transform:rotate(0deg);
  }

  100%{
    transform:rotate(360deg);
  }
`;

const Aside = styled.aside`
  height: 25px;
  animation: ${rotate} 2s ease infinite;
`;

const slideSqueeze = keyframes`
  0% {
    transform-origin: left;
    transform: translateX(0) scaleX(1.5);
  }
  50% {
    transform-origin: left;
    transform: translateX(100%) scaleX(1);
  }
  100% {
    transform-origin: left;
    transform: translateX(100%) scaleX(1);
  }
`;

const slideExpand = keyframes`
  0% {
    transform-origin: right;
    transform: translateX(100%) scaleX(1.5);
    width: 50%;
  }
  50% {
    transform-origin: right;
    transform: translateX(0) scaleX(1);
    width: calc(50% + 0.5rem);
  }
  100% {
    transform-origin: right;
    transform: translateX(0) scaleX(1);
    width: calc(50% + 0.5rem);
  }
`;

const H4 = styled.h4`
  animation: ${(slideSqueeze, slideExpand)} 2s forwards infinite;
`;

const Button = styled.button`
  background-color: #2a72b1;
  border: none;
  color: #dcd112;
  padding: 5px;
  border-radius: 5px;
  width: fit-content;
  &:hover {
    background-color: #0f2f4b;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  border: 1px solid gray;
  border-radius: 8px;
  padding: 20px;
`;

function Feature({ project }) {
  const [open, setOpen] = useState(false);
  const { name, type, link, img, technology, features } = project;
  const {
    library,
    framework,
    router,
    style,
    backend,
    queryManagement,
    formManagement,
    other,
  } = technology;
  return (
    <Div>
      <Diva>
        <h1>{name}</h1>
        <Aside>💫</Aside>
        <p>{type}</p>
        <A href={link}>
          <em>{link}</em>
        </A>
      </Diva>
      <Divb>
        <Image src={img} alt="" />
      </Divb>
      {open === false ? (
        <Span>
          <Button onClick={() => setOpen(true)}>Details...</Button>
        </Span>
      ) : (
        <>
          {" "}
          <Divc>
            <Ul>
              <Span>Technologies used:</Span>

              <li>Library:{library}</li>
              <li>Framework:{framework}</li>
              <li>Router:{router}</li>
              <li>Styling:{style}</li>
              <li>Database:{backend}</li>
              <li>Query-Management :{queryManagement}</li>
              <li>Form-Management: {formManagement}</li>
            </Ul>
            <ol>
              <Span>Other tech used:</Span>

              {other.map((o) => (
                <li key={o.o}>{o.o}</li>
              ))}
            </ol>
          </Divc>
          <Divd>
            <h4>
              <H4> Features:</H4>

              {features.map((feature) => (
                <p key={feature.a}>{feature.a}</p>
              ))}
            </h4>
          </Divd>
          <Button onClick={() => setOpen(false)}>close</Button>
        </>
      )}
    </Div>
  );
}

export default Feature;
