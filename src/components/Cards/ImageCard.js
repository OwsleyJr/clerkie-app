import React, { useState } from "react";
import basicImage from "../../../image.json";
import Image from "next/image";

const ImageCard = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div
        className={`relative shadow-lg shadow-black items-center w-32 h-32 border border-white ${
          show ? "block" : "hidden"
        }`}
      >
        <Image src={basicImage.src} layout="fill" alt="Basic Image" />
        <div
          className="cursor-pointer absolute text-gray-100 transition duration-150 ease-in-out top-0 right-0"
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
    </div>
  );
};

export default ImageCard;
