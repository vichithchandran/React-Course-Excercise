import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import ItemsTodo from "./components/ItemsTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-Items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="todo-container">
        <center>
          <AppName />
          <AddTodo />
          {<WelcomeMessage />}
          <ItemsTodo />
        </center>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
