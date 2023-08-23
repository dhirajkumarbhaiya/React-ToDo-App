import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  // State for storing ToDo items
  const [toDos, setToDos] = useState([
    { id: 1, title: "task 1", status: false },
    { id: 2, title: "task 2", status: false },
  ]);

  //  Temporary States for creating and updating ToDo Items
  const [newToDoItem, setNewToDoItem] = useState("");
  const [updateItem, setUpdateItem] = useState("");

  // Function to add ToDo
  const addTodo = () => {};

  // Function to delete ToDo
  const deleteTodo = (id) => {};

  // Function to mark ToDo item as done
  const markDone = () => {};

  // Function to cancel update
  const cancelUpdate = () => {};

  // Function to change item for update
  const changeItem = () => {};

  // Function to Update ToDo Item
  const updateTodo = () => {};

  return (
    <div className="App  ">
      <h1>React ToDo App</h1>
    </div>
  );
}

export default App;
