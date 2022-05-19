import React, { useState, useRef } from "react";
import styled from "styled-components";
import FEIlogo from "../img/FEIlogo.svg";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

import { science, religion } from "./database";

const TextGenerator = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [textArr, setTextArr] = useState([]);
  const paragraphsRef = useRef(null);
  const typeRef = useRef(null);
  const checkboxRef = useRef(null);

  const increment = (e) => {
    e.preventDefault();
    const inc = paragraphs + 1;
    setParagraphs(inc);
  };
  const decrement = (e) => {
    e.preventDefault();
    if (paragraphs > 1) {
      const dec = paragraphs - 1;
      setParagraphs(dec);
    }
  };

  const generateText = (e) => {
    e.preventDefault();
    const numOfParagraphs = paragraphsRef.current.value;
    const type = typeRef.current.value;
    const startFrom = checkboxRef.current.checked;
    let starterUsed = false;
    let scienceUsed = false;

    const paragraphsArr = [];

    if (type == "mixed") {
      for (let i = 0; i < numOfParagraphs; i++) {
        if (startFrom && !starterUsed) {
          const startFrom = Math.floor(Math.random() * 2);
          if (startFrom === 0) {
            let paragraph = "NASA kłamie... ";
            const randomParagraph =
              science[Math.floor(Math.random() * (science.length - 1 + 1))];
            paragraph += randomParagraph;
            paragraphsArr.push(paragraph);
            starterUsed = true;
            scienceUsed = true;
          } else if (startFrom === 1) {
            let paragraph = "NASA kłamie... ";
            const randomParagraph =
              religion[Math.floor(Math.random() * (religion.length - 1 + 1))];
            paragraph += randomParagraph;
            paragraphsArr.push(paragraph);
            starterUsed = true;
            scienceUsed = false;
          } else {
            let paragraph = "NASA kłamie... ";
            const randomParagraph =
              science[Math.floor(Math.random() * (science.length - 1 + 1))];
            paragraph += randomParagraph;
            paragraphsArr.push(paragraph);
            starterUsed = true;
            scienceUsed = true;
          }
        } else {
          if (!scienceUsed) {
            const randomParagraph =
              science[Math.floor(Math.random() * (science.length - 1 + 1))];
            paragraphsArr.push(randomParagraph);
            scienceUsed = true;
          } else {
            const randomParagraph =
              religion[Math.floor(Math.random() * (religion.length - 1 + 1))];
            paragraphsArr.push(randomParagraph);
            scienceUsed = false;
          }
        }
      }
    }
    if (type == "science") {
      for (let i = 0; i < numOfParagraphs; i++) {
        if (startFrom && !starterUsed) {
          let paragraph = "NASA kłamie... ";
          const randomParagraph =
            science[Math.floor(Math.random() * (science.length - 1 + 1))];
          paragraph += randomParagraph;
          paragraphsArr.push(paragraph);
          starterUsed = true;
        } else {
          const randomParagraph =
            science[Math.floor(Math.random() * (science.length - 1 + 1))];
          paragraphsArr.push(randomParagraph);
        }
      }
    }
    if (type == "religion") {
      for (let i = 0; i < numOfParagraphs; i++) {
        if (startFrom && !starterUsed) {
          let paragraph = "NASA kłamie... ";
          const randomParagraph =
            religion[Math.floor(Math.random() * (religion.length - 1 + 1))];
          paragraph += randomParagraph;
          paragraphsArr.push(paragraph);
          starterUsed = true;
        } else {
          const randomParagraph =
            religion[Math.floor(Math.random() * (religion.length - 1 + 1))];
          paragraphsArr.push(randomParagraph);
        }
      }
    }

    // console.log(
    //   `Paragraphs: ${numOfParagraphs}, Type: ${type}, StartFrom: ${startFrom}`
    // );
    setTextArr(paragraphsArr);
  };
  return (
    <Generator>
      <div className="AppHead">
        <div className="AppHead-logo">
          <img src={FEIlogo} alt={FEIlogo} />
        </div>
        <div className="AppHead-form">
          <form
            className="AppHead-form-options"
            onSubmit={(e) => generateText(e)}
          >
            <div className="AppHead-form-options-form">
              <div className="AppHead-form-options-form-paragraphs">
                <label htmlFor="numberOfParagraphs">Ilość paragrafów:</label>
                <div className="AppHead-form-options-form-paragraphs-num">
                  <input
                    id="numberOfParagraphs"
                    type="number"
                    value={paragraphs}
                    ref={paragraphsRef}
                    readOnly
                  />
                  <div className="AppHead-form-options-form-paragraphs-num-arrows">
                    <button onClick={(e) => increment(e)}>
                      <FiArrowUp />
                    </button>
                    <button onClick={(e) => decrement(e)}>
                      <FiArrowDown />
                    </button>
                  </div>
                </div>
              </div>
              <div className="AppHead-form-options-form-types">
                <label htmlFor="typeSelection">Wybierz typ: </label>
                <select id="typeSelection" ref={typeRef}>
                  <option value="mixed">Mieszany</option>
                  <option value="science">Pseudonaukowy</option>
                  <option value="religion">Pseudoreligijny</option>
                </select>
                <span>
                  <input type="checkbox" ref={checkboxRef} />
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
        {textArr.length > 0 && (
          <div>
            {textArr.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
        )}
      </div>
      <footer className="Footer">
        <div>Flat Earth Ipsum by Oskar Dąbrowski</div>
      </footer>
    </Generator>
  );
};

const Generator = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  background-image: url("./FEIBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 500vh;

  .Footer {
    background-color: white;
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 25vh;
    & > div {
      padding: 1rem;
      font-family: "Roboto Condensed";
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .GeneratedText {
    position: relative;
    height: 350vh;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0px;

    font-family: "Roboto Condensed";
    font-size: 1.5rem;
    margin-bottom: 25vh;
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
    & > div {
      width: 85vw;
      height: 350vh;
      padding: 2rem;
      text-align: justify;
      overflow-y: scroll;
      background-color: white;
    }
    & > div > p {
      margin-bottom: 2rem;
      line-height: 2.5rem;
    }
  }

  .AppHead {
    z-index: 100;
    position: relative;
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
