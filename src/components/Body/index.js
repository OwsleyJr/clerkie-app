import React, { useState, useEffect } from "react";
import TextWithImage from "../Cards/TextWithImageCard";
import Text from "../Cards/TextCard";
import ImageCard from "../Cards/ImageCard";
import SpacingCard from "../Cards/SpacingCard";
import styled from "styled-components";
import clerkieData from "../../../clerkieData.json";

const Body = () => {
  const [spacingData, setSpacingData] = useState([]);

  useEffect(() => {
    const returnedData = clerkieData.filter((data) => {
      return data.type === "space";
    });

    setSpacingData(returnedData);
  }, []);

  console.log("SPACING DATA ----", spacingData);

  return (
    <Container>
      {clerkieData
        .filter((card) => card.type === "text_with_image")
        .map((cardData, idx) => {
          return <TextWithImage key={idx} cardData={cardData} />;
        })}
      <SpacingCard spacingData={spacingData[0]} />
      {clerkieData
        .filter((card) => card.type === "text")
        .map((cardData, idx) => {
          return <Text key={idx} cardData={cardData} />;
        })}

      <SpacingCard spacingData={spacingData[1]} />

      {clerkieData
        .filter((card) => card.type === "image")
        .map((cardData, idx) => {
          return <ImageCard key={idx} cardData={cardData} />;
        })}
    </Container>
  );
};

export default Body;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80pt;
  margin: 0px 15px 0px 15px;
`;
