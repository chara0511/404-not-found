import { createGlobalStyle } from "styled-components";

import FontFaces from "./fontFaces";
import theme from "./theme";

const { colors, fontSizes, fonts } = theme;

const GlobalStyles = createGlobalStyle`
${FontFaces}

html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-family: ${fonts.SpaceMono};
    font-size: ${fontSizes.lg};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: ${colors.primaryColor};
  }

  h2 {
    font-family: ${fonts.Inconsolata};
  }

  p {
    color:${colors.textColor};
    margin: 0;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    font-family: ${fonts.Montserrat};
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${colors.primaryColor};
    position: relative;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.textColor};
    }
  }

  button {
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SpaceMono};
    cursor: pointer;
    border: 0;
    border-radius: 0;
    
    &:focus,
    &:active {
      outline-color: ${colors.primaryColor};
    }
  }
`;

export default GlobalStyles;
