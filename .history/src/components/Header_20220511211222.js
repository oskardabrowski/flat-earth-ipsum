import React from "react";
import styled from "styled-components";
import EarthImg from "../img/earth.jpg";

const Header = () => {
  return (
    <AppHead>
      <h1>Flat Earth Ipsum</h1>
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

  & > h1 {
    position: absolute;
    font-family: "Koulen";
    font-size: 6rem;
    color: white;
    -webkit-text-stroke: 0.5px black;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;
