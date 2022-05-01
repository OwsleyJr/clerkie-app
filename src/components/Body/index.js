import React from "react";
import TextWithImage from "../Cards/TextWithImageCard";
import Text from "../Cards/TextCard";
import ImageCard from "../Cards/ImageCard";
import SpacingCard from "../Cards/SpacingCard";
import styled from "styled-components";

const Body = () => {
  return (
    <Container>
      <TextWithImage />
      {/* <SpacingCard />
          <Text />
          <SpacingCard />
          <ImageCard /> */}
    </Container>
  );
};

export default Body;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80pt;
`;
