import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  let key = 0;
  const [list, addToList] = useState([]);
  const [item, setItem] = useState("");

  function handleClick(event) {
    if (item) {
      addToList(prevVal => [...prevVal, item]);
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
        <ul>
          {list.map(item => {
            key++;
            return <TodoItem key={key} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
