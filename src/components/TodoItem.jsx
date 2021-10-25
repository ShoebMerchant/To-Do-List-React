import React, { useState } from "react";

export default function (props) {
  const [isMouseClick, setMouseClick] = useState(false);

  function handleClick() {
    setMouseClick(prevVal => !prevVal);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isMouseClick && "line-through" }}
    >
      {props.item}
    </li>
  );
}
