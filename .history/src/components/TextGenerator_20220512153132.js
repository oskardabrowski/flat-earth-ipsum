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
        <div className="AppHead-form">
          <form className="AppHead-form-options">
            <div>
              <div>
                <label for="numberOfParagraphs">Ilość paragrafów:</label>
                <input id="numberOfParagraphs" type="number" value="1" />
              </div>
              <div>
                <label for="typeSelection">Wybierz typ: </label>
                <select id="typeSelection">
                  <option>Mieszany</option>
                  <option>Pseudonaukowy</option>
                  <option>Pseudoreligijny</option>
                </select>
                <span>
                  <input type="checkbox" />
                  Zacznij od "NASA kłamie... "
                </span>
              </div>
            </div>
            <div>
              <button>Usmaż naleśnika</button>
            </div>
          </form>
        </div>
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
      margin-top: 3rem;
      border-radius: 15px;
      font-family: "Roboto Condensed";
      &-options {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }
`;

export default TextGenerator;