import { FormFunctions } from "@/myContext/InputsContext";
import { useContext } from "react";

export default function DoneBtn({ className, name, id }) {
  let { FunctionUpdateTodo } = useContext(FormFunctions);
  return (
    <>
      <button
        onClick={() => {
          FunctionUpdateTodo(id);
        }}
        className={className}
      >
        {name}
      </button>
    </>
  );
}
