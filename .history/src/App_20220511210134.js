import styled from "styled-components";
import { Helmet } from "react-helmet";
import GlobalStyle from "./components/GlobalStyle";
import Headeer from "./components/Header";

function App() {
  return (
    <Application>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FlatEarthIpsum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Koulen&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Headeer />
    </Application>
  );
}

const Application = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: white;
  color: black;
`;

export default App;
