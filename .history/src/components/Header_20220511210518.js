import React from "react";
import styled from "styled-components";
import EarthImg from "../img/earth.jpg";

const Header = () => {
  return (
    <AppHead>
      <div>
        <span>Flat Earth Ipsum</span>
        <span>Flat Earth Ipsum</span>
      </div>
      <img src={EarthImg} alt={EarthImg} />
    </AppHead>
  );
};

export default Header;

const AppHead = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    & > span {
      &:first-child {
        position: absolute;
        font-family: "Koulen";
        font-size: 6rem;
        color: white;
        -webkit-text-stroke: 2px black;
      }
    }
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;
