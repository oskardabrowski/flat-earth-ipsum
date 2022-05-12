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
            <label>Wybierz typ: </label>
            <select>
              <option>Mieszany</option>
              <option>Pesudonaukowy</option>
              <option>Fanatyk religijny</option>
            </select>
            <label>Wybierz ilość paragrafów: </label>
            <input type="number" min="1" />
            <div>
              <input type="checkbox" /> Zacznij od "NASA kłamie..."
            </div>
            <button type="submit">Odkryj naleśnika</button>
          </form>
        </div>
        <div className="AppBody-text"></div>
      </div>
    </Generator>
  );
};

const Generator = styled.div`
  width: 100%;
  height: auto;
  background-image: url("../img/FEIBackground.png");
`;

export default TextGenerator;
