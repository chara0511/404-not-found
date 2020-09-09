import React from "react";
import styled from "styled-components";
import { GlobalStyles, theme, media } from "./styles";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

const {
  colors: { defaultColor, primaryColor },
  fontSizes,
} = theme;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 949px;
  background: ${defaultColor};
  padding: 20px ${fontSizes.xl};

  ${media.smDesktop`
    max-width: 768px;
    height: 1024px;
    padding: 30px 12px;
  `};

  ${media.lgDesktop`
    max-width: 1440px;
    height: 1080px;
    padding: 40px 6px;
  `};
`;

const SubTitle = styled.h2`
  color: ${primaryColor};
  margin: 0;
  font-size: ${fontSizes.xl};
  text-transform: uppercase;
  letter-spacing: -0.08em;
  line-height: 25px;
  font-weight: bold;
  width: 133px;
  position: absolute;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <SubTitle>404 not found</SubTitle>

        <PageNotFound />

        <Footer />
      </Container>
    </>
  );
}

export default App;
