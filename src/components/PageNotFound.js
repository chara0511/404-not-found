import React from "react";

import styled from "styled-components";
import Image from "./Image";
import Description from "./Description";
import { media } from "../styles";

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ${media.smDesktop`
    flex-direction: row;
    align-items: center;
  `};
`;

const PageNotFound = () => {
  return (
    <Content>
      <Image />

      <Description />
    </Content>
  );
};

export default PageNotFound;
