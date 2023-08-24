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
      <div className="container m-5">
        {/* Displaying ToDos */}

        {toDos && toDos.length
          ? ""
          : "Nothing to show, Please add some items..."}

        {toDos &&
          toDos.map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default App;
