import { useContext } from "react";
import MyButton from "./AddBtn";
import { FormFunctions, TodosObject } from "@/myContext/InputsContext";
import Eroore from "./Errore";
import AddBtn from "./AddBtn";
export default function MyInputes({ InputName, InputLable, value }) {
  let { InputesState, FunctionChangeState } = useContext(FormFunctions);

  return (
    <>
      <div className="flex flex-col">
        <label className=" text-md p-1 w-full text-start" htmlFor={InputLable}>
          {InputLable}
        </label>
        <div className="flex flex-col justify-start items-center w-150 ml-auto mr-auto">
          <div className="flex flex-col justify-start items-start w-full">
            <div className="flex justify-between items-center w-full">
              <input
                className="flex-1 p-1 hy-5 mr-1 border-blue-300 border-2 rounded-md focus:outline-2 focus:outline-blue-400 focus:border-0"
                onChange={(e) => {
                  FunctionChangeState(e);
                }}
                type="text"
                name={InputName}
                id={InputLable}
                value={value}
                placeholder={InputLable}
              />
            </div>
            {InputesState.Status && <Eroore />}
          </div>
        </div>
      </div>
    </>
  );
}
