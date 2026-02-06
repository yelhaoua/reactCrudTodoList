import { InputsContext } from "@/myContext/InputsContext";
import { useContext } from "react";

export default function MyButton({ className }) {
  let {ButtoneClick} = useContext(InputsContext);
  return (
    <>
      <button
        onClick={() => {
          ButtoneClick()
        }}
        className={className}
      >
        Send
      </button>
    </>
  );
}
