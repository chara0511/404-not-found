import React from "react";
import styled from "styled-components";
import image from "../image/Scarecrow.png";

const Wrapper = styled.div`
  border: solid 1px yellow;
`;

const Image = () => {
  return (
    <Wrapper>
      <img src={image} alt="scarecrow" />
    </Wrapper>
  );
};

export default Image;
