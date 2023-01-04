import React, { useState } from "react";

const useInput = (checkValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = checkValue(enteredValue);
  const hasError = enteredValueTouched && !enteredValueIsValid;

  const nameInputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    enteredValue,
    enteredValueIsValid,
    hasError,
    nameInputChangeHandler,
    nameInputBlurHandler,
    reset,
  };
};
export default useInput;
