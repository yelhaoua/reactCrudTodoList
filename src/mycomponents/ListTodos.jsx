import { Todos } from "@/AllData/Todos";
import MyButton from "./myui/AddBtn";
import { Delete } from "lucide-react";
import { useContext } from "react";
import {
  FormFunctions,
  ModaleContext,
  TodosObject,
} from "@/myContext/InputsContext";
import DeleteBtn from "./myui/DeleteBtn";
import UpdateBtn from "./myui/UpdateBtn";
import DoneBtn from "./myui/DoneBtn";

export default function ListOfTodos() {
  let { TodosContextValues } = useContext(TodosObject);
  let Todo = TodosContextValues.map((el) => {
    return (
      <div key={el.id} className="flex flex-col gap-1">
        <div className="flex w-full p-2 justify-between items-center">
          <h3>{el.value}</h3>
          <div className="flex gap-1">
            <DeleteBtn
              name={"Delete"}
              id={el.id}
              className={
                "w-fit px-3.5 rounded-md bg-red-400 text-black py-1.5 duration-200 ease-in hover:bg-red-700  hover:text-white "
              }
            />
            <UpdateBtn
              name={"Update"}
              id={el.id}
              className={
                "w-fit px-3.5 rounded-md bg-blue-400 text-black py-1.5 duration-200 ease-in hover:bg-blue-700  hover:text-white "
              }
            />
            <DoneBtn
              name={"Done"}
              id={el.id}
              className={
                "w-fit px-3.5 rounded-md bg-green-400 text-black py-1.5 duration-200 ease-in hover:bg-green-700  hover:text-white "
              }
            />
          </div>
        </div>
      </div>
    );
  });

  return <>{Todo}</>;
}
