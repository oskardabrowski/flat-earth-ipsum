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
      <div>
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
      <div></div>
    </Generator>
  );
};

const Generator = styled.div`
  width: 100%;
  height: 100vh;

  .AppHead {
    display: flex;
    & > img {
      width: 5rem;
    }
    & > h1 {
      font-family: "Koulen";
      font-size: 6rem;
      color: white;
      -webkit-text-stroke: 0.5px black;
    }
  }
`;

export default TextGenerator;