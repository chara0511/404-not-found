import React from "react";
import styled from "styled-components";
import { theme, media } from "../styles";

import DefaultButton from "../styles/defaultButton";

const { fontSizes } = theme;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  height: 380px;

  ${media.lgTablet`
    width: 430px;
    height: 400px;
  `};

  ${media.lgDesktop`
    width: 586px;
    height: 450px;
  `};
`;

const Title = styled.h1`
  font-size: ${fontSizes.xxl};
  line-height: 71px;
  letter-spacing: -0.035em;
  width: 100%;

  ${media.lgDesktop`
    line-height: 95px;
    font-size: ${fontSizes.xplus};
  `};
`;

const Message = styled.p`
  font-size: ${fontSizes.lg};
  line-height: 27px;
  letter-spacing: -0.035em;
  margin-top: -2em;
  width: 328px;

  ${media.lgDesktop`
    width: 381px;
    line-height: 36px;
    font-size: ${fontSizes.xl};

  `};
`;

const Description = () => {
  return (
    <Wrapper>
      <Title>I have bad news for you</Title>

      <Message>
        The page you are looking for might be removed or is temporarily
        unavailable
      </Message>

      <DefaultButton />
    </Wrapper>
  );
};

export default Description;
