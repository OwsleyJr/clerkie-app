import React, { useState } from "react";
import TextPopup from "../Modals/TextPopup";
import styled from "styled-components";

const Text = (props) => {
  const [showCard, setShowCard] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <CardContainer
        className={`${showCard ? "showCard" : "hideCard"}`}
        onClick={() =>
          props.cardData.click_action_data ? setShow(true) : setShow(false)
        }
      >
        <ActualText cardData={props.cardData}>{props.cardData.text}</ActualText>
        <CardDismiss onClick={() => setShowCard(!show)}>
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
        </CardDismiss>
      </CardContainer>
      <TextPopup
        show={show}
        hidePopup={() => setShow(false)}
        cardData={props.cardData.click_action_data}
      />
    </>
  );
};

export default Text;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  width: 450px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

const ActualText = styled.p`
  font-size: ${(props) => props.cardData.font_size}px;
  font-weight: ${(props) => props.cardData.font_weight};
  color: ${(props) => props.cardData.color};
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
