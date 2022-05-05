import React, { useState, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import TextWithImage from "../Cards/TextWithImageCard";
import Text from "../Cards/TextCard";
import ImageCard from "../Cards/ImageCard";
import SpacingCard from "../Cards/SpacingCard";
import { useGlobalContext } from "../../context";
import useClickOutside from "../../hooks/useClickOutside";

const Popup = (props) => {
  const { popupSwitcher, popupView } = useGlobalContext();

  const ref = useRef();

  useClickOutside(ref, () => popupSwitcher());

  return (
    <>
      <CardContainer ref={ref}>
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
    </>
  );
};

export default Popup;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f2128;
  border-radius: 10px;
  height: 500px;
  width: 400px;
  margin-top: 20px;
  align-items: center;
  justify-content: start;
  padding-bottom: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 7;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  overflow-y: auto;
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

const CardDismiss = styled.div`
  cursor: pointer;
  position: absolute;
  color: white;
  top: 0;
  right: 0;
  z-index: 7;
`;
