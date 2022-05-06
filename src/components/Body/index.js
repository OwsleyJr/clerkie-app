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
import { motion, AnimatePresence } from "framer-motion";

const Body = () => {
  const { secondFullView, popupView, viewData } = useGlobalContext();

  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Container>
        <FullscreenView>Fullscreen View</FullscreenView>
        {clerkieData.map((cardData, idx) => {
          if (!secondFullView) {
            if (cardData.type === "text_with_image") {
              return <TextWithImage key={idx} cardData={cardData} />;
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
        <AnimatePresence exitBeforeEnter>
          {secondFullView && viewData.click_action === "present_fullscreen" ? (
            <FSTwo cardData={viewData} />
          ) : popupView && viewData.click_action === "present_popup" ? (
            <Overlay
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={modalVariant}
            >
              <Popup cardData={viewData} />
            </Overlay>
          ) : (
            ""
          )}
        </AnimatePresence>
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
  display: flex;
  font-weight: bolder;
  font-size: 80px;
  color: #07b4f2;
  @media (max-width: 768px) {
    font-size: 45px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
