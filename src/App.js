import "./App.css";
import { useStore, actions } from "./store";
import React, { useState, useRef } from "react";
import { deleteAllToDoInput } from "./store/Actions";

function App() {
  const [state, dispatch] = useStore();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(true);

  const { inputToDo, toDo } = state;

  const handleAddToDo = () => {
    inputToDo && dispatch(actions.addToDoInput(inputToDo));
    dispatch(actions.setToDoInput(""));
  };

  const handleDeleteToDo = (index) => {
    dispatch(actions.deleteToDoInput(index));
  };

  const key = useRef();

  const handleEditToDo = (index) => {
    key.current = index;
    setShowUpdate(true);
    setShowAdd(false);
    dispatch(actions.setToDoInput(toDo[index]));
  };

  const handleUpdateToDo = () => {
    setShowUpdate(false);
    setShowAdd(true);
    inputToDo && dispatch(actions.editToDoInput(key.current, inputToDo));
    dispatch(actions.setToDoInput(""));
  };

  const handleDeleteAllToDo = () => {
    dispatch(deleteAllToDoInput(toDo));
  };

  return (
    <div style={{ padding: 50 }}>
      <input
        placeholder="Enter todo..."
        value={inputToDo}
        onChange={(e) => {
          dispatch(actions.setToDoInput(e.target.value));
        }}
      />
      {showAdd && (
        <React.Fragment>
          <button style={{ marginLeft: 20, marginRight: 20 }} onClick={handleAddToDo}>
            Add
          </button>
          <button onClick={handleDeleteAllToDo}>Delete All</button>
        </React.Fragment>
      )}

      {showUpdate && (
        <button onClick={handleUpdateToDo} style={{ marginLeft: 20 }}>
          Update
        </button>
      )}

      <ul>
        {toDo.map((job, index) => (
          <li key={index} style={{ marginTop: 10 }}>
            {job}
            <span className="btn-times" onClick={() => handleDeleteToDo(index)}>
              &times;
            </span>
            <button onClick={() => handleEditToDo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
