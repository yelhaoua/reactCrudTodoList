import { FormFunctions } from "@/myContext/InputsContext";
import { useContext } from "react";

export default function AddBtn({ className, name }) {
  let { FunctionAddTodo } = useContext(FormFunctions);
  return (
    <>
      <button
        onClick={() => {
          FunctionAddTodo();
        }}
        className={className}
      >
        {name}
      </button>
    </>
  );
}
