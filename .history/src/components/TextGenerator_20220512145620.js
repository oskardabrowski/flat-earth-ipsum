import React from "react";
import styled from "styled-components";
import FEIbackground from "../img/FEIBackground.png";

const TextGenerator = () => {
  return (
    <Generator>
      <img src={FEIbackground} alt={FEIbackground} />
      <div className="AppHead"></div>
    </Generator>
  );
};

const Generator = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  & > img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default TextGenerator;
