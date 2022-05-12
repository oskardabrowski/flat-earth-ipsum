import React from "react";
import styled from "styled-components";
import EarthIco from "../img/earthico.png";

const TextGenerator = () => {
  return (
    <Generator>
      <div className="AppHead">
        <h1>Flat Earth Ipsum</h1>
        <img src={EarthIco} alt={EarthIco} />
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
    & > h1 {
      font-family: "Koulen";
      font-size: 6rem;
      color: white;
      -webkit-text-stroke: 0.5px black;
    }
  }
`;

export default TextGenerator;
