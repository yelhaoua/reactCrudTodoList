import { createContext } from "react";

export let InputsContext = createContext({ ButtoneClick: null });

export let FormFunctions = createContext({
  InputesState: "",
  FunctionChangeState: null,
});
