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
  aspect-ratio: ${(props) => props.cardData.h2w_ratio};
  border-radius: 5px;
  height: ${(props) => props.compHeight}px;
  position: relative;
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
`;

const ImageContainer = styled.div`
  height: 100%;
  width: ${(props) => Math.round(props.cardData.width_percent * 100)}%;
  position: absolute;
  text-align: ${(props) => props.cardData.view_alignment};
`;

const SquareImage = styled(Image)`
  border: 1px solid #ccc;
  padding: 5px;
`;

// const CardDismiss = styled.div`
//   cursor: pointer;
//   position: absolute;
//   color: black;
//   top: 0;
//   right: 0;
//   z-index: 7;
// `;

// const Button = styled.button`
//   background-color: #0a3066;
//   border-radius: 5px;
//   border: none;
//   color: white;
//   padding: 7px 25px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin-bottom: 5px;
//   box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
// `;
