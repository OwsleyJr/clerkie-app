import React, { useState, useEffect } from "react";
import basicText from "../../../basictext.json";

const TextPopup = (props) => {
  const [popupShow, setPopupShow] = useState(props.show);

  useEffect(() => {
    setPopupShow(props.show);
  }, [props.show]);

  const clickData = basicText.click_action_data.data.map((e) => {
    return e;
  });

  console.log(clickData);

  return (
    <>
      <div className={`py-8 ${popupShow ? "block" : "hidden"}`}>
        <div
          role="alert"
          className="mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
        >
          <div className="relative w-11/12 sm:w-8/12 md:w-9/12 bg-gray-800 shadow pt-10 pb-8 rounded">
            <div className="flex flex-col items-center px-4 md:px-12">
              <p className="text-base sm:text-lg md:text-2xl font-bold text-gray-100 text-center">
                {clickData[0].text}
              </p>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 m-3 text-gray-100 transition duration-150 ease-in-out"
              onClick={() => setPopupShow(!popupShow)}
            >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextPopup;
