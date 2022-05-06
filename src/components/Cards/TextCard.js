import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const Text = (props) => {
  const [dismissView, setDismissView] = useState(true);
  const { popupSwitcher, screenSwitcher, setViewData, getColor, newColor } =
    useGlobalContext();
  const [cardColor, setCardColor] = useState(props.cardData.background_color);

  const dismissSwitcher = () => {
    setDismissView(false);
  };

  const handleJsonColorChange = () => {
    setCardColor(getColor());
  };

  return (
    <>
      {dismissView && (
        <CardContainer
          cardColor={cardColor}
          cardData={props.cardData}
          onClick={() =>
            props.cardData.click_action === "present_fullscreen"
              ? (screenSwitcher(), setViewData(props.cardData))
              : props.cardData.click_action === "present_popup"
              ? (popupSwitcher(), setViewData(props.cardData))
              : props.cardData.click_action === "dismiss"
              ? dismissSwitcher()
              : props.cardData.click_action === "change_color"
              ? handleJsonColorChange()
              : ""
          }
        >
          <TextContainer cardData={props.cardData}>
            <ActualText cardData={props.cardData}>
              {props.cardData.text}
            </ActualText>
          </TextContainer>
        </CardContainer>
      )}
    </>
  );
};

export default Text;

const CardContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.cardData.background_color ? props.cardColor : "white"};
  border-radius: 5px;
  width: 100%;
  margin: 0px 15px 0px 15px;
  align-items: center;
  justify-content: center;
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
  @media (max-width: 768px) {
    width: 85%;
    text-align: center;
    &:hover {
      transform: scale(
        ${(props) => (props.cardData.click_action_data ? 1 : 1)}
      );
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: ${(props) =>
    props.cardData.view_alignment ? props.cardData.view_alignment : "center"};
`;

const ActualText = styled.p`
  font-size: ${(props) =>
    props.cardData.font_size ? props.cardData.font_size : "20"}px;
  font-weight: ${(props) =>
    props.cardData.font_weight ? props.cardData.font_weight : "normal"};
  color: ${(props) => (props.cardData.color ? props.cardData.color : "black")};
  text-align: ${(props) =>
    props.cardData.alignment ? props.cardData.alignment : "center"};
  width: ${(props) => Math.round(props.cardData.width_percent * 100)}%;
`;
