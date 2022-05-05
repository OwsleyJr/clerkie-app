import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const ImageCard = (props) => {
  const [compHeight, setCompHeight] = useState(150);

  useEffect(() => {
    if (props.cardData.height) {
      setCompHeight(props.cardData.height);
    }
  }, [props.cardData]);

  const { popupSwitcher, screenSwitcher, setViewData } = useGlobalContext();

  return (
    <>
      <CardContainer
        compHeight={compHeight}
        cardData={props.cardData}
        onClick={() =>
          props.cardData.click_action === "present_fullscreen"
            ? (screenSwitcher(), setViewData(props.cardData))
            : props.cardData.click_action === "present_popup"
            ? (popupSwitcher(), setViewData(props.cardData))
            : ""
        }
      >
        <ImageContainer cardData={props.cardData}>
          <SquareImage
            src={props.cardData.src}
            alt="Full Image"
            layout="fill"
          />
        </ImageContainer>
      </CardContainer>
    </>
  );
};

export default ImageCard;

const CardContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  margin: 0px 15px 0px 15px;
  position: relative;
  aspect-ratio: ${(props) => props.cardData.h2w_ratio};
  border-radius: 5px;
  min-height: 180px;
  cursor: ${(props) =>
    props.cardData.click_action_data ? "pointer" : "default"};
  -webkit-tap-highlight-color: transparent;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(
      ${(props) => (props.cardData.click_action_data ? 1.05 : 1)}
    );
  }
  @media (max-width: 768px) {
    width: 85%;
    height: 85%;
  }
`;

const ImageContainer = styled.div`
  height: ${(props) => Math.round(props.cardData.width_percent * 100)}%;
  width: ${(props) => Math.round(props.cardData.width_percent * 100)}%;
  text-align: ${(props) => props.cardData.view_alignment};
`;

const SquareImage = styled(Image)`
  border: 1px solid #ccc;
  padding: 5px;
`;
