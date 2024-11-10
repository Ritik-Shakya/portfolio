import { useState } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const Div = styled.div`
  color: #c66868;
  padding: 6px;
  padding-left: 22px;
`;

const Diva = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Divb = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;

const Li = styled.li`
  border: 1px solid gray;
  padding: 10px;
  border-radius: 5px;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

const ImgC = styled.img`
  height: 400px;
  width: 400px;
  border-radius: 20px;
`;

const Divc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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

const Divd = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
`;

const Slider = styled.div`
  width: 600px;
  height: 500px;
  margin: 0 auto;
`;

function Aboutme() {
  const [openCert, setOpenCert] = useState(false);

  const slides = [
    { url: "http://localhost:5173/cnr.png", title: "Certificate1" },
    { url: "http://localhost:5173/chcj.png", title: "Certificate2" },
    { url: "http://localhost:5173/cj.jpg", title: "Certificate3" },
    { url: "http://localhost:5173/CCCC.png", title: "Certificate4" },
  ];

  return (
    <Div>
      <Diva>
        <div>
          <h2>Hi, I am Ritik Shakya.</h2>
          <h4>React Frontend developer.</h4>
          <p>
            I have been learning and making node.js webpages for a year now
            along with responsive react apps with full-stack features.
          </p>
        </div>
        <Img src="/ritik.jpg" alt="ritik" />
      </Diva>
      <Ul>
        <h3>Tech stacks I use:</h3>
        <Divb>
          <Li>HTML</Li>
          <Li>
            Css:
            <ul>
              <li>Tailwind css</li>
              <li>Material UI</li>
              <li>Styled-components</li>
              <li>Bootstrap</li>
            </ul>
          </Li>
          <Li>
            Node.js:
            <ul>
              <li>DOM</li>
              <li>jQuery</li>
              <li>Express.js</li>
              <li>EJS</li>
              <li>API(Creating & Consuming)</li>
            </ul>
          </Li>
          <Li>
            Database:
            <ul>
              <li>Postgres SQL</li>
              <li>Supabase</li>
            </ul>
          </Li>
          <Li>
            React:
            <ul>
              <li>React-router-dom</li>
              <li>Redux</li>
              <li>Redux Toolkit</li>
              <li>React Query</li>
              <li>Context API</li>
              <li>useEffect,useReducer,useMemo,useCallback etc.</li>
              <li>React-hook-form</li>
            </ul>
          </Li>
          <Li>
            Next.js:
            <ul>
              <li>App router(nested routes and layout)</li>
              <li>React server components</li>
              <li>Server actions</li>
              <li>useFormStatus,useTransition,useOptimistic</li>
            </ul>
          </Li>
        </Divb>
      </Ul>
      <Divc>
        <h4>My certificates...</h4>
        {openCert ? null : (
          <Button onClick={() => setOpenCert(true)}>Open</Button>
        )}
        {openCert ? (
          <>
            <Slider>
              <ImageSlider slides={slides} />
            </Slider>
            {/* <Divd>
              {" "}
              <ImgC src="/cnr.png" alt="certificate1" />
              <ImgC src="/chcj.png" alt="certificate2" />
              <ImgC src="/cj.jpg" alt="certificate3" />
              <ImgC src="/CCCC.png" alt="certificate4" />{" "}
            </Divd> */}
            <Button onClick={() => setOpenCert(false)}>Close</Button>
          </>
        ) : null}
      </Divc>
    </Div>
  );
}

export default Aboutme;
