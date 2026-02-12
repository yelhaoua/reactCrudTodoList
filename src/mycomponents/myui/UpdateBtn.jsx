import { FormFunctions, ModaleContext } from "@/myContext/InputsContext";
import { useContext } from "react";
import ModalUpdate from "./UpdateModale";

export default function UpdateBtn({ className, name }) {
  let { FunctionUpdateTodo, FunctionChangeState } = useContext(FormFunctions);
  let { ModaleContextValue, SetModaleCOntextValues } =
    useContext(ModaleContext);
  return (
    <>
      <button
        onClick={(e) => {
          FunctionUpdateTodo(e);
          SetModaleCOntextValues({
            ...ModaleContextValue,
            statusModal: true,
          });
          FunctionChangeState(e);
        }}
        className={className}
      >
        {name}
      </button>
    </>
  );
}
