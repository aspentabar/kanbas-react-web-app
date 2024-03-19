
import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ChildStateComponent from "./ParentStateComponent";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import TodoList from "../a3/todos/TodoList";
import TodoItem from "../a3/todos/TodoItem";
import TodoForm from "./ReduxExamples/todos/TodoForm";
import { useSelector } from "react-redux";
import { LabState } from "../store";


function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div>
      <h2>Assignment 4</h2>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ChildStateComponent/>
      <ParentStateComponent/>
      <ReduxExamples/>
      <TodoList/>
      <TodoItem/>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

    </div>
  );
}
export default Assignment4;


