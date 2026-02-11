import { FormFunctions } from "@/myContext/InputsContext";
import { useContext } from "react";

export default function DeletBtn({ className, name, id }) {
  let { FunctionDeletTodo } = useContext(FormFunctions);
  return (
    <>
      <button
        onClick={() => {
          FunctionDeletTodo(id);
        }}
        className={className}
      >
        {name}
      </button>
    </>
  );
}
