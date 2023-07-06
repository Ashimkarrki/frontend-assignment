import React from "react";

const Star = ({ number }) => {
  const wholeNumber = Math.floor(number);
  const repeat = () => {
    let ar = [];
    for (let i = 0; i < wholeNumber; i++) {
      ar.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
            fill="#FFC700"
          />
        </svg>
      );
    }
    return ar;
  };
  return (
    <div className="flex">
      {repeat().map((s, index) => {
        return <div key={index}>{s}</div>;
      })}
      {number >= wholeNumber + 0.5 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z"
            fill="#FFC700"
          />
        </svg>
      )}
    </div>
  );
};

export default Star;
