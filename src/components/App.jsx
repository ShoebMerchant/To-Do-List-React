import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [list, addToList] = useState([]);

  function handleClick(item) {
    if (item) {
      addToList(prevVal => [...prevVal, item]);
    }
  }

  function deleteItem(id) {
    addToList(prevVal => {
      return prevVal.filter((el, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea handleClick={handleClick} />
      <div>
        <ul>
          {list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                item={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
