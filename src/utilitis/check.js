export function CheckInputsValues(InputsValues, setInputsValues) {
  if (InputsValues.trim() == "") {
    return (
      setInputsValues({
        ...InputsValues,
        Modaletxt: "Pleas Enter A valide Todo",
        Status: true,
      }),
      false
    );
  } else if (InputsValues.Todo.length > 30 || InputsValues.Todo.length <= 3) {
    return (
      setInputsValues({
        ...InputsValues,
        Modaletxt: "Todo Must Be Betwen 3 And 30",
        Status: true,
      }),
      false
    );
  } else {
    return (
      setInputsValues({
        ...InputsValues,
        Modaletxt: "",
        Status: false,
      }),
      true
    );
  }
}
