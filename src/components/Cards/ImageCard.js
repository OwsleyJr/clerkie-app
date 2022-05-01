import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import TextPopup from "../Modals/TextPopup";
import ImagePopup from "../Modals/ImagePopup";

const ImageCard = (props) => {
  const [showCard, setShowCard] = useState(true);
  const [show, setShow] = useState(false);

  console.log("IMAGE CARD DATA", props);

  return (
    <>
      <CardContainer
        className={`${showCard ? "showContainer" : "hideContainer"}`}
        onClick={() =>
          props.cardData.click_action_data ? setShow(true) : null
        }
      >
        <ImageContainer>
          <RoundedImage
            src={props.cardData.src}
            alt="Full Image"
            layout="fill"
          />
        </ImageContainer>
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
      {props.cardData.click_action_data &&
      props.cardData.click_action_data.data[0].type === "text" ? (
        <TextPopup
          show={show}
          hidePopup={() => setShow(false)}
          cardData={props.cardData.click_action_data}
        />
      ) : (
        <ImagePopup
          show={show}
          hidePopup={() => setShow(false)}
          cardData={props.cardData.click_action_data}
        />
      )}
    </>
  );
};

export default ImageCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  height: 200px;
  margin-bottom: 20px;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  position: relative;
`;

const RoundedImage = styled(Image)`
  border: 1px solid #ccc;
  padding: 5px;
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
  margin-bottom: 5px;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;
