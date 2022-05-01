import React, { useState } from "react";
import TextPopup from "../Modals/TextPopup";
import styled from "styled-components";

const Text = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <CardContainer>
        <ActualText cardData={props.cardData}>{props.cardData.text}</ActualText>
        {props.cardData.click_action_data && (
          <Button onClick={() => setShow(true)}>Popup</Button>
        )}
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
`;

const ActualText = styled.p`
  font-size: ${(props) => props.cardData.font_size}px;
  font-weight: ${(props) => props.cardData.font_weight};
  color: ${(props) => props.cardData.color};
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
