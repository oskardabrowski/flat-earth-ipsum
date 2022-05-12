import React from "react";
import styled from "styled-components";
import FEIbackground from "../img/FEIBackground.png";
import FEIlogo from "../img/FEIlogo.svg";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const TextGenerator = () => {
  return (
    <Generator>
      <div>
        <img src={FEIbackground} alt={FEIbackground} />
        <div className="AppHead">
          <div className="AppHead-logo">
            <img src={FEIlogo} alt={FEIlogo} />
          </div>
          <div className="AppHead-form">
            <form className="AppHead-form-options">
              <div className="AppHead-form-options-form">
                <div className="AppHead-form-options-form-paragraphs">
                  <label for="numberOfParagraphs">Ilość paragrafów:</label>
                  <div className="AppHead-form-options-form-paragraphs-num">
                    <input id="numberOfParagraphs" type="number" value="1" />
                    <div className="AppHead-form-options-form-paragraphs-num-arrows">
                      <button>
                        <FiArrowUp />
                      </button>
                      <button>
                        <FiArrowDown />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="AppHead-form-options-form-types">
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
              <div className="AppHead-form-options-submit">
                <button type="submit">Usmaż naleśnika</button>
              </div>
            </form>
          </div>
        </div>
        <div className="GeneratedText">
          <div>
            <p>
              Cow queso cheesy feet. Macaroni cheese cow cheesy feet feta
              bocconcini red leicester melted cheese pecorino. Fondue feta
              cheese on toast say cheese say cheese edam bocconcini cheesy feet.
              Blue castello who moved my cheese roquefort. Danish fontina chalk
              and cheese airedale. Boursin st. agur blue cheese cheese slices
              cheese and biscuits bocconcini smelly cheese manchego halloumi.
              When the cheese comes out everybody's happy lancashire squirty
              cheese ricotta mozzarella rubber cheese the big cheese lancashire.
              Bavarian bergkase monterey jack hard cheese ricotta cheese on
              toast bavarian bergkase mascarpone parmesan. Cheesy feet stilton
              melted cheese. Cheese triangles brie cheesy feet. Croque monsieur
              caerphilly paneer cheesecake taleggio airedale fondue feta.
              Cheeseburger who moved my cheese melted cheese roquefort
              caerphilly cheese on toast goat camembert de normandie. Manchego
              melted cheese cheese and biscuits cauliflower cheese airedale
              squirty cheese boursin feta. Macaroni cheese caerphilly.
              Cheesecake ricotta ricotta. Chalk and cheese roquefort stilton
              fromage fromage frais lancashire cheesy feet pepper jack. Macaroni
              cheese the big cheese dolcelatte cheddar who moved my cheese
              monterey jack stinking bishop bavarian bergkase. Rubber cheese
              hard cheese cheesy feet cut the cheese parmesan squirty cheese.
              Squirty cheese stilton fromage. Taleggio who moved my cheese brie
              boursin cauliflower cheese stilton boursin jarlsberg. Danish
              fontina queso bavarian bergkase manchego queso feta queso cheese
              and wine. Mascarpone goat swiss stilton red leicester goat
              emmental swiss. Macaroni cheese blue castello stilton jarlsberg.
            </p>
          </div>
        </div>
      </div>
    </Generator>
  );
};

const Generator = styled.div`
  width: 100%;
  height: max-content;
  position: initial;

  & > div {
    position: relative;
    width: 100%;
  }

  .Footer {
    position: absolute;
    top: 350vh;
    background-color: white;
    z-index: 100;
  }

  & > img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .GeneratedText {
    top: 105vh;
    position: absolute;
    background-color: white;
    width: 85%;
    left: 50%;
    max-height: 350vh;
    transform: translate(-50%, 0%);
    padding: 2rem;
    border-radius: 15px;
    text-align: justify;
    overflow-y: scroll;
    font-family: "Roboto Condensed";
    font-size: 1.5rem;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: white;
    }
    ::-webkit-scrollbar-thumb {
      background: skyblue;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: blue;
    }
    & > div > p {
      margin-bottom: 2rem;
      line-height: 2.5rem;
    }
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
        height: 100%;
        &-form {
          height: 80%;
          display: flex;

          &-paragraphs {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            &-num {
              margin-top: 1rem;
              display: flex;
              & > input {
                width: 4rem;
                height: 5rem;
                text-align: center;
                font-size: 2rem;
                &::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                }
              }

              &-arrows {
                display: flex;
                flex-direction: column;

                & > button {
                  height: 50%;
                  padding: 0rem 0.5rem;
                  background: none;
                  border: none;

                  &:hover {
                    cursor: pointer;
                    background-color: skyblue;
                  }
                }
              }
            }
          }
          &-types {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            & > select {
              margin: 1rem 0rem;
            }
          }
        }
        &-submit {
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;

          & > button {
            padding: 0.5rem;
            border: none;
            font-family: "Roboto Condensed";
            font-size: 1.2rem;
            color: white;
            border-radius: 15px;
            background: linear-gradient(to top right, yellowgreen, skyblue);

            &:hover {
              color: black;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export default TextGenerator;
