import * as React from "react";

const StarSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="3 3 30 30"
    width="30"
    height="30"
    {...props}
  >
    <path d="M21.645 15 18 3l-3.645 12H3l9.27 6.615L8.745 33 18 25.965 27.27 33l-3.525-11.385L33 15H21.645Z" />
  </svg>
);

export default StarSvg;
