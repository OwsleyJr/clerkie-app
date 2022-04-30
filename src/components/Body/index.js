import React from "react";
import TextWithImage from "../Cards/TextWithImage";
import Text from "../Cards/Text";

const Body = () => {
  return (
    <div className="pt-32 sm:pt-40">
      <div className="container flex flex-row items-center justify-center min-h-full py-12 mx-auto sm:py-24">
        <div className="flex-row items-start justify-center w-11/12 mb-48 sm:w-2/3 sm:flex sm:mb-12">
          <TextWithImage />
          <Text />
        </div>
      </div>
    </div>
  );
};

export default Body;
