import React, { useState } from "react";
import TextPopup from "../Modals/TextPopup";
import styled from "styled-components";

const Text = (props) => {
  const [show, setShow] = useState(false);

  console.log("TEXT CARD DATA", show);

  return (
    // <div className="w-11/12 sm:w-2/3">
    //   <h1
    //     className={`mt-2 cursor-pointer text-[${basicText.font_size}] font-[${basicText.font_weight}] text-${basicText.alignment} text-[${basicText.color}] cursor-default`}
    //     onClick={() => setShow(!show)}
    //   >
    //     {basicText.text}
    //   </h1>
    //   <TextPopup className={`${show ? "block" : "hidden"}`} show={show} />
    // </div>

    <CardContainer>
      <ActualText onClick={() => setShow(true)} cardData={props.cardData}>
        {props.cardData.text}
      </ActualText>
      <TextPopup
        show={show}
        hidePopup={() => setShow(false)}
        cardData={props.cardData.click_action_data}
      />
    </CardContainer>
  );
};

export default Text;

const CardContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  width: 450px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 5;
`;

const ActualText = styled.p`
  font-size: ${(props) => props.cardData.font_size}px;
  font-weight: ${(props) => props.cardData.font_weight};
  color: ${(props) => props.cardData.color};
  cursor: pointer;
`;
