import React from "react";
import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

const Button = styled.button`
  line-height: 21px;
  width: 216px;
  height: 68px;
  background-color: ${colors.primaryColor};
  color: ${colors.defaultColor};
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  border: 2px solid ${colors.primaryColor};

  &:hover {
    background-color: ${colors.defaultColor};
    color: ${colors.primaryColor};
  }
`;

const DefaultButton = () => {
  return <Button>Back to homepage</Button>;
};

export default DefaultButton;
