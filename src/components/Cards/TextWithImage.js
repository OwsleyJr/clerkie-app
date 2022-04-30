import React, { useState, useEffect } from "react";
import textImage from "../../../textimage.json";
import Image from "next/image";

const TextWithImage = () => {
  const [json, setJson] = useState({});
  const [compHeight, setCompHeight] = useState(5);

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
      {Object.keys(json).length > 0 && compHeight && (
        <div
          className={`flex items-center justify-center py-8 px-4 h-[${compHeight}rem]`}
        >
          <div className="md:w-96 rounded shadow-lg py-1 px-5 bg-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center mb-4 lg:mb-0 mr-10 h-10">
                <div className="w-10 h-full rounded-md mr-3 relative">
                  <Image
                    src={json.image.src}
                    className="rounded-full overflow-hidden shadow"
                    layout="fill"
                    alt="Rounded Image"
                  />
                </div>
                {json.subtitle !== undefined ||
                (json.subtitle !== undefined &&
                  json.subtitle.text.length > 0) ? (
                  <div>
                    <p
                      className={`text-[${json.title.font_size}px] font-${json.title.font_weight} leading-4 text-[${json.title.color}]`}
                    >
                      {json.title.text}
                    </p>

                    <p
                      className={`text-${json.subtitle.font_size} font-${json.subtitle.font_weight} leading-3 text-[${json.subtitle.color}] 
                            pt-2`}
                    >
                      {json.subtitle.text}
                    </p>
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
          </div>
        </div>
      )}
    </>
  );
};

export default TextWithImage;
