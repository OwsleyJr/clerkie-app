import React from "react";
import TextWithImage from "../Cards/TextWithImageCard";
import Text from "../Cards/TextCard";
import ImageCard from "../Cards/ImageCard";
import SpacingCard from "../Cards/SpacingCard";
import styled from "styled-components";
import clerkieData from "../../../clerkieData.json";
import FSTwo from "./FSTwo";
import Popup from "../Modals/Popup";
import { useGlobalContext } from "../../context";

const Body = () => {
  const { secondFullView, popupView, viewData } = useGlobalContext();

  return (
    <>
      <Container>
        <FullscreenView>Fullscreen View</FullscreenView>
        {clerkieData.map((cardData, idx) => {
          if (!secondFullView) {
            if (cardData.type === "text_with_image") {
              return <TextWithImage key={idx} cardData={cardData} id={idx} />;
            }
            if (cardData.type === "text") {
              return <Text key={idx} cardData={cardData} />;
            }
            if (cardData.type === "image") {
              return <ImageCard key={idx} cardData={cardData} />;
            }
            if (cardData.type === "space") {
              return <SpacingCard key={idx} cardData={cardData} />;
            }
          }
        })}

        {secondFullView && viewData.click_action === "present_fullscreen" ? (
          <FSTwo cardData={viewData} />
        ) : popupView && viewData.click_action === "present_popup" ? (
          <Popup cardData={viewData} />
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Body;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 600px;
  min-height: 100vh;
  @media (max-width: 768px) {
    min-height: 0;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

const FullscreenView = styled.h1`
  font-weight: bolder;
  font-size: 80px;
  color: #07b4f2;
  @media (max-width: 768px) {
    font-size: 45px;
  }
`;
