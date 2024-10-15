import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import ItemsTodo from "./components/ItemsTodo";

const todoItems = [
  { name: "Buy milk", dueDate: "04/10/2024" },
  { name: "Go to College", dueDate: "04/10/2024" },
  { name: "Like This Video", dueDate: "04/10/2024" },
];

function App() {
  return (
    <div className="todo-container">
      <center>
        <AppName />
        <AddTodo />
        <ItemsTodo todoItems={todoItems} />
      </center>
    </div>
  );
}

export default App;
