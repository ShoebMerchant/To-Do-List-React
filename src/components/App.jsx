import React, { useState } from "react";

function App() {
  const key = Date.now();
  const [list, addToList] = useState([<li key={key}>2 Item</li>]);
  const [item, setItem] = useState("");

  function handleClick(event) {
    if (item) {
      addToList(prevVal => {
        return [...prevVal, <li key={key}>{item}</li>];
      });
      setItem("");
      event.preventDefault();
    }
    event.preventDefault();
    return;
  }

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={handleClick}>
        <div className="form">
          <input
            type="text"
            name="itemToAdd"
            onChange={handleChange}
            value={item}
          />
          <button type="submit">
            <span>Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;
