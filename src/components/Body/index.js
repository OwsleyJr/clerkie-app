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
  const { secondFullView, popupView, viewData, setViewData, viewType } =
    useGlobalContext();

  console.log("BODYVIEW", viewData);

  return (
    <>
      <Container>
        {clerkieData.map((cardData, idx) => {
          if (!secondFullView) {
            console.log("INSIDE MAP FUNC", idx);
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
`;
