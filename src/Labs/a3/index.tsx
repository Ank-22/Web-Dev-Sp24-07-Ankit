import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";
import Highlight from "./HighLight";


function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <h3>From Assignment 4 - TODO Reducer</h3>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

        <ConditionalOutput />
        <Styles />
        <Classes />
        <JavaScript />
        <PathParameters />
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
      <TodoList />
      </div>
    );
  }
  export default Assignment3;
  