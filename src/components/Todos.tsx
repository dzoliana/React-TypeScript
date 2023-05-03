import React from "react";
import { PropsWithChildren } from "react";
import Todo from "../models/todo";

const Todos: React.FC<PropsWithChildren<{ items: Todo[] }>> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
