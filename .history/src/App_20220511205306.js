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
  background-color: black;
  color: white;
`;

export default App;
