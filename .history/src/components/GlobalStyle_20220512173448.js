import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
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
`;

export default GlobalStyle;
