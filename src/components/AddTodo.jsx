import { useState } from "react";

function AddTodo({ onNewItem }){

    const [todoName, setTodoName] = useState();
    const [dueDate, SetDueDate] = useState();

    const handleNameChange = (event) => {
      setTodoName(event.target.value);
    }
    const handleDateChange = (event) => {
      SetDueDate(event.target.value); 
    }

    const handleAddButtonClicked = () => {
      onNewItem(todoName, dueDate);
      SetDueDate("");
      setTodoName("");
    }

    return <div className="container text-center">
        <div className="row todo-row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo here" 
            value={todoName}
            onChange={handleNameChange}/>
          </div>
          <div className="col-4">
            <input type="date"
            value={dueDate}
            onChange={handleDateChange}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success todo-button"
            onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
    </div>
}

export default AddTodo;