import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  //   You need to initialize the following three states:

  // todos: To represent an array of todo items. Initialize it with an empty array [], indicating that there are no todo items initially.
  // headingInput: To represent the value entered by user into an input field for adding a new heading for a todo item. Initialize it as an empty string ''.
  // listInputs: Initialize listInputs as an empty object {}. This state will hold the value of input fields for each todo item individually.

  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});

  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: "" });
    }
  };
  
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };
  

  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {
              setHeadingInput(e.target.value);
            }} // Add onChange event handler to update headingInput state
          />
          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>

      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3> {/* Display the heading here */}
              <button className="delete-button-heading" onClick={handleDeleteTodo}>Delete Heading</button>
            </div>
            <ul>
              {todo.lists.map((list, listIndex) => (
                <li key={listIndex} className="todo_inside_list">
                  <p>{list}</p>
                </li>
              ))}
            </ul>
            <div className="add_list">
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={listInputs[index] || ""}
                onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button
                className="add-list-button"
                onClick={() => handleAddList(index)}
              >
                Add List
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default TodoList;
