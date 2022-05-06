import React, { useState, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import TextWithImage from "../Cards/TextWithImageCard";
import Text from "../Cards/TextCard";
import ImageCard from "../Cards/ImageCard";
import SpacingCard from "../Cards/SpacingCard";
import { useGlobalContext } from "../../context";
import useClickOutside from "../../hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";

const Popup = (props) => {
  const { popupSwitcher } = useGlobalContext();

  const ref = useRef();

  useClickOutside(ref, () => popupSwitcher());

  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const containerVariant = {
    initial: { top: "-50%", transition: { type: "spring" } },
    isOpen: { top: "50%" },
    exit: { top: "-50%" },
  };

  return (
    <>
      <AnimatePresence>
        <Overlay
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <CardContainer ref={ref} variants={containerVariant}>
            <TitleDiv>
              <Title>Popup View</Title>
            </TitleDiv>
            {props.cardData.click_action_data.data.map((cardData, idx) => {
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
            })}
          </CardContainer>
        </Overlay>
      </AnimatePresence>
    </>
  );
};

export default Popup;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 2px;
  background-color: #1f2128;
  border-radius: 12px;
  width: 35%;
  max-height: 60%;
  padding: 0px 35px 0px 35px;
  margin-top: 20px;
  align-items: center;
  justify-content: start;
  padding-bottom: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 7;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 85%;
    padding: 10px;
    padding-bottom: 30px;
  }
`;

const TitleDiv = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-weight: bolder;
  font-size: 40px;
  color: #07b4f2;
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
