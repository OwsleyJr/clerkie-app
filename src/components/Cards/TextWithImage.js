import React, { useState, useEffect } from "react";
import textImage from "../../../textimage.json";
import Image from "next/image";

const TextWithImage = () => {
  const [json, setJson] = useState({});
  const [compHeight, setCompHeight] = useState(5);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setJson(textImage);
  }, []);

  useEffect(() => {
    if (textImage.height) {
      setCompHeight(textImage.height);
    } else {
      const newHeight =
        parseInt(textImage.title.font_size) +
        5 +
        parseInt(textImage.subtitle.font_size);
      setCompHeight(newHeight);
    }
  }, []);

  //   console.log("THIS IS THE COMP HEIGHT", json.subtitle.color);

  return (
    <>
      {show && Object.keys(json).length > 0 && compHeight && (
        <div
          className={`w-96 h-${compHeight} rounded shadow-lg px-5 bg-white relative`}
        >
          <div className="flex items-center mb-4 mr-10 h-full">
            <div className={`w-${compHeight} h-full mr-3 relative`}>
              <Image
                src={json.image.src}
                className="rounded-full overflow-hidden shadow"
                layout="fill"
                alt="Rounded Image"
              />
            </div>
            {json.subtitle !== undefined ||
            (json.subtitle !== undefined && json.subtitle.text.length > 0) ? (
              <div>
                <p
                  className={`text-[${json.title.font_size}px] font-${json.title.font_weight} text-[${json.title.color}]`}
                >
                  {json.title.text}
                </p>

                <p
                  className={`text-${json.subtitle.font_size} font-${json.subtitle.font_weight} text-[${json.subtitle.color}]`}
                >
                  {json.subtitle.text}
                </p>
                <div
                  className="cursor-pointer absolute text-gray-800 transition duration-150 ease-in-out top-0 right-0"
                  onClick={() => setShow(!show)}
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
            ) : (
              <div>
                <p
                  className={`text-${json.title.font_size} font-${json.title.font_weight} leading-5 text-[${json.title.color}]`}
                >
                  {json.title.text}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TextWithImage;
