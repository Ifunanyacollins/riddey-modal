import React from "react";

function Check(props) {
  return (
    <svg
      width={10}
      height={7}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.914.706a.583.583 0 0 0-.828 0L3.74 5.057 1.914 3.227a.596.596 0 1 0-.828.857l2.24 2.24a.584.584 0 0 0 .828 0l4.76-4.76a.583.583 0 0 0 0-.857Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Check;
