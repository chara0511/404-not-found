import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { fontSizes } = theme;

const Wrapper = styled.div`
  border: solid 1px green;
  width: 340px;
`;

const Title = styled.h1`
  font-size: ${fontSizes.xxl};
  line-height: 71px;
  letter-spacing: -0.035em;
`;

const Description = () => {
  return (
    <Wrapper>
      <Title>I have bad news for you</Title>
    </Wrapper>
  );
};

export default Description;
