import React, { useState, useEffect } from "react";
import Popup from "../Modals/Popup";
import styled from "styled-components";

const Text = (props) => {
  // const [showCard, setShowCard] = useState(true);
  const [show, setShow] = useState(false);

  // const [compHeight, setCompHeight] = useState(100);

  // useEffect(() => {
  //   if (props.cardData.height) {
  //     setCompHeight(props.cardData.height);
  //   } else {
  //     if (props.cardData.font_size) {
  //       const newHeight = parseInt(props.cardData.font_size) + 5;
  //       setCompHeight(newHeight);
  //     }
  //   }
  // }, [props.cardData]);

  // console.log("TEXT CARD", props);

  return (
    <>
      <CardContainer
        cardData={props.cardData}
        // compHeight={compHeight}
        // className={`${showCard ? "showCard" : "hideCard"}`}
        onClick={() =>
          props.cardData.click_action_data ? setShow(true) : setShow(false)
        }
      >
        <TextContainer cardData={props.cardData}>
          <ActualText cardData={props.cardData}>
            {props.cardData.text}
          </ActualText>
        </TextContainer>
        {/* <CardDismiss onClick={() => setShowCard(!show)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Close"
            className="icon icon-tabler icon-tabler-x"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </CardDismiss> */}
      </CardContainer>

      {props.cardData.click_action_data && (
        <Popup
          show={show}
          hidePopup={() => setShow(false)}
          cardData={props.cardData.click_action_data}
        />
      )}
    </>
  );
};

export default Text;

const CardContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  width: 70%;
  height: 100%;
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
`;

const TextContainer = styled.div`
  display: flex;
  width: ${(props) => Math.round(props.cardData.width_percent * 100)}%;
  align-items: center;
  justify-content: center;
  text-align: ${(props) => props.cardData.view_alignment};
`;

const ActualText = styled.p`
  font-size: ${(props) =>
    props.cardData.font_size ? props.cardData.font_size : "14"}px;
  font-weight: ${(props) =>
    props.cardData.font_weight ? props.cardData.font_weight : "normal"};
  color: ${(props) => (props.cardData.color ? props.cardData.color : "black")};
  text-align: ${(props) => props.cardData.alignment};
`;

const CardDismiss = styled.div`
  cursor: pointer;
  position: absolute;
  color: black;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Button = styled.button`
  background-color: #0a3066;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 7px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 10px;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;
