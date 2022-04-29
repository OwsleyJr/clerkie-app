import React from "react";
import TextWithImage from "../Cards/textWithImage";

const Body = () => {
  return (
    <div className="pt-32 sm:pt-40">
      <div className="container flex flex-col items-center justify-center min-h-full py-12 mx-auto sm:py-24">
        <div className="flex-col items-start justify-center w-11/12 mb-48 sm:w-2/3 sm:flex sm:mb-12">
          <div className="flex flex-row">
            <TextWithImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
