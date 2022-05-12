import React from "react";
import styled from "styled-components";
import FEIbackground from "../img/FEIBackground.png";
import FEIlogo from "../img/FEIlogo.svg";

const TextGenerator = () => {
  return (
    <Generator>
      <img src={FEIbackground} alt={FEIbackground} />
      <div className="AppHead">
        <div className="AppHead-logo">
          <img src={FEIlogo} alt={FEIlogo} />
        </div>
        <div className="AppHead-form"></div>
      </div>
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

  .AppHead {
    z-index: 100;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &-logo {
      & > img {
        width: 35rem;
      }
    }
    &-form {
      width: 50rem;
      height: 20rem;
      background-color: white;
      margin-top: 1rem;
    }
  }
`;

export default TextGenerator;
