import { InputsContext } from "@/myContext/InputsContext";
import { useContext } from "react";

export default function MyButton({ className ,  name }) {
  let {ButtoneClick} = useContext(InputsContext);
  return (
    <>
      <button
        onClick={() => {
          ButtoneClick()
        }}
        className={className}
      >
        {name}
      </button>
    </>
  );
}
