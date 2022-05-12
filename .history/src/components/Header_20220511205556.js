import React from "react";
import styled from "styled-components";
import EarthImg from "../img/earth.jpg";

const Header = () => {
  return (
    <AppHead>
      <span>Flat Earth Ipsum</span>
      <img src={EarthImg} alt={EarthImg} />
    </AppHead>
  );
};

export default Header;

const AppHead = styled.header`
  width: 100%;
  height: 100vh;
`;
