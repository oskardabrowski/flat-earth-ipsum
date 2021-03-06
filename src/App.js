import styled from "styled-components";
import { Helmet } from "react-helmet";
import GlobalStyle from "./components/GlobalStyle";
import TextGenerator from "./components/TextGenerator";
import FEIico from "./img/FEIico.png";

function App() {
  return (
    <Application>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FlatEarthIpsum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href={FEIico} rel="icon" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Koulen&family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <TextGenerator />
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
