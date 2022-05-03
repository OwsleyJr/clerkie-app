import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Popup from "../Modals/Popup";

const ImageCard = (props) => {
  // const [showCard, setShowCard] = useState(true);
  const [show, setShow] = useState(false);

  const [compHeight, setCompHeight] = useState(150);

  useEffect(() => {
    if (props.cardData.height) {
      setCompHeight(props.cardData.height);
    }
  }, [props.cardData]);

  // console.log("IMAGE CARD", Math.round(props.cardData.width_percent * 100));

  return (
    <>
      <CardContainer
        compHeight={compHeight}
        cardData={props.cardData}
        // className={`${showCard ? "showCard" : "hideCard"}`}
        onClick={() =>
          props.cardData.click_action_data ? setShow(true) : setShow(false)
        }
      >
        <ImageContainer cardData={props.cardData}>
          <SquareImage
            src={props.cardData.src}
            alt="Full Image"
            layout="fill"
          />
        </ImageContainer>
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
