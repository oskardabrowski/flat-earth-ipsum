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
            <label>Wybierz typ:</label>
            <select>
              <option>Mieszany</option>
              <option>Pesudonaukowy</option>
              <option>Fanatyk religijny</option>
            </select>
            <label></label>
            <input type="number" min="1" />
            <label></label>
            <div>
              <input type="checkbox" /> Zacznij od "NASA kłamie..."
            </div>
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
    height: 85vh;
    color: white;

    &-menu {
      height: 100%;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: left;
      flex-direction: column;
      background: linear-gradient(to top right, #ff00fc, #5100ff);
      border-radius: 0px 25px 0px 0px;
      overflow: hidden;

      & > h2 {
        font-size: 1.2rem;
        margin-top: 1rem;
        font-family: "Roboto Condensed";
        font-weight: 300;
      }
      & > form {
        font-family: "Roboto Condensed";
        padding: 1rem;
        display: flex;
        flex-direction: column;
        width: 90%;

        & > input {
          width: 100%;
        }
      }
    }
  }

  .AppHead {
    display: flex;
    align-items: center;
    background-color: white;
    height: 15vh;
    z-index: 1000;
    & > img {
      width: 3rem;
      height: 3rem;
      margin: 0rem 1rem;
    }
    & > h1 {
      font-family: "Koulen";
      font-size: 3rem;
      color: black;
      font-weight: 300;
    }
  }
`;

export default TextGenerator;
