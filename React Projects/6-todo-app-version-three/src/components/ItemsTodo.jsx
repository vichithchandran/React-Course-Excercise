import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-Items-store";
import TodoItem from "./TodoItem";

const ItemsTodo = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default ItemsTodo;
