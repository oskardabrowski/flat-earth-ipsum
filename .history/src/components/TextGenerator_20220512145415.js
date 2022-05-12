import React from "react";
import styled from "styled-components";
import FEIbackground from "../img/FEIBackground.png";

const TextGenerator = () => {
  return (
    <Generator>
      <img src={FEIbackground} alt={FEIbackground} />
    </Generator>
  );
};

const Generator = styled.div`
  width: 100%;
  height: auto;
  & > img {
    width: 100%;
  }
`;

export default TextGenerator;
