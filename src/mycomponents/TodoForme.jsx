import { Todos } from "../AllData/Todos";
import MyInputes from "./myui/MyInputes";
import { useState } from "react";
import { FormFunctions, InputsContext } from "@/myContext/InputsContext";
import ListOfTodos from "./ListTodos";
export default function TodoFrom() {
  const [InputsValues, setInputsValues] = useState({
    Todo: "",
    Modaletxt: "",
    Status: false,
  });
  function HandleInputsChanges(e) {
    setInputsValues({ ...InputsValues, [e.target.name]: e.target.value });
  }
  function HandleButtoneClick() {
    if (CheckInputsValues()) {
      let Todo = {
        id: Todos.length + 1,
        value: InputsValues.Todo,
        status: "w",
      };
      Todos.push(Todo);
      console.log(Todos);
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
  return (
    <>
      <h1>React Todo List</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {Todos.length ? <ListOfTodos /> : null}
        <div>
          <FormFunctions.Provider value={{ InputesState: InputsValues }}>
            <InputsContext.Provider
              value={{ ButtoneClick: HandleButtoneClick }}
            >
              <MyInputes
                InputLable={"Enter Your Name"}
                InputName={"Todo"}
                Value={InputsValues.Todo}
                setInputes={HandleInputsChanges}
              />
            </InputsContext.Provider>
          </FormFunctions.Provider>
        </div>
      </form>
    </>
  );
}
