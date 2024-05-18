import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems, 
      {name: itemName, dueDate: itemDueDate},
    ];
    setTodoItems(newTodoItems)
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems todoItems={todoItems} 
      onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;