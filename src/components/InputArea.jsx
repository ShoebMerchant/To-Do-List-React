import React, { useState } from "react";

export default function InputArea(props) {
  const [item, setItem] = useState("");
  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  return (
    <div className="form">
      <input
        type="text"
        name="itemToAdd"
        onChange={handleChange}
        value={item}
      />
      <button
        type="submit"
        onClick={() => {
          props.handleClick(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
