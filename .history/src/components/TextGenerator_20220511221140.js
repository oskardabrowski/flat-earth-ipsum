import React from "react";
import styled from "styled-components";
import EarthIco from "../img/earthico.png";

const TextGenerator = () => {
  return (
    <Generator>
      <div className="AppHead">
        <img src={EarthIco} alt={EarthIco} />
        <h1>Flat Earth Ipsum</h1>
      </div>
      <div className="AppBody">
        <div className="AppBody-menu">
          <h2>Jaki ma być twój płaskoziemca?</h2>
          <form>
            <select>
              <option>Mieszany</option>
              <option>Pesudonaukowy</option>
              <option>Fanatyk religijny</option>
            </select>
            <input type="number" min="1" />
            <input type="checkbox" /> Zacznij od "NASA kłamie..."
          </form>
        </div>
        <div className="AppBody-text"></div>
      </div>
    </Generator>
  );
};

const Generator = styled.div`
  width: 100%;
  height: 100vh;

  .AppBody {
    display: flex;
    height: 100%;
    z-index: 50;
    height: 90vh;
    color: white;
    &-menu {
      height: 100%;
      background-color: #000b3d;
      width: 25%auto;

      & > h2 {
        font-size: 1rem;
      }
      & > form {
        padding: 1rem;
        display: flex;
        flex-direction: column;
      }
    }
  }

  .AppHead {
    display: flex;
    align-items: center;
    background-color: #000b3d;
    box-shadow: 0px 1px 8px black;
    height: 10vh;
    z-index: 1000;
    & > img {
      width: 3rem;
      height: 3rem;
      margin: 0rem 1rem;
    }
    & > h1 {
      font-family: "Koulen";
      font-size: 3rem;
      color: white;
      font-weight: 300;
    }
  }
`;

export default TextGenerator;
