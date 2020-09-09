import React from "react";
import styled from "styled-components";
import image from "../image/Scarecrow.png";
import { media } from "../styles";

const Wrapper = styled.div`
  ${media.lgTablet`
    width: 430px;
  `};

  ${media.smDesktop`
    width: 480px;
  `};

  ${media.lgDesktop`
    width: 540px;
  `};
`;

const Image = () => {
  return (
    <Wrapper>
      <img src={image} alt="scarecrow" />
    </Wrapper>
  );
};

export default Image;
