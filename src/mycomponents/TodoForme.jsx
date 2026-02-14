import { Todos } from "../AllData/Todos";
import MyInputes from "./myui/MyInputes";
import { useState } from "react";
import {
  FormFunctions,
  TodosObject,
  ModaleContext,
} from "@/myContext/InputsContext";
import ListOfTodos from "./ListTodos";
import ModalUpdate from "./myui/UpdateModale";
import AddBtn from "./myui/AddBtn";
import { CheckInputsValues } from "@/utilitis/check";

export default function TodoFrom() {
  let [ModaleUpdate, setMdalUpdate] = useState({ statusModal: false });

  const [InputsValues, setInputsValues] = useState({
    Todo: "",
    Modaletxt: "",
    UpdatedTodo: "",
    UpdatedId: "",
    Status: false,
  });
  const [TodosValues, setTodos] = useState([]);
  function HandleInputsChanges(e) {
    setInputsValues({ ...InputsValues, [e.target.name]: e.target.value });
  }
  // function HandleAddClick() {
  //   if (CheckInputsValues(InputsValues.Todo, setInputsValues)) {
  //     let todo = {
  //       id: crypto.randomUUID(),
  //       value: InputsValues.Todo,

  //       status: "w",
  //     };
  //     setTodos((prev) => [...prev, todo]);
  //     setInputsValues({
  //       ...InputsValues,
  //       Todo: "",
  //       Modaletxt: "",
  //       Status: false,
  //     });
  //   }
  // }

  function HandleDeletClick(id) {
    console.log(TodosValues);

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    console.log(TodosValues);
  }
  function HandleUpdateClick(e) {
    console.log(e.target.name, e.target.value);
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
          <ModaleContext.Provider
            value={{
              ModaleContextValue: ModaleUpdate,
              SetModaleCOntextValues: setMdalUpdate,
            }}
          >
            <FormFunctions.Provider
              value={{
                InputesState: InputsValues,
                FunctionChangeState: HandleInputsChanges,
                FunctionAddTodo: HandleAddClick,
                FunctionDeletTodo: HandleDeletClick,
                FunctionUpdateTodo: HandleUpdateClick,
                FunctionDoneTodo: HandleDoneClick,
              }}
            >
              {TodosValues.length ? <ListOfTodos /> : null}

              <div className="flex justify-center items-end w-full">
                <MyInputes
                  InputLable={"Enter Your Todo"}
                  InputName={"Todo"}
                  value={InputsValues.Todo}
                />
                <AddBtn
                  name="Send"
                  className="w-fit px-3.5 rounded-md bg-blue-300 text-black py-1.5 duration-200 ease-in hover:bg-blue-400  hover:text-white"
                />
              </div>
              {ModaleUpdate.statusModal && <ModalUpdate />}
            </FormFunctions.Provider>
          </ModaleContext.Provider>
        </TodosObject.Provider>
      </form>
    </>
  );
}
