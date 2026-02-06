import { Todos } from "@/AllData/Todos";

export default function ListOfTodos() {
  let Todo = Todos.map((el) => {
    return (
      <div key={el.id} className="flex flex-col gap-1">
        <h3>{el.value}</h3>
      </div>
    );
  });

  return <>{Todo}</>;
}
