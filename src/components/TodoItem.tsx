import classes from "./TodoItem.module.css";
import { PropsWithChildren } from "react";

const TodoItem: React.FC<PropsWithChildren<{ text: string }>> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
