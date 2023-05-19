import React from "react";
import { PropsWithChildren } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<
  PropsWithChildren<{ items: Todo[]; onRemoveTodo: (id: string) => void }>
> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
