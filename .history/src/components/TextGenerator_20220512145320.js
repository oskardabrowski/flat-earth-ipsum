import React from "react";
import styled from "styled-components";
import FEIbackground from "../img/FEIBackground.png";

const TextGenerator = () => {
  return <Generator></Generator>;
};

const Generator = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("FEIBackground.png");
  background-size: cover;
`;

export default TextGenerator;
