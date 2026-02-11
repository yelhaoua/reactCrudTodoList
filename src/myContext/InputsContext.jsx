import { createContext } from "react";

export let TodosObject = createContext({
  TodosContextValues: [],
  SetTodosValues: null,
});

export let FormFunctions = createContext({
  InputesState: "",
  FunctionChangeState: null,
  FunctionAddTodo: null,
  FunctionUpdateTodo: null,
  FunctionDeletTodo: null,
  FunctionDoneTodo: null,
});
