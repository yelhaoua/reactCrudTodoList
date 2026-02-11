import { useContext } from "react";
import MyButton from "./AddBtn";
import { FormFunctions, TodosObject } from "@/myContext/InputsContext";
import Eroore from "./Errore";
import AddBtn from "./AddBtn";
export default function MyInputes({ InputName, InputLable }) {
  let { InputesState, FunctionChangeState } = useContext(FormFunctions);

  return (
    <>
      <div className="flex flex-col justify-start items-center w-150 ml-auto mr-auto">
        <label className=" text-md p-1 w-full text-start" htmlFor={InputLable}>
          {InputLable}
        </label>
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
              value={InputesState.Todo}
              placeholder={InputLable}
            />
            <AddBtn
              name="Send"
              className="w-fit px-3.5 rounded-md bg-blue-300 text-black py-1.5 duration-200 ease-in hover:bg-blue-400  hover:text-white"
            />
          </div>
          {InputesState.Modaletxt && <Eroore />}
        </div>
      </div>
    </>
  );
}
