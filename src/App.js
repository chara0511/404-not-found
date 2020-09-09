import React from "react";
import styled from "styled-components";
import { GlobalStyles, theme } from "./styles";
import PageNotFound from "./components/PageNotFound";

const {
  colors: { defaultColor },
  fontSizes,
} = theme;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 949px;
  background: ${defaultColor};
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px ${fontSizes.xl};
`;
function App() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <PageNotFound />
      </Container>
    </>
  );
}

export default App;
