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
  margin: 20px auto;
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 949px;
  background: ${defaultColor};
  padding: 0px 25px;

  ${media.lgTablet`
    max-width: 768px;
    height: 1024px;
  `};

  ${media.smDesktop`
    max-width: 1024px;
    height: 100vh;
    padding: 25px 52px;
  `};

  ${media.mdDesktop`
    max-width: 1280px;
    padding: 30px 56px;
  `};

  ${media.lgDesktop`
    max-width: 1440px;
    padding: 40px 77px;
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
