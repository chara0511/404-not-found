import React from "react";
import styled from "styled-components";
import image from "../image/Scarecrow.png";
import { media } from "../styles";

const Wrapper = styled.div`
  border: solid 1px yellow;
  max-width: 286px;
  max-height: 238px;
  margin: 0 auto;

  ${media.lgDesktop`
    max-width: 540px;
    max-height: 448px;
    margin: 0;
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
