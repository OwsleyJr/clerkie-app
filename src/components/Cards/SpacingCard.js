import React from "react";
import styled from "styled-components";

const SpacingCard = (props) => {
  return <Spacing spacingData={props.spacingData} />;
};

export default SpacingCard;

const Spacing = styled.div`
  height: ${(props) => (props.spacingData ? props.spacingData.height : "10")}px;
`;
