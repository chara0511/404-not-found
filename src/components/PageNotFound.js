import React from "react";

import styled from "styled-components";
import { theme } from "../styles";
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";
import DefaultButton from "../styles/defaultButton";
import Footer from "./Footer";

const { colors, fontSizes } = theme;

const Content = styled.div`
  max-width: 375px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  border: solid 1px red;
  width: 133px;
`;

const SubTitle = styled.h2`
  color: ${colors.primaryColor};
  margin: 0;
  font-size: ${fontSizes.xl};
  text-transform: uppercase;
  letter-spacing: -0.08em;
  line-height: 25px;
  font-weight: bold;
`;

const PageNotFound = () => {
  return (
    <Content>
      <Wrapper>
        <SubTitle>404 not found</SubTitle>
      </Wrapper>

      <Image />

      <Title />

      <Description />

      <DefaultButton />

      <Footer />
    </Content>
  );
};

export default PageNotFound;
