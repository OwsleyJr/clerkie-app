import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Popup from "../Modals/Popup";

const TextWithImage = (props) => {
  const [json, setJson] = useState({});
  const [compHeight, setCompHeight] = useState(100);
  // const [showCard, setShowCard] = useState(true);
  const [show, setShow] = useState(false);

  // const [clickData, setClickData] = useState([]);

  // useEffect(() => {
  //   if (props.cardData.click_action_data) {
  //     setClickData(
  //       props.cardData.click_action_data.data.map((data) => {
  //         return data;
  //       })
  //     );
  //   }
  // }, [props.cardData]);

  useEffect(() => {
    setJson(props.cardData);
  }, [props.cardData]);

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

  console.log("THIS IS THE TEXTWITHIMAGECARD", compHeight);

  return (
    <>
      {Object.keys(json).length > 0 && compHeight && (
        <CardContainer
          cardData={props.cardData}
          compHeight={compHeight}
          // className={`${showCard ? "showCard" : "hideCard"}`}
          onClick={() =>
            props.cardData.click_action_data ? setShow(true) : setShow(false)
          }
        >
          <LeftSide>
            <RoundedImage
              src={json.image.src}
              alt="Rounded Image"
              width={compHeight}
              height={compHeight}
            ></RoundedImage>
          </LeftSide>
          {json.subtitle !== undefined ||
          (json.subtitle !== undefined && json.subtitle.text.length > 0) ? (
            <RightSide cardData={props.cardData}>
              <CardTitle cardData={props.cardData}>{json.title.text}</CardTitle>
              <CardSubtitle cardData={props.cardData}>
                {json.subtitle.text}
              </CardSubtitle>
            </RightSide>
          ) : (
            <RightSide cardData={props.cardData}>
              <CardTitle cardData={props.cardData}>{json.title.text}</CardTitle>
            </RightSide>
          )}
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
      )}
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

export default TextWithImage;

const CardContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  height: auto;
  position: relative;
  flex-direction: row;
  margin: 0px 15px 0px 15px;
  padding: 4px 0px 4px 0px;
  align-items: center;
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

const LeftSide = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightSide = styled.div`
  display: flex;
  text-align: ${(props) => props.cardData.title.view_alignment};
  flex-direction: column;
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
`;

const CardSubtitle = styled.p`
  font-size: ${(props) =>
    props.cardData.subtitle ? props.cardData.subtitle.font_size : 0}px;
  font-weight: ${(props) =>
    props.cardData.subtitle ? props.cardData.subtitle.font_weight : 0};
  color: ${(props) =>
    props.cardData.subtitle ? props.cardData.subtitle.color : "white"};
`;

const CardDismiss = styled.div`
  cursor: pointer;
  position: absolute;
  color: black;
  top: 0;
  right: 0;
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
  position: absolute;
  right: 10px;
`;
