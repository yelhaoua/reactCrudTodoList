import { Todos } from "../AllData/Todos";
import MyInputes from "./myui/MyInputes";
import { useState } from "react";
import { FormFunctions, TodosObject } from "@/myContext/InputsContext";
import ListOfTodos from "./ListTodos";
export default function TodoFrom() {
  const [InputsValues, setInputsValues] = useState({
    Todo: "",
    Modaletxt: "",
    Status: false,
  });
  const [TodosValues, setTodos] = useState([]);
  function HandleInputsChanges(e) {
    setInputsValues({ ...InputsValues, [e.target.name]: e.target.value });
  }
  function HandleButtoneClick() {
    if (CheckInputsValues()) {
      let todo = {
        id: crypto.randomUUID(),
        value: InputsValues.Todo,
        status: "w",
      };
      setTodos((prev) => [...prev, todo]);
      setInputsValues({ ...InputsValues, Todo: "" });
    }
  }
  function CheckInputsValues() {
    if (InputsValues.Todo.trim() == "") {
      setInputsValues({
        ...InputsValues,
        Modaletxt: "Pleas Enter A valide Todo",
        Status: true,
      });
      return false;
    } else if (InputsValues.Todo.length > 30 || InputsValues.Todo.length <= 3) {
      setInputsValues({
        ...InputsValues,
        Modaletxt: "Todo Must Be Betwen 3 And 30",
        Status: true,
      });
      return false;
    } else {
      setInputsValues({
        ...InputsValues,
        Modaletxt: "",
        Status: false,
      });
      return true;
    }
  }

  function HandleDeletClick(id) {
    console.log(TodosValues);

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    console.log(TodosValues);
  }
  function HandleUpdateClick(id) {
    console.log(Todos, id);
  }

  function HandleDoneClick(id) {
    console.log(Todos, id);
  }
  return (
    <>
      <h1>React Todo List</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TodosObject.Provider
          value={{ SetTodosValues: setTodos, TodosContextValues: TodosValues }}
        >
          <FormFunctions.Provider
            value={{
              InputesState: InputsValues,
              FunctionChangeState: HandleInputsChanges,
              FunctionAddTodo: HandleButtoneClick,
              FunctionDeletTodo: HandleDeletClick,
              FunctionUpdateTodo: HandleUpdateClick,
              FunctionDoneTodo: HandleDoneClick,
            }}
          >
            {TodosValues.length ? <ListOfTodos /> : null}
            <div>
              <MyInputes InputLable={"Enter Your Name"} InputName={"Todo"} />
            </div>
          </FormFunctions.Provider>
        </TodosObject.Provider>
      </form>
    </>
  );
}
