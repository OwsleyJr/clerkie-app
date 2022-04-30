import React, { useState } from "react";
import basicText from "../../../basictext.json";
import TextPopup from "../Modals/TextPopup";

const Text = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-11/12 mb-48 sm:w-2/3 sm:mb-12">
      <h1
        className={`mt-2 cursor-pointer text-[${basicText.font_size}] font-[${basicText.font_weight}] text-${basicText.alignment} text-[${basicText.color}] cursor-default`}
        onClick={() => setShow(!show)}
      >
        {basicText.text}
      </h1>
      <TextPopup className={`${show ? "block" : "hidden"}`} show={show} />
    </div>
  );
};

export default Text;
