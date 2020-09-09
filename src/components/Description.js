import React from "react";
import styled from "styled-components";
import { theme } from "../styles";

const { fontSizes } = theme;

const Wrapper = styled.div`
  border: solid 1px brown;
  width: 328px;
`;

const Desc = styled.p`
  font-size: ${fontSizes.lg};
  line-height: 27px;
  letter-spacing: -0.035em;
`;

const Description = () => {
  return (
    <Wrapper>
      <Desc>
        The page you are looking for might be removed or is temporarily
        unavailable
      </Desc>
    </Wrapper>
  );
};

export default Description;
