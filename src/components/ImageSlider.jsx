import { useState } from "react";
import { HiArrowLeft, HiArrowRight, HiStop } from "react-icons/hi";
import styled from "styled-components";

const DivImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
`;

const DivSlider = styled.div`
  height: 100%;
  position: relative;
`;

const LeftDiv = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 45px;
  color: black;
  z-index: 1;
  cursor: pointer;
`;

const RightDiv = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 45px;
  color: black;
  z-index: 1;
  cursor: pointer;
`;

const DivDotContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DivDots = styled.div`
  margin: 0 3px;
  cursor: pointer;
  font-size: 20px;
`;

function ImageSlider({ slides }) {
  const [index, setIndex] = useState(3);

  function handlePrevious() {
    const isFirst = index === 0;
    const previous = isFirst ? slides.length - 1 : index - 1;
    setIndex(previous);
  }

  function handleNext() {
    const isLast = index === slides.length - 1;
    const next = isLast ? 0 : index + 1;
    setIndex(next);
  }

  function goToSlide(slideIndex) {
    setIndex(slideIndex);
  }

  return (
    <DivSlider>
      <LeftDiv onClick={handlePrevious}>
        <HiArrowLeft />
      </LeftDiv>
      <RightDiv onClick={handleNext}>
        <HiArrowRight />
      </RightDiv>
      <DivImg style={{ backgroundImage: `url(${slides[index].url})` }}></DivImg>
      <DivDotContainer>
        {slides.map((slide, id) => (
          <DivDots key={id} onClick={() => goToSlide(id)}>
            <HiStop />
          </DivDots>
        ))}
      </DivDotContainer>
    </DivSlider>
  );
}

export default ImageSlider;
