import React from "react";
import basicText from "../../../basictext.json";

const Text = () => {
  return (
    <div className="w-11/12 mb-48 sm:w-2/3 sm:mb-12">
      <h1
        className={`mt-2 text-[${basicText.font_size}] font-[${basicText.font_weight}] text-${basicText.alignment} text-[${basicText.color}] cursor-default`}
      >
        {basicText.text}
      </h1>
    </div>
  );
};

export default Text;
