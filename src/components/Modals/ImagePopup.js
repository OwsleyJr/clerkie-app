import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const ImagePopup = (props) => {
  //   const [clickData, setClickData] = useState([]);

  //   useEffect(() => {
  //     if (props.cardData) {
  //       setClickData(
  //         props.cardData.data.map((data) => {
  //           return data;
  //         })
  //       );
  //     }
  //   }, [props.cardData]);

  console.log("POP UP DATA", props);

  return (
    <>
      {props.cardData && (
        <CardContainer className={`${props.show ? "showPopup" : "hidePopup"}`}>
          <ImageContainer>
            <RoundedImage
              src={props.cardData.data[0].src}
              alt="Full Image"
              layout="fill"
            />
          </ImageContainer>

          <CardDismiss onClick={() => props.hidePopup()}>
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
      )}
    </>
  );
};

export default ImagePopup;

const CardContainer = styled.div`
  display: flex;
  background-color: black;
  border-radius: 5px;
  width: 250px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: fixed;
  z-index: 7;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
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
  color: white;
  top: 0;
  right: 0;
  z-index: 7;
`;
