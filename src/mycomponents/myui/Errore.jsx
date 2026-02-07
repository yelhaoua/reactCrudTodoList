import { FormFunctions } from "@/myContext/InputsContext";
import { useContext } from "react";

export default function Eroore() {
  let { InputesState } = useContext(FormFunctions);
  return (
    <>
      <div>
        <p className="text-sm text-red-500 p-1">{InputesState.Modaletxt}</p>
      </div>
    </>
  );
}
