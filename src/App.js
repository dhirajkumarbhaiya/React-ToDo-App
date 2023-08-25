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

  // Function to add ToDo item
  const addTodoItem = () => {
    if (newToDoItem) {
      let newId = toDos.length + 1;
      let newTodoEntry = { id: newId, title: newToDoItem, status: false };
      setToDos([...toDos, newTodoEntry]);
      setNewToDoItem("");
    }
  };

  // Function to delete ToDo item
  const deleteTodoItem = (id) => {
    let newTasks = toDos.filter((task) => task.id !== id);
    setToDos(newTasks);
  };

  // Function to mark ToDo item as done
  const markDone = () => {};

  // Function to cancel update
  const cancelUpdate = () => {};

  // Function to change item for update
  const changeItem = () => {};

  // Function to Update ToDo Item
  const updateTodoItem = () => {};

  return (
    <div className="App  ">
      <h1>React ToDo App</h1>
      <div className="container m-5">
        {/* Input form for Updating existing ToDo entries */}
        <div className="row mb-4">
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col-auto">
            <button className=" btn btn-success">Update</button>
          </div>
          <div className="col-auto">
            <button className=" btn btn-danger">Cancel</button>
          </div>
        </div>

        {/* Input form for new ToDo entries */}
        <div className="row mb-4">
          <div className="col">
            <input
              type="text"
              value={newToDoItem}
              onChange={(e) => setNewToDoItem(e.target.value)}
              className="form-control"
              placeholder="Enter your task here..."
            />
          </div>
          <div className="col-auto">
            <button onClick={addTodoItem} className=" btn btn-success">
              Add Item
            </button>
          </div>
        </div>

        {/* Displaying ToDos */}

        {toDos && toDos.length
          ? ""
          : "Nothing to show, Please add some items..."}

        {toDos &&
          toDos
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className="col taskBg">
                    <div className={task.status ? "done" : ""}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
                    </div>
                    <div className="iconWraper">
                      <span title="Mark as done / not done">
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span title="Edit">
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                      <span
                        title="Delete"
                        onClick={() => deleteTodoItem(task.id)}
                      >
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
