import { Todos } from "@/AllData/Todos";
import MyButton from "./myui/Mybtn";

export default function ListOfTodos() {
  let Todo = Todos.map((el) => {
    return (
      <div key={el.id} className="flex flex-col gap-1">
        <div>
          <h3>{el.value}</h3>
          <div>
            <MyButton  />
            <MyButton />
            <MyButton />
          </div>
        </div>
      </div>
    );
  });

  return <>{Todo}</>;
}
