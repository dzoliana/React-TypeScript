import classes from "./TodoItem.module.css";
import { PropsWithChildren } from "react";

const TodoItem: React.FC<
  PropsWithChildren<{ text: string; onRemoveTodo: () => void }>
> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
