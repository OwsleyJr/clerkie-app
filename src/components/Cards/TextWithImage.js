import React from "react";
import textimage from "../../../textimage.json";
import Image from "next/image";

const TextWithImage = () => {
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 rounded shadow-lg py-4 px-5 dark:bg-gray-800 bg-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center mb-4 lg:mb-0 mr-10">
              <div className="w-14 h-full bg-cover rounded-md mr-3">
                <Image
                  src={textimage.image.src}
                  className="rounded-full overflow-hidden shadow"
                  width={500}
                  height={500}
                  alt="Rounded Image"
                />
              </div>
              {textimage.subtitle !== undefined ||
              (textimage.subtitle !== undefined &&
                textimage.subtitle.text.length > 0) ? (
                <div>
                  <p className="text-sm font-bold leading-4 text-gray-800 dark:text-gray-100">
                    {textimage.title.text}
                  </p>

                  <p
                    className="text-xs leading-3 text-gray-500 
                            dark:text-gray-400 pt-2"
                  >
                    {textimage.subtitle.text}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-sm font-bold leading-4 text-gray-800 dark:text-gray-100">
                    {textimage.title.text}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextWithImage;
