import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const TextWithImage = (props) => {
  const [compHeight, setCompHeight] = useState(100);
  const [dismissView, setDismissView] = useState(true);

  const { popupSwitcher, screenSwitcher, setViewData } = useGlobalContext();

  useEffect(() => {
    if (props.cardData.height) {
      setCompHeight(props.cardData.height);
    } else {
      if (props.cardData.title) {
        const newHeight = parseInt(props.cardData.title.font_size) + 5;
        setCompHeight(newHeight);
      }
      if (props.cardData.title && props.cardData.subtitle) {
        const newHeight =
          parseInt(props.cardData.title.font_size) +
          5 +
          parseInt(props.cardData.subtitle.font_size);
        setCompHeight(newHeight);
      }
    }
  }, [props.cardData]);

  const dismissSwitcher = () => {
    setDismissView(false);
  };

  return (
    <>
      {dismissView && (
        <CardContainer
          cardData={props.cardData}
          compHeight={compHeight}
          onClick={() =>
            props.cardData.click_action === "present_fullscreen"
              ? (screenSwitcher(), setViewData(props.cardData))
              : props.cardData.click_action === "present_popup"
              ? (popupSwitcher(), setViewData(props.cardData))
              : props.cardData.click_action === "dismiss"
              ? dismissSwitcher()
              : ""
          }
        >
          <LeftSide compHeight={compHeight}>
            <RoundedImage
              src={props.cardData.image.src}
              alt="Rounded Image"
              layout="fill"
            ></RoundedImage>
          </LeftSide>
          {props.cardData.subtitle !== undefined ||
          (props.cardData.subtitle !== undefined &&
            props.cardData.subtitle.text.length > 0) ? (
            <RightSide cardData={props.cardData}>
              <CardTitle cardData={props.cardData}>
                {props.cardData.title.text}
              </CardTitle>
              <CardSubtitle cardData={props.cardData}>
                {props.cardData.subtitle.text}
              </CardSubtitle>
            </RightSide>
          ) : (
            <RightSide cardData={props.cardData}>
              <CardTitle cardData={props.cardData}>
                {props.cardData.title.text}
              </CardTitle>
            </RightSide>
          )}
        </CardContainer>
      )}
    </>
  );
};

export default TextWithImage;

const CardContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: start;
  border-radius: 5px;
  width: 100%;
  position: relative;
  flex-direction: row;
  margin: 0px 15px 0px 15px;
  padding: 4px 0px 4px 0px;
  align-items: center;
  align-content: center;
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
    &:hover {
      transform: scale(
        ${(props) => (props.cardData.click_action_data ? 1 : 1)}
      );
    }
  }
`;

const LeftSide = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.compHeight}px;
  height: ${(props) => props.compHeight}px;
`;

const RightSide = styled.div`
  text-align: ${(props) => props.cardData.title.view_alignment};
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid #ccc;
  padding: 5px;
`;

const CardTitle = styled.h2`
  font-size: ${(props) => props.cardData.title.font_size}px;
  font-weight: ${(props) => props.cardData.title.font_weight};
  color: ${(props) => props.cardData.title.color};
  text-align: ${(props) => props.cardData.title.alignment};
  margin: auto;
`;

const CardSubtitle = styled.p`
  font-size: ${(props) =>
    props.cardData.subtitle ? props.cardData.subtitle.font_size : 0}px;
  font-weight: ${(props) =>
    props.cardData.subtitle ? props.cardData.subtitle.font_weight : 0};
  color: ${(props) =>
    props.cardData.subtitle ? props.cardData.subtitle.color : "white"};
  margin: auto;
`;
