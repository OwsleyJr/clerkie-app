import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageCard = (props) => {
  const [show, setShow] = useState(true);

  console.log("IMAGE CARD DATA", props);

  return (
    <CardContainer className={`${show ? "showContainer" : "hideContainer"}`}>
      <ImageContainer>
        <RoundedImage src={props.cardData.src} alt="Full Image" layout="fill" />
      </ImageContainer>
      <CardDismiss onClick={() => setShow(!show)}>
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
  );
};

export default ImageCard;

const CardContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  height: 200px;
  flex-direction: row;
  margin-bottom: 20px;
  position: relative;
`;

const ImageContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 200px;
  position: relative;
`;

const RoundedImage = styled(Image)`
  border: 1px solid #ccc;
  padding: 5px;
  z-index: 5;
`;

const CardDismiss = styled.div`
  cursor: pointer;
  position: absolute;
  color: black;
  top: 0;
  right: 0;
  z-index: 1;
`;
